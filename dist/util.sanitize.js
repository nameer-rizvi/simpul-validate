"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_getDictionaryDefinition_1 = __importDefault(require("./util.getDictionaryDefinition"));
const sanitized_1 = __importDefault(require("sanitized"));
function sanitize(payload, dictionary, domPurifyOptions = {}) {
    for (const key of Object.keys(payload)) {
        if ((0, util_getDictionaryDefinition_1.default)(dictionary, key).ignoreSanitizer !== true) {
            payload[key] = (0, sanitized_1.default)(payload[key], domPurifyOptions);
        }
    }
}
exports.default = sanitize;
