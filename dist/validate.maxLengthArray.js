"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMaxLengthArray({ label, setting, value }) {
    if (value.length > setting) {
        throw new Error(`${label} must be less than or equal to ${setting} items.`);
    }
}
exports.default = validateMaxLengthArray;
