const sanitizer = require("sanitized");

function sanitized(payload, DOMPurifyOptions, dictionary) {
  const sanitizedPayload = sanitizer(payload, DOMPurifyOptions);

  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i].ignoreSanitizer)
      sanitizedPayload[dictionary[i].key] = payload[dictionary[i].key];
  }

  return sanitizedPayload;
}

module.exports = sanitized;
