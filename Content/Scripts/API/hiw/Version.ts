module hiw {
    export class Version extends ServiceDataObject {
        public static Fields = {
            major: new PropertyMap("major", "Major"),
            minor: new PropertyMap("minor", "Minor"),
            revision: new PropertyMap("revision", "Revision"),
            build: new PropertyMap("build", "Build")
        };

        public major: number;
        public minor: number;
        public revision: number;
        public build: number;

        constructor(major?: number, minor?: number, revision?: number, build?: number) {
            super();

            this.major = major;
            this.minor = minor;
            this.revision = revision;
            this.build = build;
        }

        protected getFields(): any { return Version.Fields; }
    };

    export var APIVersion = new Version(5, 0, 1, 0);
} 