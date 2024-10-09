import { Validation } from "./util.interfaces";
import simpul from "simpul";

const resolver = {
  array: simpul.isArray,
  base64: simpul.isBase64,
  boolean: simpul.isBoolean,
  booleanAny: simpul.isBooleanAny,
  booleanNumber: simpul.isBooleanNumber,
  booleanString: simpul.isBooleanString,
  creditCard: simpul.isCreditCardNumber,
  date: simpul.isDate,
  email: simpul.isEmail,
  function: simpul.isFunction,
  http: simpul.isHTTP,
  json: simpul.isJSON,
  jsonString: simpul.isJSONString,
  jwt: simpul.isJWT,
  module: simpul.isModule,
  number: simpul.isNumber,
  object: simpul.isObject,
  phoneNumber: simpul.isPhoneNumber,
  regex: simpul.isRegex,
  string: simpul.isString,
  stringOrArray: simpul.isStringOrArray,
  url: simpul.isURL,
  valid: simpul.isValid,
} as { [key: string]: Function };

function validateType({ label, setting, value }: Validation) {
  const error = `${label} is not type: ${setting}.`;
  if (resolver[setting]) {
    if (!resolver[setting](value)) throw new Error(error);
  } else if (typeof value !== setting) {
    throw new Error(error);
  }
}

export default validateType;
