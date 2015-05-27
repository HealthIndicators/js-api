var hiw;
(function (hiw) {
    /** Represents a single criterion. */
    var Criterion = (function () {
        /** Creates a new Criterion instance with the specified name, operator and value. */
        function Criterion(field, operator, value) {
            if (operator === void 0) { operator = 2 /* Equal */; }
            if (value === void 0) { value = null; }
            if (field == null)
                throw new Error("Parameter 'field' is required.");
            this.name = (field instanceof hiw.PropertyMap ? field.apiName : field.toString());
            this.operator = operator;
            this.value = value;
        }
        /** Converts this instance to JSON in the format the HIW API expects. */
        Criterion.prototype.toJSON = function () {
            var json = null;
            if (this.operator == 8 /* In */ || this.operator == 9 /* NotIn */) {
                if (this.value != null && !Array.isArray(this.value))
                    throw new Error("Value provided for \"" + this.operator + "\" criterion must be an array.");
                else if (this.value != null && this.value.length > 0) {
                    var group = new hiw.Group(this.operator == 8 /* In */ ? 1 /* Or */ : 0 /* And */);
                    for (var i = 0; i < this.value.length; i++)
                        group.add(this.name, (this.operator == 8 /* In */ ? 2 /* Equal */ : 3 /* NotEqual */), this.value[i]);
                    json = group.toJSON();
                }
            }
            else {
                json = {
                    "__type": "SearchParameter:#S3.Common.Search",
                    Name: this.name,
                    Operator: this.operator
                };
                if (this.operator != 6 /* Null */ && this.operator != 7 /* NotNull */)
                    json.Value = this.value;
            }
            return json;
        };
        return Criterion;
    })();
    hiw.Criterion = Criterion;
})(hiw || (hiw = {}));
//# sourceMappingURL=Criterion.js.map