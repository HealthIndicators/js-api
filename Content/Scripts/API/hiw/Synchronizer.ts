module hiw {
    export class Synchronizer {
        public asyncs: Array<Async> = null;
        public completedAsyncs: Array<Async> = null;
        public completeCallback: ISynchronizerCompleteCallback = null;

        constructor(asyncs: Array<Async>, completeCallback: ISynchronizerCompleteCallback) {
            this.asyncs = asyncs;
            this.completedAsyncs = new Array<Async>();
            this.completeCallback = completeCallback;

            this.subscribe();
        }

        private subscribe(): void {
            for (var i = 0; i < this.asyncs.length; i++)
                this.asyncs[i].subscribe(this.actionCompleted.bind(this));
        }

        private actionCompleted(async: Async): void {
            this.completedAsyncs.push(async);

            if (this.asyncs.length == this.completedAsyncs.length)
                this.notify();
        }

        private notify(): void {
            this.completeCallback();
        }

        public static sync(asyncs: Array<Async>, completeCallback: ISynchronizerCompleteCallback): Synchronizer {
            return new Synchronizer(asyncs, completeCallback);
        }
    }
} 