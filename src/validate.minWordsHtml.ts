import { ValidationOptions } from "./interfaces";
import validateMinWords from "./validate.minWords";
import simpul from "simpul";
import * as stringStripHtml from "string-strip-html";

function validateMinWordsHtml({ value, ...rest }: ValidationOptions) {
  if (simpul.isString(value)) {
    const value2 = stringStripHtml.stripHtml(value).result;
    validateMinWords({ value: value2, ...rest });
  }
}

export default validateMinWordsHtml;
