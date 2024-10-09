"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMaxLengthArray({ label, setting, value }) {
    if (value.length > setting) {
        const error = `${label} must be less than or equal to ${setting} items.`;
        throw new Error(error);
    }
}
exports.default = validateMaxLengthArray;
