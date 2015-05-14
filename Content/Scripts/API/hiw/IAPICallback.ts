module hiw {
    /** Provides a mechanism to interact with the HIW API. */
    export interface IAPICallback<T> {
        (data: T, apiResponse: APIResponse<T>, error: string): void;
    }
}