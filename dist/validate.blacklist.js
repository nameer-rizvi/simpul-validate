"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simpul_1 = __importDefault(require("simpul"));
function validateBlacklist({ label, setting, value }) {
    const values = normalize(value);
    const settings = normalize(setting);
    for (const v of values) {
        for (const s of settings) {
            if (v.includes(s)) {
                throw new Error(`${label}: "${s}" is a reserved term.`);
            }
        }
    }
}
function normalize(input) {
    if (simpul_1.default.isString(input)) {
        return [input.toLowerCase()];
    }
    else if (simpul_1.default.isArray(input)) {
        const list = [];
        for (const item of input.flat())
            if (simpul_1.default.isString(item))
                list.push(item.toLowerCase());
        return list;
    }
    else {
        return [];
    }
}
exports.default = validateBlacklist;
