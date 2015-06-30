/// <reference path="Common.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    var ServiceDataObject = (function (_super) {
        __extends(ServiceDataObject, _super);
        function ServiceDataObject() {
            _super.apply(this, arguments);
            this.links = new Array();
        }
        ServiceDataObject.prototype.getFields = function () {
            throw "Function not implemented in derived class.";
        };
        ServiceDataObject.prototype.getPropertyMaps = function () {
            var fields = this.getFields();
            var propertyMaps = new Array();
            for (var field in fields)
                propertyMaps.push(fields[field]);
            return propertyMaps;
        };
        ServiceDataObject.prototype.findLinks = function (typeName, relationship, first) {
            if (relationship === void 0) { relationship = null; }
            if (first === void 0) { first = false; }
            var matchingLinks = new Array();
            for (var i = 0; i < this.links.length; i++) {
                var link = this.links[i];
                if (link.typeName === hiw.LinkType[typeName] && (!relationship || link.relationship === relationship)) {
                    if (first)
                        return link;
                    matchingLinks.push(link);
                }
            }
            return matchingLinks;
        };
        /** Recusively fills this instance with the provided data.
         *  @param json A JSON object containing the properties and values to copy to this instance. */
        ServiceDataObject.prototype.fill = function (json, exclude) {
            if (json == null)
                return;
            var propertyMaps = this.getPropertyMaps();
            for (var name in propertyMaps) {
                var map = propertyMaps[name];
                if (json.hasOwnProperty(map.apiName)) {
                    var value = json[map.apiName];
                    if (this[map.name] instanceof ServiceDataObject)
                        this[map.name].fill(value);
                    else
                        this[map.name] = value;
                }
            }
            if (json.Links) {
                this.links = new Array();
                for (var i = 0; i < json.Links.length; i++)
                    this.links.push(hiw.extend(new hiw.Link(), json.Links[i]));
            }
        };
        ServiceDataObject.prototype.parseDate = function (value) {
            if (value == null)
                return null;
            else {
                var match = value.toString().match(/\/Date\((\d+)(?:([+-])(\d\d)(\d\d))?\)\//);
                var milliseconds = null;
                if (match == null)
                    return new Date(NaN);
                milliseconds = parseInt(match[1], 10);
                if (match[2] && match[3] && match[4]) {
                    var tzDirection = (match[2] == "+" ? -1 : 1);
                    var tzHours = parseInt(match[3], 10);
                    var tzMinutes = parseInt(match[4], 10);
                    milliseconds += (tzDirection * ((tzHours * 60) + tzMinutes) * 60000);
                }
                return new Date(milliseconds);
            }
        };
        return ServiceDataObject;
    })(hiw.ServiceObject);
    hiw.ServiceDataObject = ServiceDataObject;
})(hiw || (hiw = {}));
//# sourceMappingURL=ServiceDataObject.js.map