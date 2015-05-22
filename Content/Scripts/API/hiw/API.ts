module hiw {
    /** Provides core functionality to interact with the HIW API. */
    export class API {
        public static DefaultBaseURL = "http://services.healthindicators.gov/v5/REST.svc/";
        public static Endpoints = new Array<Endpoint<any>>();

        /** The base URL of the HIW API. */
        public baseURL: string;

        /** The API key to use when making calls to the HIW API. */
        public apiKey: string;

        /** Creates a new API instance with the provided base URL. */
        constructor(apiKey: string = null, baseURL: string = API.DefaultBaseURL) {
            this.apiKey = apiKey;
            this.baseURL = baseURL;

            this.initialize();
        }

        private initialize(): void {
        }

        public static parameterizePath(path: string, params?: any) {
            var parameterizedPath = path;

            if (params)
                for (var key in params)
                    parameterizedPath = parameterizedPath.replace("{" + key + "}", params[key]);

            return parameterizedPath;
        }
        
        public executeEndpoint<T>(endpoint: Endpoint<T>, callback: IAPICallback<T>, params?: any, postData?: any, page: number = 1) {
            var parameterizedPath = null;
            var url = null;

            if (page != null) {
                params = (params || {});
                params.page = page;
            }

            parameterizedPath = API.parameterizePath(endpoint.uriTemplate, params);
            url = this.baseURL + parameterizedPath;

            this.executeUrl(endpoint.method, url, postData,(json: Object, error: string) => {
                var response: APIResponse<T> = new APIResponse<T>(endpoint, url, postData);

                if (error == null) {
                    try {
                        response.fill(json);
                    }
                    catch (e) {
                        error = "Error loading JSON into APIResponse instance: " + e.message;
                    }
                }

                //Prefer specific HTTP error message.
                if ("Error" === response.status)
                    error = "Error returned from HIW API call: " + response.message;

                if (callback)
                    callback((response ? response.data : null), response, error);
            });
        }

        public executeUrl(method: HttpMethod, url: string, postData: any, callback: (json: Object, error: string) => void) {
            var request = hiw.getHttpRequest();

            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    var json: Object = null;
                    var error: string = null;

                    if (request.status === 200) {
                        try {
                            json = JSON.parse(request.responseText);
                        }
                        catch (e) {
                            error = "Error parsing HIW API response as JSON: " + e.message;
                        }

                        if (json == null)
                            error = "Call to HIW API endpoint returned no parsable data.";
                    }
                    else
                        error = "Call to HIW API endpoint \"" + url + "\" returned HTTP status code: " + request.status + " " + request.statusText;

                    if (callback)
                        callback(json, error);
                }
            };

            request.open(HttpMethod[method], url);
            request.setRequestHeader("X-HIW-API-Key", this.apiKey);
            request.setRequestHeader("Accept", "application/json");

            if (method == HttpMethod.POST) {
                request.setRequestHeader("Content-Type", "application/json");
                request.send(JSON.stringify(postData));
            }
            else
                request.send();
        }
        
        public static verifyApiKey(api: API, callback: IAPICallback<boolean>) {
            api.executeEndpoint<boolean>(Endpoint.fromSelf<boolean>(), callback);
        }
    }
}