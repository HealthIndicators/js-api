/* Health Indicators Warehouse (HIW) JavaScript API
 *   v5.2.0
 * 
 * Docs:    http://developers.healthindicators.gov
 * Source:  https://github.com/HealthIndicators/js-api
 * License: MIT - https://github.com/HealthIndicators/js-api/raw/master/LICENSE
 */

/********************************************************************
 *                                                                  *
 * This is pre-release software and comes with no warranties.       *
 *                                                                  *
 * Please report any issues or suggestions my emailing: hiw@s-3.com *
 *                                                                  *
 ********************************************************************/
var hiw;
(function (hiw) {
    hiw.getHttpRequest = null;
    function initialize() {
        var m = null;
        try {
            m = eval("module");
        }
        catch (ex) {
        }
        // Check if we're running under Node.JS.
        if (m != null && typeof m === "object" && typeof m.exports === "object") {
            var nodeJSXMLHttpRequest = eval("require(\"xmlhttprequest\")").XMLHttpRequest;
            hiw.getHttpRequest = function () {
                return new nodeJSXMLHttpRequest();
            };
            m.exports = hiw;
        }
        else {
            hiw.getHttpRequest = function () {
                return new XMLHttpRequest();
            };
        }
    }
    initialize();
    function extend(target, source) {
        var exclude = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            exclude[_i - 2] = arguments[_i];
        }
        if (source == null)
            return;
        for (name in source) {
            var targetName = pascalCaseToCamelCase(name);
            if (!exclude || exclude.indexOf(targetName) < 0) {
                var currentValue = target[targetName];
                var newValue = source[name];
                // Prevent never-ending loop.
                if (target !== newValue && currentValue !== newValue) {
                    var newValueIsArray = Array.isArray(newValue);
                    var newValueIsPlainObject = isPlainObject(newValue);
                    // Recurse if we're merging plain objects or arrays.
                    if (newValue && (newValueIsPlainObject || newValueIsArray)) {
                        var clone = null;
                        if (newValueIsArray) {
                            var currentValueIsArray = Array.isArray(currentValue);
                            clone = (currentValue && currentValueIsArray ? currentValue : []);
                        }
                        else {
                            var currentValueIsPlainObject = isPlainObject(currentValue);
                            clone = (currentValue && currentValueIsPlainObject ? currentValue : {});
                        }
                        // Never move original objects, clone them.
                        target[targetName] = extend(clone, newValue);
                    }
                    else if (newValue !== undefined)
                        target[targetName] = newValue;
                }
            }
        }
        // Return the modified object
        return target;
    }
    hiw.extend = extend;
    function pascalCaseToCamelCase(name) {
        if (name == null)
            return null;
        var matches = /^([A-Z]+?)(?:[A-Z][a-z].*|[^A-Z][a-z].*)?$/.exec(name);
        if (matches)
            return matches[1].toLowerCase() + name.substr(matches[1].length, name.length - matches[1].length);
    }
    hiw.pascalCaseToCamelCase = pascalCaseToCamelCase;
    function isPlainObject(obj) {
        if (obj == null || typeof obj !== "object" || obj.nodeType || obj === window)
            return false;
        if (obj.constructor && obj.constructor.prototype && typeof obj.constructor.prototype.isPrototypeOf !== "function")
            return false;
        return true;
    }
    hiw.isPlainObject = isPlainObject;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    var Async = (function () {
        function Async() {
            this.isComplete = false;
            this.notifyCallback = null;
        }
        Async.prototype.complete = function () {
            this.isComplete = true;
            this.notify();
        };
        Async.prototype.subscribe = function (callback) {
            this.notifyCallback = callback;
            if (this.isComplete)
                this.notify();
        };
        Async.prototype.notify = function () {
            if (this.notifyCallback != null)
                this.notifyCallback(this);
        };
        return Async;
    })();
    hiw.Async = Async;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    var Synchronizer = (function () {
        function Synchronizer(asyncs, completeCallback) {
            this.asyncs = null;
            this.completedAsyncs = null;
            this.completeCallback = null;
            this.asyncs = (asyncs || new Array());
            this.completedAsyncs = new Array();
            this.completeCallback = completeCallback;
            this.subscribeAll();
        }
        Synchronizer.prototype.add = function (async) {
            this.asyncs.push(async);
            this.subscribe(async);
        };
        Synchronizer.prototype.subscribeAll = function () {
            for (var i = 0; i < this.asyncs.length; i++)
                this.subscribe(this.asyncs[i]);
        };
        Synchronizer.prototype.subscribe = function (async) {
            async.subscribe(this.actionCompleted.bind(this));
        };
        Synchronizer.prototype.actionCompleted = function (async) {
            this.completedAsyncs.push(async);
            this.notifyIfComplete();
        };
        Synchronizer.prototype.sync = function (completeCallback) {
            this.completeCallback = completeCallback;
            this.notifyIfComplete();
        };
        Synchronizer.prototype.notifyIfComplete = function () {
            if (this.asyncs.length == this.completedAsyncs.length)
                this.notify();
        };
        Synchronizer.prototype.notify = function () {
            if (this.completeCallback != null)
                this.completeCallback();
        };
        Synchronizer.sync = function (asyncs, completeCallback) {
            return new Synchronizer(asyncs, completeCallback);
        };
        return Synchronizer;
    })();
    hiw.Synchronizer = Synchronizer;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    /** The valid set of boolean operators we can use to filter an API call. */
    (function (FilterType) {
        FilterType[FilterType["And"] = 0] = "And";
        FilterType[FilterType["Or"] = 1] = "Or";
    })(hiw.FilterType || (hiw.FilterType = {}));
    var FilterType = hiw.FilterType;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    /** The valid set of operators we can use to filter an API call. */
    (function (Operator) {
        Operator[Operator["LessThan"] = 0] = "LessThan";
        Operator[Operator["LessThanOrEqual"] = 1] = "LessThanOrEqual";
        Operator[Operator["Equal"] = 2] = "Equal";
        Operator[Operator["NotEqual"] = 3] = "NotEqual";
        Operator[Operator["GreaterThanOrEqual"] = 4] = "GreaterThanOrEqual";
        Operator[Operator["GreaterThan"] = 5] = "GreaterThan";
        Operator[Operator["Null"] = 6] = "Null";
        Operator[Operator["NotNull"] = 7] = "NotNull";
        Operator[Operator["In"] = 8] = "In";
        Operator[Operator["NotIn"] = 9] = "NotIn";
    })(hiw.Operator || (hiw.Operator = {}));
    var Operator = hiw.Operator;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    /** Represents a single criterion. */
    var Criterion = (function () {
        /** Creates a new Criterion instance with the specified name, operator and value. */
        function Criterion(field, operator, value) {
            if (operator === void 0) { operator = 2 /* Equal */; }
            if (value === void 0) { value = null; }
            if (field == null)
                throw new Error("Parameter 'field' is required.");
            this.name = (field instanceof hiw.PropertyMap ? field.apiName : field.toString());
            this.operator = operator;
            this.value = value;
        }
        /** Converts this instance to JSON in the format the HIW API expects. */
        Criterion.prototype.toJSON = function () {
            var json = null;
            json = {
                "__type": "SearchParameter:#S3.Common.Search",
                Name: this.name,
                Operator: this.operator
            };
            if (this.operator != 6 /* Null */ && this.operator != 7 /* NotNull */)
                json.Value = this.value;
            return json;
        };
        return Criterion;
    })();
    hiw.Criterion = Criterion;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    /** Represents a group of filter criterion. */
    var Group = (function () {
        /** Creates a new Group instance of the specified type. */
        function Group(type) {
            if (type === void 0) { type = 0 /* And */; }
            this.type = type;
            this.criteria = new Array();
        }
        /** Adds the specified filter part to the criteria. */
        Group.prototype.addPart = function (part) {
            this.criteria.push(part);
            return this;
        };
        /** Creates a new criterion and adds it to the criteria. */
        Group.prototype.add = function (field, operator, value) {
            if (operator === void 0) { operator = 2 /* Equal */; }
            if (value === void 0) { value = null; }
            this.criteria.push(new hiw.Criterion(field, operator, value));
            return this;
        };
        /** Converts this instance to JSON in the format the HIW API expects. */
        Group.prototype.toJSON = function () {
            var json = {
                "__type": "SearchGroup:#S3.Common.Search",
                Mode: hiw.FilterType[this.type],
                Elements: new Array()
            };
            if (this.criteria)
                for (var i = 0; i < this.criteria.length; i++)
                    json.Elements.push(this.criteria[i].toJSON());
            return json;
        };
        return Group;
    })();
    hiw.Group = Group;
})(hiw || (hiw = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    /** Represents the outermost portion of a filter. */
    var Filter = (function (_super) {
        __extends(Filter, _super);
        /** Creates a new Filter instance for the specified page, type, and criteria. */
        function Filter(page, pageSize, type) {
            if (page === void 0) { page = 1; }
            if (pageSize === void 0) { pageSize = null; }
            if (type === void 0) { type = 0 /* And */; }
            _super.call(this, type);
            /** The page of data to return (default is 1, the first page). */
            this.page = 1;
            /** The amount of data to return, per page. */
            this.pageSize = null;
            this.page = page;
            this.pageSize = pageSize;
        }
        /** Adds the specified filter part to the criteria. */
        Filter.prototype.addPart = function (part) {
            _super.prototype.addPart.call(this, part);
            return this;
        };
        /** Creates a new criterion (using the default operator "Equal") and adds it to the criteria. */
        //public add(name: string, value: Object): Filter<T>;
        Filter.prototype.addEqual = function (field, value) {
            return this.add(field, 2 /* Equal */, value);
        };
        /** Creates a new criterion and adds it to the criteria. */
        Filter.prototype.add = function (field, operator, value) {
            if (operator === void 0) { operator = 2 /* Equal */; }
            if (value === void 0) { value = null; }
            _super.prototype.add.call(this, field, operator, value);
            return this;
        };
        /** Converts this instance to JSON in the format the HIW API expects. */
        Filter.prototype.toJSON = function (page, pageSize) {
            var json = _super.prototype.toJSON.call(this);
            delete json["__type"];
            json["Page"] = (page || this.page);
            if (pageSize || this.pageSize)
                json["PageSize"] = (pageSize || this.pageSize);
            return json;
        };
        return Filter;
    })(hiw.Group);
    hiw.Filter = Filter;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    /** Exposes functionality through one or more service end points. */
    (function (LinkType) {
        LinkType[LinkType["Age"] = 0] = "Age";
        LinkType[LinkType["Ages"] = 1] = "Ages";
        LinkType[LinkType["AgeRelation"] = 2] = "AgeRelation";
        LinkType[LinkType["AgeRelations"] = 3] = "AgeRelations";
        LinkType[LinkType["CharacteristicOfSchoolOrStudent"] = 4] = "CharacteristicOfSchoolOrStudent";
        LinkType[LinkType["CharacteristicOfSchoolOrStudents"] = 5] = "CharacteristicOfSchoolOrStudents";
        LinkType[LinkType["CharacteristicOfSchoolOrStudentRelation"] = 6] = "CharacteristicOfSchoolOrStudentRelation";
        LinkType[LinkType["CharacteristicOfSchoolOrStudentRelations"] = 7] = "CharacteristicOfSchoolOrStudentRelations";
        LinkType[LinkType["CountryOfBirth"] = 8] = "CountryOfBirth";
        LinkType[LinkType["CountryOfBirths"] = 9] = "CountryOfBirths";
        LinkType[LinkType["CountryOfBirthRelation"] = 10] = "CountryOfBirthRelation";
        LinkType[LinkType["CountryOfBirthRelations"] = 11] = "CountryOfBirthRelations";
        LinkType[LinkType["DataCategory"] = 12] = "DataCategory";
        LinkType[LinkType["DataCategories"] = 13] = "DataCategories";
        LinkType[LinkType["DataCategoryRelation"] = 14] = "DataCategoryRelation";
        LinkType[LinkType["DataCategoryRelations"] = 15] = "DataCategoryRelations";
        LinkType[LinkType["DataSourceDataSupplier"] = 16] = "DataSourceDataSupplier";
        LinkType[LinkType["DataSourceDataSuppliers"] = 17] = "DataSourceDataSuppliers";
        LinkType[LinkType["DataSource"] = 18] = "DataSource";
        LinkType[LinkType["DataSources"] = 19] = "DataSources";
        LinkType[LinkType["DataSourceURL"] = 20] = "DataSourceURL";
        LinkType[LinkType["DataSourceURLs"] = 21] = "DataSourceURLs";
        LinkType[LinkType["DataSupplier"] = 22] = "DataSupplier";
        LinkType[LinkType["DataSuppliers"] = 23] = "DataSuppliers";
        LinkType[LinkType["DimensionBook"] = 24] = "DimensionBook";
        LinkType[LinkType["DimensionBooks"] = 25] = "DimensionBooks";
        LinkType[LinkType["DimensionBookRelation"] = 26] = "DimensionBookRelation";
        LinkType[LinkType["DimensionBookRelations"] = 27] = "DimensionBookRelations";
        LinkType[LinkType["DimensionGraph"] = 28] = "DimensionGraph";
        LinkType[LinkType["DimensionGraphs"] = 29] = "DimensionGraphs";
        LinkType[LinkType["DimensionList"] = 30] = "DimensionList";
        LinkType[LinkType["DimensionLists"] = 31] = "DimensionLists";
        LinkType[LinkType["DisabilityStatus"] = 32] = "DisabilityStatus";
        LinkType[LinkType["DisabilityStatuses"] = 33] = "DisabilityStatuses";
        LinkType[LinkType["DisabilityStatusRelation"] = 34] = "DisabilityStatusRelation";
        LinkType[LinkType["DisabilityStatusRelations"] = 35] = "DisabilityStatusRelations";
        LinkType[LinkType["EducationalAttainment"] = 36] = "EducationalAttainment";
        LinkType[LinkType["EducationalAttainments"] = 37] = "EducationalAttainments";
        LinkType[LinkType["EducationalAttainmentRelation"] = 38] = "EducationalAttainmentRelation";
        LinkType[LinkType["EducationalAttainmentRelations"] = 39] = "EducationalAttainmentRelations";
        LinkType[LinkType["FamilyType"] = 40] = "FamilyType";
        LinkType[LinkType["FamilyTypes"] = 41] = "FamilyTypes";
        LinkType[LinkType["FamilyTypeRelation"] = 42] = "FamilyTypeRelation";
        LinkType[LinkType["FamilyTypeRelations"] = 43] = "FamilyTypeRelations";
        LinkType[LinkType["Geography"] = 44] = "Geography";
        LinkType[LinkType["Geographies"] = 45] = "Geographies";
        LinkType[LinkType["GeographyRelation"] = 46] = "GeographyRelation";
        LinkType[LinkType["GeographyRelations"] = 47] = "GeographyRelations";
        LinkType[LinkType["GlossaryTerm"] = 48] = "GlossaryTerm";
        LinkType[LinkType["GlossaryTerms"] = 49] = "GlossaryTerms";
        LinkType[LinkType["HealthInsuranceStatus"] = 50] = "HealthInsuranceStatus";
        LinkType[LinkType["HealthInsuranceStatuses"] = 51] = "HealthInsuranceStatuses";
        LinkType[LinkType["HealthInsuranceStatusRelation"] = 52] = "HealthInsuranceStatusRelation";
        LinkType[LinkType["HealthInsuranceStatusRelations"] = 53] = "HealthInsuranceStatusRelations";
        LinkType[LinkType["HP2020TSM"] = 54] = "HP2020TSM";
        LinkType[LinkType["HP2020TSMs"] = 55] = "HP2020TSMs";
        LinkType[LinkType["IncomeAndPovertyStatus"] = 56] = "IncomeAndPovertyStatus";
        LinkType[LinkType["IncomeAndPovertyStatuses"] = 57] = "IncomeAndPovertyStatuses";
        LinkType[LinkType["IncomeAndPovertyStatusRelation"] = 58] = "IncomeAndPovertyStatusRelation";
        LinkType[LinkType["IncomeAndPovertyStatusRelations"] = 59] = "IncomeAndPovertyStatusRelations";
        LinkType[LinkType["IndicatorDescriptionDataCategory"] = 60] = "IndicatorDescriptionDataCategory";
        LinkType[LinkType["IndicatorDescriptionDataCategories"] = 61] = "IndicatorDescriptionDataCategories";
        LinkType[LinkType["IndicatorDescriptionDataSource"] = 62] = "IndicatorDescriptionDataSource";
        LinkType[LinkType["IndicatorDescriptionDataSources"] = 63] = "IndicatorDescriptionDataSources";
        LinkType[LinkType["IndicatorDescriptionDefaultDimensionGraph"] = 64] = "IndicatorDescriptionDefaultDimensionGraph";
        LinkType[LinkType["IndicatorDescriptionDefaultDimensionGraphs"] = 65] = "IndicatorDescriptionDefaultDimensionGraphs";
        LinkType[LinkType["IndicatorDescriptionDimension"] = 66] = "IndicatorDescriptionDimension";
        LinkType[LinkType["IndicatorDescriptionDimensions"] = 67] = "IndicatorDescriptionDimensions";
        LinkType[LinkType["IndicatorDescriptionDimensionGraph"] = 68] = "IndicatorDescriptionDimensionGraph";
        LinkType[LinkType["IndicatorDescriptionDimensionGraphs"] = 69] = "IndicatorDescriptionDimensionGraphs";
        LinkType[LinkType["IndicatorDescriptionDimensionValue"] = 70] = "IndicatorDescriptionDimensionValue";
        LinkType[LinkType["IndicatorDescriptionDimensionValues"] = 71] = "IndicatorDescriptionDimensionValues";
        LinkType[LinkType["IndicatorDescriptionInitiative"] = 72] = "IndicatorDescriptionInitiative";
        LinkType[LinkType["IndicatorDescriptionInitiatives"] = 73] = "IndicatorDescriptionInitiatives";
        LinkType[LinkType["IndicatorDescriptionIntervention"] = 74] = "IndicatorDescriptionIntervention";
        LinkType[LinkType["IndicatorDescriptionInterventions"] = 75] = "IndicatorDescriptionInterventions";
        LinkType[LinkType["IndicatorDescriptionKeyword"] = 76] = "IndicatorDescriptionKeyword";
        LinkType[LinkType["IndicatorDescriptionKeywords"] = 77] = "IndicatorDescriptionKeywords";
        LinkType[LinkType["IndicatorDescriptionLocaleCounty"] = 78] = "IndicatorDescriptionLocaleCounty";
        LinkType[LinkType["IndicatorDescriptionLocaleCounties"] = 79] = "IndicatorDescriptionLocaleCounties";
        LinkType[LinkType["IndicatorDescriptionLocaleHospitalReferralRegion"] = 80] = "IndicatorDescriptionLocaleHospitalReferralRegion";
        LinkType[LinkType["IndicatorDescriptionLocaleHospitalReferralRegions"] = 81] = "IndicatorDescriptionLocaleHospitalReferralRegions";
        LinkType[LinkType["IndicatorDescriptionLocaleLevel"] = 82] = "IndicatorDescriptionLocaleLevel";
        LinkType[LinkType["IndicatorDescriptionLocaleLevels"] = 83] = "IndicatorDescriptionLocaleLevels";
        LinkType[LinkType["IndicatorDescriptionLocale"] = 84] = "IndicatorDescriptionLocale";
        LinkType[LinkType["IndicatorDescriptionLocales"] = 85] = "IndicatorDescriptionLocales";
        LinkType[LinkType["IndicatorDescriptionLocaleState"] = 86] = "IndicatorDescriptionLocaleState";
        LinkType[LinkType["IndicatorDescriptionLocaleStates"] = 87] = "IndicatorDescriptionLocaleStates";
        LinkType[LinkType["IndicatorDescriptionMethodologyNote"] = 88] = "IndicatorDescriptionMethodologyNote";
        LinkType[LinkType["IndicatorDescriptionMethodologyNotes"] = 89] = "IndicatorDescriptionMethodologyNotes";
        LinkType[LinkType["IndicatorDescriptionMoreInfo"] = 90] = "IndicatorDescriptionMoreInfo";
        LinkType[LinkType["IndicatorDescriptionMoreInfos"] = 91] = "IndicatorDescriptionMoreInfos";
        LinkType[LinkType["IndicatorDescriptionReference"] = 92] = "IndicatorDescriptionReference";
        LinkType[LinkType["IndicatorDescriptionReferences"] = 93] = "IndicatorDescriptionReferences";
        LinkType[LinkType["IndicatorDescriptionResource"] = 94] = "IndicatorDescriptionResource";
        LinkType[LinkType["IndicatorDescriptionResources"] = 95] = "IndicatorDescriptionResources";
        LinkType[LinkType["IndicatorDescription"] = 96] = "IndicatorDescription";
        LinkType[LinkType["IndicatorDescriptions"] = 97] = "IndicatorDescriptions";
        LinkType[LinkType["IndicatorDescriptionHP2020"] = 98] = "IndicatorDescriptionHP2020";
        LinkType[LinkType["IndicatorDescriptionHP2020s"] = 99] = "IndicatorDescriptionHP2020s";
        LinkType[LinkType["IndicatorDescriptionTimeFrame"] = 100] = "IndicatorDescriptionTimeFrame";
        LinkType[LinkType["IndicatorDescriptionTimeFrames"] = 101] = "IndicatorDescriptionTimeFrames";
        LinkType[LinkType["IndicatorDescriptionYear"] = 102] = "IndicatorDescriptionYear";
        LinkType[LinkType["IndicatorDescriptionYears"] = 103] = "IndicatorDescriptionYears";
        LinkType[LinkType["IndicatorDimensionGraph"] = 104] = "IndicatorDimensionGraph";
        LinkType[LinkType["IndicatorDimensionGraphs"] = 105] = "IndicatorDimensionGraphs";
        LinkType[LinkType["IndicatorDimension"] = 106] = "IndicatorDimension";
        LinkType[LinkType["IndicatorDimensions"] = 107] = "IndicatorDimensions";
        LinkType[LinkType["Indicator"] = 108] = "Indicator";
        LinkType[LinkType["Indicators"] = 109] = "Indicators";
        LinkType[LinkType["Initiative"] = 110] = "Initiative";
        LinkType[LinkType["Initiatives"] = 111] = "Initiatives";
        LinkType[LinkType["Intervention"] = 112] = "Intervention";
        LinkType[LinkType["Interventions"] = 113] = "Interventions";
        LinkType[LinkType["Keyword"] = 114] = "Keyword";
        LinkType[LinkType["Keywords"] = 115] = "Keywords";
        LinkType[LinkType["LocaleLevel"] = 116] = "LocaleLevel";
        LinkType[LinkType["LocaleLevels"] = 117] = "LocaleLevels";
        LinkType[LinkType["LocaleRelation"] = 118] = "LocaleRelation";
        LinkType[LinkType["LocaleRelations"] = 119] = "LocaleRelations";
        LinkType[LinkType["Locale"] = 120] = "Locale";
        LinkType[LinkType["Locales"] = 121] = "Locales";
        LinkType[LinkType["MaritalStatus"] = 122] = "MaritalStatus";
        LinkType[LinkType["MaritalStatuses"] = 123] = "MaritalStatuses";
        LinkType[LinkType["MaritalStatusRelation"] = 124] = "MaritalStatusRelation";
        LinkType[LinkType["MaritalStatusRelations"] = 125] = "MaritalStatusRelations";
        LinkType[LinkType["Modifier"] = 126] = "Modifier";
        LinkType[LinkType["Modifiers"] = 127] = "Modifiers";
        LinkType[LinkType["ModifierGraph"] = 128] = "ModifierGraph";
        LinkType[LinkType["ModifierGraphs"] = 129] = "ModifierGraphs";
        LinkType[LinkType["ObesityStatus"] = 130] = "ObesityStatus";
        LinkType[LinkType["ObesityStatuses"] = 131] = "ObesityStatuses";
        LinkType[LinkType["ObesityStatusRelation"] = 132] = "ObesityStatusRelation";
        LinkType[LinkType["ObesityStatusRelations"] = 133] = "ObesityStatusRelations";
        LinkType[LinkType["Other"] = 134] = "Other";
        LinkType[LinkType["Others"] = 135] = "Others";
        LinkType[LinkType["OtherRelation"] = 136] = "OtherRelation";
        LinkType[LinkType["OtherRelations"] = 137] = "OtherRelations";
        LinkType[LinkType["RaceEthnicity"] = 138] = "RaceEthnicity";
        LinkType[LinkType["RaceEthnicities"] = 139] = "RaceEthnicities";
        LinkType[LinkType["RaceEthnicityRelation"] = 140] = "RaceEthnicityRelation";
        LinkType[LinkType["RaceEthnicityRelations"] = 141] = "RaceEthnicityRelations";
        LinkType[LinkType["Sex"] = 142] = "Sex";
        LinkType[LinkType["Sexes"] = 143] = "Sexes";
        LinkType[LinkType["SexRelation"] = 144] = "SexRelation";
        LinkType[LinkType["SexRelations"] = 145] = "SexRelations";
        LinkType[LinkType["SexualOrientation"] = 146] = "SexualOrientation";
        LinkType[LinkType["SexualOrientations"] = 147] = "SexualOrientations";
        LinkType[LinkType["SexualOrientationRelation"] = 148] = "SexualOrientationRelation";
        LinkType[LinkType["SexualOrientationRelations"] = 149] = "SexualOrientationRelations";
        LinkType[LinkType["Timeframe"] = 150] = "Timeframe";
        LinkType[LinkType["Timeframes"] = 151] = "Timeframes";
        LinkType[LinkType["Total"] = 152] = "Total";
        LinkType[LinkType["Totals"] = 153] = "Totals";
        LinkType[LinkType["TotalRelation"] = 154] = "TotalRelation";
        LinkType[LinkType["TotalRelations"] = 155] = "TotalRelations";
        LinkType[LinkType["Url"] = 156] = "Url";
        LinkType[LinkType["Urls"] = 157] = "Urls";
        LinkType[LinkType["ValueLabel"] = 158] = "ValueLabel";
        LinkType[LinkType["ValueLabels"] = 159] = "ValueLabels";
        LinkType[LinkType["VeteranStatus"] = 160] = "VeteranStatus";
        LinkType[LinkType["VeteranStatuses"] = 161] = "VeteranStatuses";
        LinkType[LinkType["VeteranStatusRelation"] = 162] = "VeteranStatusRelation";
        LinkType[LinkType["VeteranStatusRelations"] = 163] = "VeteranStatusRelations";
        LinkType[LinkType["Year"] = 164] = "Year";
        LinkType[LinkType["Years"] = 165] = "Years";
    })(hiw.LinkType || (hiw.LinkType = {}));
    var LinkType = hiw.LinkType;
    (function (ExportFileTypeEnum) {
        ExportFileTypeEnum[ExportFileTypeEnum["Excel"] = 0] = "Excel";
        ExportFileTypeEnum[ExportFileTypeEnum["Excel2003"] = 1] = "Excel2003";
        ExportFileTypeEnum[ExportFileTypeEnum["CSV"] = 2] = "CSV";
    })(hiw.ExportFileTypeEnum || (hiw.ExportFileTypeEnum = {}));
    var ExportFileTypeEnum = hiw.ExportFileTypeEnum;
    (function (IndicatorDescriptionDataSourceDataDescription) {
        IndicatorDescriptionDataSourceDataDescription[IndicatorDescriptionDataSourceDataDescription["Numerator"] = 0] = "Numerator";
        IndicatorDescriptionDataSourceDataDescription[IndicatorDescriptionDataSourceDataDescription["Denominator"] = 1] = "Denominator";
        IndicatorDescriptionDataSourceDataDescription[IndicatorDescriptionDataSourceDataDescription["Both"] = 2] = "Both";
        IndicatorDescriptionDataSourceDataDescription[IndicatorDescriptionDataSourceDataDescription["Other"] = 3] = "Other";
    })(hiw.IndicatorDescriptionDataSourceDataDescription || (hiw.IndicatorDescriptionDataSourceDataDescription = {}));
    var IndicatorDescriptionDataSourceDataDescription = hiw.IndicatorDescriptionDataSourceDataDescription;
    (function (LocaleLevelName) {
        LocaleLevelName[LocaleLevelName["None"] = 0] = "None";
        LocaleLevelName[LocaleLevelName["National"] = 1] = "National";
        LocaleLevelName[LocaleLevelName["State"] = 2] = "State";
        LocaleLevelName[LocaleLevelName["County"] = 3] = "County";
        LocaleLevelName[LocaleLevelName["HospitalReferralRegion"] = 4] = "HospitalReferralRegion";
    })(hiw.LocaleLevelName || (hiw.LocaleLevelName = {}));
    var LocaleLevelName = hiw.LocaleLevelName;
    (function (SystemSettingKeyName) {
        SystemSettingKeyName[SystemSettingKeyName["AuditTableName"] = 0] = "AuditTableName";
        SystemSettingKeyName[SystemSettingKeyName["DataModelVersion"] = 1] = "DataModelVersion";
        SystemSettingKeyName[SystemSettingKeyName["DefaultGuestAccess"] = 2] = "DefaultGuestAccess";
        SystemSettingKeyName[SystemSettingKeyName["RequireStrongPasswords"] = 3] = "RequireStrongPasswords";
        SystemSettingKeyName[SystemSettingKeyName["RootDirectory"] = 4] = "RootDirectory";
        SystemSettingKeyName[SystemSettingKeyName["RootExportPath"] = 5] = "RootExportPath";
        SystemSettingKeyName[SystemSettingKeyName["SessionIDType"] = 6] = "SessionIDType";
        SystemSettingKeyName[SystemSettingKeyName["SessionTimeoutInMinutes"] = 7] = "SessionTimeoutInMinutes";
        SystemSettingKeyName[SystemSettingKeyName["ShadowType"] = 8] = "ShadowType";
        SystemSettingKeyName[SystemSettingKeyName["SystemAbbreviation"] = 9] = "SystemAbbreviation";
        SystemSettingKeyName[SystemSettingKeyName["SystemName"] = 10] = "SystemName";
        SystemSettingKeyName[SystemSettingKeyName["TableListTableName"] = 11] = "TableListTableName";
    })(hiw.SystemSettingKeyName || (hiw.SystemSettingKeyName = {}));
    var SystemSettingKeyName = hiw.SystemSettingKeyName;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    var PropertyMap = (function () {
        function PropertyMap(name, apiName) {
            this.name = name;
            this.apiName = apiName;
        }
        PropertyMap.prototype.toString = function () {
            return this.apiName;
        };
        return PropertyMap;
    })();
    hiw.PropertyMap = PropertyMap;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    (function (HttpMethod) {
        HttpMethod[HttpMethod["GET"] = 0] = "GET";
        HttpMethod[HttpMethod["POST"] = 1] = "POST";
    })(hiw.HttpMethod || (hiw.HttpMethod = {}));
    var HttpMethod = hiw.HttpMethod;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    var Endpoint = (function () {
        function Endpoint(initializer, method, uriTemplate, call) {
            this.initializer = initializer;
            this.method = method;
            this.uriTemplate = uriTemplate;
            this.call = call;
            this.call["endpoint"] = this;
        }
        Endpoint.addSimple = function (owningType, method, uriTemplate, call) {
            return Endpoint.add(function (o) { return null; }, method, uriTemplate, call);
        };
        Endpoint.addSingle = function (owningType, method, uriTemplate, call) {
            return Endpoint.add(function (o) { return new owningType(); }, method, uriTemplate, call);
        };
        Endpoint.addArray = function (owningType, method, uriTemplate, call) {
            return Endpoint.add(function (o) {
                var array = new Array();
                for (var i = 0; i < o.dataLength; i++)
                    array.push(new owningType());
                return array;
            }, method, uriTemplate, call);
        };
        Endpoint.add = function (initializer, method, uriTemplate, call) {
            var endpoint = new Endpoint(initializer, method, uriTemplate, call);
            hiw.API.Endpoints.push(endpoint);
            return endpoint;
        };
        Endpoint.fromSelf = function () {
            return arguments.callee.caller["endpoint"];
        };
        return Endpoint;
    })();
    hiw.Endpoint = Endpoint;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    var Link = (function () {
        function Link() {
            this.relationship = null;
            this.type = null;
            this.typeName = null;
            this.href = null;
        }
        return Link;
    })();
    hiw.Link = Link;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    var ServiceObject = (function () {
        function ServiceObject() {
        }
        return ServiceObject;
    })();
    hiw.ServiceObject = ServiceObject;
})(hiw || (hiw = {}));
/// <reference path="Common.ts"/>
var hiw;
(function (hiw) {
    var ServiceDataObject = (function (_super) {
        __extends(ServiceDataObject, _super);
        function ServiceDataObject() {
            _super.apply(this, arguments);
            this.links = new Array();
        }
        ServiceDataObject.prototype.getFields = function () {
            throw "Function not implemented in derived class.";
        };
        ServiceDataObject.prototype.getPropertyMaps = function () {
            var fields = this.getFields();
            var propertyMaps = new Array();
            for (var field in fields)
                propertyMaps.push(fields[field]);
            return propertyMaps;
        };
        ServiceDataObject.prototype.findLinks = function (typeName, relationship, first) {
            if (relationship === void 0) { relationship = null; }
            if (first === void 0) { first = false; }
            var matchingLinks = new Array();
            for (var i = 0; i < this.links.length; i++) {
                var link = this.links[i];
                if (link.typeName === hiw.LinkType[typeName] && (!relationship || link.relationship === relationship)) {
                    if (first)
                        return link;
                    matchingLinks.push(link);
                }
            }
            return matchingLinks;
        };
        /** Recusively fills this instance with the provided data.
         *  @param json A JSON object containing the properties and values to copy to this instance. */
        ServiceDataObject.prototype.fill = function (json, exclude) {
            if (json == null)
                return;
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
                this.links = new Array();
                for (var i = 0; i < json.Links.length; i++)
                    this.links.push(hiw.extend(new hiw.Link(), json.Links[i]));
            }
        };
        ServiceDataObject.prototype.parseDate = function (value) {
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
        };
        return ServiceDataObject;
    })(hiw.ServiceObject);
    hiw.ServiceDataObject = ServiceDataObject;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    /** Represents a response received from the API. */
    var APIResponse = (function (_super) {
        __extends(APIResponse, _super);
        function APIResponse(endpoint, url, postData) {
            _super.call(this);
            this.endpoint = endpoint;
            this.url = url;
            this.postData = postData;
        }
        APIResponse.prototype.fill = function (json) {
            if (json == null)
                return;
            this.status = json.Status;
            this.message = json.Message;
            this.dataLength = json.DataLength;
            this.data = APIResponse.fillInstance(this.endpoint.initializer(this), json.Data);
        };
        APIResponse.fillInstance = function (target, source) {
            if (source == null)
                target = null;
            else if (target instanceof hiw.ServiceDataObject)
                target.fill(source);
            else if (Array.isArray(target)) {
                if (Array.isArray(source)) {
                    var dataArray = target;
                    if (dataArray.length == source.length) {
                        for (var i = 0; i < dataArray.length; i++)
                            APIResponse.fillInstance(dataArray[i], source[i]);
                    }
                    else
                        throw "Attempted to fill data array [" + dataArray.length + "] with array [" + source.length + "].";
                }
                else
                    throw "Attempted to fill data array with non-array.";
            }
            else
                target = source;
            return target;
        };
        return APIResponse;
    })(hiw.ServiceObject);
    hiw.APIResponse = APIResponse;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    /** Provides core functionality to interact with the HIW API. */
    var API = (function () {
        /** Creates a new API instance with the provided base URL. */
        function API(apiKey, baseURL) {
            if (apiKey === void 0) { apiKey = null; }
            if (baseURL === void 0) { baseURL = API.DefaultBaseURL; }
            this.apiKey = apiKey;
            this.baseURL = baseURL;
            this.initialize();
        }
        API.prototype.initialize = function () {
        };
        API.parameterizePath = function (path, params) {
            var parameterizedPath = path;
            if (params)
                for (var key in params)
                    parameterizedPath = parameterizedPath.replace("{" + key + "}", params[key]);
            return parameterizedPath;
        };
        API.prototype.executeEndpoint = function (endpoint, callback, params, postData, page, pageSize) {
            if (page === void 0) { page = 1; }
            if (pageSize === void 0) { pageSize = null; }
            var parameterizedPath = null;
            var url = null;
            var async = null;
            params = (params || {});
            params.page = page;
            params.pageSize = pageSize;
            parameterizedPath = API.parameterizePath(endpoint.uriTemplate, params);
            url = this.baseURL + parameterizedPath;
            async = this.executeUrl(endpoint.method, url, postData, function (json, error) {
                var response = new hiw.APIResponse(endpoint, url, postData);
                if (error == null) {
                    try {
                        response.fill(json);
                    }
                    catch (e) {
                        error = "Error loading JSON into APIResponse instance: " + e.message;
                    }
                }
                //Prefer specific HTTP error message.
                if ("Error" === response.status)
                    error = "Error returned from HIW API call: " + response.message;
                if (callback)
                    callback((response ? response.data : null), response, error);
            });
            return async;
        };
        API.prototype.executeUrl = function (method, url, postData, callback) {
            var request = hiw.getHttpRequest();
            var async = new hiw.Async();
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    var json = null;
                    var error = null;
                    if (request.status === 200) {
                        try {
                            json = JSON.parse(request.responseText);
                        }
                        catch (e) {
                            error = "Error parsing HIW API response as JSON: " + e.message;
                        }
                        if (json == null)
                            error = "Call to HIW API endpoint returned no parsable data.";
                    }
                    else
                        error = "Call to HIW API endpoint \"" + url + "\" returned HTTP status code: " + request.status + " " + request.statusText;
                    if (callback)
                        callback(json, error);
                    async.complete();
                }
            };
            request.open(hiw.HttpMethod[method], url);
            request.setRequestHeader("X-HIW-API-Key", this.apiKey);
            request.setRequestHeader("Accept", "application/json");
            if (method == 1 /* POST */) {
                request.setRequestHeader("Content-Type", "application/json");
                request.send(JSON.stringify(postData));
            }
            else
                request.send();
            return async;
        };
        API.verifyApiKey = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        API.DefaultBaseURL = "http://services.healthindicators.gov/v5/REST.svc/";
        API.Endpoints = new Array();
        return API;
    })();
    hiw.API = API;
})(hiw || (hiw = {}));
var hiw;
(function (hiw) {
    var Version = (function (_super) {
        __extends(Version, _super);
        function Version(major, minor, revision, build) {
            _super.call(this);
            this.major = major;
            this.minor = minor;
            this.revision = revision;
            this.build = build;
        }
        Version.prototype.getFields = function () {
            return Version.Fields;
        };
        Version.Fields = {
            major: new hiw.PropertyMap("major", "Major"),
            minor: new hiw.PropertyMap("minor", "Minor"),
            revision: new hiw.PropertyMap("revision", "Revision"),
            build: new hiw.PropertyMap("build", "Build")
        };
        return Version;
    })(hiw.ServiceDataObject);
    hiw.Version = Version;
    ;
    hiw.APIVersion = new Version(5, 0, 1, 0);
})(hiw || (hiw = {}));
//# sourceMappingURL=hiw-api-lite.js.map