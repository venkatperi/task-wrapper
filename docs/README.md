
Index
-----

### Classes

*   [RunningJob](classes/runningjob.md)

### Interfaces

*   [Completable](interfaces/completable.md)
*   [TaskOptions](interfaces/taskoptions.md)

### Type aliases

*   [Job](#job)
*   [TaskData](#taskdata)

### Events

*   [Controllable](#controllable)
*   [Task](#task)

* * *

Type aliases
------------

### Job

**Ƭ Job**: _`function`_

#### Type declaration

▸(request?: _E_): `R` | `Promise`<`R`\>

**Parameters:**

Param

Type

`Optional` request

E

**Returns:** `R` | `Promise`<`R`\>

* * *

### TaskData

**Ƭ TaskData**: _`object`_

#### Type declaration

`Optional` errors: `[]`

`Optional` progress: `undefined` | `number`

`Optional` request: E

`Optional` result: R

`Optional` sessionId: `undefined` | `string`

`Optional` timeout: `Timeout`

* * *

Events
------

### Controllable

**Controllable**:

Methods for controlling a task _**params**_: TaskData

_**params**_: TaskData

### cancel

▸ **cancel**(reason?: _`any`_): `void`

Instructs the task to terminate it's job if the job is currently running. _**fires**_: Controllable#cancel when the job is cancelled.

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### reset

▸ **reset**(): `void`

Instructs the task to revert to its 'idle' state, at which point the Task can be restarted.

If the task is running a job, the job is first cancelled (cancel()).

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `void`

Resets the task (cancelling any running job) and starts it anew with the supplied request.

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `void`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Requests the task to start the underlying job with the supplied parameters. The request is ignored if the task is already running.

Returns a RunningJob (promise) which can be used to complete the job (update / done / error). _**fires**_: Controllable#run to instruct the job to start

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

* * *

### Task

**Task**:

Encapsulates arbitrary 'work'. Provides an _**type**_: TaskData Fired when a running job is cancelled.

### constructor

⊕ **new Task**(opts?: _[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>_): [Task](#task)

**Parameters:**

Param

Type

Description

`Optional` opts

[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>

**Returns:** [Task](#task)

* * *

### `<Optional>` dataProxy

**● dataProxy**: _`DataProxy`<[TaskData](#taskdata)<`E`, `R`\>>_

* * *

### `<Optional>` job

**● job**: _[Job](#job)<`E`, `R`\>_

* * *

### addListener

▸ **addListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### cancel

▸ **cancel**(reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### done

▸ **done**(sessionId: _`string`_, result?: _R_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` result

R

\-

**Returns:** `void`

* * *

### emit

▸ **emit**(event: \* `string` | `symbol`_, ...args: \*`any`\[\]_): `boolean`

**Parameters:**

Param

Type

event

`string` | `symbol`

`Rest` args

`any`\[\]

**Returns:** `boolean`

* * *

### error

▸ **error**(sessionId: _`string`_, reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` reason

`any`

\-

**Returns:** `void`

* * *

### eventNames

▸ **eventNames**(): `Array`< `string` | `symbol`\>

**Returns:** `Array`< `string` | `symbol`\>

* * *

### getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

* * *

### listenerCount

▸ **listenerCount**(type: \* `string` | `symbol`\*): `number`

**Parameters:**

Param

Type

type

`string` | `symbol`

**Returns:** `number`

* * *

### listeners

▸ **listeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### off

▸ **off**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### on

▸ **on**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### once

▸ **once**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependListener

▸ **prependListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependOnceListener

▸ **prependOnceListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### rawListeners

▸ **rawListeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### removeAllListeners

▸ **removeAllListeners**(event?: \* `string` | `symbol`\*): `this`

**Parameters:**

Param

Type

`Optional` event

`string` | `symbol`

**Returns:** `this`

* * *

### removeListener

▸ **removeListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### reset

▸ **reset**(): `void`

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### setMaxListeners

▸ **setMaxListeners**(n: _`number`_): `this`

**Parameters:**

Param

Type

n

`number`

**Returns:** `this`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Starts the task.

**Parameters:**

Param

Type

Description

`Optional` request

E

\-

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### update

▸ **update**(sessionId: _`string`_, progress: _`number`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

progress

`number`

**Returns:** `void`

* * *

* * *

Index
-----

### Classes

*   [RunningJob](classes/runningjob.md)

### Interfaces

*   [Completable](interfaces/completable.md)
*   [TaskOptions](interfaces/taskoptions.md)

### Type aliases

*   [Job](#job)
*   [TaskData](#taskdata)

### Events

*   [Controllable](#controllable)
*   [Task](#task)

* * *

Type aliases
------------

### Job

**Ƭ Job**: _`function`_

#### Type declaration

▸(request?: _E_): `R` | `Promise`<`R`\>

**Parameters:**

Param

Type

`Optional` request

E

**Returns:** `R` | `Promise`<`R`\>

* * *

### TaskData

**Ƭ TaskData**: _`object`_

#### Type declaration

`Optional` errors: `[]`

`Optional` progress: `undefined` | `number`

`Optional` request: E

`Optional` result: R

`Optional` sessionId: `undefined` | `string`

`Optional` timeout: `Timeout`

* * *

Events
------

### Controllable

**Controllable**:

Methods for controlling a task _**params**_: TaskData

_**params**_: TaskData

### cancel

▸ **cancel**(reason?: _`any`_): `void`

Instructs the task to terminate it's job if the job is currently running. _**fires**_: Controllable#cancel when the job is cancelled.

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### reset

▸ **reset**(): `void`

Instructs the task to revert to its 'idle' state, at which point the Task can be restarted.

If the task is running a job, the job is first cancelled (cancel()).

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `void`

Resets the task (cancelling any running job) and starts it anew with the supplied request.

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `void`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Requests the task to start the underlying job with the supplied parameters. The request is ignored if the task is already running.

Returns a RunningJob (promise) which can be used to complete the job (update / done / error). _**fires**_: Controllable#run to instruct the job to start

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

* * *

### Task

**Task**:

Encapsulates arbitrary 'work'. Provides an _**type**_: TaskData Fired when a running job is cancelled.

### constructor

⊕ **new Task**(opts?: _[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>_): [Task](#task)

**Parameters:**

Param

Type

Description

`Optional` opts

[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>

**Returns:** [Task](#task)

* * *

### `<Optional>` dataProxy

**● dataProxy**: _`DataProxy`<[TaskData](#taskdata)<`E`, `R`\>>_

* * *

### `<Optional>` job

**● job**: _[Job](#job)<`E`, `R`\>_

* * *

### addListener

▸ **addListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### cancel

▸ **cancel**(reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### done

▸ **done**(sessionId: _`string`_, result?: _R_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` result

R

\-

**Returns:** `void`

* * *

### emit

▸ **emit**(event: \* `string` | `symbol`_, ...args: \*`any`\[\]_): `boolean`

**Parameters:**

Param

Type

event

`string` | `symbol`

`Rest` args

`any`\[\]

**Returns:** `boolean`

* * *

### error

▸ **error**(sessionId: _`string`_, reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` reason

`any`

\-

**Returns:** `void`

* * *

### eventNames

▸ **eventNames**(): `Array`< `string` | `symbol`\>

**Returns:** `Array`< `string` | `symbol`\>

* * *

### getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

* * *

### listenerCount

▸ **listenerCount**(type: \* `string` | `symbol`\*): `number`

**Parameters:**

Param

Type

type

`string` | `symbol`

**Returns:** `number`

* * *

### listeners

▸ **listeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### off

▸ **off**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### on

▸ **on**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### once

▸ **once**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependListener

▸ **prependListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependOnceListener

▸ **prependOnceListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### rawListeners

▸ **rawListeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### removeAllListeners

▸ **removeAllListeners**(event?: \* `string` | `symbol`\*): `this`

**Parameters:**

Param

Type

`Optional` event

`string` | `symbol`

**Returns:** `this`

* * *

### removeListener

▸ **removeListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### reset

▸ **reset**(): `void`

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### setMaxListeners

▸ **setMaxListeners**(n: _`number`_): `this`

**Parameters:**

Param

Type

n

`number`

**Returns:** `this`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Starts the task.

**Parameters:**

Param

Type

Description

`Optional` request

E

\-

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### update

▸ **update**(sessionId: _`string`_, progress: _`number`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

progress

`number`

**Returns:** `void`

* * *

* * *

Index
-----

### Classes

*   [RunningJob](classes/runningjob.md)

### Interfaces

*   [Completable](interfaces/completable.md)
*   [TaskOptions](interfaces/taskoptions.md)

### Type aliases

*   [Job](#job)
*   [TaskData](#taskdata)

### Events

*   [Controllable](#controllable)
*   [Task](#task)

* * *

Type aliases
------------

### Job

**Ƭ Job**: _`function`_

#### Type declaration

▸(request?: _E_): `R` | `Promise`<`R`\>

**Parameters:**

Param

Type

`Optional` request

E

**Returns:** `R` | `Promise`<`R`\>

* * *

### TaskData

**Ƭ TaskData**: _`object`_

#### Type declaration

`Optional` errors: `[]`

`Optional` progress: `undefined` | `number`

`Optional` request: E

`Optional` result: R

`Optional` sessionId: `undefined` | `string`

`Optional` timeout: `Timeout`

* * *

Events
------

### Controllable

**Controllable**:

Methods for controlling a task _**params**_: TaskData

_**params**_: TaskData

### cancel

▸ **cancel**(reason?: _`any`_): `void`

Instructs the task to terminate it's job if the job is currently running. _**fires**_: Controllable#cancel when the job is cancelled.

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### reset

▸ **reset**(): `void`

Instructs the task to revert to its 'idle' state, at which point the Task can be restarted.

If the task is running a job, the job is first cancelled (cancel()).

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `void`

Resets the task (cancelling any running job) and starts it anew with the supplied request.

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `void`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Requests the task to start the underlying job with the supplied parameters. The request is ignored if the task is already running.

Returns a RunningJob (promise) which can be used to complete the job (update / done / error). _**fires**_: Controllable#run to instruct the job to start

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

* * *

### Task

**Task**:

Encapsulates arbitrary 'work'. Provides an _**type**_: TaskData Fired when a running job is cancelled.

### constructor

⊕ **new Task**(opts?: _[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>_): [Task](#task)

**Parameters:**

Param

Type

Description

`Optional` opts

[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>

**Returns:** [Task](#task)

* * *

### `<Optional>` dataProxy

**● dataProxy**: _`DataProxy`<[TaskData](#taskdata)<`E`, `R`\>>_

* * *

### `<Optional>` job

**● job**: _[Job](#job)<`E`, `R`\>_

* * *

### addListener

▸ **addListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### cancel

▸ **cancel**(reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### done

▸ **done**(sessionId: _`string`_, result?: _R_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` result

R

\-

**Returns:** `void`

* * *

### emit

▸ **emit**(event: \* `string` | `symbol`_, ...args: \*`any`\[\]_): `boolean`

**Parameters:**

Param

Type

event

`string` | `symbol`

`Rest` args

`any`\[\]

**Returns:** `boolean`

* * *

### error

▸ **error**(sessionId: _`string`_, reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` reason

`any`

\-

**Returns:** `void`

* * *

### eventNames

▸ **eventNames**(): `Array`< `string` | `symbol`\>

**Returns:** `Array`< `string` | `symbol`\>

* * *

### getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

* * *

### listenerCount

▸ **listenerCount**(type: \* `string` | `symbol`\*): `number`

**Parameters:**

Param

Type

type

`string` | `symbol`

**Returns:** `number`

* * *

### listeners

▸ **listeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### off

▸ **off**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### on

▸ **on**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### once

▸ **once**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependListener

▸ **prependListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependOnceListener

▸ **prependOnceListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### rawListeners

▸ **rawListeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### removeAllListeners

▸ **removeAllListeners**(event?: \* `string` | `symbol`\*): `this`

**Parameters:**

Param

Type

`Optional` event

`string` | `symbol`

**Returns:** `this`

* * *

### removeListener

▸ **removeListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### reset

▸ **reset**(): `void`

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### setMaxListeners

▸ **setMaxListeners**(n: _`number`_): `this`

**Parameters:**

Param

Type

n

`number`

**Returns:** `this`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Starts the task.

**Parameters:**

Param

Type

Description

`Optional` request

E

\-

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### update

▸ **update**(sessionId: _`string`_, progress: _`number`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

progress

`number`

**Returns:** `void`

* * *

* * *

Index
-----

### Classes

*   [RunningJob](classes/runningjob.md)

### Interfaces

*   [Completable](interfaces/completable.md)
*   [TaskOptions](interfaces/taskoptions.md)

### Type aliases

*   [Job](#job)
*   [TaskData](#taskdata)

### Events

*   [Controllable](#controllable)
*   [Task](#task)

* * *

Type aliases
------------

### Job

**Ƭ Job**: _`function`_

#### Type declaration

▸(request?: _E_): `R` | `Promise`<`R`\>

**Parameters:**

Param

Type

`Optional` request

E

**Returns:** `R` | `Promise`<`R`\>

* * *

### TaskData

**Ƭ TaskData**: _`object`_

#### Type declaration

`Optional` errors: `[]`

`Optional` progress: `undefined` | `number`

`Optional` request: E

`Optional` result: R

`Optional` sessionId: `undefined` | `string`

`Optional` timeout: `Timeout`

* * *

Events
------

### Controllable

**Controllable**:

Methods for controlling a task _**params**_: TaskData

_**params**_: TaskData

### cancel

▸ **cancel**(reason?: _`any`_): `void`

Instructs the task to terminate it's job if the job is currently running. _**fires**_: Controllable#cancel when the job is cancelled.

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### reset

▸ **reset**(): `void`

Instructs the task to revert to its 'idle' state, at which point the Task can be restarted.

If the task is running a job, the job is first cancelled (cancel()).

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `void`

Resets the task (cancelling any running job) and starts it anew with the supplied request.

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `void`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Requests the task to start the underlying job with the supplied parameters. The request is ignored if the task is already running.

Returns a RunningJob (promise) which can be used to complete the job (update / done / error). _**fires**_: Controllable#run to instruct the job to start

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

* * *

### Task

**Task**:

Encapsulates arbitrary 'work'. Provides an _**type**_: TaskData Fired when a running job is cancelled.

### constructor

⊕ **new Task**(opts?: _[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>_): [Task](#task)

**Parameters:**

Param

Type

Description

`Optional` opts

[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>

**Returns:** [Task](#task)

* * *

### `<Optional>` dataProxy

**● dataProxy**: _`DataProxy`<[TaskData](#taskdata)<`E`, `R`\>>_

* * *

### `<Optional>` job

**● job**: _[Job](#job)<`E`, `R`\>_

* * *

### addListener

▸ **addListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### cancel

▸ **cancel**(reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### done

▸ **done**(sessionId: _`string`_, result?: _R_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` result

R

\-

**Returns:** `void`

* * *

### emit

▸ **emit**(event: \* `string` | `symbol`_, ...args: \*`any`\[\]_): `boolean`

**Parameters:**

Param

Type

event

`string` | `symbol`

`Rest` args

`any`\[\]

**Returns:** `boolean`

* * *

### error

▸ **error**(sessionId: _`string`_, reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` reason

`any`

\-

**Returns:** `void`

* * *

### eventNames

▸ **eventNames**(): `Array`< `string` | `symbol`\>

**Returns:** `Array`< `string` | `symbol`\>

* * *

### getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

* * *

### listenerCount

▸ **listenerCount**(type: \* `string` | `symbol`\*): `number`

**Parameters:**

Param

Type

type

`string` | `symbol`

**Returns:** `number`

* * *

### listeners

▸ **listeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### off

▸ **off**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### on

▸ **on**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### once

▸ **once**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependListener

▸ **prependListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependOnceListener

▸ **prependOnceListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### rawListeners

▸ **rawListeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### removeAllListeners

▸ **removeAllListeners**(event?: \* `string` | `symbol`\*): `this`

**Parameters:**

Param

Type

`Optional` event

`string` | `symbol`

**Returns:** `this`

* * *

### removeListener

▸ **removeListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### reset

▸ **reset**(): `void`

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### setMaxListeners

▸ **setMaxListeners**(n: _`number`_): `this`

**Parameters:**

Param

Type

n

`number`

**Returns:** `this`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Starts the task.

**Parameters:**

Param

Type

Description

`Optional` request

E

\-

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### update

▸ **update**(sessionId: _`string`_, progress: _`number`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

progress

`number`

**Returns:** `void`

* * *

* * *

Index
-----

### Classes

*   [RunningJob](classes/runningjob.md)

### Interfaces

*   [Completable](interfaces/completable.md)
*   [TaskOptions](interfaces/taskoptions.md)

### Type aliases

*   [Job](#job)
*   [TaskData](#taskdata)

### Events

*   [Controllable](#controllable)
*   [Task](#task)

* * *

Type aliases
------------

### Job

**Ƭ Job**: _`function`_

#### Type declaration

▸(request?: _E_): `R` | `Promise`<`R`\>

**Parameters:**

Param

Type

`Optional` request

E

**Returns:** `R` | `Promise`<`R`\>

* * *

### TaskData

**Ƭ TaskData**: _`object`_

#### Type declaration

`Optional` errors: `[]`

`Optional` progress: `undefined` | `number`

`Optional` request: E

`Optional` result: R

`Optional` sessionId: `undefined` | `string`

`Optional` timeout: `Timeout`

* * *

Events
------

### Controllable

**Controllable**:

Methods for controlling a task _**params**_: TaskData

_**params**_: TaskData

### cancel

▸ **cancel**(reason?: _`any`_): `void`

Instructs the task to terminate it's job if the job is currently running. _**fires**_: Controllable#cancel when the job is cancelled.

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### reset

▸ **reset**(): `void`

Instructs the task to revert to its 'idle' state, at which point the Task can be restarted.

If the task is running a job, the job is first cancelled (cancel()).

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `void`

Resets the task (cancelling any running job) and starts it anew with the supplied request.

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `void`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Requests the task to start the underlying job with the supplied parameters. The request is ignored if the task is already running.

Returns a RunningJob (promise) which can be used to complete the job (update / done / error). _**fires**_: Controllable#run to instruct the job to start

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

* * *

### Task

**Task**:

Encapsulates arbitrary 'work'. Provides an _**type**_: TaskData Fired when a running job is cancelled.

### constructor

⊕ **new Task**(opts?: _[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>_): [Task](#task)

**Parameters:**

Param

Type

Description

`Optional` opts

[TaskOptions](interfaces/taskoptions.md)<`E`, `R`\>

**Returns:** [Task](#task)

* * *

### `<Optional>` dataProxy

**● dataProxy**: _`DataProxy`<[TaskData](#taskdata)<`E`, `R`\>>_

* * *

### `<Optional>` job

**● job**: _[Job](#job)<`E`, `R`\>_

* * *

### addListener

▸ **addListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### cancel

▸ **cancel**(reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

`Optional` reason

`any`

**Returns:** `void`

* * *

### done

▸ **done**(sessionId: _`string`_, result?: _R_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` result

R

\-

**Returns:** `void`

* * *

### emit

▸ **emit**(event: \* `string` | `symbol`_, ...args: \*`any`\[\]_): `boolean`

**Parameters:**

Param

Type

event

`string` | `symbol`

`Rest` args

`any`\[\]

**Returns:** `boolean`

* * *

### error

▸ **error**(sessionId: _`string`_, reason?: _`any`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

`Optional` reason

`any`

\-

**Returns:** `void`

* * *

### eventNames

▸ **eventNames**(): `Array`< `string` | `symbol`\>

**Returns:** `Array`< `string` | `symbol`\>

* * *

### getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

* * *

### listenerCount

▸ **listenerCount**(type: \* `string` | `symbol`\*): `number`

**Parameters:**

Param

Type

type

`string` | `symbol`

**Returns:** `number`

* * *

### listeners

▸ **listeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### off

▸ **off**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### on

▸ **on**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### once

▸ **once**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependListener

▸ **prependListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### prependOnceListener

▸ **prependOnceListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### rawListeners

▸ **rawListeners**(event: \* `string` | `symbol`\*): `Function`\[\]

**Parameters:**

Param

Type

event

`string` | `symbol`

**Returns:** `Function`\[\]

* * *

### removeAllListeners

▸ **removeAllListeners**(event?: \* `string` | `symbol`\*): `this`

**Parameters:**

Param

Type

`Optional` event

`string` | `symbol`

**Returns:** `this`

* * *

### removeListener

▸ **removeListener**(event: \* `string` | `symbol`_, listener: \*`function`_): `this`

**Parameters:**

Param

Type

event

`string` | `symbol`

listener

`function`

**Returns:** `this`

* * *

### reset

▸ **reset**(): `void`

**Returns:** `void`

* * *

### restart

▸ **restart**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

**Parameters:**

Param

Type

Description

`Optional` request

E

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### setMaxListeners

▸ **setMaxListeners**(n: _`number`_): `this`

**Parameters:**

Param

Type

n

`number`

**Returns:** `this`

* * *

### start

▸ **start**(request?: _E_): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

Starts the task.

**Parameters:**

Param

Type

Description

`Optional` request

E

\-

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`\>>

* * *

### update

▸ **update**(sessionId: _`string`_, progress: _`number`_): `void`

**Parameters:**

Param

Type

Description

sessionId

`string`

\-

progress

`number`

**Returns:** `void`

* * *

* * *

## Index

### Classes

* [RunningJob](classes/runningjob.md)

### Interfaces

* [Completable](interfaces/completable.md)
* [TaskOptions](interfaces/taskoptions.md)

### Type aliases

* [Job](#job)
* [TaskData](#taskdata)

### Events

* [Controllable](#controllable)
* [Task](#task)

---

## Type aliases

<a id="job"></a>

###  Job

**Ƭ Job**: *`function`*

#### Type declaration
▸(request?: *[E]()*):  `R` &#124; `Promise`<`R`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` request | [E]() |

**Returns:**  `R` &#124; `Promise`<`R`>

___
<a id="taskdata"></a>

###  TaskData

**Ƭ TaskData**: *`object`*

#### Type declaration

`Optional`  errors: `[]`

`Optional`  progress:  `undefined` &#124; `number`

`Optional`  request: [E]()

`Optional`  result: [R]()

`Optional`  sessionId:  `undefined` &#124; `string`

`Optional`  timeout: `Timeout`

___

## Events

<a id="controllable"></a>

###  Controllable

**Controllable**: 

Methods for controlling a task
*__params__*: TaskData

*__params__*: TaskData

<a id="controllable.cancel"></a>

###  cancel

▸ **cancel**(reason?: *`any`*): `void`

Instructs the task to terminate it's job if the job is currently running.
*__fires__*: Controllable#cancel when the job is cancelled.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` reason | `any` |   |

**Returns:** `void`

___
<a id="controllable.reset"></a>

###  reset

▸ **reset**(): `void`

Instructs the task to revert to its 'idle' state, at which point the Task can be restarted.

If the task is running a job, the job is first cancelled (cancel()).

**Returns:** `void`

___
<a id="controllable.restart"></a>

###  restart

▸ **restart**(request?: *[E]()*): `void`

Resets the task (cancelling any running job) and starts it anew with the supplied request.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` request | [E]() |   |

**Returns:** `void`

___
<a id="controllable.start"></a>

###  start

▸ **start**(request?: *[E]()*): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`>>

Requests the task to start the underlying job with the supplied parameters. The request is ignored if the task is already running.

Returns a RunningJob (promise) which can be used to complete the job (update / done / error).
*__fires__*: Controllable#run to instruct the job to start

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` request | [E]() |   |

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`>>

___

___
<a id="task"></a>

###  Task

**Task**: 

Encapsulates arbitrary 'work'. Provides an
*__type__*: TaskData Fired when a running job is cancelled.

<a id="task.constructor"></a>

###  constructor

⊕ **new Task**(opts?: *[TaskOptions](interfaces/taskoptions.md)<`E`, `R`>*): [Task](#task)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` opts | [TaskOptions](interfaces/taskoptions.md)<`E`, `R`> |   |

**Returns:** [Task](#task)

___
<a id="task.animation"></a>

### `<Optional>` animation

**● animation**: *`AnimOptions`*

___
<a id="task.dataproxy"></a>

### `<Optional>` dataProxy

**● dataProxy**: *`DataProxy`<[TaskData](#taskdata)<`E`, `R`>>*

___
<a id="task.job"></a>

### `<Optional>` job

**● job**: *[Job](#job)<`E`, `R`>*

___
<a id="task.addlistener"></a>

###  addListener

▸ **addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="task.cancel"></a>

###  cancel

▸ **cancel**(reason?: *`any`*): `void`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` reason | `any` |   |

**Returns:** `void`

___
<a id="task.done"></a>

###  done

▸ **done**(sessionId: *`string`*, result?: *[R]()*): `void`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sessionId | `string` |  \- |
| `Optional` result | [R]() |  \- |

**Returns:** `void`

___
<a id="task.emit"></a>

###  emit

▸ **emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="task.error"></a>

###  error

▸ **error**(sessionId: *`string`*, reason?: *`any`*): `void`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sessionId | `string` |  \- |
| `Optional` reason | `any` |  \- |

**Returns:** `void`

___
<a id="task.eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`< `string` &#124; `symbol`>

**Returns:** `Array`< `string` &#124; `symbol`>

___
<a id="task.getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

___
<a id="task.listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: * `string` &#124; `symbol`*): `number`

**Parameters:**

| Param | Type |
| ------ | ------ |
| type |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="task.listeners"></a>

###  listeners

▸ **listeners**(event: * `string` &#124; `symbol`*): `Function`[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="task.off"></a>

###  off

▸ **off**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="task.on"></a>

###  on

▸ **on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="task.once"></a>

###  once

▸ **once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="task.prependlistener"></a>

###  prependListener

▸ **prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="task.prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="task.rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: * `string` &#124; `symbol`*): `Function`[]

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="task.removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: * `string` &#124; `symbol`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` event |  `string` &#124; `symbol`|

**Returns:** `this`

___
<a id="task.removelistener"></a>

###  removeListener

▸ **removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="task.reset"></a>

###  reset

▸ **reset**(): `void`

**Returns:** `void`

___
<a id="task.restart"></a>

###  restart

▸ **restart**(request?: *[E]()*): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`>>

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` request | [E]() |   |

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`>>

___
<a id="task.setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

**Parameters:**

| Param | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="task.start"></a>

###  start

▸ **start**(request?: *[E]()*): `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`>>

Starts the task.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` request | [E]() |  \- |

**Returns:** `Promise`<[RunningJob](classes/runningjob.md)<`E`, `R`>>

___
<a id="task.update"></a>

###  update

▸ **update**(sessionId: *`string`*, progress: *`number`*): `void`

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sessionId | `string` |  \- |
| progress | `number` |   |

**Returns:** `void`

___

___

