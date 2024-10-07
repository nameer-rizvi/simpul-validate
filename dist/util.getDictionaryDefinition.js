"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
function getDictionaryDefinition(dictionary, key) {
    for (const definition of dictionary) {
        if (definition.key === key) {
            definition.label = simpul_1.default.capitalize(definition.label || key);
            return definition;
        }
    }
    throw new Error(`Dictionary definition with key ("${key}") does not exist.`);
}
exports.default = getDictionaryDefinition;
