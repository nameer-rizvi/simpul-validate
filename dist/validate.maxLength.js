"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMaxLength({ label, setting, value }) {
    if (value.length > setting) {
        const error = `${label} must be less than or equal to ${setting} characters.`;
        throw new Error(error);
    }
}
exports.default = validateMaxLength;
