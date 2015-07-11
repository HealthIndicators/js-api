module hiw.test {
    export function run(apiKey: string, baseURL: string): void {
        var api = new API(apiKey, baseURL);

        m("General", null, [
            apiTest<boolean>(api, "Verify API Key", API.verifyApiKey, null,(assert, done, data, response, error) => {
                assert.strictEqual(data, true, "Did the API key validate?");
            }),
            apiTest<VersionInfo>(api, "Get Version", VersionInfo.version, null,(assert, done, data, response, error) => {
                assert.isNotNull(data.hiwVersion, "Was a Version instance returned?");
                assert.equal(data.serviceVersion, hiw.APIVersion.major, "Is the (major) service version the same as the JavaScript API version?");
            }),
            apiTest<Age>(api, "Get Age #34", Age.getByID, [34],(assert, done, data, response, error) => {
                var name = "Aged 2-4 years";

                assert.equal(data.name, name, "Is the Age's name correct?");
            }),
            apiTest<Age>(api, "Get Parent Age", Age.getByID, [34],(assert, done, data, response, error) => {
                var age = data;
                var parentLink = <Link>age.findLinks(LinkType.Age, "ParentAge", true);

                assert.isNotNull(parentLink, "Does a link to the parent Age exist?");

                age.getParentAge(api,(data, response, error) => {
                    var parentAge = data;
                    var parentName = "Aged 2-17 years";
                    var childrenLink = <Link>parentAge.findLinks(LinkType.Ages, "Ages", true);

                    assertAPIResponse(assert, data, response, error);
                    assert.isNotNull(data, "Was the parent Age returned?");
                    assert.equal(data.name, parentName, "Is the parent Age's name correct?");
                    assert.isNotNull(childrenLink, "Does a link to the child Ages exist?");

                    parentAge.getAges(api,(data, response, error) => {
                        var childAges = data;

                        assertAPIResponse(assert, data, response, error);
                        assert.isNotNull(childAges, "Were the child Ages returned?");
                        assert.greaterThanOrEqualTo(childAges.length, 1, "Was at least one child Age returned?");
                        assert.any(childAges,(o) => o.id === age.id, "Is the original Age #34 included in the child Ages?");
                        done();
                    });
                });

                return false;
            }),
            apiTest<IndicatorDescription>(api, "Find Single Indicator", IndicatorDescription.getByID, [279],(assert, done, data, response, error) => {
                var indicatorDescription = data;

                Locale.filter(new Filter().addEqual(Locale.Fields.fullName, "Arkansas"), api,(data, response, error) => {
                    var locales = data;
                    var arkansas: Locale = null;

                    assertAPIResponse(assert, data, response, error);
                    assert.equal(locales.length, 1, "Was only one locale returned?");

                    arkansas = locales[0];
                    assert.equal(arkansas.name, "Arkansas", "Is the locale's name correct?");

                    Age.filter(new Filter().addEqual(Age.Fields.name, "Aged <65 years"), api,(data, response, error) => {
                        var ages = data;
                        var lessThan65: Age = null;

                        assertAPIResponse(assert, data, response, error);
                        assert.equal(ages.length, 1, "Was only one age returned?");

                        lessThan65 = ages[0];
                        assert.equal(lessThan65.name, "Aged <65 years", "Is the age's name correct?");

                        DimensionGraph.filter(new Filter().addEqual(DimensionGraph.Fields.ageID, lessThan65.id), api,(data, response, error) => {
                            var dimensionGraphs = data;
                            var dimensionGraph: DimensionGraph = null;

                            assertAPIResponse(assert, data, response, error);
                            assert.equal(response.dataLength, 1, "Was only one dimension graph returned?");

                            dimensionGraph = dimensionGraphs[0];
                            assert.equal(dimensionGraph.label, "Aged <65 years", "Is the dimension graph's label correct?");

                            Timeframe.getByID(2011, api,(data, response, error) => {
                                var timeframe = data;
                                var filter = new Filter()
                                    .addEqual(Indicator.Fields.indicatorDescriptionID, indicatorDescription.id)
                                    .addEqual(Indicator.Fields.localeID, arkansas.id)
                                    .addEqual(Indicator.Fields.dimensionGraphID, dimensionGraph.id)
                                    .addEqual(Indicator.Fields.timeframeID, timeframe.id);

                                assertAPIResponse(assert, data, response, error);
                                assert.equal(timeframe.name, "2011", "Was the correct timeframe returned?");

                                Indicator.filter(filter, api,(data, response, error) => {
                                    var indicators = data;
                                    var indicator: Indicator = null;

                                    assertAPIResponse(assert, data, response, error);
                                    assert.equal(response.dataLength, 1, "Was only one indicator returned?");

                                    indicator = indicators[0];
                                    assert.equal(indicator.indicatorDescriptionID, indicatorDescription.id, "Does the indicator belong to the correct indicator description?");
                                    assert.equal(indicator.dimensionGraphID, dimensionGraph.id, "Is the indicator for the correct dimension graph?");
                                    assert.equal(indicator.timeframeID, timeframe.id, "Is the indicator for the correct timeframe?");
                                    assert.equal(indicator.floatValue, 20.20, "Does the indicator have the correct float value?");
                                    assert.equal(indicator.formattedValue, "20.20%", "Does the indicator have the correct formatted value?");

                                    done();
                                });
                            });
                        });
                    });
                });

                return false;
            }),
            apiTest<Array<IndicatorDataItem>>(api, "Get Indicator Data for #9", IndicatorDataItem.getByIndicatorDescriptionID, [9],(assert, done, data, response, error) => {
                assert.isNotNull(data[0].indicatorID, "Is there any data?");
            }),
            apiTest<Array<IndicatorDescription>>(api, "Search Indicator Descriptions", IndicatorDescription.search, ["hospital readmissions"],(assert, done, data, response, error) => {
                assert.equal(response.dataLength, 2, "Were two IDs returned?");
            }),
            apiTest<ValueLabel>(api, "Get ValueLabel for IndicatorDescription", IndicatorDescription.getValueLabelForIndicatorDescription, [9],(assert, done, data, response, error) => {
                assert.equal(hiw.ValueLabel.prototype.isPrototypeOf(data), true, "Is the result a ValueLabel?");
                assert.equal("per person", data.label, "Is the value label correct?");
            }),
            asyncTest("Synchronized API Calls",(assert: QUnitAssert, done?: () => any) => {
                var indicatorDescriptions: Array<IndicatorDescription> = null;
                var timeframes: Array<Timeframe> = null;
                var locales: Array<Locale> = null;
                var ages: Array<Age> = null;

                Synchronizer.sync([
                    IndicatorDescription.getAll(api,(data) => {
                        indicatorDescriptions = data;
                    }),
                    Timeframe.getAll(api,(data) => {
                        timeframes = data;
                    }),
                    Locale.getAll(api,(data) => {
                        locales = data;
                    }),
                    Age.getAll(api,(data) => {
                        ages = data;
                    })],() => {
                        assert.isNotNull(indicatorDescriptions, "Were the IndicatorDescriptions received?.");
                        assert.isNotNull(timeframes, "Were the Timeframes received?.");
                        assert.isNotNull(locales, "Were the Locales received?.");
                        assert.isNotNull(ages, "Were the Ages received?.");
                        done();
                    });
            }),
            apiTest<Array<Timeframe>>(api, "Get timeframes using \"In\" clause", Timeframe.filter, [new Filter().add(Timeframe.Fields.name, Operator.In, [2010, 2011, 2012])],(assert, done, data, response, error) => {
                assert.equal(data.length, 3, "Were 3 timeframes returned?");
                assert.any(data, o => o.name === "2010", "Was the 2010 timeframe returned?");
                assert.any(data, o => o.name === "2011", "Was the 2011 timeframe returned?");
                assert.any(data, o => o.name === "2012", "Was the 2012 timeframe returned?");
            }),
            apiTest<Array<Timeframe>>(api, "Get timeframes using \"NotIn\" clause", Timeframe.filter, [new Filter().add(Timeframe.Fields.name, Operator.NotIn, [2010, 2011, 2012])],(assert, done, data, response, error) => {
                assert.all(data, o => o.name !== "2010", "Was the 2010 timeframe not returned?");
                assert.all(data, o => o.name !== "2011", "Was the 2011 timeframe not returned?");
                assert.all(data, o => o.name !== "2012", "Was the 2012 timeframe not returned?");
            }),
            asyncTest("Get -1 indicator",(assert, done) => {
                Indicator.getAll(api,(data, response, error) => {
                    assertAPIResponse(assert, data, response, error);

                    assert.equal(data.length > 0, true, "Were more than 0 results returned?");
                    done();
                }, 1, -1);
            }),
            asyncTest("Get 12 indicators",(assert, done) => {
                Indicator.getAll(api,(data, response, error) => {
                    assertAPIResponse(assert, data, response, error);

                    assert.equal(data.length, 12, "Were 12 indicators returned?");
                    done();
                }, 1, 12);
            }),
            apiTest<Array<Indicator>>(api, "Get 20 indicators using filter", Indicator.filter, [new Filter(1, 20).add(Indicator.Fields.floatValue, Operator.GreaterThan, 0)],(assert, done, data, response, error) => {
                assert.equal(data.length, 20, "Were 20 indicators returned?");
            })
        ]);
    }

    function m(name: string, hooks: any, tests: Array<QUnitTest>): void {
        var qunitModule = QUnit.module(name, hooks);

        for (var i = 0; i < tests.length; i++) {
            var test = tests[i];

            if (test.async) {
                QUnit.test(test.name, function(assert) {
                    this.callback(assert, assert.async());
                }.bind(test));
            }
            else {
                QUnit.test(test.name, function(assert) {
                    this.callback(assert);
                }.bind(test));
            }
        }
    }

    function test(name: string, callback: IQUnitTestCallback, async: boolean = false): QUnitTest {
        return new QUnitTest(name, callback, async);
    }

    function asyncTest(name: string, callback: IQUnitTestCallback): QUnitTest {
        return test(name, callback, true);
    }

    function apiTest<T>(api: API, name: string, endpoint: Function, params: Array<any>, callback: (assert: QUnitAssert, done: () => void, data: T, response: APIResponse<T>, error: Error) => boolean|void): QUnitTest {
        return asyncTest(name, (assert, done) => {
            var callbackWrapper = (data, response, error) => {
                assertAPIResponse(assert, data, response, error);

                //If the callback specifically returned false, then it has more work to do (chained API calls); don't finish the assertion.
                if (callback(assert, done, data, response, error) !== false)
                    done();
            };
            var allParams = (params || []);

            allParams.push(api);
            allParams.push(callbackWrapper);

            endpoint.apply(this, allParams);
        });
    }

    function assertAPIResponse<T>(assert: QUnitAssert, data: T, response: APIResponse<T>, error: string): void {
        assert.isNull(error, "Did an error occur while executing the service call to \"" + response.url + "\"?");
        assert.isNotNull(response, "Was a response returned?");
        assert.greaterThanOrEqualTo(response.dataLength, 0, "Is the response's 'dataLength' non-negative?");

        if (response.dataLength == 0)
            assert.isNull(data, "Is 'data' null when 'dataLength' = 0?");
        else
            assert.isNotNull(data, "Is 'data' non-null when 'dataLength' > 0?");

        if (Array.isArray(data))
            assert.equal((<Array<any>><any>data).length, response.dataLength, "Does 'dataLength' = data.length?");
    }
}

