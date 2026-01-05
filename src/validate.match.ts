import { ValidationArgs } from "./interfaces";

function validateMatch({ label, value, match, matchLabel }: ValidationArgs) {
  if (match !== undefined && match !== value) {
    throw new Error(`${label} must match "${matchLabel?.toLowerCase()}".`);
  }
}

export default validateMatch;
