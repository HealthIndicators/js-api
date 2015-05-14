/// <reference path="_dependencies"/>

module hiw.test {
    export class QUnitTest {
        constructor(public name: string, public callback: IQUnitTestCallback, public async: boolean = false) { }
    }
} 