module hiw {
    export class PropertyMap {
        constructor(public name: string, public apiName: string) { }

        public toString(): string {
            return this.apiName;
        }
    }
} 