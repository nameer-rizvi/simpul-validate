import { Object, DictionaryItem } from "./util.interfaces";
import getDictionaryDefinition from "./util.getDictionaryDefinition";
import sanitized from "sanitized";

function sanitize(
  payload: Object,
  dictionary: DictionaryItem[],
  domPurifyOptions: Object = {},
): void {
  for (const key of Object.keys(payload)) {
    if (getDictionaryDefinition(dictionary, key).ignoreSanitizer !== true) {
      payload[key] = sanitized(payload[key], domPurifyOptions);
    }
  }
}

export default sanitize;
