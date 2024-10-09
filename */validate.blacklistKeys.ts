import { Validation } from "./util.interfaces";
import validateBlacklist from "./validate.blacklist";

function validateBlacklistKeys(props: Validation) {
  validateBlacklist({ ...props, value: Object.keys(props.value) });
}

export default validateBlacklistKeys;
