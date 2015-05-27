var hiw;
(function (hiw) {
    var Async = (function () {
        function Async() {
            this.isComplete = false;
            this.notifyCallback = null;
        }
        Async.prototype.complete = function () {
            this.isComplete = true;
            this.notify();
        };
        Async.prototype.subscribe = function (callback) {
            this.notifyCallback = callback;
            if (this.isComplete)
                this.notify();
        };
        Async.prototype.notify = function () {
            if (this.notifyCallback != null)
                this.notifyCallback(this);
        };
        return Async;
    })();
    hiw.Async = Async;
})(hiw || (hiw = {}));
//# sourceMappingURL=Async.js.map