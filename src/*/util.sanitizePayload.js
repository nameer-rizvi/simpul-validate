const sanitized = require("sanitized");

function sanitizePayload(payload, DOMPurifyOptions, dictionary) {
  const sanitizedPayload = sanitized(payload, DOMPurifyOptions);

  for (let definition of dictionary) {
    if (definition?.ignoreSanitizer) {
      sanitizedPayload[definition.key] = payload[definition.key];
    }
  }

  return sanitizedPayload;
}

module.exports = sanitizePayload;
