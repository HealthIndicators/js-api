/// <reference path="_dependencies"/>
var hiw;
(function (hiw) {
    var test;
    (function (test) {
        var QUnitTest = (function () {
            function QUnitTest(name, callback, async) {
                if (async === void 0) { async = false; }
                this.name = name;
                this.callback = callback;
                this.async = async;
            }
            return QUnitTest;
        })();
        test.QUnitTest = QUnitTest;
    })(test = hiw.test || (hiw.test = {}));
})(hiw || (hiw = {}));
//# sourceMappingURL=QUnitTest.js.map