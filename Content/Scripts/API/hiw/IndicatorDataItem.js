var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    var IndicatorDataItem = (function (_super) {
        __extends(IndicatorDataItem, _super);
        function IndicatorDataItem() {
            _super.apply(this, arguments);
            this.indicatorID = null;
            this.dimensionList = null;
            this.timeframe = null;
            this.numericValue = null;
            this.missingValueFlag = null;
            this.confidenceIntervalLow = null;
            this.confidenceIntervalHigh = null;
            this.standardError = null;
            this.locale = null;
            this.localeLevel = null;
            this.localeStateFIPSCode = null;
            this.localeCountyFIPSCode = null;
            this.localeCountySSACode = null;
            this.localeHRRCode = null;
            this.total = null;
            this.age = null;
            this.sex = null;
            this.raceEthnicity = null;
            this.incomeAndPovertyStatus = null;
            this.educationalAttainment = null;
            this.healthInsuranceStatus = null;
            this.sexualOrientation = null;
            this.maritalStatus = null;
            this.familyType = null;
            this.veteranStatus = null;
            this.countryOfBirth = null;
            this.disabilityStatus = null;
            this.obesityStatus = null;
            this.characteristicOfSchoolOrStudent = null;
            this.other = null;
            this.geography = null;
            this.modifier1 = null;
            this.modifier2 = null;
            this.modifier3 = null;
            this.modifier4 = null;
            this.modifier5 = null;
            this.numerator = null;
            this.denominator = null;
        }
        IndicatorDataItem.prototype.getFields = function () {
            return IndicatorDataItem.Fields;
        };
        /** Gets a list of all of the (flattened) IndicatorDataItems in the database which are associated with the IndicatorDescription table via the ID column.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDataItems.
         *  @return An Array of IndicatorDataItems. */
        IndicatorDataItem.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDataItems by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDataItems.
         *  @return An Array of IndicatorDataItems. */
        IndicatorDataItem.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDataItems by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDataItems.
         *  @return An Array of IndicatorDataItems. */
        IndicatorDataItem.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        IndicatorDataItem.Fields = {
            indicatorID: new hiw.PropertyMap("indicatorID", "IndicatorID"),
            dimensionList: new hiw.PropertyMap("dimensionList", "DimensionList"),
            timeframe: new hiw.PropertyMap("timeframe", "Timeframe"),
            numericValue: new hiw.PropertyMap("numericValue", "NumericValue"),
            missingValueFlag: new hiw.PropertyMap("missingValueFlag", "MissingValueFlag"),
            confidenceIntervalLow: new hiw.PropertyMap("confidenceIntervalLow", "ConfidenceIntervalLow"),
            confidenceIntervalHigh: new hiw.PropertyMap("confidenceIntervalHigh", "ConfidenceIntervalHigh"),
            standardError: new hiw.PropertyMap("standardError", "StandardError"),
            locale: new hiw.PropertyMap("locale", "Locale"),
            localeLevel: new hiw.PropertyMap("localeLevel", "LocaleLevel"),
            localeStateFIPSCode: new hiw.PropertyMap("localeStateFIPSCode", "LocaleStateFIPSCode"),
            localeCountyFIPSCode: new hiw.PropertyMap("localeCountyFIPSCode", "LocaleCountyFIPSCode"),
            localeCountySSACode: new hiw.PropertyMap("localeCountySSACode", "LocaleCountySSACode"),
            localeHRRCode: new hiw.PropertyMap("localeHRRCode", "LocaleHRRCode"),
            total: new hiw.PropertyMap("total", "Total"),
            age: new hiw.PropertyMap("age", "Age"),
            sex: new hiw.PropertyMap("sex", "Sex"),
            raceEthnicity: new hiw.PropertyMap("raceEthnicity", "RaceEthnicity"),
            incomeAndPovertyStatus: new hiw.PropertyMap("incomeAndPovertyStatus", "IncomeAndPovertyStatus"),
            educationalAttainment: new hiw.PropertyMap("educationalAttainment", "EducationalAttainment"),
            healthInsuranceStatus: new hiw.PropertyMap("healthInsuranceStatus", "HealthInsuranceStatus"),
            sexualOrientation: new hiw.PropertyMap("sexualOrientation", "SexualOrientation"),
            maritalStatus: new hiw.PropertyMap("maritalStatus", "MaritalStatus"),
            familyType: new hiw.PropertyMap("familyType", "FamilyType"),
            veteranStatus: new hiw.PropertyMap("veteranStatus", "VeteranStatus"),
            countryOfBirth: new hiw.PropertyMap("countryOfBirth", "CountryOfBirth"),
            disabilityStatus: new hiw.PropertyMap("disabilityStatus", "DisabilityStatus"),
            obesityStatus: new hiw.PropertyMap("obesityStatus", "ObesityStatus"),
            characteristicOfSchoolOrStudent: new hiw.PropertyMap("characteristicOfSchoolOrStudent", "CharacteristicOfSchoolOrStudent"),
            other: new hiw.PropertyMap("other", "Other"),
            geography: new hiw.PropertyMap("geography", "Geography"),
            modifier1: new hiw.PropertyMap("modifier1", "Modifier1"),
            modifier2: new hiw.PropertyMap("modifier2", "Modifier2"),
            modifier3: new hiw.PropertyMap("modifier3", "Modifier3"),
            modifier4: new hiw.PropertyMap("modifier4", "Modifier4"),
            modifier5: new hiw.PropertyMap("modifier5", "Modifier5"),
            numerator: new hiw.PropertyMap("numerator", "Numerator"),
            denominator: new hiw.PropertyMap("denominator", "Denominator")
        };
        return IndicatorDataItem;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDataItem = IndicatorDataItem;
    hiw.Endpoint.addArray(IndicatorDataItem, 0 /* GET */, "/IndicatorDescription/{indicatorDescriptionID}/Data/{page}", IndicatorDataItem.getByIndicatorDescriptionID);
    hiw.Endpoint.addSimple(IndicatorDataItem, 0 /* GET */, "/IndicatorDescription/{indicatorDescriptionID}/Data/Count", IndicatorDataItem.getByIndicatorDescriptionIDCount);
    hiw.Endpoint.addSimple(IndicatorDataItem, 0 /* GET */, "/IndicatorDescription/{indicatorDescriptionID}/Data/PageCount", IndicatorDataItem.getByIndicatorDescriptionIDPageCount);
})(hiw || (hiw = {}));
//# sourceMappingURL=IndicatorDataItem.js.map