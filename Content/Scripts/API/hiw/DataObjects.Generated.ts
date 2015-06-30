
module hiw {
    /** Contains properties and static functionality for the Age type. */
    export class BaseAge extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentAgeID: new PropertyMap("parentAgeID", "ParentAgeID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentAgeID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseAge.Fields; }

        /** Gets a list of all of the Ages in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Ages */
        public static getAll(api: API, callback: IAPICallback<Array<Age>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Age>>(Endpoint.fromSelf<Array<Age>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Ages exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Ages method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Age with the specified primary key.
         *  @param id The primary key of the Age to return.
         *  @return The matching Age, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Age>): Async {
            return api.executeEndpoint<Age>(Endpoint.fromSelf<Age>(), callback, { id: id });
        }

        /** Returns a filtered collection of Ages based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Ages which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Age>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Age>>(Endpoint.fromSelf<Array<Age>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Ages exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Ages which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Ages exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Ageswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Ages by ParentAgeID.
         *  @return An Array of Ages. */
        public getAges(api: API, callback: IAPICallback<Array<Age>>, page?: number, pageSize?: number): Async {
            return Age.getByParentAgeID(this.id, api, callback, page, pageSize);
        }

        /** Gets Ages by ParentAgeID.
         *  @param ageID The ID of the Age for which to retrieve the child Ages.
         *  @return An Array of Ages. */
        public static getByParentAgeID(ageID: number, api: API, callback: IAPICallback<Array<Age>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Age>>(Endpoint.fromSelf<Array<Age>>(), callback, { ageID: ageID }, null, page, pageSize);
        }

        /** Gets how many Ages by ParentAgeID exist. 
         *  @return An Array of Ages. */
        public getAgesCount(api: API, callback: IAPICallback<number>): Async {
            return Age.getByParentAgeIDCount(this.id, api, callback);
        }

        /** Gets how many Ages by ParentAgeID exist. 
         *  @param ageID The ID of the Age for which to retrieve the child Ages.
         *  @return An Array of Ages. */
        public static getByParentAgeIDCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Gets how many pages of Ages by ParentAgeID exist.
         *  @return An Array of Ages. */
        public getAgesPageCount(api: API, callback: IAPICallback<number>): Async {
            return Age.getByParentAgeIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of Ages by ParentAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child Ages.
         *  @return An Array of Ages. */
        public static getByParentAgeIDPageCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Returns the related ParentAge based on the unique ID of the related Age.
         *  @return A single Age, or null. */
        public getParentAge(api: API, callback: IAPICallback<Age>): Async {
            return Age.getParentAgeForAge(this.id, api, callback);
        }

        /** Returns the related ParentAge based on the unique ID of the related Age.
         *  @param ageID The ID of the Age to retrieve.
         *  @return A single Age, or null. */
        public static getParentAgeForAge(ageID: number, api: API, callback: IAPICallback<Age>): Async {
            return api.executeEndpoint<Age>(Endpoint.fromSelf<Age>(), callback, { ageID: ageID });
        }
    }
    
    export class Age extends BaseAge { }

    /** Contains properties and static functionality for the AgeRelation type. */
    export class BaseAgeRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorAgeID: new PropertyMap("ancestorAgeID", "AncestorAgeID"),
            descendantAgeID: new PropertyMap("descendantAgeID", "DescendantAgeID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorAgeID: number = null;
        public descendantAgeID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseAgeRelation.Fields; }

        /** Gets a list of all of the AgeRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of AgeRelations */
        public static getAll(api: API, callback: IAPICallback<Array<AgeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<AgeRelation>>(Endpoint.fromSelf<Array<AgeRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many AgeRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the AgeRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the AgeRelation with the specified primary key.
         *  @param id The primary key of the AgeRelation to return.
         *  @return The matching AgeRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<AgeRelation>): Async {
            return api.executeEndpoint<AgeRelation>(Endpoint.fromSelf<AgeRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of AgeRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All AgeRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<AgeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<AgeRelation>>(Endpoint.fromSelf<Array<AgeRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many AgeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of AgeRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of AgeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of AgeRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets AgeRelations by AncestorAgeID.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        public static getByAncestorAgeID(ageID: number, api: API, callback: IAPICallback<Array<AgeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<AgeRelation>>(Endpoint.fromSelf<Array<AgeRelation>>(), callback, { ageID: ageID }, null, page, pageSize);
        }

        /** Gets how many AgeRelations by AncestorAgeID exist. 
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        public static getByAncestorAgeIDCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Gets how many pages of AgeRelations by AncestorAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        public static getByAncestorAgeIDPageCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Returns the related AncestorAge based on the unique ID of the related AgeRelation.
         *  @return A single AgeRelation, or null. */
        public getAncestorAge(api: API, callback: IAPICallback<Age>): Async {
            return AgeRelation.getAncestorAgeForAgeRelation(this.id, api, callback);
        }

        /** Returns the related AncestorAge based on the unique ID of the related AgeRelation.
         *  @param ageRelationID The ID of the AgeRelation to retrieve.
         *  @return A single AgeRelation, or null. */
        public static getAncestorAgeForAgeRelation(ageRelationID: number, api: API, callback: IAPICallback<Age>): Async {
            return api.executeEndpoint<Age>(Endpoint.fromSelf<Age>(), callback, { ageRelationID: ageRelationID });
        }

        /** Gets AgeRelations by DescendantAgeID.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        public static getByDescendantAgeID(ageID: number, api: API, callback: IAPICallback<Array<AgeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<AgeRelation>>(Endpoint.fromSelf<Array<AgeRelation>>(), callback, { ageID: ageID }, null, page, pageSize);
        }

        /** Gets how many AgeRelations by DescendantAgeID exist. 
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        public static getByDescendantAgeIDCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Gets how many pages of AgeRelations by DescendantAgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child AgeRelations.
         *  @return An Array of AgeRelations. */
        public static getByDescendantAgeIDPageCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Returns the related DescendantAge based on the unique ID of the related AgeRelation.
         *  @return A single AgeRelation, or null. */
        public getDescendantAge(api: API, callback: IAPICallback<Age>): Async {
            return AgeRelation.getDescendantAgeForAgeRelation(this.id, api, callback);
        }

        /** Returns the related DescendantAge based on the unique ID of the related AgeRelation.
         *  @param ageRelationID The ID of the AgeRelation to retrieve.
         *  @return A single AgeRelation, or null. */
        public static getDescendantAgeForAgeRelation(ageRelationID: number, api: API, callback: IAPICallback<Age>): Async {
            return api.executeEndpoint<Age>(Endpoint.fromSelf<Age>(), callback, { ageRelationID: ageRelationID });
        }
    }
    
    export class AgeRelation extends BaseAgeRelation { }

    /** Contains properties and static functionality for the CharacteristicOfSchoolOrStudent type. */
    export class BaseCharacteristicOfSchoolOrStudent extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentCharacteristicOfSchoolOrStudentID: new PropertyMap("parentCharacteristicOfSchoolOrStudentID", "ParentCharacteristicOfSchoolOrStudentID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentCharacteristicOfSchoolOrStudentID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseCharacteristicOfSchoolOrStudent.Fields; }

        /** Gets a list of all of the CharacteristicOfSchoolOrStudents in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CharacteristicOfSchoolOrStudents */
        public static getAll(api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudent>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CharacteristicOfSchoolOrStudent>>(Endpoint.fromSelf<Array<CharacteristicOfSchoolOrStudent>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many CharacteristicOfSchoolOrStudents exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the CharacteristicOfSchoolOrStudents method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the CharacteristicOfSchoolOrStudent with the specified primary key.
         *  @param id The primary key of the CharacteristicOfSchoolOrStudent to return.
         *  @return The matching CharacteristicOfSchoolOrStudent, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return api.executeEndpoint<CharacteristicOfSchoolOrStudent>(Endpoint.fromSelf<CharacteristicOfSchoolOrStudent>(), callback, { id: id });
        }

        /** Returns a filtered collection of CharacteristicOfSchoolOrStudents based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CharacteristicOfSchoolOrStudents which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudent>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CharacteristicOfSchoolOrStudent>>(Endpoint.fromSelf<Array<CharacteristicOfSchoolOrStudent>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many CharacteristicOfSchoolOrStudents exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CharacteristicOfSchoolOrStudents which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of CharacteristicOfSchoolOrStudents exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CharacteristicOfSchoolOrStudentswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        public getCharacteristicOfSchoolOrStudents(api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudent>>, page?: number, pageSize?: number): Async {
            return CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentID(this.id, api, callback, page, pageSize);
        }

        /** Gets CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudents.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        public static getByParentCharacteristicOfSchoolOrStudentID(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudent>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CharacteristicOfSchoolOrStudent>>(Endpoint.fromSelf<Array<CharacteristicOfSchoolOrStudent>>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page, pageSize);
        }

        /** Gets how many CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist. 
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        public getCharacteristicOfSchoolOrStudentsCount(api: API, callback: IAPICallback<number>): Async {
            return CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentIDCount(this.id, api, callback);
        }

        /** Gets how many CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist. 
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudents.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        public static getByParentCharacteristicOfSchoolOrStudentIDCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Gets how many pages of CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        public getCharacteristicOfSchoolOrStudentsPageCount(api: API, callback: IAPICallback<number>): Async {
            return CharacteristicOfSchoolOrStudent.getByParentCharacteristicOfSchoolOrStudentIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of CharacteristicOfSchoolOrStudents by ParentCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudents.
         *  @return An Array of CharacteristicOfSchoolOrStudents. */
        public static getByParentCharacteristicOfSchoolOrStudentIDPageCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Returns the related ParentCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudent.
         *  @return A single CharacteristicOfSchoolOrStudent, or null. */
        public getParentCharacteristicOfSchoolOrStudent(api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return CharacteristicOfSchoolOrStudent.getParentCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudent(this.id, api, callback);
        }

        /** Returns the related ParentCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudent.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent to retrieve.
         *  @return A single CharacteristicOfSchoolOrStudent, or null. */
        public static getParentCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudent(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return api.executeEndpoint<CharacteristicOfSchoolOrStudent>(Endpoint.fromSelf<CharacteristicOfSchoolOrStudent>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }
    }
    
    export class CharacteristicOfSchoolOrStudent extends BaseCharacteristicOfSchoolOrStudent { }

    /** Contains properties and static functionality for the CharacteristicOfSchoolOrStudentRelation type. */
    export class BaseCharacteristicOfSchoolOrStudentRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorCharacteristicOfSchoolOrStudentID: new PropertyMap("ancestorCharacteristicOfSchoolOrStudentID", "AncestorCharacteristicOfSchoolOrStudentID"),
            descendantCharacteristicOfSchoolOrStudentID: new PropertyMap("descendantCharacteristicOfSchoolOrStudentID", "DescendantCharacteristicOfSchoolOrStudentID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorCharacteristicOfSchoolOrStudentID: number = null;
        public descendantCharacteristicOfSchoolOrStudentID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseCharacteristicOfSchoolOrStudentRelation.Fields; }

        /** Gets a list of all of the CharacteristicOfSchoolOrStudentRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CharacteristicOfSchoolOrStudentRelations */
        public static getAll(api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CharacteristicOfSchoolOrStudentRelation>>(Endpoint.fromSelf<Array<CharacteristicOfSchoolOrStudentRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many CharacteristicOfSchoolOrStudentRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the CharacteristicOfSchoolOrStudentRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the CharacteristicOfSchoolOrStudentRelation with the specified primary key.
         *  @param id The primary key of the CharacteristicOfSchoolOrStudentRelation to return.
         *  @return The matching CharacteristicOfSchoolOrStudentRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudentRelation>): Async {
            return api.executeEndpoint<CharacteristicOfSchoolOrStudentRelation>(Endpoint.fromSelf<CharacteristicOfSchoolOrStudentRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of CharacteristicOfSchoolOrStudentRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CharacteristicOfSchoolOrStudentRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CharacteristicOfSchoolOrStudentRelation>>(Endpoint.fromSelf<Array<CharacteristicOfSchoolOrStudentRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many CharacteristicOfSchoolOrStudentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CharacteristicOfSchoolOrStudentRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of CharacteristicOfSchoolOrStudentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CharacteristicOfSchoolOrStudentRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets CharacteristicOfSchoolOrStudentRelations by AncestorCharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        public static getByAncestorCharacteristicOfSchoolOrStudentID(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CharacteristicOfSchoolOrStudentRelation>>(Endpoint.fromSelf<Array<CharacteristicOfSchoolOrStudentRelation>>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page, pageSize);
        }

        /** Gets how many CharacteristicOfSchoolOrStudentRelations by AncestorCharacteristicOfSchoolOrStudentID exist. 
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        public static getByAncestorCharacteristicOfSchoolOrStudentIDCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Gets how many pages of CharacteristicOfSchoolOrStudentRelations by AncestorCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        public static getByAncestorCharacteristicOfSchoolOrStudentIDPageCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Returns the related AncestorCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        public getAncestorCharacteristicOfSchoolOrStudent(api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return CharacteristicOfSchoolOrStudentRelation.getAncestorCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation(this.id, api, callback);
        }

        /** Returns the related AncestorCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @param characteristicOfSchoolOrStudentRelationID The ID of the CharacteristicOfSchoolOrStudentRelation to retrieve.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        public static getAncestorCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation(characteristicOfSchoolOrStudentRelationID: number, api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return api.executeEndpoint<CharacteristicOfSchoolOrStudent>(Endpoint.fromSelf<CharacteristicOfSchoolOrStudent>(), callback, { characteristicOfSchoolOrStudentRelationID: characteristicOfSchoolOrStudentRelationID });
        }

        /** Gets CharacteristicOfSchoolOrStudentRelations by DescendantCharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        public static getByDescendantCharacteristicOfSchoolOrStudentID(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<Array<CharacteristicOfSchoolOrStudentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CharacteristicOfSchoolOrStudentRelation>>(Endpoint.fromSelf<Array<CharacteristicOfSchoolOrStudentRelation>>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page, pageSize);
        }

        /** Gets how many CharacteristicOfSchoolOrStudentRelations by DescendantCharacteristicOfSchoolOrStudentID exist. 
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        public static getByDescendantCharacteristicOfSchoolOrStudentIDCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Gets how many pages of CharacteristicOfSchoolOrStudentRelations by DescendantCharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child CharacteristicOfSchoolOrStudentRelations.
         *  @return An Array of CharacteristicOfSchoolOrStudentRelations. */
        public static getByDescendantCharacteristicOfSchoolOrStudentIDPageCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Returns the related DescendantCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        public getDescendantCharacteristicOfSchoolOrStudent(api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return CharacteristicOfSchoolOrStudentRelation.getDescendantCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation(this.id, api, callback);
        }

        /** Returns the related DescendantCharacteristicOfSchoolOrStudent based on the unique ID of the related CharacteristicOfSchoolOrStudentRelation.
         *  @param characteristicOfSchoolOrStudentRelationID The ID of the CharacteristicOfSchoolOrStudentRelation to retrieve.
         *  @return A single CharacteristicOfSchoolOrStudentRelation, or null. */
        public static getDescendantCharacteristicOfSchoolOrStudentForCharacteristicOfSchoolOrStudentRelation(characteristicOfSchoolOrStudentRelationID: number, api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return api.executeEndpoint<CharacteristicOfSchoolOrStudent>(Endpoint.fromSelf<CharacteristicOfSchoolOrStudent>(), callback, { characteristicOfSchoolOrStudentRelationID: characteristicOfSchoolOrStudentRelationID });
        }
    }
    
    export class CharacteristicOfSchoolOrStudentRelation extends BaseCharacteristicOfSchoolOrStudentRelation { }

    /** Contains properties and static functionality for the CountryOfBirth type. */
    export class BaseCountryOfBirth extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentCountryOfBirthID: new PropertyMap("parentCountryOfBirthID", "ParentCountryOfBirthID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentCountryOfBirthID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseCountryOfBirth.Fields; }

        /** Gets a list of all of the CountryOfBirths in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CountryOfBirths */
        public static getAll(api: API, callback: IAPICallback<Array<CountryOfBirth>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CountryOfBirth>>(Endpoint.fromSelf<Array<CountryOfBirth>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many CountryOfBirths exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the CountryOfBirths method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the CountryOfBirth with the specified primary key.
         *  @param id The primary key of the CountryOfBirth to return.
         *  @return The matching CountryOfBirth, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return api.executeEndpoint<CountryOfBirth>(Endpoint.fromSelf<CountryOfBirth>(), callback, { id: id });
        }

        /** Returns a filtered collection of CountryOfBirths based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CountryOfBirths which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<CountryOfBirth>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CountryOfBirth>>(Endpoint.fromSelf<Array<CountryOfBirth>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many CountryOfBirths exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CountryOfBirths which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of CountryOfBirths exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CountryOfBirthswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets CountryOfBirths by ParentCountryOfBirthID.
         *  @return An Array of CountryOfBirths. */
        public getCountryOfBirths(api: API, callback: IAPICallback<Array<CountryOfBirth>>, page?: number, pageSize?: number): Async {
            return CountryOfBirth.getByParentCountryOfBirthID(this.id, api, callback, page, pageSize);
        }

        /** Gets CountryOfBirths by ParentCountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirths.
         *  @return An Array of CountryOfBirths. */
        public static getByParentCountryOfBirthID(countryOfBirthID: number, api: API, callback: IAPICallback<Array<CountryOfBirth>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CountryOfBirth>>(Endpoint.fromSelf<Array<CountryOfBirth>>(), callback, { countryOfBirthID: countryOfBirthID }, null, page, pageSize);
        }

        /** Gets how many CountryOfBirths by ParentCountryOfBirthID exist. 
         *  @return An Array of CountryOfBirths. */
        public getCountryOfBirthsCount(api: API, callback: IAPICallback<number>): Async {
            return CountryOfBirth.getByParentCountryOfBirthIDCount(this.id, api, callback);
        }

        /** Gets how many CountryOfBirths by ParentCountryOfBirthID exist. 
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirths.
         *  @return An Array of CountryOfBirths. */
        public static getByParentCountryOfBirthIDCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Gets how many pages of CountryOfBirths by ParentCountryOfBirthID exist.
         *  @return An Array of CountryOfBirths. */
        public getCountryOfBirthsPageCount(api: API, callback: IAPICallback<number>): Async {
            return CountryOfBirth.getByParentCountryOfBirthIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of CountryOfBirths by ParentCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirths.
         *  @return An Array of CountryOfBirths. */
        public static getByParentCountryOfBirthIDPageCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Returns the related ParentCountryOfBirth based on the unique ID of the related CountryOfBirth.
         *  @return A single CountryOfBirth, or null. */
        public getParentCountryOfBirth(api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return CountryOfBirth.getParentCountryOfBirthForCountryOfBirth(this.id, api, callback);
        }

        /** Returns the related ParentCountryOfBirth based on the unique ID of the related CountryOfBirth.
         *  @param countryOfBirthID The ID of the CountryOfBirth to retrieve.
         *  @return A single CountryOfBirth, or null. */
        public static getParentCountryOfBirthForCountryOfBirth(countryOfBirthID: number, api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return api.executeEndpoint<CountryOfBirth>(Endpoint.fromSelf<CountryOfBirth>(), callback, { countryOfBirthID: countryOfBirthID });
        }
    }
    
    export class CountryOfBirth extends BaseCountryOfBirth { }

    /** Contains properties and static functionality for the CountryOfBirthRelation type. */
    export class BaseCountryOfBirthRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorCountryOfBirthID: new PropertyMap("ancestorCountryOfBirthID", "AncestorCountryOfBirthID"),
            descendantCountryOfBirthID: new PropertyMap("descendantCountryOfBirthID", "DescendantCountryOfBirthID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorCountryOfBirthID: number = null;
        public descendantCountryOfBirthID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseCountryOfBirthRelation.Fields; }

        /** Gets a list of all of the CountryOfBirthRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of CountryOfBirthRelations */
        public static getAll(api: API, callback: IAPICallback<Array<CountryOfBirthRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CountryOfBirthRelation>>(Endpoint.fromSelf<Array<CountryOfBirthRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many CountryOfBirthRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the CountryOfBirthRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the CountryOfBirthRelation with the specified primary key.
         *  @param id The primary key of the CountryOfBirthRelation to return.
         *  @return The matching CountryOfBirthRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<CountryOfBirthRelation>): Async {
            return api.executeEndpoint<CountryOfBirthRelation>(Endpoint.fromSelf<CountryOfBirthRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of CountryOfBirthRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All CountryOfBirthRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<CountryOfBirthRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CountryOfBirthRelation>>(Endpoint.fromSelf<Array<CountryOfBirthRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many CountryOfBirthRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of CountryOfBirthRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of CountryOfBirthRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of CountryOfBirthRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets CountryOfBirthRelations by AncestorCountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        public static getByAncestorCountryOfBirthID(countryOfBirthID: number, api: API, callback: IAPICallback<Array<CountryOfBirthRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CountryOfBirthRelation>>(Endpoint.fromSelf<Array<CountryOfBirthRelation>>(), callback, { countryOfBirthID: countryOfBirthID }, null, page, pageSize);
        }

        /** Gets how many CountryOfBirthRelations by AncestorCountryOfBirthID exist. 
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        public static getByAncestorCountryOfBirthIDCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Gets how many pages of CountryOfBirthRelations by AncestorCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        public static getByAncestorCountryOfBirthIDPageCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Returns the related AncestorCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @return A single CountryOfBirthRelation, or null. */
        public getAncestorCountryOfBirth(api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return CountryOfBirthRelation.getAncestorCountryOfBirthForCountryOfBirthRelation(this.id, api, callback);
        }

        /** Returns the related AncestorCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @param countryOfBirthRelationID The ID of the CountryOfBirthRelation to retrieve.
         *  @return A single CountryOfBirthRelation, or null. */
        public static getAncestorCountryOfBirthForCountryOfBirthRelation(countryOfBirthRelationID: number, api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return api.executeEndpoint<CountryOfBirth>(Endpoint.fromSelf<CountryOfBirth>(), callback, { countryOfBirthRelationID: countryOfBirthRelationID });
        }

        /** Gets CountryOfBirthRelations by DescendantCountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        public static getByDescendantCountryOfBirthID(countryOfBirthID: number, api: API, callback: IAPICallback<Array<CountryOfBirthRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<CountryOfBirthRelation>>(Endpoint.fromSelf<Array<CountryOfBirthRelation>>(), callback, { countryOfBirthID: countryOfBirthID }, null, page, pageSize);
        }

        /** Gets how many CountryOfBirthRelations by DescendantCountryOfBirthID exist. 
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        public static getByDescendantCountryOfBirthIDCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Gets how many pages of CountryOfBirthRelations by DescendantCountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child CountryOfBirthRelations.
         *  @return An Array of CountryOfBirthRelations. */
        public static getByDescendantCountryOfBirthIDPageCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Returns the related DescendantCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @return A single CountryOfBirthRelation, or null. */
        public getDescendantCountryOfBirth(api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return CountryOfBirthRelation.getDescendantCountryOfBirthForCountryOfBirthRelation(this.id, api, callback);
        }

        /** Returns the related DescendantCountryOfBirth based on the unique ID of the related CountryOfBirthRelation.
         *  @param countryOfBirthRelationID The ID of the CountryOfBirthRelation to retrieve.
         *  @return A single CountryOfBirthRelation, or null. */
        public static getDescendantCountryOfBirthForCountryOfBirthRelation(countryOfBirthRelationID: number, api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return api.executeEndpoint<CountryOfBirth>(Endpoint.fromSelf<CountryOfBirth>(), callback, { countryOfBirthRelationID: countryOfBirthRelationID });
        }
    }
    
    export class CountryOfBirthRelation extends BaseCountryOfBirthRelation { }

    /** Contains properties and static functionality for the DataCategory type. */
    export class BaseDataCategory extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            rank: new PropertyMap("rank", "Rank"),
            rankName: new PropertyMap("rankName", "RankName"),
            parentDataCategoryID: new PropertyMap("parentDataCategoryID", "ParentDataCategoryID"),
            number: new PropertyMap("number", "Number"),
            acronym: new PropertyMap("acronym", "Acronym"),
            header: new PropertyMap("header", "Header"),
            name: new PropertyMap("name", "Name"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            description: new PropertyMap("description", "Description"),
            initiativeID: new PropertyMap("initiativeID", "InitiativeID"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            categoryGraph: new PropertyMap("categoryGraph", "CategoryGraph"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate")
        };

        public id: number = null;
        public rank: number = null;
        public rankName: string = null;
        public parentDataCategoryID: number = null;
        public number: string = null;
        public acronym: string = null;
        public header: string = null;
        public name: string = null;
        public sortOrder: number = null;
        public description: string = null;
        public initiativeID: number = null;
        public treeGraph: string = null;
        public categoryGraph: string = null;
        public modifyDate: Date = null;

        protected getFields(): any { return BaseDataCategory.Fields; }

        /** Gets a list of all of the DataCategories in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataCategories */
        public static getAll(api: API, callback: IAPICallback<Array<DataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategory>>(Endpoint.fromSelf<Array<DataCategory>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
        }

        /** Gets how many DataCategories exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DataCategories method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DataCategory with the specified primary key.
         *  @param id The primary key of the DataCategory to return.
         *  @return The matching DataCategory, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DataCategory>): Async {
            return api.executeEndpoint<DataCategory>(Endpoint.fromSelf<DataCategory>(), callback, { id: id });
        }

        /** Returns a filtered collection of DataCategories based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataCategories which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategory>>(Endpoint.fromSelf<Array<DataCategory>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataCategories which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataCategorieswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DataCategories by ParentDataCategoryID.
         *  @return An Array of DataCategories. */
        public getParentDataCategories(api: API, callback: IAPICallback<Array<DataCategory>>, page?: number, pageSize?: number): Async {
            return DataCategory.getByParentDataCategoryID(this.id, api, callback, page, pageSize);
        }

        /** Gets DataCategories by ParentDataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        public static getByParentDataCategoryID(dataCategoryID: number, api: API, callback: IAPICallback<Array<DataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategory>>(Endpoint.fromSelf<Array<DataCategory>>(), callback, { dataCategoryID: dataCategoryID }, null, page, pageSize);
        }

        /** Gets how many DataCategories by ParentDataCategoryID exist. 
         *  @return An Array of DataCategories. */
        public getParentDataCategoriesCount(api: API, callback: IAPICallback<number>): Async {
            return DataCategory.getByParentDataCategoryIDCount(this.id, api, callback);
        }

        /** Gets how many DataCategories by ParentDataCategoryID exist. 
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        public static getByParentDataCategoryIDCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Gets how many pages of DataCategories by ParentDataCategoryID exist.
         *  @return An Array of DataCategories. */
        public getParentDataCategoriesPageCount(api: API, callback: IAPICallback<number>): Async {
            return DataCategory.getByParentDataCategoryIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of DataCategories by ParentDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        public static getByParentDataCategoryIDPageCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Returns the related ParentDataCategory based on the unique ID of the related DataCategory.
         *  @return A single DataCategory, or null. */
        public getParentDataCategory(api: API, callback: IAPICallback<DataCategory>): Async {
            return DataCategory.getParentDataCategoryForDataCategory(this.id, api, callback);
        }

        /** Returns the related ParentDataCategory based on the unique ID of the related DataCategory.
         *  @param dataCategoryID The ID of the DataCategory to retrieve.
         *  @return A single DataCategory, or null. */
        public static getParentDataCategoryForDataCategory(dataCategoryID: number, api: API, callback: IAPICallback<DataCategory>): Async {
            return api.executeEndpoint<DataCategory>(Endpoint.fromSelf<DataCategory>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Gets DataCategories by InitiativeID.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        public static getByInitiativeID(initiativeID: number, api: API, callback: IAPICallback<Array<DataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategory>>(Endpoint.fromSelf<Array<DataCategory>>(), callback, { initiativeID: initiativeID }, null, page, pageSize);
        }

        /** Gets how many DataCategories by InitiativeID exist. 
         *  @param initiativeID The ID of the Initiative for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        public static getByInitiativeIDCount(initiativeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { initiativeID: initiativeID });
        }

        /** Gets how many pages of DataCategories by InitiativeID exist.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child DataCategories.
         *  @return An Array of DataCategories. */
        public static getByInitiativeIDPageCount(initiativeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { initiativeID: initiativeID });
        }

        /** Returns the related Initiative based on the unique ID of the related DataCategory.
         *  @return A single DataCategory, or null. */
        public getInitiative(api: API, callback: IAPICallback<Initiative>): Async {
            return DataCategory.getInitiativeForDataCategory(this.id, api, callback);
        }

        /** Returns the related Initiative based on the unique ID of the related DataCategory.
         *  @param dataCategoryID The ID of the DataCategory to retrieve.
         *  @return A single DataCategory, or null. */
        public static getInitiativeForDataCategory(dataCategoryID: number, api: API, callback: IAPICallback<Initiative>): Async {
            return api.executeEndpoint<Initiative>(Endpoint.fromSelf<Initiative>(), callback, { dataCategoryID: dataCategoryID });
        }
    }
    
    export class DataCategory extends BaseDataCategory { }

    /** Contains properties and static functionality for the DataCategoryRelation type. */
    export class BaseDataCategoryRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorDataCategoryID: new PropertyMap("ancestorDataCategoryID", "AncestorDataCategoryID"),
            descendantDataCategoryID: new PropertyMap("descendantDataCategoryID", "DescendantDataCategoryID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorDataCategoryID: number = null;
        public descendantDataCategoryID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseDataCategoryRelation.Fields; }

        /** Gets a list of all of the DataCategoryRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataCategoryRelations */
        public static getAll(api: API, callback: IAPICallback<Array<DataCategoryRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategoryRelation>>(Endpoint.fromSelf<Array<DataCategoryRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DataCategoryRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DataCategoryRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DataCategoryRelation with the specified primary key.
         *  @param id The primary key of the DataCategoryRelation to return.
         *  @return The matching DataCategoryRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DataCategoryRelation>): Async {
            return api.executeEndpoint<DataCategoryRelation>(Endpoint.fromSelf<DataCategoryRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of DataCategoryRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataCategoryRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DataCategoryRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategoryRelation>>(Endpoint.fromSelf<Array<DataCategoryRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DataCategoryRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataCategoryRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DataCategoryRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataCategoryRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DataCategoryRelations by AncestorDataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        public static getByAncestorDataCategoryID(dataCategoryID: number, api: API, callback: IAPICallback<Array<DataCategoryRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategoryRelation>>(Endpoint.fromSelf<Array<DataCategoryRelation>>(), callback, { dataCategoryID: dataCategoryID }, null, page, pageSize);
        }

        /** Gets how many DataCategoryRelations by AncestorDataCategoryID exist. 
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        public static getByAncestorDataCategoryIDCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Gets how many pages of DataCategoryRelations by AncestorDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        public static getByAncestorDataCategoryIDPageCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Returns the related AncestorDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @return A single DataCategoryRelation, or null. */
        public getAncestorDataCategory(api: API, callback: IAPICallback<DataCategory>): Async {
            return DataCategoryRelation.getAncestorDataCategoryForDataCategoryRelation(this.id, api, callback);
        }

        /** Returns the related AncestorDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @param dataCategoryRelationID The ID of the DataCategoryRelation to retrieve.
         *  @return A single DataCategoryRelation, or null. */
        public static getAncestorDataCategoryForDataCategoryRelation(dataCategoryRelationID: number, api: API, callback: IAPICallback<DataCategory>): Async {
            return api.executeEndpoint<DataCategory>(Endpoint.fromSelf<DataCategory>(), callback, { dataCategoryRelationID: dataCategoryRelationID });
        }

        /** Gets DataCategoryRelations by DescendantDataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        public static getByDescendantDataCategoryID(dataCategoryID: number, api: API, callback: IAPICallback<Array<DataCategoryRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataCategoryRelation>>(Endpoint.fromSelf<Array<DataCategoryRelation>>(), callback, { dataCategoryID: dataCategoryID }, null, page, pageSize);
        }

        /** Gets how many DataCategoryRelations by DescendantDataCategoryID exist. 
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        public static getByDescendantDataCategoryIDCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Gets how many pages of DataCategoryRelations by DescendantDataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child DataCategoryRelations.
         *  @return An Array of DataCategoryRelations. */
        public static getByDescendantDataCategoryIDPageCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Returns the related DescendantDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @return A single DataCategoryRelation, or null. */
        public getDescendantDataCategory(api: API, callback: IAPICallback<DataCategory>): Async {
            return DataCategoryRelation.getDescendantDataCategoryForDataCategoryRelation(this.id, api, callback);
        }

        /** Returns the related DescendantDataCategory based on the unique ID of the related DataCategoryRelation.
         *  @param dataCategoryRelationID The ID of the DataCategoryRelation to retrieve.
         *  @return A single DataCategoryRelation, or null. */
        public static getDescendantDataCategoryForDataCategoryRelation(dataCategoryRelationID: number, api: API, callback: IAPICallback<DataCategory>): Async {
            return api.executeEndpoint<DataCategory>(Endpoint.fromSelf<DataCategory>(), callback, { dataCategoryRelationID: dataCategoryRelationID });
        }
    }
    
    export class DataCategoryRelation extends BaseDataCategoryRelation { }

    /** Contains properties and static functionality for the DataSourceDataSupplier type. */
    export class BaseDataSourceDataSupplier extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            dataSourceID: new PropertyMap("dataSourceID", "DataSourceID"),
            dataSupplierID: new PropertyMap("dataSupplierID", "DataSupplierID"),
            modificationDate: new PropertyMap("modificationDate", "ModificationDate")
        };

        public id: number = null;
        public dataSourceID: number = null;
        public dataSupplierID: number = null;
        public modificationDate: Date = null;

        protected getFields(): any { return BaseDataSourceDataSupplier.Fields; }

        /** Gets a list of all of the DataSourceDataSuppliers in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSourceDataSuppliers */
        public static getAll(api: API, callback: IAPICallback<Array<DataSourceDataSupplier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceDataSupplier>>(Endpoint.fromSelf<Array<DataSourceDataSupplier>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modificationDate = this.parseDate(this.modificationDate);
        }

        /** Gets how many DataSourceDataSuppliers exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DataSourceDataSuppliers method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DataSourceDataSupplier with the specified primary key.
         *  @param id The primary key of the DataSourceDataSupplier to return.
         *  @return The matching DataSourceDataSupplier, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DataSourceDataSupplier>): Async {
            return api.executeEndpoint<DataSourceDataSupplier>(Endpoint.fromSelf<DataSourceDataSupplier>(), callback, { id: id });
        }

        /** Returns a filtered collection of DataSourceDataSuppliers based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSourceDataSuppliers which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DataSourceDataSupplier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceDataSupplier>>(Endpoint.fromSelf<Array<DataSourceDataSupplier>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DataSourceDataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSourceDataSuppliers which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DataSourceDataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSourceDataSupplierswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DataSourceDataSuppliers by DataSourceID.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        public static getByDataSourceID(dataSourceID: number, api: API, callback: IAPICallback<Array<DataSourceDataSupplier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceDataSupplier>>(Endpoint.fromSelf<Array<DataSourceDataSupplier>>(), callback, { dataSourceID: dataSourceID }, null, page, pageSize);
        }

        /** Gets how many DataSourceDataSuppliers by DataSourceID exist. 
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        public static getByDataSourceIDCount(dataSourceID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSourceID: dataSourceID });
        }

        /** Gets how many pages of DataSourceDataSuppliers by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        public static getByDataSourceIDPageCount(dataSourceID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSourceID: dataSourceID });
        }

        /** Returns the related DataSource based on the unique ID of the related DataSourceDataSupplier.
         *  @return A single DataSourceDataSupplier, or null. */
        public getDataSource(api: API, callback: IAPICallback<DataSource>): Async {
            return DataSourceDataSupplier.getDataSourceForDataSourceDataSupplier(this.id, api, callback);
        }

        /** Returns the related DataSource based on the unique ID of the related DataSourceDataSupplier.
         *  @param dataSourceDataSupplierID The ID of the DataSourceDataSupplier to retrieve.
         *  @return A single DataSourceDataSupplier, or null. */
        public static getDataSourceForDataSourceDataSupplier(dataSourceDataSupplierID: number, api: API, callback: IAPICallback<DataSource>): Async {
            return api.executeEndpoint<DataSource>(Endpoint.fromSelf<DataSource>(), callback, { dataSourceDataSupplierID: dataSourceDataSupplierID });
        }

        /** Gets DataSourceDataSuppliers by DataSupplierID.
         *  @param dataSupplierID The ID of the DataSupplier for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        public static getByDataSupplierID(dataSupplierID: number, api: API, callback: IAPICallback<Array<DataSourceDataSupplier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceDataSupplier>>(Endpoint.fromSelf<Array<DataSourceDataSupplier>>(), callback, { dataSupplierID: dataSupplierID }, null, page, pageSize);
        }

        /** Gets how many DataSourceDataSuppliers by DataSupplierID exist. 
         *  @param dataSupplierID The ID of the DataSupplier for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        public static getByDataSupplierIDCount(dataSupplierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSupplierID: dataSupplierID });
        }

        /** Gets how many pages of DataSourceDataSuppliers by DataSupplierID exist.
         *  @param dataSupplierID The ID of the DataSupplier for which to retrieve the child DataSourceDataSuppliers.
         *  @return An Array of DataSourceDataSuppliers. */
        public static getByDataSupplierIDPageCount(dataSupplierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSupplierID: dataSupplierID });
        }

        /** Returns the related DataSupplier based on the unique ID of the related DataSourceDataSupplier.
         *  @return A single DataSourceDataSupplier, or null. */
        public getDataSupplier(api: API, callback: IAPICallback<DataSupplier>): Async {
            return DataSourceDataSupplier.getDataSupplierForDataSourceDataSupplier(this.id, api, callback);
        }

        /** Returns the related DataSupplier based on the unique ID of the related DataSourceDataSupplier.
         *  @param dataSourceDataSupplierID The ID of the DataSourceDataSupplier to retrieve.
         *  @return A single DataSourceDataSupplier, or null. */
        public static getDataSupplierForDataSourceDataSupplier(dataSourceDataSupplierID: number, api: API, callback: IAPICallback<DataSupplier>): Async {
            return api.executeEndpoint<DataSupplier>(Endpoint.fromSelf<DataSupplier>(), callback, { dataSourceDataSupplierID: dataSourceDataSupplierID });
        }
    }
    
    export class DataSourceDataSupplier extends BaseDataSourceDataSupplier { }

    /** Contains properties and static functionality for the DataSource type. */
    export class BaseDataSource extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            acronym: new PropertyMap("acronym", "Acronym"),
            dataLimitations: new PropertyMap("dataLimitations", "DataLimitations"),
            dataYearsAvailable: new PropertyMap("dataYearsAvailable", "DataYearsAvailable"),
            periodicity: new PropertyMap("periodicity", "Periodicity"),
            mode: new PropertyMap("mode", "Mode"),
            description: new PropertyMap("description", "Description"),
            shortDescription: new PropertyMap("shortDescription", "ShortDescription"),
            selectedContent: new PropertyMap("selectedContent", "SelectedContent"),
            populationCovered: new PropertyMap("populationCovered", "PopulationCovered"),
            methodology: new PropertyMap("methodology", "Methodology"),
            responseRateAndSampleSize: new PropertyMap("responseRateAndSampleSize", "ResponseRateAndSampleSize"),
            interpretationIssues: new PropertyMap("interpretationIssues", "InterpretationIssues"),
            suppressionCriteria: new PropertyMap("suppressionCriteria", "SuppressionCriteria"),
            references1: new PropertyMap("references1", "References1"),
            references2: new PropertyMap("references2", "References2"),
            references3: new PropertyMap("references3", "References3"),
            references4: new PropertyMap("references4", "References4"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate"),
            showMe: new PropertyMap("showMe", "ShowMe")
        };

        public id: number = null;
        public name: string = null;
        public acronym: string = null;
        public dataLimitations: string = null;
        public dataYearsAvailable: string = null;
        public periodicity: string = null;
        public mode: string = null;
        public description: string = null;
        public shortDescription: string = null;
        public selectedContent: string = null;
        public populationCovered: string = null;
        public methodology: string = null;
        public responseRateAndSampleSize: string = null;
        public interpretationIssues: string = null;
        public suppressionCriteria: string = null;
        public references1: string = null;
        public references2: string = null;
        public references3: string = null;
        public references4: string = null;
        public sortOrder: number = null;
        public modifyDate: Date = null;
        public showMe: boolean = null;

        protected getFields(): any { return BaseDataSource.Fields; }

        /** Gets a list of all of the DataSources in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSources */
        public static getAll(api: API, callback: IAPICallback<Array<DataSource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSource>>(Endpoint.fromSelf<Array<DataSource>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
        }

        /** Gets how many DataSources exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DataSources method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DataSource with the specified primary key.
         *  @param id The primary key of the DataSource to return.
         *  @return The matching DataSource, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DataSource>): Async {
            return api.executeEndpoint<DataSource>(Endpoint.fromSelf<DataSource>(), callback, { id: id });
        }

        /** Returns a filtered collection of DataSources based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSources which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DataSource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSource>>(Endpoint.fromSelf<Array<DataSource>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSources which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSourceswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class DataSource extends BaseDataSource { }

    /** Contains properties and static functionality for the DataSourceURL type. */
    export class BaseDataSourceURL extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            dataSourceID: new PropertyMap("dataSourceID", "DataSourceID"),
            urlID: new PropertyMap("urlID", "UrlID"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public dataSourceID: number = null;
        public urlID: number = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseDataSourceURL.Fields; }

        /** Gets a list of all of the DataSourceURLs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSourceURLs */
        public static getAll(api: API, callback: IAPICallback<Array<DataSourceURL>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceURL>>(Endpoint.fromSelf<Array<DataSourceURL>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DataSourceURLs exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DataSourceURLs method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DataSourceURL with the specified primary key.
         *  @param id The primary key of the DataSourceURL to return.
         *  @return The matching DataSourceURL, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DataSourceURL>): Async {
            return api.executeEndpoint<DataSourceURL>(Endpoint.fromSelf<DataSourceURL>(), callback, { id: id });
        }

        /** Returns a filtered collection of DataSourceURLs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSourceURLs which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DataSourceURL>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceURL>>(Endpoint.fromSelf<Array<DataSourceURL>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DataSourceURLs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSourceURLs which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DataSourceURLs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSourceURLswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DataSourceURLs by DataSourceID.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        public static getByDataSourceID(dataSourceID: number, api: API, callback: IAPICallback<Array<DataSourceURL>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceURL>>(Endpoint.fromSelf<Array<DataSourceURL>>(), callback, { dataSourceID: dataSourceID }, null, page, pageSize);
        }

        /** Gets how many DataSourceURLs by DataSourceID exist. 
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        public static getByDataSourceIDCount(dataSourceID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSourceID: dataSourceID });
        }

        /** Gets how many pages of DataSourceURLs by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        public static getByDataSourceIDPageCount(dataSourceID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSourceID: dataSourceID });
        }

        /** Returns the related DataSource based on the unique ID of the related DataSourceURL.
         *  @return A single DataSourceURL, or null. */
        public getDataSource(api: API, callback: IAPICallback<DataSource>): Async {
            return DataSourceURL.getDataSourceForDataSourceURL(this.id, api, callback);
        }

        /** Returns the related DataSource based on the unique ID of the related DataSourceURL.
         *  @param dataSourceURLID The ID of the DataSourceURL to retrieve.
         *  @return A single DataSourceURL, or null. */
        public static getDataSourceForDataSourceURL(dataSourceURLID: number, api: API, callback: IAPICallback<DataSource>): Async {
            return api.executeEndpoint<DataSource>(Endpoint.fromSelf<DataSource>(), callback, { dataSourceURLID: dataSourceURLID });
        }

        /** Gets DataSourceURLs by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        public static getByUrlID(urlID: number, api: API, callback: IAPICallback<Array<DataSourceURL>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSourceURL>>(Endpoint.fromSelf<Array<DataSourceURL>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many DataSourceURLs by UrlID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        public static getByUrlIDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of DataSourceURLs by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child DataSourceURLs.
         *  @return An Array of DataSourceURLs. */
        public static getByUrlIDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related Url based on the unique ID of the related DataSourceURL.
         *  @return A single DataSourceURL, or null. */
        public getUrl(api: API, callback: IAPICallback<Url>): Async {
            return DataSourceURL.getUrlForDataSourceURL(this.id, api, callback);
        }

        /** Returns the related Url based on the unique ID of the related DataSourceURL.
         *  @param dataSourceURLID The ID of the DataSourceURL to retrieve.
         *  @return A single DataSourceURL, or null. */
        public static getUrlForDataSourceURL(dataSourceURLID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { dataSourceURLID: dataSourceURLID });
        }
    }
    
    export class DataSourceURL extends BaseDataSourceURL { }

    /** Contains properties and static functionality for the DataSupplier type. */
    export class BaseDataSupplier extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            acronym: new PropertyMap("acronym", "Acronym"),
            name: new PropertyMap("name", "Name"),
            description: new PropertyMap("description", "Description"),
            shortDescription: new PropertyMap("shortDescription", "ShortDescription"),
            urlID: new PropertyMap("urlID", "UrlID"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate"),
            validationDate: new PropertyMap("validationDate", "ValidationDate"),
            validationStatus: new PropertyMap("validationStatus", "ValidationStatus")
        };

        public id: number = null;
        public acronym: string = null;
        public name: string = null;
        public description: string = null;
        public shortDescription: string = null;
        public urlID: number = null;
        public sortOrder: number = null;
        public modifyDate: Date = null;
        public validationDate: Date = null;
        public validationStatus: number = null;

        protected getFields(): any { return BaseDataSupplier.Fields; }

        /** Gets a list of all of the DataSuppliers in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DataSuppliers */
        public static getAll(api: API, callback: IAPICallback<Array<DataSupplier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSupplier>>(Endpoint.fromSelf<Array<DataSupplier>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
            super.fill(json, exclude);
            this.validationDate = this.parseDate(this.validationDate);
        }

        /** Gets how many DataSuppliers exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DataSuppliers method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DataSupplier with the specified primary key.
         *  @param id The primary key of the DataSupplier to return.
         *  @return The matching DataSupplier, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DataSupplier>): Async {
            return api.executeEndpoint<DataSupplier>(Endpoint.fromSelf<DataSupplier>(), callback, { id: id });
        }

        /** Returns a filtered collection of DataSuppliers based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DataSuppliers which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DataSupplier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSupplier>>(Endpoint.fromSelf<Array<DataSupplier>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DataSuppliers which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DataSuppliers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DataSupplierswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DataSuppliers by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child DataSuppliers.
         *  @return An Array of DataSuppliers. */
        public static getByUrlID(urlID: number, api: API, callback: IAPICallback<Array<DataSupplier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DataSupplier>>(Endpoint.fromSelf<Array<DataSupplier>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many DataSuppliers by UrlID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child DataSuppliers.
         *  @return An Array of DataSuppliers. */
        public static getByUrlIDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of DataSuppliers by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child DataSuppliers.
         *  @return An Array of DataSuppliers. */
        public static getByUrlIDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related Url based on the unique ID of the related DataSupplier.
         *  @return A single DataSupplier, or null. */
        public getUrl(api: API, callback: IAPICallback<Url>): Async {
            return DataSupplier.getUrlForDataSupplier(this.id, api, callback);
        }

        /** Returns the related Url based on the unique ID of the related DataSupplier.
         *  @param dataSupplierID The ID of the DataSupplier to retrieve.
         *  @return A single DataSupplier, or null. */
        public static getUrlForDataSupplier(dataSupplierID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { dataSupplierID: dataSupplierID });
        }
    }
    
    export class DataSupplier extends BaseDataSupplier { }

    /** Contains properties and static functionality for the DimensionBook type. */
    export class BaseDimensionBook extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            key: new PropertyMap("key", "Key"),
            dimension: new PropertyMap("dimension", "Dimension"),
            name: new PropertyMap("name", "Name"),
            IsHeader: new PropertyMap("IsHeader", "IsHeader"),
            indentedName: new PropertyMap("indentedName", "IndentedName"),
            parentDimensionBookID: new PropertyMap("parentDimensionBookID", "ParentDimensionBookID"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth"),
            dimensionListID: new PropertyMap("dimensionListID", "DimensionListID"),
            chartName: new PropertyMap("chartName", "ChartName"),
            downloadName: new PropertyMap("downloadName", "DownloadName")
        };

        public id: number = null;
        public key: string = null;
        public dimension: string = null;
        public name: string = null;
        public IsHeader: boolean = null;
        public indentedName: string = null;
        public parentDimensionBookID: number = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;
        public dimensionListID: number = null;
        public chartName: string = null;
        public downloadName: string = null;

        protected getFields(): any { return BaseDimensionBook.Fields; }

        /** Gets a list of all of the DimensionBooks in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionBooks */
        public static getAll(api: API, callback: IAPICallback<Array<DimensionBook>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBook>>(Endpoint.fromSelf<Array<DimensionBook>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DimensionBooks exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DimensionBooks method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DimensionBook with the specified primary key.
         *  @param id The primary key of the DimensionBook to return.
         *  @return The matching DimensionBook, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DimensionBook>): Async {
            return api.executeEndpoint<DimensionBook>(Endpoint.fromSelf<DimensionBook>(), callback, { id: id });
        }

        /** Returns a filtered collection of DimensionBooks based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionBooks which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DimensionBook>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBook>>(Endpoint.fromSelf<Array<DimensionBook>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DimensionBooks exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionBooks which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DimensionBooks exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionBookswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DimensionBooks by ParentDimensionBookID.
         *  @return An Array of DimensionBooks. */
        public getDimensionBooks(api: API, callback: IAPICallback<Array<DimensionBook>>, page?: number, pageSize?: number): Async {
            return DimensionBook.getByParentDimensionBookID(this.id, api, callback, page, pageSize);
        }

        /** Gets DimensionBooks by ParentDimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        public static getByParentDimensionBookID(dimensionBookID: number, api: API, callback: IAPICallback<Array<DimensionBook>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBook>>(Endpoint.fromSelf<Array<DimensionBook>>(), callback, { dimensionBookID: dimensionBookID }, null, page, pageSize);
        }

        /** Gets how many DimensionBooks by ParentDimensionBookID exist. 
         *  @return An Array of DimensionBooks. */
        public getDimensionBooksCount(api: API, callback: IAPICallback<number>): Async {
            return DimensionBook.getByParentDimensionBookIDCount(this.id, api, callback);
        }

        /** Gets how many DimensionBooks by ParentDimensionBookID exist. 
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        public static getByParentDimensionBookIDCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Gets how many pages of DimensionBooks by ParentDimensionBookID exist.
         *  @return An Array of DimensionBooks. */
        public getDimensionBooksPageCount(api: API, callback: IAPICallback<number>): Async {
            return DimensionBook.getByParentDimensionBookIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of DimensionBooks by ParentDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        public static getByParentDimensionBookIDPageCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Returns the related ParentDimensionBook based on the unique ID of the related DimensionBook.
         *  @return A single DimensionBook, or null. */
        public getParentDimensionBook(api: API, callback: IAPICallback<DimensionBook>): Async {
            return DimensionBook.getParentDimensionBookForDimensionBook(this.id, api, callback);
        }

        /** Returns the related ParentDimensionBook based on the unique ID of the related DimensionBook.
         *  @param dimensionBookID The ID of the DimensionBook to retrieve.
         *  @return A single DimensionBook, or null. */
        public static getParentDimensionBookForDimensionBook(dimensionBookID: number, api: API, callback: IAPICallback<DimensionBook>): Async {
            return api.executeEndpoint<DimensionBook>(Endpoint.fromSelf<DimensionBook>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Gets DimensionBooks by DimensionListID.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        public static getByDimensionListID(dimensionListID: number, api: API, callback: IAPICallback<Array<DimensionBook>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBook>>(Endpoint.fromSelf<Array<DimensionBook>>(), callback, { dimensionListID: dimensionListID }, null, page, pageSize);
        }

        /** Gets how many DimensionBooks by DimensionListID exist. 
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        public static getByDimensionListIDCount(dimensionListID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionListID: dimensionListID });
        }

        /** Gets how many pages of DimensionBooks by DimensionListID exist.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child DimensionBooks.
         *  @return An Array of DimensionBooks. */
        public static getByDimensionListIDPageCount(dimensionListID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionListID: dimensionListID });
        }

        /** Returns the related DimensionList based on the unique ID of the related DimensionBook.
         *  @return A single DimensionBook, or null. */
        public getDimensionList(api: API, callback: IAPICallback<DimensionList>): Async {
            return DimensionBook.getDimensionListForDimensionBook(this.id, api, callback);
        }

        /** Returns the related DimensionList based on the unique ID of the related DimensionBook.
         *  @param dimensionBookID The ID of the DimensionBook to retrieve.
         *  @return A single DimensionBook, or null. */
        public static getDimensionListForDimensionBook(dimensionBookID: number, api: API, callback: IAPICallback<DimensionList>): Async {
            return api.executeEndpoint<DimensionList>(Endpoint.fromSelf<DimensionList>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Gets a unique DimensionBook based on the provided values.
         *  @return A single DimensionBook, or null. */
        public static getByKey(key: string, api: API, callback: IAPICallback<DimensionBook>): Async {
            return api.executeEndpoint<DimensionBook>(Endpoint.fromSelf<DimensionBook>(), callback, { key: key });
        }
    }
    
    export class DimensionBook extends BaseDimensionBook { }

    /** Contains properties and static functionality for the DimensionBookRelation type. */
    export class BaseDimensionBookRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorDimensionBookID: new PropertyMap("ancestorDimensionBookID", "AncestorDimensionBookID"),
            descendantDimensionBookID: new PropertyMap("descendantDimensionBookID", "DescendantDimensionBookID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorDimensionBookID: number = null;
        public descendantDimensionBookID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseDimensionBookRelation.Fields; }

        /** Gets a list of all of the DimensionBookRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionBookRelations */
        public static getAll(api: API, callback: IAPICallback<Array<DimensionBookRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBookRelation>>(Endpoint.fromSelf<Array<DimensionBookRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DimensionBookRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DimensionBookRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DimensionBookRelation with the specified primary key.
         *  @param id The primary key of the DimensionBookRelation to return.
         *  @return The matching DimensionBookRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DimensionBookRelation>): Async {
            return api.executeEndpoint<DimensionBookRelation>(Endpoint.fromSelf<DimensionBookRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of DimensionBookRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionBookRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DimensionBookRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBookRelation>>(Endpoint.fromSelf<Array<DimensionBookRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DimensionBookRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionBookRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DimensionBookRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionBookRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DimensionBookRelations by AncestorDimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        public static getByAncestorDimensionBookID(dimensionBookID: number, api: API, callback: IAPICallback<Array<DimensionBookRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBookRelation>>(Endpoint.fromSelf<Array<DimensionBookRelation>>(), callback, { dimensionBookID: dimensionBookID }, null, page, pageSize);
        }

        /** Gets how many DimensionBookRelations by AncestorDimensionBookID exist. 
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        public static getByAncestorDimensionBookIDCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Gets how many pages of DimensionBookRelations by AncestorDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        public static getByAncestorDimensionBookIDPageCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Returns the related AncestorDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @return A single DimensionBookRelation, or null. */
        public getAncestorDimensionBook(api: API, callback: IAPICallback<DimensionBook>): Async {
            return DimensionBookRelation.getAncestorDimensionBookForDimensionBookRelation(this.id, api, callback);
        }

        /** Returns the related AncestorDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @param dimensionBookRelationID The ID of the DimensionBookRelation to retrieve.
         *  @return A single DimensionBookRelation, or null. */
        public static getAncestorDimensionBookForDimensionBookRelation(dimensionBookRelationID: number, api: API, callback: IAPICallback<DimensionBook>): Async {
            return api.executeEndpoint<DimensionBook>(Endpoint.fromSelf<DimensionBook>(), callback, { dimensionBookRelationID: dimensionBookRelationID });
        }

        /** Gets DimensionBookRelations by DescendantDimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        public static getByDescendantDimensionBookID(dimensionBookID: number, api: API, callback: IAPICallback<Array<DimensionBookRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionBookRelation>>(Endpoint.fromSelf<Array<DimensionBookRelation>>(), callback, { dimensionBookID: dimensionBookID }, null, page, pageSize);
        }

        /** Gets how many DimensionBookRelations by DescendantDimensionBookID exist. 
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        public static getByDescendantDimensionBookIDCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Gets how many pages of DimensionBookRelations by DescendantDimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child DimensionBookRelations.
         *  @return An Array of DimensionBookRelations. */
        public static getByDescendantDimensionBookIDPageCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Returns the related DescendantDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @return A single DimensionBookRelation, or null. */
        public getDescendantDimensionBook(api: API, callback: IAPICallback<DimensionBook>): Async {
            return DimensionBookRelation.getDescendantDimensionBookForDimensionBookRelation(this.id, api, callback);
        }

        /** Returns the related DescendantDimensionBook based on the unique ID of the related DimensionBookRelation.
         *  @param dimensionBookRelationID The ID of the DimensionBookRelation to retrieve.
         *  @return A single DimensionBookRelation, or null. */
        public static getDescendantDimensionBookForDimensionBookRelation(dimensionBookRelationID: number, api: API, callback: IAPICallback<DimensionBook>): Async {
            return api.executeEndpoint<DimensionBook>(Endpoint.fromSelf<DimensionBook>(), callback, { dimensionBookRelationID: dimensionBookRelationID });
        }
    }
    
    export class DimensionBookRelation extends BaseDimensionBookRelation { }

    /** Contains properties and static functionality for the DimensionGraph type. */
    export class BaseDimensionGraph extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            header: new PropertyMap("header", "Header"),
            label: new PropertyMap("label", "Label"),
            dimensionGraphLabel: new PropertyMap("dimensionGraphLabel", "DimensionGraphLabel"),
            dimensionList: new PropertyMap("dimensionList", "DimensionList"),
            dimensionValueIDList: new PropertyMap("dimensionValueIDList", "DimensionValueIDList"),
            dimensionValueKeyList: new PropertyMap("dimensionValueKeyList", "DimensionValueKeyList"),
            dimensionValueList: new PropertyMap("dimensionValueList", "DimensionValueList"),
            dimensionCount: new PropertyMap("dimensionCount", "DimensionCount"),
            headerSortOrder: new PropertyMap("headerSortOrder", "HeaderSortOrder"),
            dimensionGraphSortOrder: new PropertyMap("dimensionGraphSortOrder", "DimensionGraphSortOrder"),
            totalValue: new PropertyMap("totalValue", "TotalValue"),
            totalID: new PropertyMap("totalID", "TotalID"),
            totalKey: new PropertyMap("totalKey", "TotalKey"),
            totalSortOrder: new PropertyMap("totalSortOrder", "TotalSortOrder"),
            ageValue: new PropertyMap("ageValue", "AgeValue"),
            ageID: new PropertyMap("ageID", "AgeID"),
            ageKey: new PropertyMap("ageKey", "AgeKey"),
            ageSortOrder: new PropertyMap("ageSortOrder", "AgeSortOrder"),
            sexValue: new PropertyMap("sexValue", "SexValue"),
            sexID: new PropertyMap("sexID", "SexID"),
            sexKey: new PropertyMap("sexKey", "SexKey"),
            sexSortOrder: new PropertyMap("sexSortOrder", "SexSortOrder"),
            raceEthnicityValue: new PropertyMap("raceEthnicityValue", "RaceEthnicityValue"),
            raceEthnicityID: new PropertyMap("raceEthnicityID", "RaceEthnicityID"),
            raceEthnicityKey: new PropertyMap("raceEthnicityKey", "RaceEthnicityKey"),
            raceEthnicitySortOrder: new PropertyMap("raceEthnicitySortOrder", "RaceEthnicitySortOrder"),
            incomeAndPovertyStatusValue: new PropertyMap("incomeAndPovertyStatusValue", "IncomeAndPovertyStatusValue"),
            incomeAndPovertyStatusID: new PropertyMap("incomeAndPovertyStatusID", "IncomeAndPovertyStatusID"),
            incomeAndPovertyStatusKey: new PropertyMap("incomeAndPovertyStatusKey", "IncomeAndPovertyStatusKey"),
            incomeAndPovertyStatusSortOrder: new PropertyMap("incomeAndPovertyStatusSortOrder", "IncomeAndPovertyStatusSortOrder"),
            educationalAttainmentValue: new PropertyMap("educationalAttainmentValue", "EducationalAttainmentValue"),
            educationalAttainmentID: new PropertyMap("educationalAttainmentID", "EducationalAttainmentID"),
            educationalAttainmentKey: new PropertyMap("educationalAttainmentKey", "EducationalAttainmentKey"),
            educationalAttainmentSortOrder: new PropertyMap("educationalAttainmentSortOrder", "EducationalAttainmentSortOrder"),
            healthInsuranceStatusValue: new PropertyMap("healthInsuranceStatusValue", "HealthInsuranceStatusValue"),
            healthInsuranceStatusID: new PropertyMap("healthInsuranceStatusID", "HealthInsuranceStatusID"),
            healthInsuranceStatusKey: new PropertyMap("healthInsuranceStatusKey", "HealthInsuranceStatusKey"),
            healthInsuranceStatusSortOrder: new PropertyMap("healthInsuranceStatusSortOrder", "HealthInsuranceStatusSortOrder"),
            sexualOrientationValue: new PropertyMap("sexualOrientationValue", "SexualOrientationValue"),
            sexualOrientationID: new PropertyMap("sexualOrientationID", "SexualOrientationID"),
            sexualOrientationKey: new PropertyMap("sexualOrientationKey", "SexualOrientationKey"),
            sexualOrientationSortOrder: new PropertyMap("sexualOrientationSortOrder", "SexualOrientationSortOrder"),
            familyTypeValue: new PropertyMap("familyTypeValue", "FamilyTypeValue"),
            familyTypeID: new PropertyMap("familyTypeID", "FamilyTypeID"),
            familyTypeKey: new PropertyMap("familyTypeKey", "FamilyTypeKey"),
            familyTypeSortOrder: new PropertyMap("familyTypeSortOrder", "FamilyTypeSortOrder"),
            maritalStatusValue: new PropertyMap("maritalStatusValue", "MaritalStatusValue"),
            maritalStatusID: new PropertyMap("maritalStatusID", "MaritalStatusID"),
            maritalStatusKey: new PropertyMap("maritalStatusKey", "MaritalStatusKey"),
            maritalStatusSortOrder: new PropertyMap("maritalStatusSortOrder", "MaritalStatusSortOrder"),
            veteranStatusValue: new PropertyMap("veteranStatusValue", "VeteranStatusValue"),
            veteranStatusID: new PropertyMap("veteranStatusID", "VeteranStatusID"),
            veteranStatusKey: new PropertyMap("veteranStatusKey", "VeteranStatusKey"),
            veteranStatusSortOrder: new PropertyMap("veteranStatusSortOrder", "VeteranStatusSortOrder"),
            countryOfBirthValue: new PropertyMap("countryOfBirthValue", "CountryOfBirthValue"),
            countryOfBirthID: new PropertyMap("countryOfBirthID", "CountryOfBirthID"),
            countryOfBirthKey: new PropertyMap("countryOfBirthKey", "CountryOfBirthKey"),
            countryOfBirthSortOrder: new PropertyMap("countryOfBirthSortOrder", "CountryOfBirthSortOrder"),
            disabilityStatusValue: new PropertyMap("disabilityStatusValue", "DisabilityStatusValue"),
            disabilityStatusID: new PropertyMap("disabilityStatusID", "DisabilityStatusID"),
            disabilityStatusKey: new PropertyMap("disabilityStatusKey", "DisabilityStatusKey"),
            disabilityStatusSortOrder: new PropertyMap("disabilityStatusSortOrder", "DisabilityStatusSortOrder"),
            obesityStatusValue: new PropertyMap("obesityStatusValue", "ObesityStatusValue"),
            obesityStatusID: new PropertyMap("obesityStatusID", "ObesityStatusID"),
            obesityStatusKey: new PropertyMap("obesityStatusKey", "ObesityStatusKey"),
            obesityStatusSortOrder: new PropertyMap("obesityStatusSortOrder", "ObesityStatusSortOrder"),
            characteristicOfSchoolOrStudentValue: new PropertyMap("characteristicOfSchoolOrStudentValue", "CharacteristicOfSchoolOrStudentValue"),
            characteristicOfSchoolOrStudentID: new PropertyMap("characteristicOfSchoolOrStudentID", "CharacteristicOfSchoolOrStudentID"),
            characteristicOfSchoolOrStudentKey: new PropertyMap("characteristicOfSchoolOrStudentKey", "CharacteristicOfSchoolOrStudentKey"),
            characteristicOfSchoolOrStudentSortOrder: new PropertyMap("characteristicOfSchoolOrStudentSortOrder", "CharacteristicOfSchoolOrStudentSortOrder"),
            otherValue: new PropertyMap("otherValue", "OtherValue"),
            otherID: new PropertyMap("otherID", "OtherID"),
            otherKey: new PropertyMap("otherKey", "OtherKey"),
            otherSortOrder: new PropertyMap("otherSortOrder", "OtherSortOrder"),
            geographyValue: new PropertyMap("geographyValue", "GeographyValue"),
            geographyID: new PropertyMap("geographyID", "GeographyID"),
            geographyKey: new PropertyMap("geographyKey", "GeographyKey"),
            geographySortOrder: new PropertyMap("geographySortOrder", "GeographySortOrder")
        };

        public id: number = null;
        public header: string = null;
        public label: string = null;
        public dimensionGraphLabel: string = null;
        public dimensionList: string = null;
        public dimensionValueIDList: string = null;
        public dimensionValueKeyList: string = null;
        public dimensionValueList: string = null;
        public dimensionCount: number = null;
        public headerSortOrder: number = null;
        public dimensionGraphSortOrder: number = null;
        public totalValue: string = null;
        public totalID: number = null;
        public totalKey: string = null;
        public totalSortOrder: number = null;
        public ageValue: string = null;
        public ageID: number = null;
        public ageKey: string = null;
        public ageSortOrder: number = null;
        public sexValue: string = null;
        public sexID: number = null;
        public sexKey: string = null;
        public sexSortOrder: number = null;
        public raceEthnicityValue: string = null;
        public raceEthnicityID: number = null;
        public raceEthnicityKey: string = null;
        public raceEthnicitySortOrder: number = null;
        public incomeAndPovertyStatusValue: string = null;
        public incomeAndPovertyStatusID: number = null;
        public incomeAndPovertyStatusKey: string = null;
        public incomeAndPovertyStatusSortOrder: number = null;
        public educationalAttainmentValue: string = null;
        public educationalAttainmentID: number = null;
        public educationalAttainmentKey: string = null;
        public educationalAttainmentSortOrder: number = null;
        public healthInsuranceStatusValue: string = null;
        public healthInsuranceStatusID: number = null;
        public healthInsuranceStatusKey: string = null;
        public healthInsuranceStatusSortOrder: number = null;
        public sexualOrientationValue: string = null;
        public sexualOrientationID: number = null;
        public sexualOrientationKey: string = null;
        public sexualOrientationSortOrder: number = null;
        public familyTypeValue: string = null;
        public familyTypeID: number = null;
        public familyTypeKey: string = null;
        public familyTypeSortOrder: number = null;
        public maritalStatusValue: string = null;
        public maritalStatusID: number = null;
        public maritalStatusKey: string = null;
        public maritalStatusSortOrder: number = null;
        public veteranStatusValue: string = null;
        public veteranStatusID: number = null;
        public veteranStatusKey: string = null;
        public veteranStatusSortOrder: number = null;
        public countryOfBirthValue: string = null;
        public countryOfBirthID: number = null;
        public countryOfBirthKey: string = null;
        public countryOfBirthSortOrder: number = null;
        public disabilityStatusValue: string = null;
        public disabilityStatusID: number = null;
        public disabilityStatusKey: string = null;
        public disabilityStatusSortOrder: number = null;
        public obesityStatusValue: string = null;
        public obesityStatusID: number = null;
        public obesityStatusKey: string = null;
        public obesityStatusSortOrder: number = null;
        public characteristicOfSchoolOrStudentValue: string = null;
        public characteristicOfSchoolOrStudentID: number = null;
        public characteristicOfSchoolOrStudentKey: string = null;
        public characteristicOfSchoolOrStudentSortOrder: number = null;
        public otherValue: string = null;
        public otherID: number = null;
        public otherKey: string = null;
        public otherSortOrder: number = null;
        public geographyValue: string = null;
        public geographyID: number = null;
        public geographyKey: string = null;
        public geographySortOrder: number = null;

        protected getFields(): any { return BaseDimensionGraph.Fields; }

        /** Gets a list of all of the DimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionGraphs */
        public static getAll(api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DimensionGraphs method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DimensionGraph with the specified primary key.
         *  @param id The primary key of the DimensionGraph to return.
         *  @return The matching DimensionGraph, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DimensionGraph>): Async {
            return api.executeEndpoint<DimensionGraph>(Endpoint.fromSelf<DimensionGraph>(), callback, { id: id });
        }

        /** Returns a filtered collection of DimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionGraphs which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionGraphs which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionGraphswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DimensionGraphs by TotalID.
         *  @param totalID The ID of the Total for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByTotalID(totalID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { totalID: totalID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by TotalID exist. 
         *  @param totalID The ID of the Total for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByTotalIDCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Gets how many pages of DimensionGraphs by TotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByTotalIDPageCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Returns the related Total based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getTotal(api: API, callback: IAPICallback<Total>): Async {
            return DimensionGraph.getTotalForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related Total based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getTotalForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<Total>): Async {
            return api.executeEndpoint<Total>(Endpoint.fromSelf<Total>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by AgeID.
         *  @param ageID The ID of the Age for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByAgeID(ageID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { ageID: ageID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by AgeID exist. 
         *  @param ageID The ID of the Age for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByAgeIDCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Gets how many pages of DimensionGraphs by AgeID exist.
         *  @param ageID The ID of the Age for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByAgeIDPageCount(ageID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { ageID: ageID });
        }

        /** Returns the related Age based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getAge(api: API, callback: IAPICallback<Age>): Async {
            return DimensionGraph.getAgeForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related Age based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getAgeForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<Age>): Async {
            return api.executeEndpoint<Age>(Endpoint.fromSelf<Age>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by SexID.
         *  @param sexID The ID of the Sex for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getBySexID(sexID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { sexID: sexID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by SexID exist. 
         *  @param sexID The ID of the Sex for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getBySexIDCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Gets how many pages of DimensionGraphs by SexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getBySexIDPageCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Returns the related Sex based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getSex(api: API, callback: IAPICallback<Sex>): Async {
            return DimensionGraph.getSexForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related Sex based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getSexForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<Sex>): Async {
            return api.executeEndpoint<Sex>(Endpoint.fromSelf<Sex>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by RaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByRaceEthnicityID(raceEthnicityID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { raceEthnicityID: raceEthnicityID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by RaceEthnicityID exist. 
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByRaceEthnicityIDCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Gets how many pages of DimensionGraphs by RaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByRaceEthnicityIDPageCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Returns the related RaceEthnicity based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getRaceEthnicity(api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return DimensionGraph.getRaceEthnicityForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related RaceEthnicity based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getRaceEthnicityForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return api.executeEndpoint<RaceEthnicity>(Endpoint.fromSelf<RaceEthnicity>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by IncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByIncomeAndPovertyStatusID(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by IncomeAndPovertyStatusID exist. 
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByIncomeAndPovertyStatusIDCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Gets how many pages of DimensionGraphs by IncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByIncomeAndPovertyStatusIDPageCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Returns the related IncomeAndPovertyStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getIncomeAndPovertyStatus(api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return DimensionGraph.getIncomeAndPovertyStatusForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related IncomeAndPovertyStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getIncomeAndPovertyStatusForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return api.executeEndpoint<IncomeAndPovertyStatus>(Endpoint.fromSelf<IncomeAndPovertyStatus>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by EducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByEducationalAttainmentID(educationalAttainmentID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by EducationalAttainmentID exist. 
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByEducationalAttainmentIDCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Gets how many pages of DimensionGraphs by EducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByEducationalAttainmentIDPageCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Returns the related EducationalAttainment based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getEducationalAttainment(api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return DimensionGraph.getEducationalAttainmentForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related EducationalAttainment based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getEducationalAttainmentForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return api.executeEndpoint<EducationalAttainment>(Endpoint.fromSelf<EducationalAttainment>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by HealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByHealthInsuranceStatusID(healthInsuranceStatusID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by HealthInsuranceStatusID exist. 
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByHealthInsuranceStatusIDCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Gets how many pages of DimensionGraphs by HealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByHealthInsuranceStatusIDPageCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Returns the related HealthInsuranceStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getHealthInsuranceStatus(api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return DimensionGraph.getHealthInsuranceStatusForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related HealthInsuranceStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getHealthInsuranceStatusForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return api.executeEndpoint<HealthInsuranceStatus>(Endpoint.fromSelf<HealthInsuranceStatus>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by SexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getBySexualOrientationID(sexualOrientationID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { sexualOrientationID: sexualOrientationID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by SexualOrientationID exist. 
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getBySexualOrientationIDCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Gets how many pages of DimensionGraphs by SexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getBySexualOrientationIDPageCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Returns the related SexualOrientation based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getSexualOrientation(api: API, callback: IAPICallback<SexualOrientation>): Async {
            return DimensionGraph.getSexualOrientationForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related SexualOrientation based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getSexualOrientationForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<SexualOrientation>): Async {
            return api.executeEndpoint<SexualOrientation>(Endpoint.fromSelf<SexualOrientation>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by FamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByFamilyTypeID(familyTypeID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { familyTypeID: familyTypeID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by FamilyTypeID exist. 
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByFamilyTypeIDCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Gets how many pages of DimensionGraphs by FamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByFamilyTypeIDPageCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Returns the related FamilyType based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getFamilyType(api: API, callback: IAPICallback<FamilyType>): Async {
            return DimensionGraph.getFamilyTypeForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related FamilyType based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getFamilyTypeForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<FamilyType>): Async {
            return api.executeEndpoint<FamilyType>(Endpoint.fromSelf<FamilyType>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by MaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByMaritalStatusID(maritalStatusID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { maritalStatusID: maritalStatusID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by MaritalStatusID exist. 
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByMaritalStatusIDCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Gets how many pages of DimensionGraphs by MaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByMaritalStatusIDPageCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Returns the related MaritalStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getMaritalStatus(api: API, callback: IAPICallback<MaritalStatus>): Async {
            return DimensionGraph.getMaritalStatusForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related MaritalStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getMaritalStatusForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<MaritalStatus>): Async {
            return api.executeEndpoint<MaritalStatus>(Endpoint.fromSelf<MaritalStatus>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by VeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByVeteranStatusID(veteranStatusID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { veteranStatusID: veteranStatusID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by VeteranStatusID exist. 
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByVeteranStatusIDCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Gets how many pages of DimensionGraphs by VeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByVeteranStatusIDPageCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Returns the related VeteranStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getVeteranStatus(api: API, callback: IAPICallback<VeteranStatus>): Async {
            return DimensionGraph.getVeteranStatusForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related VeteranStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getVeteranStatusForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<VeteranStatus>): Async {
            return api.executeEndpoint<VeteranStatus>(Endpoint.fromSelf<VeteranStatus>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by CountryOfBirthID.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByCountryOfBirthID(countryOfBirthID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { countryOfBirthID: countryOfBirthID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by CountryOfBirthID exist. 
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByCountryOfBirthIDCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Gets how many pages of DimensionGraphs by CountryOfBirthID exist.
         *  @param countryOfBirthID The ID of the CountryOfBirth for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByCountryOfBirthIDPageCount(countryOfBirthID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { countryOfBirthID: countryOfBirthID });
        }

        /** Returns the related CountryOfBirth based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getCountryOfBirth(api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return DimensionGraph.getCountryOfBirthForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related CountryOfBirth based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getCountryOfBirthForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<CountryOfBirth>): Async {
            return api.executeEndpoint<CountryOfBirth>(Endpoint.fromSelf<CountryOfBirth>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by DisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByDisabilityStatusID(disabilityStatusID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { disabilityStatusID: disabilityStatusID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by DisabilityStatusID exist. 
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByDisabilityStatusIDCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Gets how many pages of DimensionGraphs by DisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByDisabilityStatusIDPageCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Returns the related DisabilityStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getDisabilityStatus(api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return DimensionGraph.getDisabilityStatusForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related DisabilityStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getDisabilityStatusForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return api.executeEndpoint<DisabilityStatus>(Endpoint.fromSelf<DisabilityStatus>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by ObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByObesityStatusID(obesityStatusID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { obesityStatusID: obesityStatusID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by ObesityStatusID exist. 
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByObesityStatusIDCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Gets how many pages of DimensionGraphs by ObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByObesityStatusIDPageCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Returns the related ObesityStatus based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getObesityStatus(api: API, callback: IAPICallback<ObesityStatus>): Async {
            return DimensionGraph.getObesityStatusForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related ObesityStatus based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getObesityStatusForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<ObesityStatus>): Async {
            return api.executeEndpoint<ObesityStatus>(Endpoint.fromSelf<ObesityStatus>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by CharacteristicOfSchoolOrStudentID.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByCharacteristicOfSchoolOrStudentID(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by CharacteristicOfSchoolOrStudentID exist. 
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByCharacteristicOfSchoolOrStudentIDCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Gets how many pages of DimensionGraphs by CharacteristicOfSchoolOrStudentID exist.
         *  @param characteristicOfSchoolOrStudentID The ID of the CharacteristicOfSchoolOrStudent for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByCharacteristicOfSchoolOrStudentIDPageCount(characteristicOfSchoolOrStudentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { characteristicOfSchoolOrStudentID: characteristicOfSchoolOrStudentID });
        }

        /** Returns the related CharacteristicOfSchoolOrStudent based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getCharacteristicOfSchoolOrStudent(api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return DimensionGraph.getCharacteristicOfSchoolOrStudentForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related CharacteristicOfSchoolOrStudent based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getCharacteristicOfSchoolOrStudentForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<CharacteristicOfSchoolOrStudent>): Async {
            return api.executeEndpoint<CharacteristicOfSchoolOrStudent>(Endpoint.fromSelf<CharacteristicOfSchoolOrStudent>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by OtherID.
         *  @param otherID The ID of the Other for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByOtherID(otherID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { otherID: otherID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by OtherID exist. 
         *  @param otherID The ID of the Other for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByOtherIDCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Gets how many pages of DimensionGraphs by OtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByOtherIDPageCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Returns the related Other based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getOther(api: API, callback: IAPICallback<Other>): Async {
            return DimensionGraph.getOtherForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related Other based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getOtherForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<Other>): Async {
            return api.executeEndpoint<Other>(Endpoint.fromSelf<Other>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets DimensionGraphs by GeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByGeographyID(geographyID: number, api: API, callback: IAPICallback<Array<DimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionGraph>>(Endpoint.fromSelf<Array<DimensionGraph>>(), callback, { geographyID: geographyID }, null, page, pageSize);
        }

        /** Gets how many DimensionGraphs by GeographyID exist. 
         *  @param geographyID The ID of the Geography for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByGeographyIDCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Gets how many pages of DimensionGraphs by GeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child DimensionGraphs.
         *  @return An Array of DimensionGraphs. */
        public static getByGeographyIDPageCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Returns the related Geography based on the unique ID of the related DimensionGraph.
         *  @return A single DimensionGraph, or null. */
        public getGeography(api: API, callback: IAPICallback<Geography>): Async {
            return DimensionGraph.getGeographyForDimensionGraph(this.id, api, callback);
        }

        /** Returns the related Geography based on the unique ID of the related DimensionGraph.
         *  @param dimensionGraphID The ID of the DimensionGraph to retrieve.
         *  @return A single DimensionGraph, or null. */
        public static getGeographyForDimensionGraph(dimensionGraphID: number, api: API, callback: IAPICallback<Geography>): Async {
            return api.executeEndpoint<Geography>(Endpoint.fromSelf<Geography>(), callback, { dimensionGraphID: dimensionGraphID });
        }
    }
    
    export class DimensionGraph extends BaseDimensionGraph { }

    /** Contains properties and static functionality for the DimensionList type. */
    export class BaseDimensionList extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            singular: new PropertyMap("singular", "Singular"),
            descriptiveName: new PropertyMap("descriptiveName", "DescriptiveName"),
            singularDescriptiveName: new PropertyMap("singularDescriptiveName", "SingularDescriptiveName"),
            IsActive: new PropertyMap("IsActive", "IsActive")
        };

        public id: number = null;
        public singular: string = null;
        public descriptiveName: string = null;
        public singularDescriptiveName: string = null;
        public IsActive: boolean = null;

        protected getFields(): any { return BaseDimensionList.Fields; }

        /** Gets a list of all of the DimensionLists in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DimensionLists */
        public static getAll(api: API, callback: IAPICallback<Array<DimensionList>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionList>>(Endpoint.fromSelf<Array<DimensionList>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DimensionLists exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DimensionLists method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DimensionList with the specified primary key.
         *  @param id The primary key of the DimensionList to return.
         *  @return The matching DimensionList, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DimensionList>): Async {
            return api.executeEndpoint<DimensionList>(Endpoint.fromSelf<DimensionList>(), callback, { id: id });
        }

        /** Returns a filtered collection of DimensionLists based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DimensionLists which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DimensionList>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DimensionList>>(Endpoint.fromSelf<Array<DimensionList>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DimensionLists exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DimensionLists which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DimensionLists exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DimensionListswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class DimensionList extends BaseDimensionList { }

    /** Contains properties and static functionality for the DisabilityStatus type. */
    export class BaseDisabilityStatus extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentDisabilityStatusID: new PropertyMap("parentDisabilityStatusID", "ParentDisabilityStatusID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentDisabilityStatusID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseDisabilityStatus.Fields; }

        /** Gets a list of all of the DisabilityStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DisabilityStatuses */
        public static getAll(api: API, callback: IAPICallback<Array<DisabilityStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DisabilityStatus>>(Endpoint.fromSelf<Array<DisabilityStatus>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DisabilityStatuses exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DisabilityStatuses method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DisabilityStatus with the specified primary key.
         *  @param id The primary key of the DisabilityStatus to return.
         *  @return The matching DisabilityStatus, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return api.executeEndpoint<DisabilityStatus>(Endpoint.fromSelf<DisabilityStatus>(), callback, { id: id });
        }

        /** Returns a filtered collection of DisabilityStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DisabilityStatuses which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DisabilityStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DisabilityStatus>>(Endpoint.fromSelf<Array<DisabilityStatus>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DisabilityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DisabilityStatuses which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DisabilityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DisabilityStatuseswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DisabilityStatuses by ParentDisabilityStatusID.
         *  @return An Array of DisabilityStatuses. */
        public getDisabilityStatuses(api: API, callback: IAPICallback<Array<DisabilityStatus>>, page?: number, pageSize?: number): Async {
            return DisabilityStatus.getByParentDisabilityStatusID(this.id, api, callback, page, pageSize);
        }

        /** Gets DisabilityStatuses by ParentDisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatuses.
         *  @return An Array of DisabilityStatuses. */
        public static getByParentDisabilityStatusID(disabilityStatusID: number, api: API, callback: IAPICallback<Array<DisabilityStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DisabilityStatus>>(Endpoint.fromSelf<Array<DisabilityStatus>>(), callback, { disabilityStatusID: disabilityStatusID }, null, page, pageSize);
        }

        /** Gets how many DisabilityStatuses by ParentDisabilityStatusID exist. 
         *  @return An Array of DisabilityStatuses. */
        public getDisabilityStatusesCount(api: API, callback: IAPICallback<number>): Async {
            return DisabilityStatus.getByParentDisabilityStatusIDCount(this.id, api, callback);
        }

        /** Gets how many DisabilityStatuses by ParentDisabilityStatusID exist. 
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatuses.
         *  @return An Array of DisabilityStatuses. */
        public static getByParentDisabilityStatusIDCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Gets how many pages of DisabilityStatuses by ParentDisabilityStatusID exist.
         *  @return An Array of DisabilityStatuses. */
        public getDisabilityStatusesPageCount(api: API, callback: IAPICallback<number>): Async {
            return DisabilityStatus.getByParentDisabilityStatusIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of DisabilityStatuses by ParentDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatuses.
         *  @return An Array of DisabilityStatuses. */
        public static getByParentDisabilityStatusIDPageCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Returns the related ParentDisabilityStatus based on the unique ID of the related DisabilityStatus.
         *  @return A single DisabilityStatus, or null. */
        public getParentDisabilityStatus(api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return DisabilityStatus.getParentDisabilityStatusForDisabilityStatus(this.id, api, callback);
        }

        /** Returns the related ParentDisabilityStatus based on the unique ID of the related DisabilityStatus.
         *  @param disabilityStatusID The ID of the DisabilityStatus to retrieve.
         *  @return A single DisabilityStatus, or null. */
        public static getParentDisabilityStatusForDisabilityStatus(disabilityStatusID: number, api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return api.executeEndpoint<DisabilityStatus>(Endpoint.fromSelf<DisabilityStatus>(), callback, { disabilityStatusID: disabilityStatusID });
        }
    }
    
    export class DisabilityStatus extends BaseDisabilityStatus { }

    /** Contains properties and static functionality for the DisabilityStatusRelation type. */
    export class BaseDisabilityStatusRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorDisabilityStatusID: new PropertyMap("ancestorDisabilityStatusID", "AncestorDisabilityStatusID"),
            descendantDisabilityStatusID: new PropertyMap("descendantDisabilityStatusID", "DescendantDisabilityStatusID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorDisabilityStatusID: number = null;
        public descendantDisabilityStatusID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseDisabilityStatusRelation.Fields; }

        /** Gets a list of all of the DisabilityStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of DisabilityStatusRelations */
        public static getAll(api: API, callback: IAPICallback<Array<DisabilityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DisabilityStatusRelation>>(Endpoint.fromSelf<Array<DisabilityStatusRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many DisabilityStatusRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the DisabilityStatusRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the DisabilityStatusRelation with the specified primary key.
         *  @param id The primary key of the DisabilityStatusRelation to return.
         *  @return The matching DisabilityStatusRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<DisabilityStatusRelation>): Async {
            return api.executeEndpoint<DisabilityStatusRelation>(Endpoint.fromSelf<DisabilityStatusRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of DisabilityStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All DisabilityStatusRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<DisabilityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DisabilityStatusRelation>>(Endpoint.fromSelf<Array<DisabilityStatusRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many DisabilityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of DisabilityStatusRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of DisabilityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of DisabilityStatusRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets DisabilityStatusRelations by AncestorDisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        public static getByAncestorDisabilityStatusID(disabilityStatusID: number, api: API, callback: IAPICallback<Array<DisabilityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DisabilityStatusRelation>>(Endpoint.fromSelf<Array<DisabilityStatusRelation>>(), callback, { disabilityStatusID: disabilityStatusID }, null, page, pageSize);
        }

        /** Gets how many DisabilityStatusRelations by AncestorDisabilityStatusID exist. 
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        public static getByAncestorDisabilityStatusIDCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Gets how many pages of DisabilityStatusRelations by AncestorDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        public static getByAncestorDisabilityStatusIDPageCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Returns the related AncestorDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @return A single DisabilityStatusRelation, or null. */
        public getAncestorDisabilityStatus(api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return DisabilityStatusRelation.getAncestorDisabilityStatusForDisabilityStatusRelation(this.id, api, callback);
        }

        /** Returns the related AncestorDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @param disabilityStatusRelationID The ID of the DisabilityStatusRelation to retrieve.
         *  @return A single DisabilityStatusRelation, or null. */
        public static getAncestorDisabilityStatusForDisabilityStatusRelation(disabilityStatusRelationID: number, api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return api.executeEndpoint<DisabilityStatus>(Endpoint.fromSelf<DisabilityStatus>(), callback, { disabilityStatusRelationID: disabilityStatusRelationID });
        }

        /** Gets DisabilityStatusRelations by DescendantDisabilityStatusID.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        public static getByDescendantDisabilityStatusID(disabilityStatusID: number, api: API, callback: IAPICallback<Array<DisabilityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<DisabilityStatusRelation>>(Endpoint.fromSelf<Array<DisabilityStatusRelation>>(), callback, { disabilityStatusID: disabilityStatusID }, null, page, pageSize);
        }

        /** Gets how many DisabilityStatusRelations by DescendantDisabilityStatusID exist. 
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        public static getByDescendantDisabilityStatusIDCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Gets how many pages of DisabilityStatusRelations by DescendantDisabilityStatusID exist.
         *  @param disabilityStatusID The ID of the DisabilityStatus for which to retrieve the child DisabilityStatusRelations.
         *  @return An Array of DisabilityStatusRelations. */
        public static getByDescendantDisabilityStatusIDPageCount(disabilityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { disabilityStatusID: disabilityStatusID });
        }

        /** Returns the related DescendantDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @return A single DisabilityStatusRelation, or null. */
        public getDescendantDisabilityStatus(api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return DisabilityStatusRelation.getDescendantDisabilityStatusForDisabilityStatusRelation(this.id, api, callback);
        }

        /** Returns the related DescendantDisabilityStatus based on the unique ID of the related DisabilityStatusRelation.
         *  @param disabilityStatusRelationID The ID of the DisabilityStatusRelation to retrieve.
         *  @return A single DisabilityStatusRelation, or null. */
        public static getDescendantDisabilityStatusForDisabilityStatusRelation(disabilityStatusRelationID: number, api: API, callback: IAPICallback<DisabilityStatus>): Async {
            return api.executeEndpoint<DisabilityStatus>(Endpoint.fromSelf<DisabilityStatus>(), callback, { disabilityStatusRelationID: disabilityStatusRelationID });
        }
    }
    
    export class DisabilityStatusRelation extends BaseDisabilityStatusRelation { }

    /** Contains properties and static functionality for the EducationalAttainment type. */
    export class BaseEducationalAttainment extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentEducationalAttainmentID: new PropertyMap("parentEducationalAttainmentID", "ParentEducationalAttainmentID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentEducationalAttainmentID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseEducationalAttainment.Fields; }

        /** Gets a list of all of the EducationalAttainments in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of EducationalAttainments */
        public static getAll(api: API, callback: IAPICallback<Array<EducationalAttainment>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<EducationalAttainment>>(Endpoint.fromSelf<Array<EducationalAttainment>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many EducationalAttainments exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the EducationalAttainments method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the EducationalAttainment with the specified primary key.
         *  @param id The primary key of the EducationalAttainment to return.
         *  @return The matching EducationalAttainment, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return api.executeEndpoint<EducationalAttainment>(Endpoint.fromSelf<EducationalAttainment>(), callback, { id: id });
        }

        /** Returns a filtered collection of EducationalAttainments based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All EducationalAttainments which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<EducationalAttainment>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<EducationalAttainment>>(Endpoint.fromSelf<Array<EducationalAttainment>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many EducationalAttainments exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of EducationalAttainments which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of EducationalAttainments exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of EducationalAttainmentswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets EducationalAttainments by ParentEducationalAttainmentID.
         *  @return An Array of EducationalAttainments. */
        public getEducationalAttainments(api: API, callback: IAPICallback<Array<EducationalAttainment>>, page?: number, pageSize?: number): Async {
            return EducationalAttainment.getByParentEducationalAttainmentID(this.id, api, callback, page, pageSize);
        }

        /** Gets EducationalAttainments by ParentEducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainments.
         *  @return An Array of EducationalAttainments. */
        public static getByParentEducationalAttainmentID(educationalAttainmentID: number, api: API, callback: IAPICallback<Array<EducationalAttainment>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<EducationalAttainment>>(Endpoint.fromSelf<Array<EducationalAttainment>>(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page, pageSize);
        }

        /** Gets how many EducationalAttainments by ParentEducationalAttainmentID exist. 
         *  @return An Array of EducationalAttainments. */
        public getEducationalAttainmentsCount(api: API, callback: IAPICallback<number>): Async {
            return EducationalAttainment.getByParentEducationalAttainmentIDCount(this.id, api, callback);
        }

        /** Gets how many EducationalAttainments by ParentEducationalAttainmentID exist. 
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainments.
         *  @return An Array of EducationalAttainments. */
        public static getByParentEducationalAttainmentIDCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Gets how many pages of EducationalAttainments by ParentEducationalAttainmentID exist.
         *  @return An Array of EducationalAttainments. */
        public getEducationalAttainmentsPageCount(api: API, callback: IAPICallback<number>): Async {
            return EducationalAttainment.getByParentEducationalAttainmentIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of EducationalAttainments by ParentEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainments.
         *  @return An Array of EducationalAttainments. */
        public static getByParentEducationalAttainmentIDPageCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Returns the related ParentEducationalAttainment based on the unique ID of the related EducationalAttainment.
         *  @return A single EducationalAttainment, or null. */
        public getParentEducationalAttainment(api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return EducationalAttainment.getParentEducationalAttainmentForEducationalAttainment(this.id, api, callback);
        }

        /** Returns the related ParentEducationalAttainment based on the unique ID of the related EducationalAttainment.
         *  @param educationalAttainmentID The ID of the EducationalAttainment to retrieve.
         *  @return A single EducationalAttainment, or null. */
        public static getParentEducationalAttainmentForEducationalAttainment(educationalAttainmentID: number, api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return api.executeEndpoint<EducationalAttainment>(Endpoint.fromSelf<EducationalAttainment>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }
    }
    
    export class EducationalAttainment extends BaseEducationalAttainment { }

    /** Contains properties and static functionality for the EducationalAttainmentRelation type. */
    export class BaseEducationalAttainmentRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorEducationalAttainmentID: new PropertyMap("ancestorEducationalAttainmentID", "AncestorEducationalAttainmentID"),
            descendantEducationalAttainmentID: new PropertyMap("descendantEducationalAttainmentID", "DescendantEducationalAttainmentID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorEducationalAttainmentID: number = null;
        public descendantEducationalAttainmentID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseEducationalAttainmentRelation.Fields; }

        /** Gets a list of all of the EducationalAttainmentRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of EducationalAttainmentRelations */
        public static getAll(api: API, callback: IAPICallback<Array<EducationalAttainmentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<EducationalAttainmentRelation>>(Endpoint.fromSelf<Array<EducationalAttainmentRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many EducationalAttainmentRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the EducationalAttainmentRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the EducationalAttainmentRelation with the specified primary key.
         *  @param id The primary key of the EducationalAttainmentRelation to return.
         *  @return The matching EducationalAttainmentRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<EducationalAttainmentRelation>): Async {
            return api.executeEndpoint<EducationalAttainmentRelation>(Endpoint.fromSelf<EducationalAttainmentRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of EducationalAttainmentRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All EducationalAttainmentRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<EducationalAttainmentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<EducationalAttainmentRelation>>(Endpoint.fromSelf<Array<EducationalAttainmentRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many EducationalAttainmentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of EducationalAttainmentRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of EducationalAttainmentRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of EducationalAttainmentRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets EducationalAttainmentRelations by AncestorEducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        public static getByAncestorEducationalAttainmentID(educationalAttainmentID: number, api: API, callback: IAPICallback<Array<EducationalAttainmentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<EducationalAttainmentRelation>>(Endpoint.fromSelf<Array<EducationalAttainmentRelation>>(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page, pageSize);
        }

        /** Gets how many EducationalAttainmentRelations by AncestorEducationalAttainmentID exist. 
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        public static getByAncestorEducationalAttainmentIDCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Gets how many pages of EducationalAttainmentRelations by AncestorEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        public static getByAncestorEducationalAttainmentIDPageCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Returns the related AncestorducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @return A single EducationalAttainmentRelation, or null. */
        public getAncestorducationalAttainment(api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return EducationalAttainmentRelation.getAncestorducationalAttainmentForEducationalAttainmentRelation(this.id, api, callback);
        }

        /** Returns the related AncestorducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @param educationalAttainmentRelationID The ID of the EducationalAttainmentRelation to retrieve.
         *  @return A single EducationalAttainmentRelation, or null. */
        public static getAncestorducationalAttainmentForEducationalAttainmentRelation(educationalAttainmentRelationID: number, api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return api.executeEndpoint<EducationalAttainment>(Endpoint.fromSelf<EducationalAttainment>(), callback, { educationalAttainmentRelationID: educationalAttainmentRelationID });
        }

        /** Gets EducationalAttainmentRelations by DescendantEducationalAttainmentID.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        public static getByDescendantEducationalAttainmentID(educationalAttainmentID: number, api: API, callback: IAPICallback<Array<EducationalAttainmentRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<EducationalAttainmentRelation>>(Endpoint.fromSelf<Array<EducationalAttainmentRelation>>(), callback, { educationalAttainmentID: educationalAttainmentID }, null, page, pageSize);
        }

        /** Gets how many EducationalAttainmentRelations by DescendantEducationalAttainmentID exist. 
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        public static getByDescendantEducationalAttainmentIDCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Gets how many pages of EducationalAttainmentRelations by DescendantEducationalAttainmentID exist.
         *  @param educationalAttainmentID The ID of the EducationalAttainment for which to retrieve the child EducationalAttainmentRelations.
         *  @return An Array of EducationalAttainmentRelations. */
        public static getByDescendantEducationalAttainmentIDPageCount(educationalAttainmentID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { educationalAttainmentID: educationalAttainmentID });
        }

        /** Returns the related DescendantEducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @return A single EducationalAttainmentRelation, or null. */
        public getDescendantEducationalAttainment(api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return EducationalAttainmentRelation.getDescendantEducationalAttainmentForEducationalAttainmentRelation(this.id, api, callback);
        }

        /** Returns the related DescendantEducationalAttainment based on the unique ID of the related EducationalAttainmentRelation.
         *  @param educationalAttainmentRelationID The ID of the EducationalAttainmentRelation to retrieve.
         *  @return A single EducationalAttainmentRelation, or null. */
        public static getDescendantEducationalAttainmentForEducationalAttainmentRelation(educationalAttainmentRelationID: number, api: API, callback: IAPICallback<EducationalAttainment>): Async {
            return api.executeEndpoint<EducationalAttainment>(Endpoint.fromSelf<EducationalAttainment>(), callback, { educationalAttainmentRelationID: educationalAttainmentRelationID });
        }
    }
    
    export class EducationalAttainmentRelation extends BaseEducationalAttainmentRelation { }

    /** Contains properties and static functionality for the FamilyType type. */
    export class BaseFamilyType extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentFamilyTypeID: new PropertyMap("parentFamilyTypeID", "ParentFamilyTypeID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentFamilyTypeID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseFamilyType.Fields; }

        /** Gets a list of all of the FamilyTypes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of FamilyTypes */
        public static getAll(api: API, callback: IAPICallback<Array<FamilyType>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<FamilyType>>(Endpoint.fromSelf<Array<FamilyType>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many FamilyTypes exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the FamilyTypes method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the FamilyType with the specified primary key.
         *  @param id The primary key of the FamilyType to return.
         *  @return The matching FamilyType, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<FamilyType>): Async {
            return api.executeEndpoint<FamilyType>(Endpoint.fromSelf<FamilyType>(), callback, { id: id });
        }

        /** Returns a filtered collection of FamilyTypes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All FamilyTypes which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<FamilyType>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<FamilyType>>(Endpoint.fromSelf<Array<FamilyType>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many FamilyTypes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of FamilyTypes which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of FamilyTypes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of FamilyTypeswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets FamilyTypes by ParentFamilyTypeID.
         *  @return An Array of FamilyTypes. */
        public getFamilyTypes(api: API, callback: IAPICallback<Array<FamilyType>>, page?: number, pageSize?: number): Async {
            return FamilyType.getByParentFamilyTypeID(this.id, api, callback, page, pageSize);
        }

        /** Gets FamilyTypes by ParentFamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypes.
         *  @return An Array of FamilyTypes. */
        public static getByParentFamilyTypeID(familyTypeID: number, api: API, callback: IAPICallback<Array<FamilyType>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<FamilyType>>(Endpoint.fromSelf<Array<FamilyType>>(), callback, { familyTypeID: familyTypeID }, null, page, pageSize);
        }

        /** Gets how many FamilyTypes by ParentFamilyTypeID exist. 
         *  @return An Array of FamilyTypes. */
        public getFamilyTypesCount(api: API, callback: IAPICallback<number>): Async {
            return FamilyType.getByParentFamilyTypeIDCount(this.id, api, callback);
        }

        /** Gets how many FamilyTypes by ParentFamilyTypeID exist. 
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypes.
         *  @return An Array of FamilyTypes. */
        public static getByParentFamilyTypeIDCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Gets how many pages of FamilyTypes by ParentFamilyTypeID exist.
         *  @return An Array of FamilyTypes. */
        public getFamilyTypesPageCount(api: API, callback: IAPICallback<number>): Async {
            return FamilyType.getByParentFamilyTypeIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of FamilyTypes by ParentFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypes.
         *  @return An Array of FamilyTypes. */
        public static getByParentFamilyTypeIDPageCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Returns the related ParentFamilyType based on the unique ID of the related FamilyType.
         *  @return A single FamilyType, or null. */
        public getParentFamilyType(api: API, callback: IAPICallback<FamilyType>): Async {
            return FamilyType.getParentFamilyTypeForFamilyType(this.id, api, callback);
        }

        /** Returns the related ParentFamilyType based on the unique ID of the related FamilyType.
         *  @param familyTypeID The ID of the FamilyType to retrieve.
         *  @return A single FamilyType, or null. */
        public static getParentFamilyTypeForFamilyType(familyTypeID: number, api: API, callback: IAPICallback<FamilyType>): Async {
            return api.executeEndpoint<FamilyType>(Endpoint.fromSelf<FamilyType>(), callback, { familyTypeID: familyTypeID });
        }
    }
    
    export class FamilyType extends BaseFamilyType { }

    /** Contains properties and static functionality for the FamilyTypeRelation type. */
    export class BaseFamilyTypeRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorFamilyTypeID: new PropertyMap("ancestorFamilyTypeID", "AncestorFamilyTypeID"),
            descendantFamilyTypeID: new PropertyMap("descendantFamilyTypeID", "DescendantFamilyTypeID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorFamilyTypeID: number = null;
        public descendantFamilyTypeID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseFamilyTypeRelation.Fields; }

        /** Gets a list of all of the FamilyTypeRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of FamilyTypeRelations */
        public static getAll(api: API, callback: IAPICallback<Array<FamilyTypeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<FamilyTypeRelation>>(Endpoint.fromSelf<Array<FamilyTypeRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many FamilyTypeRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the FamilyTypeRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the FamilyTypeRelation with the specified primary key.
         *  @param id The primary key of the FamilyTypeRelation to return.
         *  @return The matching FamilyTypeRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<FamilyTypeRelation>): Async {
            return api.executeEndpoint<FamilyTypeRelation>(Endpoint.fromSelf<FamilyTypeRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of FamilyTypeRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All FamilyTypeRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<FamilyTypeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<FamilyTypeRelation>>(Endpoint.fromSelf<Array<FamilyTypeRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many FamilyTypeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of FamilyTypeRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of FamilyTypeRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of FamilyTypeRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets FamilyTypeRelations by AncestorFamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        public static getByAncestorFamilyTypeID(familyTypeID: number, api: API, callback: IAPICallback<Array<FamilyTypeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<FamilyTypeRelation>>(Endpoint.fromSelf<Array<FamilyTypeRelation>>(), callback, { familyTypeID: familyTypeID }, null, page, pageSize);
        }

        /** Gets how many FamilyTypeRelations by AncestorFamilyTypeID exist. 
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        public static getByAncestorFamilyTypeIDCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Gets how many pages of FamilyTypeRelations by AncestorFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        public static getByAncestorFamilyTypeIDPageCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Returns the related AncestorFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @return A single FamilyTypeRelation, or null. */
        public getAncestorFamilyType(api: API, callback: IAPICallback<FamilyType>): Async {
            return FamilyTypeRelation.getAncestorFamilyTypeForFamilyTypeRelation(this.id, api, callback);
        }

        /** Returns the related AncestorFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @param familyTypeRelationID The ID of the FamilyTypeRelation to retrieve.
         *  @return A single FamilyTypeRelation, or null. */
        public static getAncestorFamilyTypeForFamilyTypeRelation(familyTypeRelationID: number, api: API, callback: IAPICallback<FamilyType>): Async {
            return api.executeEndpoint<FamilyType>(Endpoint.fromSelf<FamilyType>(), callback, { familyTypeRelationID: familyTypeRelationID });
        }

        /** Gets FamilyTypeRelations by DescendantFamilyTypeID.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        public static getByDescendantFamilyTypeID(familyTypeID: number, api: API, callback: IAPICallback<Array<FamilyTypeRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<FamilyTypeRelation>>(Endpoint.fromSelf<Array<FamilyTypeRelation>>(), callback, { familyTypeID: familyTypeID }, null, page, pageSize);
        }

        /** Gets how many FamilyTypeRelations by DescendantFamilyTypeID exist. 
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        public static getByDescendantFamilyTypeIDCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Gets how many pages of FamilyTypeRelations by DescendantFamilyTypeID exist.
         *  @param familyTypeID The ID of the FamilyType for which to retrieve the child FamilyTypeRelations.
         *  @return An Array of FamilyTypeRelations. */
        public static getByDescendantFamilyTypeIDPageCount(familyTypeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { familyTypeID: familyTypeID });
        }

        /** Returns the related DescendantFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @return A single FamilyTypeRelation, or null. */
        public getDescendantFamilyType(api: API, callback: IAPICallback<FamilyType>): Async {
            return FamilyTypeRelation.getDescendantFamilyTypeForFamilyTypeRelation(this.id, api, callback);
        }

        /** Returns the related DescendantFamilyType based on the unique ID of the related FamilyTypeRelation.
         *  @param familyTypeRelationID The ID of the FamilyTypeRelation to retrieve.
         *  @return A single FamilyTypeRelation, or null. */
        public static getDescendantFamilyTypeForFamilyTypeRelation(familyTypeRelationID: number, api: API, callback: IAPICallback<FamilyType>): Async {
            return api.executeEndpoint<FamilyType>(Endpoint.fromSelf<FamilyType>(), callback, { familyTypeRelationID: familyTypeRelationID });
        }
    }
    
    export class FamilyTypeRelation extends BaseFamilyTypeRelation { }

    /** Contains properties and static functionality for the Geography type. */
    export class BaseGeography extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentGeographyID: new PropertyMap("parentGeographyID", "ParentGeographyID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentGeographyID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseGeography.Fields; }

        /** Gets a list of all of the Geographies in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Geographies */
        public static getAll(api: API, callback: IAPICallback<Array<Geography>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Geography>>(Endpoint.fromSelf<Array<Geography>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Geographies exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Geographies method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Geography with the specified primary key.
         *  @param id The primary key of the Geography to return.
         *  @return The matching Geography, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Geography>): Async {
            return api.executeEndpoint<Geography>(Endpoint.fromSelf<Geography>(), callback, { id: id });
        }

        /** Returns a filtered collection of Geographies based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Geographies which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Geography>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Geography>>(Endpoint.fromSelf<Array<Geography>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Geographies exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Geographies which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Geographies exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Geographieswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Geographies by ParentGeographyID.
         *  @return An Array of Geographies. */
        public getGeographies(api: API, callback: IAPICallback<Array<Geography>>, page?: number, pageSize?: number): Async {
            return Geography.getByParentGeographyID(this.id, api, callback, page, pageSize);
        }

        /** Gets Geographies by ParentGeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child Geographies.
         *  @return An Array of Geographies. */
        public static getByParentGeographyID(geographyID: number, api: API, callback: IAPICallback<Array<Geography>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Geography>>(Endpoint.fromSelf<Array<Geography>>(), callback, { geographyID: geographyID }, null, page, pageSize);
        }

        /** Gets how many Geographies by ParentGeographyID exist. 
         *  @return An Array of Geographies. */
        public getGeographiesCount(api: API, callback: IAPICallback<number>): Async {
            return Geography.getByParentGeographyIDCount(this.id, api, callback);
        }

        /** Gets how many Geographies by ParentGeographyID exist. 
         *  @param geographyID The ID of the Geography for which to retrieve the child Geographies.
         *  @return An Array of Geographies. */
        public static getByParentGeographyIDCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Gets how many pages of Geographies by ParentGeographyID exist.
         *  @return An Array of Geographies. */
        public getGeographiesPageCount(api: API, callback: IAPICallback<number>): Async {
            return Geography.getByParentGeographyIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of Geographies by ParentGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child Geographies.
         *  @return An Array of Geographies. */
        public static getByParentGeographyIDPageCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Returns the related ParentGeography based on the unique ID of the related Geography.
         *  @return A single Geography, or null. */
        public getParentGeography(api: API, callback: IAPICallback<Geography>): Async {
            return Geography.getParentGeographyForGeography(this.id, api, callback);
        }

        /** Returns the related ParentGeography based on the unique ID of the related Geography.
         *  @param geographyID The ID of the Geography to retrieve.
         *  @return A single Geography, or null. */
        public static getParentGeographyForGeography(geographyID: number, api: API, callback: IAPICallback<Geography>): Async {
            return api.executeEndpoint<Geography>(Endpoint.fromSelf<Geography>(), callback, { geographyID: geographyID });
        }
    }
    
    export class Geography extends BaseGeography { }

    /** Contains properties and static functionality for the GeographyRelation type. */
    export class BaseGeographyRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorGeographyID: new PropertyMap("ancestorGeographyID", "AncestorGeographyID"),
            descendantGeographyID: new PropertyMap("descendantGeographyID", "DescendantGeographyID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorGeographyID: number = null;
        public descendantGeographyID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseGeographyRelation.Fields; }

        /** Gets a list of all of the GeographyRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of GeographyRelations */
        public static getAll(api: API, callback: IAPICallback<Array<GeographyRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GeographyRelation>>(Endpoint.fromSelf<Array<GeographyRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many GeographyRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the GeographyRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the GeographyRelation with the specified primary key.
         *  @param id The primary key of the GeographyRelation to return.
         *  @return The matching GeographyRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<GeographyRelation>): Async {
            return api.executeEndpoint<GeographyRelation>(Endpoint.fromSelf<GeographyRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of GeographyRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All GeographyRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<GeographyRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GeographyRelation>>(Endpoint.fromSelf<Array<GeographyRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many GeographyRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of GeographyRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of GeographyRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of GeographyRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets GeographyRelations by AncestorGeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        public static getByAncestorGeographyID(geographyID: number, api: API, callback: IAPICallback<Array<GeographyRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GeographyRelation>>(Endpoint.fromSelf<Array<GeographyRelation>>(), callback, { geographyID: geographyID }, null, page, pageSize);
        }

        /** Gets how many GeographyRelations by AncestorGeographyID exist. 
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        public static getByAncestorGeographyIDCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Gets how many pages of GeographyRelations by AncestorGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        public static getByAncestorGeographyIDPageCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Returns the related AncestorGeography based on the unique ID of the related GeographyRelation.
         *  @return A single GeographyRelation, or null. */
        public getAncestorGeography(api: API, callback: IAPICallback<Geography>): Async {
            return GeographyRelation.getAncestorGeographyForGeographyRelation(this.id, api, callback);
        }

        /** Returns the related AncestorGeography based on the unique ID of the related GeographyRelation.
         *  @param geographyRelationID The ID of the GeographyRelation to retrieve.
         *  @return A single GeographyRelation, or null. */
        public static getAncestorGeographyForGeographyRelation(geographyRelationID: number, api: API, callback: IAPICallback<Geography>): Async {
            return api.executeEndpoint<Geography>(Endpoint.fromSelf<Geography>(), callback, { geographyRelationID: geographyRelationID });
        }

        /** Gets GeographyRelations by DescendantGeographyID.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        public static getByDescendantGeographyID(geographyID: number, api: API, callback: IAPICallback<Array<GeographyRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GeographyRelation>>(Endpoint.fromSelf<Array<GeographyRelation>>(), callback, { geographyID: geographyID }, null, page, pageSize);
        }

        /** Gets how many GeographyRelations by DescendantGeographyID exist. 
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        public static getByDescendantGeographyIDCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Gets how many pages of GeographyRelations by DescendantGeographyID exist.
         *  @param geographyID The ID of the Geography for which to retrieve the child GeographyRelations.
         *  @return An Array of GeographyRelations. */
        public static getByDescendantGeographyIDPageCount(geographyID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { geographyID: geographyID });
        }

        /** Returns the related DescendantGeography based on the unique ID of the related GeographyRelation.
         *  @return A single GeographyRelation, or null. */
        public getDescendantGeography(api: API, callback: IAPICallback<Geography>): Async {
            return GeographyRelation.getDescendantGeographyForGeographyRelation(this.id, api, callback);
        }

        /** Returns the related DescendantGeography based on the unique ID of the related GeographyRelation.
         *  @param geographyRelationID The ID of the GeographyRelation to retrieve.
         *  @return A single GeographyRelation, or null. */
        public static getDescendantGeographyForGeographyRelation(geographyRelationID: number, api: API, callback: IAPICallback<Geography>): Async {
            return api.executeEndpoint<Geography>(Endpoint.fromSelf<Geography>(), callback, { geographyRelationID: geographyRelationID });
        }
    }
    
    export class GeographyRelation extends BaseGeographyRelation { }

    /** Contains properties and static functionality for the GlossaryTerm type. */
    export class BaseGlossaryTerm extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            term: new PropertyMap("term", "Term"),
            definition: new PropertyMap("definition", "Definition"),
            source: new PropertyMap("source", "Source"),
            sourceUrl1ID: new PropertyMap("sourceUrl1ID", "SourceUrl1ID"),
            sourceUrl2ID: new PropertyMap("sourceUrl2ID", "SourceUrl2ID"),
            modificationDate: new PropertyMap("modificationDate", "ModificationDate")
        };

        public id: number = null;
        public term: string = null;
        public definition: string = null;
        public source: string = null;
        public sourceUrl1ID: number = null;
        public sourceUrl2ID: number = null;
        public modificationDate: Date = null;

        protected getFields(): any { return BaseGlossaryTerm.Fields; }

        /** Gets a list of all of the GlossaryTerms in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of GlossaryTerms */
        public static getAll(api: API, callback: IAPICallback<Array<GlossaryTerm>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GlossaryTerm>>(Endpoint.fromSelf<Array<GlossaryTerm>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modificationDate = this.parseDate(this.modificationDate);
        }

        /** Gets how many GlossaryTerms exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the GlossaryTerms method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the GlossaryTerm with the specified primary key.
         *  @param id The primary key of the GlossaryTerm to return.
         *  @return The matching GlossaryTerm, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<GlossaryTerm>): Async {
            return api.executeEndpoint<GlossaryTerm>(Endpoint.fromSelf<GlossaryTerm>(), callback, { id: id });
        }

        /** Returns a filtered collection of GlossaryTerms based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All GlossaryTerms which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<GlossaryTerm>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GlossaryTerm>>(Endpoint.fromSelf<Array<GlossaryTerm>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many GlossaryTerms exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of GlossaryTerms which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of GlossaryTerms exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of GlossaryTermswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets GlossaryTerms by SourceUrl1ID.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        public static getBySourceUrl1ID(urlID: number, api: API, callback: IAPICallback<Array<GlossaryTerm>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GlossaryTerm>>(Endpoint.fromSelf<Array<GlossaryTerm>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many GlossaryTerms by SourceUrl1ID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        public static getBySourceUrl1IDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of GlossaryTerms by SourceUrl1ID exist.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        public static getBySourceUrl1IDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related SourceUrl1 based on the unique ID of the related GlossaryTerm.
         *  @return A single GlossaryTerm, or null. */
        public getSourceUrl1(api: API, callback: IAPICallback<Url>): Async {
            return GlossaryTerm.getSourceUrl1ForGlossaryTerm(this.id, api, callback);
        }

        /** Returns the related SourceUrl1 based on the unique ID of the related GlossaryTerm.
         *  @param glossaryTermID The ID of the GlossaryTerm to retrieve.
         *  @return A single GlossaryTerm, or null. */
        public static getSourceUrl1ForGlossaryTerm(glossaryTermID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { glossaryTermID: glossaryTermID });
        }

        /** Gets GlossaryTerms by SourceUrl2ID.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        public static getBySourceUrl2ID(urlID: number, api: API, callback: IAPICallback<Array<GlossaryTerm>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<GlossaryTerm>>(Endpoint.fromSelf<Array<GlossaryTerm>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many GlossaryTerms by SourceUrl2ID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        public static getBySourceUrl2IDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of GlossaryTerms by SourceUrl2ID exist.
         *  @param urlID The ID of the Url for which to retrieve the child GlossaryTerms.
         *  @return An Array of GlossaryTerms. */
        public static getBySourceUrl2IDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related SourceUrl2 based on the unique ID of the related GlossaryTerm.
         *  @return A single GlossaryTerm, or null. */
        public getSourceUrl2(api: API, callback: IAPICallback<Url>): Async {
            return GlossaryTerm.getSourceUrl2ForGlossaryTerm(this.id, api, callback);
        }

        /** Returns the related SourceUrl2 based on the unique ID of the related GlossaryTerm.
         *  @param glossaryTermID The ID of the GlossaryTerm to retrieve.
         *  @return A single GlossaryTerm, or null. */
        public static getSourceUrl2ForGlossaryTerm(glossaryTermID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { glossaryTermID: glossaryTermID });
        }
    }
    
    export class GlossaryTerm extends BaseGlossaryTerm { }

    /** Contains properties and static functionality for the HealthInsuranceStatus type. */
    export class BaseHealthInsuranceStatus extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentHealthInsuranceStatusID: new PropertyMap("parentHealthInsuranceStatusID", "ParentHealthInsuranceStatusID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentHealthInsuranceStatusID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseHealthInsuranceStatus.Fields; }

        /** Gets a list of all of the HealthInsuranceStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of HealthInsuranceStatuses */
        public static getAll(api: API, callback: IAPICallback<Array<HealthInsuranceStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HealthInsuranceStatus>>(Endpoint.fromSelf<Array<HealthInsuranceStatus>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many HealthInsuranceStatuses exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the HealthInsuranceStatuses method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the HealthInsuranceStatus with the specified primary key.
         *  @param id The primary key of the HealthInsuranceStatus to return.
         *  @return The matching HealthInsuranceStatus, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return api.executeEndpoint<HealthInsuranceStatus>(Endpoint.fromSelf<HealthInsuranceStatus>(), callback, { id: id });
        }

        /** Returns a filtered collection of HealthInsuranceStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All HealthInsuranceStatuses which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<HealthInsuranceStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HealthInsuranceStatus>>(Endpoint.fromSelf<Array<HealthInsuranceStatus>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many HealthInsuranceStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of HealthInsuranceStatuses which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of HealthInsuranceStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of HealthInsuranceStatuseswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets HealthInsuranceStatuses by ParentHealthInsuranceStatusID.
         *  @return An Array of HealthInsuranceStatuses. */
        public getHealthInsuranceStatuses(api: API, callback: IAPICallback<Array<HealthInsuranceStatus>>, page?: number, pageSize?: number): Async {
            return HealthInsuranceStatus.getByParentHealthInsuranceStatusID(this.id, api, callback, page, pageSize);
        }

        /** Gets HealthInsuranceStatuses by ParentHealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatuses.
         *  @return An Array of HealthInsuranceStatuses. */
        public static getByParentHealthInsuranceStatusID(healthInsuranceStatusID: number, api: API, callback: IAPICallback<Array<HealthInsuranceStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HealthInsuranceStatus>>(Endpoint.fromSelf<Array<HealthInsuranceStatus>>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page, pageSize);
        }

        /** Gets how many HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist. 
         *  @return An Array of HealthInsuranceStatuses. */
        public getHealthInsuranceStatusesCount(api: API, callback: IAPICallback<number>): Async {
            return HealthInsuranceStatus.getByParentHealthInsuranceStatusIDCount(this.id, api, callback);
        }

        /** Gets how many HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist. 
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatuses.
         *  @return An Array of HealthInsuranceStatuses. */
        public static getByParentHealthInsuranceStatusIDCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Gets how many pages of HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist.
         *  @return An Array of HealthInsuranceStatuses. */
        public getHealthInsuranceStatusesPageCount(api: API, callback: IAPICallback<number>): Async {
            return HealthInsuranceStatus.getByParentHealthInsuranceStatusIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of HealthInsuranceStatuses by ParentHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatuses.
         *  @return An Array of HealthInsuranceStatuses. */
        public static getByParentHealthInsuranceStatusIDPageCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Returns the related ParentHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatus.
         *  @return A single HealthInsuranceStatus, or null. */
        public getParentHealthInsuranceStatus(api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return HealthInsuranceStatus.getParentHealthInsuranceStatusForHealthInsuranceStatus(this.id, api, callback);
        }

        /** Returns the related ParentHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatus.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus to retrieve.
         *  @return A single HealthInsuranceStatus, or null. */
        public static getParentHealthInsuranceStatusForHealthInsuranceStatus(healthInsuranceStatusID: number, api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return api.executeEndpoint<HealthInsuranceStatus>(Endpoint.fromSelf<HealthInsuranceStatus>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }
    }
    
    export class HealthInsuranceStatus extends BaseHealthInsuranceStatus { }

    /** Contains properties and static functionality for the HealthInsuranceStatusRelation type. */
    export class BaseHealthInsuranceStatusRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorHealthInsuranceStatusID: new PropertyMap("ancestorHealthInsuranceStatusID", "AncestorHealthInsuranceStatusID"),
            descendantHealthInsuranceStatusID: new PropertyMap("descendantHealthInsuranceStatusID", "DescendantHealthInsuranceStatusID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorHealthInsuranceStatusID: number = null;
        public descendantHealthInsuranceStatusID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseHealthInsuranceStatusRelation.Fields; }

        /** Gets a list of all of the HealthInsuranceStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of HealthInsuranceStatusRelations */
        public static getAll(api: API, callback: IAPICallback<Array<HealthInsuranceStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HealthInsuranceStatusRelation>>(Endpoint.fromSelf<Array<HealthInsuranceStatusRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many HealthInsuranceStatusRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the HealthInsuranceStatusRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the HealthInsuranceStatusRelation with the specified primary key.
         *  @param id The primary key of the HealthInsuranceStatusRelation to return.
         *  @return The matching HealthInsuranceStatusRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<HealthInsuranceStatusRelation>): Async {
            return api.executeEndpoint<HealthInsuranceStatusRelation>(Endpoint.fromSelf<HealthInsuranceStatusRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of HealthInsuranceStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All HealthInsuranceStatusRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<HealthInsuranceStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HealthInsuranceStatusRelation>>(Endpoint.fromSelf<Array<HealthInsuranceStatusRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many HealthInsuranceStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of HealthInsuranceStatusRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of HealthInsuranceStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of HealthInsuranceStatusRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets HealthInsuranceStatusRelations by AncestorHealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        public static getByAncestorHealthInsuranceStatusID(healthInsuranceStatusID: number, api: API, callback: IAPICallback<Array<HealthInsuranceStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HealthInsuranceStatusRelation>>(Endpoint.fromSelf<Array<HealthInsuranceStatusRelation>>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page, pageSize);
        }

        /** Gets how many HealthInsuranceStatusRelations by AncestorHealthInsuranceStatusID exist. 
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        public static getByAncestorHealthInsuranceStatusIDCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Gets how many pages of HealthInsuranceStatusRelations by AncestorHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        public static getByAncestorHealthInsuranceStatusIDPageCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Returns the related AncestorHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        public getAncestorHealthInsuranceStatus(api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return HealthInsuranceStatusRelation.getAncestorHealthInsuranceStatusForHealthInsuranceStatusRelation(this.id, api, callback);
        }

        /** Returns the related AncestorHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @param healthInsuranceStatusRelationID The ID of the HealthInsuranceStatusRelation to retrieve.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        public static getAncestorHealthInsuranceStatusForHealthInsuranceStatusRelation(healthInsuranceStatusRelationID: number, api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return api.executeEndpoint<HealthInsuranceStatus>(Endpoint.fromSelf<HealthInsuranceStatus>(), callback, { healthInsuranceStatusRelationID: healthInsuranceStatusRelationID });
        }

        /** Gets HealthInsuranceStatusRelations by DescendantHealthInsuranceStatusID.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        public static getByDescendantHealthInsuranceStatusID(healthInsuranceStatusID: number, api: API, callback: IAPICallback<Array<HealthInsuranceStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HealthInsuranceStatusRelation>>(Endpoint.fromSelf<Array<HealthInsuranceStatusRelation>>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID }, null, page, pageSize);
        }

        /** Gets how many HealthInsuranceStatusRelations by DescendantHealthInsuranceStatusID exist. 
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        public static getByDescendantHealthInsuranceStatusIDCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Gets how many pages of HealthInsuranceStatusRelations by DescendantHealthInsuranceStatusID exist.
         *  @param healthInsuranceStatusID The ID of the HealthInsuranceStatus for which to retrieve the child HealthInsuranceStatusRelations.
         *  @return An Array of HealthInsuranceStatusRelations. */
        public static getByDescendantHealthInsuranceStatusIDPageCount(healthInsuranceStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { healthInsuranceStatusID: healthInsuranceStatusID });
        }

        /** Returns the related DescendantHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        public getDescendantHealthInsuranceStatus(api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return HealthInsuranceStatusRelation.getDescendantHealthInsuranceStatusForHealthInsuranceStatusRelation(this.id, api, callback);
        }

        /** Returns the related DescendantHealthInsuranceStatus based on the unique ID of the related HealthInsuranceStatusRelation.
         *  @param healthInsuranceStatusRelationID The ID of the HealthInsuranceStatusRelation to retrieve.
         *  @return A single HealthInsuranceStatusRelation, or null. */
        public static getDescendantHealthInsuranceStatusForHealthInsuranceStatusRelation(healthInsuranceStatusRelationID: number, api: API, callback: IAPICallback<HealthInsuranceStatus>): Async {
            return api.executeEndpoint<HealthInsuranceStatus>(Endpoint.fromSelf<HealthInsuranceStatus>(), callback, { healthInsuranceStatusRelationID: healthInsuranceStatusRelationID });
        }
    }
    
    export class HealthInsuranceStatusRelation extends BaseHealthInsuranceStatusRelation { }

    /** Contains properties and static functionality for the HP2020TSM type. */
    export class BaseHP2020TSM extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            HP2020TSMName: new PropertyMap("HP2020TSMName", "HP2020TSMName"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate")
        };

        public id: number = null;
        public HP2020TSMName: string = null;
        public modifyDate: Date = null;

        protected getFields(): any { return BaseHP2020TSM.Fields; }

        /** Gets a list of all of the HP2020TSMs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of HP2020TSMs */
        public static getAll(api: API, callback: IAPICallback<Array<HP2020TSM>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HP2020TSM>>(Endpoint.fromSelf<Array<HP2020TSM>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
        }

        /** Gets how many HP2020TSMs exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the HP2020TSMs method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the HP2020TSM with the specified primary key.
         *  @param id The primary key of the HP2020TSM to return.
         *  @return The matching HP2020TSM, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<HP2020TSM>): Async {
            return api.executeEndpoint<HP2020TSM>(Endpoint.fromSelf<HP2020TSM>(), callback, { id: id });
        }

        /** Returns a filtered collection of HP2020TSMs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All HP2020TSMs which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<HP2020TSM>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<HP2020TSM>>(Endpoint.fromSelf<Array<HP2020TSM>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many HP2020TSMs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of HP2020TSMs which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of HP2020TSMs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of HP2020TSMswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class HP2020TSM extends BaseHP2020TSM { }

    /** Contains properties and static functionality for the IncomeAndPovertyStatus type. */
    export class BaseIncomeAndPovertyStatus extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentIncomeAndPovertyStatusID: new PropertyMap("parentIncomeAndPovertyStatusID", "ParentIncomeAndPovertyStatusID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentIncomeAndPovertyStatusID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseIncomeAndPovertyStatus.Fields; }

        /** Gets a list of all of the IncomeAndPovertyStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IncomeAndPovertyStatuses */
        public static getAll(api: API, callback: IAPICallback<Array<IncomeAndPovertyStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IncomeAndPovertyStatus>>(Endpoint.fromSelf<Array<IncomeAndPovertyStatus>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IncomeAndPovertyStatuses exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IncomeAndPovertyStatuses method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IncomeAndPovertyStatus with the specified primary key.
         *  @param id The primary key of the IncomeAndPovertyStatus to return.
         *  @return The matching IncomeAndPovertyStatus, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return api.executeEndpoint<IncomeAndPovertyStatus>(Endpoint.fromSelf<IncomeAndPovertyStatus>(), callback, { id: id });
        }

        /** Returns a filtered collection of IncomeAndPovertyStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IncomeAndPovertyStatuses which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IncomeAndPovertyStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IncomeAndPovertyStatus>>(Endpoint.fromSelf<Array<IncomeAndPovertyStatus>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IncomeAndPovertyStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IncomeAndPovertyStatuses which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IncomeAndPovertyStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IncomeAndPovertyStatuseswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID.
         *  @return An Array of IncomeAndPovertyStatuses. */
        public getIncomeAndPovertyStatuses(api: API, callback: IAPICallback<Array<IncomeAndPovertyStatus>>, page?: number, pageSize?: number): Async {
            return IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusID(this.id, api, callback, page, pageSize);
        }

        /** Gets IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatuses.
         *  @return An Array of IncomeAndPovertyStatuses. */
        public static getByParentIncomeAndPovertyStatusID(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<Array<IncomeAndPovertyStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IncomeAndPovertyStatus>>(Endpoint.fromSelf<Array<IncomeAndPovertyStatus>>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page, pageSize);
        }

        /** Gets how many IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist. 
         *  @return An Array of IncomeAndPovertyStatuses. */
        public getIncomeAndPovertyStatusesCount(api: API, callback: IAPICallback<number>): Async {
            return IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusIDCount(this.id, api, callback);
        }

        /** Gets how many IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist. 
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatuses.
         *  @return An Array of IncomeAndPovertyStatuses. */
        public static getByParentIncomeAndPovertyStatusIDCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Gets how many pages of IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist.
         *  @return An Array of IncomeAndPovertyStatuses. */
        public getIncomeAndPovertyStatusesPageCount(api: API, callback: IAPICallback<number>): Async {
            return IncomeAndPovertyStatus.getByParentIncomeAndPovertyStatusIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of IncomeAndPovertyStatuses by ParentIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatuses.
         *  @return An Array of IncomeAndPovertyStatuses. */
        public static getByParentIncomeAndPovertyStatusIDPageCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Returns the related ParentIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatus.
         *  @return A single IncomeAndPovertyStatus, or null. */
        public getParentIncomeAndPovertyStatus(api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return IncomeAndPovertyStatus.getParentIncomeAndPovertyStatusForIncomeAndPovertyStatus(this.id, api, callback);
        }

        /** Returns the related ParentIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatus.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus to retrieve.
         *  @return A single IncomeAndPovertyStatus, or null. */
        public static getParentIncomeAndPovertyStatusForIncomeAndPovertyStatus(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return api.executeEndpoint<IncomeAndPovertyStatus>(Endpoint.fromSelf<IncomeAndPovertyStatus>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }
    }
    
    export class IncomeAndPovertyStatus extends BaseIncomeAndPovertyStatus { }

    /** Contains properties and static functionality for the IncomeAndPovertyStatusRelation type. */
    export class BaseIncomeAndPovertyStatusRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorIncomeAndPovertyStatusID: new PropertyMap("ancestorIncomeAndPovertyStatusID", "AncestorIncomeAndPovertyStatusID"),
            descendantIncomeAndPovertyStatusID: new PropertyMap("descendantIncomeAndPovertyStatusID", "DescendantIncomeAndPovertyStatusID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorIncomeAndPovertyStatusID: number = null;
        public descendantIncomeAndPovertyStatusID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseIncomeAndPovertyStatusRelation.Fields; }

        /** Gets a list of all of the IncomeAndPovertyStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IncomeAndPovertyStatusRelations */
        public static getAll(api: API, callback: IAPICallback<Array<IncomeAndPovertyStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IncomeAndPovertyStatusRelation>>(Endpoint.fromSelf<Array<IncomeAndPovertyStatusRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IncomeAndPovertyStatusRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IncomeAndPovertyStatusRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IncomeAndPovertyStatusRelation with the specified primary key.
         *  @param id The primary key of the IncomeAndPovertyStatusRelation to return.
         *  @return The matching IncomeAndPovertyStatusRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IncomeAndPovertyStatusRelation>): Async {
            return api.executeEndpoint<IncomeAndPovertyStatusRelation>(Endpoint.fromSelf<IncomeAndPovertyStatusRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of IncomeAndPovertyStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IncomeAndPovertyStatusRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IncomeAndPovertyStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IncomeAndPovertyStatusRelation>>(Endpoint.fromSelf<Array<IncomeAndPovertyStatusRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IncomeAndPovertyStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IncomeAndPovertyStatusRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IncomeAndPovertyStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IncomeAndPovertyStatusRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IncomeAndPovertyStatusRelations by AncestorIncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        public static getByAncestorIncomeAndPovertyStatusID(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<Array<IncomeAndPovertyStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IncomeAndPovertyStatusRelation>>(Endpoint.fromSelf<Array<IncomeAndPovertyStatusRelation>>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page, pageSize);
        }

        /** Gets how many IncomeAndPovertyStatusRelations by AncestorIncomeAndPovertyStatusID exist. 
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        public static getByAncestorIncomeAndPovertyStatusIDCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Gets how many pages of IncomeAndPovertyStatusRelations by AncestorIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        public static getByAncestorIncomeAndPovertyStatusIDPageCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Returns the related AncestorIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        public getAncestorIncomeAndPovertyStatus(api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return IncomeAndPovertyStatusRelation.getAncestorIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation(this.id, api, callback);
        }

        /** Returns the related AncestorIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @param incomeAndPovertyStatusRelationID The ID of the IncomeAndPovertyStatusRelation to retrieve.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        public static getAncestorIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation(incomeAndPovertyStatusRelationID: number, api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return api.executeEndpoint<IncomeAndPovertyStatus>(Endpoint.fromSelf<IncomeAndPovertyStatus>(), callback, { incomeAndPovertyStatusRelationID: incomeAndPovertyStatusRelationID });
        }

        /** Gets IncomeAndPovertyStatusRelations by DescendantIncomeAndPovertyStatusID.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        public static getByDescendantIncomeAndPovertyStatusID(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<Array<IncomeAndPovertyStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IncomeAndPovertyStatusRelation>>(Endpoint.fromSelf<Array<IncomeAndPovertyStatusRelation>>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID }, null, page, pageSize);
        }

        /** Gets how many IncomeAndPovertyStatusRelations by DescendantIncomeAndPovertyStatusID exist. 
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        public static getByDescendantIncomeAndPovertyStatusIDCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Gets how many pages of IncomeAndPovertyStatusRelations by DescendantIncomeAndPovertyStatusID exist.
         *  @param incomeAndPovertyStatusID The ID of the IncomeAndPovertyStatus for which to retrieve the child IncomeAndPovertyStatusRelations.
         *  @return An Array of IncomeAndPovertyStatusRelations. */
        public static getByDescendantIncomeAndPovertyStatusIDPageCount(incomeAndPovertyStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { incomeAndPovertyStatusID: incomeAndPovertyStatusID });
        }

        /** Returns the related DescendantIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        public getDescendantIncomeAndPovertyStatus(api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return IncomeAndPovertyStatusRelation.getDescendantIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation(this.id, api, callback);
        }

        /** Returns the related DescendantIncomeAndPovertyStatus based on the unique ID of the related IncomeAndPovertyStatusRelation.
         *  @param incomeAndPovertyStatusRelationID The ID of the IncomeAndPovertyStatusRelation to retrieve.
         *  @return A single IncomeAndPovertyStatusRelation, or null. */
        public static getDescendantIncomeAndPovertyStatusForIncomeAndPovertyStatusRelation(incomeAndPovertyStatusRelationID: number, api: API, callback: IAPICallback<IncomeAndPovertyStatus>): Async {
            return api.executeEndpoint<IncomeAndPovertyStatus>(Endpoint.fromSelf<IncomeAndPovertyStatus>(), callback, { incomeAndPovertyStatusRelationID: incomeAndPovertyStatusRelationID });
        }
    }
    
    export class IncomeAndPovertyStatusRelation extends BaseIncomeAndPovertyStatusRelation { }

    /** Contains properties and static functionality for the IndicatorDescriptionDataCategory type. */
    export class BaseIndicatorDescriptionDataCategory extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dataCategoryID: new PropertyMap("dataCategoryID", "DataCategoryID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public dataCategoryID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionDataCategory.Fields; }

        /** Gets a list of all of the IndicatorDescriptionDataCategories in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDataCategories */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionDataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataCategory>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataCategory>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDataCategories exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionDataCategories method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionDataCategory with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDataCategory to return.
         *  @return The matching IndicatorDescriptionDataCategory, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionDataCategory>): Async {
            return api.executeEndpoint<IndicatorDescriptionDataCategory>(Endpoint.fromSelf<IndicatorDescriptionDataCategory>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionDataCategories based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDataCategories which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionDataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataCategory>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataCategory>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionDataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDataCategories which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionDataCategories exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDataCategorieswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionDataCategories by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataCategory>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataCategory>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDataCategories by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionDataCategories by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionDataCategory.getIndicatorDescriptionForIndicatorDescriptionDataCategory(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @param indicatorDescriptionDataCategoryID The ID of the IndicatorDescriptionDataCategory to retrieve.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionDataCategory(indicatorDescriptionDataCategoryID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionDataCategoryID: indicatorDescriptionDataCategoryID });
        }

        /** Gets IndicatorDescriptionDataCategories by DataCategoryID.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        public static getByDataCategoryID(dataCategoryID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDataCategory>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataCategory>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataCategory>>(), callback, { dataCategoryID: dataCategoryID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDataCategories by DataCategoryID exist. 
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        public static getByDataCategoryIDCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Gets how many pages of IndicatorDescriptionDataCategories by DataCategoryID exist.
         *  @param dataCategoryID The ID of the DataCategory for which to retrieve the child IndicatorDescriptionDataCategories.
         *  @return An Array of IndicatorDescriptionDataCategories. */
        public static getByDataCategoryIDPageCount(dataCategoryID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataCategoryID: dataCategoryID });
        }

        /** Returns the related DataCategory based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        public getDataCategory(api: API, callback: IAPICallback<DataCategory>): Async {
            return IndicatorDescriptionDataCategory.getDataCategoryForIndicatorDescriptionDataCategory(this.id, api, callback);
        }

        /** Returns the related DataCategory based on the unique ID of the related IndicatorDescriptionDataCategory.
         *  @param indicatorDescriptionDataCategoryID The ID of the IndicatorDescriptionDataCategory to retrieve.
         *  @return A single IndicatorDescriptionDataCategory, or null. */
        public static getDataCategoryForIndicatorDescriptionDataCategory(indicatorDescriptionDataCategoryID: number, api: API, callback: IAPICallback<DataCategory>): Async {
            return api.executeEndpoint<DataCategory>(Endpoint.fromSelf<DataCategory>(), callback, { indicatorDescriptionDataCategoryID: indicatorDescriptionDataCategoryID });
        }
    }
    
    export class IndicatorDescriptionDataCategory extends BaseIndicatorDescriptionDataCategory { }

    /** Contains properties and static functionality for the IndicatorDescriptionDataSource type. */
    export class BaseIndicatorDescriptionDataSource extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            dataDescription: new PropertyMap("dataDescription", "DataDescription"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dataSourceID: new PropertyMap("dataSourceID", "DataSourceID"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public dataDescription: IndicatorDescriptionDataSourceDataDescription = null;
        public indicatorDescriptionID: number = null;
        public dataSourceID: number = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionDataSource.Fields; }

        /** Gets a list of all of the IndicatorDescriptionDataSources in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDataSources */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionDataSource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataSource>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataSource>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDataSources exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionDataSources method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionDataSource with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDataSource to return.
         *  @return The matching IndicatorDescriptionDataSource, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionDataSource>): Async {
            return api.executeEndpoint<IndicatorDescriptionDataSource>(Endpoint.fromSelf<IndicatorDescriptionDataSource>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionDataSources based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDataSources which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionDataSource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataSource>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataSource>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionDataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDataSources which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionDataSources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDataSourceswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionDataSources by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDataSource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataSource>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataSource>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDataSources by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionDataSources by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionDataSource.getIndicatorDescriptionForIndicatorDescriptionDataSource(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @param indicatorDescriptionDataSourceID The ID of the IndicatorDescriptionDataSource to retrieve.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionDataSource(indicatorDescriptionDataSourceID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionDataSourceID: indicatorDescriptionDataSourceID });
        }

        /** Gets IndicatorDescriptionDataSources by DataSourceID.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        public static getByDataSourceID(dataSourceID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDataSource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDataSource>>(Endpoint.fromSelf<Array<IndicatorDescriptionDataSource>>(), callback, { dataSourceID: dataSourceID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDataSources by DataSourceID exist. 
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        public static getByDataSourceIDCount(dataSourceID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSourceID: dataSourceID });
        }

        /** Gets how many pages of IndicatorDescriptionDataSources by DataSourceID exist.
         *  @param dataSourceID The ID of the DataSource for which to retrieve the child IndicatorDescriptionDataSources.
         *  @return An Array of IndicatorDescriptionDataSources. */
        public static getByDataSourceIDPageCount(dataSourceID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dataSourceID: dataSourceID });
        }

        /** Returns the related DataSource based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        public getDataSource(api: API, callback: IAPICallback<DataSource>): Async {
            return IndicatorDescriptionDataSource.getDataSourceForIndicatorDescriptionDataSource(this.id, api, callback);
        }

        /** Returns the related DataSource based on the unique ID of the related IndicatorDescriptionDataSource.
         *  @param indicatorDescriptionDataSourceID The ID of the IndicatorDescriptionDataSource to retrieve.
         *  @return A single IndicatorDescriptionDataSource, or null. */
        public static getDataSourceForIndicatorDescriptionDataSource(indicatorDescriptionDataSourceID: number, api: API, callback: IAPICallback<DataSource>): Async {
            return api.executeEndpoint<DataSource>(Endpoint.fromSelf<DataSource>(), callback, { indicatorDescriptionDataSourceID: indicatorDescriptionDataSourceID });
        }
    }
    
    export class IndicatorDescriptionDataSource extends BaseIndicatorDescriptionDataSource { }

    /** Contains properties and static functionality for the IndicatorDescriptionDefaultDimensionGraph type. */
    export class BaseIndicatorDescriptionDefaultDimensionGraph extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new PropertyMap("localeLevelID", "LocaleLevelID"),
            dimensionGraphID: new PropertyMap("dimensionGraphID", "DimensionGraphID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeLevelID: number = null;
        public dimensionGraphID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionDefaultDimensionGraph.Fields; }

        /** Gets a list of all of the IndicatorDescriptionDefaultDimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDefaultDimensionGraphs */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionDefaultDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDefaultDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDefaultDimensionGraph>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionDefaultDimensionGraphs method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionDefaultDimensionGraph with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDefaultDimensionGraph to return.
         *  @return The matching IndicatorDescriptionDefaultDimensionGraph, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionDefaultDimensionGraph>): Async {
            return api.executeEndpoint<IndicatorDescriptionDefaultDimensionGraph>(Endpoint.fromSelf<IndicatorDescriptionDefaultDimensionGraph>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionDefaultDimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDefaultDimensionGraphs which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionDefaultDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDefaultDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDefaultDimensionGraph>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionDefaultDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDefaultDimensionGraphs which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionDefaultDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDefaultDimensionGraphswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionDefaultDimensionGraphs by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDefaultDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDefaultDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDefaultDimensionGraph>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionDefaultDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionDefaultDimensionGraph.getIndicatorDescriptionForIndicatorDescriptionDefaultDimensionGraph(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @param indicatorDescriptionDefaultDimensionGraphID The ID of the IndicatorDescriptionDefaultDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionDefaultDimensionGraph(indicatorDescriptionDefaultDimensionGraphID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionDefaultDimensionGraphID: indicatorDescriptionDefaultDimensionGraphID });
        }

        /** Gets IndicatorDescriptionDefaultDimensionGraphs by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByLocaleLevelID(localeLevelID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDefaultDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDefaultDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDefaultDimensionGraph>>(), callback, { localeLevelID: localeLevelID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs by LocaleLevelID exist. 
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByLocaleLevelIDCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Gets how many pages of IndicatorDescriptionDefaultDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByLocaleLevelIDPageCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        public getLocaleLevel(api: API, callback: IAPICallback<LocaleLevel>): Async {
            return IndicatorDescriptionDefaultDimensionGraph.getLocaleLevelForIndicatorDescriptionDefaultDimensionGraph(this.id, api, callback);
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @param indicatorDescriptionDefaultDimensionGraphID The ID of the IndicatorDescriptionDefaultDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        public static getLocaleLevelForIndicatorDescriptionDefaultDimensionGraph(indicatorDescriptionDefaultDimensionGraphID: number, api: API, callback: IAPICallback<LocaleLevel>): Async {
            return api.executeEndpoint<LocaleLevel>(Endpoint.fromSelf<LocaleLevel>(), callback, { indicatorDescriptionDefaultDimensionGraphID: indicatorDescriptionDefaultDimensionGraphID });
        }

        /** Gets IndicatorDescriptionDefaultDimensionGraphs by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByDimensionGraphID(dimensionGraphID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDefaultDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDefaultDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDefaultDimensionGraph>>(), callback, { dimensionGraphID: dimensionGraphID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDefaultDimensionGraphs by DimensionGraphID exist. 
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByDimensionGraphIDCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets how many pages of IndicatorDescriptionDefaultDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDefaultDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDefaultDimensionGraphs. */
        public static getByDimensionGraphIDPageCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        public getDimensionGraph(api: API, callback: IAPICallback<DimensionGraph>): Async {
            return IndicatorDescriptionDefaultDimensionGraph.getDimensionGraphForIndicatorDescriptionDefaultDimensionGraph(this.id, api, callback);
        }

        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDefaultDimensionGraph.
         *  @param indicatorDescriptionDefaultDimensionGraphID The ID of the IndicatorDescriptionDefaultDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDefaultDimensionGraph, or null. */
        public static getDimensionGraphForIndicatorDescriptionDefaultDimensionGraph(indicatorDescriptionDefaultDimensionGraphID: number, api: API, callback: IAPICallback<DimensionGraph>): Async {
            return api.executeEndpoint<DimensionGraph>(Endpoint.fromSelf<DimensionGraph>(), callback, { indicatorDescriptionDefaultDimensionGraphID: indicatorDescriptionDefaultDimensionGraphID });
        }
    }
    
    export class IndicatorDescriptionDefaultDimensionGraph extends BaseIndicatorDescriptionDefaultDimensionGraph { }

    /** Contains properties and static functionality for the IndicatorDescriptionDimension type. */
    export class BaseIndicatorDescriptionDimension extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dimensionListID: new PropertyMap("dimensionListID", "DimensionListID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public dimensionListID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionDimension.Fields; }

        /** Gets a list of all of the IndicatorDescriptionDimensions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDimensions */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimension>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimension>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensions exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionDimensions method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionDimension with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDimension to return.
         *  @return The matching IndicatorDescriptionDimension, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionDimension>): Async {
            return api.executeEndpoint<IndicatorDescriptionDimension>(Endpoint.fromSelf<IndicatorDescriptionDimension>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionDimensions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDimensions which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimension>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimension>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDimensions which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDimensionswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionDimensions by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimension>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimension>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensions by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionDimensions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimension.
         *  @return A single IndicatorDescriptionDimension, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionDimension.getIndicatorDescriptionForIndicatorDescriptionDimension(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimension.
         *  @param indicatorDescriptionDimensionID The ID of the IndicatorDescriptionDimension to retrieve.
         *  @return A single IndicatorDescriptionDimension, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionDimension(indicatorDescriptionDimensionID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionDimensionID: indicatorDescriptionDimensionID });
        }

        /** Gets IndicatorDescriptionDimensions by DimensionListID.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        public static getByDimensionListID(dimensionListID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimension>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimension>>(), callback, { dimensionListID: dimensionListID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensions by DimensionListID exist. 
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        public static getByDimensionListIDCount(dimensionListID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionListID: dimensionListID });
        }

        /** Gets how many pages of IndicatorDescriptionDimensions by DimensionListID exist.
         *  @param dimensionListID The ID of the DimensionList for which to retrieve the child IndicatorDescriptionDimensions.
         *  @return An Array of IndicatorDescriptionDimensions. */
        public static getByDimensionListIDPageCount(dimensionListID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionListID: dimensionListID });
        }

        /** Returns the related DimensionList based on the unique ID of the related IndicatorDescriptionDimension.
         *  @return A single IndicatorDescriptionDimension, or null. */
        public getDimensionList(api: API, callback: IAPICallback<DimensionList>): Async {
            return IndicatorDescriptionDimension.getDimensionListForIndicatorDescriptionDimension(this.id, api, callback);
        }

        /** Returns the related DimensionList based on the unique ID of the related IndicatorDescriptionDimension.
         *  @param indicatorDescriptionDimensionID The ID of the IndicatorDescriptionDimension to retrieve.
         *  @return A single IndicatorDescriptionDimension, or null. */
        public static getDimensionListForIndicatorDescriptionDimension(indicatorDescriptionDimensionID: number, api: API, callback: IAPICallback<DimensionList>): Async {
            return api.executeEndpoint<DimensionList>(Endpoint.fromSelf<DimensionList>(), callback, { indicatorDescriptionDimensionID: indicatorDescriptionDimensionID });
        }

        /** Gets a unique IndicatorDescriptionDimension based on the provided values.
         *  @return A single IndicatorDescriptionDimension, or null. */
        public static getByIndicatorDescriptionIDAndDimensionListID(indicatorDescriptionID: string, dimensionListID: string, api: API, callback: IAPICallback<IndicatorDescriptionDimension>): Async {
            return api.executeEndpoint<IndicatorDescriptionDimension>(Endpoint.fromSelf<IndicatorDescriptionDimension>(), callback, { indicatorDescriptionID: indicatorDescriptionID, dimensionListID: dimensionListID });
        }
    }
    
    export class IndicatorDescriptionDimension extends BaseIndicatorDescriptionDimension { }

    /** Contains properties and static functionality for the IndicatorDescriptionDimensionGraph type. */
    export class BaseIndicatorDescriptionDimensionGraph extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new PropertyMap("localeLevelID", "LocaleLevelID"),
            dimensionGraphID: new PropertyMap("dimensionGraphID", "DimensionGraphID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeLevelID: number = null;
        public dimensionGraphID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionDimensionGraph.Fields; }

        /** Gets a list of all of the IndicatorDescriptionDimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDimensionGraphs */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionGraph>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensionGraphs exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionDimensionGraphs method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionDimensionGraph with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDimensionGraph to return.
         *  @return The matching IndicatorDescriptionDimensionGraph, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionDimensionGraph>): Async {
            return api.executeEndpoint<IndicatorDescriptionDimensionGraph>(Endpoint.fromSelf<IndicatorDescriptionDimensionGraph>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionDimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDimensionGraphs which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionGraph>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDimensionGraphs which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDimensionGraphswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionDimensionGraphs by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionGraph>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensionGraphs by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionDimensionGraph.getIndicatorDescriptionForIndicatorDescriptionDimensionGraph(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @param indicatorDescriptionDimensionGraphID The ID of the IndicatorDescriptionDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionDimensionGraph(indicatorDescriptionDimensionGraphID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionDimensionGraphID: indicatorDescriptionDimensionGraphID });
        }

        /** Gets IndicatorDescriptionDimensionGraphs by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByLocaleLevelID(localeLevelID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionGraph>>(), callback, { localeLevelID: localeLevelID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensionGraphs by LocaleLevelID exist. 
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByLocaleLevelIDCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Gets how many pages of IndicatorDescriptionDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByLocaleLevelIDPageCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        public getLocaleLevel(api: API, callback: IAPICallback<LocaleLevel>): Async {
            return IndicatorDescriptionDimensionGraph.getLocaleLevelForIndicatorDescriptionDimensionGraph(this.id, api, callback);
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @param indicatorDescriptionDimensionGraphID The ID of the IndicatorDescriptionDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        public static getLocaleLevelForIndicatorDescriptionDimensionGraph(indicatorDescriptionDimensionGraphID: number, api: API, callback: IAPICallback<LocaleLevel>): Async {
            return api.executeEndpoint<LocaleLevel>(Endpoint.fromSelf<LocaleLevel>(), callback, { indicatorDescriptionDimensionGraphID: indicatorDescriptionDimensionGraphID });
        }

        /** Gets IndicatorDescriptionDimensionGraphs by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByDimensionGraphID(dimensionGraphID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionGraph>>(), callback, { dimensionGraphID: dimensionGraphID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensionGraphs by DimensionGraphID exist. 
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByDimensionGraphIDCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets how many pages of IndicatorDescriptionDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDescriptionDimensionGraphs.
         *  @return An Array of IndicatorDescriptionDimensionGraphs. */
        public static getByDimensionGraphIDPageCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        public getDimensionGraph(api: API, callback: IAPICallback<DimensionGraph>): Async {
            return IndicatorDescriptionDimensionGraph.getDimensionGraphForIndicatorDescriptionDimensionGraph(this.id, api, callback);
        }

        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDescriptionDimensionGraph.
         *  @param indicatorDescriptionDimensionGraphID The ID of the IndicatorDescriptionDimensionGraph to retrieve.
         *  @return A single IndicatorDescriptionDimensionGraph, or null. */
        public static getDimensionGraphForIndicatorDescriptionDimensionGraph(indicatorDescriptionDimensionGraphID: number, api: API, callback: IAPICallback<DimensionGraph>): Async {
            return api.executeEndpoint<DimensionGraph>(Endpoint.fromSelf<DimensionGraph>(), callback, { indicatorDescriptionDimensionGraphID: indicatorDescriptionDimensionGraphID });
        }
    }
    
    export class IndicatorDescriptionDimensionGraph extends BaseIndicatorDescriptionDimensionGraph { }

    /** Contains properties and static functionality for the IndicatorDescriptionDimensionValue type. */
    export class BaseIndicatorDescriptionDimensionValue extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            dimensionBookID: new PropertyMap("dimensionBookID", "DimensionBookID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public dimensionBookID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionDimensionValue.Fields; }

        /** Gets a list of all of the IndicatorDescriptionDimensionValues in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionDimensionValues */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionValue>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionValue>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionValue>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensionValues exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionDimensionValues method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionDimensionValue with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionDimensionValue to return.
         *  @return The matching IndicatorDescriptionDimensionValue, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionDimensionValue>): Async {
            return api.executeEndpoint<IndicatorDescriptionDimensionValue>(Endpoint.fromSelf<IndicatorDescriptionDimensionValue>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionDimensionValues based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionDimensionValues which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionValue>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionValue>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionValue>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionDimensionValues exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionDimensionValues which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionDimensionValues exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionDimensionValueswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionDimensionValues by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionValue>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionValue>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionValue>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensionValues by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionDimensionValues by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionDimensionValue.getIndicatorDescriptionForIndicatorDescriptionDimensionValue(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @param indicatorDescriptionDimensionValueID The ID of the IndicatorDescriptionDimensionValue to retrieve.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionDimensionValue(indicatorDescriptionDimensionValueID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionDimensionValueID: indicatorDescriptionDimensionValueID });
        }

        /** Gets IndicatorDescriptionDimensionValues by DimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        public static getByDimensionBookID(dimensionBookID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionDimensionValue>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionDimensionValue>>(Endpoint.fromSelf<Array<IndicatorDescriptionDimensionValue>>(), callback, { dimensionBookID: dimensionBookID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionDimensionValues by DimensionBookID exist. 
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        public static getByDimensionBookIDCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Gets how many pages of IndicatorDescriptionDimensionValues by DimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDescriptionDimensionValues.
         *  @return An Array of IndicatorDescriptionDimensionValues. */
        public static getByDimensionBookIDPageCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        public getDimensionBook(api: API, callback: IAPICallback<DimensionBook>): Async {
            return IndicatorDescriptionDimensionValue.getDimensionBookForIndicatorDescriptionDimensionValue(this.id, api, callback);
        }

        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDescriptionDimensionValue.
         *  @param indicatorDescriptionDimensionValueID The ID of the IndicatorDescriptionDimensionValue to retrieve.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        public static getDimensionBookForIndicatorDescriptionDimensionValue(indicatorDescriptionDimensionValueID: number, api: API, callback: IAPICallback<DimensionBook>): Async {
            return api.executeEndpoint<DimensionBook>(Endpoint.fromSelf<DimensionBook>(), callback, { indicatorDescriptionDimensionValueID: indicatorDescriptionDimensionValueID });
        }

        /** Gets a unique IndicatorDescriptionDimensionValue based on the provided values.
         *  @return A single IndicatorDescriptionDimensionValue, or null. */
        public static getByIndicatorDescriptionIDAndDimensionBookID(indicatorDescriptionID: string, dimensionBookID: string, api: API, callback: IAPICallback<IndicatorDescriptionDimensionValue>): Async {
            return api.executeEndpoint<IndicatorDescriptionDimensionValue>(Endpoint.fromSelf<IndicatorDescriptionDimensionValue>(), callback, { indicatorDescriptionID: indicatorDescriptionID, dimensionBookID: dimensionBookID });
        }
    }
    
    export class IndicatorDescriptionDimensionValue extends BaseIndicatorDescriptionDimensionValue { }

    /** Contains properties and static functionality for the IndicatorDescriptionInitiative type. */
    export class BaseIndicatorDescriptionInitiative extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            initiativeID: new PropertyMap("initiativeID", "InitiativeID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public initiativeID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionInitiative.Fields; }

        /** Gets a list of all of the IndicatorDescriptionInitiatives in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionInitiatives */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionInitiative>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionInitiative>>(Endpoint.fromSelf<Array<IndicatorDescriptionInitiative>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionInitiatives exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionInitiatives method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionInitiative with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionInitiative to return.
         *  @return The matching IndicatorDescriptionInitiative, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionInitiative>): Async {
            return api.executeEndpoint<IndicatorDescriptionInitiative>(Endpoint.fromSelf<IndicatorDescriptionInitiative>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionInitiatives based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionInitiatives which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionInitiative>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionInitiative>>(Endpoint.fromSelf<Array<IndicatorDescriptionInitiative>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionInitiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionInitiatives which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionInitiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionInitiativeswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionInitiatives by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionInitiative>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionInitiative>>(Endpoint.fromSelf<Array<IndicatorDescriptionInitiative>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionInitiatives by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionInitiatives by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionInitiative.getIndicatorDescriptionForIndicatorDescriptionInitiative(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @param indicatorDescriptionInitiativeID The ID of the IndicatorDescriptionInitiative to retrieve.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionInitiative(indicatorDescriptionInitiativeID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionInitiativeID: indicatorDescriptionInitiativeID });
        }

        /** Gets IndicatorDescriptionInitiatives by InitiativeID.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        public static getByInitiativeID(initiativeID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionInitiative>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionInitiative>>(Endpoint.fromSelf<Array<IndicatorDescriptionInitiative>>(), callback, { initiativeID: initiativeID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionInitiatives by InitiativeID exist. 
         *  @param initiativeID The ID of the Initiative for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        public static getByInitiativeIDCount(initiativeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { initiativeID: initiativeID });
        }

        /** Gets how many pages of IndicatorDescriptionInitiatives by InitiativeID exist.
         *  @param initiativeID The ID of the Initiative for which to retrieve the child IndicatorDescriptionInitiatives.
         *  @return An Array of IndicatorDescriptionInitiatives. */
        public static getByInitiativeIDPageCount(initiativeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { initiativeID: initiativeID });
        }

        /** Returns the related Initiative based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        public getInitiative(api: API, callback: IAPICallback<Initiative>): Async {
            return IndicatorDescriptionInitiative.getInitiativeForIndicatorDescriptionInitiative(this.id, api, callback);
        }

        /** Returns the related Initiative based on the unique ID of the related IndicatorDescriptionInitiative.
         *  @param indicatorDescriptionInitiativeID The ID of the IndicatorDescriptionInitiative to retrieve.
         *  @return A single IndicatorDescriptionInitiative, or null. */
        public static getInitiativeForIndicatorDescriptionInitiative(indicatorDescriptionInitiativeID: number, api: API, callback: IAPICallback<Initiative>): Async {
            return api.executeEndpoint<Initiative>(Endpoint.fromSelf<Initiative>(), callback, { indicatorDescriptionInitiativeID: indicatorDescriptionInitiativeID });
        }
    }
    
    export class IndicatorDescriptionInitiative extends BaseIndicatorDescriptionInitiative { }

    /** Contains properties and static functionality for the IndicatorDescriptionIntervention type. */
    export class BaseIndicatorDescriptionIntervention extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            interventionID: new PropertyMap("interventionID", "InterventionID"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public interventionID: number = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionIntervention.Fields; }

        /** Gets a list of all of the IndicatorDescriptionInterventions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionInterventions */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionIntervention>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionIntervention>>(Endpoint.fromSelf<Array<IndicatorDescriptionIntervention>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionInterventions exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionInterventions method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionIntervention with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionIntervention to return.
         *  @return The matching IndicatorDescriptionIntervention, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionIntervention>): Async {
            return api.executeEndpoint<IndicatorDescriptionIntervention>(Endpoint.fromSelf<IndicatorDescriptionIntervention>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionInterventions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionInterventions which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionIntervention>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionIntervention>>(Endpoint.fromSelf<Array<IndicatorDescriptionIntervention>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionInterventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionInterventions which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionInterventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionInterventionswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionInterventions by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionIntervention>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionIntervention>>(Endpoint.fromSelf<Array<IndicatorDescriptionIntervention>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionInterventions by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionInterventions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionIntervention.getIndicatorDescriptionForIndicatorDescriptionIntervention(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @param indicatorDescriptionInterventionID The ID of the IndicatorDescriptionIntervention to retrieve.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionIntervention(indicatorDescriptionInterventionID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionInterventionID: indicatorDescriptionInterventionID });
        }

        /** Gets IndicatorDescriptionInterventions by InterventionID.
         *  @param interventionID The ID of the Intervention for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        public static getByInterventionID(interventionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionIntervention>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionIntervention>>(Endpoint.fromSelf<Array<IndicatorDescriptionIntervention>>(), callback, { interventionID: interventionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionInterventions by InterventionID exist. 
         *  @param interventionID The ID of the Intervention for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        public static getByInterventionIDCount(interventionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { interventionID: interventionID });
        }

        /** Gets how many pages of IndicatorDescriptionInterventions by InterventionID exist.
         *  @param interventionID The ID of the Intervention for which to retrieve the child IndicatorDescriptionInterventions.
         *  @return An Array of IndicatorDescriptionInterventions. */
        public static getByInterventionIDPageCount(interventionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { interventionID: interventionID });
        }

        /** Returns the related Interventions based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        public getInterventions(api: API, callback: IAPICallback<Intervention>): Async {
            return IndicatorDescriptionIntervention.getInterventionsForIndicatorDescriptionIntervention(this.id, api, callback);
        }

        /** Returns the related Interventions based on the unique ID of the related IndicatorDescriptionIntervention.
         *  @param indicatorDescriptionInterventionID The ID of the IndicatorDescriptionIntervention to retrieve.
         *  @return A single IndicatorDescriptionIntervention, or null. */
        public static getInterventionsForIndicatorDescriptionIntervention(indicatorDescriptionInterventionID: number, api: API, callback: IAPICallback<Intervention>): Async {
            return api.executeEndpoint<Intervention>(Endpoint.fromSelf<Intervention>(), callback, { indicatorDescriptionInterventionID: indicatorDescriptionInterventionID });
        }
    }
    
    export class IndicatorDescriptionIntervention extends BaseIndicatorDescriptionIntervention { }

    /** Contains properties and static functionality for the IndicatorDescriptionKeyword type. */
    export class BaseIndicatorDescriptionKeyword extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            keywordID: new PropertyMap("keywordID", "KeywordID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public keywordID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionKeyword.Fields; }

        /** Gets a list of all of the IndicatorDescriptionKeywords in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionKeywords */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionKeyword>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionKeyword>>(Endpoint.fromSelf<Array<IndicatorDescriptionKeyword>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionKeywords exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionKeywords method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionKeyword with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionKeyword to return.
         *  @return The matching IndicatorDescriptionKeyword, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionKeyword>): Async {
            return api.executeEndpoint<IndicatorDescriptionKeyword>(Endpoint.fromSelf<IndicatorDescriptionKeyword>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionKeywords based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionKeywords which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionKeyword>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionKeyword>>(Endpoint.fromSelf<Array<IndicatorDescriptionKeyword>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionKeywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionKeywords which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionKeywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionKeywordswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionKeywords by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionKeyword>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionKeyword>>(Endpoint.fromSelf<Array<IndicatorDescriptionKeyword>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionKeywords by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionKeywords by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionKeyword.getIndicatorDescriptionForIndicatorDescriptionKeyword(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @param indicatorDescriptionKeywordID The ID of the IndicatorDescriptionKeyword to retrieve.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionKeyword(indicatorDescriptionKeywordID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionKeywordID: indicatorDescriptionKeywordID });
        }

        /** Gets IndicatorDescriptionKeywords by KeywordID.
         *  @param keywordID The ID of the Keyword for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        public static getByKeywordID(keywordID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionKeyword>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionKeyword>>(Endpoint.fromSelf<Array<IndicatorDescriptionKeyword>>(), callback, { keywordID: keywordID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionKeywords by KeywordID exist. 
         *  @param keywordID The ID of the Keyword for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        public static getByKeywordIDCount(keywordID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { keywordID: keywordID });
        }

        /** Gets how many pages of IndicatorDescriptionKeywords by KeywordID exist.
         *  @param keywordID The ID of the Keyword for which to retrieve the child IndicatorDescriptionKeywords.
         *  @return An Array of IndicatorDescriptionKeywords. */
        public static getByKeywordIDPageCount(keywordID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { keywordID: keywordID });
        }

        /** Returns the related Keyword based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        public getKeyword(api: API, callback: IAPICallback<Keyword>): Async {
            return IndicatorDescriptionKeyword.getKeywordForIndicatorDescriptionKeyword(this.id, api, callback);
        }

        /** Returns the related Keyword based on the unique ID of the related IndicatorDescriptionKeyword.
         *  @param indicatorDescriptionKeywordID The ID of the IndicatorDescriptionKeyword to retrieve.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        public static getKeywordForIndicatorDescriptionKeyword(indicatorDescriptionKeywordID: number, api: API, callback: IAPICallback<Keyword>): Async {
            return api.executeEndpoint<Keyword>(Endpoint.fromSelf<Keyword>(), callback, { indicatorDescriptionKeywordID: indicatorDescriptionKeywordID });
        }

        /** Gets a unique IndicatorDescriptionKeyword based on the provided values.
         *  @return A single IndicatorDescriptionKeyword, or null. */
        public static getByIndicatorDescriptionIDAndKeywordID(indicatorDescriptionID: string, keywordID: string, api: API, callback: IAPICallback<IndicatorDescriptionKeyword>): Async {
            return api.executeEndpoint<IndicatorDescriptionKeyword>(Endpoint.fromSelf<IndicatorDescriptionKeyword>(), callback, { indicatorDescriptionID: indicatorDescriptionID, keywordID: keywordID });
        }
    }
    
    export class IndicatorDescriptionKeyword extends BaseIndicatorDescriptionKeyword { }

    /** Contains properties and static functionality for the IndicatorDescriptionLocaleCounty type. */
    export class BaseIndicatorDescriptionLocaleCounty extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new PropertyMap("localeID", "LocaleID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionLocaleCounty.Fields; }

        /** Gets a list of all of the IndicatorDescriptionLocaleCounties in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleCounties */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleCounty>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleCounty>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleCounty>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleCounties exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleCounties method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionLocaleCounty with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleCounty to return.
         *  @return The matching IndicatorDescriptionLocaleCounty, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionLocaleCounty>): Async {
            return api.executeEndpoint<IndicatorDescriptionLocaleCounty>(Endpoint.fromSelf<IndicatorDescriptionLocaleCounty>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionLocaleCounties based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleCounties which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleCounty>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleCounty>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleCounty>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionLocaleCounties exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleCounties which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionLocaleCounties exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleCountieswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionLocaleCounties by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleCounty>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleCounty>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleCounty>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleCounties by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleCounties by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionLocaleCounty.getIndicatorDescriptionForIndicatorDescriptionLocaleCounty(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @param indicatorDescriptionLocaleCountyID The ID of the IndicatorDescriptionLocaleCounty to retrieve.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionLocaleCounty(indicatorDescriptionLocaleCountyID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionLocaleCountyID: indicatorDescriptionLocaleCountyID });
        }

        /** Gets IndicatorDescriptionLocaleCounties by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        public static getByLocaleID(localeID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleCounty>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleCounty>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleCounty>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleCounties by LocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        public static getByLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleCounties by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleCounties.
         *  @return An Array of IndicatorDescriptionLocaleCounties. */
        public static getByLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        public getLocale(api: API, callback: IAPICallback<Locale>): Async {
            return IndicatorDescriptionLocaleCounty.getLocaleForIndicatorDescriptionLocaleCounty(this.id, api, callback);
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleCounty.
         *  @param indicatorDescriptionLocaleCountyID The ID of the IndicatorDescriptionLocaleCounty to retrieve.
         *  @return A single IndicatorDescriptionLocaleCounty, or null. */
        public static getLocaleForIndicatorDescriptionLocaleCounty(indicatorDescriptionLocaleCountyID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { indicatorDescriptionLocaleCountyID: indicatorDescriptionLocaleCountyID });
        }
    }
    
    export class IndicatorDescriptionLocaleCounty extends BaseIndicatorDescriptionLocaleCounty { }

    /** Contains properties and static functionality for the IndicatorDescriptionLocaleHospitalReferralRegion type. */
    export class BaseIndicatorDescriptionLocaleHospitalReferralRegion extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new PropertyMap("localeID", "LocaleID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionLocaleHospitalReferralRegion.Fields; }

        /** Gets a list of all of the IndicatorDescriptionLocaleHospitalReferralRegions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleHospitalReferralRegions */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleHospitalReferralRegions exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleHospitalReferralRegions method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionLocaleHospitalReferralRegion with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleHospitalReferralRegion to return.
         *  @return The matching IndicatorDescriptionLocaleHospitalReferralRegion, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionLocaleHospitalReferralRegion>): Async {
            return api.executeEndpoint<IndicatorDescriptionLocaleHospitalReferralRegion>(Endpoint.fromSelf<IndicatorDescriptionLocaleHospitalReferralRegion>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionLocaleHospitalReferralRegions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleHospitalReferralRegions which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionLocaleHospitalReferralRegions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleHospitalReferralRegions which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionLocaleHospitalReferralRegions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleHospitalReferralRegionswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionLocaleHospitalReferralRegions by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleHospitalReferralRegions by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleHospitalReferralRegions by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionLocaleHospitalReferralRegion.getIndicatorDescriptionForIndicatorDescriptionLocaleHospitalReferralRegion(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @param indicatorDescriptionLocaleHospitalReferralRegionID The ID of the IndicatorDescriptionLocaleHospitalReferralRegion to retrieve.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionLocaleHospitalReferralRegion(indicatorDescriptionLocaleHospitalReferralRegionID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionLocaleHospitalReferralRegionID: indicatorDescriptionLocaleHospitalReferralRegionID });
        }

        /** Gets IndicatorDescriptionLocaleHospitalReferralRegions by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        public static getByLocaleID(localeID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleHospitalReferralRegion>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleHospitalReferralRegions by LocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        public static getByLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleHospitalReferralRegions by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleHospitalReferralRegions.
         *  @return An Array of IndicatorDescriptionLocaleHospitalReferralRegions. */
        public static getByLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        public getLocale(api: API, callback: IAPICallback<Locale>): Async {
            return IndicatorDescriptionLocaleHospitalReferralRegion.getLocaleForIndicatorDescriptionLocaleHospitalReferralRegion(this.id, api, callback);
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleHospitalReferralRegion.
         *  @param indicatorDescriptionLocaleHospitalReferralRegionID The ID of the IndicatorDescriptionLocaleHospitalReferralRegion to retrieve.
         *  @return A single IndicatorDescriptionLocaleHospitalReferralRegion, or null. */
        public static getLocaleForIndicatorDescriptionLocaleHospitalReferralRegion(indicatorDescriptionLocaleHospitalReferralRegionID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { indicatorDescriptionLocaleHospitalReferralRegionID: indicatorDescriptionLocaleHospitalReferralRegionID });
        }
    }
    
    export class IndicatorDescriptionLocaleHospitalReferralRegion extends BaseIndicatorDescriptionLocaleHospitalReferralRegion { }

    /** Contains properties and static functionality for the IndicatorDescriptionLocaleLevel type. */
    export class BaseIndicatorDescriptionLocaleLevel extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new PropertyMap("localeLevelID", "LocaleLevelID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeLevelID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionLocaleLevel.Fields; }

        /** Gets a list of all of the IndicatorDescriptionLocaleLevels in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleLevels */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleLevel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleLevel>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleLevel>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleLevels exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleLevels method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionLocaleLevel with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleLevel to return.
         *  @return The matching IndicatorDescriptionLocaleLevel, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionLocaleLevel>): Async {
            return api.executeEndpoint<IndicatorDescriptionLocaleLevel>(Endpoint.fromSelf<IndicatorDescriptionLocaleLevel>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionLocaleLevels based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleLevels which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleLevel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleLevel>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleLevel>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionLocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleLevels which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionLocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleLevelswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionLocaleLevels by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleLevel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleLevel>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleLevel>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleLevels by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleLevels by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionLocaleLevel.getIndicatorDescriptionForIndicatorDescriptionLocaleLevel(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @param indicatorDescriptionLocaleLevelID The ID of the IndicatorDescriptionLocaleLevel to retrieve.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionLocaleLevel(indicatorDescriptionLocaleLevelID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionLocaleLevelID: indicatorDescriptionLocaleLevelID });
        }

        /** Gets IndicatorDescriptionLocaleLevels by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        public static getByLocaleLevelID(localeLevelID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleLevel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleLevel>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleLevel>>(), callback, { localeLevelID: localeLevelID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleLevels by LocaleLevelID exist. 
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        public static getByLocaleLevelIDCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleLevels by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDescriptionLocaleLevels.
         *  @return An Array of IndicatorDescriptionLocaleLevels. */
        public static getByLocaleLevelIDPageCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        public getLocaleLevel(api: API, callback: IAPICallback<LocaleLevel>): Async {
            return IndicatorDescriptionLocaleLevel.getLocaleLevelForIndicatorDescriptionLocaleLevel(this.id, api, callback);
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDescriptionLocaleLevel.
         *  @param indicatorDescriptionLocaleLevelID The ID of the IndicatorDescriptionLocaleLevel to retrieve.
         *  @return A single IndicatorDescriptionLocaleLevel, or null. */
        public static getLocaleLevelForIndicatorDescriptionLocaleLevel(indicatorDescriptionLocaleLevelID: number, api: API, callback: IAPICallback<LocaleLevel>): Async {
            return api.executeEndpoint<LocaleLevel>(Endpoint.fromSelf<LocaleLevel>(), callback, { indicatorDescriptionLocaleLevelID: indicatorDescriptionLocaleLevelID });
        }
    }
    
    export class IndicatorDescriptionLocaleLevel extends BaseIndicatorDescriptionLocaleLevel { }

    /** Contains properties and static functionality for the IndicatorDescriptionLocale type. */
    export class BaseIndicatorDescriptionLocale extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new PropertyMap("localeID", "LocaleID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionLocale.Fields; }

        /** Gets a list of all of the IndicatorDescriptionLocales in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocales */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionLocale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocale>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocale>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocales exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionLocales method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionLocale with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocale to return.
         *  @return The matching IndicatorDescriptionLocale, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionLocale>): Async {
            return api.executeEndpoint<IndicatorDescriptionLocale>(Endpoint.fromSelf<IndicatorDescriptionLocale>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionLocales based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocales which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocale>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocale>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionLocales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocales which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionLocales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionLocales by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocale>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocale>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocales by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionLocales by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocale.
         *  @return A single IndicatorDescriptionLocale, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionLocale.getIndicatorDescriptionForIndicatorDescriptionLocale(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocale.
         *  @param indicatorDescriptionLocaleID The ID of the IndicatorDescriptionLocale to retrieve.
         *  @return A single IndicatorDescriptionLocale, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionLocale(indicatorDescriptionLocaleID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionLocaleID: indicatorDescriptionLocaleID });
        }

        /** Gets IndicatorDescriptionLocales by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        public static getByLocaleID(localeID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocale>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocale>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocales by LocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        public static getByLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of IndicatorDescriptionLocales by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocales.
         *  @return An Array of IndicatorDescriptionLocales. */
        public static getByLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocale.
         *  @return A single IndicatorDescriptionLocale, or null. */
        public getLocale(api: API, callback: IAPICallback<Locale>): Async {
            return IndicatorDescriptionLocale.getLocaleForIndicatorDescriptionLocale(this.id, api, callback);
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocale.
         *  @param indicatorDescriptionLocaleID The ID of the IndicatorDescriptionLocale to retrieve.
         *  @return A single IndicatorDescriptionLocale, or null. */
        public static getLocaleForIndicatorDescriptionLocale(indicatorDescriptionLocaleID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { indicatorDescriptionLocaleID: indicatorDescriptionLocaleID });
        }
    }
    
    export class IndicatorDescriptionLocale extends BaseIndicatorDescriptionLocale { }

    /** Contains properties and static functionality for the IndicatorDescriptionLocaleState type. */
    export class BaseIndicatorDescriptionLocaleState extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeID: new PropertyMap("localeID", "LocaleID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionLocaleState.Fields; }

        /** Gets a list of all of the IndicatorDescriptionLocaleStates in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionLocaleStates */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleState>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleState>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleState>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleStates exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionLocaleStates method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionLocaleState with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionLocaleState to return.
         *  @return The matching IndicatorDescriptionLocaleState, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionLocaleState>): Async {
            return api.executeEndpoint<IndicatorDescriptionLocaleState>(Endpoint.fromSelf<IndicatorDescriptionLocaleState>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionLocaleStates based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionLocaleStates which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleState>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleState>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleState>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionLocaleStates exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionLocaleStates which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionLocaleStates exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionLocaleStateswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionLocaleStates by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleState>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleState>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleState>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleStates by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleStates by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionLocaleState.getIndicatorDescriptionForIndicatorDescriptionLocaleState(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @param indicatorDescriptionLocaleStateID The ID of the IndicatorDescriptionLocaleState to retrieve.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionLocaleState(indicatorDescriptionLocaleStateID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionLocaleStateID: indicatorDescriptionLocaleStateID });
        }

        /** Gets IndicatorDescriptionLocaleStates by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        public static getByLocaleID(localeID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionLocaleState>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionLocaleState>>(Endpoint.fromSelf<Array<IndicatorDescriptionLocaleState>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionLocaleStates by LocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        public static getByLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of IndicatorDescriptionLocaleStates by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child IndicatorDescriptionLocaleStates.
         *  @return An Array of IndicatorDescriptionLocaleStates. */
        public static getByLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        public getLocale(api: API, callback: IAPICallback<Locale>): Async {
            return IndicatorDescriptionLocaleState.getLocaleForIndicatorDescriptionLocaleState(this.id, api, callback);
        }

        /** Returns the related Locale based on the unique ID of the related IndicatorDescriptionLocaleState.
         *  @param indicatorDescriptionLocaleStateID The ID of the IndicatorDescriptionLocaleState to retrieve.
         *  @return A single IndicatorDescriptionLocaleState, or null. */
        public static getLocaleForIndicatorDescriptionLocaleState(indicatorDescriptionLocaleStateID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { indicatorDescriptionLocaleStateID: indicatorDescriptionLocaleStateID });
        }
    }
    
    export class IndicatorDescriptionLocaleState extends BaseIndicatorDescriptionLocaleState { }

    /** Contains properties and static functionality for the IndicatorDescriptionMethodologyNote type. */
    export class BaseIndicatorDescriptionMethodologyNote extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            methodologyNote: new PropertyMap("methodologyNote", "MethodologyNote"),
            methodologyNotePlain: new PropertyMap("methodologyNotePlain", "MethodologyNotePlain"),
            isHTML: new PropertyMap("isHTML", "isHTML"),
            isAgeAdjusted: new PropertyMap("isAgeAdjusted", "isAgeAdjusted"),
            isFootnote: new PropertyMap("isFootnote", "isFootnote"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public methodologyNote: string = null;
        public methodologyNotePlain: string = null;
        public isHTML: boolean = null;
        public isAgeAdjusted: boolean = null;
        public isFootnote: boolean = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionMethodologyNote.Fields; }

        /** Gets a list of all of the IndicatorDescriptionMethodologyNotes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionMethodologyNotes */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionMethodologyNote>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionMethodologyNote>>(Endpoint.fromSelf<Array<IndicatorDescriptionMethodologyNote>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionMethodologyNotes exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionMethodologyNotes method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionMethodologyNote with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionMethodologyNote to return.
         *  @return The matching IndicatorDescriptionMethodologyNote, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionMethodologyNote>): Async {
            return api.executeEndpoint<IndicatorDescriptionMethodologyNote>(Endpoint.fromSelf<IndicatorDescriptionMethodologyNote>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionMethodologyNotes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionMethodologyNotes which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionMethodologyNote>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionMethodologyNote>>(Endpoint.fromSelf<Array<IndicatorDescriptionMethodologyNote>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionMethodologyNotes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionMethodologyNotes which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionMethodologyNotes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionMethodologyNoteswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionMethodologyNotes by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMethodologyNotes.
         *  @return An Array of IndicatorDescriptionMethodologyNotes. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionMethodologyNote>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionMethodologyNote>>(Endpoint.fromSelf<Array<IndicatorDescriptionMethodologyNote>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionMethodologyNotes by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMethodologyNotes.
         *  @return An Array of IndicatorDescriptionMethodologyNotes. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionMethodologyNotes by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMethodologyNotes.
         *  @return An Array of IndicatorDescriptionMethodologyNotes. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMethodologyNote.
         *  @return A single IndicatorDescriptionMethodologyNote, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionMethodologyNote.getIndicatorDescriptionForIndicatorDescriptionMethodologyNote(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMethodologyNote.
         *  @param indicatorDescriptionMethodologyNoteID The ID of the IndicatorDescriptionMethodologyNote to retrieve.
         *  @return A single IndicatorDescriptionMethodologyNote, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionMethodologyNote(indicatorDescriptionMethodologyNoteID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionMethodologyNoteID: indicatorDescriptionMethodologyNoteID });
        }
    }
    
    export class IndicatorDescriptionMethodologyNote extends BaseIndicatorDescriptionMethodologyNote { }

    /** Contains properties and static functionality for the IndicatorDescriptionMoreInfo type. */
    export class BaseIndicatorDescriptionMoreInfo extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            moreInfo: new PropertyMap("moreInfo", "MoreInfo"),
            urlID: new PropertyMap("urlID", "UrlID"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public moreInfo: string = null;
        public urlID: number = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionMoreInfo.Fields; }

        /** Gets a list of all of the IndicatorDescriptionMoreInfos in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionMoreInfos */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionMoreInfo>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionMoreInfo>>(Endpoint.fromSelf<Array<IndicatorDescriptionMoreInfo>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionMoreInfos exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionMoreInfos method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionMoreInfo with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionMoreInfo to return.
         *  @return The matching IndicatorDescriptionMoreInfo, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionMoreInfo>): Async {
            return api.executeEndpoint<IndicatorDescriptionMoreInfo>(Endpoint.fromSelf<IndicatorDescriptionMoreInfo>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionMoreInfos based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionMoreInfos which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionMoreInfo>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionMoreInfo>>(Endpoint.fromSelf<Array<IndicatorDescriptionMoreInfo>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionMoreInfos exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionMoreInfos which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionMoreInfos exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionMoreInfoswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionMoreInfos by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionMoreInfo>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionMoreInfo>>(Endpoint.fromSelf<Array<IndicatorDescriptionMoreInfo>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionMoreInfos by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionMoreInfos by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionMoreInfo.getIndicatorDescriptionForIndicatorDescriptionMoreInfo(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @param indicatorDescriptionMoreInfoID The ID of the IndicatorDescriptionMoreInfo to retrieve.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionMoreInfo(indicatorDescriptionMoreInfoID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionMoreInfoID: indicatorDescriptionMoreInfoID });
        }

        /** Gets IndicatorDescriptionMoreInfos by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        public static getByUrlID(urlID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionMoreInfo>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionMoreInfo>>(Endpoint.fromSelf<Array<IndicatorDescriptionMoreInfo>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionMoreInfos by UrlID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        public static getByUrlIDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of IndicatorDescriptionMoreInfos by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionMoreInfos.
         *  @return An Array of IndicatorDescriptionMoreInfos. */
        public static getByUrlIDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        public getUrl(api: API, callback: IAPICallback<Url>): Async {
            return IndicatorDescriptionMoreInfo.getUrlForIndicatorDescriptionMoreInfo(this.id, api, callback);
        }

        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionMoreInfo.
         *  @param indicatorDescriptionMoreInfoID The ID of the IndicatorDescriptionMoreInfo to retrieve.
         *  @return A single IndicatorDescriptionMoreInfo, or null. */
        public static getUrlForIndicatorDescriptionMoreInfo(indicatorDescriptionMoreInfoID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { indicatorDescriptionMoreInfoID: indicatorDescriptionMoreInfoID });
        }
    }
    
    export class IndicatorDescriptionMoreInfo extends BaseIndicatorDescriptionMoreInfo { }

    /** Contains properties and static functionality for the IndicatorDescriptionReference type. */
    export class BaseIndicatorDescriptionReference extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            reference: new PropertyMap("reference", "Reference"),
            urlID: new PropertyMap("urlID", "UrlID"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public reference: string = null;
        public urlID: number = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionReference.Fields; }

        /** Gets a list of all of the IndicatorDescriptionReferences in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionReferences */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionReference>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionReference>>(Endpoint.fromSelf<Array<IndicatorDescriptionReference>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionReferences exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionReferences method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionReference with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionReference to return.
         *  @return The matching IndicatorDescriptionReference, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionReference>): Async {
            return api.executeEndpoint<IndicatorDescriptionReference>(Endpoint.fromSelf<IndicatorDescriptionReference>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionReferences based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionReferences which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionReference>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionReference>>(Endpoint.fromSelf<Array<IndicatorDescriptionReference>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionReferences exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionReferences which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionReferences exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionReferenceswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionReferences by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionReference>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionReference>>(Endpoint.fromSelf<Array<IndicatorDescriptionReference>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionReferences by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionReferences by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionReference.
         *  @return A single IndicatorDescriptionReference, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionReference.getIndicatorDescriptionForIndicatorDescriptionReference(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionReference.
         *  @param indicatorDescriptionReferenceID The ID of the IndicatorDescriptionReference to retrieve.
         *  @return A single IndicatorDescriptionReference, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionReference(indicatorDescriptionReferenceID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionReferenceID: indicatorDescriptionReferenceID });
        }

        /** Gets IndicatorDescriptionReferences by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        public static getByUrlID(urlID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionReference>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionReference>>(Endpoint.fromSelf<Array<IndicatorDescriptionReference>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionReferences by UrlID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        public static getByUrlIDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of IndicatorDescriptionReferences by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionReferences.
         *  @return An Array of IndicatorDescriptionReferences. */
        public static getByUrlIDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionReference.
         *  @return A single IndicatorDescriptionReference, or null. */
        public getUrl(api: API, callback: IAPICallback<Url>): Async {
            return IndicatorDescriptionReference.getUrlForIndicatorDescriptionReference(this.id, api, callback);
        }

        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionReference.
         *  @param indicatorDescriptionReferenceID The ID of the IndicatorDescriptionReference to retrieve.
         *  @return A single IndicatorDescriptionReference, or null. */
        public static getUrlForIndicatorDescriptionReference(indicatorDescriptionReferenceID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { indicatorDescriptionReferenceID: indicatorDescriptionReferenceID });
        }
    }
    
    export class IndicatorDescriptionReference extends BaseIndicatorDescriptionReference { }

    /** Contains properties and static functionality for the IndicatorDescriptionResource type. */
    export class BaseIndicatorDescriptionResource extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            description: new PropertyMap("description", "Description"),
            urlID: new PropertyMap("urlID", "UrlID"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public description: string = null;
        public urlID: number = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionResource.Fields; }

        /** Gets a list of all of the IndicatorDescriptionResources in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionResources */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionResource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionResource>>(Endpoint.fromSelf<Array<IndicatorDescriptionResource>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionResources exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionResources method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionResource with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionResource to return.
         *  @return The matching IndicatorDescriptionResource, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionResource>): Async {
            return api.executeEndpoint<IndicatorDescriptionResource>(Endpoint.fromSelf<IndicatorDescriptionResource>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionResources based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionResources which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionResource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionResource>>(Endpoint.fromSelf<Array<IndicatorDescriptionResource>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionResources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionResources which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionResources exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionResourceswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionResources by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionResource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionResource>>(Endpoint.fromSelf<Array<IndicatorDescriptionResource>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionResources by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionResources by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionResource.
         *  @return A single IndicatorDescriptionResource, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionResource.getIndicatorDescriptionForIndicatorDescriptionResource(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionResource.
         *  @param indicatorDescriptionResourceID The ID of the IndicatorDescriptionResource to retrieve.
         *  @return A single IndicatorDescriptionResource, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionResource(indicatorDescriptionResourceID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionResourceID: indicatorDescriptionResourceID });
        }

        /** Gets IndicatorDescriptionResources by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        public static getByUrlID(urlID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionResource>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionResource>>(Endpoint.fromSelf<Array<IndicatorDescriptionResource>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionResources by UrlID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        public static getByUrlIDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of IndicatorDescriptionResources by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child IndicatorDescriptionResources.
         *  @return An Array of IndicatorDescriptionResources. */
        public static getByUrlIDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionResource.
         *  @return A single IndicatorDescriptionResource, or null. */
        public getUrl(api: API, callback: IAPICallback<Url>): Async {
            return IndicatorDescriptionResource.getUrlForIndicatorDescriptionResource(this.id, api, callback);
        }

        /** Returns the related Url based on the unique ID of the related IndicatorDescriptionResource.
         *  @param indicatorDescriptionResourceID The ID of the IndicatorDescriptionResource to retrieve.
         *  @return A single IndicatorDescriptionResource, or null. */
        public static getUrlForIndicatorDescriptionResource(indicatorDescriptionResourceID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { indicatorDescriptionResourceID: indicatorDescriptionResourceID });
        }
    }
    
    export class IndicatorDescriptionResource extends BaseIndicatorDescriptionResource { }

    /** Contains properties and static functionality for the IndicatorDescription type. */
    export class BaseIndicatorDescription extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            shortDescription: new PropertyMap("shortDescription", "ShortDescription"),
            unlabeledShortDescription: new PropertyMap("unlabeledShortDescription", "UnlabeledShortDescription"),
            showMe: new PropertyMap("showMe", "ShowMe"),
            isDevelopmental: new PropertyMap("isDevelopmental", "isDevelopmental"),
            datatype: new PropertyMap("datatype", "Datatype"),
            fullDescription: new PropertyMap("fullDescription", "FullDescription"),
            valueLabelID: new PropertyMap("valueLabelID", "ValueLabelID"),
            numeratorDescription: new PropertyMap("numeratorDescription", "NumeratorDescription"),
            denominatorDescription: new PropertyMap("denominatorDescription", "DenominatorDescription"),
            caveatsAndLimitations: new PropertyMap("caveatsAndLimitations", "CaveatsAndLimitations"),
            dataType: new PropertyMap("dataType", "DataType"),
            trendIssues: new PropertyMap("trendIssues", "TrendIssues"),
            otherDataSource: new PropertyMap("otherDataSource", "OtherDataSource"),
            availableDimensions: new PropertyMap("availableDimensions", "AvailableDimensions"),
            geographicLevels: new PropertyMap("geographicLevels", "GeographicLevels"),
            maxDecimal: new PropertyMap("maxDecimal", "MaxDecimal"),
            modificationDate: new PropertyMap("modificationDate", "ModificationDate"),
            minimumCacheValue: new PropertyMap("minimumCacheValue", "MinimumCacheValue"),
            maximumCacheValue: new PropertyMap("maximumCacheValue", "MaximumCacheValue"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate")
        };

        public id: number = null;
        public shortDescription: string = null;
        public unlabeledShortDescription: string = null;
        public showMe: boolean = null;
        public isDevelopmental: boolean = null;
        public datatype: string = null;
        public fullDescription: string = null;
        public valueLabelID: number = null;
        public numeratorDescription: string = null;
        public denominatorDescription: string = null;
        public caveatsAndLimitations: string = null;
        public dataType: string = null;
        public trendIssues: string = null;
        public otherDataSource: string = null;
        public availableDimensions: string = null;
        public geographicLevels: string = null;
        public maxDecimal: number = null;
        public modificationDate: Date = null;
        public minimumCacheValue: number = null;
        public maximumCacheValue: number = null;
        public modifyDate: Date = null;

        protected getFields(): any { return BaseIndicatorDescription.Fields; }

        /** Gets a list of all of the IndicatorDescriptions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptions */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescription>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescription>>(Endpoint.fromSelf<Array<IndicatorDescription>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modificationDate = this.parseDate(this.modificationDate);
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
        }

        /** Gets how many IndicatorDescriptions exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptions method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescription with the specified primary key.
         *  @param id The primary key of the IndicatorDescription to return.
         *  @return The matching IndicatorDescription, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptions which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescription>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescription>>(Endpoint.fromSelf<Array<IndicatorDescription>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptions which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptions by ValueLabelID.
         *  @param valueLabelID The ID of the ValueLabel for which to retrieve the child IndicatorDescriptions.
         *  @return An Array of IndicatorDescriptions. */
        public static getByValueLabelID(valueLabelID: number, api: API, callback: IAPICallback<Array<IndicatorDescription>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescription>>(Endpoint.fromSelf<Array<IndicatorDescription>>(), callback, { valueLabelID: valueLabelID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptions by ValueLabelID exist. 
         *  @param valueLabelID The ID of the ValueLabel for which to retrieve the child IndicatorDescriptions.
         *  @return An Array of IndicatorDescriptions. */
        public static getByValueLabelIDCount(valueLabelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { valueLabelID: valueLabelID });
        }

        /** Gets how many pages of IndicatorDescriptions by ValueLabelID exist.
         *  @param valueLabelID The ID of the ValueLabel for which to retrieve the child IndicatorDescriptions.
         *  @return An Array of IndicatorDescriptions. */
        public static getByValueLabelIDPageCount(valueLabelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { valueLabelID: valueLabelID });
        }

        /** Returns the related ValueLabel based on the unique ID of the related IndicatorDescription.
         *  @return A single IndicatorDescription, or null. */
        public getValueLabel(api: API, callback: IAPICallback<ValueLabel>): Async {
            return IndicatorDescription.getValueLabelForIndicatorDescription(this.id, api, callback);
        }

        /** Returns the related ValueLabel based on the unique ID of the related IndicatorDescription.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription to retrieve.
         *  @return A single IndicatorDescription, or null. */
        public static getValueLabelForIndicatorDescription(indicatorDescriptionID: number, api: API, callback: IAPICallback<ValueLabel>): Async {
            return api.executeEndpoint<ValueLabel>(Endpoint.fromSelf<ValueLabel>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }
    }

    /** Contains properties and static functionality for the IndicatorDescriptionHP2020 type. */
    export class BaseIndicatorDescriptionHP2020 extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            indicatorNumber: new PropertyMap("indicatorNumber", "IndicatorNumber"),
            HP2020ID: new PropertyMap("HP2020ID", "HP2020ID"),
            HP2020Target: new PropertyMap("HP2020Target", "HP2020Target"),
            HP2020BaselineYear: new PropertyMap("HP2020BaselineYear", "HP2020BaselineYear"),
            HP2020Baseline: new PropertyMap("HP2020Baseline", "HP2020Baseline"),
            HP2020TSMID: new PropertyMap("HP2020TSMID", "HP2020TSMID"),
            initiativeSpecificTopicArea: new PropertyMap("initiativeSpecificTopicArea", "InitiativeSpecificTopicArea")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public indicatorNumber: string = null;
        public HP2020ID: string = null;
        public HP2020Target: string = null;
        public HP2020BaselineYear: string = null;
        public HP2020Baseline: string = null;
        public HP2020TSMID: number = null;
        public initiativeSpecificTopicArea: string = null;

        protected getFields(): any { return BaseIndicatorDescriptionHP2020.Fields; }

        /** Gets a list of all of the IndicatorDescriptionHP2020s in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionHP2020s */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionHP2020>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionHP2020>>(Endpoint.fromSelf<Array<IndicatorDescriptionHP2020>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionHP2020s exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionHP2020s method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionHP2020 with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionHP2020 to return.
         *  @return The matching IndicatorDescriptionHP2020, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionHP2020>): Async {
            return api.executeEndpoint<IndicatorDescriptionHP2020>(Endpoint.fromSelf<IndicatorDescriptionHP2020>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionHP2020s based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionHP2020s which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionHP2020>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionHP2020>>(Endpoint.fromSelf<Array<IndicatorDescriptionHP2020>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionHP2020s exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionHP2020s which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionHP2020s exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionHP2020swhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionHP2020s by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionHP2020>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionHP2020>>(Endpoint.fromSelf<Array<IndicatorDescriptionHP2020>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionHP2020s by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionHP2020s by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionHP2020.getIndicatorDescriptionForIndicatorDescriptionHP2020(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @param indicatorDescriptionHP2020ID The ID of the IndicatorDescriptionHP2020 to retrieve.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionHP2020(indicatorDescriptionHP2020ID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionHP2020ID: indicatorDescriptionHP2020ID });
        }

        /** Gets IndicatorDescriptionHP2020s by HP2020TSMID.
         *  @param hP2020TSMID The ID of the HP2020TSM for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        public static getByHP2020TSMID(hP2020TSMID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionHP2020>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionHP2020>>(Endpoint.fromSelf<Array<IndicatorDescriptionHP2020>>(), callback, { hP2020TSMID: hP2020TSMID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionHP2020s by HP2020TSMID exist. 
         *  @param hP2020TSMID The ID of the HP2020TSM for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        public static getByHP2020TSMIDCount(hP2020TSMID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { hP2020TSMID: hP2020TSMID });
        }

        /** Gets how many pages of IndicatorDescriptionHP2020s by HP2020TSMID exist.
         *  @param hP2020TSMID The ID of the HP2020TSM for which to retrieve the child IndicatorDescriptionHP2020s.
         *  @return An Array of IndicatorDescriptionHP2020s. */
        public static getByHP2020TSMIDPageCount(hP2020TSMID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { hP2020TSMID: hP2020TSMID });
        }

        /** Returns the related HP2020TSM based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        public getHP2020TSM(api: API, callback: IAPICallback<HP2020TSM>): Async {
            return IndicatorDescriptionHP2020.getHP2020TSMForIndicatorDescriptionHP2020(this.id, api, callback);
        }

        /** Returns the related HP2020TSM based on the unique ID of the related IndicatorDescriptionHP2020.
         *  @param indicatorDescriptionHP2020ID The ID of the IndicatorDescriptionHP2020 to retrieve.
         *  @return A single IndicatorDescriptionHP2020, or null. */
        public static getHP2020TSMForIndicatorDescriptionHP2020(indicatorDescriptionHP2020ID: number, api: API, callback: IAPICallback<HP2020TSM>): Async {
            return api.executeEndpoint<HP2020TSM>(Endpoint.fromSelf<HP2020TSM>(), callback, { indicatorDescriptionHP2020ID: indicatorDescriptionHP2020ID });
        }
    }
    
    export class IndicatorDescriptionHP2020 extends BaseIndicatorDescriptionHP2020 { }

    /** Contains properties and static functionality for the IndicatorDescriptionTimeFrame type. */
    export class BaseIndicatorDescriptionTimeFrame extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            timeframeID: new PropertyMap("timeframeID", "TimeframeID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public timeframeID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionTimeFrame.Fields; }

        /** Gets a list of all of the IndicatorDescriptionTimeFrames in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionTimeFrames */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionTimeFrame>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionTimeFrame>>(Endpoint.fromSelf<Array<IndicatorDescriptionTimeFrame>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionTimeFrames exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionTimeFrames method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionTimeFrame with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionTimeFrame to return.
         *  @return The matching IndicatorDescriptionTimeFrame, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionTimeFrame>): Async {
            return api.executeEndpoint<IndicatorDescriptionTimeFrame>(Endpoint.fromSelf<IndicatorDescriptionTimeFrame>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionTimeFrames based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionTimeFrames which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionTimeFrame>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionTimeFrame>>(Endpoint.fromSelf<Array<IndicatorDescriptionTimeFrame>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionTimeFrames exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionTimeFrames which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionTimeFrames exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionTimeFrameswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionTimeFrames by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionTimeFrame>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionTimeFrame>>(Endpoint.fromSelf<Array<IndicatorDescriptionTimeFrame>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionTimeFrames by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionTimeFrames by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionTimeFrame.getIndicatorDescriptionForIndicatorDescriptionTimeFrame(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @param indicatorDescriptionTimeFrameID The ID of the IndicatorDescriptionTimeFrame to retrieve.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionTimeFrame(indicatorDescriptionTimeFrameID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionTimeFrameID: indicatorDescriptionTimeFrameID });
        }

        /** Gets IndicatorDescriptionTimeFrames by TimeframeID.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        public static getByTimeframeID(timeframeID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionTimeFrame>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionTimeFrame>>(Endpoint.fromSelf<Array<IndicatorDescriptionTimeFrame>>(), callback, { timeframeID: timeframeID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionTimeFrames by TimeframeID exist. 
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        public static getByTimeframeIDCount(timeframeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { timeframeID: timeframeID });
        }

        /** Gets how many pages of IndicatorDescriptionTimeFrames by TimeframeID exist.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child IndicatorDescriptionTimeFrames.
         *  @return An Array of IndicatorDescriptionTimeFrames. */
        public static getByTimeframeIDPageCount(timeframeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { timeframeID: timeframeID });
        }

        /** Returns the related Timeframe based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        public getTimeframe(api: API, callback: IAPICallback<Timeframe>): Async {
            return IndicatorDescriptionTimeFrame.getTimeframeForIndicatorDescriptionTimeFrame(this.id, api, callback);
        }

        /** Returns the related Timeframe based on the unique ID of the related IndicatorDescriptionTimeFrame.
         *  @param indicatorDescriptionTimeFrameID The ID of the IndicatorDescriptionTimeFrame to retrieve.
         *  @return A single IndicatorDescriptionTimeFrame, or null. */
        public static getTimeframeForIndicatorDescriptionTimeFrame(indicatorDescriptionTimeFrameID: number, api: API, callback: IAPICallback<Timeframe>): Async {
            return api.executeEndpoint<Timeframe>(Endpoint.fromSelf<Timeframe>(), callback, { indicatorDescriptionTimeFrameID: indicatorDescriptionTimeFrameID });
        }
    }
    
    export class IndicatorDescriptionTimeFrame extends BaseIndicatorDescriptionTimeFrame { }

    /** Contains properties and static functionality for the IndicatorDescriptionYear type. */
    export class BaseIndicatorDescriptionYear extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            yearID: new PropertyMap("yearID", "YearID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public yearID: number = null;

        protected getFields(): any { return BaseIndicatorDescriptionYear.Fields; }

        /** Gets a list of all of the IndicatorDescriptionYears in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDescriptionYears */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDescriptionYear>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionYear>>(Endpoint.fromSelf<Array<IndicatorDescriptionYear>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionYears exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDescriptionYears method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDescriptionYear with the specified primary key.
         *  @param id The primary key of the IndicatorDescriptionYear to return.
         *  @return The matching IndicatorDescriptionYear, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDescriptionYear>): Async {
            return api.executeEndpoint<IndicatorDescriptionYear>(Endpoint.fromSelf<IndicatorDescriptionYear>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDescriptionYears based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDescriptionYears which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDescriptionYear>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionYear>>(Endpoint.fromSelf<Array<IndicatorDescriptionYear>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDescriptionYears exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDescriptionYears which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDescriptionYears exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDescriptionYearswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDescriptionYears by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionYear>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionYear>>(Endpoint.fromSelf<Array<IndicatorDescriptionYear>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionYears by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDescriptionYears by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionYear.
         *  @return A single IndicatorDescriptionYear, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDescriptionYear.getIndicatorDescriptionForIndicatorDescriptionYear(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDescriptionYear.
         *  @param indicatorDescriptionYearID The ID of the IndicatorDescriptionYear to retrieve.
         *  @return A single IndicatorDescriptionYear, or null. */
        public static getIndicatorDescriptionForIndicatorDescriptionYear(indicatorDescriptionYearID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDescriptionYearID: indicatorDescriptionYearID });
        }

        /** Gets IndicatorDescriptionYears by YearID.
         *  @param yearID The ID of the Year for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        public static getByYearID(yearID: number, api: API, callback: IAPICallback<Array<IndicatorDescriptionYear>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDescriptionYear>>(Endpoint.fromSelf<Array<IndicatorDescriptionYear>>(), callback, { yearID: yearID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDescriptionYears by YearID exist. 
         *  @param yearID The ID of the Year for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        public static getByYearIDCount(yearID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { yearID: yearID });
        }

        /** Gets how many pages of IndicatorDescriptionYears by YearID exist.
         *  @param yearID The ID of the Year for which to retrieve the child IndicatorDescriptionYears.
         *  @return An Array of IndicatorDescriptionYears. */
        public static getByYearIDPageCount(yearID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { yearID: yearID });
        }

        /** Returns the related Year based on the unique ID of the related IndicatorDescriptionYear.
         *  @return A single IndicatorDescriptionYear, or null. */
        public getYear(api: API, callback: IAPICallback<Year>): Async {
            return IndicatorDescriptionYear.getYearForIndicatorDescriptionYear(this.id, api, callback);
        }

        /** Returns the related Year based on the unique ID of the related IndicatorDescriptionYear.
         *  @param indicatorDescriptionYearID The ID of the IndicatorDescriptionYear to retrieve.
         *  @return A single IndicatorDescriptionYear, or null. */
        public static getYearForIndicatorDescriptionYear(indicatorDescriptionYearID: number, api: API, callback: IAPICallback<Year>): Async {
            return api.executeEndpoint<Year>(Endpoint.fromSelf<Year>(), callback, { indicatorDescriptionYearID: indicatorDescriptionYearID });
        }

        /** Gets a unique IndicatorDescriptionYear based on the provided values.
         *  @return A single IndicatorDescriptionYear, or null. */
        public static getByIndicatorDescriptionIDAndYearID(indicatorDescriptionID: string, yearID: string, api: API, callback: IAPICallback<IndicatorDescriptionYear>): Async {
            return api.executeEndpoint<IndicatorDescriptionYear>(Endpoint.fromSelf<IndicatorDescriptionYear>(), callback, { indicatorDescriptionID: indicatorDescriptionID, yearID: yearID });
        }
    }
    
    export class IndicatorDescriptionYear extends BaseIndicatorDescriptionYear { }

    /** Contains properties and static functionality for the IndicatorDimensionGraph type. */
    export class BaseIndicatorDimensionGraph extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            localeLevelID: new PropertyMap("localeLevelID", "LocaleLevelID"),
            dimensionGraphID: new PropertyMap("dimensionGraphID", "DimensionGraphID")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public localeLevelID: number = null;
        public dimensionGraphID: number = null;

        protected getFields(): any { return BaseIndicatorDimensionGraph.Fields; }

        /** Gets a list of all of the IndicatorDimensionGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDimensionGraphs */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDimensionGraph>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDimensionGraphs exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDimensionGraphs method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDimensionGraph with the specified primary key.
         *  @param id The primary key of the IndicatorDimensionGraph to return.
         *  @return The matching IndicatorDimensionGraph, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDimensionGraph>): Async {
            return api.executeEndpoint<IndicatorDimensionGraph>(Endpoint.fromSelf<IndicatorDimensionGraph>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDimensionGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDimensionGraphs which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDimensionGraph>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDimensionGraphs which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDimensionGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDimensionGraphswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDimensionGraphs by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<IndicatorDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDimensionGraph>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDimensionGraphs by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of IndicatorDimensionGraphs by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDimensionGraph.
         *  @return A single IndicatorDimensionGraph, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return IndicatorDimensionGraph.getIndicatorDescriptionForIndicatorDimensionGraph(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related IndicatorDimensionGraph.
         *  @param indicatorDimensionGraphID The ID of the IndicatorDimensionGraph to retrieve.
         *  @return A single IndicatorDimensionGraph, or null. */
        public static getIndicatorDescriptionForIndicatorDimensionGraph(indicatorDimensionGraphID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorDimensionGraphID: indicatorDimensionGraphID });
        }

        /** Gets IndicatorDimensionGraphs by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByLocaleLevelID(localeLevelID: number, api: API, callback: IAPICallback<Array<IndicatorDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDimensionGraph>>(), callback, { localeLevelID: localeLevelID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDimensionGraphs by LocaleLevelID exist. 
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByLocaleLevelIDCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Gets how many pages of IndicatorDimensionGraphs by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByLocaleLevelIDPageCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDimensionGraph.
         *  @return A single IndicatorDimensionGraph, or null. */
        public getLocaleLevel(api: API, callback: IAPICallback<LocaleLevel>): Async {
            return IndicatorDimensionGraph.getLocaleLevelForIndicatorDimensionGraph(this.id, api, callback);
        }

        /** Returns the related LocaleLevel based on the unique ID of the related IndicatorDimensionGraph.
         *  @param indicatorDimensionGraphID The ID of the IndicatorDimensionGraph to retrieve.
         *  @return A single IndicatorDimensionGraph, or null. */
        public static getLocaleLevelForIndicatorDimensionGraph(indicatorDimensionGraphID: number, api: API, callback: IAPICallback<LocaleLevel>): Async {
            return api.executeEndpoint<LocaleLevel>(Endpoint.fromSelf<LocaleLevel>(), callback, { indicatorDimensionGraphID: indicatorDimensionGraphID });
        }

        /** Gets IndicatorDimensionGraphs by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByDimensionGraphID(dimensionGraphID: number, api: API, callback: IAPICallback<Array<IndicatorDimensionGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimensionGraph>>(Endpoint.fromSelf<Array<IndicatorDimensionGraph>>(), callback, { dimensionGraphID: dimensionGraphID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDimensionGraphs by DimensionGraphID exist. 
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByDimensionGraphIDCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets how many pages of IndicatorDimensionGraphs by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child IndicatorDimensionGraphs.
         *  @return An Array of IndicatorDimensionGraphs. */
        public static getByDimensionGraphIDPageCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDimensionGraph.
         *  @return A single IndicatorDimensionGraph, or null. */
        public getDimensionGraph(api: API, callback: IAPICallback<DimensionGraph>): Async {
            return IndicatorDimensionGraph.getDimensionGraphForIndicatorDimensionGraph(this.id, api, callback);
        }

        /** Returns the related DimensionGraph based on the unique ID of the related IndicatorDimensionGraph.
         *  @param indicatorDimensionGraphID The ID of the IndicatorDimensionGraph to retrieve.
         *  @return A single IndicatorDimensionGraph, or null. */
        public static getDimensionGraphForIndicatorDimensionGraph(indicatorDimensionGraphID: number, api: API, callback: IAPICallback<DimensionGraph>): Async {
            return api.executeEndpoint<DimensionGraph>(Endpoint.fromSelf<DimensionGraph>(), callback, { indicatorDimensionGraphID: indicatorDimensionGraphID });
        }
    }
    
    export class IndicatorDimensionGraph extends BaseIndicatorDimensionGraph { }

    /** Contains properties and static functionality for the IndicatorDimension type. */
    export class BaseIndicatorDimension extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorID: new PropertyMap("indicatorID", "IndicatorID"),
            dimensionBookID: new PropertyMap("dimensionBookID", "DimensionBookID")
        };

        public id: number = null;
        public indicatorID: number = null;
        public dimensionBookID: number = null;

        protected getFields(): any { return BaseIndicatorDimension.Fields; }

        /** Gets a list of all of the IndicatorDimensions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of IndicatorDimensions */
        public static getAll(api: API, callback: IAPICallback<Array<IndicatorDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimension>>(Endpoint.fromSelf<Array<IndicatorDimension>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many IndicatorDimensions exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the IndicatorDimensions method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the IndicatorDimension with the specified primary key.
         *  @param id The primary key of the IndicatorDimension to return.
         *  @return The matching IndicatorDimension, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<IndicatorDimension>): Async {
            return api.executeEndpoint<IndicatorDimension>(Endpoint.fromSelf<IndicatorDimension>(), callback, { id: id });
        }

        /** Returns a filtered collection of IndicatorDimensions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All IndicatorDimensions which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<IndicatorDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimension>>(Endpoint.fromSelf<Array<IndicatorDimension>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many IndicatorDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of IndicatorDimensions which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of IndicatorDimensions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of IndicatorDimensionswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets IndicatorDimensions by IndicatorID.
         *  @param indicatorID The ID of the Indicator for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        public static getByIndicatorID(indicatorID: number, api: API, callback: IAPICallback<Array<IndicatorDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimension>>(Endpoint.fromSelf<Array<IndicatorDimension>>(), callback, { indicatorID: indicatorID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDimensions by IndicatorID exist. 
         *  @param indicatorID The ID of the Indicator for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        public static getByIndicatorIDCount(indicatorID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorID: indicatorID });
        }

        /** Gets how many pages of IndicatorDimensions by IndicatorID exist.
         *  @param indicatorID The ID of the Indicator for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        public static getByIndicatorIDPageCount(indicatorID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorID: indicatorID });
        }

        /** Returns the related Indicator based on the unique ID of the related IndicatorDimension.
         *  @return A single IndicatorDimension, or null. */
        public getIndicator(api: API, callback: IAPICallback<Indicator>): Async {
            return IndicatorDimension.getIndicatorForIndicatorDimension(this.id, api, callback);
        }

        /** Returns the related Indicator based on the unique ID of the related IndicatorDimension.
         *  @param indicatorDimensionID The ID of the IndicatorDimension to retrieve.
         *  @return A single IndicatorDimension, or null. */
        public static getIndicatorForIndicatorDimension(indicatorDimensionID: number, api: API, callback: IAPICallback<Indicator>): Async {
            return api.executeEndpoint<Indicator>(Endpoint.fromSelf<Indicator>(), callback, { indicatorDimensionID: indicatorDimensionID });
        }

        /** Gets IndicatorDimensions by DimensionBookID.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        public static getByDimensionBookID(dimensionBookID: number, api: API, callback: IAPICallback<Array<IndicatorDimension>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<IndicatorDimension>>(Endpoint.fromSelf<Array<IndicatorDimension>>(), callback, { dimensionBookID: dimensionBookID }, null, page, pageSize);
        }

        /** Gets how many IndicatorDimensions by DimensionBookID exist. 
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        public static getByDimensionBookIDCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Gets how many pages of IndicatorDimensions by DimensionBookID exist.
         *  @param dimensionBookID The ID of the DimensionBook for which to retrieve the child IndicatorDimensions.
         *  @return An Array of IndicatorDimensions. */
        public static getByDimensionBookIDPageCount(dimensionBookID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionBookID: dimensionBookID });
        }

        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDimension.
         *  @return A single IndicatorDimension, or null. */
        public getDimensionBook(api: API, callback: IAPICallback<DimensionBook>): Async {
            return IndicatorDimension.getDimensionBookForIndicatorDimension(this.id, api, callback);
        }

        /** Returns the related DimensionBook based on the unique ID of the related IndicatorDimension.
         *  @param indicatorDimensionID The ID of the IndicatorDimension to retrieve.
         *  @return A single IndicatorDimension, or null. */
        public static getDimensionBookForIndicatorDimension(indicatorDimensionID: number, api: API, callback: IAPICallback<DimensionBook>): Async {
            return api.executeEndpoint<DimensionBook>(Endpoint.fromSelf<DimensionBook>(), callback, { indicatorDimensionID: indicatorDimensionID });
        }

        /** Gets a unique IndicatorDimension based on the provided values.
         *  @return A single IndicatorDimension, or null. */
        public static getByDimensionBookIDAndIndicatorID(dimensionBookID: string, indicatorID: string, api: API, callback: IAPICallback<IndicatorDimension>): Async {
            return api.executeEndpoint<IndicatorDimension>(Endpoint.fromSelf<IndicatorDimension>(), callback, { dimensionBookID: dimensionBookID, indicatorID: indicatorID });
        }
    }
    
    export class IndicatorDimension extends BaseIndicatorDimension { }

    /** Contains properties and static functionality for the Indicator type. */
    export class BaseIndicator extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            indicatorDescriptionID: new PropertyMap("indicatorDescriptionID", "IndicatorDescriptionID"),
            timeframeID: new PropertyMap("timeframeID", "TimeframeID"),
            localeID: new PropertyMap("localeID", "LocaleID"),
            dimensionGraphID: new PropertyMap("dimensionGraphID", "DimensionGraphID"),
            dimensionGraphSortOrder: new PropertyMap("dimensionGraphSortOrder", "DimensionGraphSortOrder"),
            modifierGraphID: new PropertyMap("modifierGraphID", "ModifierGraphID"),
            modifierGraphSortOrder: new PropertyMap("modifierGraphSortOrder", "ModifierGraphSortOrder"),
            dimensionGraphHeader: new PropertyMap("dimensionGraphHeader", "DimensionGraphHeader"),
            dimensionGraphLabel: new PropertyMap("dimensionGraphLabel", "DimensionGraphLabel"),
            floatValue: new PropertyMap("floatValue", "FloatValue"),
            formattedValue: new PropertyMap("formattedValue", "FormattedValue"),
            graphValue: new PropertyMap("graphValue", "GraphValue"),
            textualValue: new PropertyMap("textualValue", "TextualValue"),
            confidenceIntervalLow: new PropertyMap("confidenceIntervalLow", "ConfidenceIntervalLow"),
            confidenceIntervalLowFormatted: new PropertyMap("confidenceIntervalLowFormatted", "ConfidenceIntervalLowFormatted"),
            graphCILowValue: new PropertyMap("graphCILowValue", "GraphCILowValue"),
            confidenceIntervalHigh: new PropertyMap("confidenceIntervalHigh", "ConfidenceIntervalHigh"),
            confidenceIntervalHighFormatted: new PropertyMap("confidenceIntervalHighFormatted", "ConfidenceIntervalHighFormatted"),
            graphCIHighValue: new PropertyMap("graphCIHighValue", "GraphCIHighValue"),
            standardError: new PropertyMap("standardError", "StandardError"),
            standardErrorGraphValue: new PropertyMap("standardErrorGraphValue", "StandardErrorGraphValue"),
            standardErrorFormatted: new PropertyMap("standardErrorFormatted", "StandardErrorFormatted"),
            floatTarget: new PropertyMap("floatTarget", "FloatTarget"),
            integralTarget: new PropertyMap("integralTarget", "IntegralTarget"),
            formattedTarget: new PropertyMap("formattedTarget", "FormattedTarget"),
            numerator: new PropertyMap("numerator", "Numerator"),
            denominator: new PropertyMap("denominator", "Denominator"),
            fipsCode: new PropertyMap("fipsCode", "FIPSCode"),
            hrrCode: new PropertyMap("hrrCode", "HRRCode"),
            ssaCode: new PropertyMap("ssaCode", "SSACode")
        };

        public id: number = null;
        public indicatorDescriptionID: number = null;
        public timeframeID: number = null;
        public localeID: number = null;
        public dimensionGraphID: number = null;
        public dimensionGraphSortOrder: number = null;
        public modifierGraphID: number = null;
        public modifierGraphSortOrder: number = null;
        public dimensionGraphHeader: string = null;
        public dimensionGraphLabel: string = null;
        public floatValue: number = null;
        public formattedValue: string = null;
        public graphValue: string = null;
        public textualValue: string = null;
        public confidenceIntervalLow: number = null;
        public confidenceIntervalLowFormatted: string = null;
        public graphCILowValue: string = null;
        public confidenceIntervalHigh: number = null;
        public confidenceIntervalHighFormatted: string = null;
        public graphCIHighValue: string = null;
        public standardError: number = null;
        public standardErrorGraphValue: string = null;
        public standardErrorFormatted: string = null;
        public floatTarget: number = null;
        public integralTarget: number = null;
        public formattedTarget: string = null;
        public numerator: number = null;
        public denominator: number = null;
        public fipsCode: number = null;
        public hrrCode: number = null;
        public ssaCode: number = null;

        protected getFields(): any { return BaseIndicator.Fields; }

        /** Gets a list of all of the Indicators in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Indicators */
        public static getAll(api: API, callback: IAPICallback<Array<Indicator>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Indicator>>(Endpoint.fromSelf<Array<Indicator>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Indicators exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Indicators method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Indicator with the specified primary key.
         *  @param id The primary key of the Indicator to return.
         *  @return The matching Indicator, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Indicator>): Async {
            return api.executeEndpoint<Indicator>(Endpoint.fromSelf<Indicator>(), callback, { id: id });
        }

        /** Returns a filtered collection of Indicators based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Indicators which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Indicator>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Indicator>>(Endpoint.fromSelf<Array<Indicator>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Indicators exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Indicators which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Indicators exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Indicatorswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Indicators by IndicatorDescriptionID.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByIndicatorDescriptionID(indicatorDescriptionID: number, api: API, callback: IAPICallback<Array<Indicator>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Indicator>>(Endpoint.fromSelf<Array<Indicator>>(), callback, { indicatorDescriptionID: indicatorDescriptionID }, null, page, pageSize);
        }

        /** Gets how many Indicators by IndicatorDescriptionID exist. 
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByIndicatorDescriptionIDCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Gets how many pages of Indicators by IndicatorDescriptionID exist.
         *  @param indicatorDescriptionID The ID of the IndicatorDescription for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByIndicatorDescriptionIDPageCount(indicatorDescriptionID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { indicatorDescriptionID: indicatorDescriptionID });
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        public getIndicatorDescription(api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return Indicator.getIndicatorDescriptionForIndicator(this.id, api, callback);
        }

        /** Returns the related IndicatorDescription based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        public static getIndicatorDescriptionForIndicator(indicatorID: number, api: API, callback: IAPICallback<IndicatorDescription>): Async {
            return api.executeEndpoint<IndicatorDescription>(Endpoint.fromSelf<IndicatorDescription>(), callback, { indicatorID: indicatorID });
        }

        /** Gets Indicators by TimeframeID.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByTimeframeID(timeframeID: number, api: API, callback: IAPICallback<Array<Indicator>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Indicator>>(Endpoint.fromSelf<Array<Indicator>>(), callback, { timeframeID: timeframeID }, null, page, pageSize);
        }

        /** Gets how many Indicators by TimeframeID exist. 
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByTimeframeIDCount(timeframeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { timeframeID: timeframeID });
        }

        /** Gets how many pages of Indicators by TimeframeID exist.
         *  @param timeframeID The ID of the Timeframe for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByTimeframeIDPageCount(timeframeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { timeframeID: timeframeID });
        }

        /** Returns the related Timeframe based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        public getTimeframe(api: API, callback: IAPICallback<Timeframe>): Async {
            return Indicator.getTimeframeForIndicator(this.id, api, callback);
        }

        /** Returns the related Timeframe based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        public static getTimeframeForIndicator(indicatorID: number, api: API, callback: IAPICallback<Timeframe>): Async {
            return api.executeEndpoint<Timeframe>(Endpoint.fromSelf<Timeframe>(), callback, { indicatorID: indicatorID });
        }

        /** Gets Indicators by LocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByLocaleID(localeID: number, api: API, callback: IAPICallback<Array<Indicator>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Indicator>>(Endpoint.fromSelf<Array<Indicator>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many Indicators by LocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of Indicators by LocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related Locale based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        public getLocale(api: API, callback: IAPICallback<Locale>): Async {
            return Indicator.getLocaleForIndicator(this.id, api, callback);
        }

        /** Returns the related Locale based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        public static getLocaleForIndicator(indicatorID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { indicatorID: indicatorID });
        }

        /** Gets Indicators by DimensionGraphID.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByDimensionGraphID(dimensionGraphID: number, api: API, callback: IAPICallback<Array<Indicator>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Indicator>>(Endpoint.fromSelf<Array<Indicator>>(), callback, { dimensionGraphID: dimensionGraphID }, null, page, pageSize);
        }

        /** Gets how many Indicators by DimensionGraphID exist. 
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByDimensionGraphIDCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Gets how many pages of Indicators by DimensionGraphID exist.
         *  @param dimensionGraphID The ID of the DimensionGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByDimensionGraphIDPageCount(dimensionGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { dimensionGraphID: dimensionGraphID });
        }

        /** Returns the related DimensionGraph based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        public getDimensionGraph(api: API, callback: IAPICallback<DimensionGraph>): Async {
            return Indicator.getDimensionGraphForIndicator(this.id, api, callback);
        }

        /** Returns the related DimensionGraph based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        public static getDimensionGraphForIndicator(indicatorID: number, api: API, callback: IAPICallback<DimensionGraph>): Async {
            return api.executeEndpoint<DimensionGraph>(Endpoint.fromSelf<DimensionGraph>(), callback, { indicatorID: indicatorID });
        }

        /** Gets Indicators by ModifierGraphID.
         *  @param modifierGraphID The ID of the ModifierGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByModifierGraphID(modifierGraphID: number, api: API, callback: IAPICallback<Array<Indicator>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Indicator>>(Endpoint.fromSelf<Array<Indicator>>(), callback, { modifierGraphID: modifierGraphID }, null, page, pageSize);
        }

        /** Gets how many Indicators by ModifierGraphID exist. 
         *  @param modifierGraphID The ID of the ModifierGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByModifierGraphIDCount(modifierGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierGraphID: modifierGraphID });
        }

        /** Gets how many pages of Indicators by ModifierGraphID exist.
         *  @param modifierGraphID The ID of the ModifierGraph for which to retrieve the child Indicators.
         *  @return An Array of Indicators. */
        public static getByModifierGraphIDPageCount(modifierGraphID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierGraphID: modifierGraphID });
        }

        /** Returns the related ModifierGraph based on the unique ID of the related Indicator.
         *  @return A single Indicator, or null. */
        public getModifierGraph(api: API, callback: IAPICallback<ModifierGraph>): Async {
            return Indicator.getModifierGraphForIndicator(this.id, api, callback);
        }

        /** Returns the related ModifierGraph based on the unique ID of the related Indicator.
         *  @param indicatorID The ID of the Indicator to retrieve.
         *  @return A single Indicator, or null. */
        public static getModifierGraphForIndicator(indicatorID: number, api: API, callback: IAPICallback<ModifierGraph>): Async {
            return api.executeEndpoint<ModifierGraph>(Endpoint.fromSelf<ModifierGraph>(), callback, { indicatorID: indicatorID });
        }
    }
    
    export class Indicator extends BaseIndicator { }

    /** Contains properties and static functionality for the Initiative type. */
    export class BaseInitiative extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            acronym: new PropertyMap("acronym", "Acronym"),
            name: new PropertyMap("name", "Name"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            supplierAcronym: new PropertyMap("supplierAcronym", "SupplierAcronym"),
            supplierName: new PropertyMap("supplierName", "SupplierName"),
            acknowledgement: new PropertyMap("acknowledgement", "Acknowledgement"),
            minimumYear: new PropertyMap("minimumYear", "MinimumYear"),
            maximumYear: new PropertyMap("maximumYear", "MaximumYear"),
            IsSSA: new PropertyMap("IsSSA", "IsSSA"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate")
        };

        public id: number = null;
        public acronym: string = null;
        public name: string = null;
        public sortOrder: number = null;
        public supplierAcronym: string = null;
        public supplierName: string = null;
        public acknowledgement: string = null;
        public minimumYear: number = null;
        public maximumYear: number = null;
        public IsSSA: boolean = null;
        public modifyDate: Date = null;

        protected getFields(): any { return BaseInitiative.Fields; }

        /** Gets a list of all of the Initiatives in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Initiatives */
        public static getAll(api: API, callback: IAPICallback<Array<Initiative>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Initiative>>(Endpoint.fromSelf<Array<Initiative>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
        }

        /** Gets how many Initiatives exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Initiatives method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Initiative with the specified primary key.
         *  @param id The primary key of the Initiative to return.
         *  @return The matching Initiative, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Initiative>): Async {
            return api.executeEndpoint<Initiative>(Endpoint.fromSelf<Initiative>(), callback, { id: id });
        }

        /** Returns a filtered collection of Initiatives based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Initiatives which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Initiative>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Initiative>>(Endpoint.fromSelf<Array<Initiative>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Initiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Initiatives which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Initiatives exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Initiativeswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class Initiative extends BaseInitiative { }

    /** Contains properties and static functionality for the Intervention type. */
    export class BaseIntervention extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            topic: new PropertyMap("topic", "Topic"),
            urlID: new PropertyMap("urlID", "UrlID"),
            proposedText: new PropertyMap("proposedText", "ProposedText"),
            taskForceOnCommunityPreventiveServicesFinding: new PropertyMap("taskForceOnCommunityPreventiveServicesFinding", "TaskForceOnCommunityPreventiveServicesFinding"),
            grade: new PropertyMap("grade", "Grade"),
            interventionSource: new PropertyMap("interventionSource", "InterventionSource"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public topic: string = null;
        public urlID: number = null;
        public proposedText: string = null;
        public taskForceOnCommunityPreventiveServicesFinding: string = null;
        public grade: string = null;
        public interventionSource: string = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseIntervention.Fields; }

        /** Gets a list of all of the Interventions in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Interventions */
        public static getAll(api: API, callback: IAPICallback<Array<Intervention>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Intervention>>(Endpoint.fromSelf<Array<Intervention>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Interventions exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Interventions method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Intervention with the specified primary key.
         *  @param id The primary key of the Intervention to return.
         *  @return The matching Intervention, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Intervention>): Async {
            return api.executeEndpoint<Intervention>(Endpoint.fromSelf<Intervention>(), callback, { id: id });
        }

        /** Returns a filtered collection of Interventions based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Interventions which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Intervention>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Intervention>>(Endpoint.fromSelf<Array<Intervention>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Interventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Interventions which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Interventions exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Interventionswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Interventions by UrlID.
         *  @param urlID The ID of the Url for which to retrieve the child Interventions.
         *  @return An Array of Interventions. */
        public static getByUrlID(urlID: number, api: API, callback: IAPICallback<Array<Intervention>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Intervention>>(Endpoint.fromSelf<Array<Intervention>>(), callback, { urlID: urlID }, null, page, pageSize);
        }

        /** Gets how many Interventions by UrlID exist. 
         *  @param urlID The ID of the Url for which to retrieve the child Interventions.
         *  @return An Array of Interventions. */
        public static getByUrlIDCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Gets how many pages of Interventions by UrlID exist.
         *  @param urlID The ID of the Url for which to retrieve the child Interventions.
         *  @return An Array of Interventions. */
        public static getByUrlIDPageCount(urlID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { urlID: urlID });
        }

        /** Returns the related Url based on the unique ID of the related Intervention.
         *  @return A single Intervention, or null. */
        public getUrl(api: API, callback: IAPICallback<Url>): Async {
            return Intervention.getUrlForIntervention(this.id, api, callback);
        }

        /** Returns the related Url based on the unique ID of the related Intervention.
         *  @param interventionID The ID of the Intervention to retrieve.
         *  @return A single Intervention, or null. */
        public static getUrlForIntervention(interventionID: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { interventionID: interventionID });
        }
    }
    
    export class Intervention extends BaseIntervention { }

    /** Contains properties and static functionality for the Keyword type. */
    export class BaseKeyword extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            showOnProfile: new PropertyMap("showOnProfile", "ShowOnProfile"),
            forDevelopment: new PropertyMap("forDevelopment", "ForDevelopment"),
            enabled: new PropertyMap("enabled", "Enabled"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate"),
            countOfIndicatorDescription: new PropertyMap("countOfIndicatorDescription", "CountOfIndicatorDescription")
        };

        public id: number = null;
        public name: string = null;
        public showOnProfile: boolean = null;
        public forDevelopment: boolean = null;
        public enabled: boolean = null;
        public modifyDate: Date = null;
        public countOfIndicatorDescription: number = null;

        protected getFields(): any { return BaseKeyword.Fields; }

        /** Gets a list of all of the Keywords in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Keywords */
        public static getAll(api: API, callback: IAPICallback<Array<Keyword>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Keyword>>(Endpoint.fromSelf<Array<Keyword>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
        }

        /** Gets how many Keywords exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Keywords method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Keyword with the specified primary key.
         *  @param id The primary key of the Keyword to return.
         *  @return The matching Keyword, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Keyword>): Async {
            return api.executeEndpoint<Keyword>(Endpoint.fromSelf<Keyword>(), callback, { id: id });
        }

        /** Returns a filtered collection of Keywords based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Keywords which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Keyword>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Keyword>>(Endpoint.fromSelf<Array<Keyword>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Keywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Keywords which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Keywords exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Keywordswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class Keyword extends BaseKeyword { }

    /** Contains properties and static functionality for the LocaleLevel type. */
    export class BaseLocaleLevel extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public name: LocaleLevelName = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseLocaleLevel.Fields; }

        /** Gets a list of all of the LocaleLevels in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of LocaleLevels */
        public static getAll(api: API, callback: IAPICallback<Array<LocaleLevel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<LocaleLevel>>(Endpoint.fromSelf<Array<LocaleLevel>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many LocaleLevels exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the LocaleLevels method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the LocaleLevel with the specified primary key.
         *  @param id The primary key of the LocaleLevel to return.
         *  @return The matching LocaleLevel, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<LocaleLevel>): Async {
            return api.executeEndpoint<LocaleLevel>(Endpoint.fromSelf<LocaleLevel>(), callback, { id: id });
        }

        /** Returns a filtered collection of LocaleLevels based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All LocaleLevels which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<LocaleLevel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<LocaleLevel>>(Endpoint.fromSelf<Array<LocaleLevel>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many LocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of LocaleLevels which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of LocaleLevels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of LocaleLevelswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class LocaleLevel extends BaseLocaleLevel { }

    /** Contains properties and static functionality for the LocaleRelation type. */
    export class BaseLocaleRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorLocaleID: new PropertyMap("ancestorLocaleID", "AncestorLocaleID"),
            descendantLocaleID: new PropertyMap("descendantLocaleID", "DescendantLocaleID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorLocaleID: number = null;
        public descendantLocaleID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseLocaleRelation.Fields; }

        /** Gets a list of all of the LocaleRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of LocaleRelations */
        public static getAll(api: API, callback: IAPICallback<Array<LocaleRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<LocaleRelation>>(Endpoint.fromSelf<Array<LocaleRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many LocaleRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the LocaleRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the LocaleRelation with the specified primary key.
         *  @param id The primary key of the LocaleRelation to return.
         *  @return The matching LocaleRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<LocaleRelation>): Async {
            return api.executeEndpoint<LocaleRelation>(Endpoint.fromSelf<LocaleRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of LocaleRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All LocaleRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<LocaleRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<LocaleRelation>>(Endpoint.fromSelf<Array<LocaleRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many LocaleRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of LocaleRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of LocaleRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of LocaleRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets LocaleRelations by AncestorLocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        public static getByAncestorLocaleID(localeID: number, api: API, callback: IAPICallback<Array<LocaleRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<LocaleRelation>>(Endpoint.fromSelf<Array<LocaleRelation>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many LocaleRelations by AncestorLocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        public static getByAncestorLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of LocaleRelations by AncestorLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        public static getByAncestorLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related AncestorLocale based on the unique ID of the related LocaleRelation.
         *  @return A single LocaleRelation, or null. */
        public getAncestorLocale(api: API, callback: IAPICallback<Locale>): Async {
            return LocaleRelation.getAncestorLocaleForLocaleRelation(this.id, api, callback);
        }

        /** Returns the related AncestorLocale based on the unique ID of the related LocaleRelation.
         *  @param localeRelationID The ID of the LocaleRelation to retrieve.
         *  @return A single LocaleRelation, or null. */
        public static getAncestorLocaleForLocaleRelation(localeRelationID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { localeRelationID: localeRelationID });
        }

        /** Gets LocaleRelations by DescendantLocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        public static getByDescendantLocaleID(localeID: number, api: API, callback: IAPICallback<Array<LocaleRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<LocaleRelation>>(Endpoint.fromSelf<Array<LocaleRelation>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many LocaleRelations by DescendantLocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        public static getByDescendantLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of LocaleRelations by DescendantLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child LocaleRelations.
         *  @return An Array of LocaleRelations. */
        public static getByDescendantLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related DescendantLocale based on the unique ID of the related LocaleRelation.
         *  @return A single LocaleRelation, or null. */
        public getDescendantLocale(api: API, callback: IAPICallback<Locale>): Async {
            return LocaleRelation.getDescendantLocaleForLocaleRelation(this.id, api, callback);
        }

        /** Returns the related DescendantLocale based on the unique ID of the related LocaleRelation.
         *  @param localeRelationID The ID of the LocaleRelation to retrieve.
         *  @return A single LocaleRelation, or null. */
        public static getDescendantLocaleForLocaleRelation(localeRelationID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { localeRelationID: localeRelationID });
        }

        /** Gets a unique LocaleRelation based on the provided values.
         *  @return A single LocaleRelation, or null. */
        public static getByAncestorLocaleIDAndDescendantLocaleID(ancestorLocaleID: string, descendantLocaleID: string, api: API, callback: IAPICallback<LocaleRelation>): Async {
            return api.executeEndpoint<LocaleRelation>(Endpoint.fromSelf<LocaleRelation>(), callback, { ancestorLocaleID: ancestorLocaleID, descendantLocaleID: descendantLocaleID });
        }
    }
    
    export class LocaleRelation extends BaseLocaleRelation { }

    /** Contains properties and static functionality for the Locale type. */
    export class BaseLocale extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            parentLocaleID: new PropertyMap("parentLocaleID", "ParentLocaleID"),
            fips_int: new PropertyMap("fips_int", "FIPS_int"),
            stateFIPSCode: new PropertyMap("stateFIPSCode", "StateFIPSCode"),
            countyFIPSCode: new PropertyMap("countyFIPSCode", "CountyFIPSCode"),
            countySSACode: new PropertyMap("countySSACode", "CountySSACode"),
            hrrCode: new PropertyMap("hrrCode", "HRRCode"),
            fullName: new PropertyMap("fullName", "FullName"),
            name: new PropertyMap("name", "Name"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            abbreviation: new PropertyMap("abbreviation", "Abbreviation"),
            localeLevelID: new PropertyMap("localeLevelID", "LocaleLevelID")
        };

        public id: number = null;
        public parentLocaleID: number = null;
        public fips_int: number = null;
        public stateFIPSCode: string = null;
        public countyFIPSCode: string = null;
        public countySSACode: string = null;
        public hrrCode: string = null;
        public fullName: string = null;
        public name: string = null;
        public sortOrder: number = null;
        public abbreviation: string = null;
        public localeLevelID: number = null;

        protected getFields(): any { return BaseLocale.Fields; }

        /** Gets a list of all of the Locales in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Locales */
        public static getAll(api: API, callback: IAPICallback<Array<Locale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Locale>>(Endpoint.fromSelf<Array<Locale>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Locales exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Locales method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Locale with the specified primary key.
         *  @param id The primary key of the Locale to return.
         *  @return The matching Locale, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { id: id });
        }

        /** Returns a filtered collection of Locales based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Locales which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Locale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Locale>>(Endpoint.fromSelf<Array<Locale>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Locales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Locales which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Locales exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Localeswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Locales by ParentLocaleID.
         *  @return An Array of Locales. */
        public getLocales(api: API, callback: IAPICallback<Array<Locale>>, page?: number, pageSize?: number): Async {
            return Locale.getByParentLocaleID(this.id, api, callback, page, pageSize);
        }

        /** Gets Locales by ParentLocaleID.
         *  @param localeID The ID of the Locale for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        public static getByParentLocaleID(localeID: number, api: API, callback: IAPICallback<Array<Locale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Locale>>(Endpoint.fromSelf<Array<Locale>>(), callback, { localeID: localeID }, null, page, pageSize);
        }

        /** Gets how many Locales by ParentLocaleID exist. 
         *  @return An Array of Locales. */
        public getLocalesCount(api: API, callback: IAPICallback<number>): Async {
            return Locale.getByParentLocaleIDCount(this.id, api, callback);
        }

        /** Gets how many Locales by ParentLocaleID exist. 
         *  @param localeID The ID of the Locale for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        public static getByParentLocaleIDCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Gets how many pages of Locales by ParentLocaleID exist.
         *  @return An Array of Locales. */
        public getLocalesPageCount(api: API, callback: IAPICallback<number>): Async {
            return Locale.getByParentLocaleIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of Locales by ParentLocaleID exist.
         *  @param localeID The ID of the Locale for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        public static getByParentLocaleIDPageCount(localeID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeID: localeID });
        }

        /** Returns the related ParentLocale based on the unique ID of the related Locale.
         *  @return A single Locale, or null. */
        public getParentLocale(api: API, callback: IAPICallback<Locale>): Async {
            return Locale.getParentLocaleForLocale(this.id, api, callback);
        }

        /** Returns the related ParentLocale based on the unique ID of the related Locale.
         *  @param localeID The ID of the Locale to retrieve.
         *  @return A single Locale, or null. */
        public static getParentLocaleForLocale(localeID: number, api: API, callback: IAPICallback<Locale>): Async {
            return api.executeEndpoint<Locale>(Endpoint.fromSelf<Locale>(), callback, { localeID: localeID });
        }

        /** Gets Locales by LocaleLevelID.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        public static getByLocaleLevelID(localeLevelID: number, api: API, callback: IAPICallback<Array<Locale>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Locale>>(Endpoint.fromSelf<Array<Locale>>(), callback, { localeLevelID: localeLevelID }, null, page, pageSize);
        }

        /** Gets how many Locales by LocaleLevelID exist. 
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        public static getByLocaleLevelIDCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Gets how many pages of Locales by LocaleLevelID exist.
         *  @param localeLevelID The ID of the LocaleLevel for which to retrieve the child Locales.
         *  @return An Array of Locales. */
        public static getByLocaleLevelIDPageCount(localeLevelID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { localeLevelID: localeLevelID });
        }

        /** Returns the related LocaleLevel based on the unique ID of the related Locale.
         *  @return A single Locale, or null. */
        public getLocaleLevel(api: API, callback: IAPICallback<LocaleLevel>): Async {
            return Locale.getLocaleLevelForLocale(this.id, api, callback);
        }

        /** Returns the related LocaleLevel based on the unique ID of the related Locale.
         *  @param localeID The ID of the Locale to retrieve.
         *  @return A single Locale, or null. */
        public static getLocaleLevelForLocale(localeID: number, api: API, callback: IAPICallback<LocaleLevel>): Async {
            return api.executeEndpoint<LocaleLevel>(Endpoint.fromSelf<LocaleLevel>(), callback, { localeID: localeID });
        }
    }
    
    export class Locale extends BaseLocale { }

    /** Contains properties and static functionality for the MaritalStatus type. */
    export class BaseMaritalStatus extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentMaritalStatusID: new PropertyMap("parentMaritalStatusID", "ParentMaritalStatusID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentMaritalStatusID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseMaritalStatus.Fields; }

        /** Gets a list of all of the MaritalStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of MaritalStatuses */
        public static getAll(api: API, callback: IAPICallback<Array<MaritalStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<MaritalStatus>>(Endpoint.fromSelf<Array<MaritalStatus>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many MaritalStatuses exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the MaritalStatuses method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the MaritalStatus with the specified primary key.
         *  @param id The primary key of the MaritalStatus to return.
         *  @return The matching MaritalStatus, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<MaritalStatus>): Async {
            return api.executeEndpoint<MaritalStatus>(Endpoint.fromSelf<MaritalStatus>(), callback, { id: id });
        }

        /** Returns a filtered collection of MaritalStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All MaritalStatuses which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<MaritalStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<MaritalStatus>>(Endpoint.fromSelf<Array<MaritalStatus>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many MaritalStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of MaritalStatuses which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of MaritalStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of MaritalStatuseswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets MaritalStatuses by ParentMaritalStatusID.
         *  @return An Array of MaritalStatuses. */
        public getMaritalStatuses(api: API, callback: IAPICallback<Array<MaritalStatus>>, page?: number, pageSize?: number): Async {
            return MaritalStatus.getByParentMaritalStatusID(this.id, api, callback, page, pageSize);
        }

        /** Gets MaritalStatuses by ParentMaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatuses.
         *  @return An Array of MaritalStatuses. */
        public static getByParentMaritalStatusID(maritalStatusID: number, api: API, callback: IAPICallback<Array<MaritalStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<MaritalStatus>>(Endpoint.fromSelf<Array<MaritalStatus>>(), callback, { maritalStatusID: maritalStatusID }, null, page, pageSize);
        }

        /** Gets how many MaritalStatuses by ParentMaritalStatusID exist. 
         *  @return An Array of MaritalStatuses. */
        public getMaritalStatusesCount(api: API, callback: IAPICallback<number>): Async {
            return MaritalStatus.getByParentMaritalStatusIDCount(this.id, api, callback);
        }

        /** Gets how many MaritalStatuses by ParentMaritalStatusID exist. 
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatuses.
         *  @return An Array of MaritalStatuses. */
        public static getByParentMaritalStatusIDCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Gets how many pages of MaritalStatuses by ParentMaritalStatusID exist.
         *  @return An Array of MaritalStatuses. */
        public getMaritalStatusesPageCount(api: API, callback: IAPICallback<number>): Async {
            return MaritalStatus.getByParentMaritalStatusIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of MaritalStatuses by ParentMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatuses.
         *  @return An Array of MaritalStatuses. */
        public static getByParentMaritalStatusIDPageCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Returns the related ParentMaritalStatus based on the unique ID of the related MaritalStatus.
         *  @return A single MaritalStatus, or null. */
        public getParentMaritalStatus(api: API, callback: IAPICallback<MaritalStatus>): Async {
            return MaritalStatus.getParentMaritalStatusForMaritalStatus(this.id, api, callback);
        }

        /** Returns the related ParentMaritalStatus based on the unique ID of the related MaritalStatus.
         *  @param maritalStatusID The ID of the MaritalStatus to retrieve.
         *  @return A single MaritalStatus, or null. */
        public static getParentMaritalStatusForMaritalStatus(maritalStatusID: number, api: API, callback: IAPICallback<MaritalStatus>): Async {
            return api.executeEndpoint<MaritalStatus>(Endpoint.fromSelf<MaritalStatus>(), callback, { maritalStatusID: maritalStatusID });
        }
    }
    
    export class MaritalStatus extends BaseMaritalStatus { }

    /** Contains properties and static functionality for the MaritalStatusRelation type. */
    export class BaseMaritalStatusRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorMaritalStatusID: new PropertyMap("ancestorMaritalStatusID", "AncestorMaritalStatusID"),
            descendantMaritalStatusID: new PropertyMap("descendantMaritalStatusID", "DescendantMaritalStatusID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorMaritalStatusID: number = null;
        public descendantMaritalStatusID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseMaritalStatusRelation.Fields; }

        /** Gets a list of all of the MaritalStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of MaritalStatusRelations */
        public static getAll(api: API, callback: IAPICallback<Array<MaritalStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<MaritalStatusRelation>>(Endpoint.fromSelf<Array<MaritalStatusRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many MaritalStatusRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the MaritalStatusRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the MaritalStatusRelation with the specified primary key.
         *  @param id The primary key of the MaritalStatusRelation to return.
         *  @return The matching MaritalStatusRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<MaritalStatusRelation>): Async {
            return api.executeEndpoint<MaritalStatusRelation>(Endpoint.fromSelf<MaritalStatusRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of MaritalStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All MaritalStatusRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<MaritalStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<MaritalStatusRelation>>(Endpoint.fromSelf<Array<MaritalStatusRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many MaritalStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of MaritalStatusRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of MaritalStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of MaritalStatusRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets MaritalStatusRelations by AncestorMaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        public static getByAncestorMaritalStatusID(maritalStatusID: number, api: API, callback: IAPICallback<Array<MaritalStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<MaritalStatusRelation>>(Endpoint.fromSelf<Array<MaritalStatusRelation>>(), callback, { maritalStatusID: maritalStatusID }, null, page, pageSize);
        }

        /** Gets how many MaritalStatusRelations by AncestorMaritalStatusID exist. 
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        public static getByAncestorMaritalStatusIDCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Gets how many pages of MaritalStatusRelations by AncestorMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        public static getByAncestorMaritalStatusIDPageCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Returns the related AncestorMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @return A single MaritalStatusRelation, or null. */
        public getAncestorMaritalStatus(api: API, callback: IAPICallback<MaritalStatus>): Async {
            return MaritalStatusRelation.getAncestorMaritalStatusForMaritalStatusRelation(this.id, api, callback);
        }

        /** Returns the related AncestorMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @param maritalStatusRelationID The ID of the MaritalStatusRelation to retrieve.
         *  @return A single MaritalStatusRelation, or null. */
        public static getAncestorMaritalStatusForMaritalStatusRelation(maritalStatusRelationID: number, api: API, callback: IAPICallback<MaritalStatus>): Async {
            return api.executeEndpoint<MaritalStatus>(Endpoint.fromSelf<MaritalStatus>(), callback, { maritalStatusRelationID: maritalStatusRelationID });
        }

        /** Gets MaritalStatusRelations by DescendantMaritalStatusID.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        public static getByDescendantMaritalStatusID(maritalStatusID: number, api: API, callback: IAPICallback<Array<MaritalStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<MaritalStatusRelation>>(Endpoint.fromSelf<Array<MaritalStatusRelation>>(), callback, { maritalStatusID: maritalStatusID }, null, page, pageSize);
        }

        /** Gets how many MaritalStatusRelations by DescendantMaritalStatusID exist. 
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        public static getByDescendantMaritalStatusIDCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Gets how many pages of MaritalStatusRelations by DescendantMaritalStatusID exist.
         *  @param maritalStatusID The ID of the MaritalStatus for which to retrieve the child MaritalStatusRelations.
         *  @return An Array of MaritalStatusRelations. */
        public static getByDescendantMaritalStatusIDPageCount(maritalStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { maritalStatusID: maritalStatusID });
        }

        /** Returns the related DescendantMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @return A single MaritalStatusRelation, or null. */
        public getDescendantMaritalStatus(api: API, callback: IAPICallback<MaritalStatus>): Async {
            return MaritalStatusRelation.getDescendantMaritalStatusForMaritalStatusRelation(this.id, api, callback);
        }

        /** Returns the related DescendantMaritalStatus based on the unique ID of the related MaritalStatusRelation.
         *  @param maritalStatusRelationID The ID of the MaritalStatusRelation to retrieve.
         *  @return A single MaritalStatusRelation, or null. */
        public static getDescendantMaritalStatusForMaritalStatusRelation(maritalStatusRelationID: number, api: API, callback: IAPICallback<MaritalStatus>): Async {
            return api.executeEndpoint<MaritalStatus>(Endpoint.fromSelf<MaritalStatus>(), callback, { maritalStatusRelationID: maritalStatusRelationID });
        }
    }
    
    export class MaritalStatusRelation extends BaseMaritalStatusRelation { }

    /** Contains properties and static functionality for the Modifier type. */
    export class BaseModifier extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            key: new PropertyMap("key", "Key"),
            type: new PropertyMap("type", "Type"),
            name: new PropertyMap("name", "Name"),
            isHeader: new PropertyMap("isHeader", "isHeader"),
            isCompoundValue: new PropertyMap("isCompoundValue", "isCompoundValue"),
            indentedName: new PropertyMap("indentedName", "IndentedName"),
            compoundName: new PropertyMap("compoundName", "CompoundName"),
            parentModifierID: new PropertyMap("parentModifierID", "ParentModifierID"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth"),
            chartName: new PropertyMap("chartName", "ChartName"),
            downloadName: new PropertyMap("downloadName", "DownloadName")
        };

        public id: number = null;
        public key: string = null;
        public type: string = null;
        public name: string = null;
        public isHeader: boolean = null;
        public isCompoundValue: boolean = null;
        public indentedName: string = null;
        public compoundName: string = null;
        public parentModifierID: number = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;
        public chartName: string = null;
        public downloadName: string = null;

        protected getFields(): any { return BaseModifier.Fields; }

        /** Gets a list of all of the Modifiers in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Modifiers */
        public static getAll(api: API, callback: IAPICallback<Array<Modifier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Modifier>>(Endpoint.fromSelf<Array<Modifier>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Modifiers exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Modifiers method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Modifier with the specified primary key.
         *  @param id The primary key of the Modifier to return.
         *  @return The matching Modifier, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Modifier>): Async {
            return api.executeEndpoint<Modifier>(Endpoint.fromSelf<Modifier>(), callback, { id: id });
        }

        /** Returns a filtered collection of Modifiers based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Modifiers which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Modifier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Modifier>>(Endpoint.fromSelf<Array<Modifier>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Modifiers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Modifiers which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Modifiers exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Modifierswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Modifiers by ParentModifierID.
         *  @return An Array of Modifiers. */
        public getModifiers(api: API, callback: IAPICallback<Array<Modifier>>, page?: number, pageSize?: number): Async {
            return Modifier.getByParentModifierID(this.id, api, callback, page, pageSize);
        }

        /** Gets Modifiers by ParentModifierID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child Modifiers.
         *  @return An Array of Modifiers. */
        public static getByParentModifierID(modifierID: number, api: API, callback: IAPICallback<Array<Modifier>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Modifier>>(Endpoint.fromSelf<Array<Modifier>>(), callback, { modifierID: modifierID }, null, page, pageSize);
        }

        /** Gets how many Modifiers by ParentModifierID exist. 
         *  @return An Array of Modifiers. */
        public getModifiersCount(api: API, callback: IAPICallback<number>): Async {
            return Modifier.getByParentModifierIDCount(this.id, api, callback);
        }

        /** Gets how many Modifiers by ParentModifierID exist. 
         *  @param modifierID The ID of the Modifier for which to retrieve the child Modifiers.
         *  @return An Array of Modifiers. */
        public static getByParentModifierIDCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Gets how many pages of Modifiers by ParentModifierID exist.
         *  @return An Array of Modifiers. */
        public getModifiersPageCount(api: API, callback: IAPICallback<number>): Async {
            return Modifier.getByParentModifierIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of Modifiers by ParentModifierID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child Modifiers.
         *  @return An Array of Modifiers. */
        public static getByParentModifierIDPageCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Returns the related ParentModifier based on the unique ID of the related Modifier.
         *  @return A single Modifier, or null. */
        public getParentModifier(api: API, callback: IAPICallback<Modifier>): Async {
            return Modifier.getParentModifierForModifier(this.id, api, callback);
        }

        /** Returns the related ParentModifier based on the unique ID of the related Modifier.
         *  @param modifierID The ID of the Modifier to retrieve.
         *  @return A single Modifier, or null. */
        public static getParentModifierForModifier(modifierID: number, api: API, callback: IAPICallback<Modifier>): Async {
            return api.executeEndpoint<Modifier>(Endpoint.fromSelf<Modifier>(), callback, { modifierID: modifierID });
        }
    }
    
    export class Modifier extends BaseModifier { }

    /** Contains properties and static functionality for the ModifierGraph type. */
    export class BaseModifierGraph extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            label: new PropertyMap("label", "Label"),
            modifierGraphLabel: new PropertyMap("modifierGraphLabel", "ModifierGraphLabel"),
            modifierValueIDList: new PropertyMap("modifierValueIDList", "ModifierValueIDList"),
            modifierValueKeyList: new PropertyMap("modifierValueKeyList", "ModifierValueKeyList"),
            modifierValueList: new PropertyMap("modifierValueList", "ModifierValueList"),
            modifierCount: new PropertyMap("modifierCount", "ModifierCount"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            modifier1Value: new PropertyMap("modifier1Value", "Modifier1Value"),
            modifier1ID: new PropertyMap("modifier1ID", "Modifier1ID"),
            modifier1Key: new PropertyMap("modifier1Key", "Modifier1Key"),
            modifier1SortOrder: new PropertyMap("modifier1SortOrder", "Modifier1SortOrder"),
            modifier2Value: new PropertyMap("modifier2Value", "Modifier2Value"),
            modifier2ID: new PropertyMap("modifier2ID", "Modifier2ID"),
            modifier2Key: new PropertyMap("modifier2Key", "Modifier2Key"),
            modifier2SortOrder: new PropertyMap("modifier2SortOrder", "Modifier2SortOrder"),
            modifier3Value: new PropertyMap("modifier3Value", "Modifier3Value"),
            modifier3ID: new PropertyMap("modifier3ID", "Modifier3ID"),
            modifier3Key: new PropertyMap("modifier3Key", "Modifier3Key"),
            modifierBook3SortOrder: new PropertyMap("modifierBook3SortOrder", "ModifierBook3SortOrder"),
            modifier4Value: new PropertyMap("modifier4Value", "Modifier4Value"),
            modifier4ID: new PropertyMap("modifier4ID", "Modifier4ID"),
            modifier4Key: new PropertyMap("modifier4Key", "Modifier4Key"),
            modifier4SortOrder: new PropertyMap("modifier4SortOrder", "Modifier4SortOrder"),
            modifier5Value: new PropertyMap("modifier5Value", "Modifier5Value"),
            modifier5ID: new PropertyMap("modifier5ID", "Modifier5ID"),
            modifier5Key: new PropertyMap("modifier5Key", "Modifier5Key"),
            modifier5SortOrder: new PropertyMap("modifier5SortOrder", "Modifier5SortOrder")
        };

        public id: number = null;
        public label: string = null;
        public modifierGraphLabel: string = null;
        public modifierValueIDList: string = null;
        public modifierValueKeyList: string = null;
        public modifierValueList: string = null;
        public modifierCount: number = null;
        public sortOrder: number = null;
        public modifier1Value: string = null;
        public modifier1ID: number = null;
        public modifier1Key: string = null;
        public modifier1SortOrder: number = null;
        public modifier2Value: string = null;
        public modifier2ID: number = null;
        public modifier2Key: string = null;
        public modifier2SortOrder: number = null;
        public modifier3Value: string = null;
        public modifier3ID: number = null;
        public modifier3Key: string = null;
        public modifierBook3SortOrder: number = null;
        public modifier4Value: string = null;
        public modifier4ID: number = null;
        public modifier4Key: string = null;
        public modifier4SortOrder: number = null;
        public modifier5Value: string = null;
        public modifier5ID: number = null;
        public modifier5Key: string = null;
        public modifier5SortOrder: number = null;

        protected getFields(): any { return BaseModifierGraph.Fields; }

        /** Gets a list of all of the ModifierGraphs in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ModifierGraphs */
        public static getAll(api: API, callback: IAPICallback<Array<ModifierGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ModifierGraph>>(Endpoint.fromSelf<Array<ModifierGraph>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many ModifierGraphs exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the ModifierGraphs method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the ModifierGraph with the specified primary key.
         *  @param id The primary key of the ModifierGraph to return.
         *  @return The matching ModifierGraph, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<ModifierGraph>): Async {
            return api.executeEndpoint<ModifierGraph>(Endpoint.fromSelf<ModifierGraph>(), callback, { id: id });
        }

        /** Returns a filtered collection of ModifierGraphs based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ModifierGraphs which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<ModifierGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ModifierGraph>>(Endpoint.fromSelf<Array<ModifierGraph>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many ModifierGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ModifierGraphs which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of ModifierGraphs exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ModifierGraphswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets ModifierGraphs by Modifier1ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier1ID(modifierID: number, api: API, callback: IAPICallback<Array<ModifierGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ModifierGraph>>(Endpoint.fromSelf<Array<ModifierGraph>>(), callback, { modifierID: modifierID }, null, page, pageSize);
        }

        /** Gets how many ModifierGraphs by Modifier1ID exist. 
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier1IDCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Gets how many pages of ModifierGraphs by Modifier1ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier1IDPageCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Returns the related Modifier1 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        public getModifier1(api: API, callback: IAPICallback<Modifier>): Async {
            return ModifierGraph.getModifier1ForModifierGraph(this.id, api, callback);
        }

        /** Returns the related Modifier1 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        public static getModifier1ForModifierGraph(modifierGraphID: number, api: API, callback: IAPICallback<Modifier>): Async {
            return api.executeEndpoint<Modifier>(Endpoint.fromSelf<Modifier>(), callback, { modifierGraphID: modifierGraphID });
        }

        /** Gets ModifierGraphs by Modifier2ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier2ID(modifierID: number, api: API, callback: IAPICallback<Array<ModifierGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ModifierGraph>>(Endpoint.fromSelf<Array<ModifierGraph>>(), callback, { modifierID: modifierID }, null, page, pageSize);
        }

        /** Gets how many ModifierGraphs by Modifier2ID exist. 
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier2IDCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Gets how many pages of ModifierGraphs by Modifier2ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier2IDPageCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Returns the related Modifier2 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        public getModifier2(api: API, callback: IAPICallback<Modifier>): Async {
            return ModifierGraph.getModifier2ForModifierGraph(this.id, api, callback);
        }

        /** Returns the related Modifier2 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        public static getModifier2ForModifierGraph(modifierGraphID: number, api: API, callback: IAPICallback<Modifier>): Async {
            return api.executeEndpoint<Modifier>(Endpoint.fromSelf<Modifier>(), callback, { modifierGraphID: modifierGraphID });
        }

        /** Gets ModifierGraphs by Modifier3ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier3ID(modifierID: number, api: API, callback: IAPICallback<Array<ModifierGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ModifierGraph>>(Endpoint.fromSelf<Array<ModifierGraph>>(), callback, { modifierID: modifierID }, null, page, pageSize);
        }

        /** Gets how many ModifierGraphs by Modifier3ID exist. 
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier3IDCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Gets how many pages of ModifierGraphs by Modifier3ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier3IDPageCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Returns the related Modifier3 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        public getModifier3(api: API, callback: IAPICallback<Modifier>): Async {
            return ModifierGraph.getModifier3ForModifierGraph(this.id, api, callback);
        }

        /** Returns the related Modifier3 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        public static getModifier3ForModifierGraph(modifierGraphID: number, api: API, callback: IAPICallback<Modifier>): Async {
            return api.executeEndpoint<Modifier>(Endpoint.fromSelf<Modifier>(), callback, { modifierGraphID: modifierGraphID });
        }

        /** Gets ModifierGraphs by Modifier4ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier4ID(modifierID: number, api: API, callback: IAPICallback<Array<ModifierGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ModifierGraph>>(Endpoint.fromSelf<Array<ModifierGraph>>(), callback, { modifierID: modifierID }, null, page, pageSize);
        }

        /** Gets how many ModifierGraphs by Modifier4ID exist. 
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier4IDCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Gets how many pages of ModifierGraphs by Modifier4ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier4IDPageCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Returns the related Modifier4 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        public getModifier4(api: API, callback: IAPICallback<Modifier>): Async {
            return ModifierGraph.getModifier4ForModifierGraph(this.id, api, callback);
        }

        /** Returns the related Modifier4 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        public static getModifier4ForModifierGraph(modifierGraphID: number, api: API, callback: IAPICallback<Modifier>): Async {
            return api.executeEndpoint<Modifier>(Endpoint.fromSelf<Modifier>(), callback, { modifierGraphID: modifierGraphID });
        }

        /** Gets ModifierGraphs by Modifier5ID.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier5ID(modifierID: number, api: API, callback: IAPICallback<Array<ModifierGraph>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ModifierGraph>>(Endpoint.fromSelf<Array<ModifierGraph>>(), callback, { modifierID: modifierID }, null, page, pageSize);
        }

        /** Gets how many ModifierGraphs by Modifier5ID exist. 
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier5IDCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Gets how many pages of ModifierGraphs by Modifier5ID exist.
         *  @param modifierID The ID of the Modifier for which to retrieve the child ModifierGraphs.
         *  @return An Array of ModifierGraphs. */
        public static getByModifier5IDPageCount(modifierID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { modifierID: modifierID });
        }

        /** Returns the related Modifier5 based on the unique ID of the related ModifierGraph.
         *  @return A single ModifierGraph, or null. */
        public getModifier5(api: API, callback: IAPICallback<Modifier>): Async {
            return ModifierGraph.getModifier5ForModifierGraph(this.id, api, callback);
        }

        /** Returns the related Modifier5 based on the unique ID of the related ModifierGraph.
         *  @param modifierGraphID The ID of the ModifierGraph to retrieve.
         *  @return A single ModifierGraph, or null. */
        public static getModifier5ForModifierGraph(modifierGraphID: number, api: API, callback: IAPICallback<Modifier>): Async {
            return api.executeEndpoint<Modifier>(Endpoint.fromSelf<Modifier>(), callback, { modifierGraphID: modifierGraphID });
        }
    }
    
    export class ModifierGraph extends BaseModifierGraph { }

    /** Contains properties and static functionality for the ObesityStatus type. */
    export class BaseObesityStatus extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentObesityStatusID: new PropertyMap("parentObesityStatusID", "ParentObesityStatusID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentObesityStatusID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseObesityStatus.Fields; }

        /** Gets a list of all of the ObesityStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ObesityStatuses */
        public static getAll(api: API, callback: IAPICallback<Array<ObesityStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ObesityStatus>>(Endpoint.fromSelf<Array<ObesityStatus>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many ObesityStatuses exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the ObesityStatuses method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the ObesityStatus with the specified primary key.
         *  @param id The primary key of the ObesityStatus to return.
         *  @return The matching ObesityStatus, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<ObesityStatus>): Async {
            return api.executeEndpoint<ObesityStatus>(Endpoint.fromSelf<ObesityStatus>(), callback, { id: id });
        }

        /** Returns a filtered collection of ObesityStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ObesityStatuses which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<ObesityStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ObesityStatus>>(Endpoint.fromSelf<Array<ObesityStatus>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many ObesityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ObesityStatuses which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of ObesityStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ObesityStatuseswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets ObesityStatuses by ParentObesityStatusID.
         *  @return An Array of ObesityStatuses. */
        public getObesityStatuses(api: API, callback: IAPICallback<Array<ObesityStatus>>, page?: number, pageSize?: number): Async {
            return ObesityStatus.getByParentObesityStatusID(this.id, api, callback, page, pageSize);
        }

        /** Gets ObesityStatuses by ParentObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatuses.
         *  @return An Array of ObesityStatuses. */
        public static getByParentObesityStatusID(obesityStatusID: number, api: API, callback: IAPICallback<Array<ObesityStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ObesityStatus>>(Endpoint.fromSelf<Array<ObesityStatus>>(), callback, { obesityStatusID: obesityStatusID }, null, page, pageSize);
        }

        /** Gets how many ObesityStatuses by ParentObesityStatusID exist. 
         *  @return An Array of ObesityStatuses. */
        public getObesityStatusesCount(api: API, callback: IAPICallback<number>): Async {
            return ObesityStatus.getByParentObesityStatusIDCount(this.id, api, callback);
        }

        /** Gets how many ObesityStatuses by ParentObesityStatusID exist. 
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatuses.
         *  @return An Array of ObesityStatuses. */
        public static getByParentObesityStatusIDCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Gets how many pages of ObesityStatuses by ParentObesityStatusID exist.
         *  @return An Array of ObesityStatuses. */
        public getObesityStatusesPageCount(api: API, callback: IAPICallback<number>): Async {
            return ObesityStatus.getByParentObesityStatusIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of ObesityStatuses by ParentObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatuses.
         *  @return An Array of ObesityStatuses. */
        public static getByParentObesityStatusIDPageCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Returns the related ParentObesityStatus based on the unique ID of the related ObesityStatus.
         *  @return A single ObesityStatus, or null. */
        public getParentObesityStatus(api: API, callback: IAPICallback<ObesityStatus>): Async {
            return ObesityStatus.getParentObesityStatusForObesityStatus(this.id, api, callback);
        }

        /** Returns the related ParentObesityStatus based on the unique ID of the related ObesityStatus.
         *  @param obesityStatusID The ID of the ObesityStatus to retrieve.
         *  @return A single ObesityStatus, or null. */
        public static getParentObesityStatusForObesityStatus(obesityStatusID: number, api: API, callback: IAPICallback<ObesityStatus>): Async {
            return api.executeEndpoint<ObesityStatus>(Endpoint.fromSelf<ObesityStatus>(), callback, { obesityStatusID: obesityStatusID });
        }
    }
    
    export class ObesityStatus extends BaseObesityStatus { }

    /** Contains properties and static functionality for the ObesityStatusRelation type. */
    export class BaseObesityStatusRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorObesityStatusID: new PropertyMap("ancestorObesityStatusID", "AncestorObesityStatusID"),
            descendantObesityStatusID: new PropertyMap("descendantObesityStatusID", "DescendantObesityStatusID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorObesityStatusID: number = null;
        public descendantObesityStatusID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseObesityStatusRelation.Fields; }

        /** Gets a list of all of the ObesityStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ObesityStatusRelations */
        public static getAll(api: API, callback: IAPICallback<Array<ObesityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ObesityStatusRelation>>(Endpoint.fromSelf<Array<ObesityStatusRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many ObesityStatusRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the ObesityStatusRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the ObesityStatusRelation with the specified primary key.
         *  @param id The primary key of the ObesityStatusRelation to return.
         *  @return The matching ObesityStatusRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<ObesityStatusRelation>): Async {
            return api.executeEndpoint<ObesityStatusRelation>(Endpoint.fromSelf<ObesityStatusRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of ObesityStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ObesityStatusRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<ObesityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ObesityStatusRelation>>(Endpoint.fromSelf<Array<ObesityStatusRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many ObesityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ObesityStatusRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of ObesityStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ObesityStatusRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets ObesityStatusRelations by AncestorObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        public static getByAncestorObesityStatusID(obesityStatusID: number, api: API, callback: IAPICallback<Array<ObesityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ObesityStatusRelation>>(Endpoint.fromSelf<Array<ObesityStatusRelation>>(), callback, { obesityStatusID: obesityStatusID }, null, page, pageSize);
        }

        /** Gets how many ObesityStatusRelations by AncestorObesityStatusID exist. 
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        public static getByAncestorObesityStatusIDCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Gets how many pages of ObesityStatusRelations by AncestorObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        public static getByAncestorObesityStatusIDPageCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Returns the related AncestorObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @return A single ObesityStatusRelation, or null. */
        public getAncestorObesityStatus(api: API, callback: IAPICallback<ObesityStatus>): Async {
            return ObesityStatusRelation.getAncestorObesityStatusForObesityStatusRelation(this.id, api, callback);
        }

        /** Returns the related AncestorObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @param obesityStatusRelationID The ID of the ObesityStatusRelation to retrieve.
         *  @return A single ObesityStatusRelation, or null. */
        public static getAncestorObesityStatusForObesityStatusRelation(obesityStatusRelationID: number, api: API, callback: IAPICallback<ObesityStatus>): Async {
            return api.executeEndpoint<ObesityStatus>(Endpoint.fromSelf<ObesityStatus>(), callback, { obesityStatusRelationID: obesityStatusRelationID });
        }

        /** Gets ObesityStatusRelations by DescendantObesityStatusID.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        public static getByDescendantObesityStatusID(obesityStatusID: number, api: API, callback: IAPICallback<Array<ObesityStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ObesityStatusRelation>>(Endpoint.fromSelf<Array<ObesityStatusRelation>>(), callback, { obesityStatusID: obesityStatusID }, null, page, pageSize);
        }

        /** Gets how many ObesityStatusRelations by DescendantObesityStatusID exist. 
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        public static getByDescendantObesityStatusIDCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Gets how many pages of ObesityStatusRelations by DescendantObesityStatusID exist.
         *  @param obesityStatusID The ID of the ObesityStatus for which to retrieve the child ObesityStatusRelations.
         *  @return An Array of ObesityStatusRelations. */
        public static getByDescendantObesityStatusIDPageCount(obesityStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { obesityStatusID: obesityStatusID });
        }

        /** Returns the related DescendantObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @return A single ObesityStatusRelation, or null. */
        public getDescendantObesityStatus(api: API, callback: IAPICallback<ObesityStatus>): Async {
            return ObesityStatusRelation.getDescendantObesityStatusForObesityStatusRelation(this.id, api, callback);
        }

        /** Returns the related DescendantObesityStatus based on the unique ID of the related ObesityStatusRelation.
         *  @param obesityStatusRelationID The ID of the ObesityStatusRelation to retrieve.
         *  @return A single ObesityStatusRelation, or null. */
        public static getDescendantObesityStatusForObesityStatusRelation(obesityStatusRelationID: number, api: API, callback: IAPICallback<ObesityStatus>): Async {
            return api.executeEndpoint<ObesityStatus>(Endpoint.fromSelf<ObesityStatus>(), callback, { obesityStatusRelationID: obesityStatusRelationID });
        }
    }
    
    export class ObesityStatusRelation extends BaseObesityStatusRelation { }

    /** Contains properties and static functionality for the Other type. */
    export class BaseOther extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentOtherID: new PropertyMap("parentOtherID", "ParentOtherID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentOtherID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseOther.Fields; }

        /** Gets a list of all of the Others in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Others */
        public static getAll(api: API, callback: IAPICallback<Array<Other>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Other>>(Endpoint.fromSelf<Array<Other>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Others exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Others method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Other with the specified primary key.
         *  @param id The primary key of the Other to return.
         *  @return The matching Other, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Other>): Async {
            return api.executeEndpoint<Other>(Endpoint.fromSelf<Other>(), callback, { id: id });
        }

        /** Returns a filtered collection of Others based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Others which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Other>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Other>>(Endpoint.fromSelf<Array<Other>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Others exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Others which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Others exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Otherswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Others by ParentOtherID.
         *  @return An Array of Others. */
        public getOthers(api: API, callback: IAPICallback<Array<Other>>, page?: number, pageSize?: number): Async {
            return Other.getByParentOtherID(this.id, api, callback, page, pageSize);
        }

        /** Gets Others by ParentOtherID.
         *  @param otherID The ID of the Other for which to retrieve the child Others.
         *  @return An Array of Others. */
        public static getByParentOtherID(otherID: number, api: API, callback: IAPICallback<Array<Other>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Other>>(Endpoint.fromSelf<Array<Other>>(), callback, { otherID: otherID }, null, page, pageSize);
        }

        /** Gets how many Others by ParentOtherID exist. 
         *  @return An Array of Others. */
        public getOthersCount(api: API, callback: IAPICallback<number>): Async {
            return Other.getByParentOtherIDCount(this.id, api, callback);
        }

        /** Gets how many Others by ParentOtherID exist. 
         *  @param otherID The ID of the Other for which to retrieve the child Others.
         *  @return An Array of Others. */
        public static getByParentOtherIDCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Gets how many pages of Others by ParentOtherID exist.
         *  @return An Array of Others. */
        public getOthersPageCount(api: API, callback: IAPICallback<number>): Async {
            return Other.getByParentOtherIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of Others by ParentOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child Others.
         *  @return An Array of Others. */
        public static getByParentOtherIDPageCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Returns the related ParentOther based on the unique ID of the related Other.
         *  @return A single Other, or null. */
        public getParentOther(api: API, callback: IAPICallback<Other>): Async {
            return Other.getParentOtherForOther(this.id, api, callback);
        }

        /** Returns the related ParentOther based on the unique ID of the related Other.
         *  @param otherID The ID of the Other to retrieve.
         *  @return A single Other, or null. */
        public static getParentOtherForOther(otherID: number, api: API, callback: IAPICallback<Other>): Async {
            return api.executeEndpoint<Other>(Endpoint.fromSelf<Other>(), callback, { otherID: otherID });
        }
    }
    
    export class Other extends BaseOther { }

    /** Contains properties and static functionality for the OtherRelation type. */
    export class BaseOtherRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorOtherID: new PropertyMap("ancestorOtherID", "AncestorOtherID"),
            descendantOtherID: new PropertyMap("descendantOtherID", "DescendantOtherID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorOtherID: number = null;
        public descendantOtherID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseOtherRelation.Fields; }

        /** Gets a list of all of the OtherRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of OtherRelations */
        public static getAll(api: API, callback: IAPICallback<Array<OtherRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<OtherRelation>>(Endpoint.fromSelf<Array<OtherRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many OtherRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the OtherRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the OtherRelation with the specified primary key.
         *  @param id The primary key of the OtherRelation to return.
         *  @return The matching OtherRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<OtherRelation>): Async {
            return api.executeEndpoint<OtherRelation>(Endpoint.fromSelf<OtherRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of OtherRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All OtherRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<OtherRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<OtherRelation>>(Endpoint.fromSelf<Array<OtherRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many OtherRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of OtherRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of OtherRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of OtherRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets OtherRelations by AncestorOtherID.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        public static getByAncestorOtherID(otherID: number, api: API, callback: IAPICallback<Array<OtherRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<OtherRelation>>(Endpoint.fromSelf<Array<OtherRelation>>(), callback, { otherID: otherID }, null, page, pageSize);
        }

        /** Gets how many OtherRelations by AncestorOtherID exist. 
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        public static getByAncestorOtherIDCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Gets how many pages of OtherRelations by AncestorOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        public static getByAncestorOtherIDPageCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Returns the related AncestorOther based on the unique ID of the related OtherRelation.
         *  @return A single OtherRelation, or null. */
        public getAncestorOther(api: API, callback: IAPICallback<Other>): Async {
            return OtherRelation.getAncestorOtherForOtherRelation(this.id, api, callback);
        }

        /** Returns the related AncestorOther based on the unique ID of the related OtherRelation.
         *  @param otherRelationID The ID of the OtherRelation to retrieve.
         *  @return A single OtherRelation, or null. */
        public static getAncestorOtherForOtherRelation(otherRelationID: number, api: API, callback: IAPICallback<Other>): Async {
            return api.executeEndpoint<Other>(Endpoint.fromSelf<Other>(), callback, { otherRelationID: otherRelationID });
        }

        /** Gets OtherRelations by DescendantOtherID.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        public static getByDescendantOtherID(otherID: number, api: API, callback: IAPICallback<Array<OtherRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<OtherRelation>>(Endpoint.fromSelf<Array<OtherRelation>>(), callback, { otherID: otherID }, null, page, pageSize);
        }

        /** Gets how many OtherRelations by DescendantOtherID exist. 
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        public static getByDescendantOtherIDCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Gets how many pages of OtherRelations by DescendantOtherID exist.
         *  @param otherID The ID of the Other for which to retrieve the child OtherRelations.
         *  @return An Array of OtherRelations. */
        public static getByDescendantOtherIDPageCount(otherID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { otherID: otherID });
        }

        /** Returns the related DescendantOther based on the unique ID of the related OtherRelation.
         *  @return A single OtherRelation, or null. */
        public getDescendantOther(api: API, callback: IAPICallback<Other>): Async {
            return OtherRelation.getDescendantOtherForOtherRelation(this.id, api, callback);
        }

        /** Returns the related DescendantOther based on the unique ID of the related OtherRelation.
         *  @param otherRelationID The ID of the OtherRelation to retrieve.
         *  @return A single OtherRelation, or null. */
        public static getDescendantOtherForOtherRelation(otherRelationID: number, api: API, callback: IAPICallback<Other>): Async {
            return api.executeEndpoint<Other>(Endpoint.fromSelf<Other>(), callback, { otherRelationID: otherRelationID });
        }
    }
    
    export class OtherRelation extends BaseOtherRelation { }

    /** Contains properties and static functionality for the RaceEthnicity type. */
    export class BaseRaceEthnicity extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentRaceEthnicityID: new PropertyMap("parentRaceEthnicityID", "ParentRaceEthnicityID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentRaceEthnicityID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseRaceEthnicity.Fields; }

        /** Gets a list of all of the RaceEthnicities in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of RaceEthnicities */
        public static getAll(api: API, callback: IAPICallback<Array<RaceEthnicity>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<RaceEthnicity>>(Endpoint.fromSelf<Array<RaceEthnicity>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many RaceEthnicities exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the RaceEthnicities method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the RaceEthnicity with the specified primary key.
         *  @param id The primary key of the RaceEthnicity to return.
         *  @return The matching RaceEthnicity, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return api.executeEndpoint<RaceEthnicity>(Endpoint.fromSelf<RaceEthnicity>(), callback, { id: id });
        }

        /** Returns a filtered collection of RaceEthnicities based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All RaceEthnicities which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<RaceEthnicity>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<RaceEthnicity>>(Endpoint.fromSelf<Array<RaceEthnicity>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many RaceEthnicities exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of RaceEthnicities which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of RaceEthnicities exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of RaceEthnicitieswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets RaceEthnicities by ParentRaceEthnicityID.
         *  @return An Array of RaceEthnicities. */
        public getRaceEthnicities(api: API, callback: IAPICallback<Array<RaceEthnicity>>, page?: number, pageSize?: number): Async {
            return RaceEthnicity.getByParentRaceEthnicityID(this.id, api, callback, page, pageSize);
        }

        /** Gets RaceEthnicities by ParentRaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicities.
         *  @return An Array of RaceEthnicities. */
        public static getByParentRaceEthnicityID(raceEthnicityID: number, api: API, callback: IAPICallback<Array<RaceEthnicity>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<RaceEthnicity>>(Endpoint.fromSelf<Array<RaceEthnicity>>(), callback, { raceEthnicityID: raceEthnicityID }, null, page, pageSize);
        }

        /** Gets how many RaceEthnicities by ParentRaceEthnicityID exist. 
         *  @return An Array of RaceEthnicities. */
        public getRaceEthnicitiesCount(api: API, callback: IAPICallback<number>): Async {
            return RaceEthnicity.getByParentRaceEthnicityIDCount(this.id, api, callback);
        }

        /** Gets how many RaceEthnicities by ParentRaceEthnicityID exist. 
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicities.
         *  @return An Array of RaceEthnicities. */
        public static getByParentRaceEthnicityIDCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Gets how many pages of RaceEthnicities by ParentRaceEthnicityID exist.
         *  @return An Array of RaceEthnicities. */
        public getRaceEthnicitiesPageCount(api: API, callback: IAPICallback<number>): Async {
            return RaceEthnicity.getByParentRaceEthnicityIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of RaceEthnicities by ParentRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicities.
         *  @return An Array of RaceEthnicities. */
        public static getByParentRaceEthnicityIDPageCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Returns the related ParentRaceEthnicity based on the unique ID of the related RaceEthnicity.
         *  @return A single RaceEthnicity, or null. */
        public getParentRaceEthnicity(api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return RaceEthnicity.getParentRaceEthnicityForRaceEthnicity(this.id, api, callback);
        }

        /** Returns the related ParentRaceEthnicity based on the unique ID of the related RaceEthnicity.
         *  @param raceEthnicityID The ID of the RaceEthnicity to retrieve.
         *  @return A single RaceEthnicity, or null. */
        public static getParentRaceEthnicityForRaceEthnicity(raceEthnicityID: number, api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return api.executeEndpoint<RaceEthnicity>(Endpoint.fromSelf<RaceEthnicity>(), callback, { raceEthnicityID: raceEthnicityID });
        }
    }
    
    export class RaceEthnicity extends BaseRaceEthnicity { }

    /** Contains properties and static functionality for the RaceEthnicityRelation type. */
    export class BaseRaceEthnicityRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorRaceEthnicityID: new PropertyMap("ancestorRaceEthnicityID", "AncestorRaceEthnicityID"),
            descendantRaceEthnicityID: new PropertyMap("descendantRaceEthnicityID", "DescendantRaceEthnicityID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorRaceEthnicityID: number = null;
        public descendantRaceEthnicityID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseRaceEthnicityRelation.Fields; }

        /** Gets a list of all of the RaceEthnicityRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of RaceEthnicityRelations */
        public static getAll(api: API, callback: IAPICallback<Array<RaceEthnicityRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<RaceEthnicityRelation>>(Endpoint.fromSelf<Array<RaceEthnicityRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many RaceEthnicityRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the RaceEthnicityRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the RaceEthnicityRelation with the specified primary key.
         *  @param id The primary key of the RaceEthnicityRelation to return.
         *  @return The matching RaceEthnicityRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<RaceEthnicityRelation>): Async {
            return api.executeEndpoint<RaceEthnicityRelation>(Endpoint.fromSelf<RaceEthnicityRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of RaceEthnicityRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All RaceEthnicityRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<RaceEthnicityRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<RaceEthnicityRelation>>(Endpoint.fromSelf<Array<RaceEthnicityRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many RaceEthnicityRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of RaceEthnicityRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of RaceEthnicityRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of RaceEthnicityRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets RaceEthnicityRelations by AncestorRaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        public static getByAncestorRaceEthnicityID(raceEthnicityID: number, api: API, callback: IAPICallback<Array<RaceEthnicityRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<RaceEthnicityRelation>>(Endpoint.fromSelf<Array<RaceEthnicityRelation>>(), callback, { raceEthnicityID: raceEthnicityID }, null, page, pageSize);
        }

        /** Gets how many RaceEthnicityRelations by AncestorRaceEthnicityID exist. 
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        public static getByAncestorRaceEthnicityIDCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Gets how many pages of RaceEthnicityRelations by AncestorRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        public static getByAncestorRaceEthnicityIDPageCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Returns the related AncestorRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @return A single RaceEthnicityRelation, or null. */
        public getAncestorRaceEthnicity(api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return RaceEthnicityRelation.getAncestorRaceEthnicityForRaceEthnicityRelation(this.id, api, callback);
        }

        /** Returns the related AncestorRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @param raceEthnicityRelationID The ID of the RaceEthnicityRelation to retrieve.
         *  @return A single RaceEthnicityRelation, or null. */
        public static getAncestorRaceEthnicityForRaceEthnicityRelation(raceEthnicityRelationID: number, api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return api.executeEndpoint<RaceEthnicity>(Endpoint.fromSelf<RaceEthnicity>(), callback, { raceEthnicityRelationID: raceEthnicityRelationID });
        }

        /** Gets RaceEthnicityRelations by DescendantRaceEthnicityID.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        public static getByDescendantRaceEthnicityID(raceEthnicityID: number, api: API, callback: IAPICallback<Array<RaceEthnicityRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<RaceEthnicityRelation>>(Endpoint.fromSelf<Array<RaceEthnicityRelation>>(), callback, { raceEthnicityID: raceEthnicityID }, null, page, pageSize);
        }

        /** Gets how many RaceEthnicityRelations by DescendantRaceEthnicityID exist. 
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        public static getByDescendantRaceEthnicityIDCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Gets how many pages of RaceEthnicityRelations by DescendantRaceEthnicityID exist.
         *  @param raceEthnicityID The ID of the RaceEthnicity for which to retrieve the child RaceEthnicityRelations.
         *  @return An Array of RaceEthnicityRelations. */
        public static getByDescendantRaceEthnicityIDPageCount(raceEthnicityID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { raceEthnicityID: raceEthnicityID });
        }

        /** Returns the related DescendantRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @return A single RaceEthnicityRelation, or null. */
        public getDescendantRaceEthnicity(api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return RaceEthnicityRelation.getDescendantRaceEthnicityForRaceEthnicityRelation(this.id, api, callback);
        }

        /** Returns the related DescendantRaceEthnicity based on the unique ID of the related RaceEthnicityRelation.
         *  @param raceEthnicityRelationID The ID of the RaceEthnicityRelation to retrieve.
         *  @return A single RaceEthnicityRelation, or null. */
        public static getDescendantRaceEthnicityForRaceEthnicityRelation(raceEthnicityRelationID: number, api: API, callback: IAPICallback<RaceEthnicity>): Async {
            return api.executeEndpoint<RaceEthnicity>(Endpoint.fromSelf<RaceEthnicity>(), callback, { raceEthnicityRelationID: raceEthnicityRelationID });
        }
    }
    
    export class RaceEthnicityRelation extends BaseRaceEthnicityRelation { }

    /** Contains properties and static functionality for the Sex type. */
    export class BaseSex extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentSexID: new PropertyMap("parentSexID", "ParentSexID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentSexID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseSex.Fields; }

        /** Gets a list of all of the Sexes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Sexes */
        public static getAll(api: API, callback: IAPICallback<Array<Sex>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Sex>>(Endpoint.fromSelf<Array<Sex>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Sexes exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Sexes method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Sex with the specified primary key.
         *  @param id The primary key of the Sex to return.
         *  @return The matching Sex, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Sex>): Async {
            return api.executeEndpoint<Sex>(Endpoint.fromSelf<Sex>(), callback, { id: id });
        }

        /** Returns a filtered collection of Sexes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Sexes which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Sex>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Sex>>(Endpoint.fromSelf<Array<Sex>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Sexes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Sexes which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Sexes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Sexeswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Sexes by ParentSexID.
         *  @return An Array of Sexes. */
        public getSexes(api: API, callback: IAPICallback<Array<Sex>>, page?: number, pageSize?: number): Async {
            return Sex.getByParentSexID(this.id, api, callback, page, pageSize);
        }

        /** Gets Sexes by ParentSexID.
         *  @param sexID The ID of the Sex for which to retrieve the child Sexes.
         *  @return An Array of Sexes. */
        public static getByParentSexID(sexID: number, api: API, callback: IAPICallback<Array<Sex>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Sex>>(Endpoint.fromSelf<Array<Sex>>(), callback, { sexID: sexID }, null, page, pageSize);
        }

        /** Gets how many Sexes by ParentSexID exist. 
         *  @return An Array of Sexes. */
        public getSexesCount(api: API, callback: IAPICallback<number>): Async {
            return Sex.getByParentSexIDCount(this.id, api, callback);
        }

        /** Gets how many Sexes by ParentSexID exist. 
         *  @param sexID The ID of the Sex for which to retrieve the child Sexes.
         *  @return An Array of Sexes. */
        public static getByParentSexIDCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Gets how many pages of Sexes by ParentSexID exist.
         *  @return An Array of Sexes. */
        public getSexesPageCount(api: API, callback: IAPICallback<number>): Async {
            return Sex.getByParentSexIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of Sexes by ParentSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child Sexes.
         *  @return An Array of Sexes. */
        public static getByParentSexIDPageCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Returns the related ParentSex based on the unique ID of the related Sex.
         *  @return A single Sex, or null. */
        public getParentSex(api: API, callback: IAPICallback<Sex>): Async {
            return Sex.getParentSexForSex(this.id, api, callback);
        }

        /** Returns the related ParentSex based on the unique ID of the related Sex.
         *  @param sexID The ID of the Sex to retrieve.
         *  @return A single Sex, or null. */
        public static getParentSexForSex(sexID: number, api: API, callback: IAPICallback<Sex>): Async {
            return api.executeEndpoint<Sex>(Endpoint.fromSelf<Sex>(), callback, { sexID: sexID });
        }
    }
    
    export class Sex extends BaseSex { }

    /** Contains properties and static functionality for the SexRelation type. */
    export class BaseSexRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorSexID: new PropertyMap("ancestorSexID", "AncestorSexID"),
            descendantSexID: new PropertyMap("descendantSexID", "DescendantSexID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorSexID: number = null;
        public descendantSexID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseSexRelation.Fields; }

        /** Gets a list of all of the SexRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of SexRelations */
        public static getAll(api: API, callback: IAPICallback<Array<SexRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexRelation>>(Endpoint.fromSelf<Array<SexRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many SexRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the SexRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the SexRelation with the specified primary key.
         *  @param id The primary key of the SexRelation to return.
         *  @return The matching SexRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<SexRelation>): Async {
            return api.executeEndpoint<SexRelation>(Endpoint.fromSelf<SexRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of SexRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All SexRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<SexRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexRelation>>(Endpoint.fromSelf<Array<SexRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many SexRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of SexRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of SexRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of SexRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets SexRelations by AncestorSexID.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        public static getByAncestorSexID(sexID: number, api: API, callback: IAPICallback<Array<SexRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexRelation>>(Endpoint.fromSelf<Array<SexRelation>>(), callback, { sexID: sexID }, null, page, pageSize);
        }

        /** Gets how many SexRelations by AncestorSexID exist. 
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        public static getByAncestorSexIDCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Gets how many pages of SexRelations by AncestorSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        public static getByAncestorSexIDPageCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Returns the related AncestorSex based on the unique ID of the related SexRelation.
         *  @return A single SexRelation, or null. */
        public getAncestorSex(api: API, callback: IAPICallback<Sex>): Async {
            return SexRelation.getAncestorSexForSexRelation(this.id, api, callback);
        }

        /** Returns the related AncestorSex based on the unique ID of the related SexRelation.
         *  @param sexRelationID The ID of the SexRelation to retrieve.
         *  @return A single SexRelation, or null. */
        public static getAncestorSexForSexRelation(sexRelationID: number, api: API, callback: IAPICallback<Sex>): Async {
            return api.executeEndpoint<Sex>(Endpoint.fromSelf<Sex>(), callback, { sexRelationID: sexRelationID });
        }

        /** Gets SexRelations by DescendantSexID.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        public static getByDescendantSexID(sexID: number, api: API, callback: IAPICallback<Array<SexRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexRelation>>(Endpoint.fromSelf<Array<SexRelation>>(), callback, { sexID: sexID }, null, page, pageSize);
        }

        /** Gets how many SexRelations by DescendantSexID exist. 
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        public static getByDescendantSexIDCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Gets how many pages of SexRelations by DescendantSexID exist.
         *  @param sexID The ID of the Sex for which to retrieve the child SexRelations.
         *  @return An Array of SexRelations. */
        public static getByDescendantSexIDPageCount(sexID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexID: sexID });
        }

        /** Returns the related DescendantSex based on the unique ID of the related SexRelation.
         *  @return A single SexRelation, or null. */
        public getDescendantSex(api: API, callback: IAPICallback<Sex>): Async {
            return SexRelation.getDescendantSexForSexRelation(this.id, api, callback);
        }

        /** Returns the related DescendantSex based on the unique ID of the related SexRelation.
         *  @param sexRelationID The ID of the SexRelation to retrieve.
         *  @return A single SexRelation, or null. */
        public static getDescendantSexForSexRelation(sexRelationID: number, api: API, callback: IAPICallback<Sex>): Async {
            return api.executeEndpoint<Sex>(Endpoint.fromSelf<Sex>(), callback, { sexRelationID: sexRelationID });
        }
    }
    
    export class SexRelation extends BaseSexRelation { }

    /** Contains properties and static functionality for the SexualOrientation type. */
    export class BaseSexualOrientation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentSexualOrientationID: new PropertyMap("parentSexualOrientationID", "ParentSexualOrientationID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentSexualOrientationID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseSexualOrientation.Fields; }

        /** Gets a list of all of the SexualOrientations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of SexualOrientations */
        public static getAll(api: API, callback: IAPICallback<Array<SexualOrientation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexualOrientation>>(Endpoint.fromSelf<Array<SexualOrientation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many SexualOrientations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the SexualOrientations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the SexualOrientation with the specified primary key.
         *  @param id The primary key of the SexualOrientation to return.
         *  @return The matching SexualOrientation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<SexualOrientation>): Async {
            return api.executeEndpoint<SexualOrientation>(Endpoint.fromSelf<SexualOrientation>(), callback, { id: id });
        }

        /** Returns a filtered collection of SexualOrientations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All SexualOrientations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<SexualOrientation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexualOrientation>>(Endpoint.fromSelf<Array<SexualOrientation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many SexualOrientations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of SexualOrientations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of SexualOrientations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of SexualOrientationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets SexualOrientations by ParentSexualOrientationID.
         *  @return An Array of SexualOrientations. */
        public getSexualOrientations(api: API, callback: IAPICallback<Array<SexualOrientation>>, page?: number, pageSize?: number): Async {
            return SexualOrientation.getByParentSexualOrientationID(this.id, api, callback, page, pageSize);
        }

        /** Gets SexualOrientations by ParentSexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientations.
         *  @return An Array of SexualOrientations. */
        public static getByParentSexualOrientationID(sexualOrientationID: number, api: API, callback: IAPICallback<Array<SexualOrientation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexualOrientation>>(Endpoint.fromSelf<Array<SexualOrientation>>(), callback, { sexualOrientationID: sexualOrientationID }, null, page, pageSize);
        }

        /** Gets how many SexualOrientations by ParentSexualOrientationID exist. 
         *  @return An Array of SexualOrientations. */
        public getSexualOrientationsCount(api: API, callback: IAPICallback<number>): Async {
            return SexualOrientation.getByParentSexualOrientationIDCount(this.id, api, callback);
        }

        /** Gets how many SexualOrientations by ParentSexualOrientationID exist. 
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientations.
         *  @return An Array of SexualOrientations. */
        public static getByParentSexualOrientationIDCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Gets how many pages of SexualOrientations by ParentSexualOrientationID exist.
         *  @return An Array of SexualOrientations. */
        public getSexualOrientationsPageCount(api: API, callback: IAPICallback<number>): Async {
            return SexualOrientation.getByParentSexualOrientationIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of SexualOrientations by ParentSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientations.
         *  @return An Array of SexualOrientations. */
        public static getByParentSexualOrientationIDPageCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Returns the related ParentSexualOrientation based on the unique ID of the related SexualOrientation.
         *  @return A single SexualOrientation, or null. */
        public getParentSexualOrientation(api: API, callback: IAPICallback<SexualOrientation>): Async {
            return SexualOrientation.getParentSexualOrientationForSexualOrientation(this.id, api, callback);
        }

        /** Returns the related ParentSexualOrientation based on the unique ID of the related SexualOrientation.
         *  @param sexualOrientationID The ID of the SexualOrientation to retrieve.
         *  @return A single SexualOrientation, or null. */
        public static getParentSexualOrientationForSexualOrientation(sexualOrientationID: number, api: API, callback: IAPICallback<SexualOrientation>): Async {
            return api.executeEndpoint<SexualOrientation>(Endpoint.fromSelf<SexualOrientation>(), callback, { sexualOrientationID: sexualOrientationID });
        }
    }
    
    export class SexualOrientation extends BaseSexualOrientation { }

    /** Contains properties and static functionality for the SexualOrientationRelation type. */
    export class BaseSexualOrientationRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorSexualOrientationID: new PropertyMap("ancestorSexualOrientationID", "AncestorSexualOrientationID"),
            descendantSexualOrientationID: new PropertyMap("descendantSexualOrientationID", "DescendantSexualOrientationID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorSexualOrientationID: number = null;
        public descendantSexualOrientationID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseSexualOrientationRelation.Fields; }

        /** Gets a list of all of the SexualOrientationRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of SexualOrientationRelations */
        public static getAll(api: API, callback: IAPICallback<Array<SexualOrientationRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexualOrientationRelation>>(Endpoint.fromSelf<Array<SexualOrientationRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many SexualOrientationRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the SexualOrientationRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the SexualOrientationRelation with the specified primary key.
         *  @param id The primary key of the SexualOrientationRelation to return.
         *  @return The matching SexualOrientationRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<SexualOrientationRelation>): Async {
            return api.executeEndpoint<SexualOrientationRelation>(Endpoint.fromSelf<SexualOrientationRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of SexualOrientationRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All SexualOrientationRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<SexualOrientationRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexualOrientationRelation>>(Endpoint.fromSelf<Array<SexualOrientationRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many SexualOrientationRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of SexualOrientationRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of SexualOrientationRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of SexualOrientationRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets SexualOrientationRelations by AncestorSexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        public static getByAncestorSexualOrientationID(sexualOrientationID: number, api: API, callback: IAPICallback<Array<SexualOrientationRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexualOrientationRelation>>(Endpoint.fromSelf<Array<SexualOrientationRelation>>(), callback, { sexualOrientationID: sexualOrientationID }, null, page, pageSize);
        }

        /** Gets how many SexualOrientationRelations by AncestorSexualOrientationID exist. 
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        public static getByAncestorSexualOrientationIDCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Gets how many pages of SexualOrientationRelations by AncestorSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        public static getByAncestorSexualOrientationIDPageCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Returns the related AncestorSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @return A single SexualOrientationRelation, or null. */
        public getAncestorSexualOrientation(api: API, callback: IAPICallback<SexualOrientation>): Async {
            return SexualOrientationRelation.getAncestorSexualOrientationForSexualOrientationRelation(this.id, api, callback);
        }

        /** Returns the related AncestorSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @param sexualOrientationRelationID The ID of the SexualOrientationRelation to retrieve.
         *  @return A single SexualOrientationRelation, or null. */
        public static getAncestorSexualOrientationForSexualOrientationRelation(sexualOrientationRelationID: number, api: API, callback: IAPICallback<SexualOrientation>): Async {
            return api.executeEndpoint<SexualOrientation>(Endpoint.fromSelf<SexualOrientation>(), callback, { sexualOrientationRelationID: sexualOrientationRelationID });
        }

        /** Gets SexualOrientationRelations by DescendantSexualOrientationID.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        public static getByDescendantSexualOrientationID(sexualOrientationID: number, api: API, callback: IAPICallback<Array<SexualOrientationRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<SexualOrientationRelation>>(Endpoint.fromSelf<Array<SexualOrientationRelation>>(), callback, { sexualOrientationID: sexualOrientationID }, null, page, pageSize);
        }

        /** Gets how many SexualOrientationRelations by DescendantSexualOrientationID exist. 
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        public static getByDescendantSexualOrientationIDCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Gets how many pages of SexualOrientationRelations by DescendantSexualOrientationID exist.
         *  @param sexualOrientationID The ID of the SexualOrientation for which to retrieve the child SexualOrientationRelations.
         *  @return An Array of SexualOrientationRelations. */
        public static getByDescendantSexualOrientationIDPageCount(sexualOrientationID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { sexualOrientationID: sexualOrientationID });
        }

        /** Returns the related DescendantSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @return A single SexualOrientationRelation, or null. */
        public getDescendantSexualOrientation(api: API, callback: IAPICallback<SexualOrientation>): Async {
            return SexualOrientationRelation.getDescendantSexualOrientationForSexualOrientationRelation(this.id, api, callback);
        }

        /** Returns the related DescendantSexualOrientation based on the unique ID of the related SexualOrientationRelation.
         *  @param sexualOrientationRelationID The ID of the SexualOrientationRelation to retrieve.
         *  @return A single SexualOrientationRelation, or null. */
        public static getDescendantSexualOrientationForSexualOrientationRelation(sexualOrientationRelationID: number, api: API, callback: IAPICallback<SexualOrientation>): Async {
            return api.executeEndpoint<SexualOrientation>(Endpoint.fromSelf<SexualOrientation>(), callback, { sexualOrientationRelationID: sexualOrientationRelationID });
        }
    }
    
    export class SexualOrientationRelation extends BaseSexualOrientationRelation { }

    /** Contains properties and static functionality for the Timeframe type. */
    export class BaseTimeframe extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            firstYear: new PropertyMap("firstYear", "FirstYear"),
            lastYear: new PropertyMap("lastYear", "LastYear"),
            twoDigitFirstYear: new PropertyMap("twoDigitFirstYear", "TwoDigitFirstYear"),
            twoDigitLastYear: new PropertyMap("twoDigitLastYear", "TwoDigitLastYear"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public name: string = null;
        public firstYear: number = null;
        public lastYear: number = null;
        public twoDigitFirstYear: string = null;
        public twoDigitLastYear: string = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseTimeframe.Fields; }

        /** Gets a list of all of the Timeframes in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Timeframes */
        public static getAll(api: API, callback: IAPICallback<Array<Timeframe>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Timeframe>>(Endpoint.fromSelf<Array<Timeframe>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Timeframes exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Timeframes method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Timeframe with the specified primary key.
         *  @param id The primary key of the Timeframe to return.
         *  @return The matching Timeframe, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Timeframe>): Async {
            return api.executeEndpoint<Timeframe>(Endpoint.fromSelf<Timeframe>(), callback, { id: id });
        }

        /** Returns a filtered collection of Timeframes based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Timeframes which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Timeframe>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Timeframe>>(Endpoint.fromSelf<Array<Timeframe>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Timeframes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Timeframes which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Timeframes exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Timeframeswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class Timeframe extends BaseTimeframe { }

    /** Contains properties and static functionality for the Total type. */
    export class BaseTotal extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentTotalID: new PropertyMap("parentTotalID", "ParentTotalID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentTotalID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseTotal.Fields; }

        /** Gets a list of all of the Totals in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Totals */
        public static getAll(api: API, callback: IAPICallback<Array<Total>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Total>>(Endpoint.fromSelf<Array<Total>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Totals exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Totals method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Total with the specified primary key.
         *  @param id The primary key of the Total to return.
         *  @return The matching Total, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Total>): Async {
            return api.executeEndpoint<Total>(Endpoint.fromSelf<Total>(), callback, { id: id });
        }

        /** Returns a filtered collection of Totals based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Totals which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Total>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Total>>(Endpoint.fromSelf<Array<Total>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Totals exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Totals which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Totals exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Totalswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets Totals by ParentTotalID.
         *  @return An Array of Totals. */
        public getTotals(api: API, callback: IAPICallback<Array<Total>>, page?: number, pageSize?: number): Async {
            return Total.getByParentTotalID(this.id, api, callback, page, pageSize);
        }

        /** Gets Totals by ParentTotalID.
         *  @param totalID The ID of the Total for which to retrieve the child Totals.
         *  @return An Array of Totals. */
        public static getByParentTotalID(totalID: number, api: API, callback: IAPICallback<Array<Total>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Total>>(Endpoint.fromSelf<Array<Total>>(), callback, { totalID: totalID }, null, page, pageSize);
        }

        /** Gets how many Totals by ParentTotalID exist. 
         *  @return An Array of Totals. */
        public getTotalsCount(api: API, callback: IAPICallback<number>): Async {
            return Total.getByParentTotalIDCount(this.id, api, callback);
        }

        /** Gets how many Totals by ParentTotalID exist. 
         *  @param totalID The ID of the Total for which to retrieve the child Totals.
         *  @return An Array of Totals. */
        public static getByParentTotalIDCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Gets how many pages of Totals by ParentTotalID exist.
         *  @return An Array of Totals. */
        public getTotalsPageCount(api: API, callback: IAPICallback<number>): Async {
            return Total.getByParentTotalIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of Totals by ParentTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child Totals.
         *  @return An Array of Totals. */
        public static getByParentTotalIDPageCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Returns the related ParentTotal based on the unique ID of the related Total.
         *  @return A single Total, or null. */
        public getParentTotal(api: API, callback: IAPICallback<Total>): Async {
            return Total.getParentTotalForTotal(this.id, api, callback);
        }

        /** Returns the related ParentTotal based on the unique ID of the related Total.
         *  @param totalID The ID of the Total to retrieve.
         *  @return A single Total, or null. */
        public static getParentTotalForTotal(totalID: number, api: API, callback: IAPICallback<Total>): Async {
            return api.executeEndpoint<Total>(Endpoint.fromSelf<Total>(), callback, { totalID: totalID });
        }
    }
    
    export class Total extends BaseTotal { }

    /** Contains properties and static functionality for the TotalRelation type. */
    export class BaseTotalRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorTotalID: new PropertyMap("ancestorTotalID", "AncestorTotalID"),
            descendantTotalID: new PropertyMap("descendantTotalID", "DescendantTotalID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorTotalID: number = null;
        public descendantTotalID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseTotalRelation.Fields; }

        /** Gets a list of all of the TotalRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of TotalRelations */
        public static getAll(api: API, callback: IAPICallback<Array<TotalRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<TotalRelation>>(Endpoint.fromSelf<Array<TotalRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many TotalRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the TotalRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the TotalRelation with the specified primary key.
         *  @param id The primary key of the TotalRelation to return.
         *  @return The matching TotalRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<TotalRelation>): Async {
            return api.executeEndpoint<TotalRelation>(Endpoint.fromSelf<TotalRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of TotalRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All TotalRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<TotalRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<TotalRelation>>(Endpoint.fromSelf<Array<TotalRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many TotalRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of TotalRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of TotalRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of TotalRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets TotalRelations by AncestorTotalID.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        public static getByAncestorTotalID(totalID: number, api: API, callback: IAPICallback<Array<TotalRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<TotalRelation>>(Endpoint.fromSelf<Array<TotalRelation>>(), callback, { totalID: totalID }, null, page, pageSize);
        }

        /** Gets how many TotalRelations by AncestorTotalID exist. 
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        public static getByAncestorTotalIDCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Gets how many pages of TotalRelations by AncestorTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        public static getByAncestorTotalIDPageCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Returns the related AncestorTotal based on the unique ID of the related TotalRelation.
         *  @return A single TotalRelation, or null. */
        public getAncestorTotal(api: API, callback: IAPICallback<Total>): Async {
            return TotalRelation.getAncestorTotalForTotalRelation(this.id, api, callback);
        }

        /** Returns the related AncestorTotal based on the unique ID of the related TotalRelation.
         *  @param totalRelationID The ID of the TotalRelation to retrieve.
         *  @return A single TotalRelation, or null. */
        public static getAncestorTotalForTotalRelation(totalRelationID: number, api: API, callback: IAPICallback<Total>): Async {
            return api.executeEndpoint<Total>(Endpoint.fromSelf<Total>(), callback, { totalRelationID: totalRelationID });
        }

        /** Gets TotalRelations by DescendantTotalID.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        public static getByDescendantTotalID(totalID: number, api: API, callback: IAPICallback<Array<TotalRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<TotalRelation>>(Endpoint.fromSelf<Array<TotalRelation>>(), callback, { totalID: totalID }, null, page, pageSize);
        }

        /** Gets how many TotalRelations by DescendantTotalID exist. 
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        public static getByDescendantTotalIDCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Gets how many pages of TotalRelations by DescendantTotalID exist.
         *  @param totalID The ID of the Total for which to retrieve the child TotalRelations.
         *  @return An Array of TotalRelations. */
        public static getByDescendantTotalIDPageCount(totalID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { totalID: totalID });
        }

        /** Returns the related DescendantTotal based on the unique ID of the related TotalRelation.
         *  @return A single TotalRelation, or null. */
        public getDescendantTotal(api: API, callback: IAPICallback<Total>): Async {
            return TotalRelation.getDescendantTotalForTotalRelation(this.id, api, callback);
        }

        /** Returns the related DescendantTotal based on the unique ID of the related TotalRelation.
         *  @param totalRelationID The ID of the TotalRelation to retrieve.
         *  @return A single TotalRelation, or null. */
        public static getDescendantTotalForTotalRelation(totalRelationID: number, api: API, callback: IAPICallback<Total>): Async {
            return api.executeEndpoint<Total>(Endpoint.fromSelf<Total>(), callback, { totalRelationID: totalRelationID });
        }
    }
    
    export class TotalRelation extends BaseTotalRelation { }

    /** Contains properties and static functionality for the Url type. */
    export class BaseUrl extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            linkTag: new PropertyMap("linkTag", "LinkTag"),
            internal: new PropertyMap("internal", "Internal"),
            falsePositive: new PropertyMap("falsePositive", "FalsePositive"),
            path: new PropertyMap("path", "Path"),
            title: new PropertyMap("title", "Title"),
            modifyDate: new PropertyMap("modifyDate", "ModifyDate"),
            validationDate: new PropertyMap("validationDate", "ValidationDate"),
            validationStatus: new PropertyMap("validationStatus", "ValidationStatus")
        };

        public id: number = null;
        public linkTag: string = null;
        public internal: boolean = null;
        public falsePositive: boolean = null;
        public path: string = null;
        public title: string = null;
        public modifyDate: Date = null;
        public validationDate: Date = null;
        public validationStatus: number = null;

        protected getFields(): any { return BaseUrl.Fields; }

        /** Gets a list of all of the Urls in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Urls */
        public static getAll(api: API, callback: IAPICallback<Array<Url>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Url>>(Endpoint.fromSelf<Array<Url>>(), callback, null, null, page, pageSize);
        }

        /** Handles special data types during "fill". */
        public fill(json: any, exclude?: Array<string>): void {
            super.fill(json, exclude);
            this.modifyDate = this.parseDate(this.modifyDate);
            super.fill(json, exclude);
            this.validationDate = this.parseDate(this.validationDate);
        }

        /** Gets how many Urls exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Urls method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Url with the specified primary key.
         *  @param id The primary key of the Url to return.
         *  @return The matching Url, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Url>): Async {
            return api.executeEndpoint<Url>(Endpoint.fromSelf<Url>(), callback, { id: id });
        }

        /** Returns a filtered collection of Urls based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Urls which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Url>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Url>>(Endpoint.fromSelf<Array<Url>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Urls exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Urls which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Urls exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Urlswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class Url extends BaseUrl { }

    /** Contains properties and static functionality for the ValueLabel type. */
    export class BaseValueLabel extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            label: new PropertyMap("label", "Label")
        };

        public id: number = null;
        public label: string = null;

        protected getFields(): any { return BaseValueLabel.Fields; }

        /** Gets a list of all of the ValueLabels in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of ValueLabels */
        public static getAll(api: API, callback: IAPICallback<Array<ValueLabel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ValueLabel>>(Endpoint.fromSelf<Array<ValueLabel>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many ValueLabels exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the ValueLabels method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the ValueLabel with the specified primary key.
         *  @param id The primary key of the ValueLabel to return.
         *  @return The matching ValueLabel, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<ValueLabel>): Async {
            return api.executeEndpoint<ValueLabel>(Endpoint.fromSelf<ValueLabel>(), callback, { id: id });
        }

        /** Returns a filtered collection of ValueLabels based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All ValueLabels which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<ValueLabel>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<ValueLabel>>(Endpoint.fromSelf<Array<ValueLabel>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many ValueLabels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of ValueLabels which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of ValueLabels exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of ValueLabelswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class ValueLabel extends BaseValueLabel { }

    /** Contains properties and static functionality for the VeteranStatus type. */
    export class BaseVeteranStatus extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            name: new PropertyMap("name", "Name"),
            parentVeteranStatusID: new PropertyMap("parentVeteranStatusID", "ParentVeteranStatusID"),
            dimensionKey: new PropertyMap("dimensionKey", "DimensionKey"),
            treeGraph: new PropertyMap("treeGraph", "TreeGraph"),
            nameGraph: new PropertyMap("nameGraph", "NameGraph"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder"),
            depth: new PropertyMap("depth", "Depth")
        };

        public id: number = null;
        public name: string = null;
        public parentVeteranStatusID: number = null;
        public dimensionKey: string = null;
        public treeGraph: string = null;
        public nameGraph: string = null;
        public sortOrder: number = null;
        public depth: number = null;

        protected getFields(): any { return BaseVeteranStatus.Fields; }

        /** Gets a list of all of the VeteranStatuses in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of VeteranStatuses */
        public static getAll(api: API, callback: IAPICallback<Array<VeteranStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<VeteranStatus>>(Endpoint.fromSelf<Array<VeteranStatus>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many VeteranStatuses exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the VeteranStatuses method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the VeteranStatus with the specified primary key.
         *  @param id The primary key of the VeteranStatus to return.
         *  @return The matching VeteranStatus, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<VeteranStatus>): Async {
            return api.executeEndpoint<VeteranStatus>(Endpoint.fromSelf<VeteranStatus>(), callback, { id: id });
        }

        /** Returns a filtered collection of VeteranStatuses based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All VeteranStatuses which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<VeteranStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<VeteranStatus>>(Endpoint.fromSelf<Array<VeteranStatus>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many VeteranStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of VeteranStatuses which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of VeteranStatuses exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of VeteranStatuseswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets VeteranStatuses by ParentVeteranStatusID.
         *  @return An Array of VeteranStatuses. */
        public getVeteranStatuses(api: API, callback: IAPICallback<Array<VeteranStatus>>, page?: number, pageSize?: number): Async {
            return VeteranStatus.getByParentVeteranStatusID(this.id, api, callback, page, pageSize);
        }

        /** Gets VeteranStatuses by ParentVeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatuses.
         *  @return An Array of VeteranStatuses. */
        public static getByParentVeteranStatusID(veteranStatusID: number, api: API, callback: IAPICallback<Array<VeteranStatus>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<VeteranStatus>>(Endpoint.fromSelf<Array<VeteranStatus>>(), callback, { veteranStatusID: veteranStatusID }, null, page, pageSize);
        }

        /** Gets how many VeteranStatuses by ParentVeteranStatusID exist. 
         *  @return An Array of VeteranStatuses. */
        public getVeteranStatusesCount(api: API, callback: IAPICallback<number>): Async {
            return VeteranStatus.getByParentVeteranStatusIDCount(this.id, api, callback);
        }

        /** Gets how many VeteranStatuses by ParentVeteranStatusID exist. 
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatuses.
         *  @return An Array of VeteranStatuses. */
        public static getByParentVeteranStatusIDCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Gets how many pages of VeteranStatuses by ParentVeteranStatusID exist.
         *  @return An Array of VeteranStatuses. */
        public getVeteranStatusesPageCount(api: API, callback: IAPICallback<number>): Async {
            return VeteranStatus.getByParentVeteranStatusIDPageCount(this.id, api, callback);
        }

        /** Gets how many pages of VeteranStatuses by ParentVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatuses.
         *  @return An Array of VeteranStatuses. */
        public static getByParentVeteranStatusIDPageCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Returns the related ParentVeteranStatus based on the unique ID of the related VeteranStatus.
         *  @return A single VeteranStatus, or null. */
        public getParentVeteranStatus(api: API, callback: IAPICallback<VeteranStatus>): Async {
            return VeteranStatus.getParentVeteranStatusForVeteranStatus(this.id, api, callback);
        }

        /** Returns the related ParentVeteranStatus based on the unique ID of the related VeteranStatus.
         *  @param veteranStatusID The ID of the VeteranStatus to retrieve.
         *  @return A single VeteranStatus, or null. */
        public static getParentVeteranStatusForVeteranStatus(veteranStatusID: number, api: API, callback: IAPICallback<VeteranStatus>): Async {
            return api.executeEndpoint<VeteranStatus>(Endpoint.fromSelf<VeteranStatus>(), callback, { veteranStatusID: veteranStatusID });
        }
    }
    
    export class VeteranStatus extends BaseVeteranStatus { }

    /** Contains properties and static functionality for the VeteranStatusRelation type. */
    export class BaseVeteranStatusRelation extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            ancestorVeteranStatusID: new PropertyMap("ancestorVeteranStatusID", "AncestorVeteranStatusID"),
            descendantVeteranStatusID: new PropertyMap("descendantVeteranStatusID", "DescendantVeteranStatusID"),
            hops: new PropertyMap("hops", "Hops")
        };

        public id: number = null;
        public ancestorVeteranStatusID: number = null;
        public descendantVeteranStatusID: number = null;
        public hops: number = null;

        protected getFields(): any { return BaseVeteranStatusRelation.Fields; }

        /** Gets a list of all of the VeteranStatusRelations in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of VeteranStatusRelations */
        public static getAll(api: API, callback: IAPICallback<Array<VeteranStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<VeteranStatusRelation>>(Endpoint.fromSelf<Array<VeteranStatusRelation>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many VeteranStatusRelations exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the VeteranStatusRelations method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the VeteranStatusRelation with the specified primary key.
         *  @param id The primary key of the VeteranStatusRelation to return.
         *  @return The matching VeteranStatusRelation, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<VeteranStatusRelation>): Async {
            return api.executeEndpoint<VeteranStatusRelation>(Endpoint.fromSelf<VeteranStatusRelation>(), callback, { id: id });
        }

        /** Returns a filtered collection of VeteranStatusRelations based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All VeteranStatusRelations which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<VeteranStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<VeteranStatusRelation>>(Endpoint.fromSelf<Array<VeteranStatusRelation>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many VeteranStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of VeteranStatusRelations which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of VeteranStatusRelations exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of VeteranStatusRelationswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Gets VeteranStatusRelations by AncestorVeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        public static getByAncestorVeteranStatusID(veteranStatusID: number, api: API, callback: IAPICallback<Array<VeteranStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<VeteranStatusRelation>>(Endpoint.fromSelf<Array<VeteranStatusRelation>>(), callback, { veteranStatusID: veteranStatusID }, null, page, pageSize);
        }

        /** Gets how many VeteranStatusRelations by AncestorVeteranStatusID exist. 
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        public static getByAncestorVeteranStatusIDCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Gets how many pages of VeteranStatusRelations by AncestorVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        public static getByAncestorVeteranStatusIDPageCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Returns the related AncestorVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @return A single VeteranStatusRelation, or null. */
        public getAncestorVeteranStatus(api: API, callback: IAPICallback<VeteranStatus>): Async {
            return VeteranStatusRelation.getAncestorVeteranStatusForVeteranStatusRelation(this.id, api, callback);
        }

        /** Returns the related AncestorVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @param veteranStatusRelationID The ID of the VeteranStatusRelation to retrieve.
         *  @return A single VeteranStatusRelation, or null. */
        public static getAncestorVeteranStatusForVeteranStatusRelation(veteranStatusRelationID: number, api: API, callback: IAPICallback<VeteranStatus>): Async {
            return api.executeEndpoint<VeteranStatus>(Endpoint.fromSelf<VeteranStatus>(), callback, { veteranStatusRelationID: veteranStatusRelationID });
        }

        /** Gets VeteranStatusRelations by DescendantVeteranStatusID.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        public static getByDescendantVeteranStatusID(veteranStatusID: number, api: API, callback: IAPICallback<Array<VeteranStatusRelation>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<VeteranStatusRelation>>(Endpoint.fromSelf<Array<VeteranStatusRelation>>(), callback, { veteranStatusID: veteranStatusID }, null, page, pageSize);
        }

        /** Gets how many VeteranStatusRelations by DescendantVeteranStatusID exist. 
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        public static getByDescendantVeteranStatusIDCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Gets how many pages of VeteranStatusRelations by DescendantVeteranStatusID exist.
         *  @param veteranStatusID The ID of the VeteranStatus for which to retrieve the child VeteranStatusRelations.
         *  @return An Array of VeteranStatusRelations. */
        public static getByDescendantVeteranStatusIDPageCount(veteranStatusID: number, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, { veteranStatusID: veteranStatusID });
        }

        /** Returns the related DescendantVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @return A single VeteranStatusRelation, or null. */
        public getDescendantVeteranStatus(api: API, callback: IAPICallback<VeteranStatus>): Async {
            return VeteranStatusRelation.getDescendantVeteranStatusForVeteranStatusRelation(this.id, api, callback);
        }

        /** Returns the related DescendantVeteranStatus based on the unique ID of the related VeteranStatusRelation.
         *  @param veteranStatusRelationID The ID of the VeteranStatusRelation to retrieve.
         *  @return A single VeteranStatusRelation, or null. */
        public static getDescendantVeteranStatusForVeteranStatusRelation(veteranStatusRelationID: number, api: API, callback: IAPICallback<VeteranStatus>): Async {
            return api.executeEndpoint<VeteranStatus>(Endpoint.fromSelf<VeteranStatus>(), callback, { veteranStatusRelationID: veteranStatusRelationID });
        }
    }
    
    export class VeteranStatusRelation extends BaseVeteranStatusRelation { }

    /** Contains properties and static functionality for the Year type. */
    export class BaseYear extends ServiceDataObject {
        public static Fields = {
            id: new PropertyMap("id", "ID"),
            fullYear: new PropertyMap("fullYear", "FullYear"),
            twoDigitYear: new PropertyMap("twoDigitYear", "TwoDigitYear"),
            sortOrder: new PropertyMap("sortOrder", "SortOrder")
        };

        public id: number = null;
        public fullYear: number = null;
        public twoDigitYear: string = null;
        public sortOrder: number = null;

        protected getFields(): any { return BaseYear.Fields; }

        /** Gets a list of all of the Years in the database.
         *  @param  page The page of data to retrieve.
         *  @return  An IEnumerable of Years */
        public static getAll(api: API, callback: IAPICallback<Array<Year>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Year>>(Endpoint.fromSelf<Array<Year>>(), callback, null, null, page, pageSize);
        }

        /** Gets how many Years exist. */
        public static getAllCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets how many pages of data exist for the Years method. */
        public static getAllPageCount(api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback);
        }

        /** Gets the Year with the specified primary key.
         *  @param id The primary key of the Year to return.
         *  @return The matching Year, if one exists, or null. */
        public static getByID(id: number, api: API, callback: IAPICallback<Year>): Async {
            return api.executeEndpoint<Year>(Endpoint.fromSelf<Year>(), callback, { id: id });
        }

        /** Returns a filtered collection of Years based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return All Years which match the provided filter. */
        public static filter(filter: Filter, api: API, callback: IAPICallback<Array<Year>>, page?: number, pageSize?: number): Async {
            return api.executeEndpoint<Array<Year>>(Endpoint.fromSelf<Array<Year>>(), callback, null, filter.toJSON(page, pageSize));
        }

        /** Returns a count of how many Years exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The count of Years which match the provided filter. */
        public static filterCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }

        /** Returns a count of how many pages of Years exist based on the provided filter.
         *  @param filter The Filter to apply.
         *  @return The page count of Yearswhich match the provided filter. */
        public static filterPageCount(filter: Filter, api: API, callback: IAPICallback<number>): Async {
            return api.executeEndpoint<number>(Endpoint.fromSelf<number>(), callback, null, filter.toJSON());
        }
    }
    
    export class Year extends BaseYear { }
    }