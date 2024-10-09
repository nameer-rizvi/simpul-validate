"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_blacklist_1 = __importDefault(require("./validate.blacklist"));
function validateBlacklistKeys(_a) {
    var { value } = _a, rest = __rest(_a, ["value"]);
    try {
        (0, validate_blacklist_1.default)(Object.assign({ value: Object.keys(value) }, rest));
    }
    catch (err) {
        const error = `${err}`.replace("Error:", "").replace("term", "key").trim();
        throw new Error(error);
    }
}
exports.default = validateBlacklistKeys;
