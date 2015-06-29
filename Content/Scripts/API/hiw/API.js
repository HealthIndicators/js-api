var hiw;
(function (hiw) {
    /** Provides core functionality to interact with the HIW API. */
    var API = (function () {
        /** Creates a new API instance with the provided base URL. */
        function API(apiKey, baseURL) {
            if (apiKey === void 0) { apiKey = null; }
            if (baseURL === void 0) { baseURL = API.DefaultBaseURL; }
            this.apiKey = apiKey;
            this.baseURL = baseURL;
            this.initialize();
        }
        API.prototype.initialize = function () {
        };
        API.parameterizePath = function (path, params) {
            var parameterizedPath = path;
            if (params)
                for (var key in params)
                    parameterizedPath = parameterizedPath.replace("{" + key + "}", params[key]);
            return parameterizedPath;
        };
        API.prototype.executeEndpoint = function (endpoint, callback, params, postData, page, pageSize) {
            if (page === void 0) { page = 1; }
            if (pageSize === void 0) { pageSize = API.DefaultPageSize; }
            var parameterizedPath = null;
            var url = null;
            var async = null;
            params = (params || {});
            params.page = page;
            params.pageSize = pageSize;
            parameterizedPath = API.parameterizePath(endpoint.uriTemplate, params);
            url = this.baseURL + parameterizedPath;
            async = this.executeUrl(endpoint.method, url, postData, function (json, error) {
                var response = new hiw.APIResponse(endpoint, url, postData);
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
            return async;
        };
        API.prototype.executeUrl = function (method, url, postData, callback) {
            var request = hiw.getHttpRequest();
            var async = new hiw.Async();
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    var json = null;
                    var error = null;
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
                    async.complete();
                }
            };
            request.open(hiw.HttpMethod[method], url);
            request.setRequestHeader("X-HIW-API-Key", this.apiKey);
            request.setRequestHeader("Accept", "application/json");
            if (method == 1 /* POST */) {
                request.setRequestHeader("Content-Type", "application/json");
                request.send(JSON.stringify(postData));
            }
            else
                request.send();
            return async;
        };
        API.verifyApiKey = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        API.DefaultBaseURL = "http://services.healthindicators.gov/v5/REST.svc/";
        API.DefaultPageSize = 2000;
        API.Endpoints = new Array();
        return API;
    })();
    hiw.API = API;
})(hiw || (hiw = {}));
//# sourceMappingURL=API.js.map