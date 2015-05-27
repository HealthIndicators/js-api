/* Health Indicators Warehouse (HIW) JavaScript API
 *   v5.0.3 (beta)
 * 
 * Docs:    http://developers.healthindicators.gov
 * Source:  https://github.com/HealthIndicators/js-api
 * License: MIT - https://github.com/HealthIndicators/js-api/raw/master/LICENSE
 */

/********************************************************************
 *                                                                  *
 * This is pre-release software and comes with no warranties.       *
 *                                                                  *
 * Please report any issues or suggestions my emailing: hiw@s-3.com *
 *                                                                  *
 ********************************************************************/
/// <reference path="../../Definitions/qunit.d.ts" />
interface QUnitAssert {
    isNull(actual: any, message?: string): void;
    isNotNull(actual: any, message?: string): void;
    greaterThan(actual: number, expected: number, message?: string): void;
    greaterThanOrEqualTo(actual: number, expected: number, message?: string): void;
    lessThan(actual: number, expected: number, message?: string): void;
    lessThanOrEqualTo(actual: number, expected: number, message?: string): void;
    any<T>(items: Array<T>, test: (item: T) => boolean, message?: string): void;
}
declare module hiw.test {
    interface IQUnitTestCallback {
        (assert: QUnitAssert, done?: () => any): void;
    }
}
declare module hiw.test {
    class QUnitTest {
        name: string;
        callback: IQUnitTestCallback;
        async: boolean;
        constructor(name: string, callback: IQUnitTestCallback, async?: boolean);
    }
}
declare module hiw.test {
    function run(apiKey: string, baseURL: string): void;
}
