# Turing Machines for Common Code Patterns
This repo contains Turing machine style state machines that are react-able, for common code patterns such as:
* `Task` encapsulates arbitrary async work and is react-able, cancellable, immediately restartable.
* `MasterDetail` allows guarded alternation between master (item list) and detail (item selection) states. Uses a user provided item loader for async fetching of items (uses `Task`).

## Task

The `Task` constructor accepts the following parameters:
* `job` `(request) => Promise<response>` The encapsulated `work`. Receives an optional request passed to `start()`. Must return a promise that resolves with the the result of the work on completion, or rejects with an error reason on failure.  
* `timeout` An optional timeout (milliseconds). If the `job` takes longer than the timeout interval, the `Task` will terminate in the `timeout` state.

`Task` is initially in the `idle` state.

### Task Methods
* `start(request): Promise<RunningJob|undefined>` Begins the encapsulated `job` with the the optional request. Does nothing if the task is not `idle`. To restart a `Task` that has completed (in a `done`), you must first reset it `reset()`.

`start()` returns a promise which resolves with a RunningJob object if the task was started successfully (else, undefined).
The returned object can be used to complete `done()`, cancel `cancel()` or fail `error()` the started job. This is optional, because `Task` will monitor the job's result to call `done()` or `error()`.
* `reset()` Resets the task. Does nothing if the is `idle`. If the task is `running`, the task is firs  cancelled. After reset, a task can be started again with new parameters by calling `start()`.
* `done(sessionId, result)` Call to complete the current job. Must pass the current `sessionId` which ensures stale results are rejected.
* `cancel(sessionId, reason)` Cancel the current running job with an optional reason of cancellation.
* `error(sessionId, reason)` Terminates the running job with the reason of failure.

### Events
All events receive the current task context
* `init` When the task enters `idle`
* `run` When the task enters `running`
* `done` When the task complets successfully
* `error` When the task terminates with an error
* `cancel` When the task is cancelled


### Task Context
* `sessionId` String -- the current session id
* `request` Object -- supplied via `start()`
* `result` Object -- Task result supplied via `done()`
* `errors` Array<> -- Task errors (error or cancel)

## MasterDetail
