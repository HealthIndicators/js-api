module hiw {
    export interface IAPIResponseInitializer<T> {
        (apiResponse: APIResponse<T>): T;
    }
}