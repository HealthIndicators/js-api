var hiw;
(function (hiw) {
    var PropertyMap = (function () {
        function PropertyMap(name, apiName) {
            this.name = name;
            this.apiName = apiName;
        }
        PropertyMap.prototype.toString = function () {
            return this.apiName;
        };
        return PropertyMap;
    })();
    hiw.PropertyMap = PropertyMap;
})(hiw || (hiw = {}));
//# sourceMappingURL=PropertyMap.js.map