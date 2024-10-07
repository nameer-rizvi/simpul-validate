import { Object, DictionaryItem } from "./util.interfaces";
import simpul from "simpul";
import * as stringStripHtml from "string-strip-html";
import getDictionaryDefinition from "./util.getDictionaryDefinition";

function isRequired(
  payload: Object,
  dictionary: DictionaryItem[],
  required: string[] = [],
): void {
  for (const key of required) {
    const value = payload[key];

    const isValue = simpul.isString(value)
      ? key.toLowerCase().includes("html") ||
        key.toLowerCase().includes("rich_text")
        ? stringStripHtml.stripHtml(value).result.trim().length > 0
        : value.trim().length > 0
      : simpul.isValid(value);

    if (isValue === false) {
      const label = getDictionaryDefinition(dictionary, key).label;

      throw new Error(`${label} is required.`);
    }
  }
}

export default isRequired;
