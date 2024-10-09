"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
const resolver = {
    array: simpul_1.default.isArray,
    base64: simpul_1.default.isBase64,
    boolean: simpul_1.default.isBoolean,
    booleanAny: simpul_1.default.isBooleanAny,
    booleanNumber: simpul_1.default.isBooleanNumber,
    booleanString: simpul_1.default.isBooleanString,
    creditCard: simpul_1.default.isCreditCardNumber,
    date: simpul_1.default.isDate,
    email: simpul_1.default.isEmail,
    function: simpul_1.default.isFunction,
    http: simpul_1.default.isHTTP,
    json: simpul_1.default.isJSON,
    jsonString: simpul_1.default.isJSONString,
    jwt: simpul_1.default.isJWT,
    module: simpul_1.default.isModule,
    number: simpul_1.default.isNumber,
    object: simpul_1.default.isObject,
    phoneNumber: simpul_1.default.isPhoneNumber,
    regex: simpul_1.default.isRegex,
    string: simpul_1.default.isString,
    stringOrArray: simpul_1.default.isStringOrArray,
    url: simpul_1.default.isURL,
    valid: simpul_1.default.isValid,
};
function validateType({ label, setting, value }) {
    const error = `${label} is not type: ${setting}.`;
    if (resolver[setting]) {
        if (!resolver[setting](value))
            throw new Error(error);
    }
    else if (typeof value !== setting) {
        throw new Error(error);
    }
}
exports.default = validateType;
