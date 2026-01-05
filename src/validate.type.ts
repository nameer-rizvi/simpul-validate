import { ValidationArgs } from "./interfaces";
import simpul from "simpul";

const resolver = {
  array: simpul.isArray,
  arrayNonEmpty: simpul.isArrayNonEmpty,
  arrayOrString: simpul.isArrayOrString,
  base64: simpul.isBase64,
  boolean: simpul.isBoolean,
  booleanAny: simpul.isBooleanAny,
  booleanNumber: simpul.isBooleanNumber,
  booleanString: simpul.isBooleanString,
  creditCardNumber: simpul.isCreditCardNumber,
  date: simpul.isDate,
  email: simpul.isEmail,
  error: simpul.isError,
  function: simpul.isFunction,
  http: simpul.isHTTP,
  json: simpul.isJSON,
  jsonString: simpul.isJSONString,
  jwt: simpul.isJWT,
  module: simpul.isModule,
  number: simpul.isNumber,
  numberString: simpul.isNumberString,
  numberValid: simpul.isNumberValid,
  numeric: simpul.isNumeric,
  object: simpul.isObject,
  objectNonEmpty: simpul.isObjectNonEmpty,
  phoneNumber: simpul.isPhoneNumber,
  regex: simpul.isRegex,
  string: simpul.isString,
  stringNonEmpty: simpul.isStringNonEmpty,
  stringOrArray: simpul.isStringOrArray,
  stringSafe: simpul.isStringSafe,
  url: simpul.isURL,
  valid: simpul.isValid,
} as const;

function validateType({ label, setting, value }: ValidationArgs) {
  if (simpul.isString(setting)) {
    const guard = resolver[setting as keyof typeof resolver];
    if ((!guard && typeof value !== setting) || !guard(value)) {
      throw new Error(`${label} is not type: ${setting}.`);
    }
  }
}

export default validateType;
