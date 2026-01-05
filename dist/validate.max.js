"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
function validateMax({ label, setting, value }) {
    if (simpul_1.default.isNumber(value) && simpul_1.default.isNumber(setting)) {
        if (value > setting) {
            throw new Error(`${label} must be less than or equal to ${setting}.`);
        }
    }
}
exports.default = validateMax;
