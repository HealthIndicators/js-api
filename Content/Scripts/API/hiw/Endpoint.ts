module hiw {
    export class Endpoint<T> {
        public initializer: IAPIResponseInitializer<T>;
        public method: HTTPMethod;
        public uriTemplate: string;
        public call: Function;

        constructor(initializer: IAPIResponseInitializer<T>, method: HTTPMethod, uriTemplate: string, call: Function) {
            this.initializer = initializer;
            this.method = method;
            this.uriTemplate = uriTemplate;
            this.call = call;
            this.call["endpoint"] = this;
        }

        public static addSimple<T, D>(owningType: { new (): T }, method: HTTPMethod, uriTemplate: string, call: Function): Endpoint<D> {
            return Endpoint.add<D>((o) => <D>null, method, uriTemplate, call);
        }

        public static addSingle<T>(owningType: { new (): T }, method: HTTPMethod, uriTemplate: string, call: Function): Endpoint<T> {
            return Endpoint.add<T>((o) => new owningType(), method, uriTemplate, call);
        }

        public static addArray<T>(owningType: { new (): T }, method: HTTPMethod, uriTemplate: string, call: Function): Endpoint<Array<T>> {
            return Endpoint.add<Array<T>>((o) => {
                var array = new Array<T>();

                for (var i = 0; i < o.dataLength; i++)
                    array.push(new owningType());

                return array;
            }, method, uriTemplate, call);
        }

        public static add<T>(initializer: IAPIResponseInitializer<T>, method: HTTPMethod, uriTemplate: string, call: Function): Endpoint<T> {
            var endpoint = new Endpoint<T>(initializer, method, uriTemplate, call);

            API.Endpoints.push(endpoint);

            return endpoint;
        }

        public static fromSelf<T>(): Endpoint<T> {
            return <Endpoint<T>>arguments.callee.caller["endpoint"];
        }
    }
}