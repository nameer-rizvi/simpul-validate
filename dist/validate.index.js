"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import blacklist from "./validate.blacklist";
// import blacklistKeys from "./validate.blacklistKeys";
// import match from "./validate.match";
const validate_max_1 = __importDefault(require("./validate.max"));
const validate_maxArrayItem_1 = __importDefault(require("./validate.maxArrayItem"));
const validate_maxLength_1 = __importDefault(require("./validate.maxLength"));
const validate_maxLengthArray_1 = __importDefault(require("./validate.maxLengthArray"));
const validate_maxLengthArrayItem_1 = __importDefault(require("./validate.maxLengthArrayItem"));
const validate_maxLengthHTML_1 = __importDefault(require("./validate.maxLengthHTML"));
const validate_maxWords_1 = __importDefault(require("./validate.maxWords"));
const validate_maxWordsHTML_1 = __importDefault(require("./validate.maxWordsHTML"));
// import min from "./validate.min";
// import minLength from "./validate.minLength";
// import minLengthHTML from "./validate.minLengthHTML";
// import minWords from "./validate.minWords";
// import minWordsHTML from "./validate.minWordsHTML";
// import regex from "./validate.regex";
// import type from "./validate.type";
// import typeArrayItem from "./validate.typeArrayItem";
// import whitelist from "./validate.whitelist";
// import whitelistArray from "./validate.whitelistArray";
// import whitelistKeys from "./validate.whitelistKeys";
exports.default = {
    // blacklist,
    // blacklistKeys,
    // match,
    max: validate_max_1.default,
    maxArrayItem: validate_maxArrayItem_1.default,
    maxLength: validate_maxLength_1.default,
    maxLengthArray: validate_maxLengthArray_1.default,
    maxLengthArrayItem: validate_maxLengthArrayItem_1.default,
    maxLengthHTML: validate_maxLengthHTML_1.default,
    maxWords: validate_maxWords_1.default,
    maxWordsHTML: validate_maxWordsHTML_1.default,
    // min,
    // minLength,
    // minLengthHTML,
    // minWords,
    // minWordsHTML,
    // regex,
    // type,
    // typeArrayItem,
    // whitelist,
    // whitelistArray,
    // whitelistKeys,
};
