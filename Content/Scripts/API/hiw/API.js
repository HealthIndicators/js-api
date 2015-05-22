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
        }
        API.parameterizePath = function (path, params) {
            var parameterizedPath = path;
            if (params)
                for (var key in params)
                    parameterizedPath = parameterizedPath.replace("{" + key + "}", params[key]);
            return parameterizedPath;
        };
        API.prototype.executeEndpoint = function (endpoint, callback, params, postData, page) {
            if (page === void 0) { page = 1; }
            var parameterizedPath = null;
            var url = null;
            if (page != null) {
                params = (params || {});
                params.page = page;
            }
            parameterizedPath = API.parameterizePath(endpoint.uriTemplate, params);
            url = this.baseURL + parameterizedPath;
            this.executeUrl(endpoint.method, url, postData, function (json, error) {
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
        };
        API.prototype.executeUrl = function (method, url, postData, callback) {
            var request = new XMLHttpRequest();
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
        };
        API.verifyApiKey = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        API.DefaultBaseURL = "http://services.healthindicators.gov/v5/REST.svc/";
        API.Endpoints = new Array();
        return API;
    })();
    hiw.API = API;
})(hiw || (hiw = {}));
//# sourceMappingURL=API.js.map