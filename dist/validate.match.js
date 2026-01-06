"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMatch({ label, value, match, matchLabel }) {
    if (match !== undefined && match !== value) {
        throw new Error(`${label} must match "${matchLabel === null || matchLabel === void 0 ? void 0 : matchLabel.toLowerCase()}".`);
    }
}
exports.default = validateMatch;
