module hiw {
    /** Represents a group of filter criterion. */
    export class Group implements IFilterPart {
        /** The joining type of this filter (And, Or - default is And). */
        public type: FilterType;

        /** An array of criteria which are joined based on the provided Type. */
        public criteria: Array<IFilterPart>;

        /** Creates a new Group instance of the specified type. */
        constructor(type: FilterType = FilterType.And) {
            this.type = type;
            this.criteria = new Array<IFilterPart>();
        }

        /** Adds the specified filter part to the criteria. */
        public addPart(part: IFilterPart): Group {
            this.criteria.push(part);

            return this;
        }
        /** Creates a new criterion and adds it to the criteria. */
        public add(field: PropertyMap|string, operator: Operator = Operator.Equal, value: Object = null): Group {
            this.criteria.push(new Criterion(field, operator, value));

            return this;
        }

        /** Converts this instance to JSON in the format the HIW API expects. */
        public toJSON(): Object {
            var json = {
                "__type": "SearchGroup:#S3.Common.Search",
                Mode: FilterType[this.type],
                Elements: new Array<Object>()
            };

            if (this.criteria)
                for (var i = 0; i < this.criteria.length; i++)
                    json.Elements.push(this.criteria[i].toJSON());

            return json;
        }
    }
} 