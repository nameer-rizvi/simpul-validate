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
const validate_min_1 = __importDefault(require("./validate.min"));
const simpul_1 = __importDefault(require("simpul"));
function validateMinWords(_a) {
    var { label, value } = _a, rest = __rest(_a, ["label", "value"]);
    if (simpul_1.default.isString(value)) {
        const label2 = `${label}${simpul_1.default.delimiter}words`;
        const value2 = simpul_1.default.stringLength.word(value);
        (0, validate_min_1.default)(Object.assign({ label: label2, value: value2 }, rest));
    }
}
exports.default = validateMinWords;
