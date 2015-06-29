var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    /** Represents the outermost portion of a filter. */
    var Filter = (function (_super) {
        __extends(Filter, _super);
        /** Creates a new Filter instance for the specified page, type, and criteria. */
        function Filter(page, pageSize, type) {
            if (page === void 0) { page = 1; }
            if (pageSize === void 0) { pageSize = hiw.API.DefaultPageSize; }
            if (type === void 0) { type = 0 /* And */; }
            _super.call(this, type);
            /** The page of data to return (default is 1, the first page). */
            this.page = 1;
            /** The amount of data to return, per page. */
            this.pageSize = hiw.API.DefaultPageSize;
            this.page = page;
            this.pageSize = pageSize;
        }
        /** Adds the specified filter part to the criteria. */
        Filter.prototype.addPart = function (part) {
            _super.prototype.addPart.call(this, part);
            return this;
        };
        /** Creates a new criterion (using the default operator "Equal") and adds it to the criteria. */
        //public add(name: string, value: Object): Filter<T>;
        Filter.prototype.addEqual = function (field, value) {
            return this.add(field, 2 /* Equal */, value);
        };
        /** Creates a new criterion and adds it to the criteria. */
        Filter.prototype.add = function (field, operator, value) {
            if (operator === void 0) { operator = 2 /* Equal */; }
            if (value === void 0) { value = null; }
            _super.prototype.add.call(this, field, operator, value);
            return this;
        };
        /** Converts this instance to JSON in the format the HIW API expects. */
        Filter.prototype.toJSON = function (page, pageSize) {
            var json = _super.prototype.toJSON.call(this);
            delete json["__type"];
            json["Page"] = (page || this.page);
            if (pageSize || this.pageSize)
                json["PageSize"] = (pageSize || this.pageSize);
            return json;
        };
        return Filter;
    })(hiw.Group);
    hiw.Filter = Filter;
})(hiw || (hiw = {}));
//# sourceMappingURL=Filter.js.map