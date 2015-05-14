module hiw {
    /** Represents a single criterion. */
    export class Criterion implements IFilterPart {
        /** The name of the field upon which to apply this filter. */
        public name: string;

        /** The operator to use. */
        public operator: Operator;

        /** The value to use. */
        public value: any;

        /** Creates a new Criterion instance with the specified name, operator and value. */
        constructor(field: PropertyMap|string, operator: Operator = Operator.Equal, value: any = null) {
            this.name = (<any>field instanceof PropertyMap ? (<PropertyMap>field).apiName : field.toString());
            this.operator = operator;
            this.value = value;
        }
            
        /** Converts this instance to JSON in the format the HIW API expects. */
        public toJSON(): Object {
            var json: any = {
                "__type": "SearchParameter:#S3.Common.Search",
                Name: this.name,
                Operator: this.operator
            };

            if (this.operator != Operator.Null && this.operator != Operator.NotNull)
                json.Value = this.value;

            return json;
        }
    }
} 