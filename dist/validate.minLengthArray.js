"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMinLengthArray({ label, setting, value }) {
    if (value.length < setting) {
        throw new Error(`${label} must be at least ${setting} items.`);
    }
}
exports.default = validateMinLengthArray;
