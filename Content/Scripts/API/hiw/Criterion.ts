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
            if (field == null)
                throw new Error("Parameter 'field' is required.");

            this.name = (<any>field instanceof PropertyMap ? (<PropertyMap>field).apiName : field.toString());
            this.operator = operator;
            this.value = value;
        }
            
        /** Converts this instance to JSON in the format the HIW API expects. */
        public toJSON(): Object {
            var json: any = null;

            if (this.operator == Operator.In || this.operator == Operator.NotIn) {
                if (this.value != null && !Array.isArray(this.value))
                    throw new Error("Value provided for \"" + this.operator + "\" criterion must be an array.");
                else if (this.value != null && this.value.length > 0) {
                    var group = new Group(this.operator == Operator.In ? FilterType.Or : FilterType.And);

                    for (var i = 0; i < this.value.length; i++)
                        group.add(this.name,(this.operator == Operator.In ? Operator.Equal : Operator.NotEqual), this.value[i]);

                    json = group.toJSON();
                }
            }
            else {
                json = {
                    "__type": "SearchParameter:#S3.Common.Search",
                    Name: this.name,
                    Operator: this.operator
                };

                if (this.operator != Operator.Null && this.operator != Operator.NotNull)
                    json.Value = this.value;
            }

            return json;
        }
    }
} 