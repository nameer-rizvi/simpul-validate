import { ValidationOptions } from "./interfaces";

function validateMatch({ label, value, match, matchLabel }: ValidationOptions) {
  if (match !== undefined && match !== value) {
    throw new Error(`${label} must match "${matchLabel?.toLowerCase()}".`);
  }
}

export default validateMatch;
