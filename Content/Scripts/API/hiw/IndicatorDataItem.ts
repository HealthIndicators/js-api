module hiw {
    export class IndicatorDataItem extends ServiceDataObject {
        public static Fields = {
            indicatorID: new PropertyMap("indicatorID", "IndicatorID"),
            dimensionList: new PropertyMap("dimensionList", "DimensionList"),
            timeframe: new PropertyMap("timeframe", "Timeframe"),
            numericValue: new PropertyMap("numericValue", "NumericValue"),
            missingValueFlag: new PropertyMap("missingValueFlag", "MissingValueFlag"),
            confidenceIntervalLow: new PropertyMap("confidenceIntervalLow", "ConfidenceIntervalLow"),
            confidenceIntervalHigh: new PropertyMap("confidenceIntervalHigh", "ConfidenceIntervalHigh"),
            standardError: new PropertyMap("standardError", "StandardError"),
            locale: new PropertyMap("locale", "Locale"),
            localeLevel: new PropertyMap("localeLevel", "LocaleLevel"),
            localeStateFIPSCode: new PropertyMap("localeStateFIPSCode", "LocaleStateFIPSCode"),
            localeCountyFIPSCode: new PropertyMap("localeCountyFIPSCode", "LocaleCountyFIPSCode"),
            localeCountySSACode: new PropertyMap("localeCountySSACode", "LocaleCountySSACode"),
            localeHRRCode: new PropertyMap("localeHRRCode", "LocaleHRRCode"),
            total: new PropertyMap("total", "Total"),
            age: new PropertyMap("age", "Age"),
            sex: new PropertyMap("sex", "Sex"),
            raceEthnicity: new PropertyMap("raceEthnicity", "RaceEthnicity"),
            incomeAndPovertyStatus: new PropertyMap("incomeAndPovertyStatus", "IncomeAndPovertyStatus"),
            educationalAttainment: new PropertyMap("educationalAttainment", "EducationalAttainment"),
            healthInsuranceStatus: new PropertyMap("healthInsuranceStatus", "HealthInsuranceStatus"),
            sexualOrientation: new PropertyMap("sexualOrientation", "SexualOrientation"),
            maritalStatus: new PropertyMap("maritalStatus", "MaritalStatus"),
            familyType: new PropertyMap("familyType", "FamilyType"),
            veteranStatus: new PropertyMap("veteranStatus", "VeteranStatus"),
            countryOfBirth: new PropertyMap("countryOfBirth", "CountryOfBirth"),
            disabilityStatus: new PropertyMap("disabilityStatus", "DisabilityStatus"),
            obesityStatus: new PropertyMap("obesityStatus", "ObesityStatus"),
            characteristicOfSchoolOrStudent: new PropertyMap("characteristicOfSchoolOrStudent", "CharacteristicOfSchoolOrStudent"),
            other: new PropertyMap("other", "Other"),
            geography: new PropertyMap("geography", "Geography"),
            modifier1: new PropertyMap("modifier1", "Modifier1"),
            modifier2: new PropertyMap("modifier2", "Modifier2"),
            modifier3: new PropertyMap("modifier3", "Modifier3"),
            modifier4: new PropertyMap("modifier4", "Modifier4"),
            modifier5: new PropertyMap("modifier5", "Modifier5"),
            numerator: new PropertyMap("numerator", "Numerator"),
            denominator: new PropertyMap("denominator", "Denominator")
        };

        public indicatorID: string = null;
        public dimensionList: string = null;
        public timeframe: string = null;
        public numericValue: string = null;
        public missingValueFlag: string = null;
        public confidenceIntervalLow: string = null;
        public confidenceIntervalHigh: string = null;
        public standardError: string = null;
        public locale: string = null;
        public localeLevel: string = null;
        public localeStateFIPSCode: string = null;
        public localeCountyFIPSCode: string = null;
        public localeCountySSACode: string = null;
        public localeHRRCode: string = null;
        public total: string = null;
        public age: string = null;
        public sex: string = null;
        public raceEthnicity: string = null;
        public incomeAndPovertyStatus: string = null;
        public educationalAttainment: string = null;
        public healthInsuranceStatus: string = null;
        public sexualOrientation: string = null;
        public maritalStatus: string = null;
        public familyType: string = null;
        public veteranStatus: string = null;
        public countryOfBirth: string = null;
        public disabilityStatus: string = null;
        public obesityStatus: string = null;
        public characteristicOfSchoolOrStudent: string = null;
        public other: string = null;
        public geography: string = null;
        public modifier1: string = null;
        public modifier2: string = null;
        public modifier3: string = null;
        public modifier4: string = null;
        public modifier5: string = null;
        public numerator: string = null;
        public denominator: string = null;

        protected getFields(): any { return IndicatorDataItem.Fields; }

        /** Gets IndicatorDataItems by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of IndicatorDataItems. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDataItem>>, page?: number) {
            api.executeEndpoint<Array<IndicatorDataItem>>(Endpoint.fromSelf<Array<IndicatorDataItem>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        }

        /** Gets how many IndicatorDataItems by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of IndicatorDataItems. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>) {
            api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDataItems by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of IndicatorDataItems. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>) {
            api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }
    }

    Endpoint.addArray<IndicatorDataItem>(IndicatorDataItem, HTTPMethod.GET, "/IndicatorDescription/{indicatorDescriptionID}/Data/{page}", IndicatorDataItem.getByIndicatorDescriptionID);
    Endpoint.addSimple<IndicatorDataItem, Number>(IndicatorDataItem, HTTPMethod.GET, "/IndicatorDescription/{indicatorDescriptionID}/Data/Count", IndicatorDataItem.getByIndicatorDescriptionIDCount);
    Endpoint.addSimple<IndicatorDataItem, Number>(IndicatorDataItem, HTTPMethod.GET, "/IndicatorDescription/{indicatorDescriptionID}/Data/PageCount", IndicatorDataItem.getByIndicatorDescriptionIDPageCount);
}