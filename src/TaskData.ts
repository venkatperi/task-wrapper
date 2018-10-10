import { Timeout } from "gen-statem"

export type TaskData<E, R> = {
    errors?: [],
    timeout?: Timeout
    result?: R
    request?: E
    sessionId?: string
    progress?: number
}
