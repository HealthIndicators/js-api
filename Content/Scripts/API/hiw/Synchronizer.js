var hiw;
(function (hiw) {
    var Synchronizer = (function () {
        function Synchronizer(asyncs, completeCallback) {
            this.asyncs = null;
            this.completedAsyncs = null;
            this.completeCallback = null;
            this.asyncs = asyncs;
            this.completedAsyncs = new Array();
            this.completeCallback = completeCallback;
            this.subscribe();
        }
        Synchronizer.prototype.subscribe = function () {
            for (var i = 0; i < this.asyncs.length; i++)
                this.asyncs[i].subscribe(this.actionCompleted.bind(this));
        };
        Synchronizer.prototype.actionCompleted = function (async) {
            this.completedAsyncs.push(async);
            if (this.asyncs.length == this.completedAsyncs.length)
                this.notify();
        };
        Synchronizer.prototype.notify = function () {
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