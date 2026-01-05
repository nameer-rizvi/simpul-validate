"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_blacklist_1 = __importDefault(require("./validate.blacklist"));
const validate_blacklistKeys_1 = __importDefault(require("./validate.blacklistKeys"));
const validate_match_1 = __importDefault(require("./validate.match"));
const validate_max_1 = __importDefault(require("./validate.max"));
const validate_maxLength_1 = __importDefault(require("./validate.maxLength"));
const validate_maxLengthHtml_1 = __importDefault(require("./validate.maxLengthHtml"));
const validate_maxLengthValueArray_1 = __importDefault(require("./validate.maxLengthValueArray"));
const validate_maxLengthValueObject_1 = __importDefault(require("./validate.maxLengthValueObject"));
const validate_maxValueArray_1 = __importDefault(require("./validate.maxValueArray"));
const validate_maxValueObject_1 = __importDefault(require("./validate.maxValueObject"));
const validate_maxWords_1 = __importDefault(require("./validate.maxWords"));
const validate_maxWordsHtml_1 = __importDefault(require("./validate.maxWordsHtml"));
// import min from "./validate.min";
// import minArrayItem from "./validate.minArrayItem";
// import minLength from "./validate.minLength";
// import minLengthArray from "./validate.minLengthArray";
// import minLengthArrayItem from "./validate.minLengthArrayItem";
// import minLengthHtml from "./validate.minLengthHtml";
// import minWords from "./validate.minWords";
// import minWordsHtml from "./validate.minWordsHtml";
// import regex from "./validate.regex";
// import _type from "./validate.type";
// import typeArrayItem from "./validate.typeArrayItem";
// import whitelist from "./validate.whitelist";
// import whitelistKeys from "./validate.whitelistKeys";
exports.default = {
    blacklist: validate_blacklist_1.default,
    blacklistKeys: validate_blacklistKeys_1.default,
    match: validate_match_1.default,
    max: validate_max_1.default,
    maxLength: validate_maxLength_1.default,
    maxLengthArray: validate_maxLength_1.default,
    maxLengthString: validate_maxLength_1.default,
    maxLengthHtml: validate_maxLengthHtml_1.default,
    maxLengthValueArray: validate_maxLengthValueArray_1.default,
    maxLengthValueObject: validate_maxLengthValueObject_1.default,
    maxValueArray: validate_maxValueArray_1.default,
    maxValueObject: validate_maxValueObject_1.default,
    maxWords: validate_maxWords_1.default,
    maxWordsHtml: validate_maxWordsHtml_1.default,
    // min,
    // minArrayItem,
    // minLength,
    // minLengthArray,
    // minLengthArrayItem,
    // minLengthHtml,
    // minWords,
    // minWordsHtml,
    // regex,
    // type: _type,
    // typeArrayItem,
    // whitelist,
    // whitelistKeys,
};
