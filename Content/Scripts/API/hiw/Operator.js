var hiw;
(function (hiw) {
    /** The valid set of operators we can use to filter an API call. */
    (function (Operator) {
        Operator[Operator["LessThan"] = 0] = "LessThan";
        Operator[Operator["LessThanOrEqual"] = 1] = "LessThanOrEqual";
        Operator[Operator["Equal"] = 2] = "Equal";
        Operator[Operator["NotEqual"] = 3] = "NotEqual";
        Operator[Operator["GreaterThanOrEqual"] = 4] = "GreaterThanOrEqual";
        Operator[Operator["GreaterThan"] = 5] = "GreaterThan";
        Operator[Operator["Null"] = 6] = "Null";
        Operator[Operator["NotNull"] = 7] = "NotNull";
        Operator[Operator["In"] = 8] = "In";
        Operator[Operator["NotIn"] = 9] = "NotIn";
    })(hiw.Operator || (hiw.Operator = {}));
    var Operator = hiw.Operator;
})(hiw || (hiw = {}));
//# sourceMappingURL=Operator.js.map