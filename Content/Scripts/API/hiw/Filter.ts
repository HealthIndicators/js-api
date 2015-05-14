module hiw {
    /** Represents the outermost portion of a filter. */
    export class Filter extends Group {
        /** The page of data to return (default is 1, the first page). */
        public page: Number;

        /** Creates a new, default, Filter instance. */
        constructor();
            
        /** Creates a new Filter for the specified page. */
        constructor(page: number);
            
        /** Creates a new Filter instance of the specified page and type. */
        constructor(page: number, type: FilterType);
            
        /** Creates a new Filter instance for the specified page, type, and criteria. */
        constructor(page: number = 1, type: FilterType = FilterType.And) {
            super(type);

            this.page = page;
        }

        /** Adds the specified filter part to the criteria. */
        public addPart(part: IFilterPart): Filter {
            super.addPart(part);

            return this;
        }

        /** Creates a new criterion (using the default operator "Equal") and adds it to the criteria. */
        //public add(name: string, value: Object): Filter<T>;
        public addEqual(field: PropertyMap|string, value: Object): Filter {
            return this.add(field, Operator.Equal, value);
        }
        
        /** Creates a new criterion and adds it to the criteria. */
        public add(field: PropertyMap|string, operator: Operator = Operator.Equal, value: Object = null): Filter {
            super.add(field, operator, value);

            return this;
        }

        /** Converts this instance to JSON in the format the HIW API expects. */
        public toJSON(page: number = 1): Object {
            var json = super.toJSON();

            delete json["__type"];
            json["Page"] = page;

            return json;
        }
    }
} 