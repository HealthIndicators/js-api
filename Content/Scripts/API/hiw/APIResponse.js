var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    /** Represents a response received from the API. */
    var APIResponse = (function (_super) {
        __extends(APIResponse, _super);
        function APIResponse(endpoint, url, postData) {
            _super.call(this);
            this.endpoint = endpoint;
            this.url = url;
            this.postData = postData;
        }
        APIResponse.prototype.fill = function (json) {
            if (json == null)
                return;
            this.status = json.Status;
            this.message = json.Message;
            this.dataLength = json.DataLength;
            this.data = APIResponse.fillInstance(this.endpoint.initializer(this), json.Data);
        };
        APIResponse.fillInstance = function (target, source) {
            if (source == null)
                target = null;
            else if (target instanceof hiw.ServiceDataObject)
                target.fill(source);
            else if (Array.isArray(target)) {
                if (Array.isArray(source)) {
                    var dataArray = target;
                    if (dataArray.length == source.length) {
                        for (var i = 0; i < dataArray.length; i++)
                            APIResponse.fillInstance(dataArray[i], source[i]);
                    }
                    else
                        throw "Attempted to fill data array [" + dataArray.length + "] with array [" + source.length + "].";
                }
                else
                    throw "Attempted to fill data array with non-array.";
            }
            else
                target = source;
            return target;
        };
        return APIResponse;
    })(hiw.ServiceObject);
    hiw.APIResponse = APIResponse;
})(hiw || (hiw = {}));
//# sourceMappingURL=APIResponse.js.map