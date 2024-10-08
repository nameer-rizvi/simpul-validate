"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateMatch({ label, value, match, matchLabel = "" }) {
    if (match && match !== value) {
        throw new Error(`${label} must match "${matchLabel.toLowerCase()}".`);
    }
}
exports.default = validateMatch;
