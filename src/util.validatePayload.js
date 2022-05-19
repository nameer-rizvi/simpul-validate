const getDictionaryDefinition = require("./util.getDictionaryDefinition");
const validationResolver = require("./validate.index");

function validatePayload(payload, dictionary, option) {
  const payloadKeys = Object.keys(payload);

  for (let i = payloadKeys.length - 1; i >= 0; i--) {
    let payloadKey = payloadKeys[i];

    let definition = getDictionaryDefinition(dictionary, payloadKey);

    let definitionKeys = Object.keys(definition).filter(
      (definitionKey) =>
        ![
          "key",
          "label",
          "helpers",
          "ignoreIsSanitized",
          "ignoreSanitizer",
          ...(option.ignoreDefinitionKeys || []),
        ].includes(definitionKey)
    );

    let value = payload[payloadKey];

    let label = definition.label;

    if (value !== null && value !== undefined && value !== "") {
      for (let j = 0; j < definitionKeys.length; j++) {
        let definitionKey = definitionKeys[j];

        let validation = {
          ...validationResolver,
          ...option.validationResolver,
        }[definitionKey];

        if (!validation)
          throw new Error(`Validation ("${definitionKey}") does not exist.`);

        let setting = definition[definitionKey];

        let match, matchLabel;

        if (definitionKey === "match") {
          match = payload[setting];
          matchLabel = getDictionaryDefinition(dictionary, setting).label;
        }

        validation({ setting, value, label, match, matchLabel });
      }

      validationResolver.isSanitized({ value, label, ...definition });
    }
  }
}

module.exports = validatePayload;
