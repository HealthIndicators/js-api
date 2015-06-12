var hiw;
(function (hiw) {
    var Synchronizer = (function () {
        function Synchronizer(asyncs, completeCallback) {
            this.asyncs = null;
            this.completedAsyncs = null;
            this.completeCallback = null;
            this.asyncs = (asyncs || new Array());
            this.completedAsyncs = new Array();
            this.completeCallback = completeCallback;
            this.subscribeAll();
        }
        Synchronizer.prototype.add = function (async) {
            this.asyncs.push(async);
            this.subscribe(async);
        };
        Synchronizer.prototype.subscribeAll = function () {
            for (var i = 0; i < this.asyncs.length; i++)
                this.subscribe(this.asyncs[i]);
        };
        Synchronizer.prototype.subscribe = function (async) {
            async.subscribe(this.actionCompleted.bind(this));
        };
        Synchronizer.prototype.actionCompleted = function (async) {
            this.completedAsyncs.push(async);
            this.notifyIfComplete();
        };
        Synchronizer.prototype.sync = function (completeCallback) {
            this.completeCallback = completeCallback;
            this.notifyIfComplete();
        };
        Synchronizer.prototype.notifyIfComplete = function () {
            if (this.asyncs.length == this.completedAsyncs.length)
                this.notify();
        };
        Synchronizer.prototype.notify = function () {
            if (this.completeCallback != null)
                this.completeCallback();
        };
        Synchronizer.sync = function (asyncs, completeCallback) {
            return new Synchronizer(asyncs, completeCallback);
        };
        return Synchronizer;
    })();
    hiw.Synchronizer = Synchronizer;
})(hiw || (hiw = {}));
//# sourceMappingURL=Synchronizer.js.map