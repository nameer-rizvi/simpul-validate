const getDictionaryDefinition = require("./util.getDictionaryDefinition");
const simpul = require("simpul");
const validationResolver = require("./validate.index");

function validatePayload(payload, dictionary, option) {
  for (let payloadKey of Object.keys(payload)) {
    let definition = getDictionaryDefinition(dictionary, payloadKey);

    let value = payload[payloadKey];

    let label = definition.label;

    if (simpul.isValid(value)) {
      for (let definitionKey of Object.keys(definition)) {
        let validation = {
          ...validationResolver,
          ...option?.validationResolver,
        }[definitionKey];

        if (validation) {
          let setting = definition[definitionKey];

          let match, matchLabel;

          if (definitionKey === "match") {
            match = payload[setting];
            matchLabel = getDictionaryDefinition(dictionary, setting).label;
          }

          validation({ setting, value, label, match, matchLabel });
        }
      }

      validationResolver.isSanitized({ value, label, ...definition });
    }
  }
}

module.exports = validatePayload;
