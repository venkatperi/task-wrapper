[task-wrapper](../README.md) > [Completable](../interfaces/completable.md)

# Interface: Completable

## Type parameters
#### R 
## Hierarchy

**Completable**

## Implemented by

* [RunningJob](../classes/runningjob.md)

## Index

### Properties

* [sessionId](completable.md#sessionid)

### Methods

* [done](completable.md#done)
* [error](completable.md#error)
* [update](completable.md#update)

---

## Properties

<a id="sessionid"></a>

###  sessionId

**● sessionId**: *`string`*

Running job's session id for reporting

___

## Methods

<a id="done"></a>

###  done

▸ **done**(result?: *[R]()*): `void`

Notifies task that the job is done

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` result | [R]() |  optional result of the job |

**Returns:** `void`

___
<a id="error"></a>

###  error

▸ **error**(reason?: *`any`*): `void`

Notifies task that the job terminated with an error

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` reason | `any` |  optional reason of failure |

**Returns:** `void`

___
<a id="update"></a>

###  update

▸ **update**(progress: *`number`*): `void`

Notifies task of job's progress.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| progress | `number` |  must be a number between 0 and 1 |

**Returns:** `void`

___

