var hiw;
(function (hiw) {
    /** The valid set of boolean operators we can use to filter an API call. */
    (function (FilterType) {
        FilterType[FilterType["And"] = 0] = "And";
        FilterType[FilterType["Or"] = 1] = "Or";
    })(hiw.FilterType || (hiw.FilterType = {}));
    var FilterType = hiw.FilterType;
})(hiw || (hiw = {}));
//# sourceMappingURL=FilterType.js.map