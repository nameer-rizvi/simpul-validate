const getDictionaryConfig = require("./util.getDictionaryConfig");
const validationResolver = require("./validate.index");

function isValid(
  payload,
  ignoreValidationConfigKeys = [],
  dictionary,
  validationResolverCustom
) {
  ignoreValidationConfigKeys = [
    "key",
    "label",
    "helpers",
    "ignoreIsSanitized",
    "ignoreSanitizer",
    ...ignoreValidationConfigKeys,
  ];

  const payloadKeys = Object.keys(payload);

  for (let i = payloadKeys.length - 1; i >= 0; i--) {
    let payloadKey = payloadKeys[i];

    let validationConfig = getDictionaryConfig(dictionary, payloadKey);

    if (!validationConfig)
      throw new Error(`Missing dictionary config for key: ${payloadKey}.`);

    let validationConfigKeys = Object.keys(validationConfig).filter(
      (validationConfigKey) =>
        !ignoreValidationConfigKeys.includes(validationConfigKey)
    );

    let value = payload[payloadKey];

    let label = validationConfig.label || payloadKey;

    if (value !== null && value !== undefined) {
      for (let j = 0; j < validationConfigKeys.length; j++) {
        let validationConfigKey = validationConfigKeys[j];

        let validation = { ...validationResolver, ...validationResolverCustom }[
          validationConfigKey
        ];

        if (!validation)
          throw new Error(`Missing validation: ${validationConfigKey}.`);

        let setting = validationConfig[validationConfigKey];

        let match, matchLabel;

        if (validationConfigKey === "match") {
          match = payload[setting];
          matchLabel =
            getConfigFromDictionary(dictionary, setting).label || setting;
        }

        validation({ setting, value, label, match, matchLabel });
      }

      validationResolver.isSanitized({ value, label, ...validationConfig });
    }
  }
}

module.exports = isValid;
