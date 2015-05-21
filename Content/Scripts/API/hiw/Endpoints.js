var hiw;
(function (hiw) {
    hiw.Endpoint.addArray(hiw.IndicatorDescription, 0 /* GET */, "/IndicatorDescriptions/{keywords}/Search/{page}", hiw.IndicatorDescription.search);
    hiw.Endpoint.addSimple(hiw.IndicatorDescription, 0 /* GET */, "/IndicatorDescriptions/{keywords}/Count", hiw.IndicatorDescription.searchCount);
    hiw.Endpoint.addSimple(hiw.IndicatorDescription, 0 /* GET */, "/IndicatorDescriptions/{keywords }/PageCount", hiw.IndicatorDescription.searchPageCount);
})(hiw || (hiw = {}));
//# sourceMappingURL=Endpoints.js.map