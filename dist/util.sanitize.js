"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_getDictionaryDefinition_1 = __importDefault(require("./util.getDictionaryDefinition"));
const sanitized_1 = __importDefault(require("sanitized"));
function sanitize(payload, dictionary, domPurifyOptions = {}) {
    for (const [key, value] of Object.entries(payload)) {
        const definition = (0, util_getDictionaryDefinition_1.default)(dictionary, key);
        if (definition.ignoreSanitizer !== true) {
            const sanitizedValue = (0, sanitized_1.default)(value, domPurifyOptions);
            if (definition.ignoreSanitizerValidation !== true) {
                if (JSON.stringify(value) !== JSON.stringify(sanitizedValue)) {
                    throw new Error(`${definition.label} is a dirty value.`);
                }
            }
            payload[key] = sanitizedValue;
        }
    }
}
exports.default = sanitize;
