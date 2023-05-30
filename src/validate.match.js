function validateMatch({ match, value, label, matchLabel }) {
  if (match && match !== value) {
    throw new Error(`${label} must match "${matchLabel.toLowerCase()}".`);
  }
}

module.exports = validateMatch;
