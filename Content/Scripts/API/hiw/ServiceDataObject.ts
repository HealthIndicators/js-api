/// <reference path="Common.ts"/>

module hiw {
    export class ServiceDataObject extends ServiceObject {
        public links = new Array<Link>();

        protected getFields(): any {
            throw "Function not implemented in derived class.";
        }

        protected getPropertyMaps(): Array<PropertyMap> {
            var fields = this.getFields();
            var propertyMaps = new Array<PropertyMap>();

            for (var field in fields)
                propertyMaps.push(fields[field]);

            return propertyMaps;
        }

        public findLinks(typeName: LinkType, relationship: string = null, first: boolean = false): Array<Link>|Link {
            var matchingLinks = new Array<Link>();

            for (var i = 0; i < this.links.length; i++) {
                var link = this.links[i];

                if (link.typeName === LinkType[typeName] && (!relationship || link.relationship === relationship)) {
                    if (first)
                        return link;

                    matchingLinks.push(link);
                }
            }

            return matchingLinks;
        }

        /** Recusively fills this instance with the provided data.
         *  @param json A JSON object containing the properties and values to copy to this instance. */
        public fill(json: any, exclude?: Array<string>): void {
            if (json == null) return;

            var propertyMaps = this.getPropertyMaps();

            for (var name in propertyMaps) {
                var map = propertyMaps[name];

                if (json.hasOwnProperty(map.apiName)) {
                    var value = json[map.apiName];

                    if (this[map.name] instanceof ServiceDataObject)
                        this[map.name].fill(value);
                    else
                        this[map.name] = value;
                }
            }

            if (json.Links) {
                this.links = new Array<Link>();

                for (var i = 0; i < json.Links.length; i++)
                    this.links.push(extend(new Link(), json.Links[i]));
            }
        }

        protected parseDate(value: any): Date {
            if (value == null)
                return null;
            else {
                var match = value.toString().match(/\/Date\((\d+)(?:([+-])(\d\d)(\d\d))?\)\//);
                var milliseconds = null;

                if (match == null)
                    return new Date(NaN);

                milliseconds = parseInt(match[1], 10);

                if (match[2] && match[3] && match[4]) {
                    var tzDirection = (match[2] == "+" ? -1 : 1);
                    var tzHours = parseInt(match[3], 10);
                    var tzMinutes = parseInt(match[4], 10);

                    milliseconds += (tzDirection * ((tzHours * 60) + tzMinutes) * 60000);
                }

                return new Date(milliseconds);
            }
        }
    }
}