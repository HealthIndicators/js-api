/// <reference path="../../../Definitions/qunit.d.ts"/>
QUnit.assert.isNull = function (actual, message) {
    QUnit.push(actual == null || actual == undefined, actual, null, message);
};
QUnit.assert.isNotNull = function (actual, message) {
    QUnit.push(actual != null && actual != undefined, actual, null, message);
};
QUnit.assert.isNotNull = function (actual, message) {
    QUnit.push(actual != null && actual != undefined, actual, null, message);
};
QUnit.assert.greaterThan = function (actual, expected, message) {
    QUnit.push(actual > expected, actual, expected, message);
};
QUnit.assert.greaterThanOrEqualTo = function (actual, expected, message) {
    QUnit.push(actual >= expected, actual, expected, message);
};
QUnit.assert.lessThan = function (actual, expected, message) {
    QUnit.push(actual < expected, actual, expected, message);
};
QUnit.assert.lessThanOrEqualTo = function (actual, expected, message) {
    QUnit.push(actual <= expected, actual, expected, message);
};
QUnit.assert.any = function (items, test, message) {
    var isNull = (items == null);
    var isEmpty = (isNull || items.length == 0);
    var hasMatch = false;
    if (!isEmpty) {
        for (var i = 0; i < items.length; i++) {
            if (test(items[i])) {
                hasMatch = true;
                break;
            }
        }
    }
    QUnit.push(hasMatch, (isNull ? null : "Array[" + items.length + "]"), test, message);
};
QUnit.assert.all = function (items, test, message) {
    var isNull = (items == null);
    var isEmpty = (isNull || items.length == 0);
    var hasMatch = true;
    if (!isEmpty) {
        for (var i = 0; i < items.length; i++) {
            if (!test(items[i])) {
                hasMatch = false;
                break;
            }
        }
    }
    QUnit.push(hasMatch, (isNull ? null : "Array[" + items.length + "]"), test, message);
};
//# sourceMappingURL=QUnitAssert.js.map