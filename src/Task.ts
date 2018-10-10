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
import { Controllable } from "./Controllable"
import { RunningJob } from "./RunningJob"
import { TaskData } from "./TaskData"
import { TaskOptions } from "./TaskOptions"
import { Job } from "./types"
import  uniqid = require('uniqid')


/**
 * Encapsulates arbitrary 'work'. Provides an
 * @event Task#event:cancel
 * @type TaskData
 * Fired when a running job is cancelled.
 */
export class Task<E, R>
    extends StateMachine<TaskData<E, R>>
    implements Controllable<E, R>, TaskOptions<E, R> {

    /**
     * @hidden
     */
    handlers: Handlers<TaskData<E, R>> = [

        // clear all data when we enter 'idle'
        // set the session id so that we know if any
        // results or errors belong to this session and
        // are not from earlier invocations
        ['enter#*_#idle', () => keepState()
            .emit('init')
            .data({
                errors: {$set: []},
                progress: {$set: 0},
                request: {$set: null},
                result: {$set: null},
                sessionId: {$set: uniqid()}
            })],

        // start kicks off the task. Record the request.
        ['call/:from#start#:state', ({data, args, event}) =>
            args.state === 'idle'
            ? nextState('running')
                .data({request: {$set: event.extra}})
                .reply(args.from, data.sessionId)
            : keepState().reply(args.from, undefined)],

        // emit 'run' to tell the user to start the job
        // also start the stateTimeout if a timeout is set
        ['enter#*_#running', ({data}) =>
            (x => !data.timeout ? x : x.stateTimeout(data.timeout))(
                keepState().emit('run', data))],

        ['cast#update/:sessionId#running', ({data, args, event}) =>
            (x => args.sessionId !== data.sessionId ? x :
                  x.data({progress: {$set: event.extra}})
                   .emit('progress', event.extra))(keepState())],

        // make sure the result is for this session,
        // record the result and go to 'done/done'
        ['cast#done/:sessionId#running', ({data, args, event}) =>
            args.sessionId === data.sessionId
            ? nextState('done/done').data({result: {$set: event.extra}})
            : keepState()],

        // if we get a reset during running, postpone the event
        // and go to cancel. Cancel will handle the reset
        ['cast#reset#running', () =>
            nextState('done/cancel')
                .postpone()],

        // handle cancel
        ['cast#cancel#running', ({event}) =>
            nextState('done/cancel')
                .data({errors: {$push: [event.extra]}})],

        // handle errors, but make sure its for this session
        ['cast#error/:sessionId#running', ({args, data, event}) =>
            args.sessionId === data.sessionId
            ? nextState('done/error').data({errors: {$push: [event.extra]}})
            : keepState()],

        // when we enter any 'done/*' state, notify the user
        ['enter#*_#done/:status', ({args, data}) =>
            keepState()
                .emit(args.status, data)],

        // to reset, from any 'done/*' state, go back to idle
        ['cast#reset#done/*_', 'idle'],

        // timeout in running if neither done(), error() or cancel()
        // are called
        ['stateTimeout#*_#running', 'done/timeout']
    ]

    /**
     * @hidden
     * @type {{}}
     */
    initialData: TaskData<E, R> = {}

    /**
     * @hidden
     *
     * @type {string}
     */
    initialState = 'idle'


    /**
     *
     */
    job?: Job<E, R>

    /**
     * @hidden
     *
     */
    timeout?: number | string


    /**
     *
     * @param opts
     */
    constructor(opts?: TaskOptions<E, R>) {
        super()
        Object.assign(this, opts)
        this.initialData.timeout = this.timeout
        if (!this.job) {
            throw new Error('Job must be specified')
        }
        this.exec(this.job)
        this.startSM()
    }

    /**
     *
     * @param reason
     */
    cancel(reason?: any): void {
        this.cast('cancel', reason)
    }

    /**
     *
     */
    reset(): void {
        this.cast('reset')
    }

    /**
     *
     * @param request
     */
    restart(request?: E): Promise<RunningJob<E, R>> {
        this.reset()
        return this.start(request)
    }

    /**
     * Starts the task.
     * @param request
     * @return {Promise<RunningJob<E, R>>}
     */
    async start(request?: E): Promise<RunningJob<E, R>> {
        let sessionId = await this.call('start', request)
        if (typeof sessionId !== 'string') {
            throw new Error("Unable to start task")
        }
        return new RunningJob<E, R>(sessionId, this)
    }

    /**
     *
     * @param sessionId
     * @param result
     * @return {this<E, R>}
     */
    done(sessionId: string, result ?: R):
        void {
        this.cast({done: sessionId}, result)
    }

    /**
     *
     * @param sessionId
     * @param reason
     * @return {this<E, R>}
     */
    error(sessionId: string, reason ?: any): void {
        this.cast({error: sessionId}, reason)
    }

    /**
     *
     * @param sessionId
     * @param progress
     */
    update(sessionId: string, progress: number): void {
        this.cast({update: sessionId}, progress)
    }

    /**
     *
     * @param fn
     */
    private exec(fn: Job<E, R>): void {
        this.on('run', async ({sessionId, request}) => {
            try {
                let res = await fn(request)
                this.done(sessionId, res)
            }
            catch (e) {
                this.error(sessionId, e)
            }
        })
    }
}


