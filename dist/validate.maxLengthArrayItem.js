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
const validate_maxLength_1 = __importDefault(require("./validate.maxLength"));
function validateMaxLengthArrayItem(_a) {
    var { value: values } = _a, rest = __rest(_a, ["value"]);
    for (const value of values) {
        (0, validate_maxLength_1.default)(Object.assign(Object.assign({}, rest), { value, label: `${rest.label}: "${value}"` }));
    }
}
exports.default = validateMaxLengthArrayItem;
