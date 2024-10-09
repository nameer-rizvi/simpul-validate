"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMax({ label, setting, value }) {
    if (value > setting) {
        throw new Error(`${label} must be less than or equal to ${setting}.`);
    }
}
exports.default = validateMax;
