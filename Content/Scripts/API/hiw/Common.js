var hiw;
(function (hiw) {
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
//# sourceMappingURL=Common.js.map