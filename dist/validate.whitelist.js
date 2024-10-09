"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateWhitelist({ label, setting, value }) {
    if (typeof value === "string" && typeof setting === "string") {
        if (value !== setting)
            throwError(label, value);
    }
    else if (typeof value === "string" && Array.isArray(setting)) {
        if (!setting.includes(value))
            throwError(label, value);
    }
    else if (Array.isArray(value) && typeof setting === "string") {
        const v = value.find((i) => i !== setting);
        if (v)
            throwError(label, v);
    }
    else if (Array.isArray(value) && Array.isArray(setting)) {
        const v = value.find((i) => !setting.includes(i));
        if (v)
            throwError(label, v);
    }
}
function throwError(label, v) {
    throw new Error(`${label}: "${v}" is not an acceptable value.`);
}
exports.default = validateWhitelist;
