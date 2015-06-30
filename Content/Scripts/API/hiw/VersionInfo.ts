module hiw {
    export class VersionInfo extends ServiceDataObject {
        public static Fields = {
            hiwVersion: new PropertyMap("hiwVersion", "HIWVersion"),
            loadDate: new PropertyMap("loadDate", "LoadDate"),
            serviceVersion: new PropertyMap("serviceVersion", "ServiceVersion")
        };

        public hiwVersion: Version = new Version();
        public loadDate: Date;
        public serviceVersion: number;

        protected getFields(): any { return VersionInfo.Fields; }

        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.loadDate = this.parseDate(this.loadDate);
        }

        public static version(api: API, callback: IAPICallback<VersionInfo>) {
            api.executeEndpoint<VersionInfo>(Endpoint.fromSelf<VersionInfo>(), callback);
        }
    }

    Endpoint.addSingle<VersionInfo>(VersionInfo, HttpMethod.GET, "/Version", VersionInfo.version);
}