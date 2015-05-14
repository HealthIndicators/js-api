var hiw;
(function (hiw) {
    /** Represents a group of filter criterion. */
    var Group = (function () {
        /** Creates a new Group instance of the specified type. */
        function Group(type) {
            if (type === void 0) { type = 0 /* And */; }
            this.type = type;
            this.criteria = new Array();
        }
        /** Adds the specified filter part to the criteria. */
        Group.prototype.addPart = function (part) {
            this.criteria.push(part);
            return this;
        };
        /** Creates a new criterion and adds it to the criteria. */
        Group.prototype.add = function (field, operator, value) {
            if (operator === void 0) { operator = 2 /* Equal */; }
            if (value === void 0) { value = null; }
            this.criteria.push(new hiw.Criterion(field, operator, value));
            return this;
        };
        /** Converts this instance to JSON in the format the HIW API expects. */
        Group.prototype.toJSON = function () {
            var json = {
                "__type": "SearchGroup:#S3.Common.Search",
                Mode: hiw.FilterType[this.type],
                Elements: new Array()
            };
            if (this.criteria)
                for (var i = 0; i < this.criteria.length; i++)
                    json.Elements.push(this.criteria[i].toJSON());
            return json;
        };
        return Group;
    })();
    hiw.Group = Group;
})(hiw || (hiw = {}));
//# sourceMappingURL=Group.js.map