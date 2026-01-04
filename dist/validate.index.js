"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_blacklist_1 = __importDefault(require("./validate.blacklist"));
const validate_blacklistKeys_1 = __importDefault(require("./validate.blacklistKeys"));
// import match from "./validate.match";
// import max from "./validate.max";
// import maxArrayItem from "./validate.maxArrayItem";
// import maxLength from "./validate.maxLength";
// import maxLengthArray from "./validate.maxLengthArray";
// import maxLengthArrayItem from "./validate.maxLengthArrayItem";
// import maxLengthHTML from "./validate.maxLengthHTML";
// import maxWords from "./validate.maxWords";
// import maxWordsHTML from "./validate.maxWordsHTML";
// import min from "./validate.min";
// import minArrayItem from "./validate.minArrayItem";
// import minLength from "./validate.minLength";
// import minLengthArray from "./validate.minLengthArray";
// import minLengthArrayItem from "./validate.minLengthArrayItem";
// import minLengthHTML from "./validate.minLengthHTML";
// import minWords from "./validate.minWords";
// import minWordsHTML from "./validate.minWordsHTML";
// import regex from "./validate.regex";
// import _type from "./validate.type";
// import typeArrayItem from "./validate.typeArrayItem";
// import whitelist from "./validate.whitelist";
// import whitelistKeys from "./validate.whitelistKeys";
exports.default = {
    blacklist: validate_blacklist_1.default,
    blacklistKeys: validate_blacklistKeys_1.default,
    // match,
    // max,
    // maxArrayItem,
    // maxLength,
    // maxLengthArray,
    // maxLengthArrayItem,
    // maxLengthHTML,
    // maxWords,
    // maxWordsHTML,
    // min,
    // minArrayItem,
    // minLength,
    // minLengthArray,
    // minLengthArrayItem,
    // minLengthHTML,
    // minWords,
    // minWordsHTML,
    // regex,
    // type: _type,
    // typeArrayItem,
    // whitelist,
    // whitelistKeys,
};
