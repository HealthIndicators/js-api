/// <reference path="../../../Definitions/qunit.d.ts"/>

interface QUnitAssert {
    isNull(actual: any, message?: string): void;
    isNotNull(actual: any, message?: string): void;
    greaterThan(actual: number, expected: number, message?: string): void;
    greaterThanOrEqualTo(actual: number, expected: number, message?: string): void;
    lessThan(actual: number, expected: number, message?: string): void;
    lessThanOrEqualTo(actual: number, expected: number, message?: string): void;
    any<T>(items: Array<T>, test: (item: T) => boolean, message?: string): void;
}

QUnit.assert.isNull = (actual: any, message?: string) => {
    QUnit.push(actual == null || actual == undefined, actual, null, message);
};

QUnit.assert.isNotNull = (actual: any, message?: string) => {
    QUnit.push(actual != null && actual != undefined, actual, null, message);
};

QUnit.assert.isNotNull = (actual: any, message?: string) => {
    QUnit.push(actual != null && actual != undefined, actual, null, message);
};

QUnit.assert.greaterThan = (actual: number, expected: number, message?: string) => {
    QUnit.push(actual > expected, actual, expected, message);
};

QUnit.assert.greaterThanOrEqualTo = (actual: number, expected: number, message?: string) => {
    QUnit.push(actual >= expected, actual, expected, message);
};

QUnit.assert.lessThan = (actual: number, expected: number, message?: string) => {
    QUnit.push(actual < expected, actual, expected, message);
};

QUnit.assert.lessThanOrEqualTo = (actual: number, expected: number, message?: string) => {
    QUnit.push(actual <= expected, actual, expected, message);
};

QUnit.assert.any = <T>(items: Array<T>, test: (item: T) => boolean, message?: string) => {
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

QUnit.assert.all = <T>(items: Array<T>, test: (item: T) => boolean, message?: string) => {
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

    QUnit.push(hasMatch,(isNull ? null : "Array[" + items.length + "]"), test, message);
};