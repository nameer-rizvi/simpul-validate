"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
function validateMinWords({ label, setting, value }) {
    const words = simpul_1.default.stringlength.word(value);
    if (typeof words === "number" && words < setting) {
        throw new Error(`${label} must be at least ${setting} words.`);
    }
}
exports.default = validateMinWords;
