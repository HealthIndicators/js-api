module hiw {
    /** Defines the callback signature for an async subscriber. */
    export interface IAsyncCompleteCallback {
        (async: Async): void;
    }
}