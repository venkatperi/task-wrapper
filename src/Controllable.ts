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

import { RunningJob } from "./RunningJob"

/**
 * Methods for controlling a task
 *
 * @event Controllable#cancel
 * @params TaskData
 *
 * @event Controllable#run
 * @params TaskData
 *
 */
export interface Controllable<E, R> {

    /**
     * Requests the task to start the underlying job with the
     * supplied parameters. The request is ignored if the task
     * is already running.
     *
     * Returns a RunningJob (promise) which can be used to complete the job
     * (update / done / error).
     *
     * @fires Controllable#run to instruct the job to start
     *
     * @param request
     */
    start(request?: E): Promise<RunningJob<E, R>>

    /**
     * Instructs the task to terminate it's job if the job is currently running.
     *
     * @fires Controllable#cancel when the job is cancelled.
     * @param reason
     */
    cancel(reason?: any): void

    /**
     * Instructs the task to revert to its 'idle' state, at which point
     * the Task can be restarted.
     *
     * If the task is running a job, the job is first cancelled (cancel()).
     */
    reset(): void

    /**
     * Resets the task (cancelling any running job) and starts it anew with
     * the supplied request.
     *
     * @param request
     */
    restart(request?: E): void
}
