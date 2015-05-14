var hiw;
(function (hiw) {
    /** Represents a single criterion. */
    var Criterion = (function () {
        /** Creates a new Criterion instance with the specified name, operator and value. */
        function Criterion(field, operator, value) {
            if (operator === void 0) { operator = 2 /* Equal */; }
            if (value === void 0) { value = null; }
            this.name = (field instanceof hiw.PropertyMap ? field.apiName : field.toString());
            this.operator = operator;
            this.value = value;
        }
        /** Converts this instance to JSON in the format the HIW API expects. */
        Criterion.prototype.toJSON = function () {
            var json = {
                "__type": "SearchParameter:#S3.Common.Search",
                Name: this.name,
                Operator: this.operator
            };
            if (this.operator != 6 /* Null */ && this.operator != 7 /* NotNull */)
                json.Value = this.value;
            return json;
        };
        return Criterion;
    })();
    hiw.Criterion = Criterion;
})(hiw || (hiw = {}));
//# sourceMappingURL=Criterion.js.map