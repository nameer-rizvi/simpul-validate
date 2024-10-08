"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const simpul_1 = __importDefault(require("simpul"));
const validate_index_1 = __importDefault(require("./validate.index"));
const stringStripHtml = __importStar(require("string-strip-html"));
const sanitized_1 = __importDefault(require("sanitized"));
function initializer(dictionary, option = {}) {
    // Dictionary.
    if (!simpul_1.default.isArray(dictionary)) {
        throw new Error("Dictionary must be an array.");
    }
    dictionary = dictionary.filter(simpul_1.default.isObject);
    // Validator.
    return function validator(payload, required) {
        // Payload.
        if (typeof payload === "undefined") {
            return;
        }
        else if (!simpul_1.default.isObject(payload)) {
            throw new Error("Payload must be an object.");
        }
        for (const [key, value] of Object.entries(payload)) {
            // Definition.
            const definition = dictionary[dictionary.findIndex((i) => i.key === key)];
            if (typeof definition === "undefined") {
                const error = `Dictionary definition with key ("${key}") does not exist.`;
                throw new Error(error);
            }
            definition.label = simpul_1.default.capitalize(definition.label || key) || "";
            // Validation.
            if (simpul_1.default.isValid(value)) {
                for (const [name, setting] of Object.entries(definition)) {
                    const validation = Object.assign(Object.assign({}, validate_index_1.default), option.custom)[name];
                    if (typeof validation === "undefined")
                        continue;
                    let matchV, matchD;
                    if (name === "match") {
                        matchV = payload[setting];
                        matchD = dictionary[dictionary.findIndex((i) => i.key === setting)];
                    }
                    validation({
                        setting,
                        value,
                        label: definition.label,
                        match: matchV,
                        matchLabel: matchD === null || matchD === void 0 ? void 0 : matchD.label,
                    });
                }
            }
            // Required.
            if (required === null || required === void 0 ? void 0 : required.includes(key)) {
                const isValue = simpul_1.default.isString(value)
                    ? key.toLowerCase().includes("html") ||
                        key.toLowerCase().includes("rich_text")
                        ? stringStripHtml.stripHtml(value).result.trim().length > 0
                        : value.trim().length > 0
                    : simpul_1.default.isValid(value);
                if (isValue === false) {
                    throw new Error(`${definition.label} is required.`);
                }
            }
            // Sanitize
            if (definition.ignoreSanitizer !== true) {
                const sanitizedValue = (0, sanitized_1.default)(value, option.domPurifyOptions || {});
                if (definition.ignoreSanitizerValidation !== true) {
                    if (JSON.stringify(value) !== JSON.stringify(sanitizedValue)) {
                        throw new Error(`${definition.label} is a dirty value.`);
                    }
                }
                payload[key] = sanitizedValue;
            }
        }
    };
}
module.exports = initializer;
