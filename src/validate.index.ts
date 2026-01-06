import blacklist from "./validate.blacklist";
import blacklistKeys from "./validate.blacklistKeys";
import match from "./validate.match";
import max from "./validate.max";
import maxLength from "./validate.maxLength";
import maxLengthHtml from "./validate.maxLengthHtml";
import maxLengthValueArray from "./validate.maxLengthValueArray";
import maxLengthValueObject from "./validate.maxLengthValueObject";
import maxValueArray from "./validate.maxValueArray";
import maxValueObject from "./validate.maxValueObject";
import maxWords from "./validate.maxWords";
import maxWordsHtml from "./validate.maxWordsHtml";
import min from "./validate.min";
import minLength from "./validate.minLength";
import minLengthHtml from "./validate.minLengthHtml";
import minLengthValueArray from "./validate.minLengthValueArray";
import minLengthValueObject from "./validate.minLengthValueObject";
import minValueArray from "./validate.minValueArray";
import minValueObject from "./validate.minValueObject";
import minWords from "./validate.minWords";
import minWordsHtml from "./validate.minWordsHtml";
import regex from "./validate.regex";
import typeValidation from "./validate.type";
import typeValueArray from "./validate.typeValueArray";
import typeValueObject from "./validate.typeValueObject";
import whitelist from "./validate.whitelist";
import whitelistKeys from "./validate.whitelistKeys";

export default {
  blacklist,
  blacklistKeys,
  match,
  max,
  maxLength,
  maxLengthArray: maxLength,
  maxLengthString: maxLength,
  maxLengthHtml,
  maxLengthValueArray,
  maxLengthValueObject,
  maxValueArray,
  maxValueObject,
  maxWords,
  maxWordsHtml,
  min,
  minLength,
  minLengthArray: minLength,
  minLengthString: minLength,
  minLengthHtml,
  minLengthValueArray,
  minLengthValueObject,
  minValueArray,
  minValueObject,
  minWords,
  minWordsHtml,
  regex,
  type: typeValidation,
  typeValueArray,
  typeValueObject,
  whitelist,
  whitelistKeys,
};
