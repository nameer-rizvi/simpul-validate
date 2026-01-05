"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
function validateMaxLength({ label, setting, value }) {
    if (simpul_1.default.isStringOrArray(value) && simpul_1.default.isNumber(setting)) {
        if (value.length > setting) {
            const thing = simpul_1.default.isString(value) ? "characters" : "items";
            const error = `${label} must be less than or equal to ${setting} ${thing}.`;
            throw new Error(error);
        }
    }
}
exports.default = validateMaxLength;
