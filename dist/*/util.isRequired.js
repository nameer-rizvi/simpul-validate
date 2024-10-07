"use strict";
// import { Object, DictionaryItem } from "./util.interfaces";
// import simpul from "simpul";
// import stringStripHtml from "string-strip-html";
// import getDictionaryDefinition from "./util.getDictionaryDefinition";
// function isRequired(
//   payload: Object,
//   dictionary: DictionaryItem[],
//   required: string[] = [],
// ): void {
//   for (const requiredKey of required) {
//     const requiredValue = payload[requiredKey];
//     const isRequiredValue = simpul.isString(requiredValue)
//       ? requiredKey.toLowerCase().includes("html") ||
//         requiredKey.toLowerCase().includes("rich_text")
//         ? stringStripHtml.stripHtml(requiredValue).result.trim().length > 0
//         : requiredValue.trim().length > 0
//       : simpul.isValid(requiredValue);
//     if (isRequiredValue === false) {
//       const def = getDictionaryDefinition(dictionary, requiredKey);
//       throw new Error(`${def.label} is required.`);
//     }
//   }
// }
// export default isRequired;
