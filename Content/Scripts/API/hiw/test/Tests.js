var hiw;
(function (hiw) {
    var test;
    (function (_test) {
        function run(apiKey, baseURL) {
            var api = new hiw.API(apiKey, baseURL);
            m("General", null, [
                apiTest(api, "Verify API Key", hiw.API.verifyApiKey, null, function (assert, done, data, response, error) {
                    assert.strictEqual(data, true, "Did the API key validate?");
                }),
                apiTest(api, "Get Version", hiw.VersionInfo.version, null, function (assert, done, data, response, error) {
                    assert.isNotNull(data.hiwVersion, "Was a Version instance returned?");
                    assert.equal(data.serviceVersion, hiw.APIVersion.major, "Is the (major) service version the same as the JavaScript API version?");
                }),
                apiTest(api, "Get Age #34", hiw.Age.getByID, [34], function (assert, done, data, response, error) {
                    var name = "Aged 2-4 years";
                    assert.equal(data.name, name, "Is the Age's name correct?");
                }),
                apiTest(api, "Get Parent Age", hiw.Age.getByID, [34], function (assert, done, data, response, error) {
                    var age = data;
                    var parentLink = age.findLinks(0 /* Age */, "ParentAge", true);
                    assert.isNotNull(parentLink, "Does a link to the parent Age exist?");
                    age.getParentAge(api, function (data, response, error) {
                        var parentAge = data;
                        var parentName = "Aged 2-17 years";
                        var childrenLink = parentAge.findLinks(1 /* Ages */, "Ages", true);
                        assertAPIResponse(assert, data, response, error);
                        assert.isNotNull(data, "Was the parent Age returned?");
                        assert.equal(data.name, parentName, "Is the parent Age's name correct?");
                        assert.isNotNull(childrenLink, "Does a link to the child Ages exist?");
                        parentAge.getAges(api, function (data, response, error) {
                            var childAges = data;
                            assertAPIResponse(assert, data, response, error);
                            assert.isNotNull(childAges, "Were the child Ages returned?");
                            assert.greaterThanOrEqualTo(childAges.length, 1, "Was at least one child Age returned?");
                            assert.any(childAges, function (o) { return o.id === age.id; }, "Is the orignal Age #34 included in the child Ages?");
                            done();
                        });
                    });
                    return false;
                }),
                apiTest(api, "Find Single Indicator", hiw.IndicatorDescription.getByID, [279], function (assert, done, data, response, error) {
                    var indicatorDescription = data;
                    hiw.Locale.filter(new hiw.Filter().addEqual(hiw.Locale.Fields.fullName, "Arkansas"), api, function (data, response, error) {
                        var locales = data;
                        var arkansas = null;
                        assertAPIResponse(assert, data, response, error);
                        assert.equal(locales.length, 1, "Was only one locale returned?");
                        arkansas = locales[0];
                        assert.equal(arkansas.name, "Arkansas", "Is the locale's name correct?");
                        hiw.Age.filter(new hiw.Filter().addEqual(hiw.Age.Fields.name, "Aged <65 years"), api, function (data, response, error) {
                            var ages = data;
                            var lessThan65 = null;
                            assertAPIResponse(assert, data, response, error);
                            assert.equal(ages.length, 1, "Was only one age returned?");
                            lessThan65 = ages[0];
                            assert.equal(lessThan65.name, "Aged <65 years", "Is the age's name correct?");
                            hiw.DimensionGraph.filter(new hiw.Filter().addEqual(hiw.DimensionGraph.Fields.ageID, lessThan65.id), api, function (data, response, error) {
                                var dimensionGraphs = data;
                                var dimensionGraph = null;
                                assertAPIResponse(assert, data, response, error);
                                assert.equal(response.dataLength, 1, "Was only one dimension graph returned?");
                                dimensionGraph = dimensionGraphs[0];
                                assert.equal(dimensionGraph.label, "Aged <65 years", "Is the dimension graph's label correct?");
                                hiw.Timeframe.getByID(2011, api, function (data, response, error) {
                                    var timeframe = data;
                                    var filter = new hiw.Filter().addEqual(hiw.Indicator.Fields.indicatorDescriptionID, indicatorDescription.id).addEqual(hiw.Indicator.Fields.localeID, arkansas.id).addEqual(hiw.Indicator.Fields.dimensionGraphID, dimensionGraph.id).addEqual(hiw.Indicator.Fields.timeframeID, timeframe.id);
                                    assertAPIResponse(assert, data, response, error);
                                    assert.equal(timeframe.name, "2011", "Was the correct timeframe returned?");
                                    hiw.Indicator.filter(filter, api, function (data, response, error) {
                                        var indicators = data;
                                        var indicator = null;
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
                apiTest(api, "Get Indicator Data for #9", hiw.IndicatorDataItem.getByIndicatorDescriptionID, [9], function (assert, done, data, response, error) {
                    assert.isNotNull(data[0].indicatorID, "Is there any data?");
                }),
                apiTest(api, "Search Indicator Descriptions", hiw.IndicatorDescription.search, ["hospital readmissions"], function (assert, done, data, response, error) {
                    assert.equal(response.dataLength, 2, "Were two IDs returned?");
                }),
                apiTest(api, "Get ValueLabel for IndicatorDescription", hiw.IndicatorDescription.getValueLabelForIndicatorDescription, [9], function (assert, done, data, response, error) {
                    assert.equal(hiw.ValueLabel.prototype.isPrototypeOf(data), true, "Is the result a ValueLabel?");
                    assert.equal("per person", data.label, "Is the value label correct?");
                }),
                asyncTest("Synchronized API Calls", function (assert, done) {
                    var indicatorDescriptions = null;
                    var timeframes = null;
                    var locales = null;
                    var ages = null;
                    hiw.Synchronizer.sync([
                        hiw.IndicatorDescription.getAll(api, function (data) {
                            indicatorDescriptions = data;
                        }),
                        hiw.Timeframe.getAll(api, function (data) {
                            timeframes = data;
                        }),
                        hiw.Locale.getAll(api, function (data) {
                            locales = data;
                        }),
                        hiw.Age.getAll(api, function (data) {
                            ages = data;
                        })
                    ], function () {
                        assert.isNotNull(indicatorDescriptions, "Were the IndicatorDescriptions received?.");
                        assert.isNotNull(timeframes, "Were the Timeframes received?.");
                        assert.isNotNull(locales, "Were the Locales received?.");
                        assert.isNotNull(ages, "Were the Ages received?.");
                        done();
                    });
                }),
                apiTest(api, "Get timeframes using \"In\" clause", hiw.Timeframe.filter, [new hiw.Filter().add(hiw.Timeframe.Fields.name, 8 /* In */, [2010, 2011, 2012])], function (assert, done, data, response, error) {
                    assert.equal(data.length, 3, "Were 3 timeframes returned?");
                    assert.any(data, function (o) { return o.name === "2010"; }, "Was the 2010 timeframe returned?");
                    assert.any(data, function (o) { return o.name === "2011"; }, "Was the 2011 timeframe returned?");
                    assert.any(data, function (o) { return o.name === "2012"; }, "Was the 2012 timeframe returned?");
                }),
                apiTest(api, "Get timeframes using \"NotIn\" clause", hiw.Timeframe.filter, [new hiw.Filter().add(hiw.Timeframe.Fields.name, 9 /* NotIn */, [2010, 2011, 2012])], function (assert, done, data, response, error) {
                    assert.all(data, function (o) { return o.name !== "2010"; }, "Was the 2010 timeframe not returned?");
                    assert.all(data, function (o) { return o.name !== "2011"; }, "Was the 2011 timeframe not returned?");
                    assert.all(data, function (o) { return o.name !== "2012"; }, "Was the 2012 timeframe not returned?");
                }),
                asyncTest("Get -1 indicator", function (assert, done) {
                    hiw.Indicator.getAll(api, function (data, response, error) {
                        assertAPIResponse(assert, data, response, error);
                        assert.equal(data.length, 1, "Was a single result returned?");
                        done();
                    }, 1, -1);
                }),
                asyncTest("Get 12 indicators", function (assert, done) {
                    hiw.Indicator.getAll(api, function (data, response, error) {
                        assertAPIResponse(assert, data, response, error);
                        assert.equal(data.length, 12, "Were 12 indicators returned?");
                        done();
                    }, 1, 12);
                }),
                apiTest(api, "Get 20 indicators using filter", hiw.Indicator.filter, [new hiw.Filter(1, 20).add(hiw.Indicator.Fields.floatValue, 5 /* GreaterThan */, 0)], function (assert, done, data, response, error) {
                    assert.equal(data.length, 20, "Were 20 indicators returned?");
                }),
            ]);
        }
        _test.run = run;
        function m(name, hooks, tests) {
            var qunitModule = QUnit.module(name, hooks);
            for (var i = 0; i < tests.length; i++) {
                var test = tests[i];
                if (test.async) {
                    QUnit.test(test.name, function (assert) {
                        this.callback(assert, assert.async());
                    }.bind(test));
                }
                else {
                    QUnit.test(test.name, function (assert) {
                        this.callback(assert);
                    }.bind(test));
                }
            }
        }
        function test(name, callback, async) {
            if (async === void 0) { async = false; }
            return new _test.QUnitTest(name, callback, async);
        }
        function asyncTest(name, callback) {
            return test(name, callback, true);
        }
        function apiTest(api, name, endpoint, params, callback) {
            var _this = this;
            return asyncTest(name, function (assert, done) {
                var callbackWrapper = function (data, response, error) {
                    assertAPIResponse(assert, data, response, error);
                    //If the callback specifically returned false, then it has more work to do (chained API calls); don't finish the assertion.
                    if (callback(assert, done, data, response, error) !== false)
                        done();
                };
                var allParams = (params || []);
                allParams.push(api);
                allParams.push(callbackWrapper);
                endpoint.apply(_this, allParams);
            });
        }
        function assertAPIResponse(assert, data, response, error) {
            assert.isNull(error, "Did an error occur while executing the service call to \"" + response.url + "\"?");
            assert.isNotNull(response, "Was a response returned?");
            assert.greaterThanOrEqualTo(response.dataLength, 0, "Is the response's 'dataLength' non-negative?");
            if (response.dataLength == 0)
                assert.isNull(data, "Is 'data' null when 'dataLength' = 0?");
            else
                assert.isNotNull(data, "Is 'data' non-null when 'dataLength' > 0?");
            if (Array.isArray(data))
                assert.equal(data.length, response.dataLength, "Does 'dataLength' = data.length?");
        }
    })(test = hiw.test || (hiw.test = {}));
})(hiw || (hiw = {}));
//# sourceMappingURL=Tests.js.map