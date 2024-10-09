"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
function validateMaxWords({ label, setting, value }) {
    const words = simpul_1.default.stringlength.word(value);
    if (typeof words === "number" && words > setting) {
        throw new Error(`${label} must be less than or equal to ${setting} words.`);
    }
}
exports.default = validateMaxWords;
