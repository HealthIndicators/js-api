var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    var IndicatorDescription = (function (_super) {
        __extends(IndicatorDescription, _super);
        function IndicatorDescription() {
            _super.apply(this, arguments);
        }
        /** Gets a list of all of the IndicatorDescriptions which match the specified search terms.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptions */
        IndicatorDescription.search = function (keywords, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { keywords: keywords }, null, page);
        };
        /** Gets how many IndicatorDescriptions exist for the specified search terms. */
        IndicatorDescription.searchCount = function (keywords, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { keywords: keywords });
        };
        /** Gets how many pages of IndicatorDescriptions exist for the specified search terms. */
        IndicatorDescription.searchPageCount = function (keywords, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { keywords: keywords });
        };
        return IndicatorDescription;
    })(hiw.BaseIndicatorDescription);
    hiw.IndicatorDescription = IndicatorDescription;
})(hiw || (hiw = {}));
//# sourceMappingURL=IndicatorDescription.js.map