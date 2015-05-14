var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    var Version = (function (_super) {
        __extends(Version, _super);
        function Version(major, minor, revision, build) {
            _super.call(this);
            this.major = major;
            this.minor = minor;
            this.revision = revision;
            this.build = build;
        }
        Version.prototype.getFields = function () {
            return Version.Fields;
        };
        Version.Fields = {
            major: new hiw.PropertyMap("major", "Major"),
            minor: new hiw.PropertyMap("minor", "Minor"),
            revision: new hiw.PropertyMap("revision", "Revision"),
            build: new hiw.PropertyMap("build", "Build")
        };
        return Version;
    })(hiw.ServiceDataObject);
    hiw.Version = Version;
    ;
    hiw.APIVersion = new Version(5, 0, 1, 0);
})(hiw || (hiw = {}));
//# sourceMappingURL=Version.js.map