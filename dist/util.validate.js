"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
const util_getDictionaryDefinition_1 = __importDefault(require("./util.getDictionaryDefinition"));
const validate_index_1 = __importDefault(require("./validate.index"));
function validate(payload, dictionary, option = {}) {
    for (const [key, value] of Object.entries(payload)) {
        if (!simpul_1.default.isValid(value))
            continue; // "isRequired" handles keys that require values.
        const definition = (0, util_getDictionaryDefinition_1.default)(dictionary, key);
        for (const [name, setting] of Object.entries(definition)) {
            const def = Object.assign(Object.assign({}, validate_index_1.default), option.custom)[name];
            if (!def)
                continue;
            const label = definition.label || "";
            let match, matchLabel;
            if (name === "match") {
                match = payload[setting];
                matchLabel = (0, util_getDictionaryDefinition_1.default)(dictionary, setting).label;
            }
            def({ setting, value, label, match, matchLabel });
        }
    }
}
exports.default = validate;
