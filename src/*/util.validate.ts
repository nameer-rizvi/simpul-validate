// import { Object, DictionaryItem } from "./util.interfaces";
// // const getDictionaryDefinition = require("./util.getDictionaryDefinition");
// // const simpul = require("simpul");
// // const validationResolver = require("./validate.index");

// function validate(
// 	payload: Object,
// 	dictionary: DictionaryItem[],
// 	option?: Object,
// ): void {}

// // function validatePayload(payload, dictionary, option) {
// //   for (const payloadKey of Object.keys(payload)) {
// //     const definition = getDictionaryDefinition(dictionary, payloadKey);
// //     const value = payload[payloadKey];
// //     const label = definition.label;
// //     if (!simpul.isValid(value)) continue; // "hasRequiredValues" handles keys that require values.
// //     for (const definitionKey of Object.keys(definition)) {
// //       const validation = {
// //         ...validationResolver,
// //         ...option?.validationResolver,
// //       }[definitionKey];
// //       if (validation) {
// //         const setting = definition[definitionKey];
// //         let match, matchLabel;
// //         if (definitionKey === "match") {
// //           match = payload[setting];
// //           matchLabel = getDictionaryDefinition(dictionary, setting).label;
// //         }
// //         validation({ setting, value, label, match, matchLabel });
// //       }
// //     }
// //     validationResolver.isSanitized({ value, label, ...definition });
// //   }
// // }

// export default validate;
