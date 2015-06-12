module hiw {
    export class Synchronizer {
        public asyncs: Array<Async> = null;
        public completedAsyncs: Array<Async> = null;
        public completeCallback: ISynchronizerCompleteCallback = null;

        constructor(asyncs?: Array<Async>, completeCallback?: ISynchronizerCompleteCallback) {
            this.asyncs = (asyncs || new Array<Async>());
            this.completedAsyncs = new Array<Async>();
            this.completeCallback = completeCallback;

            this.subscribeAll();
        }

        public add(async: Async) {
            this.asyncs.push(async);
            this.subscribe(async);
        }

        public subscribeAll(): void {
            for (var i = 0; i < this.asyncs.length; i++)
                this.subscribe(this.asyncs[i]);
        }

        private subscribe(async: Async): void {
            async.subscribe(this.actionCompleted.bind(this));
        }

        private actionCompleted(async: Async): void {
            this.completedAsyncs.push(async);
            this.notifyIfComplete();
        }

        public sync(completeCallback: ISynchronizerCompleteCallback): void {
            this.completeCallback = completeCallback;
            this.notifyIfComplete();
        }

        public notifyIfComplete(): void {
            if (this.asyncs.length == this.completedAsyncs.length)
                this.notify();
        }

        public notify(): void {
            if (this.completeCallback != null)
                this.completeCallback();
        }

        public static sync(asyncs: Array<Async>, completeCallback: ISynchronizerCompleteCallback): Synchronizer {
            return new Synchronizer(asyncs, completeCallback);
        }
    }
} 