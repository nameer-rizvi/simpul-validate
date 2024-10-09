"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMinLength({ label, setting, value }) {
    if (value.length < setting) {
        throw new Error(`${label} must be at least ${setting} characters.`);
    }
}
exports.default = validateMinLength;
