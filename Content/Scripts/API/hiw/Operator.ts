module hiw {
    /** The valid set of operators we can use to filter an API call. */
    export enum Operator {
        LessThan,
        LessThanOrEqual,
        Equal,
        NotEqual,
        GreaterThanOrEqual,
        GreaterThan,
        Null,
        NotNull,
        In,
        NotIn
    }
} 