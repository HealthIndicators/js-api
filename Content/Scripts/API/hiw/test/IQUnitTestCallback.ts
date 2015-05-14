/// <reference path="_dependencies"/>

module hiw.test {
    export interface IQUnitTestCallback {
        (assert: QUnitAssert, done?: () => any): void;
    }
} 