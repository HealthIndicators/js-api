var hiw;
(function (hiw) {
    var Endpoint = (function () {
        function Endpoint(initializer, method, uriTemplate, call) {
            this.initializer = initializer;
            this.method = method;
            this.uriTemplate = uriTemplate;
            this.call = call;
            this.call["endpoint"] = this;
        }
        Endpoint.addSimple = function (owningType, method, uriTemplate, call) {
            return Endpoint.add(function (o) { return null; }, method, uriTemplate, call);
        };
        Endpoint.addSingle = function (owningType, method, uriTemplate, call) {
            return Endpoint.add(function (o) { return new owningType(); }, method, uriTemplate, call);
        };
        Endpoint.addArray = function (owningType, method, uriTemplate, call) {
            return Endpoint.add(function (o) {
                var array = new Array();
                for (var i = 0; i < o.dataLength; i++)
                    array.push(new owningType());
                return array;
            }, method, uriTemplate, call);
        };
        Endpoint.add = function (initializer, method, uriTemplate, call) {
            var endpoint = new Endpoint(initializer, method, uriTemplate, call);
            hiw.API.Endpoints.push(endpoint);
            return endpoint;
        };
        Endpoint.fromSelf = function () {
            return arguments.callee.caller["endpoint"];
        };
        return Endpoint;
    })();
    hiw.Endpoint = Endpoint;
})(hiw || (hiw = {}));
//# sourceMappingURL=Endpoint.js.map