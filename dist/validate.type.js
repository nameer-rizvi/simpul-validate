"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
const resolver = {
    array: simpul_1.default.isArray,
    arrayNonEmpty: simpul_1.default.isArrayNonEmpty,
    arrayOrString: simpul_1.default.isArrayOrString,
    base64: simpul_1.default.isBase64,
    boolean: simpul_1.default.isBoolean,
    booleanAny: simpul_1.default.isBooleanAny,
    booleanNumber: simpul_1.default.isBooleanNumber,
    booleanString: simpul_1.default.isBooleanString,
    creditCardNumber: simpul_1.default.isCreditCardNumber,
    date: simpul_1.default.isDate,
    email: simpul_1.default.isEmail,
    error: simpul_1.default.isError,
    function: simpul_1.default.isFunction,
    http: simpul_1.default.isHTTP,
    json: simpul_1.default.isJSON,
    jsonString: simpul_1.default.isJSONString,
    jwt: simpul_1.default.isJWT,
    module: simpul_1.default.isModule,
    number: simpul_1.default.isNumber,
    numberString: simpul_1.default.isNumberString,
    numberValid: simpul_1.default.isNumberValid,
    numeric: simpul_1.default.isNumeric,
    object: simpul_1.default.isObject,
    objectNonEmpty: simpul_1.default.isObjectNonEmpty,
    phoneNumber: simpul_1.default.isPhoneNumber,
    regex: simpul_1.default.isRegex,
    string: simpul_1.default.isString,
    stringNonEmpty: simpul_1.default.isStringNonEmpty,
    stringOrArray: simpul_1.default.isStringOrArray,
    stringSafe: simpul_1.default.isStringSafe,
    url: simpul_1.default.isURL,
    valid: simpul_1.default.isValid,
};
function validateType({ label, setting, value }) {
    if (simpul_1.default.isString(setting)) {
        const guard = resolver[setting];
        if ((!guard && typeof value !== setting) || !guard(value)) {
            throw new Error(`${label} is not type: ${setting}.`);
        }
    }
}
exports.default = validateType;
