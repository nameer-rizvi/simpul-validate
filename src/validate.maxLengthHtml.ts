import { ValidationOptions } from "./interfaces";
import validateMaxLength from "./validate.maxLength";
import simpul from "simpul";
import * as stringStripHtml from "string-strip-html";

function validateMaxLengthHtml({ value, ...rest }: ValidationOptions) {
  if (simpul.isString(value)) {
    const value2 = stringStripHtml.stripHtml(value).result;
    validateMaxLength({ value: value2, ...rest });
  }
}

export default validateMaxLengthHtml;
