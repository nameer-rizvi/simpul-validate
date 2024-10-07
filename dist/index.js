"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const simpul_1 = __importDefault(require("simpul"));
const util_isRequired_1 = __importDefault(require("./util.isRequired"));
const util_sanitize_1 = __importDefault(require("./util.sanitize"));
function initializer(dictionary = [], option = {}) {
    if (!simpul_1.default.isArray(dictionary)) {
        throw new Error("Dictionary must be an array.");
    }
    dictionary = dictionary.filter(simpul_1.default.isObject);
    return function validator(payload = {}, required) {
        if (!simpul_1.default.isObject(payload)) {
            throw new Error("Payload must be an object.");
        }
        // validate(payload, dictionary, option);
        (0, util_isRequired_1.default)(payload, dictionary, required);
        (0, util_sanitize_1.default)(payload, dictionary, option.domPurifyOptions);
    };
}
module.exports = initializer;
