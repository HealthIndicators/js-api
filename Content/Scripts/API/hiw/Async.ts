module hiw {
    export class Async {
        public isComplete: boolean = false;
        public notifyCallback: IAsyncCompleteCallback = null;

        public complete() {
            this.isComplete = true;
            this.notify();
        }

        public subscribe(callback: IAsyncCompleteCallback): void {
            this.notifyCallback = callback;

            if (this.isComplete)
                this.notify();
        }

        private notify() {
            if (this.notifyCallback != null)
                this.notifyCallback(this);
        }
    }
} 