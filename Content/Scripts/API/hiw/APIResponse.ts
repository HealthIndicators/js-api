module hiw {
    /** Represents a response received from the API. */
    export class APIResponse<T> extends ServiceObject {
        public endpoint: Endpoint<T>;
        public url: string;
        public postData: any;
        public status: string;
        public message: string;
        public data: T;
        public dataLength: number;

        constructor(endpoint: Endpoint<T>, url: string, postData: any) {
            super();
            this.endpoint = endpoint;
            this.url = url;
            this.postData = postData;
        }

        public fill(json: any): void {
            if (json == null) return;

            this.status = json.Status;
            this.message = json.Message;
            this.dataLength = json.DataLength;

            this.data = APIResponse.fillInstance<T>(this.endpoint.initializer(this), json.Data);
        }

        private static fillInstance<T>(target: T, source: any): T {
            if (source == null)
                target = null;
            else if (target instanceof ServiceDataObject)
                (<ServiceDataObject><any>target).fill(source);
            else if (Array.isArray(target)) {
                if (Array.isArray(source)) {
                    var dataArray = <Array<any>><any>target;

                    if (dataArray.length == source.length) {
                        for (var i = 0; i < dataArray.length; i++)
                            APIResponse.fillInstance(dataArray[i], source[i]);
                    }
                    else
                        throw "Attempted to fill data array [" + dataArray.length + "] with array [" + source.length + "].";
                }
                else
                    throw "Attempted to fill data array with non-array.";
            }
            else
                target = source;

            return target;
        }
    }
}