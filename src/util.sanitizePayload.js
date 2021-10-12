const sanitized = require("sanitized");

function sanitizePayload(payload, DOMPurifyOptions, dictionary) {
  const sanitizedPayload = sanitized(payload, DOMPurifyOptions);

  for (let i = 0; i < dictionary.length; i++) {
    if (dictionary[i] && dictionary[i].ignoreSanitizer)
      sanitizedPayload[dictionary[i].key] = payload[dictionary[i].key];
  }

  return sanitizedPayload;
}

module.exports = sanitizePayload;
