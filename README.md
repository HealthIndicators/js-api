#Health Indicators Warehouse (HIW) JavaScript API
This read-me file describes the purpose and use of the HIW JavaScript API (herein referred to as simply "JS API").

##Get the API
You may obtain the JavaScript API via one of the following methods.

- Direct Download: Simply download a ZIP file which contains the API. [Download Now](http://developers.healthindicators.gov/Content/Downloads/hiw-api.zip)
- Link from cdnjs: Get a link to the API from cdnjs. [Go to cdnjs](https://cdnjs.com/libraries/hiw-api)
- Install from NuGet: Install the `hiw-api` or `hiw-api-lite` package. [Go to NuGet](http://www.nuget.org/profiles/HealthIndicators)
- Install from NPM: Install the `hiw-api` package. [Go to NPM](https://www.npmjs.com/package/hiw-api)
- Browse on GitHub: The API is open source and is available on GitHub – come collaborate with us! [Go to GitHub](https://github.com/HealthIndicators/js-api)

##Purpose
The JS API is designed to allow developers to access data stored within the HIW more easily, using JavaScript. By using the 
JS API, developers won't have to write much of the boilerplate code required to make calls to the HIW's RESTful Service, and 
it also provides helpful information, such as intellisense and code-completion, as developers work with the JS API - assuming
the IDE with which they are working supports these features.

##API Documentation
The [HIW Developers site](http://developers.healthindicators.gov) includes a complete set of very detailed documentation as well 
as tutorials and other supporting information. If you plan on using the JS API, you should keep this documentation at the ready.

##Requirements
The JS API is written in TypeScript but is compiled to pure JavaScript. There are no dependencies or requirements other than using 
a browser which supports JavaScript (ECMAScript5). Note that if you wish to run the included tests, you will need QUnit - but this 
is not required.

##Usage
Most developers who are comfortable working with JavaScript should find the JS API fairly straightforward to use. The JS API has 
been designed to minimize user error. For instance, you won't be required to type and strings such as the API's base URL, endpoint URIs, field names and operators while filtering, etc.

_Note:_ Examples shown below assume you have already instantiated a global `hiw.API` instance called `api` and exclude error-checking 
code for brevity.

###Lite or Full?
The JS API offers a "lite" version in addition to the full API. The lite version includes the bare necessities needed to work with
the HIW API. If you are not interested in intellisense/code-completion and simply want some helper functions and the basic
framework required to interact with the API, then the lite version may work for you. If you are using TypeScript, you will most
likely want to use the full version of the JS API. The full API is fairly large, at around 500KB whereas the lite API is only
27KB. Future optimizations will hopefully decrease the size of the full API.

###TypeScript
If you want a more robust experience, we _highly recommend_ that you use an IDE which supports TypeScript, and write your code 
which interacts with the JS API in TypeScript. This will give you many helpful design-time features such as intellisense and 
strong typing.

###Naming Convention and Code Style
While looking at the [API Documentation](http://developers.healthindicators.gov/Documentation), you will notice that property 
names are written in PascalCase whereas camelCase is generally used with JavaScript. In order to provide an API which feels more 
like JavaScript, the JS API maps the returned properties to their camelCase counterpart. For instance if you request an `Age` 
from the API, you would access the `Name` property as `name` instead. This same concept extends to the names of the API methods 
themselves. So, to get an `Age` you would call the `Age.getByID` function.

###Namespaces/Modules
All of the classes and functions you will need to interact with in order to use the JS API are contained within the "hiw" 
namespace (or module). The reason for this is to eliminate the risk of class collisions with other frameworks. There is also 
a nested "test" namespace which contains a few test cases.

###The API Class
The `API` class is the main entry point to the HIW API. This is where you define the base URL (which defaults to the current HIW 
Service) and API Key to use. Note that [you must include an API key](http://developers.healthindicators.gov/ApiKey) in order to 
use the HIW Service:

    var apiKey = "your-api-key-goes-here";
    var api = new hiw.API(apiKey);

You must create an instance of the `hiw.API` class and use it to call API endpoints. You only need a single `API` instance for your 
entire application.

###Callbacks
All API calls are performed asynchronously, per usual, in order to not block the browser while executing the call. This means 
that when you execute an API method, you need to provide a callback which will be called when the service returns the requested 
data. If you're using TypeScript, this will be much easier and you will benefit from strongly typed data in the callback. All 
callbacks look the same, regardless of the API method. The `IAPICallback` interface describes the callback as 
follows:

    (data: T, apiResponse: APIResponse<T>, error: string): void;

Your callback should accept 0 to three parameters and does not return anything.

####Parameters

    Name            Type            Description
    ---------------------------------------------------------------------------------------------------------------------------
    data            T/Object        Represents the data returned from the API call. If you're using TypeScript, the type will be 
                                    defined, otherwise it's a simple Object.
    apiResponse     APIResponse     Contains the raw response from the API.
    error           string          The error returned from the API. You should check whether this is set before attempting to work 
                                    with the returned data.

###Singular Methods
[Singular methods are described here](http://developers.healthindicators.gov/Documentation) and are easy to access using the JS 
API. For instance, if you know the ID of an Indicator Description you want to work with ([Acute hospital readmissions in this case](http://www.healthindicators.gov/Indicators/Acute-hospital-readmissions-percent_279/Profile)
 - ID=279), you can get it as follows:

    hiw.IndicatorDescription.getByID(279, api, function(data, response, error) {
        var indicatorDescription = data;

        alert(indicatorDescription.shortDescription);
    });

###Plural Methods
[Plural methods are described here](http://developers.healthindicators.gov/Documentation) and are easy to access using the JS 
API. For instance, if you wish to get all Locales, you can do so as follows:

    hiw.Locale.getAll(api, function(data, response, error) {
        var locales = data; //Array of Locale

        alert(locales.length);
    });

###Parent-Child Methods
[Parent-child methods are described here](http://developers.healthindicators.gov/Documentation) and are easy to access using the 
JS API. For instance, if you wish to get all Indicators for the locale Arkansas (ID=5), you can do so as follows:

    hiw.Indicator.getByLocaleID(arkansas.id, api, function(data, response, error) {
        var indicators = data; //Array of Indicator

        alert(indicators.length); //Will output a very large number.
    });

This example assumes that you've already requested the Locale "Arkansas" from the API and stored in the variable called 
`arkansas'. Note that this will return a lot of data, so it's recommended to use a Filter to refine the results (see below).

###Filtering
To ease the creation of filters to pass to [filter API methods](http://developers.healthindicators.gov/Examples/Filtering), the JS 
API includes a set of classes related to creating simple or complex filters. The example below illustrates how to call a filter 
API method and get a specific locale (Arkansas):

    var filter = new Filter()
        .addEqual(Locale.Fields.FullName, "Arkansas");

    hiw.Locale.filter(filter, api, function(data, response, error) {
        var locale = data[0];

        alert(locale.fullName);
    });

###Synchronizing
The JS API also includes a simple mechanism which allows you to synchronize any number of API calls. Basically, you can execute 
multiple API calls and when they have all completed, a callback is execute. This is handy if you need to load data from a few
different endpoints and then update the UI once all calls have completed. For example:

    var indicatorDescriptions = null;
    var timeframes = null;
    var locales = null;
    var ages = null;

    // Pass an array of API calls, followed by the final callback.
    hiw.Synchronizer.sync([
        hiw.IndicatorDescription.getAll(api, (data) => {
            indicatorDescriptions = data;
        }),
        hiw.Timeframe.getAll(api, (data) => {
            timeframes = data;
        }),
        hiw.Locale.getAll(api, (data) => {
            locales = data;
        }),
        hiw.Age.getAll(api, (data) => {
            ages = data;
        })],() => {
            // This final callback is only execute onces the 4 API calls have completed.
            // Perform UI updates here.
        });

##Examples
The small examples above should have given you the general idea of how to work with the JS API. More examples and tutorials are 
available on the [HIW Developers site](http://developers.healthindicators.gov/Examples) and [JSFiddle](http://jsfiddle.net/user/HealthIndicators).

##Reporting Issues
If you come across any issues while using the JS API or if something is not clear, please [contact HIW Support](mailto:healthindicators@cdc.gov). Bugs and suggestions [may also be logged on GitHub](https://github.com/HealthIndicators/js-api/issues).
