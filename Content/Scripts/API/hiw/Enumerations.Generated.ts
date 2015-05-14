module hiw {
    /** Exposes functionality through one or more service end points. */
    export enum LinkType {
        Age,
        Ages,
        AgeRelation,
        AgeRelations,
        CharacteristicOfSchoolOrStudent,
        CharacteristicOfSchoolOrStudents,
        CharacteristicOfSchoolOrStudentRelation,
        CharacteristicOfSchoolOrStudentRelations,
        CountryOfBirth,
        CountryOfBirths,
        CountryOfBirthRelation,
        CountryOfBirthRelations,
        DataCategory,
        DataCategories,
        DataCategoryRelation,
        DataCategoryRelations,
        DataSourceDataSupplier,
        DataSourceDataSuppliers,
        DataSource,
        DataSources,
        DataSourceURL,
        DataSourceURLs,
        DataSupplier,
        DataSuppliers,
        DimensionBook,
        DimensionBooks,
        DimensionBookRelation,
        DimensionBookRelations,
        DimensionGraph,
        DimensionGraphs,
        DimensionList,
        DimensionLists,
        DisabilityStatus,
        DisabilityStatuses,
        DisabilityStatusRelation,
        DisabilityStatusRelations,
        EducationalAttainment,
        EducationalAttainments,
        EducationalAttainmentRelation,
        EducationalAttainmentRelations,
        FamilyType,
        FamilyTypes,
        FamilyTypeRelation,
        FamilyTypeRelations,
        Geography,
        Geographies,
        GeographyRelation,
        GeographyRelations,
        GlossaryTerm,
        GlossaryTerms,
        HealthInsuranceStatus,
        HealthInsuranceStatuses,
        HealthInsuranceStatusRelation,
        HealthInsuranceStatusRelations,
        HP2020TSM,
        HP2020TSMs,
        IncomeAndPovertyStatus,
        IncomeAndPovertyStatuses,
        IncomeAndPovertyStatusRelation,
        IncomeAndPovertyStatusRelations,
        IndicatorDescriptionDataCategory,
        IndicatorDescriptionDataCategories,
        IndicatorDescriptionDataSource,
        IndicatorDescriptionDataSources,
        IndicatorDescriptionDefaultDimensionGraph,
        IndicatorDescriptionDefaultDimensionGraphs,
        IndicatorDescriptionDimension,
        IndicatorDescriptionDimensions,
        IndicatorDescriptionDimensionGraph,
        IndicatorDescriptionDimensionGraphs,
        IndicatorDescriptionDimensionValue,
        IndicatorDescriptionDimensionValues,
        IndicatorDescriptionInitiative,
        IndicatorDescriptionInitiatives,
        IndicatorDescriptionIntervention,
        IndicatorDescriptionInterventions,
        IndicatorDescriptionKeyword,
        IndicatorDescriptionKeywords,
        IndicatorDescriptionLocaleCounty,
        IndicatorDescriptionLocaleCounties,
        IndicatorDescriptionLocaleHospitalReferralRegion,
        IndicatorDescriptionLocaleHospitalReferralRegions,
        IndicatorDescriptionLocaleLevel,
        IndicatorDescriptionLocaleLevels,
        IndicatorDescriptionLocale,
        IndicatorDescriptionLocales,
        IndicatorDescriptionLocaleState,
        IndicatorDescriptionLocaleStates,
        IndicatorDescriptionMethodologyNote,
        IndicatorDescriptionMethodologyNotes,
        IndicatorDescriptionMoreInfo,
        IndicatorDescriptionMoreInfos,
        IndicatorDescriptionReference,
        IndicatorDescriptionReferences,
        IndicatorDescriptionResource,
        IndicatorDescriptionResources,
        IndicatorDescription,
        IndicatorDescriptions,
        IndicatorDescriptionHP2020,
        IndicatorDescriptionHP2020s,
        IndicatorDescriptionTimeFrame,
        IndicatorDescriptionTimeFrames,
        IndicatorDescriptionYear,
        IndicatorDescriptionYears,
        IndicatorDimensionGraph,
        IndicatorDimensionGraphs,
        IndicatorDimension,
        IndicatorDimensions,
        Indicator,
        Indicators,
        Initiative,
        Initiatives,
        Intervention,
        Interventions,
        Keyword,
        Keywords,
        LocaleLevel,
        LocaleLevels,
        LocaleRelation,
        LocaleRelations,
        Locale,
        Locales,
        MaritalStatus,
        MaritalStatuses,
        MaritalStatusRelation,
        MaritalStatusRelations,
        Modifier,
        Modifiers,
        ModifierGraph,
        ModifierGraphs,
        ObesityStatus,
        ObesityStatuses,
        ObesityStatusRelation,
        ObesityStatusRelations,
        Other,
        Others,
        OtherRelation,
        OtherRelations,
        RaceEthnicity,
        RaceEthnicities,
        RaceEthnicityRelation,
        RaceEthnicityRelations,
        Sex,
        Sexes,
        SexRelation,
        SexRelations,
        SexualOrientation,
        SexualOrientations,
        SexualOrientationRelation,
        SexualOrientationRelations,
        Timeframe,
        Timeframes,
        Total,
        Totals,
        TotalRelation,
        TotalRelations,
        Url,
        Urls,
        ValueLabel,
        ValueLabels,
        VeteranStatus,
        VeteranStatuses,
        VeteranStatusRelation,
        VeteranStatusRelations,
        Year,
        Years
    }

    export enum ExportFileTypeEnum {Excel,
        Excel2003,
        CSV
    }

    export enum IndicatorDescriptionDataSourceDataDescription {Numerator,
        Denominator,
        Both,
        Other
    }

    export enum LocaleLevelName {None,
        National,
        State,
        County,
        HospitalReferralRegion
    }

    export enum SystemSettingKeyName {AuditTableName,
        DataModelVersion,
        DefaultGuestAccess,
        RequireStrongPasswords,
        RootDirectory,
        RootExportPath,
        SessionIDType,
        SessionTimeoutInMinutes,
        ShadowType,
        SystemAbbreviation,
        SystemName,
        TableListTableName
    }
}