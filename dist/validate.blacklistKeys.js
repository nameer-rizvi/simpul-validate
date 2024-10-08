"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_blacklist_1 = __importDefault(require("./validate.blacklist"));
function validateBlacklistKeys(props) {
    (0, validate_blacklist_1.default)(Object.assign(Object.assign({}, props), { value: Object.keys(props.value) }));
}
exports.default = validateBlacklistKeys;
