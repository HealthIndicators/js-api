module hiw {
    Endpoint.addArray<IndicatorDescription>(IndicatorDescription, HTTPMethod.GET, "/IndicatorDescriptions/{keywords}/Search/{page}",(<any>IndicatorDescription).search);
    Endpoint.addSimple<IndicatorDescription, Number>(IndicatorDescription, HTTPMethod.GET, "/IndicatorDescriptions/{keywords}/Count",(<any>IndicatorDescription).searchCount);
    Endpoint.addSimple<IndicatorDescription, Number>(IndicatorDescription, HTTPMethod.GET, "/IndicatorDescriptions/{keywords }/PageCount",(<any>IndicatorDescription).searchPageCount);
} 