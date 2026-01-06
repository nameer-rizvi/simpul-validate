import { ValidationOptions } from "./interfaces";
import validateMinLength from "./validate.minLength";
import simpul from "simpul";
import * as stringStripHtml from "string-strip-html";

function validateMinLengthHtml({ value, ...rest }: ValidationOptions) {
  if (simpul.isString(value)) {
    const value2 = stringStripHtml.stripHtml(value).result;
    validateMinLength({ value: value2, ...rest });
  }
}

export default validateMinLengthHtml;
