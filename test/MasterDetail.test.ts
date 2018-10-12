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

import { assert, expect } from 'chai'
import { State } from "gen-statem"
import { stateRoute } from "gen-statem/dist/src/State"
import delay from "gen-statem/dist/src/util/delay"
import 'mocha'
import { MasterDetail } from "../src/masterDetail/MasterDetail"

let sm
let events

type Item = {
    name: string,
}

let items: Array<Item> = [
    {name: 'first'},
    {name: 'second'},
    {name: 'third'}
]


function stateIs(s: State) {
    it(`in state "${s}"`, async () =>
        expect(stateRoute(await sm.getState())).to.eq(s))
}


function loadedValueIs(v?: string | null) {
    it(`loaded value is "${v}"`, async () =>
        expect((await sm.getData()).selectedItem).to.eq(v))
}

function eventFired(name: string, time: number = 10) {
    it(`event fired: "${name}"`, async () => {
        await delay(time)
        assert(events[name], `${name} didn't fire`)
    })
}

// function eventDidNotFire(name: string, time: number = 10) {
//     it(`event didn't fire: "${name}"`, async () => {
//         await delay(time)
//         assert(!events[name], `${name} fired`)
//     })
// }

function selectItem(index: number, v: string, afterExit?: () => void) {
    describe(`select item ${index}`, () => {
        beforeEach(() => sm.select(index))
        stateIs('loading')
        eventFired('load')
        describe(`item ${index} loaded`, () => {
            beforeEach(async () => await delay(150))
            stateIs('detail')
            eventFired('detail')
            loadedValueIs(v)

            describe(`exit item ${index}`, () => {
                beforeEach(async () => {
                    await delay(100)
                    sm.exit()
                    await delay(10)
                })

                stateIs('master')
                eventFired('master')
                loadedValueIs(null)

                if (afterExit) {
                    afterExit()
                }
            })
        })
    })
}

describe('Master Detail', () => {
    beforeEach(() => {
        events = {}
        sm = new MasterDetail({
            itemLoader: async opts => {
                await delay(100)
                return opts.name.toUpperCase()
            },
            items,
            loadTimeout: 200,
        })
        for (let e of ['master', 'load', 'detail']) {
            sm.on(e, () => events[e] = true)
        }
    })

    describe("in the beginning", () => {
        eventFired('master')

        selectItem(0, "FIRST", () => {
            selectItem(1, "SECOND")
        })
    })
})


