import { Job } from "./types"

export interface TaskOptions<E, R> {
    timeout?: number | string

    job?: Job<E, R>
}
