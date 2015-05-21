module hiw {
    export class IndicatorDescription extends BaseIndicatorDescription {
        /** Gets a list of all of the IndicatorDescriptions which match the specified search terms.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptions */
        public static search(keywords: string, api: API, callback: IAPICallback<Array<IndicatorDescription>>, page?: number) {
            api.executeEndpoint<Array<IndicatorDescription>>(Endpoint.fromSelf<Array<IndicatorDescription>>(), callback, { keywords: keywords }, null, page);
        }

        /** Gets how many IndicatorDescriptions exist for the specified search terms. */
        public static searchCount(keywords: string, api: API, callback: IAPICallback<number>) {
            api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { keywords: keywords });
        }

        /** Gets how many pages of IndicatorDescriptions exist for the specified search terms. */
        public static searchPageCount(keywords: string, api: API, callback: IAPICallback<number>) {
            api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { keywords: keywords });
        }
    }
}