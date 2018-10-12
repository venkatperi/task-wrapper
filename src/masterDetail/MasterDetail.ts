//  Copyright 2018, Venkat Peri.
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the
//  "Software"), to deal in the Software without restriction, including
//  without limitation the rights to use, copy, modify, merge, publish,
//  distribute, sublicense, and/or sell copies of the Software, and to permit
//  persons to whom the Software is furnished to do so, subject to the
//  following conditions:
//
//  The above copyright notice and this permission notice shall be included
//  in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
//  NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
//  USE OR OTHER DEALINGS IN THE SOFTWARE.

import { Handlers, keepState, nextState, StateMachine } from 'gen-statem'
import { Task } from "../task/Task"
import { TaskData } from "../task/TaskData"
import { IndexedItem } from "./IndexedItem"
import { MasterDetailData } from "./MasterDetailData"
import { MasterDetailOpts } from "./MasterDetailOpts"

export type LoadTask<E, V> = Task<MasterDetailData<E, V>, IndexedItem<V>>
export type LoadTaskData<E, V> = TaskData<MasterDetailData<E, V>, IndexedItem<V>>

export class MasterDetail<E, V> extends StateMachine<MasterDetailData<E, V>> {

    handlers: Handlers<MasterDetailData<E, V>> = [

        ['cast#setItems#*_', ({event}) =>
            nextState('master')
                .data({items: {$set: event.extra}})],

        ['enter#*_#master', ({data}) => keepState()
            .emit('master', data)
            .data({
                selectedIndex: {$set: null},
                selectedItem: {$set: null},
            })],

        ['cast#select/:index#master', ({data, args}) =>
            nextState('loading')
                .data({selectedIndex: {$set: Number(args.index)}})],

        ['enter#*_#loading', ({data}) =>
            keepState()
                .emit('load', data)],

        // postpone select from state other than master
        ['cast#select/*_#*_', () =>
            nextState('master')
                .postpone()],

        ['cast#loaded/:itemId#loading', ({data, args, event}) =>
            data.selectedIndex === Number(args.itemId)
            ? nextState('detail').data({selectedItem: {$set: event.extra}})
            : keepState()],

        ['enter#*_#detail', ({data}) => {
            const res = keepState().emit('detail', data)
            return data.detailTimeout
                   ? res.stateTimeout(data.detailTimeout) : res
        }],

        [['stateTimeout#*_#detail',
            'cast#exit#detail'], 'master']
    ]

    initialData: MasterDetailData<E, V> = {}

    initialState = 'master'

    private loader: LoadTask<E, V>

    constructor(opts: MasterDetailOpts<E, V>) {
        super()

        if (!opts.itemLoader) {
            throw new Error("Argument missing: itemLoader")
        }

        if (opts.detailTimeout) {
            this.initialData.detailTimeout = opts.detailTimeout
        }

        if (opts.items) {
            this.initialData.items = opts.items
        }

        this.loader = new Task<MasterDetailData<E, V>, IndexedItem<V>>({
            job: async data => {
                if (data.selectedIndex === undefined || !data.items) {
                    throw new Error('Invalid selection')
                }

                return ({
                    index: data.selectedIndex,
                    item: await
                        opts.itemLoader(data.items[data.selectedIndex])
                })
            },
            timeout: opts.loadTimeout,
        })

        this.loader.on('done', ({result}: LoadTaskData<E, V>) => {
            if (result) {
                this.cast({loaded: result.index}, result.item)
            }
        })
            .on('error', console.log)

        this.on('load', req => {
            return this.loader.restart(req)
        })

        this.startSM()
    }

    setItems(items: Array<E>) {
        this.cast('setItems', items)
    }

    select(index: number) {
        this.cast({select: index})
    }

    exit() {
        this.cast('exit')
    }
}

