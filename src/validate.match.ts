import { Validation } from "./util.interfaces";

function validateMatch({ label, value, match, matchLabel = "" }: Validation) {
  if (match !== undefined && match !== value) {
    throw new Error(`${label} must match "${matchLabel.toLowerCase()}".`);
  }
}

export default validateMatch;
