"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pathToRegexp = __importStar(require("next/dist/compiled/path-to-regexp"));
exports.pathToRegexp = pathToRegexp;
exports.default = (customRoute = false) => {
    return (path) => {
        const keys = [];
        const matcherOptions = Object.assign(Object.assign({ sensitive: false, delimiter: '/' }, (customRoute ? { strict: true } : undefined)), { decode: decodeParam });
        const matcherRegex = pathToRegexp.pathToRegexp(path, keys, matcherOptions);
        const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
        return (pathname, params) => {
            const res = pathname == null ? false : matcher(pathname);
            if (!res) {
                return false;
            }
            if (customRoute) {
                for (const key of keys) {
                    // unnamed params should be removed as they
                    // are not allowed to be used in the destination
                    if (typeof key.name === 'number') {
                        delete res.params[key.name];
                    }
                }
            }
            return Object.assign(Object.assign({}, params), res.params);
        };
    };
};
function decodeParam(param) {
    try {
        return decodeURIComponent(param);
    }
    catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
    }
}
