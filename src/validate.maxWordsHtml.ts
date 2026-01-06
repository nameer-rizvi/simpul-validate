import { ValidationOptions } from "./interfaces";
import validateMaxWords from "./validate.maxWords";
import simpul from "simpul";
import * as stringStripHtml from "string-strip-html";

function validateMaxWordsHtml({ value, ...rest }: ValidationOptions) {
  if (simpul.isString(value)) {
    const value2 = stringStripHtml.stripHtml(value).result;
    validateMaxWords({ value: value2, ...rest });
  }
}

export default validateMaxWordsHtml;
