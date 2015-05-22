var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    var VersionInfo = (function (_super) {
        __extends(VersionInfo, _super);
        function VersionInfo() {
            _super.apply(this, arguments);
            this.hiwVersion = new hiw.Version();
        }
        VersionInfo.prototype.getFields = function () {
            return VersionInfo.Fields;
        };
        VersionInfo.version = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        VersionInfo.Fields = {
            hiwVersion: new hiw.PropertyMap("hiwVersion", "HIWVersion"),
            loadDate: new hiw.PropertyMap("loadDate", "LoadDate"),
            serviceVersion: new hiw.PropertyMap("serviceVersion", "ServiceVersion")
        };
        return VersionInfo;
    })(hiw.ServiceDataObject);
    hiw.VersionInfo = VersionInfo;
    hiw.Endpoint.addSingle(VersionInfo, 0 /* GET */, "/Version", VersionInfo.version);
})(hiw || (hiw = {}));
//# sourceMappingURL=VersionInfo.js.map