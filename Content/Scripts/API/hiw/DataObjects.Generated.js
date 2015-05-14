var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var hiw;
(function (hiw) {
    /** Contains properties and static functionality for the Age type. */
    var Age = (function (_super) {
        __extends(Age, _super);
        function Age() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentAgeID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        Age.prototype.getFields = function () {
            return Age.Fields;
        };
        /** Gets a list of all of the Ages in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Ages */
        Age.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Ages exist. */
        Age.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Ages method. */
        Age.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Age with the specified primary key.
         *  @param id The primary key of the Age to return.
         *  @return The matching Age, if one exists, or null. */
        Age.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Ages based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Ages which match the provided filter. */
        Age.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Ages exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Ages which match the provided filter. */
        Age.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Ages exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Ageswhich match the provided filter. */
        Age.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Ages by ParentAgeID.
         *  @return An Array of Ages. */
        Age.prototype.getAges = function (api, callback, page) {
            Age.getByParentAgeID(this.id, api, callback, page);
        };
        /** Gets Ages by ParentAgeID.
         *  @param ageID The ID of the Age for which to retrieve the child Ages.
         *  @return An Array of Ages. */
        Age.getByParentAgeID = function (ageID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID }, null, page);
        };
        /** Gets how many Ages by ParentAgeID exist.
         *  @return An Array of Ages. */
        Age.prototype.getAgesCount = function (api, callback) {
            Age.getByParentAgeIDCount(this.id, api, callback);
        };
        /** Gets how many Ages by ParentAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child Ages.
         *  @return An Array of Ages. */
        Age.getByParentAgeIDCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Gets how many pages of Ages by ParentAgeID exist.
         *  @return An Array of Ages. */
        Age.prototype.getAgesPageCount = function (api, callback) {
            Age.getByParentAgeIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of Ages by ParentAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child Ages.
         *  @return An Array of Ages. */
        Age.getByParentAgeIDPageCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Returns the related ParentAge based on the unique ID of the related Age.
         *  @return A single Age, or null. */
        Age.prototype.getParentAge = function (api, callback) {
            Age.getParentAgeForAge(this.id, api, callback);
        };
        /** Returns the related ParentAge based on the unique ID of the related Age.
         *  @param ageID The ID of the Age to retrieve.
         *  @return A single Age, or null. */
        Age.getParentAgeForAge = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        Age.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentAgeID: new hiw.PropertyMap("parentAgeID", "ParentAgeID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return Age;
    })(hiw.ServiceDataObject);
    hiw.Age = Age;
    /** Contains properties and static functionality for the AgeRelation type. */
    var AgeRelation = (function (_super) {
        __extends(AgeRelation, _super);
        function AgeRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorAgeID = null;
            this.descendantAgeID = null;
            this.hops = null;
        }
        AgeRelation.prototype.getFields = function () {
            return AgeRelation.Fields;
        };
        /** Gets a list of all of the AgeRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of AgeRelations */
        AgeRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many AgeRelations exist. */
        AgeRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the AgeRelations method. */
        AgeRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the AgeRelation with the specified primary key.
         *  @param id The primary key of the AgeRelation to return.
         *  @return The matching AgeRelation, if one exists, or null. */
        AgeRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of AgeRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All AgeRelations which match the provided filter. */
        AgeRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many AgeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of AgeRelations which match the provided filter. */
        AgeRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of AgeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of AgeRelationswhich match the provided filter. */
        AgeRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets AgeRelations by AncestorAgeID.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        AgeRelation.getByAncestorAgeID = function (ageID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID }, null, page);
        };
        /** Gets how many AgeRelations by AncestorAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        AgeRelation.getByAncestorAgeIDCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Gets how many pages of AgeRelations by AncestorAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        AgeRelation.getByAncestorAgeIDPageCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Returns the related AncestorAge based on the unique ID of the related AgeRelation.
         *  @return A single AgeRelation, or null. */
        AgeRelation.prototype.getAncestorAge = function (api, callback) {
            AgeRelation.getAncestorAgeForAgeRelation(this.id, api, callback);
        };
        /** Returns the related AncestorAge based on the unique ID of the related AgeRelation.
         *  @param ageRelationID The ID of the AgeRelation to retrieve.
         *  @return A single AgeRelation, or null. */
        AgeRelation.getAncestorAgeForAgeRelation = function (ageRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageRelationID: ageRelationID });
        };
        /** Gets AgeRelations by DescendantAgeID.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        AgeRelation.getByDescendantAgeID = function (ageID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID }, null, page);
        };
        /** Gets how many AgeRelations by DescendantAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        AgeRelation.getByDescendantAgeIDCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Gets how many pages of AgeRelations by DescendantAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        AgeRelation.getByDescendantAgeIDPageCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Returns the related DescendantAge based on the unique ID of the related AgeRelation.
         *  @return A single AgeRelation, or null. */
        AgeRelation.prototype.getDescendantAge = function (api, callback) {
            AgeRelation.getDescendantAgeForAgeRelation(this.id, api, callback);
        };
        /** Returns the related DescendantAge based on the unique ID of the related AgeRelation.
         *  @param ageRelationID The ID of the AgeRelation to retrieve.
         *  @return A single AgeRelation, or null. */
        AgeRelation.getDescendantAgeForAgeRelation = function (ageRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageRelationID: ageRelationID });
        };
        AgeRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorAgeID: new hiw.PropertyMap("ancestorAgeID", "AncestorAgeID"),
            descendantAgeID: new hiw.PropertyMap("descendantAgeID", "DescendantAgeID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return AgeRelation;
    })(hiw.ServiceDataObject);
    hiw.AgeRelation = AgeRelation;
    /** Contains properties and static functionality for the CharacteristicOfSchoolOrStudent type. */
    var CharacteristicOfSchoolOrStudent = (function (_super) {
        __extends(CharacteristicOfSchoolOrStudent, _super);
        function CharacteristicOfSchoolOrStudent() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentCharacteristicOfSchoolOrStudentID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        CharacteristicOfSchoolOrStudent.prototype.getFields = function () {
            return CharacteristicOfSchoolOrStudent.Fields;
        };
        /** Gets a list of all of the CharacteristicOfSchoolOrStudents in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CharacteristicOfSchoolOrStudents */
        CharacteristicOfSchoolOrStudent.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many CharacteristicOfSchoolOrStudents exist. */
        CharacteristicOfSchoolOrStudent.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the CharacteristicOfSchoolOrStudents method. */
        CharacteristicOfSchoolOrStudent.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the CharacteristicOfSchoolOrStudent with the specified primary key.
         *  @param id The primary key of the CharacteristicOfSchoolOrStudent to return.
         *  @return The matching CharacteristicOfSchoolOrStudent, if one exists, or null. */
        CharacteristicOfSchoolOrStudent.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of CharacteristicOfSchoolOrStudents based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CharacteristicOfSchoolOrStudents which match the provided filter. */
        CharacteristicOfSchoolOrStudent.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many CharacteristicOfSchoolOrStudents exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CharacteristicOfSchoolOrStudents which match the provided filter. */
        CharacteristicOfSchoolOrStudent.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of CharacteristicOfSchoolOrStudents exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CharacteristicOfSchoolOrStudentswhich match the provided filter. */
        CharacteristicOfSchoolOrStudent.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        CharacteristicOfSchoolOrStudent.prototype.getCharacteristicOfSchoolOrStudents = function (api, callback, page) {
            CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentID(this.id, api, callback, page);
        };
        /** Gets CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudents.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentID = function (characteristicOfSchoolOrStudentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page);
        };
        /** Gets how many CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        CharacteristicOfSchoolOrStudent.prototype.getCharacteristicOfSchoolOrStudentsCount = function (api, callback) {
            CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentIDCount(this.id, api, callback);
        };
        /** Gets how many CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudents.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentIDCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Gets how many pages of CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        CharacteristicOfSchoolOrStudent.prototype.getCharacteristicOfSchoolOrStudentsPageCount = function (api, callback) {
            CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudents.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentIDPageCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Returns the related ParentCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudent.
         *  @return A single CharacteristicOfSchoolOrStudent, or null. */
        CharacteristicOfSchoolOrStudent.prototype.getParentCharacteristicOfSchoolOrStudent = function (api, callback) {
            CharacteristicOfSchoolOrStudent.getParentCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudent(this.id, api, callback);
        };
        /** Returns the related ParentCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudent.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent to retrieve.
         *  @return A single CharacteristicOfSchoolOrStudent, or null. */
        CharacteristicOfSchoolOrStudent.getParentCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudent = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        CharacteristicOfSchoolOrStudent.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentCharacteristicOfSchoolOrStudentID: new hiw.PropertyMap("parentCharacteristicOfSchoolOrStudentID", "ParentCharacteristicOfSchoolOrStudentID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return CharacteristicOfSchoolOrStudent;
    })(hiw.ServiceDataObject);
    hiw.CharacteristicOfSchoolOrStudent = CharacteristicOfSchoolOrStudent;
    /** Contains properties and static functionality for the CharacteristicOfSchoolOrStudentRelation type. */
    var CharacteristicOfSchoolOrStudentRelation = (function (_super) {
        __extends(CharacteristicOfSchoolOrStudentRelation, _super);
        function CharacteristicOfSchoolOrStudentRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorCharacteristicOfSchoolOrStudentID = null;
            this.descendantCharacteristicOfSchoolOrStudentID = null;
            this.hops = null;
        }
        CharacteristicOfSchoolOrStudentRelation.prototype.getFields = function () {
            return CharacteristicOfSchoolOrStudentRelation.Fields;
        };
        /** Gets a list of all of the CharacteristicOfSchoolOrStudentRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CharacteristicOfSchoolOrStudentRelations */
        CharacteristicOfSchoolOrStudentRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many CharacteristicOfSchoolOrStudentRelations exist. */
        CharacteristicOfSchoolOrStudentRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the CharacteristicOfSchoolOrStudentRelations method. */
        CharacteristicOfSchoolOrStudentRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the CharacteristicOfSchoolOrStudentRelation with the specified primary key.
         *  @param id The primary key of the CharacteristicOfSchoolOrStudentRelation to return.
         *  @return The matching CharacteristicOfSchoolOrStudentRelation, if one exists, or null. */
        CharacteristicOfSchoolOrStudentRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of CharacteristicOfSchoolOrStudentRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CharacteristicOfSchoolOrStudentRelations which match the provided filter. */
        CharacteristicOfSchoolOrStudentRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many CharacteristicOfSchoolOrStudentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CharacteristicOfSchoolOrStudentRelations which match the provided filter. */
        CharacteristicOfSchoolOrStudentRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of CharacteristicOfSchoolOrStudentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CharacteristicOfSchoolOrStudentRelationswhich match the provided filter. */
        CharacteristicOfSchoolOrStudentRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets CharacteristicOfSchoolOrStudentRelations by AncestorCharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        CharacteristicOfSchoolOrStudentRelation.getByAncestorCharacteristicOfSchoolOrStudentID = function (characteristicOfSchoolOrStudentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page);
        };
        /** Gets how many CharacteristicOfSchoolOrStudentRelations by AncestorCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        CharacteristicOfSchoolOrStudentRelation.getByAncestorCharacteristicOfSchoolOrStudentIDCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Gets how many pages of CharacteristicOfSchoolOrStudentRelations by AncestorCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        CharacteristicOfSchoolOrStudentRelation.getByAncestorCharacteristicOfSchoolOrStudentIDPageCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Returns the related AncestorCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        CharacteristicOfSchoolOrStudentRelation.prototype.getAncestorCharacteristicOfSchoolOrStudent = function (api, callback) {
            CharacteristicOfSchoolOrStudentRelation.getAncestorCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation(this.id, api, callback);
        };
        /** Returns the related AncestorCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @param characteristicOfSchoolOrStudentRelationID The ID of the CharacteristicOfSchoolOrStudentRelation to retrieve.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        CharacteristicOfSchoolOrStudentRelation.getAncestorCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation = function (characteristicOfSchoolOrStudentRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentRelationID: characteristicOfSchoolOrStudentRelationID });
        };
        /** Gets CharacteristicOfSchoolOrStudentRelations by DescendantCharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        CharacteristicOfSchoolOrStudentRelation.getByDescendantCharacteristicOfSchoolOrStudentID = function (characteristicOfSchoolOrStudentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page);
        };
        /** Gets how many CharacteristicOfSchoolOrStudentRelations by DescendantCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        CharacteristicOfSchoolOrStudentRelation.getByDescendantCharacteristicOfSchoolOrStudentIDCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Gets how many pages of CharacteristicOfSchoolOrStudentRelations by DescendantCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        CharacteristicOfSchoolOrStudentRelation.getByDescendantCharacteristicOfSchoolOrStudentIDPageCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Returns the related DescendantCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        CharacteristicOfSchoolOrStudentRelation.prototype.getDescendantCharacteristicOfSchoolOrStudent = function (api, callback) {
            CharacteristicOfSchoolOrStudentRelation.getDescendantCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation(this.id, api, callback);
        };
        /** Returns the related DescendantCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @param characteristicOfSchoolOrStudentRelationID The ID of the CharacteristicOfSchoolOrStudentRelation to retrieve.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        CharacteristicOfSchoolOrStudentRelation.getDescendantCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation = function (characteristicOfSchoolOrStudentRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentRelationID: characteristicOfSchoolOrStudentRelationID });
        };
        CharacteristicOfSchoolOrStudentRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorCharacteristicOfSchoolOrStudentID: new hiw.PropertyMap("ancestorCharacteristicOfSchoolOrStudentID", "AncestorCharacteristicOfSchoolOrStudentID"),
            descendantCharacteristicOfSchoolOrStudentID: new hiw.PropertyMap("descendantCharacteristicOfSchoolOrStudentID", "DescendantCharacteristicOfSchoolOrStudentID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return CharacteristicOfSchoolOrStudentRelation;
    })(hiw.ServiceDataObject);
    hiw.CharacteristicOfSchoolOrStudentRelation = CharacteristicOfSchoolOrStudentRelation;
    /** Contains properties and static functionality for the CountryOfBirth type. */
    var CountryOfBirth = (function (_super) {
        __extends(CountryOfBirth, _super);
        function CountryOfBirth() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentCountryOfBirthID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        CountryOfBirth.prototype.getFields = function () {
            return CountryOfBirth.Fields;
        };
        /** Gets a list of all of the CountryOfBirths in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CountryOfBirths */
        CountryOfBirth.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many CountryOfBirths exist. */
        CountryOfBirth.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the CountryOfBirths method. */
        CountryOfBirth.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the CountryOfBirth with the specified primary key.
         *  @param id The primary key of the CountryOfBirth to return.
         *  @return The matching CountryOfBirth, if one exists, or null. */
        CountryOfBirth.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of CountryOfBirths based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CountryOfBirths which match the provided filter. */
        CountryOfBirth.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many CountryOfBirths exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CountryOfBirths which match the provided filter. */
        CountryOfBirth.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of CountryOfBirths exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CountryOfBirthswhich match the provided filter. */
        CountryOfBirth.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets CountryOfBirths by ParentCountryOfBirthID.
         *  @return An Array of CountryOfBirths. */
        CountryOfBirth.prototype.getCountryOfBirths = function (api, callback, page) {
            CountryOfBirth.getByParentCountryOfBirthID(this.id, api, callback, page);
        };
        /** Gets CountryOfBirths by ParentCountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirths.
         *  @return An Array of CountryOfBirths. */
        CountryOfBirth.getByParentCountryOfBirthID = function (countryOfBirthID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID }, null, page);
        };
        /** Gets how many CountryOfBirths by ParentCountryOfBirthID exist.
         *  @return An Array of CountryOfBirths. */
        CountryOfBirth.prototype.getCountryOfBirthsCount = function (api, callback) {
            CountryOfBirth.getByParentCountryOfBirthIDCount(this.id, api, callback);
        };
        /** Gets how many CountryOfBirths by ParentCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirths.
         *  @return An Array of CountryOfBirths. */
        CountryOfBirth.getByParentCountryOfBirthIDCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Gets how many pages of CountryOfBirths by ParentCountryOfBirthID exist.
         *  @return An Array of CountryOfBirths. */
        CountryOfBirth.prototype.getCountryOfBirthsPageCount = function (api, callback) {
            CountryOfBirth.getByParentCountryOfBirthIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of CountryOfBirths by ParentCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirths.
         *  @return An Array of CountryOfBirths. */
        CountryOfBirth.getByParentCountryOfBirthIDPageCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Returns the related ParentCountryOfBirth based on the unique ID of the related CountryOfBirth.
         *  @return A single CountryOfBirth, or null. */
        CountryOfBirth.prototype.getParentCountryOfBirth = function (api, callback) {
            CountryOfBirth.getParentCountryOfBirthForCountryOfBirth(this.id, api, callback);
        };
        /** Returns the related ParentCountryOfBirth based on the unique ID of the related CountryOfBirth.
         *  @param countryOfBirthID The ID of the CountryOfBirth to retrieve.
         *  @return A single CountryOfBirth, or null. */
        CountryOfBirth.getParentCountryOfBirthForCountryOfBirth = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        CountryOfBirth.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentCountryOfBirthID: new hiw.PropertyMap("parentCountryOfBirthID", "ParentCountryOfBirthID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return CountryOfBirth;
    })(hiw.ServiceDataObject);
    hiw.CountryOfBirth = CountryOfBirth;
    /** Contains properties and static functionality for the CountryOfBirthRelation type. */
    var CountryOfBirthRelation = (function (_super) {
        __extends(CountryOfBirthRelation, _super);
        function CountryOfBirthRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorCountryOfBirthID = null;
            this.descendantCountryOfBirthID = null;
            this.hops = null;
        }
        CountryOfBirthRelation.prototype.getFields = function () {
            return CountryOfBirthRelation.Fields;
        };
        /** Gets a list of all of the CountryOfBirthRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CountryOfBirthRelations */
        CountryOfBirthRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many CountryOfBirthRelations exist. */
        CountryOfBirthRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the CountryOfBirthRelations method. */
        CountryOfBirthRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the CountryOfBirthRelation with the specified primary key.
         *  @param id The primary key of the CountryOfBirthRelation to return.
         *  @return The matching CountryOfBirthRelation, if one exists, or null. */
        CountryOfBirthRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of CountryOfBirthRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CountryOfBirthRelations which match the provided filter. */
        CountryOfBirthRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many CountryOfBirthRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CountryOfBirthRelations which match the provided filter. */
        CountryOfBirthRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of CountryOfBirthRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CountryOfBirthRelationswhich match the provided filter. */
        CountryOfBirthRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets CountryOfBirthRelations by AncestorCountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        CountryOfBirthRelation.getByAncestorCountryOfBirthID = function (countryOfBirthID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID }, null, page);
        };
        /** Gets how many CountryOfBirthRelations by AncestorCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        CountryOfBirthRelation.getByAncestorCountryOfBirthIDCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Gets how many pages of CountryOfBirthRelations by AncestorCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        CountryOfBirthRelation.getByAncestorCountryOfBirthIDPageCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Returns the related AncestorCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @return A single CountryOfBirthRelation, or null. */
        CountryOfBirthRelation.prototype.getAncestorCountryOfBirth = function (api, callback) {
            CountryOfBirthRelation.getAncestorCountryOfBirthForCountryOfBirthRelation(this.id, api, callback);
        };
        /** Returns the related AncestorCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @param countryOfBirthRelationID The ID of the CountryOfBirthRelation to retrieve.
         *  @return A single CountryOfBirthRelation, or null. */
        CountryOfBirthRelation.getAncestorCountryOfBirthForCountryOfBirthRelation = function (countryOfBirthRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthRelationID: countryOfBirthRelationID });
        };
        /** Gets CountryOfBirthRelations by DescendantCountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        CountryOfBirthRelation.getByDescendantCountryOfBirthID = function (countryOfBirthID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID }, null, page);
        };
        /** Gets how many CountryOfBirthRelations by DescendantCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        CountryOfBirthRelation.getByDescendantCountryOfBirthIDCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Gets how many pages of CountryOfBirthRelations by DescendantCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        CountryOfBirthRelation.getByDescendantCountryOfBirthIDPageCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Returns the related DescendantCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @return A single CountryOfBirthRelation, or null. */
        CountryOfBirthRelation.prototype.getDescendantCountryOfBirth = function (api, callback) {
            CountryOfBirthRelation.getDescendantCountryOfBirthForCountryOfBirthRelation(this.id, api, callback);
        };
        /** Returns the related DescendantCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @param countryOfBirthRelationID The ID of the CountryOfBirthRelation to retrieve.
         *  @return A single CountryOfBirthRelation, or null. */
        CountryOfBirthRelation.getDescendantCountryOfBirthForCountryOfBirthRelation = function (countryOfBirthRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthRelationID: countryOfBirthRelationID });
        };
        CountryOfBirthRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorCountryOfBirthID: new hiw.PropertyMap("ancestorCountryOfBirthID", "AncestorCountryOfBirthID"),
            descendantCountryOfBirthID: new hiw.PropertyMap("descendantCountryOfBirthID", "DescendantCountryOfBirthID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return CountryOfBirthRelation;
    })(hiw.ServiceDataObject);
    hiw.CountryOfBirthRelation = CountryOfBirthRelation;
    /** Contains properties and static functionality for the DataCategory type. */
    var DataCategory = (function (_super) {
        __extends(DataCategory, _super);
        function DataCategory() {
            _super.apply(this, arguments);
            this.id = null;
            this.rank = null;
            this.rankName = null;
            this.parentDataCategoryID = null;
            this.number = null;
            this.acronym = null;
            this.header = null;
            this.name = null;
            this.sortOrder = null;
            this.description = null;
            this.initiativeID = null;
            this.treeGraph = null;
            this.categoryGraph = null;
            this.modifyDate = null;
        }
        DataCategory.prototype.getFields = function () {
            return DataCategory.Fields;
        };
        /** Gets a list of all of the DataCategories in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataCategories */
        DataCategory.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DataCategories exist. */
        DataCategory.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DataCategories method. */
        DataCategory.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DataCategory with the specified primary key.
         *  @param id The primary key of the DataCategory to return.
         *  @return The matching DataCategory, if one exists, or null. */
        DataCategory.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DataCategories based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataCategories which match the provided filter. */
        DataCategory.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataCategories which match the provided filter. */
        DataCategory.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataCategorieswhich match the provided filter. */
        DataCategory.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DataCategories by ParentDataCategoryID.
         *  @return An Array of DataCategories. */
        DataCategory.prototype.getParentDataCategories = function (api, callback, page) {
            DataCategory.getByParentDataCategoryID(this.id, api, callback, page);
        };
        /** Gets DataCategories by ParentDataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        DataCategory.getByParentDataCategoryID = function (dataCategoryID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID }, null, page);
        };
        /** Gets how many DataCategories by ParentDataCategoryID exist.
         *  @return An Array of DataCategories. */
        DataCategory.prototype.getParentDataCategoriesCount = function (api, callback) {
            DataCategory.getByParentDataCategoryIDCount(this.id, api, callback);
        };
        /** Gets how many DataCategories by ParentDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        DataCategory.getByParentDataCategoryIDCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Gets how many pages of DataCategories by ParentDataCategoryID exist.
         *  @return An Array of DataCategories. */
        DataCategory.prototype.getParentDataCategoriesPageCount = function (api, callback) {
            DataCategory.getByParentDataCategoryIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of DataCategories by ParentDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        DataCategory.getByParentDataCategoryIDPageCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Returns the related ParentDataCategory based on the unique ID of the related DataCategory.
         *  @return A single DataCategory, or null. */
        DataCategory.prototype.getParentDataCategory = function (api, callback) {
            DataCategory.getParentDataCategoryForDataCategory(this.id, api, callback);
        };
        /** Returns the related ParentDataCategory based on the unique ID of the related DataCategory.
         *  @param dataCategoryID The ID of the DataCategory to retrieve.
         *  @return A single DataCategory, or null. */
        DataCategory.getParentDataCategoryForDataCategory = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Gets DataCategories by InitiativeID.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        DataCategory.getByInitiativeID = function (initiativeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { initiativeID: initiativeID }, null, page);
        };
        /** Gets how many DataCategories by InitiativeID exist.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        DataCategory.getByInitiativeIDCount = function (initiativeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { initiativeID: initiativeID });
        };
        /** Gets how many pages of DataCategories by InitiativeID exist.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        DataCategory.getByInitiativeIDPageCount = function (initiativeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { initiativeID: initiativeID });
        };
        /** Returns the related Initiative based on the unique ID of the related DataCategory.
         *  @return A single DataCategory, or null. */
        DataCategory.prototype.getInitiative = function (api, callback) {
            DataCategory.getInitiativeForDataCategory(this.id, api, callback);
        };
        /** Returns the related Initiative based on the unique ID of the related DataCategory.
         *  @param dataCategoryID The ID of the DataCategory to retrieve.
         *  @return A single DataCategory, or null. */
        DataCategory.getInitiativeForDataCategory = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        DataCategory.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            rank: new hiw.PropertyMap("rank", "Rank"),
            rankName: new hiw.PropertyMap("rankName", "RankName"),
            parentDataCategoryID: new hiw.PropertyMap("parentDataCategoryID", "ParentDataCategoryID"),
            number: new hiw.PropertyMap("number", "Number"),
            acronym: new hiw.PropertyMap("acronym", "Acronym"),
            header: new hiw.PropertyMap("header", "Header"),
            name: new hiw.PropertyMap("name", "Name"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            description: new hiw.PropertyMap("description", "Description"),
            initiativeID: new hiw.PropertyMap("initiativeID", "InitiativeID"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            categoryGraph: new hiw.PropertyMap("categoryGraph", "CategoryGraph"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate")
        };
        return DataCategory;
    })(hiw.ServiceDataObject);
    hiw.DataCategory = DataCategory;
    /** Contains properties and static functionality for the DataCategoryRelation type. */
    var DataCategoryRelation = (function (_super) {
        __extends(DataCategoryRelation, _super);
        function DataCategoryRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorDataCategoryID = null;
            this.descendantDataCategoryID = null;
            this.hops = null;
        }
        DataCategoryRelation.prototype.getFields = function () {
            return DataCategoryRelation.Fields;
        };
        /** Gets a list of all of the DataCategoryRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataCategoryRelations */
        DataCategoryRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DataCategoryRelations exist. */
        DataCategoryRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DataCategoryRelations method. */
        DataCategoryRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DataCategoryRelation with the specified primary key.
         *  @param id The primary key of the DataCategoryRelation to return.
         *  @return The matching DataCategoryRelation, if one exists, or null. */
        DataCategoryRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DataCategoryRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataCategoryRelations which match the provided filter. */
        DataCategoryRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DataCategoryRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataCategoryRelations which match the provided filter. */
        DataCategoryRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DataCategoryRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataCategoryRelationswhich match the provided filter. */
        DataCategoryRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DataCategoryRelations by AncestorDataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        DataCategoryRelation.getByAncestorDataCategoryID = function (dataCategoryID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID }, null, page);
        };
        /** Gets how many DataCategoryRelations by AncestorDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        DataCategoryRelation.getByAncestorDataCategoryIDCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Gets how many pages of DataCategoryRelations by AncestorDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        DataCategoryRelation.getByAncestorDataCategoryIDPageCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Returns the related AncestorDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @return A single DataCategoryRelation, or null. */
        DataCategoryRelation.prototype.getAncestorDataCategory = function (api, callback) {
            DataCategoryRelation.getAncestorDataCategoryForDataCategoryRelation(this.id, api, callback);
        };
        /** Returns the related AncestorDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @param dataCategoryRelationID The ID of the DataCategoryRelation to retrieve.
         *  @return A single DataCategoryRelation, or null. */
        DataCategoryRelation.getAncestorDataCategoryForDataCategoryRelation = function (dataCategoryRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryRelationID: dataCategoryRelationID });
        };
        /** Gets DataCategoryRelations by DescendantDataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        DataCategoryRelation.getByDescendantDataCategoryID = function (dataCategoryID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID }, null, page);
        };
        /** Gets how many DataCategoryRelations by DescendantDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        DataCategoryRelation.getByDescendantDataCategoryIDCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Gets how many pages of DataCategoryRelations by DescendantDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        DataCategoryRelation.getByDescendantDataCategoryIDPageCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Returns the related DescendantDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @return A single DataCategoryRelation, or null. */
        DataCategoryRelation.prototype.getDescendantDataCategory = function (api, callback) {
            DataCategoryRelation.getDescendantDataCategoryForDataCategoryRelation(this.id, api, callback);
        };
        /** Returns the related DescendantDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @param dataCategoryRelationID The ID of the DataCategoryRelation to retrieve.
         *  @return A single DataCategoryRelation, or null. */
        DataCategoryRelation.getDescendantDataCategoryForDataCategoryRelation = function (dataCategoryRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryRelationID: dataCategoryRelationID });
        };
        DataCategoryRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorDataCategoryID: new hiw.PropertyMap("ancestorDataCategoryID", "AncestorDataCategoryID"),
            descendantDataCategoryID: new hiw.PropertyMap("descendantDataCategoryID", "DescendantDataCategoryID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return DataCategoryRelation;
    })(hiw.ServiceDataObject);
    hiw.DataCategoryRelation = DataCategoryRelation;
    /** Contains properties and static functionality for the DataSourceDataSupplier type. */
    var DataSourceDataSupplier = (function (_super) {
        __extends(DataSourceDataSupplier, _super);
        function DataSourceDataSupplier() {
            _super.apply(this, arguments);
            this.id = null;
            this.dataSourceID = null;
            this.dataSupplierID = null;
            this.modificationDate = null;
        }
        DataSourceDataSupplier.prototype.getFields = function () {
            return DataSourceDataSupplier.Fields;
        };
        /** Gets a list of all of the DataSourceDataSuppliers in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSourceDataSuppliers */
        DataSourceDataSupplier.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DataSourceDataSuppliers exist. */
        DataSourceDataSupplier.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DataSourceDataSuppliers method. */
        DataSourceDataSupplier.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DataSourceDataSupplier with the specified primary key.
         *  @param id The primary key of the DataSourceDataSupplier to return.
         *  @return The matching DataSourceDataSupplier, if one exists, or null. */
        DataSourceDataSupplier.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DataSourceDataSuppliers based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSourceDataSuppliers which match the provided filter. */
        DataSourceDataSupplier.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DataSourceDataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSourceDataSuppliers which match the provided filter. */
        DataSourceDataSupplier.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DataSourceDataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSourceDataSupplierswhich match the provided filter. */
        DataSourceDataSupplier.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DataSourceDataSuppliers by DataSourceID.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        DataSourceDataSupplier.getByDataSourceID = function (dataSourceID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID }, null, page);
        };
        /** Gets how many DataSourceDataSuppliers by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        DataSourceDataSupplier.getByDataSourceIDCount = function (dataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID });
        };
        /** Gets how many pages of DataSourceDataSuppliers by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        DataSourceDataSupplier.getByDataSourceIDPageCount = function (dataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID });
        };
        /** Returns the related DataSource based on the unique ID of the related DataSourceDataSupplier.
         *  @return A single DataSourceDataSupplier, or null. */
        DataSourceDataSupplier.prototype.getDataSource = function (api, callback) {
            DataSourceDataSupplier.getDataSourceForDataSourceDataSupplier(this.id, api, callback);
        };
        /** Returns the related DataSource based on the unique ID of the related DataSourceDataSupplier.
         *  @param dataSourceDataSupplierID The ID of the DataSourceDataSupplier to retrieve.
         *  @return A single DataSourceDataSupplier, or null. */
        DataSourceDataSupplier.getDataSourceForDataSourceDataSupplier = function (dataSourceDataSupplierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceDataSupplierID: dataSourceDataSupplierID });
        };
        /** Gets DataSourceDataSuppliers by DataSupplierID.
         *  @param dataSupplierID The ID of the DataSupplier for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        DataSourceDataSupplier.getByDataSupplierID = function (dataSupplierID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSupplierID: dataSupplierID }, null, page);
        };
        /** Gets how many DataSourceDataSuppliers by DataSupplierID exist.
         *  @param dataSupplierID The ID of the DataSupplier for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        DataSourceDataSupplier.getByDataSupplierIDCount = function (dataSupplierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSupplierID: dataSupplierID });
        };
        /** Gets how many pages of DataSourceDataSuppliers by DataSupplierID exist.
         *  @param dataSupplierID The ID of the DataSupplier for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        DataSourceDataSupplier.getByDataSupplierIDPageCount = function (dataSupplierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSupplierID: dataSupplierID });
        };
        /** Returns the related DataSupplier based on the unique ID of the related DataSourceDataSupplier.
         *  @return A single DataSourceDataSupplier, or null. */
        DataSourceDataSupplier.prototype.getDataSupplier = function (api, callback) {
            DataSourceDataSupplier.getDataSupplierForDataSourceDataSupplier(this.id, api, callback);
        };
        /** Returns the related DataSupplier based on the unique ID of the related DataSourceDataSupplier.
         *  @param dataSourceDataSupplierID The ID of the DataSourceDataSupplier to retrieve.
         *  @return A single DataSourceDataSupplier, or null. */
        DataSourceDataSupplier.getDataSupplierForDataSourceDataSupplier = function (dataSourceDataSupplierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceDataSupplierID: dataSourceDataSupplierID });
        };
        DataSourceDataSupplier.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            dataSourceID: new hiw.PropertyMap("dataSourceID", "DataSourceID"),
            dataSupplierID: new hiw.PropertyMap("dataSupplierID", "DataSupplierID"),
            modificationDate: new hiw.PropertyMap("modificationDate", "ModificationDate")
        };
        return DataSourceDataSupplier;
    })(hiw.ServiceDataObject);
    hiw.DataSourceDataSupplier = DataSourceDataSupplier;
    /** Contains properties and static functionality for the DataSource type. */
    var DataSource = (function (_super) {
        __extends(DataSource, _super);
        function DataSource() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.acronym = null;
            this.dataLimitations = null;
            this.dataYearsAvailable = null;
            this.periodicity = null;
            this.mode = null;
            this.description = null;
            this.shortDescription = null;
            this.selectedContent = null;
            this.populationCovered = null;
            this.methodology = null;
            this.responseRateAndSampleSize = null;
            this.interpretationIssues = null;
            this.suppressionCriteria = null;
            this.references1 = null;
            this.references2 = null;
            this.references3 = null;
            this.references4 = null;
            this.sortOrder = null;
            this.modifyDate = null;
            this.showMe = null;
        }
        DataSource.prototype.getFields = function () {
            return DataSource.Fields;
        };
        /** Gets a list of all of the DataSources in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSources */
        DataSource.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DataSources exist. */
        DataSource.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DataSources method. */
        DataSource.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DataSource with the specified primary key.
         *  @param id The primary key of the DataSource to return.
         *  @return The matching DataSource, if one exists, or null. */
        DataSource.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DataSources based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSources which match the provided filter. */
        DataSource.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSources which match the provided filter. */
        DataSource.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSourceswhich match the provided filter. */
        DataSource.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        DataSource.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            acronym: new hiw.PropertyMap("acronym", "Acronym"),
            dataLimitations: new hiw.PropertyMap("dataLimitations", "DataLimitations"),
            dataYearsAvailable: new hiw.PropertyMap("dataYearsAvailable", "DataYearsAvailable"),
            periodicity: new hiw.PropertyMap("periodicity", "Periodicity"),
            mode: new hiw.PropertyMap("mode", "Mode"),
            description: new hiw.PropertyMap("description", "Description"),
            shortDescription: new hiw.PropertyMap("shortDescription", "ShortDescription"),
            selectedContent: new hiw.PropertyMap("selectedContent", "SelectedContent"),
            populationCovered: new hiw.PropertyMap("populationCovered", "PopulationCovered"),
            methodology: new hiw.PropertyMap("methodology", "Methodology"),
            responseRateAndSampleSize: new hiw.PropertyMap("responseRateAndSampleSize", "ResponseRateAndSampleSize"),
            interpretationIssues: new hiw.PropertyMap("interpretationIssues", "InterpretationIssues"),
            suppressionCriteria: new hiw.PropertyMap("suppressionCriteria", "SuppressionCriteria"),
            references1: new hiw.PropertyMap("references1", "References1"),
            references2: new hiw.PropertyMap("references2", "References2"),
            references3: new hiw.PropertyMap("references3", "References3"),
            references4: new hiw.PropertyMap("references4", "References4"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate"),
            showMe: new hiw.PropertyMap("showMe", "ShowMe")
        };
        return DataSource;
    })(hiw.ServiceDataObject);
    hiw.DataSource = DataSource;
    /** Contains properties and static functionality for the DataSourceURL type. */
    var DataSourceURL = (function (_super) {
        __extends(DataSourceURL, _super);
        function DataSourceURL() {
            _super.apply(this, arguments);
            this.id = null;
            this.dataSourceID = null;
            this.urlID = null;
            this.sortOrder = null;
        }
        DataSourceURL.prototype.getFields = function () {
            return DataSourceURL.Fields;
        };
        /** Gets a list of all of the DataSourceURLs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSourceURLs */
        DataSourceURL.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DataSourceURLs exist. */
        DataSourceURL.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DataSourceURLs method. */
        DataSourceURL.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DataSourceURL with the specified primary key.
         *  @param id The primary key of the DataSourceURL to return.
         *  @return The matching DataSourceURL, if one exists, or null. */
        DataSourceURL.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DataSourceURLs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSourceURLs which match the provided filter. */
        DataSourceURL.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DataSourceURLs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSourceURLs which match the provided filter. */
        DataSourceURL.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DataSourceURLs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSourceURLswhich match the provided filter. */
        DataSourceURL.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DataSourceURLs by DataSourceID.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        DataSourceURL.getByDataSourceID = function (dataSourceID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID }, null, page);
        };
        /** Gets how many DataSourceURLs by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        DataSourceURL.getByDataSourceIDCount = function (dataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID });
        };
        /** Gets how many pages of DataSourceURLs by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        DataSourceURL.getByDataSourceIDPageCount = function (dataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID });
        };
        /** Returns the related DataSource based on the unique ID of the related DataSourceURL.
         *  @return A single DataSourceURL, or null. */
        DataSourceURL.prototype.getDataSource = function (api, callback) {
            DataSourceURL.getDataSourceForDataSourceURL(this.id, api, callback);
        };
        /** Returns the related DataSource based on the unique ID of the related DataSourceURL.
         *  @param dataSourceURLID The ID of the DataSourceURL to retrieve.
         *  @return A single DataSourceURL, or null. */
        DataSourceURL.getDataSourceForDataSourceURL = function (dataSourceURLID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceURLID: dataSourceURLID });
        };
        /** Gets DataSourceURLs by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        DataSourceURL.getByUrlID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many DataSourceURLs by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        DataSourceURL.getByUrlIDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of DataSourceURLs by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        DataSourceURL.getByUrlIDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related Url based on the unique ID of the related DataSourceURL.
         *  @return A single DataSourceURL, or null. */
        DataSourceURL.prototype.getUrl = function (api, callback) {
            DataSourceURL.getUrlForDataSourceURL(this.id, api, callback);
        };
        /** Returns the related Url based on the unique ID of the related DataSourceURL.
         *  @param dataSourceURLID The ID of the DataSourceURL to retrieve.
         *  @return A single DataSourceURL, or null. */
        DataSourceURL.getUrlForDataSourceURL = function (dataSourceURLID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceURLID: dataSourceURLID });
        };
        DataSourceURL.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            dataSourceID: new hiw.PropertyMap("dataSourceID", "DataSourceID"),
            urlID: new hiw.PropertyMap("urlID", "UrlID"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return DataSourceURL;
    })(hiw.ServiceDataObject);
    hiw.DataSourceURL = DataSourceURL;
    /** Contains properties and static functionality for the DataSupplier type. */
    var DataSupplier = (function (_super) {
        __extends(DataSupplier, _super);
        function DataSupplier() {
            _super.apply(this, arguments);
            this.id = null;
            this.acronym = null;
            this.name = null;
            this.description = null;
            this.shortDescription = null;
            this.urlID = null;
            this.sortOrder = null;
            this.modifyDate = null;
            this.validationDate = null;
            this.validationStatus = null;
        }
        DataSupplier.prototype.getFields = function () {
            return DataSupplier.Fields;
        };
        /** Gets a list of all of the DataSuppliers in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSuppliers */
        DataSupplier.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DataSuppliers exist. */
        DataSupplier.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DataSuppliers method. */
        DataSupplier.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DataSupplier with the specified primary key.
         *  @param id The primary key of the DataSupplier to return.
         *  @return The matching DataSupplier, if one exists, or null. */
        DataSupplier.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DataSuppliers based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSuppliers which match the provided filter. */
        DataSupplier.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSuppliers which match the provided filter. */
        DataSupplier.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSupplierswhich match the provided filter. */
        DataSupplier.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DataSuppliers by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child DataSuppliers.
         *  @return An Array of DataSuppliers. */
        DataSupplier.getByUrlID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many DataSuppliers by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child DataSuppliers.
         *  @return An Array of DataSuppliers. */
        DataSupplier.getByUrlIDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of DataSuppliers by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child DataSuppliers.
         *  @return An Array of DataSuppliers. */
        DataSupplier.getByUrlIDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related Url based on the unique ID of the related DataSupplier.
         *  @return A single DataSupplier, or null. */
        DataSupplier.prototype.getUrl = function (api, callback) {
            DataSupplier.getUrlForDataSupplier(this.id, api, callback);
        };
        /** Returns the related Url based on the unique ID of the related DataSupplier.
         *  @param dataSupplierID The ID of the DataSupplier to retrieve.
         *  @return A single DataSupplier, or null. */
        DataSupplier.getUrlForDataSupplier = function (dataSupplierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSupplierID: dataSupplierID });
        };
        DataSupplier.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            acronym: new hiw.PropertyMap("acronym", "Acronym"),
            name: new hiw.PropertyMap("name", "Name"),
            description: new hiw.PropertyMap("description", "Description"),
            shortDescription: new hiw.PropertyMap("shortDescription", "ShortDescription"),
            urlID: new hiw.PropertyMap("urlID", "UrlID"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate"),
            validationDate: new hiw.PropertyMap("validationDate", "ValidationDate"),
            validationStatus: new hiw.PropertyMap("validationStatus", "ValidationStatus")
        };
        return DataSupplier;
    })(hiw.ServiceDataObject);
    hiw.DataSupplier = DataSupplier;
    /** Contains properties and static functionality for the DimensionBook type. */
    var DimensionBook = (function (_super) {
        __extends(DimensionBook, _super);
        function DimensionBook() {
            _super.apply(this, arguments);
            this.id = null;
            this.key = null;
            this.dimension = null;
            this.name = null;
            this.IsHeader = null;
            this.indentedName = null;
            this.parentDimensionBookID = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
            this.dimensionListID = null;
            this.chartName = null;
            this.downloadName = null;
        }
        DimensionBook.prototype.getFields = function () {
            return DimensionBook.Fields;
        };
        /** Gets a list of all of the DimensionBooks in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionBooks */
        DimensionBook.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DimensionBooks exist. */
        DimensionBook.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DimensionBooks method. */
        DimensionBook.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DimensionBook with the specified primary key.
         *  @param id The primary key of the DimensionBook to return.
         *  @return The matching DimensionBook, if one exists, or null. */
        DimensionBook.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DimensionBooks based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionBooks which match the provided filter. */
        DimensionBook.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DimensionBooks exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionBooks which match the provided filter. */
        DimensionBook.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DimensionBooks exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionBookswhich match the provided filter. */
        DimensionBook.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DimensionBooks by ParentDimensionBookID.
         *  @return An Array of DimensionBooks. */
        DimensionBook.prototype.getDimensionBooks = function (api, callback, page) {
            DimensionBook.getByParentDimensionBookID(this.id, api, callback, page);
        };
        /** Gets DimensionBooks by ParentDimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        DimensionBook.getByParentDimensionBookID = function (dimensionBookID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID }, null, page);
        };
        /** Gets how many DimensionBooks by ParentDimensionBookID exist.
         *  @return An Array of DimensionBooks. */
        DimensionBook.prototype.getDimensionBooksCount = function (api, callback) {
            DimensionBook.getByParentDimensionBookIDCount(this.id, api, callback);
        };
        /** Gets how many DimensionBooks by ParentDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        DimensionBook.getByParentDimensionBookIDCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Gets how many pages of DimensionBooks by ParentDimensionBookID exist.
         *  @return An Array of DimensionBooks. */
        DimensionBook.prototype.getDimensionBooksPageCount = function (api, callback) {
            DimensionBook.getByParentDimensionBookIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of DimensionBooks by ParentDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        DimensionBook.getByParentDimensionBookIDPageCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Returns the related ParentDimensionBook based on the unique ID of the related DimensionBook.
         *  @return A single DimensionBook, or null. */
        DimensionBook.prototype.getParentDimensionBook = function (api, callback) {
            DimensionBook.getParentDimensionBookForDimensionBook(this.id, api, callback);
        };
        /** Returns the related ParentDimensionBook based on the unique ID of the related DimensionBook.
         *  @param dimensionBookID The ID of the DimensionBook to retrieve.
         *  @return A single DimensionBook, or null. */
        DimensionBook.getParentDimensionBookForDimensionBook = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Gets DimensionBooks by DimensionListID.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        DimensionBook.getByDimensionListID = function (dimensionListID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionListID: dimensionListID }, null, page);
        };
        /** Gets how many DimensionBooks by DimensionListID exist.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        DimensionBook.getByDimensionListIDCount = function (dimensionListID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionListID: dimensionListID });
        };
        /** Gets how many pages of DimensionBooks by DimensionListID exist.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        DimensionBook.getByDimensionListIDPageCount = function (dimensionListID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionListID: dimensionListID });
        };
        /** Returns the related DimensionList based on the unique ID of the related DimensionBook.
         *  @return A single DimensionBook, or null. */
        DimensionBook.prototype.getDimensionList = function (api, callback) {
            DimensionBook.getDimensionListForDimensionBook(this.id, api, callback);
        };
        /** Returns the related DimensionList based on the unique ID of the related DimensionBook.
         *  @param dimensionBookID The ID of the DimensionBook to retrieve.
         *  @return A single DimensionBook, or null. */
        DimensionBook.getDimensionListForDimensionBook = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Gets a unique DimensionBook based on the provided values.
         *  @return A single DimensionBook, or null. */
        DimensionBook.getByKey = function (key, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { key: key });
        };
        DimensionBook.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            key: new hiw.PropertyMap("key", "Key"),
            dimension: new hiw.PropertyMap("dimension", "Dimension"),
            name: new hiw.PropertyMap("name", "Name"),
            IsHeader: new hiw.PropertyMap("IsHeader", "IsHeader"),
            indentedName: new hiw.PropertyMap("indentedName", "IndentedName"),
            parentDimensionBookID: new hiw.PropertyMap("parentDimensionBookID", "ParentDimensionBookID"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth"),
            dimensionListID: new hiw.PropertyMap("dimensionListID", "DimensionListID"),
            chartName: new hiw.PropertyMap("chartName", "ChartName"),
            downloadName: new hiw.PropertyMap("downloadName", "DownloadName")
        };
        return DimensionBook;
    })(hiw.ServiceDataObject);
    hiw.DimensionBook = DimensionBook;
    /** Contains properties and static functionality for the DimensionBookRelation type. */
    var DimensionBookRelation = (function (_super) {
        __extends(DimensionBookRelation, _super);
        function DimensionBookRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorDimensionBookID = null;
            this.descendantDimensionBookID = null;
            this.hops = null;
        }
        DimensionBookRelation.prototype.getFields = function () {
            return DimensionBookRelation.Fields;
        };
        /** Gets a list of all of the DimensionBookRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionBookRelations */
        DimensionBookRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DimensionBookRelations exist. */
        DimensionBookRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DimensionBookRelations method. */
        DimensionBookRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DimensionBookRelation with the specified primary key.
         *  @param id The primary key of the DimensionBookRelation to return.
         *  @return The matching DimensionBookRelation, if one exists, or null. */
        DimensionBookRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DimensionBookRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionBookRelations which match the provided filter. */
        DimensionBookRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DimensionBookRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionBookRelations which match the provided filter. */
        DimensionBookRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DimensionBookRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionBookRelationswhich match the provided filter. */
        DimensionBookRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DimensionBookRelations by AncestorDimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        DimensionBookRelation.getByAncestorDimensionBookID = function (dimensionBookID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID }, null, page);
        };
        /** Gets how many DimensionBookRelations by AncestorDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        DimensionBookRelation.getByAncestorDimensionBookIDCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Gets how many pages of DimensionBookRelations by AncestorDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        DimensionBookRelation.getByAncestorDimensionBookIDPageCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Returns the related AncestorDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @return A single DimensionBookRelation, or null. */
        DimensionBookRelation.prototype.getAncestorDimensionBook = function (api, callback) {
            DimensionBookRelation.getAncestorDimensionBookForDimensionBookRelation(this.id, api, callback);
        };
        /** Returns the related AncestorDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @param dimensionBookRelationID The ID of the DimensionBookRelation to retrieve.
         *  @return A single DimensionBookRelation, or null. */
        DimensionBookRelation.getAncestorDimensionBookForDimensionBookRelation = function (dimensionBookRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookRelationID: dimensionBookRelationID });
        };
        /** Gets DimensionBookRelations by DescendantDimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        DimensionBookRelation.getByDescendantDimensionBookID = function (dimensionBookID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID }, null, page);
        };
        /** Gets how many DimensionBookRelations by DescendantDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        DimensionBookRelation.getByDescendantDimensionBookIDCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Gets how many pages of DimensionBookRelations by DescendantDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        DimensionBookRelation.getByDescendantDimensionBookIDPageCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Returns the related DescendantDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @return A single DimensionBookRelation, or null. */
        DimensionBookRelation.prototype.getDescendantDimensionBook = function (api, callback) {
            DimensionBookRelation.getDescendantDimensionBookForDimensionBookRelation(this.id, api, callback);
        };
        /** Returns the related DescendantDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @param dimensionBookRelationID The ID of the DimensionBookRelation to retrieve.
         *  @return A single DimensionBookRelation, or null. */
        DimensionBookRelation.getDescendantDimensionBookForDimensionBookRelation = function (dimensionBookRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookRelationID: dimensionBookRelationID });
        };
        DimensionBookRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorDimensionBookID: new hiw.PropertyMap("ancestorDimensionBookID", "AncestorDimensionBookID"),
            descendantDimensionBookID: new hiw.PropertyMap("descendantDimensionBookID", "DescendantDimensionBookID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return DimensionBookRelation;
    })(hiw.ServiceDataObject);
    hiw.DimensionBookRelation = DimensionBookRelation;
    /** Contains properties and static functionality for the DimensionGraph type. */
    var DimensionGraph = (function (_super) {
        __extends(DimensionGraph, _super);
        function DimensionGraph() {
            _super.apply(this, arguments);
            this.id = null;
            this.header = null;
            this.label = null;
            this.dimensionGraphLabel = null;
            this.dimensionList = null;
            this.dimensionValueIDList = null;
            this.dimensionValueKeyList = null;
            this.dimensionValueList = null;
            this.dimensionCount = null;
            this.headerSortOrder = null;
            this.dimensionGraphSortOrder = null;
            this.totalValue = null;
            this.totalID = null;
            this.totalKey = null;
            this.totalSortOrder = null;
            this.ageValue = null;
            this.ageID = null;
            this.ageKey = null;
            this.ageSortOrder = null;
            this.sexValue = null;
            this.sexID = null;
            this.sexKey = null;
            this.sexSortOrder = null;
            this.raceEthnicityValue = null;
            this.raceEthnicityID = null;
            this.raceEthnicityKey = null;
            this.raceEthnicitySortOrder = null;
            this.incomeAndPovertyStatusValue = null;
            this.incomeAndPovertyStatusID = null;
            this.incomeAndPovertyStatusKey = null;
            this.incomeAndPovertyStatusSortOrder = null;
            this.educationalAttainmentValue = null;
            this.educationalAttainmentID = null;
            this.educationalAttainmentKey = null;
            this.educationalAttainmentSortOrder = null;
            this.healthInsuranceStatusValue = null;
            this.healthInsuranceStatusID = null;
            this.healthInsuranceStatusKey = null;
            this.healthInsuranceStatusSortOrder = null;
            this.sexualOrientationValue = null;
            this.sexualOrientationID = null;
            this.sexualOrientationKey = null;
            this.sexualOrientationSortOrder = null;
            this.familyTypeValue = null;
            this.familyTypeID = null;
            this.familyTypeKey = null;
            this.familyTypeSortOrder = null;
            this.maritalStatusValue = null;
            this.maritalStatusID = null;
            this.maritalStatusKey = null;
            this.maritalStatusSortOrder = null;
            this.veteranStatusValue = null;
            this.veteranStatusID = null;
            this.veteranStatusKey = null;
            this.veteranStatusSortOrder = null;
            this.countryOfBirthValue = null;
            this.countryOfBirthID = null;
            this.countryOfBirthKey = null;
            this.countryOfBirthSortOrder = null;
            this.disabilityStatusValue = null;
            this.disabilityStatusID = null;
            this.disabilityStatusKey = null;
            this.disabilityStatusSortOrder = null;
            this.obesityStatusValue = null;
            this.obesityStatusID = null;
            this.obesityStatusKey = null;
            this.obesityStatusSortOrder = null;
            this.characteristicOfSchoolOrStudentValue = null;
            this.characteristicOfSchoolOrStudentID = null;
            this.characteristicOfSchoolOrStudentKey = null;
            this.characteristicOfSchoolOrStudentSortOrder = null;
            this.otherValue = null;
            this.otherID = null;
            this.otherKey = null;
            this.otherSortOrder = null;
            this.geographyValue = null;
            this.geographyID = null;
            this.geographyKey = null;
            this.geographySortOrder = null;
        }
        DimensionGraph.prototype.getFields = function () {
            return DimensionGraph.Fields;
        };
        /** Gets a list of all of the DimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionGraphs */
        DimensionGraph.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DimensionGraphs exist. */
        DimensionGraph.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DimensionGraphs method. */
        DimensionGraph.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DimensionGraph with the specified primary key.
         *  @param id The primary key of the DimensionGraph to return.
         *  @return The matching DimensionGraph, if one exists, or null. */
        DimensionGraph.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionGraphs which match the provided filter. */
        DimensionGraph.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionGraphs which match the provided filter. */
        DimensionGraph.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionGraphswhich match the provided filter. */
        DimensionGraph.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DimensionGraphs by TotalID.
         *  @param totalID The ID of the Total for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByTotalID = function (totalID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID }, null, page);
        };
        /** Gets how many DimensionGraphs by TotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByTotalIDCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Gets how many pages of DimensionGraphs by TotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByTotalIDPageCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Returns the related Total based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getTotal = function (api, callback) {
            DimensionGraph.getTotalForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related Total based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getTotalForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by AgeID.
         *  @param ageID The ID of the Age for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByAgeID = function (ageID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID }, null, page);
        };
        /** Gets how many DimensionGraphs by AgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByAgeIDCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Gets how many pages of DimensionGraphs by AgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByAgeIDPageCount = function (ageID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ageID: ageID });
        };
        /** Returns the related Age based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getAge = function (api, callback) {
            DimensionGraph.getAgeForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related Age based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getAgeForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by SexID.
         *  @param sexID The ID of the Sex for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getBySexID = function (sexID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID }, null, page);
        };
        /** Gets how many DimensionGraphs by SexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getBySexIDCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Gets how many pages of DimensionGraphs by SexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getBySexIDPageCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Returns the related Sex based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getSex = function (api, callback) {
            DimensionGraph.getSexForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related Sex based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getSexForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by RaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByRaceEthnicityID = function (raceEthnicityID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID }, null, page);
        };
        /** Gets how many DimensionGraphs by RaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByRaceEthnicityIDCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Gets how many pages of DimensionGraphs by RaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByRaceEthnicityIDPageCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Returns the related RaceEthnicity based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getRaceEthnicity = function (api, callback) {
            DimensionGraph.getRaceEthnicityForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related RaceEthnicity based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getRaceEthnicityForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by IncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByIncomeAndPovertyStatusID = function (incomeAndPovertyStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page);
        };
        /** Gets how many DimensionGraphs by IncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByIncomeAndPovertyStatusIDCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Gets how many pages of DimensionGraphs by IncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByIncomeAndPovertyStatusIDPageCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Returns the related IncomeAndPovertyStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getIncomeAndPovertyStatus = function (api, callback) {
            DimensionGraph.getIncomeAndPovertyStatusForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related IncomeAndPovertyStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getIncomeAndPovertyStatusForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by EducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByEducationalAttainmentID = function (educationalAttainmentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page);
        };
        /** Gets how many DimensionGraphs by EducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByEducationalAttainmentIDCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Gets how many pages of DimensionGraphs by EducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByEducationalAttainmentIDPageCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Returns the related EducationalAttainment based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getEducationalAttainment = function (api, callback) {
            DimensionGraph.getEducationalAttainmentForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related EducationalAttainment based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getEducationalAttainmentForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by HealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByHealthInsuranceStatusID = function (healthInsuranceStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page);
        };
        /** Gets how many DimensionGraphs by HealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByHealthInsuranceStatusIDCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Gets how many pages of DimensionGraphs by HealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByHealthInsuranceStatusIDPageCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Returns the related HealthInsuranceStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getHealthInsuranceStatus = function (api, callback) {
            DimensionGraph.getHealthInsuranceStatusForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related HealthInsuranceStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getHealthInsuranceStatusForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by SexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getBySexualOrientationID = function (sexualOrientationID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID }, null, page);
        };
        /** Gets how many DimensionGraphs by SexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getBySexualOrientationIDCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Gets how many pages of DimensionGraphs by SexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getBySexualOrientationIDPageCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Returns the related SexualOrientation based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getSexualOrientation = function (api, callback) {
            DimensionGraph.getSexualOrientationForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related SexualOrientation based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getSexualOrientationForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by FamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByFamilyTypeID = function (familyTypeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID }, null, page);
        };
        /** Gets how many DimensionGraphs by FamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByFamilyTypeIDCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Gets how many pages of DimensionGraphs by FamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByFamilyTypeIDPageCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Returns the related FamilyType based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getFamilyType = function (api, callback) {
            DimensionGraph.getFamilyTypeForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related FamilyType based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getFamilyTypeForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by MaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByMaritalStatusID = function (maritalStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID }, null, page);
        };
        /** Gets how many DimensionGraphs by MaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByMaritalStatusIDCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Gets how many pages of DimensionGraphs by MaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByMaritalStatusIDPageCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Returns the related MaritalStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getMaritalStatus = function (api, callback) {
            DimensionGraph.getMaritalStatusForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related MaritalStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getMaritalStatusForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by VeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByVeteranStatusID = function (veteranStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID }, null, page);
        };
        /** Gets how many DimensionGraphs by VeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByVeteranStatusIDCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Gets how many pages of DimensionGraphs by VeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByVeteranStatusIDPageCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Returns the related VeteranStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getVeteranStatus = function (api, callback) {
            DimensionGraph.getVeteranStatusForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related VeteranStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getVeteranStatusForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by CountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByCountryOfBirthID = function (countryOfBirthID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID }, null, page);
        };
        /** Gets how many DimensionGraphs by CountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByCountryOfBirthIDCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Gets how many pages of DimensionGraphs by CountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByCountryOfBirthIDPageCount = function (countryOfBirthID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { countryOfBirthID: countryOfBirthID });
        };
        /** Returns the related CountryOfBirth based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getCountryOfBirth = function (api, callback) {
            DimensionGraph.getCountryOfBirthForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related CountryOfBirth based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getCountryOfBirthForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by DisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByDisabilityStatusID = function (disabilityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID }, null, page);
        };
        /** Gets how many DimensionGraphs by DisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByDisabilityStatusIDCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Gets how many pages of DimensionGraphs by DisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByDisabilityStatusIDPageCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Returns the related DisabilityStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getDisabilityStatus = function (api, callback) {
            DimensionGraph.getDisabilityStatusForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related DisabilityStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getDisabilityStatusForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by ObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByObesityStatusID = function (obesityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID }, null, page);
        };
        /** Gets how many DimensionGraphs by ObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByObesityStatusIDCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Gets how many pages of DimensionGraphs by ObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByObesityStatusIDPageCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Returns the related ObesityStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getObesityStatus = function (api, callback) {
            DimensionGraph.getObesityStatusForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related ObesityStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getObesityStatusForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by CharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByCharacteristicOfSchoolOrStudentID = function (characteristicOfSchoolOrStudentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page);
        };
        /** Gets how many DimensionGraphs by CharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByCharacteristicOfSchoolOrStudentIDCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Gets how many pages of DimensionGraphs by CharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByCharacteristicOfSchoolOrStudentIDPageCount = function (characteristicOfSchoolOrStudentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        };
        /** Returns the related CharacteristicOfSchoolOrStudent based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getCharacteristicOfSchoolOrStudent = function (api, callback) {
            DimensionGraph.getCharacteristicOfSchoolOrStudentForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related CharacteristicOfSchoolOrStudent based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getCharacteristicOfSchoolOrStudentForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by OtherID.
         *  @param otherID The ID of the Other for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByOtherID = function (otherID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID }, null, page);
        };
        /** Gets how many DimensionGraphs by OtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByOtherIDCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Gets how many pages of DimensionGraphs by OtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByOtherIDPageCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Returns the related Other based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getOther = function (api, callback) {
            DimensionGraph.getOtherForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related Other based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getOtherForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets DimensionGraphs by GeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByGeographyID = function (geographyID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID }, null, page);
        };
        /** Gets how many DimensionGraphs by GeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByGeographyIDCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Gets how many pages of DimensionGraphs by GeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        DimensionGraph.getByGeographyIDPageCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Returns the related Geography based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.prototype.getGeography = function (api, callback) {
            DimensionGraph.getGeographyForDimensionGraph(this.id, api, callback);
        };
        /** Returns the related Geography based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        DimensionGraph.getGeographyForDimensionGraph = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        DimensionGraph.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            header: new hiw.PropertyMap("header", "Header"),
            label: new hiw.PropertyMap("label", "Label"),
            dimensionGraphLabel: new hiw.PropertyMap("dimensionGraphLabel", "DimensionGraphLabel"),
            dimensionList: new hiw.PropertyMap("dimensionList", "DimensionList"),
            dimensionValueIDList: new hiw.PropertyMap("dimensionValueIDList", "DimensionValueIDList"),
            dimensionValueKeyList: new hiw.PropertyMap("dimensionValueKeyList", "DimensionValueKeyList"),
            dimensionValueList: new hiw.PropertyMap("dimensionValueList", "DimensionValueList"),
            dimensionCount: new hiw.PropertyMap("dimensionCount", "DimensionCount"),
            headerSortOrder: new hiw.PropertyMap("headerSortOrder", "HeaderSortOrder"),
            dimensionGraphSortOrder: new hiw.PropertyMap("dimensionGraphSortOrder", "DimensionGraphSortOrder"),
            totalValue: new hiw.PropertyMap("totalValue", "TotalValue"),
            totalID: new hiw.PropertyMap("totalID", "TotalID"),
            totalKey: new hiw.PropertyMap("totalKey", "TotalKey"),
            totalSortOrder: new hiw.PropertyMap("totalSortOrder", "TotalSortOrder"),
            ageValue: new hiw.PropertyMap("ageValue", "AgeValue"),
            ageID: new hiw.PropertyMap("ageID", "AgeID"),
            ageKey: new hiw.PropertyMap("ageKey", "AgeKey"),
            ageSortOrder: new hiw.PropertyMap("ageSortOrder", "AgeSortOrder"),
            sexValue: new hiw.PropertyMap("sexValue", "SexValue"),
            sexID: new hiw.PropertyMap("sexID", "SexID"),
            sexKey: new hiw.PropertyMap("sexKey", "SexKey"),
            sexSortOrder: new hiw.PropertyMap("sexSortOrder", "SexSortOrder"),
            raceEthnicityValue: new hiw.PropertyMap("raceEthnicityValue", "RaceEthnicityValue"),
            raceEthnicityID: new hiw.PropertyMap("raceEthnicityID", "RaceEthnicityID"),
            raceEthnicityKey: new hiw.PropertyMap("raceEthnicityKey", "RaceEthnicityKey"),
            raceEthnicitySortOrder: new hiw.PropertyMap("raceEthnicitySortOrder", "RaceEthnicitySortOrder"),
            incomeAndPovertyStatusValue: new hiw.PropertyMap("incomeAndPovertyStatusValue", "IncomeAndPovertyStatusValue"),
            incomeAndPovertyStatusID: new hiw.PropertyMap("incomeAndPovertyStatusID", "IncomeAndPovertyStatusID"),
            incomeAndPovertyStatusKey: new hiw.PropertyMap("incomeAndPovertyStatusKey", "IncomeAndPovertyStatusKey"),
            incomeAndPovertyStatusSortOrder: new hiw.PropertyMap("incomeAndPovertyStatusSortOrder", "IncomeAndPovertyStatusSortOrder"),
            educationalAttainmentValue: new hiw.PropertyMap("educationalAttainmentValue", "EducationalAttainmentValue"),
            educationalAttainmentID: new hiw.PropertyMap("educationalAttainmentID", "EducationalAttainmentID"),
            educationalAttainmentKey: new hiw.PropertyMap("educationalAttainmentKey", "EducationalAttainmentKey"),
            educationalAttainmentSortOrder: new hiw.PropertyMap("educationalAttainmentSortOrder", "EducationalAttainmentSortOrder"),
            healthInsuranceStatusValue: new hiw.PropertyMap("healthInsuranceStatusValue", "HealthInsuranceStatusValue"),
            healthInsuranceStatusID: new hiw.PropertyMap("healthInsuranceStatusID", "HealthInsuranceStatusID"),
            healthInsuranceStatusKey: new hiw.PropertyMap("healthInsuranceStatusKey", "HealthInsuranceStatusKey"),
            healthInsuranceStatusSortOrder: new hiw.PropertyMap("healthInsuranceStatusSortOrder", "HealthInsuranceStatusSortOrder"),
            sexualOrientationValue: new hiw.PropertyMap("sexualOrientationValue", "SexualOrientationValue"),
            sexualOrientationID: new hiw.PropertyMap("sexualOrientationID", "SexualOrientationID"),
            sexualOrientationKey: new hiw.PropertyMap("sexualOrientationKey", "SexualOrientationKey"),
            sexualOrientationSortOrder: new hiw.PropertyMap("sexualOrientationSortOrder", "SexualOrientationSortOrder"),
            familyTypeValue: new hiw.PropertyMap("familyTypeValue", "FamilyTypeValue"),
            familyTypeID: new hiw.PropertyMap("familyTypeID", "FamilyTypeID"),
            familyTypeKey: new hiw.PropertyMap("familyTypeKey", "FamilyTypeKey"),
            familyTypeSortOrder: new hiw.PropertyMap("familyTypeSortOrder", "FamilyTypeSortOrder"),
            maritalStatusValue: new hiw.PropertyMap("maritalStatusValue", "MaritalStatusValue"),
            maritalStatusID: new hiw.PropertyMap("maritalStatusID", "MaritalStatusID"),
            maritalStatusKey: new hiw.PropertyMap("maritalStatusKey", "MaritalStatusKey"),
            maritalStatusSortOrder: new hiw.PropertyMap("maritalStatusSortOrder", "MaritalStatusSortOrder"),
            veteranStatusValue: new hiw.PropertyMap("veteranStatusValue", "VeteranStatusValue"),
            veteranStatusID: new hiw.PropertyMap("veteranStatusID", "VeteranStatusID"),
            veteranStatusKey: new hiw.PropertyMap("veteranStatusKey", "VeteranStatusKey"),
            veteranStatusSortOrder: new hiw.PropertyMap("veteranStatusSortOrder", "VeteranStatusSortOrder"),
            countryOfBirthValue: new hiw.PropertyMap("countryOfBirthValue", "CountryOfBirthValue"),
            countryOfBirthID: new hiw.PropertyMap("countryOfBirthID", "CountryOfBirthID"),
            countryOfBirthKey: new hiw.PropertyMap("countryOfBirthKey", "CountryOfBirthKey"),
            countryOfBirthSortOrder: new hiw.PropertyMap("countryOfBirthSortOrder", "CountryOfBirthSortOrder"),
            disabilityStatusValue: new hiw.PropertyMap("disabilityStatusValue", "DisabilityStatusValue"),
            disabilityStatusID: new hiw.PropertyMap("disabilityStatusID", "DisabilityStatusID"),
            disabilityStatusKey: new hiw.PropertyMap("disabilityStatusKey", "DisabilityStatusKey"),
            disabilityStatusSortOrder: new hiw.PropertyMap("disabilityStatusSortOrder", "DisabilityStatusSortOrder"),
            obesityStatusValue: new hiw.PropertyMap("obesityStatusValue", "ObesityStatusValue"),
            obesityStatusID: new hiw.PropertyMap("obesityStatusID", "ObesityStatusID"),
            obesityStatusKey: new hiw.PropertyMap("obesityStatusKey", "ObesityStatusKey"),
            obesityStatusSortOrder: new hiw.PropertyMap("obesityStatusSortOrder", "ObesityStatusSortOrder"),
            characteristicOfSchoolOrStudentValue: new hiw.PropertyMap("characteristicOfSchoolOrStudentValue", "CharacteristicOfSchoolOrStudentValue"),
            characteristicOfSchoolOrStudentID: new hiw.PropertyMap("characteristicOfSchoolOrStudentID", "CharacteristicOfSchoolOrStudentID"),
            characteristicOfSchoolOrStudentKey: new hiw.PropertyMap("characteristicOfSchoolOrStudentKey", "CharacteristicOfSchoolOrStudentKey"),
            characteristicOfSchoolOrStudentSortOrder: new hiw.PropertyMap("characteristicOfSchoolOrStudentSortOrder", "CharacteristicOfSchoolOrStudentSortOrder"),
            otherValue: new hiw.PropertyMap("otherValue", "OtherValue"),
            otherID: new hiw.PropertyMap("otherID", "OtherID"),
            otherKey: new hiw.PropertyMap("otherKey", "OtherKey"),
            otherSortOrder: new hiw.PropertyMap("otherSortOrder", "OtherSortOrder"),
            geographyValue: new hiw.PropertyMap("geographyValue", "GeographyValue"),
            geographyID: new hiw.PropertyMap("geographyID", "GeographyID"),
            geographyKey: new hiw.PropertyMap("geographyKey", "GeographyKey"),
            geographySortOrder: new hiw.PropertyMap("geographySortOrder", "GeographySortOrder")
        };
        return DimensionGraph;
    })(hiw.ServiceDataObject);
    hiw.DimensionGraph = DimensionGraph;
    /** Contains properties and static functionality for the DimensionList type. */
    var DimensionList = (function (_super) {
        __extends(DimensionList, _super);
        function DimensionList() {
            _super.apply(this, arguments);
            this.id = null;
            this.singular = null;
            this.descriptiveName = null;
            this.singularDescriptiveName = null;
            this.IsActive = null;
        }
        DimensionList.prototype.getFields = function () {
            return DimensionList.Fields;
        };
        /** Gets a list of all of the DimensionLists in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionLists */
        DimensionList.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DimensionLists exist. */
        DimensionList.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DimensionLists method. */
        DimensionList.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DimensionList with the specified primary key.
         *  @param id The primary key of the DimensionList to return.
         *  @return The matching DimensionList, if one exists, or null. */
        DimensionList.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DimensionLists based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionLists which match the provided filter. */
        DimensionList.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DimensionLists exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionLists which match the provided filter. */
        DimensionList.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DimensionLists exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionListswhich match the provided filter. */
        DimensionList.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        DimensionList.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            singular: new hiw.PropertyMap("singular", "Singular"),
            descriptiveName: new hiw.PropertyMap("descriptiveName", "DescriptiveName"),
            singularDescriptiveName: new hiw.PropertyMap("singularDescriptiveName", "SingularDescriptiveName"),
            IsActive: new hiw.PropertyMap("IsActive", "IsActive")
        };
        return DimensionList;
    })(hiw.ServiceDataObject);
    hiw.DimensionList = DimensionList;
    /** Contains properties and static functionality for the DisabilityStatus type. */
    var DisabilityStatus = (function (_super) {
        __extends(DisabilityStatus, _super);
        function DisabilityStatus() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentDisabilityStatusID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        DisabilityStatus.prototype.getFields = function () {
            return DisabilityStatus.Fields;
        };
        /** Gets a list of all of the DisabilityStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DisabilityStatuses */
        DisabilityStatus.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DisabilityStatuses exist. */
        DisabilityStatus.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DisabilityStatuses method. */
        DisabilityStatus.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DisabilityStatus with the specified primary key.
         *  @param id The primary key of the DisabilityStatus to return.
         *  @return The matching DisabilityStatus, if one exists, or null. */
        DisabilityStatus.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DisabilityStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DisabilityStatuses which match the provided filter. */
        DisabilityStatus.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DisabilityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DisabilityStatuses which match the provided filter. */
        DisabilityStatus.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DisabilityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DisabilityStatuseswhich match the provided filter. */
        DisabilityStatus.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DisabilityStatuses by ParentDisabilityStatusID.
         *  @return An Array of DisabilityStatuses. */
        DisabilityStatus.prototype.getDisabilityStatuses = function (api, callback, page) {
            DisabilityStatus.getByParentDisabilityStatusID(this.id, api, callback, page);
        };
        /** Gets DisabilityStatuses by ParentDisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatuses.
         *  @return An Array of DisabilityStatuses. */
        DisabilityStatus.getByParentDisabilityStatusID = function (disabilityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID }, null, page);
        };
        /** Gets how many DisabilityStatuses by ParentDisabilityStatusID exist.
         *  @return An Array of DisabilityStatuses. */
        DisabilityStatus.prototype.getDisabilityStatusesCount = function (api, callback) {
            DisabilityStatus.getByParentDisabilityStatusIDCount(this.id, api, callback);
        };
        /** Gets how many DisabilityStatuses by ParentDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatuses.
         *  @return An Array of DisabilityStatuses. */
        DisabilityStatus.getByParentDisabilityStatusIDCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Gets how many pages of DisabilityStatuses by ParentDisabilityStatusID exist.
         *  @return An Array of DisabilityStatuses. */
        DisabilityStatus.prototype.getDisabilityStatusesPageCount = function (api, callback) {
            DisabilityStatus.getByParentDisabilityStatusIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of DisabilityStatuses by ParentDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatuses.
         *  @return An Array of DisabilityStatuses. */
        DisabilityStatus.getByParentDisabilityStatusIDPageCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Returns the related ParentDisabilityStatus based on the unique ID of the related DisabilityStatus.
         *  @return A single DisabilityStatus, or null. */
        DisabilityStatus.prototype.getParentDisabilityStatus = function (api, callback) {
            DisabilityStatus.getParentDisabilityStatusForDisabilityStatus(this.id, api, callback);
        };
        /** Returns the related ParentDisabilityStatus based on the unique ID of the related DisabilityStatus.
         *  @param disabilityStatusID The ID of the DisabilityStatus to retrieve.
         *  @return A single DisabilityStatus, or null. */
        DisabilityStatus.getParentDisabilityStatusForDisabilityStatus = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        DisabilityStatus.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentDisabilityStatusID: new hiw.PropertyMap("parentDisabilityStatusID", "ParentDisabilityStatusID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return DisabilityStatus;
    })(hiw.ServiceDataObject);
    hiw.DisabilityStatus = DisabilityStatus;
    /** Contains properties and static functionality for the DisabilityStatusRelation type. */
    var DisabilityStatusRelation = (function (_super) {
        __extends(DisabilityStatusRelation, _super);
        function DisabilityStatusRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorDisabilityStatusID = null;
            this.descendantDisabilityStatusID = null;
            this.hops = null;
        }
        DisabilityStatusRelation.prototype.getFields = function () {
            return DisabilityStatusRelation.Fields;
        };
        /** Gets a list of all of the DisabilityStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DisabilityStatusRelations */
        DisabilityStatusRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many DisabilityStatusRelations exist. */
        DisabilityStatusRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the DisabilityStatusRelations method. */
        DisabilityStatusRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the DisabilityStatusRelation with the specified primary key.
         *  @param id The primary key of the DisabilityStatusRelation to return.
         *  @return The matching DisabilityStatusRelation, if one exists, or null. */
        DisabilityStatusRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of DisabilityStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DisabilityStatusRelations which match the provided filter. */
        DisabilityStatusRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many DisabilityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DisabilityStatusRelations which match the provided filter. */
        DisabilityStatusRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of DisabilityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DisabilityStatusRelationswhich match the provided filter. */
        DisabilityStatusRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets DisabilityStatusRelations by AncestorDisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        DisabilityStatusRelation.getByAncestorDisabilityStatusID = function (disabilityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID }, null, page);
        };
        /** Gets how many DisabilityStatusRelations by AncestorDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        DisabilityStatusRelation.getByAncestorDisabilityStatusIDCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Gets how many pages of DisabilityStatusRelations by AncestorDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        DisabilityStatusRelation.getByAncestorDisabilityStatusIDPageCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Returns the related AncestorDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @return A single DisabilityStatusRelation, or null. */
        DisabilityStatusRelation.prototype.getAncestorDisabilityStatus = function (api, callback) {
            DisabilityStatusRelation.getAncestorDisabilityStatusForDisabilityStatusRelation(this.id, api, callback);
        };
        /** Returns the related AncestorDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @param disabilityStatusRelationID The ID of the DisabilityStatusRelation to retrieve.
         *  @return A single DisabilityStatusRelation, or null. */
        DisabilityStatusRelation.getAncestorDisabilityStatusForDisabilityStatusRelation = function (disabilityStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusRelationID: disabilityStatusRelationID });
        };
        /** Gets DisabilityStatusRelations by DescendantDisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        DisabilityStatusRelation.getByDescendantDisabilityStatusID = function (disabilityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID }, null, page);
        };
        /** Gets how many DisabilityStatusRelations by DescendantDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        DisabilityStatusRelation.getByDescendantDisabilityStatusIDCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Gets how many pages of DisabilityStatusRelations by DescendantDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        DisabilityStatusRelation.getByDescendantDisabilityStatusIDPageCount = function (disabilityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusID: disabilityStatusID });
        };
        /** Returns the related DescendantDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @return A single DisabilityStatusRelation, or null. */
        DisabilityStatusRelation.prototype.getDescendantDisabilityStatus = function (api, callback) {
            DisabilityStatusRelation.getDescendantDisabilityStatusForDisabilityStatusRelation(this.id, api, callback);
        };
        /** Returns the related DescendantDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @param disabilityStatusRelationID The ID of the DisabilityStatusRelation to retrieve.
         *  @return A single DisabilityStatusRelation, or null. */
        DisabilityStatusRelation.getDescendantDisabilityStatusForDisabilityStatusRelation = function (disabilityStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { disabilityStatusRelationID: disabilityStatusRelationID });
        };
        DisabilityStatusRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorDisabilityStatusID: new hiw.PropertyMap("ancestorDisabilityStatusID", "AncestorDisabilityStatusID"),
            descendantDisabilityStatusID: new hiw.PropertyMap("descendantDisabilityStatusID", "DescendantDisabilityStatusID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return DisabilityStatusRelation;
    })(hiw.ServiceDataObject);
    hiw.DisabilityStatusRelation = DisabilityStatusRelation;
    /** Contains properties and static functionality for the EducationalAttainment type. */
    var EducationalAttainment = (function (_super) {
        __extends(EducationalAttainment, _super);
        function EducationalAttainment() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentEducationalAttainmentID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        EducationalAttainment.prototype.getFields = function () {
            return EducationalAttainment.Fields;
        };
        /** Gets a list of all of the EducationalAttainments in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of EducationalAttainments */
        EducationalAttainment.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many EducationalAttainments exist. */
        EducationalAttainment.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the EducationalAttainments method. */
        EducationalAttainment.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the EducationalAttainment with the specified primary key.
         *  @param id The primary key of the EducationalAttainment to return.
         *  @return The matching EducationalAttainment, if one exists, or null. */
        EducationalAttainment.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of EducationalAttainments based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All EducationalAttainments which match the provided filter. */
        EducationalAttainment.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many EducationalAttainments exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of EducationalAttainments which match the provided filter. */
        EducationalAttainment.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of EducationalAttainments exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of EducationalAttainmentswhich match the provided filter. */
        EducationalAttainment.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets EducationalAttainments by ParentEducationalAttainmentID.
         *  @return An Array of EducationalAttainments. */
        EducationalAttainment.prototype.getEducationalAttainments = function (api, callback, page) {
            EducationalAttainment.getByParentEducationalAttainmentID(this.id, api, callback, page);
        };
        /** Gets EducationalAttainments by ParentEducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainments.
         *  @return An Array of EducationalAttainments. */
        EducationalAttainment.getByParentEducationalAttainmentID = function (educationalAttainmentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page);
        };
        /** Gets how many EducationalAttainments by ParentEducationalAttainmentID exist.
         *  @return An Array of EducationalAttainments. */
        EducationalAttainment.prototype.getEducationalAttainmentsCount = function (api, callback) {
            EducationalAttainment.getByParentEducationalAttainmentIDCount(this.id, api, callback);
        };
        /** Gets how many EducationalAttainments by ParentEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainments.
         *  @return An Array of EducationalAttainments. */
        EducationalAttainment.getByParentEducationalAttainmentIDCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Gets how many pages of EducationalAttainments by ParentEducationalAttainmentID exist.
         *  @return An Array of EducationalAttainments. */
        EducationalAttainment.prototype.getEducationalAttainmentsPageCount = function (api, callback) {
            EducationalAttainment.getByParentEducationalAttainmentIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of EducationalAttainments by ParentEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainments.
         *  @return An Array of EducationalAttainments. */
        EducationalAttainment.getByParentEducationalAttainmentIDPageCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Returns the related ParentEducationalAttainment based on the unique ID of the related EducationalAttainment.
         *  @return A single EducationalAttainment, or null. */
        EducationalAttainment.prototype.getParentEducationalAttainment = function (api, callback) {
            EducationalAttainment.getParentEducationalAttainmentForEducationalAttainment(this.id, api, callback);
        };
        /** Returns the related ParentEducationalAttainment based on the unique ID of the related EducationalAttainment.
         *  @param educationalAttainmentID The ID of the EducationalAttainment to retrieve.
         *  @return A single EducationalAttainment, or null. */
        EducationalAttainment.getParentEducationalAttainmentForEducationalAttainment = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        EducationalAttainment.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentEducationalAttainmentID: new hiw.PropertyMap("parentEducationalAttainmentID", "ParentEducationalAttainmentID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return EducationalAttainment;
    })(hiw.ServiceDataObject);
    hiw.EducationalAttainment = EducationalAttainment;
    /** Contains properties and static functionality for the EducationalAttainmentRelation type. */
    var EducationalAttainmentRelation = (function (_super) {
        __extends(EducationalAttainmentRelation, _super);
        function EducationalAttainmentRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorEducationalAttainmentID = null;
            this.descendantEducationalAttainmentID = null;
            this.hops = null;
        }
        EducationalAttainmentRelation.prototype.getFields = function () {
            return EducationalAttainmentRelation.Fields;
        };
        /** Gets a list of all of the EducationalAttainmentRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of EducationalAttainmentRelations */
        EducationalAttainmentRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many EducationalAttainmentRelations exist. */
        EducationalAttainmentRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the EducationalAttainmentRelations method. */
        EducationalAttainmentRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the EducationalAttainmentRelation with the specified primary key.
         *  @param id The primary key of the EducationalAttainmentRelation to return.
         *  @return The matching EducationalAttainmentRelation, if one exists, or null. */
        EducationalAttainmentRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of EducationalAttainmentRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All EducationalAttainmentRelations which match the provided filter. */
        EducationalAttainmentRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many EducationalAttainmentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of EducationalAttainmentRelations which match the provided filter. */
        EducationalAttainmentRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of EducationalAttainmentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of EducationalAttainmentRelationswhich match the provided filter. */
        EducationalAttainmentRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets EducationalAttainmentRelations by AncestorEducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        EducationalAttainmentRelation.getByAncestorEducationalAttainmentID = function (educationalAttainmentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page);
        };
        /** Gets how many EducationalAttainmentRelations by AncestorEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        EducationalAttainmentRelation.getByAncestorEducationalAttainmentIDCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Gets how many pages of EducationalAttainmentRelations by AncestorEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        EducationalAttainmentRelation.getByAncestorEducationalAttainmentIDPageCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Returns the related AncestorducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @return A single EducationalAttainmentRelation, or null. */
        EducationalAttainmentRelation.prototype.getAncestorducationalAttainment = function (api, callback) {
            EducationalAttainmentRelation.getAncestorducationalAttainmentForEducationalAttainmentRelation(this.id, api, callback);
        };
        /** Returns the related AncestorducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @param educationalAttainmentRelationID The ID of the EducationalAttainmentRelation to retrieve.
         *  @return A single EducationalAttainmentRelation, or null. */
        EducationalAttainmentRelation.getAncestorducationalAttainmentForEducationalAttainmentRelation = function (educationalAttainmentRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentRelationID: educationalAttainmentRelationID });
        };
        /** Gets EducationalAttainmentRelations by DescendantEducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        EducationalAttainmentRelation.getByDescendantEducationalAttainmentID = function (educationalAttainmentID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page);
        };
        /** Gets how many EducationalAttainmentRelations by DescendantEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        EducationalAttainmentRelation.getByDescendantEducationalAttainmentIDCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Gets how many pages of EducationalAttainmentRelations by DescendantEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        EducationalAttainmentRelation.getByDescendantEducationalAttainmentIDPageCount = function (educationalAttainmentID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentID: educationalAttainmentID });
        };
        /** Returns the related DescendantEducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @return A single EducationalAttainmentRelation, or null. */
        EducationalAttainmentRelation.prototype.getDescendantEducationalAttainment = function (api, callback) {
            EducationalAttainmentRelation.getDescendantEducationalAttainmentForEducationalAttainmentRelation(this.id, api, callback);
        };
        /** Returns the related DescendantEducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @param educationalAttainmentRelationID The ID of the EducationalAttainmentRelation to retrieve.
         *  @return A single EducationalAttainmentRelation, or null. */
        EducationalAttainmentRelation.getDescendantEducationalAttainmentForEducationalAttainmentRelation = function (educationalAttainmentRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { educationalAttainmentRelationID: educationalAttainmentRelationID });
        };
        EducationalAttainmentRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorEducationalAttainmentID: new hiw.PropertyMap("ancestorEducationalAttainmentID", "AncestorEducationalAttainmentID"),
            descendantEducationalAttainmentID: new hiw.PropertyMap("descendantEducationalAttainmentID", "DescendantEducationalAttainmentID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return EducationalAttainmentRelation;
    })(hiw.ServiceDataObject);
    hiw.EducationalAttainmentRelation = EducationalAttainmentRelation;
    /** Contains properties and static functionality for the FamilyType type. */
    var FamilyType = (function (_super) {
        __extends(FamilyType, _super);
        function FamilyType() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentFamilyTypeID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        FamilyType.prototype.getFields = function () {
            return FamilyType.Fields;
        };
        /** Gets a list of all of the FamilyTypes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of FamilyTypes */
        FamilyType.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many FamilyTypes exist. */
        FamilyType.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the FamilyTypes method. */
        FamilyType.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the FamilyType with the specified primary key.
         *  @param id The primary key of the FamilyType to return.
         *  @return The matching FamilyType, if one exists, or null. */
        FamilyType.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of FamilyTypes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All FamilyTypes which match the provided filter. */
        FamilyType.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many FamilyTypes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of FamilyTypes which match the provided filter. */
        FamilyType.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of FamilyTypes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of FamilyTypeswhich match the provided filter. */
        FamilyType.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets FamilyTypes by ParentFamilyTypeID.
         *  @return An Array of FamilyTypes. */
        FamilyType.prototype.getFamilyTypes = function (api, callback, page) {
            FamilyType.getByParentFamilyTypeID(this.id, api, callback, page);
        };
        /** Gets FamilyTypes by ParentFamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypes.
         *  @return An Array of FamilyTypes. */
        FamilyType.getByParentFamilyTypeID = function (familyTypeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID }, null, page);
        };
        /** Gets how many FamilyTypes by ParentFamilyTypeID exist.
         *  @return An Array of FamilyTypes. */
        FamilyType.prototype.getFamilyTypesCount = function (api, callback) {
            FamilyType.getByParentFamilyTypeIDCount(this.id, api, callback);
        };
        /** Gets how many FamilyTypes by ParentFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypes.
         *  @return An Array of FamilyTypes. */
        FamilyType.getByParentFamilyTypeIDCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Gets how many pages of FamilyTypes by ParentFamilyTypeID exist.
         *  @return An Array of FamilyTypes. */
        FamilyType.prototype.getFamilyTypesPageCount = function (api, callback) {
            FamilyType.getByParentFamilyTypeIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of FamilyTypes by ParentFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypes.
         *  @return An Array of FamilyTypes. */
        FamilyType.getByParentFamilyTypeIDPageCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Returns the related ParentFamilyType based on the unique ID of the related FamilyType.
         *  @return A single FamilyType, or null. */
        FamilyType.prototype.getParentFamilyType = function (api, callback) {
            FamilyType.getParentFamilyTypeForFamilyType(this.id, api, callback);
        };
        /** Returns the related ParentFamilyType based on the unique ID of the related FamilyType.
         *  @param familyTypeID The ID of the FamilyType to retrieve.
         *  @return A single FamilyType, or null. */
        FamilyType.getParentFamilyTypeForFamilyType = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        FamilyType.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentFamilyTypeID: new hiw.PropertyMap("parentFamilyTypeID", "ParentFamilyTypeID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return FamilyType;
    })(hiw.ServiceDataObject);
    hiw.FamilyType = FamilyType;
    /** Contains properties and static functionality for the FamilyTypeRelation type. */
    var FamilyTypeRelation = (function (_super) {
        __extends(FamilyTypeRelation, _super);
        function FamilyTypeRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorFamilyTypeID = null;
            this.descendantFamilyTypeID = null;
            this.hops = null;
        }
        FamilyTypeRelation.prototype.getFields = function () {
            return FamilyTypeRelation.Fields;
        };
        /** Gets a list of all of the FamilyTypeRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of FamilyTypeRelations */
        FamilyTypeRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many FamilyTypeRelations exist. */
        FamilyTypeRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the FamilyTypeRelations method. */
        FamilyTypeRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the FamilyTypeRelation with the specified primary key.
         *  @param id The primary key of the FamilyTypeRelation to return.
         *  @return The matching FamilyTypeRelation, if one exists, or null. */
        FamilyTypeRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of FamilyTypeRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All FamilyTypeRelations which match the provided filter. */
        FamilyTypeRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many FamilyTypeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of FamilyTypeRelations which match the provided filter. */
        FamilyTypeRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of FamilyTypeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of FamilyTypeRelationswhich match the provided filter. */
        FamilyTypeRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets FamilyTypeRelations by AncestorFamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        FamilyTypeRelation.getByAncestorFamilyTypeID = function (familyTypeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID }, null, page);
        };
        /** Gets how many FamilyTypeRelations by AncestorFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        FamilyTypeRelation.getByAncestorFamilyTypeIDCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Gets how many pages of FamilyTypeRelations by AncestorFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        FamilyTypeRelation.getByAncestorFamilyTypeIDPageCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Returns the related AncestorFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @return A single FamilyTypeRelation, or null. */
        FamilyTypeRelation.prototype.getAncestorFamilyType = function (api, callback) {
            FamilyTypeRelation.getAncestorFamilyTypeForFamilyTypeRelation(this.id, api, callback);
        };
        /** Returns the related AncestorFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @param familyTypeRelationID The ID of the FamilyTypeRelation to retrieve.
         *  @return A single FamilyTypeRelation, or null. */
        FamilyTypeRelation.getAncestorFamilyTypeForFamilyTypeRelation = function (familyTypeRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeRelationID: familyTypeRelationID });
        };
        /** Gets FamilyTypeRelations by DescendantFamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        FamilyTypeRelation.getByDescendantFamilyTypeID = function (familyTypeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID }, null, page);
        };
        /** Gets how many FamilyTypeRelations by DescendantFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        FamilyTypeRelation.getByDescendantFamilyTypeIDCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Gets how many pages of FamilyTypeRelations by DescendantFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        FamilyTypeRelation.getByDescendantFamilyTypeIDPageCount = function (familyTypeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeID: familyTypeID });
        };
        /** Returns the related DescendantFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @return A single FamilyTypeRelation, or null. */
        FamilyTypeRelation.prototype.getDescendantFamilyType = function (api, callback) {
            FamilyTypeRelation.getDescendantFamilyTypeForFamilyTypeRelation(this.id, api, callback);
        };
        /** Returns the related DescendantFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @param familyTypeRelationID The ID of the FamilyTypeRelation to retrieve.
         *  @return A single FamilyTypeRelation, or null. */
        FamilyTypeRelation.getDescendantFamilyTypeForFamilyTypeRelation = function (familyTypeRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { familyTypeRelationID: familyTypeRelationID });
        };
        FamilyTypeRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorFamilyTypeID: new hiw.PropertyMap("ancestorFamilyTypeID", "AncestorFamilyTypeID"),
            descendantFamilyTypeID: new hiw.PropertyMap("descendantFamilyTypeID", "DescendantFamilyTypeID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return FamilyTypeRelation;
    })(hiw.ServiceDataObject);
    hiw.FamilyTypeRelation = FamilyTypeRelation;
    /** Contains properties and static functionality for the Geography type. */
    var Geography = (function (_super) {
        __extends(Geography, _super);
        function Geography() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentGeographyID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        Geography.prototype.getFields = function () {
            return Geography.Fields;
        };
        /** Gets a list of all of the Geographies in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Geographies */
        Geography.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Geographies exist. */
        Geography.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Geographies method. */
        Geography.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Geography with the specified primary key.
         *  @param id The primary key of the Geography to return.
         *  @return The matching Geography, if one exists, or null. */
        Geography.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Geographies based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Geographies which match the provided filter. */
        Geography.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Geographies exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Geographies which match the provided filter. */
        Geography.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Geographies exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Geographieswhich match the provided filter. */
        Geography.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Geographies by ParentGeographyID.
         *  @return An Array of Geographies. */
        Geography.prototype.getGeographies = function (api, callback, page) {
            Geography.getByParentGeographyID(this.id, api, callback, page);
        };
        /** Gets Geographies by ParentGeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child Geographies.
         *  @return An Array of Geographies. */
        Geography.getByParentGeographyID = function (geographyID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID }, null, page);
        };
        /** Gets how many Geographies by ParentGeographyID exist.
         *  @return An Array of Geographies. */
        Geography.prototype.getGeographiesCount = function (api, callback) {
            Geography.getByParentGeographyIDCount(this.id, api, callback);
        };
        /** Gets how many Geographies by ParentGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child Geographies.
         *  @return An Array of Geographies. */
        Geography.getByParentGeographyIDCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Gets how many pages of Geographies by ParentGeographyID exist.
         *  @return An Array of Geographies. */
        Geography.prototype.getGeographiesPageCount = function (api, callback) {
            Geography.getByParentGeographyIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of Geographies by ParentGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child Geographies.
         *  @return An Array of Geographies. */
        Geography.getByParentGeographyIDPageCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Returns the related ParentGeography based on the unique ID of the related Geography.
         *  @return A single Geography, or null. */
        Geography.prototype.getParentGeography = function (api, callback) {
            Geography.getParentGeographyForGeography(this.id, api, callback);
        };
        /** Returns the related ParentGeography based on the unique ID of the related Geography.
         *  @param geographyID The ID of the Geography to retrieve.
         *  @return A single Geography, or null. */
        Geography.getParentGeographyForGeography = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        Geography.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentGeographyID: new hiw.PropertyMap("parentGeographyID", "ParentGeographyID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return Geography;
    })(hiw.ServiceDataObject);
    hiw.Geography = Geography;
    /** Contains properties and static functionality for the GeographyRelation type. */
    var GeographyRelation = (function (_super) {
        __extends(GeographyRelation, _super);
        function GeographyRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorGeographyID = null;
            this.descendantGeographyID = null;
            this.hops = null;
        }
        GeographyRelation.prototype.getFields = function () {
            return GeographyRelation.Fields;
        };
        /** Gets a list of all of the GeographyRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of GeographyRelations */
        GeographyRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many GeographyRelations exist. */
        GeographyRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the GeographyRelations method. */
        GeographyRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the GeographyRelation with the specified primary key.
         *  @param id The primary key of the GeographyRelation to return.
         *  @return The matching GeographyRelation, if one exists, or null. */
        GeographyRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of GeographyRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All GeographyRelations which match the provided filter. */
        GeographyRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many GeographyRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of GeographyRelations which match the provided filter. */
        GeographyRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of GeographyRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of GeographyRelationswhich match the provided filter. */
        GeographyRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets GeographyRelations by AncestorGeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        GeographyRelation.getByAncestorGeographyID = function (geographyID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID }, null, page);
        };
        /** Gets how many GeographyRelations by AncestorGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        GeographyRelation.getByAncestorGeographyIDCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Gets how many pages of GeographyRelations by AncestorGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        GeographyRelation.getByAncestorGeographyIDPageCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Returns the related AncestorGeography based on the unique ID of the related GeographyRelation.
         *  @return A single GeographyRelation, or null. */
        GeographyRelation.prototype.getAncestorGeography = function (api, callback) {
            GeographyRelation.getAncestorGeographyForGeographyRelation(this.id, api, callback);
        };
        /** Returns the related AncestorGeography based on the unique ID of the related GeographyRelation.
         *  @param geographyRelationID The ID of the GeographyRelation to retrieve.
         *  @return A single GeographyRelation, or null. */
        GeographyRelation.getAncestorGeographyForGeographyRelation = function (geographyRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyRelationID: geographyRelationID });
        };
        /** Gets GeographyRelations by DescendantGeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        GeographyRelation.getByDescendantGeographyID = function (geographyID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID }, null, page);
        };
        /** Gets how many GeographyRelations by DescendantGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        GeographyRelation.getByDescendantGeographyIDCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Gets how many pages of GeographyRelations by DescendantGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        GeographyRelation.getByDescendantGeographyIDPageCount = function (geographyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyID: geographyID });
        };
        /** Returns the related DescendantGeography based on the unique ID of the related GeographyRelation.
         *  @return A single GeographyRelation, or null. */
        GeographyRelation.prototype.getDescendantGeography = function (api, callback) {
            GeographyRelation.getDescendantGeographyForGeographyRelation(this.id, api, callback);
        };
        /** Returns the related DescendantGeography based on the unique ID of the related GeographyRelation.
         *  @param geographyRelationID The ID of the GeographyRelation to retrieve.
         *  @return A single GeographyRelation, or null. */
        GeographyRelation.getDescendantGeographyForGeographyRelation = function (geographyRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { geographyRelationID: geographyRelationID });
        };
        GeographyRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorGeographyID: new hiw.PropertyMap("ancestorGeographyID", "AncestorGeographyID"),
            descendantGeographyID: new hiw.PropertyMap("descendantGeographyID", "DescendantGeographyID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return GeographyRelation;
    })(hiw.ServiceDataObject);
    hiw.GeographyRelation = GeographyRelation;
    /** Contains properties and static functionality for the GlossaryTerm type. */
    var GlossaryTerm = (function (_super) {
        __extends(GlossaryTerm, _super);
        function GlossaryTerm() {
            _super.apply(this, arguments);
            this.id = null;
            this.term = null;
            this.definition = null;
            this.source = null;
            this.sourceUrl1ID = null;
            this.sourceUrl2ID = null;
            this.modificationDate = null;
        }
        GlossaryTerm.prototype.getFields = function () {
            return GlossaryTerm.Fields;
        };
        /** Gets a list of all of the GlossaryTerms in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of GlossaryTerms */
        GlossaryTerm.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many GlossaryTerms exist. */
        GlossaryTerm.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the GlossaryTerms method. */
        GlossaryTerm.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the GlossaryTerm with the specified primary key.
         *  @param id The primary key of the GlossaryTerm to return.
         *  @return The matching GlossaryTerm, if one exists, or null. */
        GlossaryTerm.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of GlossaryTerms based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All GlossaryTerms which match the provided filter. */
        GlossaryTerm.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many GlossaryTerms exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of GlossaryTerms which match the provided filter. */
        GlossaryTerm.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of GlossaryTerms exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of GlossaryTermswhich match the provided filter. */
        GlossaryTerm.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets GlossaryTerms by SourceUrl1ID.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        GlossaryTerm.getBySourceUrl1ID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many GlossaryTerms by SourceUrl1ID exist.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        GlossaryTerm.getBySourceUrl1IDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of GlossaryTerms by SourceUrl1ID exist.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        GlossaryTerm.getBySourceUrl1IDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related SourceUrl1 based on the unique ID of the related GlossaryTerm.
         *  @return A single GlossaryTerm, or null. */
        GlossaryTerm.prototype.getSourceUrl1 = function (api, callback) {
            GlossaryTerm.getSourceUrl1ForGlossaryTerm(this.id, api, callback);
        };
        /** Returns the related SourceUrl1 based on the unique ID of the related GlossaryTerm.
         *  @param glossaryTermID The ID of the GlossaryTerm to retrieve.
         *  @return A single GlossaryTerm, or null. */
        GlossaryTerm.getSourceUrl1ForGlossaryTerm = function (glossaryTermID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { glossaryTermID: glossaryTermID });
        };
        /** Gets GlossaryTerms by SourceUrl2ID.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        GlossaryTerm.getBySourceUrl2ID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many GlossaryTerms by SourceUrl2ID exist.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        GlossaryTerm.getBySourceUrl2IDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of GlossaryTerms by SourceUrl2ID exist.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        GlossaryTerm.getBySourceUrl2IDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related SourceUrl2 based on the unique ID of the related GlossaryTerm.
         *  @return A single GlossaryTerm, or null. */
        GlossaryTerm.prototype.getSourceUrl2 = function (api, callback) {
            GlossaryTerm.getSourceUrl2ForGlossaryTerm(this.id, api, callback);
        };
        /** Returns the related SourceUrl2 based on the unique ID of the related GlossaryTerm.
         *  @param glossaryTermID The ID of the GlossaryTerm to retrieve.
         *  @return A single GlossaryTerm, or null. */
        GlossaryTerm.getSourceUrl2ForGlossaryTerm = function (glossaryTermID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { glossaryTermID: glossaryTermID });
        };
        GlossaryTerm.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            term: new hiw.PropertyMap("term", "Term"),
            definition: new hiw.PropertyMap("definition", "Definition"),
            source: new hiw.PropertyMap("source", "Source"),
            sourceUrl1ID: new hiw.PropertyMap("sourceUrl1ID", "SourceUrl1ID"),
            sourceUrl2ID: new hiw.PropertyMap("sourceUrl2ID", "SourceUrl2ID"),
            modificationDate: new hiw.PropertyMap("modificationDate", "ModificationDate")
        };
        return GlossaryTerm;
    })(hiw.ServiceDataObject);
    hiw.GlossaryTerm = GlossaryTerm;
    /** Contains properties and static functionality for the HealthInsuranceStatus type. */
    var HealthInsuranceStatus = (function (_super) {
        __extends(HealthInsuranceStatus, _super);
        function HealthInsuranceStatus() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentHealthInsuranceStatusID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        HealthInsuranceStatus.prototype.getFields = function () {
            return HealthInsuranceStatus.Fields;
        };
        /** Gets a list of all of the HealthInsuranceStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of HealthInsuranceStatuses */
        HealthInsuranceStatus.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many HealthInsuranceStatuses exist. */
        HealthInsuranceStatus.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the HealthInsuranceStatuses method. */
        HealthInsuranceStatus.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the HealthInsuranceStatus with the specified primary key.
         *  @param id The primary key of the HealthInsuranceStatus to return.
         *  @return The matching HealthInsuranceStatus, if one exists, or null. */
        HealthInsuranceStatus.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of HealthInsuranceStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All HealthInsuranceStatuses which match the provided filter. */
        HealthInsuranceStatus.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many HealthInsuranceStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of HealthInsuranceStatuses which match the provided filter. */
        HealthInsuranceStatus.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of HealthInsuranceStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of HealthInsuranceStatuseswhich match the provided filter. */
        HealthInsuranceStatus.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets HealthInsuranceStatuses by ParentHealthInsuranceStatusID.
         *  @return An Array of HealthInsuranceStatuses. */
        HealthInsuranceStatus.prototype.getHealthInsuranceStatuses = function (api, callback, page) {
            HealthInsuranceStatus.getByParentHealthInsuranceStatusID(this.id, api, callback, page);
        };
        /** Gets HealthInsuranceStatuses by ParentHealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatuses.
         *  @return An Array of HealthInsuranceStatuses. */
        HealthInsuranceStatus.getByParentHealthInsuranceStatusID = function (healthInsuranceStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page);
        };
        /** Gets how many HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist.
         *  @return An Array of HealthInsuranceStatuses. */
        HealthInsuranceStatus.prototype.getHealthInsuranceStatusesCount = function (api, callback) {
            HealthInsuranceStatus.getByParentHealthInsuranceStatusIDCount(this.id, api, callback);
        };
        /** Gets how many HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatuses.
         *  @return An Array of HealthInsuranceStatuses. */
        HealthInsuranceStatus.getByParentHealthInsuranceStatusIDCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Gets how many pages of HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist.
         *  @return An Array of HealthInsuranceStatuses. */
        HealthInsuranceStatus.prototype.getHealthInsuranceStatusesPageCount = function (api, callback) {
            HealthInsuranceStatus.getByParentHealthInsuranceStatusIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatuses.
         *  @return An Array of HealthInsuranceStatuses. */
        HealthInsuranceStatus.getByParentHealthInsuranceStatusIDPageCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Returns the related ParentHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatus.
         *  @return A single HealthInsuranceStatus, or null. */
        HealthInsuranceStatus.prototype.getParentHealthInsuranceStatus = function (api, callback) {
            HealthInsuranceStatus.getParentHealthInsuranceStatusForHealthInsuranceStatus(this.id, api, callback);
        };
        /** Returns the related ParentHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatus.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus to retrieve.
         *  @return A single HealthInsuranceStatus, or null. */
        HealthInsuranceStatus.getParentHealthInsuranceStatusForHealthInsuranceStatus = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        HealthInsuranceStatus.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentHealthInsuranceStatusID: new hiw.PropertyMap("parentHealthInsuranceStatusID", "ParentHealthInsuranceStatusID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return HealthInsuranceStatus;
    })(hiw.ServiceDataObject);
    hiw.HealthInsuranceStatus = HealthInsuranceStatus;
    /** Contains properties and static functionality for the HealthInsuranceStatusRelation type. */
    var HealthInsuranceStatusRelation = (function (_super) {
        __extends(HealthInsuranceStatusRelation, _super);
        function HealthInsuranceStatusRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorHealthInsuranceStatusID = null;
            this.descendantHealthInsuranceStatusID = null;
            this.hops = null;
        }
        HealthInsuranceStatusRelation.prototype.getFields = function () {
            return HealthInsuranceStatusRelation.Fields;
        };
        /** Gets a list of all of the HealthInsuranceStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of HealthInsuranceStatusRelations */
        HealthInsuranceStatusRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many HealthInsuranceStatusRelations exist. */
        HealthInsuranceStatusRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the HealthInsuranceStatusRelations method. */
        HealthInsuranceStatusRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the HealthInsuranceStatusRelation with the specified primary key.
         *  @param id The primary key of the HealthInsuranceStatusRelation to return.
         *  @return The matching HealthInsuranceStatusRelation, if one exists, or null. */
        HealthInsuranceStatusRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of HealthInsuranceStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All HealthInsuranceStatusRelations which match the provided filter. */
        HealthInsuranceStatusRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many HealthInsuranceStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of HealthInsuranceStatusRelations which match the provided filter. */
        HealthInsuranceStatusRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of HealthInsuranceStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of HealthInsuranceStatusRelationswhich match the provided filter. */
        HealthInsuranceStatusRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets HealthInsuranceStatusRelations by AncestorHealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        HealthInsuranceStatusRelation.getByAncestorHealthInsuranceStatusID = function (healthInsuranceStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page);
        };
        /** Gets how many HealthInsuranceStatusRelations by AncestorHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        HealthInsuranceStatusRelation.getByAncestorHealthInsuranceStatusIDCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Gets how many pages of HealthInsuranceStatusRelations by AncestorHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        HealthInsuranceStatusRelation.getByAncestorHealthInsuranceStatusIDPageCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Returns the related AncestorHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        HealthInsuranceStatusRelation.prototype.getAncestorHealthInsuranceStatus = function (api, callback) {
            HealthInsuranceStatusRelation.getAncestorHealthInsuranceStatusForHealthInsuranceStatusRelation(this.id, api, callback);
        };
        /** Returns the related AncestorHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @param healthInsuranceStatusRelationID The ID of the HealthInsuranceStatusRelation to retrieve.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        HealthInsuranceStatusRelation.getAncestorHealthInsuranceStatusForHealthInsuranceStatusRelation = function (healthInsuranceStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusRelationID: healthInsuranceStatusRelationID });
        };
        /** Gets HealthInsuranceStatusRelations by DescendantHealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        HealthInsuranceStatusRelation.getByDescendantHealthInsuranceStatusID = function (healthInsuranceStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page);
        };
        /** Gets how many HealthInsuranceStatusRelations by DescendantHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        HealthInsuranceStatusRelation.getByDescendantHealthInsuranceStatusIDCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Gets how many pages of HealthInsuranceStatusRelations by DescendantHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        HealthInsuranceStatusRelation.getByDescendantHealthInsuranceStatusIDPageCount = function (healthInsuranceStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        };
        /** Returns the related DescendantHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        HealthInsuranceStatusRelation.prototype.getDescendantHealthInsuranceStatus = function (api, callback) {
            HealthInsuranceStatusRelation.getDescendantHealthInsuranceStatusForHealthInsuranceStatusRelation(this.id, api, callback);
        };
        /** Returns the related DescendantHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @param healthInsuranceStatusRelationID The ID of the HealthInsuranceStatusRelation to retrieve.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        HealthInsuranceStatusRelation.getDescendantHealthInsuranceStatusForHealthInsuranceStatusRelation = function (healthInsuranceStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { healthInsuranceStatusRelationID: healthInsuranceStatusRelationID });
        };
        HealthInsuranceStatusRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorHealthInsuranceStatusID: new hiw.PropertyMap("ancestorHealthInsuranceStatusID", "AncestorHealthInsuranceStatusID"),
            descendantHealthInsuranceStatusID: new hiw.PropertyMap("descendantHealthInsuranceStatusID", "DescendantHealthInsuranceStatusID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return HealthInsuranceStatusRelation;
    })(hiw.ServiceDataObject);
    hiw.HealthInsuranceStatusRelation = HealthInsuranceStatusRelation;
    /** Contains properties and static functionality for the HP2020TSM type. */
    var HP2020TSM = (function (_super) {
        __extends(HP2020TSM, _super);
        function HP2020TSM() {
            _super.apply(this, arguments);
            this.id = null;
            this.HP2020TSMName = null;
            this.modifyDate = null;
        }
        HP2020TSM.prototype.getFields = function () {
            return HP2020TSM.Fields;
        };
        /** Gets a list of all of the HP2020TSMs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of HP2020TSMs */
        HP2020TSM.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many HP2020TSMs exist. */
        HP2020TSM.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the HP2020TSMs method. */
        HP2020TSM.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the HP2020TSM with the specified primary key.
         *  @param id The primary key of the HP2020TSM to return.
         *  @return The matching HP2020TSM, if one exists, or null. */
        HP2020TSM.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of HP2020TSMs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All HP2020TSMs which match the provided filter. */
        HP2020TSM.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many HP2020TSMs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of HP2020TSMs which match the provided filter. */
        HP2020TSM.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of HP2020TSMs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of HP2020TSMswhich match the provided filter. */
        HP2020TSM.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        HP2020TSM.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            HP2020TSMName: new hiw.PropertyMap("HP2020TSMName", "HP2020TSMName"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate")
        };
        return HP2020TSM;
    })(hiw.ServiceDataObject);
    hiw.HP2020TSM = HP2020TSM;
    /** Contains properties and static functionality for the IncomeAndPovertyStatus type. */
    var IncomeAndPovertyStatus = (function (_super) {
        __extends(IncomeAndPovertyStatus, _super);
        function IncomeAndPovertyStatus() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentIncomeAndPovertyStatusID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        IncomeAndPovertyStatus.prototype.getFields = function () {
            return IncomeAndPovertyStatus.Fields;
        };
        /** Gets a list of all of the IncomeAndPovertyStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IncomeAndPovertyStatuses */
        IncomeAndPovertyStatus.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IncomeAndPovertyStatuses exist. */
        IncomeAndPovertyStatus.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IncomeAndPovertyStatuses method. */
        IncomeAndPovertyStatus.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IncomeAndPovertyStatus with the specified primary key.
         *  @param id The primary key of the IncomeAndPovertyStatus to return.
         *  @return The matching IncomeAndPovertyStatus, if one exists, or null. */
        IncomeAndPovertyStatus.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IncomeAndPovertyStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IncomeAndPovertyStatuses which match the provided filter. */
        IncomeAndPovertyStatus.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IncomeAndPovertyStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IncomeAndPovertyStatuses which match the provided filter. */
        IncomeAndPovertyStatus.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IncomeAndPovertyStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IncomeAndPovertyStatuseswhich match the provided filter. */
        IncomeAndPovertyStatus.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID.
         *  @return An Array of IncomeAndPovertyStatuses. */
        IncomeAndPovertyStatus.prototype.getIncomeAndPovertyStatuses = function (api, callback, page) {
            IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusID(this.id, api, callback, page);
        };
        /** Gets IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatuses.
         *  @return An Array of IncomeAndPovertyStatuses. */
        IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusID = function (incomeAndPovertyStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page);
        };
        /** Gets how many IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist.
         *  @return An Array of IncomeAndPovertyStatuses. */
        IncomeAndPovertyStatus.prototype.getIncomeAndPovertyStatusesCount = function (api, callback) {
            IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusIDCount(this.id, api, callback);
        };
        /** Gets how many IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatuses.
         *  @return An Array of IncomeAndPovertyStatuses. */
        IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusIDCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Gets how many pages of IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist.
         *  @return An Array of IncomeAndPovertyStatuses. */
        IncomeAndPovertyStatus.prototype.getIncomeAndPovertyStatusesPageCount = function (api, callback) {
            IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatuses.
         *  @return An Array of IncomeAndPovertyStatuses. */
        IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusIDPageCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Returns the related ParentIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatus.
         *  @return A single IncomeAndPovertyStatus, or null. */
        IncomeAndPovertyStatus.prototype.getParentIncomeAndPovertyStatus = function (api, callback) {
            IncomeAndPovertyStatus.getParentIncomeAndPovertyStatusForIncomeAndPovertyStatus(this.id, api, callback);
        };
        /** Returns the related ParentIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatus.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus to retrieve.
         *  @return A single IncomeAndPovertyStatus, or null. */
        IncomeAndPovertyStatus.getParentIncomeAndPovertyStatusForIncomeAndPovertyStatus = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        IncomeAndPovertyStatus.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentIncomeAndPovertyStatusID: new hiw.PropertyMap("parentIncomeAndPovertyStatusID", "ParentIncomeAndPovertyStatusID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return IncomeAndPovertyStatus;
    })(hiw.ServiceDataObject);
    hiw.IncomeAndPovertyStatus = IncomeAndPovertyStatus;
    /** Contains properties and static functionality for the IncomeAndPovertyStatusRelation type. */
    var IncomeAndPovertyStatusRelation = (function (_super) {
        __extends(IncomeAndPovertyStatusRelation, _super);
        function IncomeAndPovertyStatusRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorIncomeAndPovertyStatusID = null;
            this.descendantIncomeAndPovertyStatusID = null;
            this.hops = null;
        }
        IncomeAndPovertyStatusRelation.prototype.getFields = function () {
            return IncomeAndPovertyStatusRelation.Fields;
        };
        /** Gets a list of all of the IncomeAndPovertyStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IncomeAndPovertyStatusRelations */
        IncomeAndPovertyStatusRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IncomeAndPovertyStatusRelations exist. */
        IncomeAndPovertyStatusRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IncomeAndPovertyStatusRelations method. */
        IncomeAndPovertyStatusRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IncomeAndPovertyStatusRelation with the specified primary key.
         *  @param id The primary key of the IncomeAndPovertyStatusRelation to return.
         *  @return The matching IncomeAndPovertyStatusRelation, if one exists, or null. */
        IncomeAndPovertyStatusRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IncomeAndPovertyStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IncomeAndPovertyStatusRelations which match the provided filter. */
        IncomeAndPovertyStatusRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IncomeAndPovertyStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IncomeAndPovertyStatusRelations which match the provided filter. */
        IncomeAndPovertyStatusRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IncomeAndPovertyStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IncomeAndPovertyStatusRelationswhich match the provided filter. */
        IncomeAndPovertyStatusRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IncomeAndPovertyStatusRelations by AncestorIncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        IncomeAndPovertyStatusRelation.getByAncestorIncomeAndPovertyStatusID = function (incomeAndPovertyStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page);
        };
        /** Gets how many IncomeAndPovertyStatusRelations by AncestorIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        IncomeAndPovertyStatusRelation.getByAncestorIncomeAndPovertyStatusIDCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Gets how many pages of IncomeAndPovertyStatusRelations by AncestorIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        IncomeAndPovertyStatusRelation.getByAncestorIncomeAndPovertyStatusIDPageCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Returns the related AncestorIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        IncomeAndPovertyStatusRelation.prototype.getAncestorIncomeAndPovertyStatus = function (api, callback) {
            IncomeAndPovertyStatusRelation.getAncestorIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation(this.id, api, callback);
        };
        /** Returns the related AncestorIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @param incomeAndPovertyStatusRelationID The ID of the IncomeAndPovertyStatusRelation to retrieve.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        IncomeAndPovertyStatusRelation.getAncestorIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation = function (incomeAndPovertyStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusRelationID: incomeAndPovertyStatusRelationID });
        };
        /** Gets IncomeAndPovertyStatusRelations by DescendantIncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        IncomeAndPovertyStatusRelation.getByDescendantIncomeAndPovertyStatusID = function (incomeAndPovertyStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page);
        };
        /** Gets how many IncomeAndPovertyStatusRelations by DescendantIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        IncomeAndPovertyStatusRelation.getByDescendantIncomeAndPovertyStatusIDCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Gets how many pages of IncomeAndPovertyStatusRelations by DescendantIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        IncomeAndPovertyStatusRelation.getByDescendantIncomeAndPovertyStatusIDPageCount = function (incomeAndPovertyStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        };
        /** Returns the related DescendantIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        IncomeAndPovertyStatusRelation.prototype.getDescendantIncomeAndPovertyStatus = function (api, callback) {
            IncomeAndPovertyStatusRelation.getDescendantIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation(this.id, api, callback);
        };
        /** Returns the related DescendantIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @param incomeAndPovertyStatusRelationID The ID of the IncomeAndPovertyStatusRelation to retrieve.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        IncomeAndPovertyStatusRelation.getDescendantIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation = function (incomeAndPovertyStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { incomeAndPovertyStatusRelationID: incomeAndPovertyStatusRelationID });
        };
        IncomeAndPovertyStatusRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorIncomeAndPovertyStatusID: new hiw.PropertyMap("ancestorIncomeAndPovertyStatusID", "AncestorIncomeAndPovertyStatusID"),
            descendantIncomeAndPovertyStatusID: new hiw.PropertyMap("descendantIncomeAndPovertyStatusID", "DescendantIncomeAndPovertyStatusID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return IncomeAndPovertyStatusRelation;
    })(hiw.ServiceDataObject);
    hiw.IncomeAndPovertyStatusRelation = IncomeAndPovertyStatusRelation;
    /** Contains properties and static functionality for the IndicatorDescriptionDataCategory type. */
    var IndicatorDescriptionDataCategory = (function (_super) {
        __extends(IndicatorDescriptionDataCategory, _super);
        function IndicatorDescriptionDataCategory() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.dataCategoryID = null;
        }
        IndicatorDescriptionDataCategory.prototype.getFields = function () {
            return IndicatorDescriptionDataCategory.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionDataCategories in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDataCategories */
        IndicatorDescriptionDataCategory.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionDataCategories exist. */
        IndicatorDescriptionDataCategory.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionDataCategories method. */
        IndicatorDescriptionDataCategory.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionDataCategory with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDataCategory to return.
         *  @return The matching IndicatorDescriptionDataCategory, if one exists, or null. */
        IndicatorDescriptionDataCategory.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionDataCategories based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDataCategories which match the provided filter. */
        IndicatorDescriptionDataCategory.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionDataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDataCategories which match the provided filter. */
        IndicatorDescriptionDataCategory.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionDataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDataCategorieswhich match the provided filter. */
        IndicatorDescriptionDataCategory.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionDataCategories by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        IndicatorDescriptionDataCategory.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDataCategories by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        IndicatorDescriptionDataCategory.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionDataCategories by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        IndicatorDescriptionDataCategory.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        IndicatorDescriptionDataCategory.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionDataCategory.getIndicatorDescriptionForIndicatorDescriptionDataCategory(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @param indicatorDescriptionDataCategoryID The ID of the IndicatorDescriptionDataCategory to retrieve.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        IndicatorDescriptionDataCategory.getIndicatorDescriptionForIndicatorDescriptionDataCategory = function (indicatorDescriptionDataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDataCategoryID: indicatorDescriptionDataCategoryID });
        };
        /** Gets IndicatorDescriptionDataCategories by DataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        IndicatorDescriptionDataCategory.getByDataCategoryID = function (dataCategoryID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDataCategories by DataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        IndicatorDescriptionDataCategory.getByDataCategoryIDCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Gets how many pages of IndicatorDescriptionDataCategories by DataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        IndicatorDescriptionDataCategory.getByDataCategoryIDPageCount = function (dataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataCategoryID: dataCategoryID });
        };
        /** Returns the related DataCategory based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        IndicatorDescriptionDataCategory.prototype.getDataCategory = function (api, callback) {
            IndicatorDescriptionDataCategory.getDataCategoryForIndicatorDescriptionDataCategory(this.id, api, callback);
        };
        /** Returns the related DataCategory based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @param indicatorDescriptionDataCategoryID The ID of the IndicatorDescriptionDataCategory to retrieve.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        IndicatorDescriptionDataCategory.getDataCategoryForIndicatorDescriptionDataCategory = function (indicatorDescriptionDataCategoryID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDataCategoryID: indicatorDescriptionDataCategoryID });
        };
        IndicatorDescriptionDataCategory.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dataCategoryID: new hiw.PropertyMap("dataCategoryID", "DataCategoryID")
        };
        return IndicatorDescriptionDataCategory;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionDataCategory = IndicatorDescriptionDataCategory;
    /** Contains properties and static functionality for the IndicatorDescriptionDataSource type. */
    var IndicatorDescriptionDataSource = (function (_super) {
        __extends(IndicatorDescriptionDataSource, _super);
        function IndicatorDescriptionDataSource() {
            _super.apply(this, arguments);
            this.id = null;
            this.dataDescription = null;
            this.indicatorDescriptionID = null;
            this.dataSourceID = null;
            this.sortOrder = null;
        }
        IndicatorDescriptionDataSource.prototype.getFields = function () {
            return IndicatorDescriptionDataSource.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionDataSources in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDataSources */
        IndicatorDescriptionDataSource.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionDataSources exist. */
        IndicatorDescriptionDataSource.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionDataSources method. */
        IndicatorDescriptionDataSource.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionDataSource with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDataSource to return.
         *  @return The matching IndicatorDescriptionDataSource, if one exists, or null. */
        IndicatorDescriptionDataSource.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionDataSources based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDataSources which match the provided filter. */
        IndicatorDescriptionDataSource.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionDataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDataSources which match the provided filter. */
        IndicatorDescriptionDataSource.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionDataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDataSourceswhich match the provided filter. */
        IndicatorDescriptionDataSource.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionDataSources by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        IndicatorDescriptionDataSource.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDataSources by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        IndicatorDescriptionDataSource.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionDataSources by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        IndicatorDescriptionDataSource.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        IndicatorDescriptionDataSource.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionDataSource.getIndicatorDescriptionForIndicatorDescriptionDataSource(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @param indicatorDescriptionDataSourceID The ID of the IndicatorDescriptionDataSource to retrieve.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        IndicatorDescriptionDataSource.getIndicatorDescriptionForIndicatorDescriptionDataSource = function (indicatorDescriptionDataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDataSourceID: indicatorDescriptionDataSourceID });
        };
        /** Gets IndicatorDescriptionDataSources by DataSourceID.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        IndicatorDescriptionDataSource.getByDataSourceID = function (dataSourceID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDataSources by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        IndicatorDescriptionDataSource.getByDataSourceIDCount = function (dataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID });
        };
        /** Gets how many pages of IndicatorDescriptionDataSources by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        IndicatorDescriptionDataSource.getByDataSourceIDPageCount = function (dataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dataSourceID: dataSourceID });
        };
        /** Returns the related DataSource based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        IndicatorDescriptionDataSource.prototype.getDataSource = function (api, callback) {
            IndicatorDescriptionDataSource.getDataSourceForIndicatorDescriptionDataSource(this.id, api, callback);
        };
        /** Returns the related DataSource based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @param indicatorDescriptionDataSourceID The ID of the IndicatorDescriptionDataSource to retrieve.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        IndicatorDescriptionDataSource.getDataSourceForIndicatorDescriptionDataSource = function (indicatorDescriptionDataSourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDataSourceID: indicatorDescriptionDataSourceID });
        };
        IndicatorDescriptionDataSource.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            dataDescription: new hiw.PropertyMap("dataDescription", "DataDescription"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dataSourceID: new hiw.PropertyMap("dataSourceID", "DataSourceID"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return IndicatorDescriptionDataSource;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionDataSource = IndicatorDescriptionDataSource;
    /** Contains properties and static functionality for the IndicatorDescriptionDefaultDimensionGraph type. */
    var IndicatorDescriptionDefaultDimensionGraph = (function (_super) {
        __extends(IndicatorDescriptionDefaultDimensionGraph, _super);
        function IndicatorDescriptionDefaultDimensionGraph() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeLevelID = null;
            this.dimensionGraphID = null;
        }
        IndicatorDescriptionDefaultDimensionGraph.prototype.getFields = function () {
            return IndicatorDescriptionDefaultDimensionGraph.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionDefaultDimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDefaultDimensionGraphs */
        IndicatorDescriptionDefaultDimensionGraph.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs exist. */
        IndicatorDescriptionDefaultDimensionGraph.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionDefaultDimensionGraphs method. */
        IndicatorDescriptionDefaultDimensionGraph.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionDefaultDimensionGraph with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDefaultDimensionGraph to return.
         *  @return The matching IndicatorDescriptionDefaultDimensionGraph, if one exists, or null. */
        IndicatorDescriptionDefaultDimensionGraph.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionDefaultDimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDefaultDimensionGraphs which match the provided filter. */
        IndicatorDescriptionDefaultDimensionGraph.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionDefaultDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDefaultDimensionGraphs which match the provided filter. */
        IndicatorDescriptionDefaultDimensionGraph.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionDefaultDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDefaultDimensionGraphswhich match the provided filter. */
        IndicatorDescriptionDefaultDimensionGraph.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionDefaultDimensionGraphs by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionDefaultDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        IndicatorDescriptionDefaultDimensionGraph.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionDefaultDimensionGraph.getIndicatorDescriptionForIndicatorDescriptionDefaultDimensionGraph(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @param indicatorDescriptionDefaultDimensionGraphID The ID of the IndicatorDescriptionDefaultDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        IndicatorDescriptionDefaultDimensionGraph.getIndicatorDescriptionForIndicatorDescriptionDefaultDimensionGraph = function (indicatorDescriptionDefaultDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDefaultDimensionGraphID: indicatorDescriptionDefaultDimensionGraphID });
        };
        /** Gets IndicatorDescriptionDefaultDimensionGraphs by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByLocaleLevelID = function (localeLevelID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByLocaleLevelIDCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Gets how many pages of IndicatorDescriptionDefaultDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByLocaleLevelIDPageCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        IndicatorDescriptionDefaultDimensionGraph.prototype.getLocaleLevel = function (api, callback) {
            IndicatorDescriptionDefaultDimensionGraph.getLocaleLevelForIndicatorDescriptionDefaultDimensionGraph(this.id, api, callback);
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @param indicatorDescriptionDefaultDimensionGraphID The ID of the IndicatorDescriptionDefaultDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        IndicatorDescriptionDefaultDimensionGraph.getLocaleLevelForIndicatorDescriptionDefaultDimensionGraph = function (indicatorDescriptionDefaultDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDefaultDimensionGraphID: indicatorDescriptionDefaultDimensionGraphID });
        };
        /** Gets IndicatorDescriptionDefaultDimensionGraphs by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByDimensionGraphID = function (dimensionGraphID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByDimensionGraphIDCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets how many pages of IndicatorDescriptionDefaultDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        IndicatorDescriptionDefaultDimensionGraph.getByDimensionGraphIDPageCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        IndicatorDescriptionDefaultDimensionGraph.prototype.getDimensionGraph = function (api, callback) {
            IndicatorDescriptionDefaultDimensionGraph.getDimensionGraphForIndicatorDescriptionDefaultDimensionGraph(this.id, api, callback);
        };
        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @param indicatorDescriptionDefaultDimensionGraphID The ID of the IndicatorDescriptionDefaultDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        IndicatorDescriptionDefaultDimensionGraph.getDimensionGraphForIndicatorDescriptionDefaultDimensionGraph = function (indicatorDescriptionDefaultDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDefaultDimensionGraphID: indicatorDescriptionDefaultDimensionGraphID });
        };
        IndicatorDescriptionDefaultDimensionGraph.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new hiw.PropertyMap("localeLevelID", "LocaleLevelID"),
            dimensionGraphID: new hiw.PropertyMap("dimensionGraphID", "DimensionGraphID")
        };
        return IndicatorDescriptionDefaultDimensionGraph;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionDefaultDimensionGraph = IndicatorDescriptionDefaultDimensionGraph;
    /** Contains properties and static functionality for the IndicatorDescriptionDimension type. */
    var IndicatorDescriptionDimension = (function (_super) {
        __extends(IndicatorDescriptionDimension, _super);
        function IndicatorDescriptionDimension() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.dimensionListID = null;
        }
        IndicatorDescriptionDimension.prototype.getFields = function () {
            return IndicatorDescriptionDimension.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionDimensions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDimensions */
        IndicatorDescriptionDimension.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensions exist. */
        IndicatorDescriptionDimension.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionDimensions method. */
        IndicatorDescriptionDimension.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionDimension with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDimension to return.
         *  @return The matching IndicatorDescriptionDimension, if one exists, or null. */
        IndicatorDescriptionDimension.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionDimensions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDimensions which match the provided filter. */
        IndicatorDescriptionDimension.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDimensions which match the provided filter. */
        IndicatorDescriptionDimension.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDimensionswhich match the provided filter. */
        IndicatorDescriptionDimension.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionDimensions by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        IndicatorDescriptionDimension.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        IndicatorDescriptionDimension.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionDimensions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        IndicatorDescriptionDimension.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimension.
         *  @return A single IndicatorDescriptionDimension, or null. */
        IndicatorDescriptionDimension.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionDimension.getIndicatorDescriptionForIndicatorDescriptionDimension(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimension.
         *  @param indicatorDescriptionDimensionID The ID of the IndicatorDescriptionDimension to retrieve.
         *  @return A single IndicatorDescriptionDimension, or null. */
        IndicatorDescriptionDimension.getIndicatorDescriptionForIndicatorDescriptionDimension = function (indicatorDescriptionDimensionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDimensionID: indicatorDescriptionDimensionID });
        };
        /** Gets IndicatorDescriptionDimensions by DimensionListID.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        IndicatorDescriptionDimension.getByDimensionListID = function (dimensionListID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionListID: dimensionListID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensions by DimensionListID exist.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        IndicatorDescriptionDimension.getByDimensionListIDCount = function (dimensionListID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionListID: dimensionListID });
        };
        /** Gets how many pages of IndicatorDescriptionDimensions by DimensionListID exist.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        IndicatorDescriptionDimension.getByDimensionListIDPageCount = function (dimensionListID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionListID: dimensionListID });
        };
        /** Returns the related DimensionList based on the unique ID of the related IndicatorDescriptionDimension.
         *  @return A single IndicatorDescriptionDimension, or null. */
        IndicatorDescriptionDimension.prototype.getDimensionList = function (api, callback) {
            IndicatorDescriptionDimension.getDimensionListForIndicatorDescriptionDimension(this.id, api, callback);
        };
        /** Returns the related DimensionList based on the unique ID of the related IndicatorDescriptionDimension.
         *  @param indicatorDescriptionDimensionID The ID of the IndicatorDescriptionDimension to retrieve.
         *  @return A single IndicatorDescriptionDimension, or null. */
        IndicatorDescriptionDimension.getDimensionListForIndicatorDescriptionDimension = function (indicatorDescriptionDimensionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDimensionID: indicatorDescriptionDimensionID });
        };
        /** Gets a unique IndicatorDescriptionDimension based on the provided values.
         *  @return A single IndicatorDescriptionDimension, or null. */
        IndicatorDescriptionDimension.getByIndicatorDescriptionIDAndDimensionListID = function (indicatorDescriptionID, dimensionListID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID, dimensionListID: dimensionListID });
        };
        IndicatorDescriptionDimension.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dimensionListID: new hiw.PropertyMap("dimensionListID", "DimensionListID")
        };
        return IndicatorDescriptionDimension;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionDimension = IndicatorDescriptionDimension;
    /** Contains properties and static functionality for the IndicatorDescriptionDimensionGraph type. */
    var IndicatorDescriptionDimensionGraph = (function (_super) {
        __extends(IndicatorDescriptionDimensionGraph, _super);
        function IndicatorDescriptionDimensionGraph() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeLevelID = null;
            this.dimensionGraphID = null;
        }
        IndicatorDescriptionDimensionGraph.prototype.getFields = function () {
            return IndicatorDescriptionDimensionGraph.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionDimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDimensionGraphs */
        IndicatorDescriptionDimensionGraph.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensionGraphs exist. */
        IndicatorDescriptionDimensionGraph.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionDimensionGraphs method. */
        IndicatorDescriptionDimensionGraph.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionDimensionGraph with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDimensionGraph to return.
         *  @return The matching IndicatorDescriptionDimensionGraph, if one exists, or null. */
        IndicatorDescriptionDimensionGraph.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionDimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDimensionGraphs which match the provided filter. */
        IndicatorDescriptionDimensionGraph.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDimensionGraphs which match the provided filter. */
        IndicatorDescriptionDimensionGraph.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDimensionGraphswhich match the provided filter. */
        IndicatorDescriptionDimensionGraph.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionDimensionGraphs by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        IndicatorDescriptionDimensionGraph.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionDimensionGraph.getIndicatorDescriptionForIndicatorDescriptionDimensionGraph(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @param indicatorDescriptionDimensionGraphID The ID of the IndicatorDescriptionDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        IndicatorDescriptionDimensionGraph.getIndicatorDescriptionForIndicatorDescriptionDimensionGraph = function (indicatorDescriptionDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDimensionGraphID: indicatorDescriptionDimensionGraphID });
        };
        /** Gets IndicatorDescriptionDimensionGraphs by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByLocaleLevelID = function (localeLevelID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByLocaleLevelIDCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Gets how many pages of IndicatorDescriptionDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByLocaleLevelIDPageCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        IndicatorDescriptionDimensionGraph.prototype.getLocaleLevel = function (api, callback) {
            IndicatorDescriptionDimensionGraph.getLocaleLevelForIndicatorDescriptionDimensionGraph(this.id, api, callback);
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @param indicatorDescriptionDimensionGraphID The ID of the IndicatorDescriptionDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        IndicatorDescriptionDimensionGraph.getLocaleLevelForIndicatorDescriptionDimensionGraph = function (indicatorDescriptionDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDimensionGraphID: indicatorDescriptionDimensionGraphID });
        };
        /** Gets IndicatorDescriptionDimensionGraphs by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByDimensionGraphID = function (dimensionGraphID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByDimensionGraphIDCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets how many pages of IndicatorDescriptionDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        IndicatorDescriptionDimensionGraph.getByDimensionGraphIDPageCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        IndicatorDescriptionDimensionGraph.prototype.getDimensionGraph = function (api, callback) {
            IndicatorDescriptionDimensionGraph.getDimensionGraphForIndicatorDescriptionDimensionGraph(this.id, api, callback);
        };
        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @param indicatorDescriptionDimensionGraphID The ID of the IndicatorDescriptionDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        IndicatorDescriptionDimensionGraph.getDimensionGraphForIndicatorDescriptionDimensionGraph = function (indicatorDescriptionDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDimensionGraphID: indicatorDescriptionDimensionGraphID });
        };
        IndicatorDescriptionDimensionGraph.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new hiw.PropertyMap("localeLevelID", "LocaleLevelID"),
            dimensionGraphID: new hiw.PropertyMap("dimensionGraphID", "DimensionGraphID")
        };
        return IndicatorDescriptionDimensionGraph;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionDimensionGraph = IndicatorDescriptionDimensionGraph;
    /** Contains properties and static functionality for the IndicatorDescriptionDimensionValue type. */
    var IndicatorDescriptionDimensionValue = (function (_super) {
        __extends(IndicatorDescriptionDimensionValue, _super);
        function IndicatorDescriptionDimensionValue() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.dimensionBookID = null;
        }
        IndicatorDescriptionDimensionValue.prototype.getFields = function () {
            return IndicatorDescriptionDimensionValue.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionDimensionValues in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDimensionValues */
        IndicatorDescriptionDimensionValue.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensionValues exist. */
        IndicatorDescriptionDimensionValue.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionDimensionValues method. */
        IndicatorDescriptionDimensionValue.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionDimensionValue with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDimensionValue to return.
         *  @return The matching IndicatorDescriptionDimensionValue, if one exists, or null. */
        IndicatorDescriptionDimensionValue.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionDimensionValues based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDimensionValues which match the provided filter. */
        IndicatorDescriptionDimensionValue.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionDimensionValues exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDimensionValues which match the provided filter. */
        IndicatorDescriptionDimensionValue.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionDimensionValues exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDimensionValueswhich match the provided filter. */
        IndicatorDescriptionDimensionValue.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionDimensionValues by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        IndicatorDescriptionDimensionValue.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensionValues by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        IndicatorDescriptionDimensionValue.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionDimensionValues by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        IndicatorDescriptionDimensionValue.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        IndicatorDescriptionDimensionValue.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionDimensionValue.getIndicatorDescriptionForIndicatorDescriptionDimensionValue(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @param indicatorDescriptionDimensionValueID The ID of the IndicatorDescriptionDimensionValue to retrieve.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        IndicatorDescriptionDimensionValue.getIndicatorDescriptionForIndicatorDescriptionDimensionValue = function (indicatorDescriptionDimensionValueID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDimensionValueID: indicatorDescriptionDimensionValueID });
        };
        /** Gets IndicatorDescriptionDimensionValues by DimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        IndicatorDescriptionDimensionValue.getByDimensionBookID = function (dimensionBookID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID }, null, page);
        };
        /** Gets how many IndicatorDescriptionDimensionValues by DimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        IndicatorDescriptionDimensionValue.getByDimensionBookIDCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Gets how many pages of IndicatorDescriptionDimensionValues by DimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        IndicatorDescriptionDimensionValue.getByDimensionBookIDPageCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        IndicatorDescriptionDimensionValue.prototype.getDimensionBook = function (api, callback) {
            IndicatorDescriptionDimensionValue.getDimensionBookForIndicatorDescriptionDimensionValue(this.id, api, callback);
        };
        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @param indicatorDescriptionDimensionValueID The ID of the IndicatorDescriptionDimensionValue to retrieve.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        IndicatorDescriptionDimensionValue.getDimensionBookForIndicatorDescriptionDimensionValue = function (indicatorDescriptionDimensionValueID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionDimensionValueID: indicatorDescriptionDimensionValueID });
        };
        /** Gets a unique IndicatorDescriptionDimensionValue based on the provided values.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        IndicatorDescriptionDimensionValue.getByIndicatorDescriptionIDAndDimensionBookID = function (indicatorDescriptionID, dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID, dimensionBookID: dimensionBookID });
        };
        IndicatorDescriptionDimensionValue.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dimensionBookID: new hiw.PropertyMap("dimensionBookID", "DimensionBookID")
        };
        return IndicatorDescriptionDimensionValue;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionDimensionValue = IndicatorDescriptionDimensionValue;
    /** Contains properties and static functionality for the IndicatorDescriptionInitiative type. */
    var IndicatorDescriptionInitiative = (function (_super) {
        __extends(IndicatorDescriptionInitiative, _super);
        function IndicatorDescriptionInitiative() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.initiativeID = null;
        }
        IndicatorDescriptionInitiative.prototype.getFields = function () {
            return IndicatorDescriptionInitiative.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionInitiatives in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionInitiatives */
        IndicatorDescriptionInitiative.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionInitiatives exist. */
        IndicatorDescriptionInitiative.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionInitiatives method. */
        IndicatorDescriptionInitiative.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionInitiative with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionInitiative to return.
         *  @return The matching IndicatorDescriptionInitiative, if one exists, or null. */
        IndicatorDescriptionInitiative.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionInitiatives based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionInitiatives which match the provided filter. */
        IndicatorDescriptionInitiative.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionInitiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionInitiatives which match the provided filter. */
        IndicatorDescriptionInitiative.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionInitiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionInitiativeswhich match the provided filter. */
        IndicatorDescriptionInitiative.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionInitiatives by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        IndicatorDescriptionInitiative.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionInitiatives by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        IndicatorDescriptionInitiative.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionInitiatives by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        IndicatorDescriptionInitiative.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        IndicatorDescriptionInitiative.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionInitiative.getIndicatorDescriptionForIndicatorDescriptionInitiative(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @param indicatorDescriptionInitiativeID The ID of the IndicatorDescriptionInitiative to retrieve.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        IndicatorDescriptionInitiative.getIndicatorDescriptionForIndicatorDescriptionInitiative = function (indicatorDescriptionInitiativeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionInitiativeID: indicatorDescriptionInitiativeID });
        };
        /** Gets IndicatorDescriptionInitiatives by InitiativeID.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        IndicatorDescriptionInitiative.getByInitiativeID = function (initiativeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { initiativeID: initiativeID }, null, page);
        };
        /** Gets how many IndicatorDescriptionInitiatives by InitiativeID exist.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        IndicatorDescriptionInitiative.getByInitiativeIDCount = function (initiativeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { initiativeID: initiativeID });
        };
        /** Gets how many pages of IndicatorDescriptionInitiatives by InitiativeID exist.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        IndicatorDescriptionInitiative.getByInitiativeIDPageCount = function (initiativeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { initiativeID: initiativeID });
        };
        /** Returns the related Initiative based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        IndicatorDescriptionInitiative.prototype.getInitiative = function (api, callback) {
            IndicatorDescriptionInitiative.getInitiativeForIndicatorDescriptionInitiative(this.id, api, callback);
        };
        /** Returns the related Initiative based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @param indicatorDescriptionInitiativeID The ID of the IndicatorDescriptionInitiative to retrieve.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        IndicatorDescriptionInitiative.getInitiativeForIndicatorDescriptionInitiative = function (indicatorDescriptionInitiativeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionInitiativeID: indicatorDescriptionInitiativeID });
        };
        IndicatorDescriptionInitiative.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            initiativeID: new hiw.PropertyMap("initiativeID", "InitiativeID")
        };
        return IndicatorDescriptionInitiative;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionInitiative = IndicatorDescriptionInitiative;
    /** Contains properties and static functionality for the IndicatorDescriptionIntervention type. */
    var IndicatorDescriptionIntervention = (function (_super) {
        __extends(IndicatorDescriptionIntervention, _super);
        function IndicatorDescriptionIntervention() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.interventionID = null;
            this.sortOrder = null;
        }
        IndicatorDescriptionIntervention.prototype.getFields = function () {
            return IndicatorDescriptionIntervention.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionInterventions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionInterventions */
        IndicatorDescriptionIntervention.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionInterventions exist. */
        IndicatorDescriptionIntervention.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionInterventions method. */
        IndicatorDescriptionIntervention.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionIntervention with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionIntervention to return.
         *  @return The matching IndicatorDescriptionIntervention, if one exists, or null. */
        IndicatorDescriptionIntervention.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionInterventions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionInterventions which match the provided filter. */
        IndicatorDescriptionIntervention.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionInterventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionInterventions which match the provided filter. */
        IndicatorDescriptionIntervention.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionInterventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionInterventionswhich match the provided filter. */
        IndicatorDescriptionIntervention.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionInterventions by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        IndicatorDescriptionIntervention.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionInterventions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        IndicatorDescriptionIntervention.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionInterventions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        IndicatorDescriptionIntervention.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        IndicatorDescriptionIntervention.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionIntervention.getIndicatorDescriptionForIndicatorDescriptionIntervention(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @param indicatorDescriptionInterventionID The ID of the IndicatorDescriptionIntervention to retrieve.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        IndicatorDescriptionIntervention.getIndicatorDescriptionForIndicatorDescriptionIntervention = function (indicatorDescriptionInterventionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionInterventionID: indicatorDescriptionInterventionID });
        };
        /** Gets IndicatorDescriptionInterventions by InterventionID.
         *  @param interventionID The ID of the Intervention for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        IndicatorDescriptionIntervention.getByInterventionID = function (interventionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { interventionID: interventionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionInterventions by InterventionID exist.
         *  @param interventionID The ID of the Intervention for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        IndicatorDescriptionIntervention.getByInterventionIDCount = function (interventionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { interventionID: interventionID });
        };
        /** Gets how many pages of IndicatorDescriptionInterventions by InterventionID exist.
         *  @param interventionID The ID of the Intervention for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        IndicatorDescriptionIntervention.getByInterventionIDPageCount = function (interventionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { interventionID: interventionID });
        };
        /** Returns the related Interventions based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        IndicatorDescriptionIntervention.prototype.getInterventions = function (api, callback) {
            IndicatorDescriptionIntervention.getInterventionsForIndicatorDescriptionIntervention(this.id, api, callback);
        };
        /** Returns the related Interventions based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @param indicatorDescriptionInterventionID The ID of the IndicatorDescriptionIntervention to retrieve.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        IndicatorDescriptionIntervention.getInterventionsForIndicatorDescriptionIntervention = function (indicatorDescriptionInterventionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionInterventionID: indicatorDescriptionInterventionID });
        };
        IndicatorDescriptionIntervention.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            interventionID: new hiw.PropertyMap("interventionID", "InterventionID"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return IndicatorDescriptionIntervention;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionIntervention = IndicatorDescriptionIntervention;
    /** Contains properties and static functionality for the IndicatorDescriptionKeyword type. */
    var IndicatorDescriptionKeyword = (function (_super) {
        __extends(IndicatorDescriptionKeyword, _super);
        function IndicatorDescriptionKeyword() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.keywordID = null;
        }
        IndicatorDescriptionKeyword.prototype.getFields = function () {
            return IndicatorDescriptionKeyword.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionKeywords in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionKeywords */
        IndicatorDescriptionKeyword.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionKeywords exist. */
        IndicatorDescriptionKeyword.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionKeywords method. */
        IndicatorDescriptionKeyword.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionKeyword with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionKeyword to return.
         *  @return The matching IndicatorDescriptionKeyword, if one exists, or null. */
        IndicatorDescriptionKeyword.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionKeywords based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionKeywords which match the provided filter. */
        IndicatorDescriptionKeyword.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionKeywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionKeywords which match the provided filter. */
        IndicatorDescriptionKeyword.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionKeywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionKeywordswhich match the provided filter. */
        IndicatorDescriptionKeyword.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionKeywords by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        IndicatorDescriptionKeyword.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionKeywords by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        IndicatorDescriptionKeyword.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionKeywords by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        IndicatorDescriptionKeyword.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        IndicatorDescriptionKeyword.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionKeyword.getIndicatorDescriptionForIndicatorDescriptionKeyword(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @param indicatorDescriptionKeywordID The ID of the IndicatorDescriptionKeyword to retrieve.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        IndicatorDescriptionKeyword.getIndicatorDescriptionForIndicatorDescriptionKeyword = function (indicatorDescriptionKeywordID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionKeywordID: indicatorDescriptionKeywordID });
        };
        /** Gets IndicatorDescriptionKeywords by KeywordID.
         *  @param keywordID The ID of the Keyword for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        IndicatorDescriptionKeyword.getByKeywordID = function (keywordID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { keywordID: keywordID }, null, page);
        };
        /** Gets how many IndicatorDescriptionKeywords by KeywordID exist.
         *  @param keywordID The ID of the Keyword for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        IndicatorDescriptionKeyword.getByKeywordIDCount = function (keywordID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { keywordID: keywordID });
        };
        /** Gets how many pages of IndicatorDescriptionKeywords by KeywordID exist.
         *  @param keywordID The ID of the Keyword for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        IndicatorDescriptionKeyword.getByKeywordIDPageCount = function (keywordID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { keywordID: keywordID });
        };
        /** Returns the related Keyword based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        IndicatorDescriptionKeyword.prototype.getKeyword = function (api, callback) {
            IndicatorDescriptionKeyword.getKeywordForIndicatorDescriptionKeyword(this.id, api, callback);
        };
        /** Returns the related Keyword based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @param indicatorDescriptionKeywordID The ID of the IndicatorDescriptionKeyword to retrieve.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        IndicatorDescriptionKeyword.getKeywordForIndicatorDescriptionKeyword = function (indicatorDescriptionKeywordID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionKeywordID: indicatorDescriptionKeywordID });
        };
        /** Gets a unique IndicatorDescriptionKeyword based on the provided values.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        IndicatorDescriptionKeyword.getByIndicatorDescriptionIDAndKeywordID = function (indicatorDescriptionID, keywordID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID, keywordID: keywordID });
        };
        IndicatorDescriptionKeyword.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            keywordID: new hiw.PropertyMap("keywordID", "KeywordID")
        };
        return IndicatorDescriptionKeyword;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionKeyword = IndicatorDescriptionKeyword;
    /** Contains properties and static functionality for the IndicatorDescriptionLocaleCounty type. */
    var IndicatorDescriptionLocaleCounty = (function (_super) {
        __extends(IndicatorDescriptionLocaleCounty, _super);
        function IndicatorDescriptionLocaleCounty() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeID = null;
        }
        IndicatorDescriptionLocaleCounty.prototype.getFields = function () {
            return IndicatorDescriptionLocaleCounty.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionLocaleCounties in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleCounties */
        IndicatorDescriptionLocaleCounty.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleCounties exist. */
        IndicatorDescriptionLocaleCounty.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleCounties method. */
        IndicatorDescriptionLocaleCounty.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionLocaleCounty with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleCounty to return.
         *  @return The matching IndicatorDescriptionLocaleCounty, if one exists, or null. */
        IndicatorDescriptionLocaleCounty.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionLocaleCounties based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleCounties which match the provided filter. */
        IndicatorDescriptionLocaleCounty.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionLocaleCounties exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleCounties which match the provided filter. */
        IndicatorDescriptionLocaleCounty.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionLocaleCounties exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleCountieswhich match the provided filter. */
        IndicatorDescriptionLocaleCounty.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionLocaleCounties by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        IndicatorDescriptionLocaleCounty.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleCounties by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        IndicatorDescriptionLocaleCounty.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleCounties by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        IndicatorDescriptionLocaleCounty.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        IndicatorDescriptionLocaleCounty.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionLocaleCounty.getIndicatorDescriptionForIndicatorDescriptionLocaleCounty(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @param indicatorDescriptionLocaleCountyID The ID of the IndicatorDescriptionLocaleCounty to retrieve.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        IndicatorDescriptionLocaleCounty.getIndicatorDescriptionForIndicatorDescriptionLocaleCounty = function (indicatorDescriptionLocaleCountyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleCountyID: indicatorDescriptionLocaleCountyID });
        };
        /** Gets IndicatorDescriptionLocaleCounties by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        IndicatorDescriptionLocaleCounty.getByLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleCounties by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        IndicatorDescriptionLocaleCounty.getByLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleCounties by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        IndicatorDescriptionLocaleCounty.getByLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        IndicatorDescriptionLocaleCounty.prototype.getLocale = function (api, callback) {
            IndicatorDescriptionLocaleCounty.getLocaleForIndicatorDescriptionLocaleCounty(this.id, api, callback);
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @param indicatorDescriptionLocaleCountyID The ID of the IndicatorDescriptionLocaleCounty to retrieve.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        IndicatorDescriptionLocaleCounty.getLocaleForIndicatorDescriptionLocaleCounty = function (indicatorDescriptionLocaleCountyID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleCountyID: indicatorDescriptionLocaleCountyID });
        };
        IndicatorDescriptionLocaleCounty.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new hiw.PropertyMap("localeID", "LocaleID")
        };
        return IndicatorDescriptionLocaleCounty;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionLocaleCounty = IndicatorDescriptionLocaleCounty;
    /** Contains properties and static functionality for the IndicatorDescriptionLocaleHospitalReferralRegion type. */
    var IndicatorDescriptionLocaleHospitalReferralRegion = (function (_super) {
        __extends(IndicatorDescriptionLocaleHospitalReferralRegion, _super);
        function IndicatorDescriptionLocaleHospitalReferralRegion() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeID = null;
        }
        IndicatorDescriptionLocaleHospitalReferralRegion.prototype.getFields = function () {
            return IndicatorDescriptionLocaleHospitalReferralRegion.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionLocaleHospitalReferralRegions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleHospitalReferralRegions */
        IndicatorDescriptionLocaleHospitalReferralRegion.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleHospitalReferralRegions exist. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleHospitalReferralRegions method. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionLocaleHospitalReferralRegion with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleHospitalReferralRegion to return.
         *  @return The matching IndicatorDescriptionLocaleHospitalReferralRegion, if one exists, or null. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionLocaleHospitalReferralRegions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleHospitalReferralRegions which match the provided filter. */
        IndicatorDescriptionLocaleHospitalReferralRegion.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionLocaleHospitalReferralRegions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleHospitalReferralRegions which match the provided filter. */
        IndicatorDescriptionLocaleHospitalReferralRegion.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionLocaleHospitalReferralRegions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleHospitalReferralRegionswhich match the provided filter. */
        IndicatorDescriptionLocaleHospitalReferralRegion.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionLocaleHospitalReferralRegions by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleHospitalReferralRegions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleHospitalReferralRegions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        IndicatorDescriptionLocaleHospitalReferralRegion.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionLocaleHospitalReferralRegion.getIndicatorDescriptionForIndicatorDescriptionLocaleHospitalReferralRegion(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @param indicatorDescriptionLocaleHospitalReferralRegionID The ID of the IndicatorDescriptionLocaleHospitalReferralRegion to retrieve.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getIndicatorDescriptionForIndicatorDescriptionLocaleHospitalReferralRegion = function (indicatorDescriptionLocaleHospitalReferralRegionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleHospitalReferralRegionID: indicatorDescriptionLocaleHospitalReferralRegionID });
        };
        /** Gets IndicatorDescriptionLocaleHospitalReferralRegions by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getByLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleHospitalReferralRegions by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getByLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleHospitalReferralRegions by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getByLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        IndicatorDescriptionLocaleHospitalReferralRegion.prototype.getLocale = function (api, callback) {
            IndicatorDescriptionLocaleHospitalReferralRegion.getLocaleForIndicatorDescriptionLocaleHospitalReferralRegion(this.id, api, callback);
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @param indicatorDescriptionLocaleHospitalReferralRegionID The ID of the IndicatorDescriptionLocaleHospitalReferralRegion to retrieve.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        IndicatorDescriptionLocaleHospitalReferralRegion.getLocaleForIndicatorDescriptionLocaleHospitalReferralRegion = function (indicatorDescriptionLocaleHospitalReferralRegionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleHospitalReferralRegionID: indicatorDescriptionLocaleHospitalReferralRegionID });
        };
        IndicatorDescriptionLocaleHospitalReferralRegion.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new hiw.PropertyMap("localeID", "LocaleID")
        };
        return IndicatorDescriptionLocaleHospitalReferralRegion;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionLocaleHospitalReferralRegion = IndicatorDescriptionLocaleHospitalReferralRegion;
    /** Contains properties and static functionality for the IndicatorDescriptionLocaleLevel type. */
    var IndicatorDescriptionLocaleLevel = (function (_super) {
        __extends(IndicatorDescriptionLocaleLevel, _super);
        function IndicatorDescriptionLocaleLevel() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeLevelID = null;
        }
        IndicatorDescriptionLocaleLevel.prototype.getFields = function () {
            return IndicatorDescriptionLocaleLevel.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionLocaleLevels in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleLevels */
        IndicatorDescriptionLocaleLevel.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleLevels exist. */
        IndicatorDescriptionLocaleLevel.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleLevels method. */
        IndicatorDescriptionLocaleLevel.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionLocaleLevel with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleLevel to return.
         *  @return The matching IndicatorDescriptionLocaleLevel, if one exists, or null. */
        IndicatorDescriptionLocaleLevel.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionLocaleLevels based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleLevels which match the provided filter. */
        IndicatorDescriptionLocaleLevel.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionLocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleLevels which match the provided filter. */
        IndicatorDescriptionLocaleLevel.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionLocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleLevelswhich match the provided filter. */
        IndicatorDescriptionLocaleLevel.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionLocaleLevels by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        IndicatorDescriptionLocaleLevel.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleLevels by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        IndicatorDescriptionLocaleLevel.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleLevels by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        IndicatorDescriptionLocaleLevel.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        IndicatorDescriptionLocaleLevel.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionLocaleLevel.getIndicatorDescriptionForIndicatorDescriptionLocaleLevel(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @param indicatorDescriptionLocaleLevelID The ID of the IndicatorDescriptionLocaleLevel to retrieve.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        IndicatorDescriptionLocaleLevel.getIndicatorDescriptionForIndicatorDescriptionLocaleLevel = function (indicatorDescriptionLocaleLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleLevelID: indicatorDescriptionLocaleLevelID });
        };
        /** Gets IndicatorDescriptionLocaleLevels by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        IndicatorDescriptionLocaleLevel.getByLocaleLevelID = function (localeLevelID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleLevels by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        IndicatorDescriptionLocaleLevel.getByLocaleLevelIDCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleLevels by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        IndicatorDescriptionLocaleLevel.getByLocaleLevelIDPageCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        IndicatorDescriptionLocaleLevel.prototype.getLocaleLevel = function (api, callback) {
            IndicatorDescriptionLocaleLevel.getLocaleLevelForIndicatorDescriptionLocaleLevel(this.id, api, callback);
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @param indicatorDescriptionLocaleLevelID The ID of the IndicatorDescriptionLocaleLevel to retrieve.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        IndicatorDescriptionLocaleLevel.getLocaleLevelForIndicatorDescriptionLocaleLevel = function (indicatorDescriptionLocaleLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleLevelID: indicatorDescriptionLocaleLevelID });
        };
        IndicatorDescriptionLocaleLevel.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new hiw.PropertyMap("localeLevelID", "LocaleLevelID")
        };
        return IndicatorDescriptionLocaleLevel;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionLocaleLevel = IndicatorDescriptionLocaleLevel;
    /** Contains properties and static functionality for the IndicatorDescriptionLocale type. */
    var IndicatorDescriptionLocale = (function (_super) {
        __extends(IndicatorDescriptionLocale, _super);
        function IndicatorDescriptionLocale() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeID = null;
        }
        IndicatorDescriptionLocale.prototype.getFields = function () {
            return IndicatorDescriptionLocale.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionLocales in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocales */
        IndicatorDescriptionLocale.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionLocales exist. */
        IndicatorDescriptionLocale.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionLocales method. */
        IndicatorDescriptionLocale.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionLocale with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocale to return.
         *  @return The matching IndicatorDescriptionLocale, if one exists, or null. */
        IndicatorDescriptionLocale.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionLocales based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocales which match the provided filter. */
        IndicatorDescriptionLocale.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionLocales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocales which match the provided filter. */
        IndicatorDescriptionLocale.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionLocales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleswhich match the provided filter. */
        IndicatorDescriptionLocale.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionLocales by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        IndicatorDescriptionLocale.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocales by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        IndicatorDescriptionLocale.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionLocales by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        IndicatorDescriptionLocale.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocale.
         *  @return A single IndicatorDescriptionLocale, or null. */
        IndicatorDescriptionLocale.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionLocale.getIndicatorDescriptionForIndicatorDescriptionLocale(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocale.
         *  @param indicatorDescriptionLocaleID The ID of the IndicatorDescriptionLocale to retrieve.
         *  @return A single IndicatorDescriptionLocale, or null. */
        IndicatorDescriptionLocale.getIndicatorDescriptionForIndicatorDescriptionLocale = function (indicatorDescriptionLocaleID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleID: indicatorDescriptionLocaleID });
        };
        /** Gets IndicatorDescriptionLocales by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        IndicatorDescriptionLocale.getByLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocales by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        IndicatorDescriptionLocale.getByLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of IndicatorDescriptionLocales by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        IndicatorDescriptionLocale.getByLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocale.
         *  @return A single IndicatorDescriptionLocale, or null. */
        IndicatorDescriptionLocale.prototype.getLocale = function (api, callback) {
            IndicatorDescriptionLocale.getLocaleForIndicatorDescriptionLocale(this.id, api, callback);
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocale.
         *  @param indicatorDescriptionLocaleID The ID of the IndicatorDescriptionLocale to retrieve.
         *  @return A single IndicatorDescriptionLocale, or null. */
        IndicatorDescriptionLocale.getLocaleForIndicatorDescriptionLocale = function (indicatorDescriptionLocaleID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleID: indicatorDescriptionLocaleID });
        };
        IndicatorDescriptionLocale.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new hiw.PropertyMap("localeID", "LocaleID")
        };
        return IndicatorDescriptionLocale;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionLocale = IndicatorDescriptionLocale;
    /** Contains properties and static functionality for the IndicatorDescriptionLocaleState type. */
    var IndicatorDescriptionLocaleState = (function (_super) {
        __extends(IndicatorDescriptionLocaleState, _super);
        function IndicatorDescriptionLocaleState() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeID = null;
        }
        IndicatorDescriptionLocaleState.prototype.getFields = function () {
            return IndicatorDescriptionLocaleState.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionLocaleStates in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleStates */
        IndicatorDescriptionLocaleState.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleStates exist. */
        IndicatorDescriptionLocaleState.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleStates method. */
        IndicatorDescriptionLocaleState.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionLocaleState with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleState to return.
         *  @return The matching IndicatorDescriptionLocaleState, if one exists, or null. */
        IndicatorDescriptionLocaleState.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionLocaleStates based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleStates which match the provided filter. */
        IndicatorDescriptionLocaleState.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionLocaleStates exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleStates which match the provided filter. */
        IndicatorDescriptionLocaleState.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionLocaleStates exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleStateswhich match the provided filter. */
        IndicatorDescriptionLocaleState.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionLocaleStates by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        IndicatorDescriptionLocaleState.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleStates by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        IndicatorDescriptionLocaleState.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleStates by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        IndicatorDescriptionLocaleState.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        IndicatorDescriptionLocaleState.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionLocaleState.getIndicatorDescriptionForIndicatorDescriptionLocaleState(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @param indicatorDescriptionLocaleStateID The ID of the IndicatorDescriptionLocaleState to retrieve.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        IndicatorDescriptionLocaleState.getIndicatorDescriptionForIndicatorDescriptionLocaleState = function (indicatorDescriptionLocaleStateID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleStateID: indicatorDescriptionLocaleStateID });
        };
        /** Gets IndicatorDescriptionLocaleStates by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        IndicatorDescriptionLocaleState.getByLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many IndicatorDescriptionLocaleStates by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        IndicatorDescriptionLocaleState.getByLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of IndicatorDescriptionLocaleStates by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        IndicatorDescriptionLocaleState.getByLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        IndicatorDescriptionLocaleState.prototype.getLocale = function (api, callback) {
            IndicatorDescriptionLocaleState.getLocaleForIndicatorDescriptionLocaleState(this.id, api, callback);
        };
        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @param indicatorDescriptionLocaleStateID The ID of the IndicatorDescriptionLocaleState to retrieve.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        IndicatorDescriptionLocaleState.getLocaleForIndicatorDescriptionLocaleState = function (indicatorDescriptionLocaleStateID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionLocaleStateID: indicatorDescriptionLocaleStateID });
        };
        IndicatorDescriptionLocaleState.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new hiw.PropertyMap("localeID", "LocaleID")
        };
        return IndicatorDescriptionLocaleState;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionLocaleState = IndicatorDescriptionLocaleState;
    /** Contains properties and static functionality for the IndicatorDescriptionMethodologyNote type. */
    var IndicatorDescriptionMethodologyNote = (function (_super) {
        __extends(IndicatorDescriptionMethodologyNote, _super);
        function IndicatorDescriptionMethodologyNote() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.methodologyNote = null;
            this.methodologyNotePlain = null;
            this.isHTML = null;
            this.isAgeAdjusted = null;
            this.isFootnote = null;
            this.sortOrder = null;
        }
        IndicatorDescriptionMethodologyNote.prototype.getFields = function () {
            return IndicatorDescriptionMethodologyNote.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionMethodologyNotes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionMethodologyNotes */
        IndicatorDescriptionMethodologyNote.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionMethodologyNotes exist. */
        IndicatorDescriptionMethodologyNote.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionMethodologyNotes method. */
        IndicatorDescriptionMethodologyNote.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionMethodologyNote with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionMethodologyNote to return.
         *  @return The matching IndicatorDescriptionMethodologyNote, if one exists, or null. */
        IndicatorDescriptionMethodologyNote.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionMethodologyNotes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionMethodologyNotes which match the provided filter. */
        IndicatorDescriptionMethodologyNote.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionMethodologyNotes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionMethodologyNotes which match the provided filter. */
        IndicatorDescriptionMethodologyNote.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionMethodologyNotes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionMethodologyNoteswhich match the provided filter. */
        IndicatorDescriptionMethodologyNote.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionMethodologyNotes by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMethodologyNotes.
         *  @return An Array of IndicatorDescriptionMethodologyNotes. */
        IndicatorDescriptionMethodologyNote.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionMethodologyNotes by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMethodologyNotes.
         *  @return An Array of IndicatorDescriptionMethodologyNotes. */
        IndicatorDescriptionMethodologyNote.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionMethodologyNotes by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMethodologyNotes.
         *  @return An Array of IndicatorDescriptionMethodologyNotes. */
        IndicatorDescriptionMethodologyNote.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMethodologyNote.
         *  @return A single IndicatorDescriptionMethodologyNote, or null. */
        IndicatorDescriptionMethodologyNote.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionMethodologyNote.getIndicatorDescriptionForIndicatorDescriptionMethodologyNote(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMethodologyNote.
         *  @param indicatorDescriptionMethodologyNoteID The ID of the IndicatorDescriptionMethodologyNote to retrieve.
         *  @return A single IndicatorDescriptionMethodologyNote, or null. */
        IndicatorDescriptionMethodologyNote.getIndicatorDescriptionForIndicatorDescriptionMethodologyNote = function (indicatorDescriptionMethodologyNoteID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionMethodologyNoteID: indicatorDescriptionMethodologyNoteID });
        };
        IndicatorDescriptionMethodologyNote.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            methodologyNote: new hiw.PropertyMap("methodologyNote", "MethodologyNote"),
            methodologyNotePlain: new hiw.PropertyMap("methodologyNotePlain", "MethodologyNotePlain"),
            isHTML: new hiw.PropertyMap("isHTML", "isHTML"),
            isAgeAdjusted: new hiw.PropertyMap("isAgeAdjusted", "isAgeAdjusted"),
            isFootnote: new hiw.PropertyMap("isFootnote", "isFootnote"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return IndicatorDescriptionMethodologyNote;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionMethodologyNote = IndicatorDescriptionMethodologyNote;
    /** Contains properties and static functionality for the IndicatorDescriptionMoreInfo type. */
    var IndicatorDescriptionMoreInfo = (function (_super) {
        __extends(IndicatorDescriptionMoreInfo, _super);
        function IndicatorDescriptionMoreInfo() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.moreInfo = null;
            this.urlID = null;
            this.sortOrder = null;
        }
        IndicatorDescriptionMoreInfo.prototype.getFields = function () {
            return IndicatorDescriptionMoreInfo.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionMoreInfos in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionMoreInfos */
        IndicatorDescriptionMoreInfo.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionMoreInfos exist. */
        IndicatorDescriptionMoreInfo.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionMoreInfos method. */
        IndicatorDescriptionMoreInfo.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionMoreInfo with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionMoreInfo to return.
         *  @return The matching IndicatorDescriptionMoreInfo, if one exists, or null. */
        IndicatorDescriptionMoreInfo.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionMoreInfos based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionMoreInfos which match the provided filter. */
        IndicatorDescriptionMoreInfo.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionMoreInfos exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionMoreInfos which match the provided filter. */
        IndicatorDescriptionMoreInfo.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionMoreInfos exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionMoreInfoswhich match the provided filter. */
        IndicatorDescriptionMoreInfo.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionMoreInfos by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        IndicatorDescriptionMoreInfo.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionMoreInfos by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        IndicatorDescriptionMoreInfo.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionMoreInfos by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        IndicatorDescriptionMoreInfo.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        IndicatorDescriptionMoreInfo.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionMoreInfo.getIndicatorDescriptionForIndicatorDescriptionMoreInfo(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @param indicatorDescriptionMoreInfoID The ID of the IndicatorDescriptionMoreInfo to retrieve.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        IndicatorDescriptionMoreInfo.getIndicatorDescriptionForIndicatorDescriptionMoreInfo = function (indicatorDescriptionMoreInfoID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionMoreInfoID: indicatorDescriptionMoreInfoID });
        };
        /** Gets IndicatorDescriptionMoreInfos by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        IndicatorDescriptionMoreInfo.getByUrlID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many IndicatorDescriptionMoreInfos by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        IndicatorDescriptionMoreInfo.getByUrlIDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of IndicatorDescriptionMoreInfos by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        IndicatorDescriptionMoreInfo.getByUrlIDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        IndicatorDescriptionMoreInfo.prototype.getUrl = function (api, callback) {
            IndicatorDescriptionMoreInfo.getUrlForIndicatorDescriptionMoreInfo(this.id, api, callback);
        };
        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @param indicatorDescriptionMoreInfoID The ID of the IndicatorDescriptionMoreInfo to retrieve.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        IndicatorDescriptionMoreInfo.getUrlForIndicatorDescriptionMoreInfo = function (indicatorDescriptionMoreInfoID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionMoreInfoID: indicatorDescriptionMoreInfoID });
        };
        IndicatorDescriptionMoreInfo.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            moreInfo: new hiw.PropertyMap("moreInfo", "MoreInfo"),
            urlID: new hiw.PropertyMap("urlID", "UrlID"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return IndicatorDescriptionMoreInfo;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionMoreInfo = IndicatorDescriptionMoreInfo;
    /** Contains properties and static functionality for the IndicatorDescriptionReference type. */
    var IndicatorDescriptionReference = (function (_super) {
        __extends(IndicatorDescriptionReference, _super);
        function IndicatorDescriptionReference() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.reference = null;
            this.urlID = null;
            this.sortOrder = null;
        }
        IndicatorDescriptionReference.prototype.getFields = function () {
            return IndicatorDescriptionReference.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionReferences in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionReferences */
        IndicatorDescriptionReference.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionReferences exist. */
        IndicatorDescriptionReference.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionReferences method. */
        IndicatorDescriptionReference.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionReference with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionReference to return.
         *  @return The matching IndicatorDescriptionReference, if one exists, or null. */
        IndicatorDescriptionReference.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionReferences based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionReferences which match the provided filter. */
        IndicatorDescriptionReference.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionReferences exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionReferences which match the provided filter. */
        IndicatorDescriptionReference.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionReferences exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionReferenceswhich match the provided filter. */
        IndicatorDescriptionReference.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionReferences by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        IndicatorDescriptionReference.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionReferences by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        IndicatorDescriptionReference.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionReferences by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        IndicatorDescriptionReference.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionReference.
         *  @return A single IndicatorDescriptionReference, or null. */
        IndicatorDescriptionReference.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionReference.getIndicatorDescriptionForIndicatorDescriptionReference(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionReference.
         *  @param indicatorDescriptionReferenceID The ID of the IndicatorDescriptionReference to retrieve.
         *  @return A single IndicatorDescriptionReference, or null. */
        IndicatorDescriptionReference.getIndicatorDescriptionForIndicatorDescriptionReference = function (indicatorDescriptionReferenceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionReferenceID: indicatorDescriptionReferenceID });
        };
        /** Gets IndicatorDescriptionReferences by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        IndicatorDescriptionReference.getByUrlID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many IndicatorDescriptionReferences by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        IndicatorDescriptionReference.getByUrlIDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of IndicatorDescriptionReferences by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        IndicatorDescriptionReference.getByUrlIDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionReference.
         *  @return A single IndicatorDescriptionReference, or null. */
        IndicatorDescriptionReference.prototype.getUrl = function (api, callback) {
            IndicatorDescriptionReference.getUrlForIndicatorDescriptionReference(this.id, api, callback);
        };
        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionReference.
         *  @param indicatorDescriptionReferenceID The ID of the IndicatorDescriptionReference to retrieve.
         *  @return A single IndicatorDescriptionReference, or null. */
        IndicatorDescriptionReference.getUrlForIndicatorDescriptionReference = function (indicatorDescriptionReferenceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionReferenceID: indicatorDescriptionReferenceID });
        };
        IndicatorDescriptionReference.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            reference: new hiw.PropertyMap("reference", "Reference"),
            urlID: new hiw.PropertyMap("urlID", "UrlID"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return IndicatorDescriptionReference;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionReference = IndicatorDescriptionReference;
    /** Contains properties and static functionality for the IndicatorDescriptionResource type. */
    var IndicatorDescriptionResource = (function (_super) {
        __extends(IndicatorDescriptionResource, _super);
        function IndicatorDescriptionResource() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.description = null;
            this.urlID = null;
            this.sortOrder = null;
        }
        IndicatorDescriptionResource.prototype.getFields = function () {
            return IndicatorDescriptionResource.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionResources in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionResources */
        IndicatorDescriptionResource.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionResources exist. */
        IndicatorDescriptionResource.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionResources method. */
        IndicatorDescriptionResource.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionResource with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionResource to return.
         *  @return The matching IndicatorDescriptionResource, if one exists, or null. */
        IndicatorDescriptionResource.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionResources based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionResources which match the provided filter. */
        IndicatorDescriptionResource.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionResources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionResources which match the provided filter. */
        IndicatorDescriptionResource.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionResources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionResourceswhich match the provided filter. */
        IndicatorDescriptionResource.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionResources by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        IndicatorDescriptionResource.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionResources by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        IndicatorDescriptionResource.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionResources by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        IndicatorDescriptionResource.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionResource.
         *  @return A single IndicatorDescriptionResource, or null. */
        IndicatorDescriptionResource.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionResource.getIndicatorDescriptionForIndicatorDescriptionResource(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionResource.
         *  @param indicatorDescriptionResourceID The ID of the IndicatorDescriptionResource to retrieve.
         *  @return A single IndicatorDescriptionResource, or null. */
        IndicatorDescriptionResource.getIndicatorDescriptionForIndicatorDescriptionResource = function (indicatorDescriptionResourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionResourceID: indicatorDescriptionResourceID });
        };
        /** Gets IndicatorDescriptionResources by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        IndicatorDescriptionResource.getByUrlID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many IndicatorDescriptionResources by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        IndicatorDescriptionResource.getByUrlIDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of IndicatorDescriptionResources by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        IndicatorDescriptionResource.getByUrlIDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionResource.
         *  @return A single IndicatorDescriptionResource, or null. */
        IndicatorDescriptionResource.prototype.getUrl = function (api, callback) {
            IndicatorDescriptionResource.getUrlForIndicatorDescriptionResource(this.id, api, callback);
        };
        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionResource.
         *  @param indicatorDescriptionResourceID The ID of the IndicatorDescriptionResource to retrieve.
         *  @return A single IndicatorDescriptionResource, or null. */
        IndicatorDescriptionResource.getUrlForIndicatorDescriptionResource = function (indicatorDescriptionResourceID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionResourceID: indicatorDescriptionResourceID });
        };
        IndicatorDescriptionResource.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            description: new hiw.PropertyMap("description", "Description"),
            urlID: new hiw.PropertyMap("urlID", "UrlID"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return IndicatorDescriptionResource;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionResource = IndicatorDescriptionResource;
    /** Contains properties and static functionality for the IndicatorDescription type. */
    var IndicatorDescription = (function (_super) {
        __extends(IndicatorDescription, _super);
        function IndicatorDescription() {
            _super.apply(this, arguments);
            this.id = null;
            this.shortDescription = null;
            this.unlabeledShortDescription = null;
            this.showMe = null;
            this.isDevelopmental = null;
            this.datatype = null;
            this.fullDescription = null;
            this.valueLabelID = null;
            this.numeratorDescription = null;
            this.denominatorDescription = null;
            this.caveatsAndLimitations = null;
            this.dataType = null;
            this.trendIssues = null;
            this.otherDataSource = null;
            this.availableDimensions = null;
            this.geographicLevels = null;
            this.maxDecimal = null;
            this.modificationDate = null;
            this.minimumCacheValue = null;
            this.maximumCacheValue = null;
            this.modifyDate = null;
        }
        IndicatorDescription.prototype.getFields = function () {
            return IndicatorDescription.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptions */
        IndicatorDescription.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptions exist. */
        IndicatorDescription.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptions method. */
        IndicatorDescription.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescription with the specified primary key.
         *  @param id The primary key of the IndicatorDescription to return.
         *  @return The matching IndicatorDescription, if one exists, or null. */
        IndicatorDescription.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptions which match the provided filter. */
        IndicatorDescription.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptions which match the provided filter. */
        IndicatorDescription.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionswhich match the provided filter. */
        IndicatorDescription.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptions by ValueLabelID.
         *  @param valueLabelID The ID of the ValueLabel for which to retrieve the child IndicatorDescriptions.
         *  @return An Array of IndicatorDescriptions. */
        IndicatorDescription.getByValueLabelID = function (valueLabelID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { valueLabelID: valueLabelID }, null, page);
        };
        /** Gets how many IndicatorDescriptions by ValueLabelID exist.
         *  @param valueLabelID The ID of the ValueLabel for which to retrieve the child IndicatorDescriptions.
         *  @return An Array of IndicatorDescriptions. */
        IndicatorDescription.getByValueLabelIDCount = function (valueLabelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { valueLabelID: valueLabelID });
        };
        /** Gets how many pages of IndicatorDescriptions by ValueLabelID exist.
         *  @param valueLabelID The ID of the ValueLabel for which to retrieve the child IndicatorDescriptions.
         *  @return An Array of IndicatorDescriptions. */
        IndicatorDescription.getByValueLabelIDPageCount = function (valueLabelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { valueLabelID: valueLabelID });
        };
        /** Returns the related ValueLabel based on the unique ID of the related IndicatorDescription.
         *  @return A single IndicatorDescription, or null. */
        IndicatorDescription.prototype.getValueLabel = function (api, callback) {
            IndicatorDescription.getValueLabelForIndicatorDescription(this.id, api, callback);
        };
        /** Returns the related ValueLabel based on the unique ID of the related IndicatorDescription.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription to retrieve.
         *  @return A single IndicatorDescription, or null. */
        IndicatorDescription.getValueLabelForIndicatorDescription = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        IndicatorDescription.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            shortDescription: new hiw.PropertyMap("shortDescription", "ShortDescription"),
            unlabeledShortDescription: new hiw.PropertyMap("unlabeledShortDescription", "UnlabeledShortDescription"),
            showMe: new hiw.PropertyMap("showMe", "ShowMe"),
            isDevelopmental: new hiw.PropertyMap("isDevelopmental", "isDevelopmental"),
            datatype: new hiw.PropertyMap("datatype", "Datatype"),
            fullDescription: new hiw.PropertyMap("fullDescription", "FullDescription"),
            valueLabelID: new hiw.PropertyMap("valueLabelID", "ValueLabelID"),
            numeratorDescription: new hiw.PropertyMap("numeratorDescription", "NumeratorDescription"),
            denominatorDescription: new hiw.PropertyMap("denominatorDescription", "DenominatorDescription"),
            caveatsAndLimitations: new hiw.PropertyMap("caveatsAndLimitations", "CaveatsAndLimitations"),
            dataType: new hiw.PropertyMap("dataType", "DataType"),
            trendIssues: new hiw.PropertyMap("trendIssues", "TrendIssues"),
            otherDataSource: new hiw.PropertyMap("otherDataSource", "OtherDataSource"),
            availableDimensions: new hiw.PropertyMap("availableDimensions", "AvailableDimensions"),
            geographicLevels: new hiw.PropertyMap("geographicLevels", "GeographicLevels"),
            maxDecimal: new hiw.PropertyMap("maxDecimal", "MaxDecimal"),
            modificationDate: new hiw.PropertyMap("modificationDate", "ModificationDate"),
            minimumCacheValue: new hiw.PropertyMap("minimumCacheValue", "MinimumCacheValue"),
            maximumCacheValue: new hiw.PropertyMap("maximumCacheValue", "MaximumCacheValue"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate")
        };
        return IndicatorDescription;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescription = IndicatorDescription;
    /** Contains properties and static functionality for the IndicatorDescriptionHP2020 type. */
    var IndicatorDescriptionHP2020 = (function (_super) {
        __extends(IndicatorDescriptionHP2020, _super);
        function IndicatorDescriptionHP2020() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.indicatorNumber = null;
            this.HP2020ID = null;
            this.HP2020Target = null;
            this.HP2020BaselineYear = null;
            this.HP2020Baseline = null;
            this.HP2020TSMID = null;
            this.initiativeSpecificTopicArea = null;
        }
        IndicatorDescriptionHP2020.prototype.getFields = function () {
            return IndicatorDescriptionHP2020.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionHP2020s in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionHP2020s */
        IndicatorDescriptionHP2020.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionHP2020s exist. */
        IndicatorDescriptionHP2020.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionHP2020s method. */
        IndicatorDescriptionHP2020.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionHP2020 with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionHP2020 to return.
         *  @return The matching IndicatorDescriptionHP2020, if one exists, or null. */
        IndicatorDescriptionHP2020.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionHP2020s based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionHP2020s which match the provided filter. */
        IndicatorDescriptionHP2020.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionHP2020s exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionHP2020s which match the provided filter. */
        IndicatorDescriptionHP2020.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionHP2020s exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionHP2020swhich match the provided filter. */
        IndicatorDescriptionHP2020.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionHP2020s by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        IndicatorDescriptionHP2020.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionHP2020s by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        IndicatorDescriptionHP2020.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionHP2020s by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        IndicatorDescriptionHP2020.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        IndicatorDescriptionHP2020.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionHP2020.getIndicatorDescriptionForIndicatorDescriptionHP2020(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @param indicatorDescriptionHP2020ID The ID of the IndicatorDescriptionHP2020 to retrieve.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        IndicatorDescriptionHP2020.getIndicatorDescriptionForIndicatorDescriptionHP2020 = function (indicatorDescriptionHP2020ID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionHP2020ID: indicatorDescriptionHP2020ID });
        };
        /** Gets IndicatorDescriptionHP2020s by HP2020TSMID.
         *  @param hP2020TSMID The ID of the HP2020TSM for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        IndicatorDescriptionHP2020.getByHP2020TSMID = function (hP2020TSMID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { hP2020TSMID: hP2020TSMID }, null, page);
        };
        /** Gets how many IndicatorDescriptionHP2020s by HP2020TSMID exist.
         *  @param hP2020TSMID The ID of the HP2020TSM for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        IndicatorDescriptionHP2020.getByHP2020TSMIDCount = function (hP2020TSMID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { hP2020TSMID: hP2020TSMID });
        };
        /** Gets how many pages of IndicatorDescriptionHP2020s by HP2020TSMID exist.
         *  @param hP2020TSMID The ID of the HP2020TSM for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        IndicatorDescriptionHP2020.getByHP2020TSMIDPageCount = function (hP2020TSMID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { hP2020TSMID: hP2020TSMID });
        };
        /** Returns the related HP2020TSM based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        IndicatorDescriptionHP2020.prototype.getHP2020TSM = function (api, callback) {
            IndicatorDescriptionHP2020.getHP2020TSMForIndicatorDescriptionHP2020(this.id, api, callback);
        };
        /** Returns the related HP2020TSM based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @param indicatorDescriptionHP2020ID The ID of the IndicatorDescriptionHP2020 to retrieve.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        IndicatorDescriptionHP2020.getHP2020TSMForIndicatorDescriptionHP2020 = function (indicatorDescriptionHP2020ID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionHP2020ID: indicatorDescriptionHP2020ID });
        };
        IndicatorDescriptionHP2020.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            indicatorNumber: new hiw.PropertyMap("indicatorNumber", "IndicatorNumber"),
            HP2020ID: new hiw.PropertyMap("HP2020ID", "HP2020ID"),
            HP2020Target: new hiw.PropertyMap("HP2020Target", "HP2020Target"),
            HP2020BaselineYear: new hiw.PropertyMap("HP2020BaselineYear", "HP2020BaselineYear"),
            HP2020Baseline: new hiw.PropertyMap("HP2020Baseline", "HP2020Baseline"),
            HP2020TSMID: new hiw.PropertyMap("HP2020TSMID", "HP2020TSMID"),
            initiativeSpecificTopicArea: new hiw.PropertyMap("initiativeSpecificTopicArea", "InitiativeSpecificTopicArea")
        };
        return IndicatorDescriptionHP2020;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionHP2020 = IndicatorDescriptionHP2020;
    /** Contains properties and static functionality for the IndicatorDescriptionTimeFrame type. */
    var IndicatorDescriptionTimeFrame = (function (_super) {
        __extends(IndicatorDescriptionTimeFrame, _super);
        function IndicatorDescriptionTimeFrame() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.timeframeID = null;
        }
        IndicatorDescriptionTimeFrame.prototype.getFields = function () {
            return IndicatorDescriptionTimeFrame.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionTimeFrames in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionTimeFrames */
        IndicatorDescriptionTimeFrame.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionTimeFrames exist. */
        IndicatorDescriptionTimeFrame.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionTimeFrames method. */
        IndicatorDescriptionTimeFrame.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionTimeFrame with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionTimeFrame to return.
         *  @return The matching IndicatorDescriptionTimeFrame, if one exists, or null. */
        IndicatorDescriptionTimeFrame.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionTimeFrames based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionTimeFrames which match the provided filter. */
        IndicatorDescriptionTimeFrame.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionTimeFrames exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionTimeFrames which match the provided filter. */
        IndicatorDescriptionTimeFrame.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionTimeFrames exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionTimeFrameswhich match the provided filter. */
        IndicatorDescriptionTimeFrame.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionTimeFrames by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        IndicatorDescriptionTimeFrame.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionTimeFrames by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        IndicatorDescriptionTimeFrame.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionTimeFrames by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        IndicatorDescriptionTimeFrame.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        IndicatorDescriptionTimeFrame.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionTimeFrame.getIndicatorDescriptionForIndicatorDescriptionTimeFrame(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @param indicatorDescriptionTimeFrameID The ID of the IndicatorDescriptionTimeFrame to retrieve.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        IndicatorDescriptionTimeFrame.getIndicatorDescriptionForIndicatorDescriptionTimeFrame = function (indicatorDescriptionTimeFrameID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionTimeFrameID: indicatorDescriptionTimeFrameID });
        };
        /** Gets IndicatorDescriptionTimeFrames by TimeframeID.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        IndicatorDescriptionTimeFrame.getByTimeframeID = function (timeframeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { timeframeID: timeframeID }, null, page);
        };
        /** Gets how many IndicatorDescriptionTimeFrames by TimeframeID exist.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        IndicatorDescriptionTimeFrame.getByTimeframeIDCount = function (timeframeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { timeframeID: timeframeID });
        };
        /** Gets how many pages of IndicatorDescriptionTimeFrames by TimeframeID exist.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        IndicatorDescriptionTimeFrame.getByTimeframeIDPageCount = function (timeframeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { timeframeID: timeframeID });
        };
        /** Returns the related Timeframe based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        IndicatorDescriptionTimeFrame.prototype.getTimeframe = function (api, callback) {
            IndicatorDescriptionTimeFrame.getTimeframeForIndicatorDescriptionTimeFrame(this.id, api, callback);
        };
        /** Returns the related Timeframe based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @param indicatorDescriptionTimeFrameID The ID of the IndicatorDescriptionTimeFrame to retrieve.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        IndicatorDescriptionTimeFrame.getTimeframeForIndicatorDescriptionTimeFrame = function (indicatorDescriptionTimeFrameID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionTimeFrameID: indicatorDescriptionTimeFrameID });
        };
        IndicatorDescriptionTimeFrame.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            timeframeID: new hiw.PropertyMap("timeframeID", "TimeframeID")
        };
        return IndicatorDescriptionTimeFrame;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionTimeFrame = IndicatorDescriptionTimeFrame;
    /** Contains properties and static functionality for the IndicatorDescriptionYear type. */
    var IndicatorDescriptionYear = (function (_super) {
        __extends(IndicatorDescriptionYear, _super);
        function IndicatorDescriptionYear() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.yearID = null;
        }
        IndicatorDescriptionYear.prototype.getFields = function () {
            return IndicatorDescriptionYear.Fields;
        };
        /** Gets a list of all of the IndicatorDescriptionYears in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionYears */
        IndicatorDescriptionYear.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDescriptionYears exist. */
        IndicatorDescriptionYear.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDescriptionYears method. */
        IndicatorDescriptionYear.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDescriptionYear with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionYear to return.
         *  @return The matching IndicatorDescriptionYear, if one exists, or null. */
        IndicatorDescriptionYear.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDescriptionYears based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionYears which match the provided filter. */
        IndicatorDescriptionYear.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDescriptionYears exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionYears which match the provided filter. */
        IndicatorDescriptionYear.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDescriptionYears exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionYearswhich match the provided filter. */
        IndicatorDescriptionYear.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDescriptionYears by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        IndicatorDescriptionYear.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDescriptionYears by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        IndicatorDescriptionYear.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDescriptionYears by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        IndicatorDescriptionYear.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionYear.
         *  @return A single IndicatorDescriptionYear, or null. */
        IndicatorDescriptionYear.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDescriptionYear.getIndicatorDescriptionForIndicatorDescriptionYear(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionYear.
         *  @param indicatorDescriptionYearID The ID of the IndicatorDescriptionYear to retrieve.
         *  @return A single IndicatorDescriptionYear, or null. */
        IndicatorDescriptionYear.getIndicatorDescriptionForIndicatorDescriptionYear = function (indicatorDescriptionYearID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionYearID: indicatorDescriptionYearID });
        };
        /** Gets IndicatorDescriptionYears by YearID.
         *  @param yearID The ID of the Year for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        IndicatorDescriptionYear.getByYearID = function (yearID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { yearID: yearID }, null, page);
        };
        /** Gets how many IndicatorDescriptionYears by YearID exist.
         *  @param yearID The ID of the Year for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        IndicatorDescriptionYear.getByYearIDCount = function (yearID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { yearID: yearID });
        };
        /** Gets how many pages of IndicatorDescriptionYears by YearID exist.
         *  @param yearID The ID of the Year for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        IndicatorDescriptionYear.getByYearIDPageCount = function (yearID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { yearID: yearID });
        };
        /** Returns the related Year based on the unique ID of the related IndicatorDescriptionYear.
         *  @return A single IndicatorDescriptionYear, or null. */
        IndicatorDescriptionYear.prototype.getYear = function (api, callback) {
            IndicatorDescriptionYear.getYearForIndicatorDescriptionYear(this.id, api, callback);
        };
        /** Returns the related Year based on the unique ID of the related IndicatorDescriptionYear.
         *  @param indicatorDescriptionYearID The ID of the IndicatorDescriptionYear to retrieve.
         *  @return A single IndicatorDescriptionYear, or null. */
        IndicatorDescriptionYear.getYearForIndicatorDescriptionYear = function (indicatorDescriptionYearID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionYearID: indicatorDescriptionYearID });
        };
        /** Gets a unique IndicatorDescriptionYear based on the provided values.
         *  @return A single IndicatorDescriptionYear, or null. */
        IndicatorDescriptionYear.getByIndicatorDescriptionIDAndYearID = function (indicatorDescriptionID, yearID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID, yearID: yearID });
        };
        IndicatorDescriptionYear.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            yearID: new hiw.PropertyMap("yearID", "YearID")
        };
        return IndicatorDescriptionYear;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDescriptionYear = IndicatorDescriptionYear;
    /** Contains properties and static functionality for the IndicatorDimensionGraph type. */
    var IndicatorDimensionGraph = (function (_super) {
        __extends(IndicatorDimensionGraph, _super);
        function IndicatorDimensionGraph() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.localeLevelID = null;
            this.dimensionGraphID = null;
        }
        IndicatorDimensionGraph.prototype.getFields = function () {
            return IndicatorDimensionGraph.Fields;
        };
        /** Gets a list of all of the IndicatorDimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDimensionGraphs */
        IndicatorDimensionGraph.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDimensionGraphs exist. */
        IndicatorDimensionGraph.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDimensionGraphs method. */
        IndicatorDimensionGraph.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDimensionGraph with the specified primary key.
         *  @param id The primary key of the IndicatorDimensionGraph to return.
         *  @return The matching IndicatorDimensionGraph, if one exists, or null. */
        IndicatorDimensionGraph.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDimensionGraphs which match the provided filter. */
        IndicatorDimensionGraph.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDimensionGraphs which match the provided filter. */
        IndicatorDimensionGraph.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDimensionGraphswhich match the provided filter. */
        IndicatorDimensionGraph.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDimensionGraphs by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many IndicatorDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of IndicatorDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDimensionGraph.
         *  @return A single IndicatorDimensionGraph, or null. */
        IndicatorDimensionGraph.prototype.getIndicatorDescription = function (api, callback) {
            IndicatorDimensionGraph.getIndicatorDescriptionForIndicatorDimensionGraph(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDimensionGraph.
         *  @param indicatorDimensionGraphID The ID of the IndicatorDimensionGraph to retrieve.
         *  @return A single IndicatorDimensionGraph, or null. */
        IndicatorDimensionGraph.getIndicatorDescriptionForIndicatorDimensionGraph = function (indicatorDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDimensionGraphID: indicatorDimensionGraphID });
        };
        /** Gets IndicatorDimensionGraphs by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByLocaleLevelID = function (localeLevelID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID }, null, page);
        };
        /** Gets how many IndicatorDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByLocaleLevelIDCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Gets how many pages of IndicatorDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByLocaleLevelIDPageCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDimensionGraph.
         *  @return A single IndicatorDimensionGraph, or null. */
        IndicatorDimensionGraph.prototype.getLocaleLevel = function (api, callback) {
            IndicatorDimensionGraph.getLocaleLevelForIndicatorDimensionGraph(this.id, api, callback);
        };
        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDimensionGraph.
         *  @param indicatorDimensionGraphID The ID of the IndicatorDimensionGraph to retrieve.
         *  @return A single IndicatorDimensionGraph, or null. */
        IndicatorDimensionGraph.getLocaleLevelForIndicatorDimensionGraph = function (indicatorDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDimensionGraphID: indicatorDimensionGraphID });
        };
        /** Gets IndicatorDimensionGraphs by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByDimensionGraphID = function (dimensionGraphID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID }, null, page);
        };
        /** Gets how many IndicatorDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByDimensionGraphIDCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets how many pages of IndicatorDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        IndicatorDimensionGraph.getByDimensionGraphIDPageCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDimensionGraph.
         *  @return A single IndicatorDimensionGraph, or null. */
        IndicatorDimensionGraph.prototype.getDimensionGraph = function (api, callback) {
            IndicatorDimensionGraph.getDimensionGraphForIndicatorDimensionGraph(this.id, api, callback);
        };
        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDimensionGraph.
         *  @param indicatorDimensionGraphID The ID of the IndicatorDimensionGraph to retrieve.
         *  @return A single IndicatorDimensionGraph, or null. */
        IndicatorDimensionGraph.getDimensionGraphForIndicatorDimensionGraph = function (indicatorDimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDimensionGraphID: indicatorDimensionGraphID });
        };
        IndicatorDimensionGraph.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new hiw.PropertyMap("localeLevelID", "LocaleLevelID"),
            dimensionGraphID: new hiw.PropertyMap("dimensionGraphID", "DimensionGraphID")
        };
        return IndicatorDimensionGraph;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDimensionGraph = IndicatorDimensionGraph;
    /** Contains properties and static functionality for the IndicatorDimension type. */
    var IndicatorDimension = (function (_super) {
        __extends(IndicatorDimension, _super);
        function IndicatorDimension() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorID = null;
            this.dimensionBookID = null;
        }
        IndicatorDimension.prototype.getFields = function () {
            return IndicatorDimension.Fields;
        };
        /** Gets a list of all of the IndicatorDimensions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDimensions */
        IndicatorDimension.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many IndicatorDimensions exist. */
        IndicatorDimension.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the IndicatorDimensions method. */
        IndicatorDimension.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the IndicatorDimension with the specified primary key.
         *  @param id The primary key of the IndicatorDimension to return.
         *  @return The matching IndicatorDimension, if one exists, or null. */
        IndicatorDimension.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of IndicatorDimensions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDimensions which match the provided filter. */
        IndicatorDimension.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many IndicatorDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDimensions which match the provided filter. */
        IndicatorDimension.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of IndicatorDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDimensionswhich match the provided filter. */
        IndicatorDimension.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets IndicatorDimensions by IndicatorID.
         *  @param indicatorID The ID of the Indicator for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        IndicatorDimension.getByIndicatorID = function (indicatorID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID }, null, page);
        };
        /** Gets how many IndicatorDimensions by IndicatorID exist.
         *  @param indicatorID The ID of the Indicator for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        IndicatorDimension.getByIndicatorIDCount = function (indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID });
        };
        /** Gets how many pages of IndicatorDimensions by IndicatorID exist.
         *  @param indicatorID The ID of the Indicator for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        IndicatorDimension.getByIndicatorIDPageCount = function (indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID });
        };
        /** Returns the related Indicator based on the unique ID of the related IndicatorDimension.
         *  @return A single IndicatorDimension, or null. */
        IndicatorDimension.prototype.getIndicator = function (api, callback) {
            IndicatorDimension.getIndicatorForIndicatorDimension(this.id, api, callback);
        };
        /** Returns the related Indicator based on the unique ID of the related IndicatorDimension.
         *  @param indicatorDimensionID The ID of the IndicatorDimension to retrieve.
         *  @return A single IndicatorDimension, or null. */
        IndicatorDimension.getIndicatorForIndicatorDimension = function (indicatorDimensionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDimensionID: indicatorDimensionID });
        };
        /** Gets IndicatorDimensions by DimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        IndicatorDimension.getByDimensionBookID = function (dimensionBookID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID }, null, page);
        };
        /** Gets how many IndicatorDimensions by DimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        IndicatorDimension.getByDimensionBookIDCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Gets how many pages of IndicatorDimensions by DimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        IndicatorDimension.getByDimensionBookIDPageCount = function (dimensionBookID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID });
        };
        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDimension.
         *  @return A single IndicatorDimension, or null. */
        IndicatorDimension.prototype.getDimensionBook = function (api, callback) {
            IndicatorDimension.getDimensionBookForIndicatorDimension(this.id, api, callback);
        };
        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDimension.
         *  @param indicatorDimensionID The ID of the IndicatorDimension to retrieve.
         *  @return A single IndicatorDimension, or null. */
        IndicatorDimension.getDimensionBookForIndicatorDimension = function (indicatorDimensionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDimensionID: indicatorDimensionID });
        };
        /** Gets a unique IndicatorDimension based on the provided values.
         *  @return A single IndicatorDimension, or null. */
        IndicatorDimension.getByDimensionBookIDAndIndicatorID = function (dimensionBookID, indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionBookID: dimensionBookID, indicatorID: indicatorID });
        };
        IndicatorDimension.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorID: new hiw.PropertyMap("indicatorID", "IndicatorID"),
            dimensionBookID: new hiw.PropertyMap("dimensionBookID", "DimensionBookID")
        };
        return IndicatorDimension;
    })(hiw.ServiceDataObject);
    hiw.IndicatorDimension = IndicatorDimension;
    /** Contains properties and static functionality for the Indicator type. */
    var Indicator = (function (_super) {
        __extends(Indicator, _super);
        function Indicator() {
            _super.apply(this, arguments);
            this.id = null;
            this.indicatorDescriptionID = null;
            this.timeframeID = null;
            this.localeID = null;
            this.dimensionGraphID = null;
            this.dimensionGraphSortOrder = null;
            this.modifierGraphID = null;
            this.modifierGraphSortOrder = null;
            this.dimensionGraphHeader = null;
            this.dimensionGraphLabel = null;
            this.floatValue = null;
            this.formattedValue = null;
            this.graphValue = null;
            this.textualValue = null;
            this.confidenceIntervalLow = null;
            this.confidenceIntervalLowFormatted = null;
            this.graphCILowValue = null;
            this.confidenceIntervalHigh = null;
            this.confidenceIntervalHighFormatted = null;
            this.graphCIHighValue = null;
            this.standardError = null;
            this.standardErrorGraphValue = null;
            this.standardErrorFormatted = null;
            this.floatTarget = null;
            this.integralTarget = null;
            this.formattedTarget = null;
            this.numerator = null;
            this.denominator = null;
            this.fipsCode = null;
            this.hrrCode = null;
            this.ssaCode = null;
        }
        Indicator.prototype.getFields = function () {
            return Indicator.Fields;
        };
        /** Gets a list of all of the Indicators in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Indicators */
        Indicator.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Indicators exist. */
        Indicator.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Indicators method. */
        Indicator.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Indicator with the specified primary key.
         *  @param id The primary key of the Indicator to return.
         *  @return The matching Indicator, if one exists, or null. */
        Indicator.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Indicators based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Indicators which match the provided filter. */
        Indicator.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Indicators exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Indicators which match the provided filter. */
        Indicator.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Indicators exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Indicatorswhich match the provided filter. */
        Indicator.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Indicators by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByIndicatorDescriptionID = function (indicatorDescriptionID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page);
        };
        /** Gets how many Indicators by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByIndicatorDescriptionIDCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Gets how many pages of Indicators by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByIndicatorDescriptionIDPageCount = function (indicatorDescriptionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        Indicator.prototype.getIndicatorDescription = function (api, callback) {
            Indicator.getIndicatorDescriptionForIndicator(this.id, api, callback);
        };
        /** Returns the related IndicatorDescription based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        Indicator.getIndicatorDescriptionForIndicator = function (indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID });
        };
        /** Gets Indicators by TimeframeID.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByTimeframeID = function (timeframeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { timeframeID: timeframeID }, null, page);
        };
        /** Gets how many Indicators by TimeframeID exist.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByTimeframeIDCount = function (timeframeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { timeframeID: timeframeID });
        };
        /** Gets how many pages of Indicators by TimeframeID exist.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByTimeframeIDPageCount = function (timeframeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { timeframeID: timeframeID });
        };
        /** Returns the related Timeframe based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        Indicator.prototype.getTimeframe = function (api, callback) {
            Indicator.getTimeframeForIndicator(this.id, api, callback);
        };
        /** Returns the related Timeframe based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        Indicator.getTimeframeForIndicator = function (indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID });
        };
        /** Gets Indicators by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many Indicators by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of Indicators by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related Locale based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        Indicator.prototype.getLocale = function (api, callback) {
            Indicator.getLocaleForIndicator(this.id, api, callback);
        };
        /** Returns the related Locale based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        Indicator.getLocaleForIndicator = function (indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID });
        };
        /** Gets Indicators by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByDimensionGraphID = function (dimensionGraphID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID }, null, page);
        };
        /** Gets how many Indicators by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByDimensionGraphIDCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Gets how many pages of Indicators by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByDimensionGraphIDPageCount = function (dimensionGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { dimensionGraphID: dimensionGraphID });
        };
        /** Returns the related DimensionGraph based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        Indicator.prototype.getDimensionGraph = function (api, callback) {
            Indicator.getDimensionGraphForIndicator(this.id, api, callback);
        };
        /** Returns the related DimensionGraph based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        Indicator.getDimensionGraphForIndicator = function (indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID });
        };
        /** Gets Indicators by ModifierGraphID.
         *  @param modifierGraphID The ID of the ModifierGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByModifierGraphID = function (modifierGraphID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID }, null, page);
        };
        /** Gets how many Indicators by ModifierGraphID exist.
         *  @param modifierGraphID The ID of the ModifierGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByModifierGraphIDCount = function (modifierGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID });
        };
        /** Gets how many pages of Indicators by ModifierGraphID exist.
         *  @param modifierGraphID The ID of the ModifierGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        Indicator.getByModifierGraphIDPageCount = function (modifierGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID });
        };
        /** Returns the related ModifierGraph based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        Indicator.prototype.getModifierGraph = function (api, callback) {
            Indicator.getModifierGraphForIndicator(this.id, api, callback);
        };
        /** Returns the related ModifierGraph based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        Indicator.getModifierGraphForIndicator = function (indicatorID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { indicatorID: indicatorID });
        };
        Indicator.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            indicatorDescriptionID: new hiw.PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            timeframeID: new hiw.PropertyMap("timeframeID", "TimeframeID"),
            localeID: new hiw.PropertyMap("localeID", "LocaleID"),
            dimensionGraphID: new hiw.PropertyMap("dimensionGraphID", "DimensionGraphID"),
            dimensionGraphSortOrder: new hiw.PropertyMap("dimensionGraphSortOrder", "DimensionGraphSortOrder"),
            modifierGraphID: new hiw.PropertyMap("modifierGraphID", "ModifierGraphID"),
            modifierGraphSortOrder: new hiw.PropertyMap("modifierGraphSortOrder", "ModifierGraphSortOrder"),
            dimensionGraphHeader: new hiw.PropertyMap("dimensionGraphHeader", "DimensionGraphHeader"),
            dimensionGraphLabel: new hiw.PropertyMap("dimensionGraphLabel", "DimensionGraphLabel"),
            floatValue: new hiw.PropertyMap("floatValue", "FloatValue"),
            formattedValue: new hiw.PropertyMap("formattedValue", "FormattedValue"),
            graphValue: new hiw.PropertyMap("graphValue", "GraphValue"),
            textualValue: new hiw.PropertyMap("textualValue", "TextualValue"),
            confidenceIntervalLow: new hiw.PropertyMap("confidenceIntervalLow", "ConfidenceIntervalLow"),
            confidenceIntervalLowFormatted: new hiw.PropertyMap("confidenceIntervalLowFormatted", "ConfidenceIntervalLowFormatted"),
            graphCILowValue: new hiw.PropertyMap("graphCILowValue", "GraphCILowValue"),
            confidenceIntervalHigh: new hiw.PropertyMap("confidenceIntervalHigh", "ConfidenceIntervalHigh"),
            confidenceIntervalHighFormatted: new hiw.PropertyMap("confidenceIntervalHighFormatted", "ConfidenceIntervalHighFormatted"),
            graphCIHighValue: new hiw.PropertyMap("graphCIHighValue", "GraphCIHighValue"),
            standardError: new hiw.PropertyMap("standardError", "StandardError"),
            standardErrorGraphValue: new hiw.PropertyMap("standardErrorGraphValue", "StandardErrorGraphValue"),
            standardErrorFormatted: new hiw.PropertyMap("standardErrorFormatted", "StandardErrorFormatted"),
            floatTarget: new hiw.PropertyMap("floatTarget", "FloatTarget"),
            integralTarget: new hiw.PropertyMap("integralTarget", "IntegralTarget"),
            formattedTarget: new hiw.PropertyMap("formattedTarget", "FormattedTarget"),
            numerator: new hiw.PropertyMap("numerator", "Numerator"),
            denominator: new hiw.PropertyMap("denominator", "Denominator"),
            fipsCode: new hiw.PropertyMap("fipsCode", "FIPSCode"),
            hrrCode: new hiw.PropertyMap("hrrCode", "HRRCode"),
            ssaCode: new hiw.PropertyMap("ssaCode", "SSACode")
        };
        return Indicator;
    })(hiw.ServiceDataObject);
    hiw.Indicator = Indicator;
    /** Contains properties and static functionality for the Initiative type. */
    var Initiative = (function (_super) {
        __extends(Initiative, _super);
        function Initiative() {
            _super.apply(this, arguments);
            this.id = null;
            this.acronym = null;
            this.name = null;
            this.sortOrder = null;
            this.supplierAcronym = null;
            this.supplierName = null;
            this.acknowledgement = null;
            this.minimumYear = null;
            this.maximumYear = null;
            this.IsSSA = null;
            this.modifyDate = null;
        }
        Initiative.prototype.getFields = function () {
            return Initiative.Fields;
        };
        /** Gets a list of all of the Initiatives in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Initiatives */
        Initiative.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Initiatives exist. */
        Initiative.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Initiatives method. */
        Initiative.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Initiative with the specified primary key.
         *  @param id The primary key of the Initiative to return.
         *  @return The matching Initiative, if one exists, or null. */
        Initiative.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Initiatives based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Initiatives which match the provided filter. */
        Initiative.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Initiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Initiatives which match the provided filter. */
        Initiative.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Initiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Initiativeswhich match the provided filter. */
        Initiative.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        Initiative.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            acronym: new hiw.PropertyMap("acronym", "Acronym"),
            name: new hiw.PropertyMap("name", "Name"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            supplierAcronym: new hiw.PropertyMap("supplierAcronym", "SupplierAcronym"),
            supplierName: new hiw.PropertyMap("supplierName", "SupplierName"),
            acknowledgement: new hiw.PropertyMap("acknowledgement", "Acknowledgement"),
            minimumYear: new hiw.PropertyMap("minimumYear", "MinimumYear"),
            maximumYear: new hiw.PropertyMap("maximumYear", "MaximumYear"),
            IsSSA: new hiw.PropertyMap("IsSSA", "IsSSA"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate")
        };
        return Initiative;
    })(hiw.ServiceDataObject);
    hiw.Initiative = Initiative;
    /** Contains properties and static functionality for the Intervention type. */
    var Intervention = (function (_super) {
        __extends(Intervention, _super);
        function Intervention() {
            _super.apply(this, arguments);
            this.id = null;
            this.topic = null;
            this.urlID = null;
            this.proposedText = null;
            this.taskForceOnCommunityPreventiveServicesFinding = null;
            this.grade = null;
            this.interventionSource = null;
            this.sortOrder = null;
        }
        Intervention.prototype.getFields = function () {
            return Intervention.Fields;
        };
        /** Gets a list of all of the Interventions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Interventions */
        Intervention.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Interventions exist. */
        Intervention.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Interventions method. */
        Intervention.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Intervention with the specified primary key.
         *  @param id The primary key of the Intervention to return.
         *  @return The matching Intervention, if one exists, or null. */
        Intervention.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Interventions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Interventions which match the provided filter. */
        Intervention.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Interventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Interventions which match the provided filter. */
        Intervention.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Interventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Interventionswhich match the provided filter. */
        Intervention.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Interventions by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child Interventions.
         *  @return An Array of Interventions. */
        Intervention.getByUrlID = function (urlID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID }, null, page);
        };
        /** Gets how many Interventions by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child Interventions.
         *  @return An Array of Interventions. */
        Intervention.getByUrlIDCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Gets how many pages of Interventions by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child Interventions.
         *  @return An Array of Interventions. */
        Intervention.getByUrlIDPageCount = function (urlID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { urlID: urlID });
        };
        /** Returns the related Url based on the unique ID of the related Intervention.
         *  @return A single Intervention, or null. */
        Intervention.prototype.getUrl = function (api, callback) {
            Intervention.getUrlForIntervention(this.id, api, callback);
        };
        /** Returns the related Url based on the unique ID of the related Intervention.
         *  @param interventionID The ID of the Intervention to retrieve.
         *  @return A single Intervention, or null. */
        Intervention.getUrlForIntervention = function (interventionID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { interventionID: interventionID });
        };
        Intervention.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            topic: new hiw.PropertyMap("topic", "Topic"),
            urlID: new hiw.PropertyMap("urlID", "UrlID"),
            proposedText: new hiw.PropertyMap("proposedText", "ProposedText"),
            taskForceOnCommunityPreventiveServicesFinding: new hiw.PropertyMap("taskForceOnCommunityPreventiveServicesFinding", "TaskForceOnCommunityPreventiveServicesFinding"),
            grade: new hiw.PropertyMap("grade", "Grade"),
            interventionSource: new hiw.PropertyMap("interventionSource", "InterventionSource"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return Intervention;
    })(hiw.ServiceDataObject);
    hiw.Intervention = Intervention;
    /** Contains properties and static functionality for the Keyword type. */
    var Keyword = (function (_super) {
        __extends(Keyword, _super);
        function Keyword() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.showOnProfile = null;
            this.forDevelopment = null;
            this.enabled = null;
            this.modifyDate = null;
            this.countOfIndicatorDescription = null;
        }
        Keyword.prototype.getFields = function () {
            return Keyword.Fields;
        };
        /** Gets a list of all of the Keywords in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Keywords */
        Keyword.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Keywords exist. */
        Keyword.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Keywords method. */
        Keyword.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Keyword with the specified primary key.
         *  @param id The primary key of the Keyword to return.
         *  @return The matching Keyword, if one exists, or null. */
        Keyword.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Keywords based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Keywords which match the provided filter. */
        Keyword.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Keywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Keywords which match the provided filter. */
        Keyword.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Keywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Keywordswhich match the provided filter. */
        Keyword.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        Keyword.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            showOnProfile: new hiw.PropertyMap("showOnProfile", "ShowOnProfile"),
            forDevelopment: new hiw.PropertyMap("forDevelopment", "ForDevelopment"),
            enabled: new hiw.PropertyMap("enabled", "Enabled"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate"),
            countOfIndicatorDescription: new hiw.PropertyMap("countOfIndicatorDescription", "CountOfIndicatorDescription")
        };
        return Keyword;
    })(hiw.ServiceDataObject);
    hiw.Keyword = Keyword;
    /** Contains properties and static functionality for the LocaleLevel type. */
    var LocaleLevel = (function (_super) {
        __extends(LocaleLevel, _super);
        function LocaleLevel() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.sortOrder = null;
        }
        LocaleLevel.prototype.getFields = function () {
            return LocaleLevel.Fields;
        };
        /** Gets a list of all of the LocaleLevels in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of LocaleLevels */
        LocaleLevel.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many LocaleLevels exist. */
        LocaleLevel.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the LocaleLevels method. */
        LocaleLevel.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the LocaleLevel with the specified primary key.
         *  @param id The primary key of the LocaleLevel to return.
         *  @return The matching LocaleLevel, if one exists, or null. */
        LocaleLevel.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of LocaleLevels based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All LocaleLevels which match the provided filter. */
        LocaleLevel.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many LocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of LocaleLevels which match the provided filter. */
        LocaleLevel.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of LocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of LocaleLevelswhich match the provided filter. */
        LocaleLevel.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        LocaleLevel.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return LocaleLevel;
    })(hiw.ServiceDataObject);
    hiw.LocaleLevel = LocaleLevel;
    /** Contains properties and static functionality for the LocaleRelation type. */
    var LocaleRelation = (function (_super) {
        __extends(LocaleRelation, _super);
        function LocaleRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorLocaleID = null;
            this.descendantLocaleID = null;
            this.hops = null;
        }
        LocaleRelation.prototype.getFields = function () {
            return LocaleRelation.Fields;
        };
        /** Gets a list of all of the LocaleRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of LocaleRelations */
        LocaleRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many LocaleRelations exist. */
        LocaleRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the LocaleRelations method. */
        LocaleRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the LocaleRelation with the specified primary key.
         *  @param id The primary key of the LocaleRelation to return.
         *  @return The matching LocaleRelation, if one exists, or null. */
        LocaleRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of LocaleRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All LocaleRelations which match the provided filter. */
        LocaleRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many LocaleRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of LocaleRelations which match the provided filter. */
        LocaleRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of LocaleRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of LocaleRelationswhich match the provided filter. */
        LocaleRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets LocaleRelations by AncestorLocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        LocaleRelation.getByAncestorLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many LocaleRelations by AncestorLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        LocaleRelation.getByAncestorLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of LocaleRelations by AncestorLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        LocaleRelation.getByAncestorLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related AncestorLocale based on the unique ID of the related LocaleRelation.
         *  @return A single LocaleRelation, or null. */
        LocaleRelation.prototype.getAncestorLocale = function (api, callback) {
            LocaleRelation.getAncestorLocaleForLocaleRelation(this.id, api, callback);
        };
        /** Returns the related AncestorLocale based on the unique ID of the related LocaleRelation.
         *  @param localeRelationID The ID of the LocaleRelation to retrieve.
         *  @return A single LocaleRelation, or null. */
        LocaleRelation.getAncestorLocaleForLocaleRelation = function (localeRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeRelationID: localeRelationID });
        };
        /** Gets LocaleRelations by DescendantLocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        LocaleRelation.getByDescendantLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many LocaleRelations by DescendantLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        LocaleRelation.getByDescendantLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of LocaleRelations by DescendantLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        LocaleRelation.getByDescendantLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related DescendantLocale based on the unique ID of the related LocaleRelation.
         *  @return A single LocaleRelation, or null. */
        LocaleRelation.prototype.getDescendantLocale = function (api, callback) {
            LocaleRelation.getDescendantLocaleForLocaleRelation(this.id, api, callback);
        };
        /** Returns the related DescendantLocale based on the unique ID of the related LocaleRelation.
         *  @param localeRelationID The ID of the LocaleRelation to retrieve.
         *  @return A single LocaleRelation, or null. */
        LocaleRelation.getDescendantLocaleForLocaleRelation = function (localeRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeRelationID: localeRelationID });
        };
        /** Gets a unique LocaleRelation based on the provided values.
         *  @return A single LocaleRelation, or null. */
        LocaleRelation.getByAncestorLocaleIDAndDescendantLocaleID = function (ancestorLocaleID, descendantLocaleID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { ancestorLocaleID: ancestorLocaleID, descendantLocaleID: descendantLocaleID });
        };
        LocaleRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorLocaleID: new hiw.PropertyMap("ancestorLocaleID", "AncestorLocaleID"),
            descendantLocaleID: new hiw.PropertyMap("descendantLocaleID", "DescendantLocaleID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return LocaleRelation;
    })(hiw.ServiceDataObject);
    hiw.LocaleRelation = LocaleRelation;
    /** Contains properties and static functionality for the Locale type. */
    var Locale = (function (_super) {
        __extends(Locale, _super);
        function Locale() {
            _super.apply(this, arguments);
            this.id = null;
            this.parentLocaleID = null;
            this.fips_int = null;
            this.stateFIPSCode = null;
            this.countyFIPSCode = null;
            this.countySSACode = null;
            this.hrrCode = null;
            this.fullName = null;
            this.name = null;
            this.sortOrder = null;
            this.abbreviation = null;
            this.localeLevelID = null;
        }
        Locale.prototype.getFields = function () {
            return Locale.Fields;
        };
        /** Gets a list of all of the Locales in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Locales */
        Locale.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Locales exist. */
        Locale.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Locales method. */
        Locale.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Locale with the specified primary key.
         *  @param id The primary key of the Locale to return.
         *  @return The matching Locale, if one exists, or null. */
        Locale.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Locales based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Locales which match the provided filter. */
        Locale.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Locales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Locales which match the provided filter. */
        Locale.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Locales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Localeswhich match the provided filter. */
        Locale.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Locales by ParentLocaleID.
         *  @return An Array of Locales. */
        Locale.prototype.getLocales = function (api, callback, page) {
            Locale.getByParentLocaleID(this.id, api, callback, page);
        };
        /** Gets Locales by ParentLocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        Locale.getByParentLocaleID = function (localeID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID }, null, page);
        };
        /** Gets how many Locales by ParentLocaleID exist.
         *  @return An Array of Locales. */
        Locale.prototype.getLocalesCount = function (api, callback) {
            Locale.getByParentLocaleIDCount(this.id, api, callback);
        };
        /** Gets how many Locales by ParentLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        Locale.getByParentLocaleIDCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets how many pages of Locales by ParentLocaleID exist.
         *  @return An Array of Locales. */
        Locale.prototype.getLocalesPageCount = function (api, callback) {
            Locale.getByParentLocaleIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of Locales by ParentLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        Locale.getByParentLocaleIDPageCount = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Returns the related ParentLocale based on the unique ID of the related Locale.
         *  @return A single Locale, or null. */
        Locale.prototype.getParentLocale = function (api, callback) {
            Locale.getParentLocaleForLocale(this.id, api, callback);
        };
        /** Returns the related ParentLocale based on the unique ID of the related Locale.
         *  @param localeID The ID of the Locale to retrieve.
         *  @return A single Locale, or null. */
        Locale.getParentLocaleForLocale = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        /** Gets Locales by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        Locale.getByLocaleLevelID = function (localeLevelID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID }, null, page);
        };
        /** Gets how many Locales by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        Locale.getByLocaleLevelIDCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Gets how many pages of Locales by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        Locale.getByLocaleLevelIDPageCount = function (localeLevelID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeLevelID: localeLevelID });
        };
        /** Returns the related LocaleLevel based on the unique ID of the related Locale.
         *  @return A single Locale, or null. */
        Locale.prototype.getLocaleLevel = function (api, callback) {
            Locale.getLocaleLevelForLocale(this.id, api, callback);
        };
        /** Returns the related LocaleLevel based on the unique ID of the related Locale.
         *  @param localeID The ID of the Locale to retrieve.
         *  @return A single Locale, or null. */
        Locale.getLocaleLevelForLocale = function (localeID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { localeID: localeID });
        };
        Locale.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            parentLocaleID: new hiw.PropertyMap("parentLocaleID", "ParentLocaleID"),
            fips_int: new hiw.PropertyMap("fips_int", "FIPS_int"),
            stateFIPSCode: new hiw.PropertyMap("stateFIPSCode", "StateFIPSCode"),
            countyFIPSCode: new hiw.PropertyMap("countyFIPSCode", "CountyFIPSCode"),
            countySSACode: new hiw.PropertyMap("countySSACode", "CountySSACode"),
            hrrCode: new hiw.PropertyMap("hrrCode", "HRRCode"),
            fullName: new hiw.PropertyMap("fullName", "FullName"),
            name: new hiw.PropertyMap("name", "Name"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            abbreviation: new hiw.PropertyMap("abbreviation", "Abbreviation"),
            localeLevelID: new hiw.PropertyMap("localeLevelID", "LocaleLevelID")
        };
        return Locale;
    })(hiw.ServiceDataObject);
    hiw.Locale = Locale;
    /** Contains properties and static functionality for the MaritalStatus type. */
    var MaritalStatus = (function (_super) {
        __extends(MaritalStatus, _super);
        function MaritalStatus() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentMaritalStatusID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        MaritalStatus.prototype.getFields = function () {
            return MaritalStatus.Fields;
        };
        /** Gets a list of all of the MaritalStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of MaritalStatuses */
        MaritalStatus.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many MaritalStatuses exist. */
        MaritalStatus.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the MaritalStatuses method. */
        MaritalStatus.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the MaritalStatus with the specified primary key.
         *  @param id The primary key of the MaritalStatus to return.
         *  @return The matching MaritalStatus, if one exists, or null. */
        MaritalStatus.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of MaritalStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All MaritalStatuses which match the provided filter. */
        MaritalStatus.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many MaritalStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of MaritalStatuses which match the provided filter. */
        MaritalStatus.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of MaritalStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of MaritalStatuseswhich match the provided filter. */
        MaritalStatus.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets MaritalStatuses by ParentMaritalStatusID.
         *  @return An Array of MaritalStatuses. */
        MaritalStatus.prototype.getMaritalStatuses = function (api, callback, page) {
            MaritalStatus.getByParentMaritalStatusID(this.id, api, callback, page);
        };
        /** Gets MaritalStatuses by ParentMaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatuses.
         *  @return An Array of MaritalStatuses. */
        MaritalStatus.getByParentMaritalStatusID = function (maritalStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID }, null, page);
        };
        /** Gets how many MaritalStatuses by ParentMaritalStatusID exist.
         *  @return An Array of MaritalStatuses. */
        MaritalStatus.prototype.getMaritalStatusesCount = function (api, callback) {
            MaritalStatus.getByParentMaritalStatusIDCount(this.id, api, callback);
        };
        /** Gets how many MaritalStatuses by ParentMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatuses.
         *  @return An Array of MaritalStatuses. */
        MaritalStatus.getByParentMaritalStatusIDCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Gets how many pages of MaritalStatuses by ParentMaritalStatusID exist.
         *  @return An Array of MaritalStatuses. */
        MaritalStatus.prototype.getMaritalStatusesPageCount = function (api, callback) {
            MaritalStatus.getByParentMaritalStatusIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of MaritalStatuses by ParentMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatuses.
         *  @return An Array of MaritalStatuses. */
        MaritalStatus.getByParentMaritalStatusIDPageCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Returns the related ParentMaritalStatus based on the unique ID of the related MaritalStatus.
         *  @return A single MaritalStatus, or null. */
        MaritalStatus.prototype.getParentMaritalStatus = function (api, callback) {
            MaritalStatus.getParentMaritalStatusForMaritalStatus(this.id, api, callback);
        };
        /** Returns the related ParentMaritalStatus based on the unique ID of the related MaritalStatus.
         *  @param maritalStatusID The ID of the MaritalStatus to retrieve.
         *  @return A single MaritalStatus, or null. */
        MaritalStatus.getParentMaritalStatusForMaritalStatus = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        MaritalStatus.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentMaritalStatusID: new hiw.PropertyMap("parentMaritalStatusID", "ParentMaritalStatusID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return MaritalStatus;
    })(hiw.ServiceDataObject);
    hiw.MaritalStatus = MaritalStatus;
    /** Contains properties and static functionality for the MaritalStatusRelation type. */
    var MaritalStatusRelation = (function (_super) {
        __extends(MaritalStatusRelation, _super);
        function MaritalStatusRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorMaritalStatusID = null;
            this.descendantMaritalStatusID = null;
            this.hops = null;
        }
        MaritalStatusRelation.prototype.getFields = function () {
            return MaritalStatusRelation.Fields;
        };
        /** Gets a list of all of the MaritalStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of MaritalStatusRelations */
        MaritalStatusRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many MaritalStatusRelations exist. */
        MaritalStatusRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the MaritalStatusRelations method. */
        MaritalStatusRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the MaritalStatusRelation with the specified primary key.
         *  @param id The primary key of the MaritalStatusRelation to return.
         *  @return The matching MaritalStatusRelation, if one exists, or null. */
        MaritalStatusRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of MaritalStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All MaritalStatusRelations which match the provided filter. */
        MaritalStatusRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many MaritalStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of MaritalStatusRelations which match the provided filter. */
        MaritalStatusRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of MaritalStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of MaritalStatusRelationswhich match the provided filter. */
        MaritalStatusRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets MaritalStatusRelations by AncestorMaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        MaritalStatusRelation.getByAncestorMaritalStatusID = function (maritalStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID }, null, page);
        };
        /** Gets how many MaritalStatusRelations by AncestorMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        MaritalStatusRelation.getByAncestorMaritalStatusIDCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Gets how many pages of MaritalStatusRelations by AncestorMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        MaritalStatusRelation.getByAncestorMaritalStatusIDPageCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Returns the related AncestorMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @return A single MaritalStatusRelation, or null. */
        MaritalStatusRelation.prototype.getAncestorMaritalStatus = function (api, callback) {
            MaritalStatusRelation.getAncestorMaritalStatusForMaritalStatusRelation(this.id, api, callback);
        };
        /** Returns the related AncestorMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @param maritalStatusRelationID The ID of the MaritalStatusRelation to retrieve.
         *  @return A single MaritalStatusRelation, or null. */
        MaritalStatusRelation.getAncestorMaritalStatusForMaritalStatusRelation = function (maritalStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusRelationID: maritalStatusRelationID });
        };
        /** Gets MaritalStatusRelations by DescendantMaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        MaritalStatusRelation.getByDescendantMaritalStatusID = function (maritalStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID }, null, page);
        };
        /** Gets how many MaritalStatusRelations by DescendantMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        MaritalStatusRelation.getByDescendantMaritalStatusIDCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Gets how many pages of MaritalStatusRelations by DescendantMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        MaritalStatusRelation.getByDescendantMaritalStatusIDPageCount = function (maritalStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusID: maritalStatusID });
        };
        /** Returns the related DescendantMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @return A single MaritalStatusRelation, or null. */
        MaritalStatusRelation.prototype.getDescendantMaritalStatus = function (api, callback) {
            MaritalStatusRelation.getDescendantMaritalStatusForMaritalStatusRelation(this.id, api, callback);
        };
        /** Returns the related DescendantMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @param maritalStatusRelationID The ID of the MaritalStatusRelation to retrieve.
         *  @return A single MaritalStatusRelation, or null. */
        MaritalStatusRelation.getDescendantMaritalStatusForMaritalStatusRelation = function (maritalStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { maritalStatusRelationID: maritalStatusRelationID });
        };
        MaritalStatusRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorMaritalStatusID: new hiw.PropertyMap("ancestorMaritalStatusID", "AncestorMaritalStatusID"),
            descendantMaritalStatusID: new hiw.PropertyMap("descendantMaritalStatusID", "DescendantMaritalStatusID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return MaritalStatusRelation;
    })(hiw.ServiceDataObject);
    hiw.MaritalStatusRelation = MaritalStatusRelation;
    /** Contains properties and static functionality for the Modifier type. */
    var Modifier = (function (_super) {
        __extends(Modifier, _super);
        function Modifier() {
            _super.apply(this, arguments);
            this.id = null;
            this.key = null;
            this.type = null;
            this.name = null;
            this.isHeader = null;
            this.isCompoundValue = null;
            this.indentedName = null;
            this.compoundName = null;
            this.parentModifierID = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
            this.chartName = null;
            this.downloadName = null;
        }
        Modifier.prototype.getFields = function () {
            return Modifier.Fields;
        };
        /** Gets a list of all of the Modifiers in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Modifiers */
        Modifier.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Modifiers exist. */
        Modifier.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Modifiers method. */
        Modifier.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Modifier with the specified primary key.
         *  @param id The primary key of the Modifier to return.
         *  @return The matching Modifier, if one exists, or null. */
        Modifier.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Modifiers based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Modifiers which match the provided filter. */
        Modifier.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Modifiers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Modifiers which match the provided filter. */
        Modifier.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Modifiers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Modifierswhich match the provided filter. */
        Modifier.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Modifiers by ParentModifierID.
         *  @return An Array of Modifiers. */
        Modifier.prototype.getModifiers = function (api, callback, page) {
            Modifier.getByParentModifierID(this.id, api, callback, page);
        };
        /** Gets Modifiers by ParentModifierID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child Modifiers.
         *  @return An Array of Modifiers. */
        Modifier.getByParentModifierID = function (modifierID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID }, null, page);
        };
        /** Gets how many Modifiers by ParentModifierID exist.
         *  @return An Array of Modifiers. */
        Modifier.prototype.getModifiersCount = function (api, callback) {
            Modifier.getByParentModifierIDCount(this.id, api, callback);
        };
        /** Gets how many Modifiers by ParentModifierID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child Modifiers.
         *  @return An Array of Modifiers. */
        Modifier.getByParentModifierIDCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Gets how many pages of Modifiers by ParentModifierID exist.
         *  @return An Array of Modifiers. */
        Modifier.prototype.getModifiersPageCount = function (api, callback) {
            Modifier.getByParentModifierIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of Modifiers by ParentModifierID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child Modifiers.
         *  @return An Array of Modifiers. */
        Modifier.getByParentModifierIDPageCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Returns the related ParentModifier based on the unique ID of the related Modifier.
         *  @return A single Modifier, or null. */
        Modifier.prototype.getParentModifier = function (api, callback) {
            Modifier.getParentModifierForModifier(this.id, api, callback);
        };
        /** Returns the related ParentModifier based on the unique ID of the related Modifier.
         *  @param modifierID The ID of the Modifier to retrieve.
         *  @return A single Modifier, or null. */
        Modifier.getParentModifierForModifier = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        Modifier.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            key: new hiw.PropertyMap("key", "Key"),
            type: new hiw.PropertyMap("type", "Type"),
            name: new hiw.PropertyMap("name", "Name"),
            isHeader: new hiw.PropertyMap("isHeader", "isHeader"),
            isCompoundValue: new hiw.PropertyMap("isCompoundValue", "isCompoundValue"),
            indentedName: new hiw.PropertyMap("indentedName", "IndentedName"),
            compoundName: new hiw.PropertyMap("compoundName", "CompoundName"),
            parentModifierID: new hiw.PropertyMap("parentModifierID", "ParentModifierID"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth"),
            chartName: new hiw.PropertyMap("chartName", "ChartName"),
            downloadName: new hiw.PropertyMap("downloadName", "DownloadName")
        };
        return Modifier;
    })(hiw.ServiceDataObject);
    hiw.Modifier = Modifier;
    /** Contains properties and static functionality for the ModifierGraph type. */
    var ModifierGraph = (function (_super) {
        __extends(ModifierGraph, _super);
        function ModifierGraph() {
            _super.apply(this, arguments);
            this.id = null;
            this.label = null;
            this.modifierGraphLabel = null;
            this.modifierValueIDList = null;
            this.modifierValueKeyList = null;
            this.modifierValueList = null;
            this.modifierCount = null;
            this.sortOrder = null;
            this.modifier1Value = null;
            this.modifier1ID = null;
            this.modifier1Key = null;
            this.modifier1SortOrder = null;
            this.modifier2Value = null;
            this.modifier2ID = null;
            this.modifier2Key = null;
            this.modifier2SortOrder = null;
            this.modifier3Value = null;
            this.modifier3ID = null;
            this.modifier3Key = null;
            this.modifierBook3SortOrder = null;
            this.modifier4Value = null;
            this.modifier4ID = null;
            this.modifier4Key = null;
            this.modifier4SortOrder = null;
            this.modifier5Value = null;
            this.modifier5ID = null;
            this.modifier5Key = null;
            this.modifier5SortOrder = null;
        }
        ModifierGraph.prototype.getFields = function () {
            return ModifierGraph.Fields;
        };
        /** Gets a list of all of the ModifierGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ModifierGraphs */
        ModifierGraph.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many ModifierGraphs exist. */
        ModifierGraph.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the ModifierGraphs method. */
        ModifierGraph.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the ModifierGraph with the specified primary key.
         *  @param id The primary key of the ModifierGraph to return.
         *  @return The matching ModifierGraph, if one exists, or null. */
        ModifierGraph.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of ModifierGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ModifierGraphs which match the provided filter. */
        ModifierGraph.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many ModifierGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ModifierGraphs which match the provided filter. */
        ModifierGraph.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of ModifierGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ModifierGraphswhich match the provided filter. */
        ModifierGraph.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets ModifierGraphs by Modifier1ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier1ID = function (modifierID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID }, null, page);
        };
        /** Gets how many ModifierGraphs by Modifier1ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier1IDCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Gets how many pages of ModifierGraphs by Modifier1ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier1IDPageCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Returns the related Modifier1 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.prototype.getModifier1 = function (api, callback) {
            ModifierGraph.getModifier1ForModifierGraph(this.id, api, callback);
        };
        /** Returns the related Modifier1 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.getModifier1ForModifierGraph = function (modifierGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID });
        };
        /** Gets ModifierGraphs by Modifier2ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier2ID = function (modifierID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID }, null, page);
        };
        /** Gets how many ModifierGraphs by Modifier2ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier2IDCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Gets how many pages of ModifierGraphs by Modifier2ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier2IDPageCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Returns the related Modifier2 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.prototype.getModifier2 = function (api, callback) {
            ModifierGraph.getModifier2ForModifierGraph(this.id, api, callback);
        };
        /** Returns the related Modifier2 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.getModifier2ForModifierGraph = function (modifierGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID });
        };
        /** Gets ModifierGraphs by Modifier3ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier3ID = function (modifierID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID }, null, page);
        };
        /** Gets how many ModifierGraphs by Modifier3ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier3IDCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Gets how many pages of ModifierGraphs by Modifier3ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier3IDPageCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Returns the related Modifier3 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.prototype.getModifier3 = function (api, callback) {
            ModifierGraph.getModifier3ForModifierGraph(this.id, api, callback);
        };
        /** Returns the related Modifier3 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.getModifier3ForModifierGraph = function (modifierGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID });
        };
        /** Gets ModifierGraphs by Modifier4ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier4ID = function (modifierID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID }, null, page);
        };
        /** Gets how many ModifierGraphs by Modifier4ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier4IDCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Gets how many pages of ModifierGraphs by Modifier4ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier4IDPageCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Returns the related Modifier4 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.prototype.getModifier4 = function (api, callback) {
            ModifierGraph.getModifier4ForModifierGraph(this.id, api, callback);
        };
        /** Returns the related Modifier4 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.getModifier4ForModifierGraph = function (modifierGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID });
        };
        /** Gets ModifierGraphs by Modifier5ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier5ID = function (modifierID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID }, null, page);
        };
        /** Gets how many ModifierGraphs by Modifier5ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier5IDCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Gets how many pages of ModifierGraphs by Modifier5ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        ModifierGraph.getByModifier5IDPageCount = function (modifierID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierID: modifierID });
        };
        /** Returns the related Modifier5 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.prototype.getModifier5 = function (api, callback) {
            ModifierGraph.getModifier5ForModifierGraph(this.id, api, callback);
        };
        /** Returns the related Modifier5 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        ModifierGraph.getModifier5ForModifierGraph = function (modifierGraphID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { modifierGraphID: modifierGraphID });
        };
        ModifierGraph.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            label: new hiw.PropertyMap("label", "Label"),
            modifierGraphLabel: new hiw.PropertyMap("modifierGraphLabel", "ModifierGraphLabel"),
            modifierValueIDList: new hiw.PropertyMap("modifierValueIDList", "ModifierValueIDList"),
            modifierValueKeyList: new hiw.PropertyMap("modifierValueKeyList", "ModifierValueKeyList"),
            modifierValueList: new hiw.PropertyMap("modifierValueList", "ModifierValueList"),
            modifierCount: new hiw.PropertyMap("modifierCount", "ModifierCount"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            modifier1Value: new hiw.PropertyMap("modifier1Value", "Modifier1Value"),
            modifier1ID: new hiw.PropertyMap("modifier1ID", "Modifier1ID"),
            modifier1Key: new hiw.PropertyMap("modifier1Key", "Modifier1Key"),
            modifier1SortOrder: new hiw.PropertyMap("modifier1SortOrder", "Modifier1SortOrder"),
            modifier2Value: new hiw.PropertyMap("modifier2Value", "Modifier2Value"),
            modifier2ID: new hiw.PropertyMap("modifier2ID", "Modifier2ID"),
            modifier2Key: new hiw.PropertyMap("modifier2Key", "Modifier2Key"),
            modifier2SortOrder: new hiw.PropertyMap("modifier2SortOrder", "Modifier2SortOrder"),
            modifier3Value: new hiw.PropertyMap("modifier3Value", "Modifier3Value"),
            modifier3ID: new hiw.PropertyMap("modifier3ID", "Modifier3ID"),
            modifier3Key: new hiw.PropertyMap("modifier3Key", "Modifier3Key"),
            modifierBook3SortOrder: new hiw.PropertyMap("modifierBook3SortOrder", "ModifierBook3SortOrder"),
            modifier4Value: new hiw.PropertyMap("modifier4Value", "Modifier4Value"),
            modifier4ID: new hiw.PropertyMap("modifier4ID", "Modifier4ID"),
            modifier4Key: new hiw.PropertyMap("modifier4Key", "Modifier4Key"),
            modifier4SortOrder: new hiw.PropertyMap("modifier4SortOrder", "Modifier4SortOrder"),
            modifier5Value: new hiw.PropertyMap("modifier5Value", "Modifier5Value"),
            modifier5ID: new hiw.PropertyMap("modifier5ID", "Modifier5ID"),
            modifier5Key: new hiw.PropertyMap("modifier5Key", "Modifier5Key"),
            modifier5SortOrder: new hiw.PropertyMap("modifier5SortOrder", "Modifier5SortOrder")
        };
        return ModifierGraph;
    })(hiw.ServiceDataObject);
    hiw.ModifierGraph = ModifierGraph;
    /** Contains properties and static functionality for the ObesityStatus type. */
    var ObesityStatus = (function (_super) {
        __extends(ObesityStatus, _super);
        function ObesityStatus() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentObesityStatusID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        ObesityStatus.prototype.getFields = function () {
            return ObesityStatus.Fields;
        };
        /** Gets a list of all of the ObesityStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ObesityStatuses */
        ObesityStatus.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many ObesityStatuses exist. */
        ObesityStatus.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the ObesityStatuses method. */
        ObesityStatus.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the ObesityStatus with the specified primary key.
         *  @param id The primary key of the ObesityStatus to return.
         *  @return The matching ObesityStatus, if one exists, or null. */
        ObesityStatus.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of ObesityStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ObesityStatuses which match the provided filter. */
        ObesityStatus.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many ObesityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ObesityStatuses which match the provided filter. */
        ObesityStatus.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of ObesityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ObesityStatuseswhich match the provided filter. */
        ObesityStatus.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets ObesityStatuses by ParentObesityStatusID.
         *  @return An Array of ObesityStatuses. */
        ObesityStatus.prototype.getObesityStatuses = function (api, callback, page) {
            ObesityStatus.getByParentObesityStatusID(this.id, api, callback, page);
        };
        /** Gets ObesityStatuses by ParentObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatuses.
         *  @return An Array of ObesityStatuses. */
        ObesityStatus.getByParentObesityStatusID = function (obesityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID }, null, page);
        };
        /** Gets how many ObesityStatuses by ParentObesityStatusID exist.
         *  @return An Array of ObesityStatuses. */
        ObesityStatus.prototype.getObesityStatusesCount = function (api, callback) {
            ObesityStatus.getByParentObesityStatusIDCount(this.id, api, callback);
        };
        /** Gets how many ObesityStatuses by ParentObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatuses.
         *  @return An Array of ObesityStatuses. */
        ObesityStatus.getByParentObesityStatusIDCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Gets how many pages of ObesityStatuses by ParentObesityStatusID exist.
         *  @return An Array of ObesityStatuses. */
        ObesityStatus.prototype.getObesityStatusesPageCount = function (api, callback) {
            ObesityStatus.getByParentObesityStatusIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of ObesityStatuses by ParentObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatuses.
         *  @return An Array of ObesityStatuses. */
        ObesityStatus.getByParentObesityStatusIDPageCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Returns the related ParentObesityStatus based on the unique ID of the related ObesityStatus.
         *  @return A single ObesityStatus, or null. */
        ObesityStatus.prototype.getParentObesityStatus = function (api, callback) {
            ObesityStatus.getParentObesityStatusForObesityStatus(this.id, api, callback);
        };
        /** Returns the related ParentObesityStatus based on the unique ID of the related ObesityStatus.
         *  @param obesityStatusID The ID of the ObesityStatus to retrieve.
         *  @return A single ObesityStatus, or null. */
        ObesityStatus.getParentObesityStatusForObesityStatus = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        ObesityStatus.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentObesityStatusID: new hiw.PropertyMap("parentObesityStatusID", "ParentObesityStatusID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return ObesityStatus;
    })(hiw.ServiceDataObject);
    hiw.ObesityStatus = ObesityStatus;
    /** Contains properties and static functionality for the ObesityStatusRelation type. */
    var ObesityStatusRelation = (function (_super) {
        __extends(ObesityStatusRelation, _super);
        function ObesityStatusRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorObesityStatusID = null;
            this.descendantObesityStatusID = null;
            this.hops = null;
        }
        ObesityStatusRelation.prototype.getFields = function () {
            return ObesityStatusRelation.Fields;
        };
        /** Gets a list of all of the ObesityStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ObesityStatusRelations */
        ObesityStatusRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many ObesityStatusRelations exist. */
        ObesityStatusRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the ObesityStatusRelations method. */
        ObesityStatusRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the ObesityStatusRelation with the specified primary key.
         *  @param id The primary key of the ObesityStatusRelation to return.
         *  @return The matching ObesityStatusRelation, if one exists, or null. */
        ObesityStatusRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of ObesityStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ObesityStatusRelations which match the provided filter. */
        ObesityStatusRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many ObesityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ObesityStatusRelations which match the provided filter. */
        ObesityStatusRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of ObesityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ObesityStatusRelationswhich match the provided filter. */
        ObesityStatusRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets ObesityStatusRelations by AncestorObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        ObesityStatusRelation.getByAncestorObesityStatusID = function (obesityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID }, null, page);
        };
        /** Gets how many ObesityStatusRelations by AncestorObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        ObesityStatusRelation.getByAncestorObesityStatusIDCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Gets how many pages of ObesityStatusRelations by AncestorObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        ObesityStatusRelation.getByAncestorObesityStatusIDPageCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Returns the related AncestorObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @return A single ObesityStatusRelation, or null. */
        ObesityStatusRelation.prototype.getAncestorObesityStatus = function (api, callback) {
            ObesityStatusRelation.getAncestorObesityStatusForObesityStatusRelation(this.id, api, callback);
        };
        /** Returns the related AncestorObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @param obesityStatusRelationID The ID of the ObesityStatusRelation to retrieve.
         *  @return A single ObesityStatusRelation, or null. */
        ObesityStatusRelation.getAncestorObesityStatusForObesityStatusRelation = function (obesityStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusRelationID: obesityStatusRelationID });
        };
        /** Gets ObesityStatusRelations by DescendantObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        ObesityStatusRelation.getByDescendantObesityStatusID = function (obesityStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID }, null, page);
        };
        /** Gets how many ObesityStatusRelations by DescendantObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        ObesityStatusRelation.getByDescendantObesityStatusIDCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Gets how many pages of ObesityStatusRelations by DescendantObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        ObesityStatusRelation.getByDescendantObesityStatusIDPageCount = function (obesityStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusID: obesityStatusID });
        };
        /** Returns the related DescendantObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @return A single ObesityStatusRelation, or null. */
        ObesityStatusRelation.prototype.getDescendantObesityStatus = function (api, callback) {
            ObesityStatusRelation.getDescendantObesityStatusForObesityStatusRelation(this.id, api, callback);
        };
        /** Returns the related DescendantObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @param obesityStatusRelationID The ID of the ObesityStatusRelation to retrieve.
         *  @return A single ObesityStatusRelation, or null. */
        ObesityStatusRelation.getDescendantObesityStatusForObesityStatusRelation = function (obesityStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { obesityStatusRelationID: obesityStatusRelationID });
        };
        ObesityStatusRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorObesityStatusID: new hiw.PropertyMap("ancestorObesityStatusID", "AncestorObesityStatusID"),
            descendantObesityStatusID: new hiw.PropertyMap("descendantObesityStatusID", "DescendantObesityStatusID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return ObesityStatusRelation;
    })(hiw.ServiceDataObject);
    hiw.ObesityStatusRelation = ObesityStatusRelation;
    /** Contains properties and static functionality for the Other type. */
    var Other = (function (_super) {
        __extends(Other, _super);
        function Other() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentOtherID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        Other.prototype.getFields = function () {
            return Other.Fields;
        };
        /** Gets a list of all of the Others in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Others */
        Other.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Others exist. */
        Other.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Others method. */
        Other.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Other with the specified primary key.
         *  @param id The primary key of the Other to return.
         *  @return The matching Other, if one exists, or null. */
        Other.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Others based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Others which match the provided filter. */
        Other.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Others exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Others which match the provided filter. */
        Other.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Others exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Otherswhich match the provided filter. */
        Other.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Others by ParentOtherID.
         *  @return An Array of Others. */
        Other.prototype.getOthers = function (api, callback, page) {
            Other.getByParentOtherID(this.id, api, callback, page);
        };
        /** Gets Others by ParentOtherID.
         *  @param otherID The ID of the Other for which to retrieve the child Others.
         *  @return An Array of Others. */
        Other.getByParentOtherID = function (otherID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID }, null, page);
        };
        /** Gets how many Others by ParentOtherID exist.
         *  @return An Array of Others. */
        Other.prototype.getOthersCount = function (api, callback) {
            Other.getByParentOtherIDCount(this.id, api, callback);
        };
        /** Gets how many Others by ParentOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child Others.
         *  @return An Array of Others. */
        Other.getByParentOtherIDCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Gets how many pages of Others by ParentOtherID exist.
         *  @return An Array of Others. */
        Other.prototype.getOthersPageCount = function (api, callback) {
            Other.getByParentOtherIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of Others by ParentOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child Others.
         *  @return An Array of Others. */
        Other.getByParentOtherIDPageCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Returns the related ParentOther based on the unique ID of the related Other.
         *  @return A single Other, or null. */
        Other.prototype.getParentOther = function (api, callback) {
            Other.getParentOtherForOther(this.id, api, callback);
        };
        /** Returns the related ParentOther based on the unique ID of the related Other.
         *  @param otherID The ID of the Other to retrieve.
         *  @return A single Other, or null. */
        Other.getParentOtherForOther = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        Other.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentOtherID: new hiw.PropertyMap("parentOtherID", "ParentOtherID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return Other;
    })(hiw.ServiceDataObject);
    hiw.Other = Other;
    /** Contains properties and static functionality for the OtherRelation type. */
    var OtherRelation = (function (_super) {
        __extends(OtherRelation, _super);
        function OtherRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorOtherID = null;
            this.descendantOtherID = null;
            this.hops = null;
        }
        OtherRelation.prototype.getFields = function () {
            return OtherRelation.Fields;
        };
        /** Gets a list of all of the OtherRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of OtherRelations */
        OtherRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many OtherRelations exist. */
        OtherRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the OtherRelations method. */
        OtherRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the OtherRelation with the specified primary key.
         *  @param id The primary key of the OtherRelation to return.
         *  @return The matching OtherRelation, if one exists, or null. */
        OtherRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of OtherRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All OtherRelations which match the provided filter. */
        OtherRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many OtherRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of OtherRelations which match the provided filter. */
        OtherRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of OtherRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of OtherRelationswhich match the provided filter. */
        OtherRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets OtherRelations by AncestorOtherID.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        OtherRelation.getByAncestorOtherID = function (otherID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID }, null, page);
        };
        /** Gets how many OtherRelations by AncestorOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        OtherRelation.getByAncestorOtherIDCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Gets how many pages of OtherRelations by AncestorOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        OtherRelation.getByAncestorOtherIDPageCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Returns the related AncestorOther based on the unique ID of the related OtherRelation.
         *  @return A single OtherRelation, or null. */
        OtherRelation.prototype.getAncestorOther = function (api, callback) {
            OtherRelation.getAncestorOtherForOtherRelation(this.id, api, callback);
        };
        /** Returns the related AncestorOther based on the unique ID of the related OtherRelation.
         *  @param otherRelationID The ID of the OtherRelation to retrieve.
         *  @return A single OtherRelation, or null. */
        OtherRelation.getAncestorOtherForOtherRelation = function (otherRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherRelationID: otherRelationID });
        };
        /** Gets OtherRelations by DescendantOtherID.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        OtherRelation.getByDescendantOtherID = function (otherID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID }, null, page);
        };
        /** Gets how many OtherRelations by DescendantOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        OtherRelation.getByDescendantOtherIDCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Gets how many pages of OtherRelations by DescendantOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        OtherRelation.getByDescendantOtherIDPageCount = function (otherID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherID: otherID });
        };
        /** Returns the related DescendantOther based on the unique ID of the related OtherRelation.
         *  @return A single OtherRelation, or null. */
        OtherRelation.prototype.getDescendantOther = function (api, callback) {
            OtherRelation.getDescendantOtherForOtherRelation(this.id, api, callback);
        };
        /** Returns the related DescendantOther based on the unique ID of the related OtherRelation.
         *  @param otherRelationID The ID of the OtherRelation to retrieve.
         *  @return A single OtherRelation, or null. */
        OtherRelation.getDescendantOtherForOtherRelation = function (otherRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { otherRelationID: otherRelationID });
        };
        OtherRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorOtherID: new hiw.PropertyMap("ancestorOtherID", "AncestorOtherID"),
            descendantOtherID: new hiw.PropertyMap("descendantOtherID", "DescendantOtherID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return OtherRelation;
    })(hiw.ServiceDataObject);
    hiw.OtherRelation = OtherRelation;
    /** Contains properties and static functionality for the RaceEthnicity type. */
    var RaceEthnicity = (function (_super) {
        __extends(RaceEthnicity, _super);
        function RaceEthnicity() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentRaceEthnicityID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        RaceEthnicity.prototype.getFields = function () {
            return RaceEthnicity.Fields;
        };
        /** Gets a list of all of the RaceEthnicities in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of RaceEthnicities */
        RaceEthnicity.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many RaceEthnicities exist. */
        RaceEthnicity.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the RaceEthnicities method. */
        RaceEthnicity.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the RaceEthnicity with the specified primary key.
         *  @param id The primary key of the RaceEthnicity to return.
         *  @return The matching RaceEthnicity, if one exists, or null. */
        RaceEthnicity.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of RaceEthnicities based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All RaceEthnicities which match the provided filter. */
        RaceEthnicity.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many RaceEthnicities exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of RaceEthnicities which match the provided filter. */
        RaceEthnicity.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of RaceEthnicities exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of RaceEthnicitieswhich match the provided filter. */
        RaceEthnicity.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets RaceEthnicities by ParentRaceEthnicityID.
         *  @return An Array of RaceEthnicities. */
        RaceEthnicity.prototype.getRaceEthnicities = function (api, callback, page) {
            RaceEthnicity.getByParentRaceEthnicityID(this.id, api, callback, page);
        };
        /** Gets RaceEthnicities by ParentRaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicities.
         *  @return An Array of RaceEthnicities. */
        RaceEthnicity.getByParentRaceEthnicityID = function (raceEthnicityID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID }, null, page);
        };
        /** Gets how many RaceEthnicities by ParentRaceEthnicityID exist.
         *  @return An Array of RaceEthnicities. */
        RaceEthnicity.prototype.getRaceEthnicitiesCount = function (api, callback) {
            RaceEthnicity.getByParentRaceEthnicityIDCount(this.id, api, callback);
        };
        /** Gets how many RaceEthnicities by ParentRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicities.
         *  @return An Array of RaceEthnicities. */
        RaceEthnicity.getByParentRaceEthnicityIDCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Gets how many pages of RaceEthnicities by ParentRaceEthnicityID exist.
         *  @return An Array of RaceEthnicities. */
        RaceEthnicity.prototype.getRaceEthnicitiesPageCount = function (api, callback) {
            RaceEthnicity.getByParentRaceEthnicityIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of RaceEthnicities by ParentRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicities.
         *  @return An Array of RaceEthnicities. */
        RaceEthnicity.getByParentRaceEthnicityIDPageCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Returns the related ParentRaceEthnicity based on the unique ID of the related RaceEthnicity.
         *  @return A single RaceEthnicity, or null. */
        RaceEthnicity.prototype.getParentRaceEthnicity = function (api, callback) {
            RaceEthnicity.getParentRaceEthnicityForRaceEthnicity(this.id, api, callback);
        };
        /** Returns the related ParentRaceEthnicity based on the unique ID of the related RaceEthnicity.
         *  @param raceEthnicityID The ID of the RaceEthnicity to retrieve.
         *  @return A single RaceEthnicity, or null. */
        RaceEthnicity.getParentRaceEthnicityForRaceEthnicity = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        RaceEthnicity.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentRaceEthnicityID: new hiw.PropertyMap("parentRaceEthnicityID", "ParentRaceEthnicityID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return RaceEthnicity;
    })(hiw.ServiceDataObject);
    hiw.RaceEthnicity = RaceEthnicity;
    /** Contains properties and static functionality for the RaceEthnicityRelation type. */
    var RaceEthnicityRelation = (function (_super) {
        __extends(RaceEthnicityRelation, _super);
        function RaceEthnicityRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorRaceEthnicityID = null;
            this.descendantRaceEthnicityID = null;
            this.hops = null;
        }
        RaceEthnicityRelation.prototype.getFields = function () {
            return RaceEthnicityRelation.Fields;
        };
        /** Gets a list of all of the RaceEthnicityRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of RaceEthnicityRelations */
        RaceEthnicityRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many RaceEthnicityRelations exist. */
        RaceEthnicityRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the RaceEthnicityRelations method. */
        RaceEthnicityRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the RaceEthnicityRelation with the specified primary key.
         *  @param id The primary key of the RaceEthnicityRelation to return.
         *  @return The matching RaceEthnicityRelation, if one exists, or null. */
        RaceEthnicityRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of RaceEthnicityRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All RaceEthnicityRelations which match the provided filter. */
        RaceEthnicityRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many RaceEthnicityRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of RaceEthnicityRelations which match the provided filter. */
        RaceEthnicityRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of RaceEthnicityRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of RaceEthnicityRelationswhich match the provided filter. */
        RaceEthnicityRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets RaceEthnicityRelations by AncestorRaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        RaceEthnicityRelation.getByAncestorRaceEthnicityID = function (raceEthnicityID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID }, null, page);
        };
        /** Gets how many RaceEthnicityRelations by AncestorRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        RaceEthnicityRelation.getByAncestorRaceEthnicityIDCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Gets how many pages of RaceEthnicityRelations by AncestorRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        RaceEthnicityRelation.getByAncestorRaceEthnicityIDPageCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Returns the related AncestorRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @return A single RaceEthnicityRelation, or null. */
        RaceEthnicityRelation.prototype.getAncestorRaceEthnicity = function (api, callback) {
            RaceEthnicityRelation.getAncestorRaceEthnicityForRaceEthnicityRelation(this.id, api, callback);
        };
        /** Returns the related AncestorRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @param raceEthnicityRelationID The ID of the RaceEthnicityRelation to retrieve.
         *  @return A single RaceEthnicityRelation, or null. */
        RaceEthnicityRelation.getAncestorRaceEthnicityForRaceEthnicityRelation = function (raceEthnicityRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityRelationID: raceEthnicityRelationID });
        };
        /** Gets RaceEthnicityRelations by DescendantRaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        RaceEthnicityRelation.getByDescendantRaceEthnicityID = function (raceEthnicityID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID }, null, page);
        };
        /** Gets how many RaceEthnicityRelations by DescendantRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        RaceEthnicityRelation.getByDescendantRaceEthnicityIDCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Gets how many pages of RaceEthnicityRelations by DescendantRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        RaceEthnicityRelation.getByDescendantRaceEthnicityIDPageCount = function (raceEthnicityID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityID: raceEthnicityID });
        };
        /** Returns the related DescendantRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @return A single RaceEthnicityRelation, or null. */
        RaceEthnicityRelation.prototype.getDescendantRaceEthnicity = function (api, callback) {
            RaceEthnicityRelation.getDescendantRaceEthnicityForRaceEthnicityRelation(this.id, api, callback);
        };
        /** Returns the related DescendantRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @param raceEthnicityRelationID The ID of the RaceEthnicityRelation to retrieve.
         *  @return A single RaceEthnicityRelation, or null. */
        RaceEthnicityRelation.getDescendantRaceEthnicityForRaceEthnicityRelation = function (raceEthnicityRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { raceEthnicityRelationID: raceEthnicityRelationID });
        };
        RaceEthnicityRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorRaceEthnicityID: new hiw.PropertyMap("ancestorRaceEthnicityID", "AncestorRaceEthnicityID"),
            descendantRaceEthnicityID: new hiw.PropertyMap("descendantRaceEthnicityID", "DescendantRaceEthnicityID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return RaceEthnicityRelation;
    })(hiw.ServiceDataObject);
    hiw.RaceEthnicityRelation = RaceEthnicityRelation;
    /** Contains properties and static functionality for the Sex type. */
    var Sex = (function (_super) {
        __extends(Sex, _super);
        function Sex() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentSexID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        Sex.prototype.getFields = function () {
            return Sex.Fields;
        };
        /** Gets a list of all of the Sexes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Sexes */
        Sex.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Sexes exist. */
        Sex.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Sexes method. */
        Sex.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Sex with the specified primary key.
         *  @param id The primary key of the Sex to return.
         *  @return The matching Sex, if one exists, or null. */
        Sex.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Sexes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Sexes which match the provided filter. */
        Sex.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Sexes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Sexes which match the provided filter. */
        Sex.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Sexes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Sexeswhich match the provided filter. */
        Sex.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Sexes by ParentSexID.
         *  @return An Array of Sexes. */
        Sex.prototype.getSexes = function (api, callback, page) {
            Sex.getByParentSexID(this.id, api, callback, page);
        };
        /** Gets Sexes by ParentSexID.
         *  @param sexID The ID of the Sex for which to retrieve the child Sexes.
         *  @return An Array of Sexes. */
        Sex.getByParentSexID = function (sexID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID }, null, page);
        };
        /** Gets how many Sexes by ParentSexID exist.
         *  @return An Array of Sexes. */
        Sex.prototype.getSexesCount = function (api, callback) {
            Sex.getByParentSexIDCount(this.id, api, callback);
        };
        /** Gets how many Sexes by ParentSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child Sexes.
         *  @return An Array of Sexes. */
        Sex.getByParentSexIDCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Gets how many pages of Sexes by ParentSexID exist.
         *  @return An Array of Sexes. */
        Sex.prototype.getSexesPageCount = function (api, callback) {
            Sex.getByParentSexIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of Sexes by ParentSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child Sexes.
         *  @return An Array of Sexes. */
        Sex.getByParentSexIDPageCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Returns the related ParentSex based on the unique ID of the related Sex.
         *  @return A single Sex, or null. */
        Sex.prototype.getParentSex = function (api, callback) {
            Sex.getParentSexForSex(this.id, api, callback);
        };
        /** Returns the related ParentSex based on the unique ID of the related Sex.
         *  @param sexID The ID of the Sex to retrieve.
         *  @return A single Sex, or null. */
        Sex.getParentSexForSex = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        Sex.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentSexID: new hiw.PropertyMap("parentSexID", "ParentSexID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return Sex;
    })(hiw.ServiceDataObject);
    hiw.Sex = Sex;
    /** Contains properties and static functionality for the SexRelation type. */
    var SexRelation = (function (_super) {
        __extends(SexRelation, _super);
        function SexRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorSexID = null;
            this.descendantSexID = null;
            this.hops = null;
        }
        SexRelation.prototype.getFields = function () {
            return SexRelation.Fields;
        };
        /** Gets a list of all of the SexRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of SexRelations */
        SexRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many SexRelations exist. */
        SexRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the SexRelations method. */
        SexRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the SexRelation with the specified primary key.
         *  @param id The primary key of the SexRelation to return.
         *  @return The matching SexRelation, if one exists, or null. */
        SexRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of SexRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All SexRelations which match the provided filter. */
        SexRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many SexRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of SexRelations which match the provided filter. */
        SexRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of SexRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of SexRelationswhich match the provided filter. */
        SexRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets SexRelations by AncestorSexID.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        SexRelation.getByAncestorSexID = function (sexID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID }, null, page);
        };
        /** Gets how many SexRelations by AncestorSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        SexRelation.getByAncestorSexIDCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Gets how many pages of SexRelations by AncestorSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        SexRelation.getByAncestorSexIDPageCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Returns the related AncestorSex based on the unique ID of the related SexRelation.
         *  @return A single SexRelation, or null. */
        SexRelation.prototype.getAncestorSex = function (api, callback) {
            SexRelation.getAncestorSexForSexRelation(this.id, api, callback);
        };
        /** Returns the related AncestorSex based on the unique ID of the related SexRelation.
         *  @param sexRelationID The ID of the SexRelation to retrieve.
         *  @return A single SexRelation, or null. */
        SexRelation.getAncestorSexForSexRelation = function (sexRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexRelationID: sexRelationID });
        };
        /** Gets SexRelations by DescendantSexID.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        SexRelation.getByDescendantSexID = function (sexID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID }, null, page);
        };
        /** Gets how many SexRelations by DescendantSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        SexRelation.getByDescendantSexIDCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Gets how many pages of SexRelations by DescendantSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        SexRelation.getByDescendantSexIDPageCount = function (sexID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexID: sexID });
        };
        /** Returns the related DescendantSex based on the unique ID of the related SexRelation.
         *  @return A single SexRelation, or null. */
        SexRelation.prototype.getDescendantSex = function (api, callback) {
            SexRelation.getDescendantSexForSexRelation(this.id, api, callback);
        };
        /** Returns the related DescendantSex based on the unique ID of the related SexRelation.
         *  @param sexRelationID The ID of the SexRelation to retrieve.
         *  @return A single SexRelation, or null. */
        SexRelation.getDescendantSexForSexRelation = function (sexRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexRelationID: sexRelationID });
        };
        SexRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorSexID: new hiw.PropertyMap("ancestorSexID", "AncestorSexID"),
            descendantSexID: new hiw.PropertyMap("descendantSexID", "DescendantSexID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return SexRelation;
    })(hiw.ServiceDataObject);
    hiw.SexRelation = SexRelation;
    /** Contains properties and static functionality for the SexualOrientation type. */
    var SexualOrientation = (function (_super) {
        __extends(SexualOrientation, _super);
        function SexualOrientation() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentSexualOrientationID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        SexualOrientation.prototype.getFields = function () {
            return SexualOrientation.Fields;
        };
        /** Gets a list of all of the SexualOrientations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of SexualOrientations */
        SexualOrientation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many SexualOrientations exist. */
        SexualOrientation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the SexualOrientations method. */
        SexualOrientation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the SexualOrientation with the specified primary key.
         *  @param id The primary key of the SexualOrientation to return.
         *  @return The matching SexualOrientation, if one exists, or null. */
        SexualOrientation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of SexualOrientations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All SexualOrientations which match the provided filter. */
        SexualOrientation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many SexualOrientations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of SexualOrientations which match the provided filter. */
        SexualOrientation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of SexualOrientations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of SexualOrientationswhich match the provided filter. */
        SexualOrientation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets SexualOrientations by ParentSexualOrientationID.
         *  @return An Array of SexualOrientations. */
        SexualOrientation.prototype.getSexualOrientations = function (api, callback, page) {
            SexualOrientation.getByParentSexualOrientationID(this.id, api, callback, page);
        };
        /** Gets SexualOrientations by ParentSexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientations.
         *  @return An Array of SexualOrientations. */
        SexualOrientation.getByParentSexualOrientationID = function (sexualOrientationID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID }, null, page);
        };
        /** Gets how many SexualOrientations by ParentSexualOrientationID exist.
         *  @return An Array of SexualOrientations. */
        SexualOrientation.prototype.getSexualOrientationsCount = function (api, callback) {
            SexualOrientation.getByParentSexualOrientationIDCount(this.id, api, callback);
        };
        /** Gets how many SexualOrientations by ParentSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientations.
         *  @return An Array of SexualOrientations. */
        SexualOrientation.getByParentSexualOrientationIDCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Gets how many pages of SexualOrientations by ParentSexualOrientationID exist.
         *  @return An Array of SexualOrientations. */
        SexualOrientation.prototype.getSexualOrientationsPageCount = function (api, callback) {
            SexualOrientation.getByParentSexualOrientationIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of SexualOrientations by ParentSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientations.
         *  @return An Array of SexualOrientations. */
        SexualOrientation.getByParentSexualOrientationIDPageCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Returns the related ParentSexualOrientation based on the unique ID of the related SexualOrientation.
         *  @return A single SexualOrientation, or null. */
        SexualOrientation.prototype.getParentSexualOrientation = function (api, callback) {
            SexualOrientation.getParentSexualOrientationForSexualOrientation(this.id, api, callback);
        };
        /** Returns the related ParentSexualOrientation based on the unique ID of the related SexualOrientation.
         *  @param sexualOrientationID The ID of the SexualOrientation to retrieve.
         *  @return A single SexualOrientation, or null. */
        SexualOrientation.getParentSexualOrientationForSexualOrientation = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        SexualOrientation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentSexualOrientationID: new hiw.PropertyMap("parentSexualOrientationID", "ParentSexualOrientationID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return SexualOrientation;
    })(hiw.ServiceDataObject);
    hiw.SexualOrientation = SexualOrientation;
    /** Contains properties and static functionality for the SexualOrientationRelation type. */
    var SexualOrientationRelation = (function (_super) {
        __extends(SexualOrientationRelation, _super);
        function SexualOrientationRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorSexualOrientationID = null;
            this.descendantSexualOrientationID = null;
            this.hops = null;
        }
        SexualOrientationRelation.prototype.getFields = function () {
            return SexualOrientationRelation.Fields;
        };
        /** Gets a list of all of the SexualOrientationRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of SexualOrientationRelations */
        SexualOrientationRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many SexualOrientationRelations exist. */
        SexualOrientationRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the SexualOrientationRelations method. */
        SexualOrientationRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the SexualOrientationRelation with the specified primary key.
         *  @param id The primary key of the SexualOrientationRelation to return.
         *  @return The matching SexualOrientationRelation, if one exists, or null. */
        SexualOrientationRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of SexualOrientationRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All SexualOrientationRelations which match the provided filter. */
        SexualOrientationRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many SexualOrientationRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of SexualOrientationRelations which match the provided filter. */
        SexualOrientationRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of SexualOrientationRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of SexualOrientationRelationswhich match the provided filter. */
        SexualOrientationRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets SexualOrientationRelations by AncestorSexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        SexualOrientationRelation.getByAncestorSexualOrientationID = function (sexualOrientationID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID }, null, page);
        };
        /** Gets how many SexualOrientationRelations by AncestorSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        SexualOrientationRelation.getByAncestorSexualOrientationIDCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Gets how many pages of SexualOrientationRelations by AncestorSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        SexualOrientationRelation.getByAncestorSexualOrientationIDPageCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Returns the related AncestorSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @return A single SexualOrientationRelation, or null. */
        SexualOrientationRelation.prototype.getAncestorSexualOrientation = function (api, callback) {
            SexualOrientationRelation.getAncestorSexualOrientationForSexualOrientationRelation(this.id, api, callback);
        };
        /** Returns the related AncestorSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @param sexualOrientationRelationID The ID of the SexualOrientationRelation to retrieve.
         *  @return A single SexualOrientationRelation, or null. */
        SexualOrientationRelation.getAncestorSexualOrientationForSexualOrientationRelation = function (sexualOrientationRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationRelationID: sexualOrientationRelationID });
        };
        /** Gets SexualOrientationRelations by DescendantSexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        SexualOrientationRelation.getByDescendantSexualOrientationID = function (sexualOrientationID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID }, null, page);
        };
        /** Gets how many SexualOrientationRelations by DescendantSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        SexualOrientationRelation.getByDescendantSexualOrientationIDCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Gets how many pages of SexualOrientationRelations by DescendantSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        SexualOrientationRelation.getByDescendantSexualOrientationIDPageCount = function (sexualOrientationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationID: sexualOrientationID });
        };
        /** Returns the related DescendantSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @return A single SexualOrientationRelation, or null. */
        SexualOrientationRelation.prototype.getDescendantSexualOrientation = function (api, callback) {
            SexualOrientationRelation.getDescendantSexualOrientationForSexualOrientationRelation(this.id, api, callback);
        };
        /** Returns the related DescendantSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @param sexualOrientationRelationID The ID of the SexualOrientationRelation to retrieve.
         *  @return A single SexualOrientationRelation, or null. */
        SexualOrientationRelation.getDescendantSexualOrientationForSexualOrientationRelation = function (sexualOrientationRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { sexualOrientationRelationID: sexualOrientationRelationID });
        };
        SexualOrientationRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorSexualOrientationID: new hiw.PropertyMap("ancestorSexualOrientationID", "AncestorSexualOrientationID"),
            descendantSexualOrientationID: new hiw.PropertyMap("descendantSexualOrientationID", "DescendantSexualOrientationID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return SexualOrientationRelation;
    })(hiw.ServiceDataObject);
    hiw.SexualOrientationRelation = SexualOrientationRelation;
    /** Contains properties and static functionality for the Timeframe type. */
    var Timeframe = (function (_super) {
        __extends(Timeframe, _super);
        function Timeframe() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.firstYear = null;
            this.lastYear = null;
            this.twoDigitFirstYear = null;
            this.twoDigitLastYear = null;
            this.sortOrder = null;
        }
        Timeframe.prototype.getFields = function () {
            return Timeframe.Fields;
        };
        /** Gets a list of all of the Timeframes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Timeframes */
        Timeframe.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Timeframes exist. */
        Timeframe.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Timeframes method. */
        Timeframe.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Timeframe with the specified primary key.
         *  @param id The primary key of the Timeframe to return.
         *  @return The matching Timeframe, if one exists, or null. */
        Timeframe.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Timeframes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Timeframes which match the provided filter. */
        Timeframe.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Timeframes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Timeframes which match the provided filter. */
        Timeframe.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Timeframes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Timeframeswhich match the provided filter. */
        Timeframe.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        Timeframe.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            firstYear: new hiw.PropertyMap("firstYear", "FirstYear"),
            lastYear: new hiw.PropertyMap("lastYear", "LastYear"),
            twoDigitFirstYear: new hiw.PropertyMap("twoDigitFirstYear", "TwoDigitFirstYear"),
            twoDigitLastYear: new hiw.PropertyMap("twoDigitLastYear", "TwoDigitLastYear"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return Timeframe;
    })(hiw.ServiceDataObject);
    hiw.Timeframe = Timeframe;
    /** Contains properties and static functionality for the Total type. */
    var Total = (function (_super) {
        __extends(Total, _super);
        function Total() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentTotalID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        Total.prototype.getFields = function () {
            return Total.Fields;
        };
        /** Gets a list of all of the Totals in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Totals */
        Total.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Totals exist. */
        Total.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Totals method. */
        Total.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Total with the specified primary key.
         *  @param id The primary key of the Total to return.
         *  @return The matching Total, if one exists, or null. */
        Total.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Totals based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Totals which match the provided filter. */
        Total.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Totals exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Totals which match the provided filter. */
        Total.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Totals exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Totalswhich match the provided filter. */
        Total.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets Totals by ParentTotalID.
         *  @return An Array of Totals. */
        Total.prototype.getTotals = function (api, callback, page) {
            Total.getByParentTotalID(this.id, api, callback, page);
        };
        /** Gets Totals by ParentTotalID.
         *  @param totalID The ID of the Total for which to retrieve the child Totals.
         *  @return An Array of Totals. */
        Total.getByParentTotalID = function (totalID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID }, null, page);
        };
        /** Gets how many Totals by ParentTotalID exist.
         *  @return An Array of Totals. */
        Total.prototype.getTotalsCount = function (api, callback) {
            Total.getByParentTotalIDCount(this.id, api, callback);
        };
        /** Gets how many Totals by ParentTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child Totals.
         *  @return An Array of Totals. */
        Total.getByParentTotalIDCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Gets how many pages of Totals by ParentTotalID exist.
         *  @return An Array of Totals. */
        Total.prototype.getTotalsPageCount = function (api, callback) {
            Total.getByParentTotalIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of Totals by ParentTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child Totals.
         *  @return An Array of Totals. */
        Total.getByParentTotalIDPageCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Returns the related ParentTotal based on the unique ID of the related Total.
         *  @return A single Total, or null. */
        Total.prototype.getParentTotal = function (api, callback) {
            Total.getParentTotalForTotal(this.id, api, callback);
        };
        /** Returns the related ParentTotal based on the unique ID of the related Total.
         *  @param totalID The ID of the Total to retrieve.
         *  @return A single Total, or null. */
        Total.getParentTotalForTotal = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        Total.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentTotalID: new hiw.PropertyMap("parentTotalID", "ParentTotalID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return Total;
    })(hiw.ServiceDataObject);
    hiw.Total = Total;
    /** Contains properties and static functionality for the TotalRelation type. */
    var TotalRelation = (function (_super) {
        __extends(TotalRelation, _super);
        function TotalRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorTotalID = null;
            this.descendantTotalID = null;
            this.hops = null;
        }
        TotalRelation.prototype.getFields = function () {
            return TotalRelation.Fields;
        };
        /** Gets a list of all of the TotalRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of TotalRelations */
        TotalRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many TotalRelations exist. */
        TotalRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the TotalRelations method. */
        TotalRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the TotalRelation with the specified primary key.
         *  @param id The primary key of the TotalRelation to return.
         *  @return The matching TotalRelation, if one exists, or null. */
        TotalRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of TotalRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All TotalRelations which match the provided filter. */
        TotalRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many TotalRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of TotalRelations which match the provided filter. */
        TotalRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of TotalRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of TotalRelationswhich match the provided filter. */
        TotalRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets TotalRelations by AncestorTotalID.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        TotalRelation.getByAncestorTotalID = function (totalID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID }, null, page);
        };
        /** Gets how many TotalRelations by AncestorTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        TotalRelation.getByAncestorTotalIDCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Gets how many pages of TotalRelations by AncestorTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        TotalRelation.getByAncestorTotalIDPageCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Returns the related AncestorTotal based on the unique ID of the related TotalRelation.
         *  @return A single TotalRelation, or null. */
        TotalRelation.prototype.getAncestorTotal = function (api, callback) {
            TotalRelation.getAncestorTotalForTotalRelation(this.id, api, callback);
        };
        /** Returns the related AncestorTotal based on the unique ID of the related TotalRelation.
         *  @param totalRelationID The ID of the TotalRelation to retrieve.
         *  @return A single TotalRelation, or null. */
        TotalRelation.getAncestorTotalForTotalRelation = function (totalRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalRelationID: totalRelationID });
        };
        /** Gets TotalRelations by DescendantTotalID.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        TotalRelation.getByDescendantTotalID = function (totalID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID }, null, page);
        };
        /** Gets how many TotalRelations by DescendantTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        TotalRelation.getByDescendantTotalIDCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Gets how many pages of TotalRelations by DescendantTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        TotalRelation.getByDescendantTotalIDPageCount = function (totalID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalID: totalID });
        };
        /** Returns the related DescendantTotal based on the unique ID of the related TotalRelation.
         *  @return A single TotalRelation, or null. */
        TotalRelation.prototype.getDescendantTotal = function (api, callback) {
            TotalRelation.getDescendantTotalForTotalRelation(this.id, api, callback);
        };
        /** Returns the related DescendantTotal based on the unique ID of the related TotalRelation.
         *  @param totalRelationID The ID of the TotalRelation to retrieve.
         *  @return A single TotalRelation, or null. */
        TotalRelation.getDescendantTotalForTotalRelation = function (totalRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { totalRelationID: totalRelationID });
        };
        TotalRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorTotalID: new hiw.PropertyMap("ancestorTotalID", "AncestorTotalID"),
            descendantTotalID: new hiw.PropertyMap("descendantTotalID", "DescendantTotalID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return TotalRelation;
    })(hiw.ServiceDataObject);
    hiw.TotalRelation = TotalRelation;
    /** Contains properties and static functionality for the Url type. */
    var Url = (function (_super) {
        __extends(Url, _super);
        function Url() {
            _super.apply(this, arguments);
            this.id = null;
            this.linkTag = null;
            this.internal = null;
            this.falsePositive = null;
            this.path = null;
            this.title = null;
            this.modifyDate = null;
            this.validationDate = null;
            this.validationStatus = null;
        }
        Url.prototype.getFields = function () {
            return Url.Fields;
        };
        /** Gets a list of all of the Urls in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Urls */
        Url.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Urls exist. */
        Url.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Urls method. */
        Url.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Url with the specified primary key.
         *  @param id The primary key of the Url to return.
         *  @return The matching Url, if one exists, or null. */
        Url.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Urls based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Urls which match the provided filter. */
        Url.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Urls exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Urls which match the provided filter. */
        Url.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Urls exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Urlswhich match the provided filter. */
        Url.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        Url.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            linkTag: new hiw.PropertyMap("linkTag", "LinkTag"),
            internal: new hiw.PropertyMap("internal", "Internal"),
            falsePositive: new hiw.PropertyMap("falsePositive", "FalsePositive"),
            path: new hiw.PropertyMap("path", "Path"),
            title: new hiw.PropertyMap("title", "Title"),
            modifyDate: new hiw.PropertyMap("modifyDate", "ModifyDate"),
            validationDate: new hiw.PropertyMap("validationDate", "ValidationDate"),
            validationStatus: new hiw.PropertyMap("validationStatus", "ValidationStatus")
        };
        return Url;
    })(hiw.ServiceDataObject);
    hiw.Url = Url;
    /** Contains properties and static functionality for the ValueLabel type. */
    var ValueLabel = (function (_super) {
        __extends(ValueLabel, _super);
        function ValueLabel() {
            _super.apply(this, arguments);
            this.id = null;
            this.label = null;
        }
        ValueLabel.prototype.getFields = function () {
            return ValueLabel.Fields;
        };
        /** Gets a list of all of the ValueLabels in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ValueLabels */
        ValueLabel.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many ValueLabels exist. */
        ValueLabel.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the ValueLabels method. */
        ValueLabel.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the ValueLabel with the specified primary key.
         *  @param id The primary key of the ValueLabel to return.
         *  @return The matching ValueLabel, if one exists, or null. */
        ValueLabel.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of ValueLabels based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ValueLabels which match the provided filter. */
        ValueLabel.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many ValueLabels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ValueLabels which match the provided filter. */
        ValueLabel.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of ValueLabels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ValueLabelswhich match the provided filter. */
        ValueLabel.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        ValueLabel.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            label: new hiw.PropertyMap("label", "Label")
        };
        return ValueLabel;
    })(hiw.ServiceDataObject);
    hiw.ValueLabel = ValueLabel;
    /** Contains properties and static functionality for the VeteranStatus type. */
    var VeteranStatus = (function (_super) {
        __extends(VeteranStatus, _super);
        function VeteranStatus() {
            _super.apply(this, arguments);
            this.id = null;
            this.name = null;
            this.parentVeteranStatusID = null;
            this.dimensionKey = null;
            this.treeGraph = null;
            this.nameGraph = null;
            this.sortOrder = null;
            this.depth = null;
        }
        VeteranStatus.prototype.getFields = function () {
            return VeteranStatus.Fields;
        };
        /** Gets a list of all of the VeteranStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of VeteranStatuses */
        VeteranStatus.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many VeteranStatuses exist. */
        VeteranStatus.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the VeteranStatuses method. */
        VeteranStatus.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the VeteranStatus with the specified primary key.
         *  @param id The primary key of the VeteranStatus to return.
         *  @return The matching VeteranStatus, if one exists, or null. */
        VeteranStatus.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of VeteranStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All VeteranStatuses which match the provided filter. */
        VeteranStatus.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many VeteranStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of VeteranStatuses which match the provided filter. */
        VeteranStatus.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of VeteranStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of VeteranStatuseswhich match the provided filter. */
        VeteranStatus.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets VeteranStatuses by ParentVeteranStatusID.
         *  @return An Array of VeteranStatuses. */
        VeteranStatus.prototype.getVeteranStatuses = function (api, callback, page) {
            VeteranStatus.getByParentVeteranStatusID(this.id, api, callback, page);
        };
        /** Gets VeteranStatuses by ParentVeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatuses.
         *  @return An Array of VeteranStatuses. */
        VeteranStatus.getByParentVeteranStatusID = function (veteranStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID }, null, page);
        };
        /** Gets how many VeteranStatuses by ParentVeteranStatusID exist.
         *  @return An Array of VeteranStatuses. */
        VeteranStatus.prototype.getVeteranStatusesCount = function (api, callback) {
            VeteranStatus.getByParentVeteranStatusIDCount(this.id, api, callback);
        };
        /** Gets how many VeteranStatuses by ParentVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatuses.
         *  @return An Array of VeteranStatuses. */
        VeteranStatus.getByParentVeteranStatusIDCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Gets how many pages of VeteranStatuses by ParentVeteranStatusID exist.
         *  @return An Array of VeteranStatuses. */
        VeteranStatus.prototype.getVeteranStatusesPageCount = function (api, callback) {
            VeteranStatus.getByParentVeteranStatusIDPageCount(this.id, api, callback);
        };
        /** Gets how many pages of VeteranStatuses by ParentVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatuses.
         *  @return An Array of VeteranStatuses. */
        VeteranStatus.getByParentVeteranStatusIDPageCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Returns the related ParentVeteranStatus based on the unique ID of the related VeteranStatus.
         *  @return A single VeteranStatus, or null. */
        VeteranStatus.prototype.getParentVeteranStatus = function (api, callback) {
            VeteranStatus.getParentVeteranStatusForVeteranStatus(this.id, api, callback);
        };
        /** Returns the related ParentVeteranStatus based on the unique ID of the related VeteranStatus.
         *  @param veteranStatusID The ID of the VeteranStatus to retrieve.
         *  @return A single VeteranStatus, or null. */
        VeteranStatus.getParentVeteranStatusForVeteranStatus = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        VeteranStatus.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            name: new hiw.PropertyMap("name", "Name"),
            parentVeteranStatusID: new hiw.PropertyMap("parentVeteranStatusID", "ParentVeteranStatusID"),
            dimensionKey: new hiw.PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new hiw.PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new hiw.PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder"),
            depth: new hiw.PropertyMap("depth", "Depth")
        };
        return VeteranStatus;
    })(hiw.ServiceDataObject);
    hiw.VeteranStatus = VeteranStatus;
    /** Contains properties and static functionality for the VeteranStatusRelation type. */
    var VeteranStatusRelation = (function (_super) {
        __extends(VeteranStatusRelation, _super);
        function VeteranStatusRelation() {
            _super.apply(this, arguments);
            this.id = null;
            this.ancestorVeteranStatusID = null;
            this.descendantVeteranStatusID = null;
            this.hops = null;
        }
        VeteranStatusRelation.prototype.getFields = function () {
            return VeteranStatusRelation.Fields;
        };
        /** Gets a list of all of the VeteranStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of VeteranStatusRelations */
        VeteranStatusRelation.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many VeteranStatusRelations exist. */
        VeteranStatusRelation.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the VeteranStatusRelations method. */
        VeteranStatusRelation.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the VeteranStatusRelation with the specified primary key.
         *  @param id The primary key of the VeteranStatusRelation to return.
         *  @return The matching VeteranStatusRelation, if one exists, or null. */
        VeteranStatusRelation.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of VeteranStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All VeteranStatusRelations which match the provided filter. */
        VeteranStatusRelation.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many VeteranStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of VeteranStatusRelations which match the provided filter. */
        VeteranStatusRelation.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of VeteranStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of VeteranStatusRelationswhich match the provided filter. */
        VeteranStatusRelation.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Gets VeteranStatusRelations by AncestorVeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        VeteranStatusRelation.getByAncestorVeteranStatusID = function (veteranStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID }, null, page);
        };
        /** Gets how many VeteranStatusRelations by AncestorVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        VeteranStatusRelation.getByAncestorVeteranStatusIDCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Gets how many pages of VeteranStatusRelations by AncestorVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        VeteranStatusRelation.getByAncestorVeteranStatusIDPageCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Returns the related AncestorVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @return A single VeteranStatusRelation, or null. */
        VeteranStatusRelation.prototype.getAncestorVeteranStatus = function (api, callback) {
            VeteranStatusRelation.getAncestorVeteranStatusForVeteranStatusRelation(this.id, api, callback);
        };
        /** Returns the related AncestorVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @param veteranStatusRelationID The ID of the VeteranStatusRelation to retrieve.
         *  @return A single VeteranStatusRelation, or null. */
        VeteranStatusRelation.getAncestorVeteranStatusForVeteranStatusRelation = function (veteranStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusRelationID: veteranStatusRelationID });
        };
        /** Gets VeteranStatusRelations by DescendantVeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        VeteranStatusRelation.getByDescendantVeteranStatusID = function (veteranStatusID, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID }, null, page);
        };
        /** Gets how many VeteranStatusRelations by DescendantVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        VeteranStatusRelation.getByDescendantVeteranStatusIDCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Gets how many pages of VeteranStatusRelations by DescendantVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        VeteranStatusRelation.getByDescendantVeteranStatusIDPageCount = function (veteranStatusID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusID: veteranStatusID });
        };
        /** Returns the related DescendantVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @return A single VeteranStatusRelation, or null. */
        VeteranStatusRelation.prototype.getDescendantVeteranStatus = function (api, callback) {
            VeteranStatusRelation.getDescendantVeteranStatusForVeteranStatusRelation(this.id, api, callback);
        };
        /** Returns the related DescendantVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @param veteranStatusRelationID The ID of the VeteranStatusRelation to retrieve.
         *  @return A single VeteranStatusRelation, or null. */
        VeteranStatusRelation.getDescendantVeteranStatusForVeteranStatusRelation = function (veteranStatusRelationID, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { veteranStatusRelationID: veteranStatusRelationID });
        };
        VeteranStatusRelation.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            ancestorVeteranStatusID: new hiw.PropertyMap("ancestorVeteranStatusID", "AncestorVeteranStatusID"),
            descendantVeteranStatusID: new hiw.PropertyMap("descendantVeteranStatusID", "DescendantVeteranStatusID"),
            hops: new hiw.PropertyMap("hops", "Hops")
        };
        return VeteranStatusRelation;
    })(hiw.ServiceDataObject);
    hiw.VeteranStatusRelation = VeteranStatusRelation;
    /** Contains properties and static functionality for the Year type. */
    var Year = (function (_super) {
        __extends(Year, _super);
        function Year() {
            _super.apply(this, arguments);
            this.id = null;
            this.fullYear = null;
            this.twoDigitYear = null;
            this.sortOrder = null;
        }
        Year.prototype.getFields = function () {
            return Year.Fields;
        };
        /** Gets a list of all of the Years in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Years */
        Year.getAll = function (api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, null, page);
        };
        /** Gets how many Years exist. */
        Year.getAllCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets how many pages of data exist for the Years method. */
        Year.getAllPageCount = function (api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback);
        };
        /** Gets the Year with the specified primary key.
         *  @param id The primary key of the Year to return.
         *  @return The matching Year, if one exists, or null. */
        Year.getByID = function (id, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, { id: id });
        };
        /** Returns a filtered collection of Years based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Years which match the provided filter. */
        Year.filter = function (filter, api, callback, page) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON(page));
        };
        /** Returns a count of how many Years exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Years which match the provided filter. */
        Year.filterCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        /** Returns a count of how many pages of Years exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Yearswhich match the provided filter. */
        Year.filterPageCount = function (filter, api, callback) {
            api.executeEndpoint(hiw.Endpoint.fromSelf(), callback, null, filter.toJSON());
        };
        Year.Fields = {
            id: new hiw.PropertyMap("id", "ID"),
            fullYear: new hiw.PropertyMap("fullYear", "FullYear"),
            twoDigitYear: new hiw.PropertyMap("twoDigitYear", "TwoDigitYear"),
            sortOrder: new hiw.PropertyMap("sortOrder", "SortOrder")
        };
        return Year;
    })(hiw.ServiceDataObject);
    hiw.Year = Year;
})(hiw || (hiw = {}));
//# sourceMappingURL=DataObjects.Generated.js.map