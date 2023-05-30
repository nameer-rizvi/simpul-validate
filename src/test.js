const simpul_validate = require("./index");

const dictionary = [
  // validations...
  {
    key: "blacklist_key",
    label: "blacklist test",
    blacklist: { loose: ["other"] },
  },
  {
    key: "blacklistArray_key",
    label: "blacklistArray test",
    blacklistArray: { exact: ["other"] },
  },
  {
    key: "blacklistKeys_key",
    label: "blacklistKeys test",
    blacklistKeys: { exact: ["other"] },
  },
  {
    key: "isSanitized_key",
    label: "isSanitized test",
    type: "string",
  },
  {
    key: "match_key",
    label: "match test",
    match: "match_key2",
  },
  {
    key: "match_key2",
    label: "match test 2",
  },
  {
    key: "max_key",
    label: "max test",
    max: 3,
  },
  {
    key: "maxLength_key",
    label: "maxLength test",
    maxLength: 3,
  },
  {
    key: "maxLengthArray_key",
    label: "maxLengthArray test",
    maxLengthArray: 3,
  },
  {
    key: "maxLengthArrayItem_key",
    label: "maxLengthArrayItem test",
    maxLengthArrayItem: 3,
  },
  {
    key: "maxLengthHTML_key",
    label: "maxLengthHTML test",
    maxLengthHTML: 3,
  },
  {
    key: "maxWords_key",
    label: "maxWords test",
    maxWords: 3,
  },
  {
    key: "maxWordsHTML_key",
    label: "maxWordsHTML test",
    maxWordsHTML: 3,
  },
  {
    key: "min_key",
    label: "min test",
    min: 3,
  },
  {
    key: "minLength_key",
    label: "minLength test",
    minLength: 3,
  },
  {
    key: "minLengthHTML_key",
    label: "minLengthHTML test",
    minLengthHTML: 3,
  },
  {
    key: "minWords_key",
    label: "minWords test",
    minWords: 3,
  },
  {
    key: "minWordsHTML_key",
    label: "minWordsHTML test",
    minWordsHTML: 3,
  },
  {
    key: "regex_key_email",
    label: "regex test email",
    regex: ["email"],
  },
  {
    key: "regex_key_noSpecialChar",
    label: "regex test noSpecialChar",
    regex: ["noSpecialChar"],
  },
  {
    key: "regex_key_noWhitespace",
    label: "regex test noWhitespace",
    regex: ["noWhitespace"],
  },
  {
    key: "typeArrayItem_key",
    label: "typeArrayItem test",
    typeArrayItem: "number",
  },
  // For whitelist validations see validate.whitelist.js
  //
  // types...
  {
    key: "array_key",
    label: "array type test",
    type: "array",
  },
  {
    key: "base64_key",
    label: "base64 type test",
    type: "base64",
  },
  {
    key: "boolean_key",
    label: "boolean type test",
    type: "boolean",
  },
  {
    key: "booleanAny_key",
    label: "booleanAny type test",
    type: "booleanAny",
  },
  {
    key: "booleanNumber_key",
    label: "booleanNumber type test",
    type: "booleanNumber",
  },
  {
    key: "booleanString_key",
    label: "booleanString type test",
    type: "booleanString",
  },
  {
    key: "date_key",
    label: "date type test",
    type: "date",
  },
  {
    key: "function_key",
    label: "function type test",
    type: "function",
  },
  {
    key: "http_key",
    label: "http type test",
    type: "http",
  },
  {
    key: "json_key",
    label: "json type test",
    type: "json",
  },
  {
    key: "jsonString_key",
    label: "jsonString type test",
    type: "jsonString",
  },
  {
    key: "jwt_key",
    label: "jwt type test",
    type: "jwt",
  },
  {
    key: "number_key",
    label: "number type test",
    type: "number",
  },
  {
    key: "object_key",
    label: "object type test",
    type: "object",
  },
  {
    key: "regex_key",
    label: "regex type test",
    type: "regex",
  },
  {
    key: "string_key",
    label: "string type test",
    type: "string",
  },
  {
    key: "stringOrArray_key",
    label: "stringOrArray type test",
    type: "stringOrArray",
  },
  {
    key: "valid_key",
    label: "valid type test",
    type: "valid",
  },
];

const payload = {
  // validations...
  blacklist_key: " this that  ", // "other"
  blacklistArray_key: ["this", "that"], // "other"
  blacklistKeys_key: { this: "this_value", that: "that_value" }, // other: "other_value"
  isSanitized_key: '<img src="x">', // "<img src=x onerror=alert(1)//>"
  match_key: "this",
  match_key2: "this", // "that"
  max_key: 3, // 4
  maxLength_key: "123", // "1234"
  maxLengthArray_key: [1, 2, 3], // [1, 2, 3, 4]
  maxLengthArrayItem_key: ["123", "123", "123"], // ["123", "123", "1234"]
  maxLengthHTML_key: "<p>123</p>", // "<p>1234</p>"
  maxWords_key: " 1 2 3 ", // " 1 2 3 4"
  maxWordsHTML_key: "<p> 1 2 3 </p>", // "<p> 1 2 3 4</p>"
  min_key: 3, // 2
  minLength_key: "123", // "12"
  minLengthHTML_key: "<p>123</p>", // "<p>12</p>"
  minWords_key: " 1 2 3 ", // " 1 2  "
  minWordsHTML_key: "<p> 1 2 3 </p>", // "<p> 1 2  </p>"
  regex_key_email: "asd@asd.com", // "asd"
  regex_key_noSpecialChar: "asd_", // "asd_!"
  regex_key_noWhitespace: "asd", // "asd "
  typeArrayItem_key: ["123"], // "asd"
  // types...
  array_key: [], // "[]"
  base64_key: "MTIz", // "MTIz."
  boolean_key: false, // "123"
  booleanAny_key: "false", // "123"
  booleanNumber_key: 0, // 2
  booleanString_key: "false", // "123"
  date_key: new Date().toLocaleString(), // "invalid date"
  function_key: () => {}, // "123"
  http_key: "http://website.com", // "123"
  json_key: { key: "value" }, // ""
  jsonString_key: `{"key":"value"}`, // "undefined"
  jwt_key:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", // "asd"
  number_key: 123, // "123"
  object_key: { key: "value" }, // "123"
  regex_key: new RegExp(), // "123"
  string_key: "123", // 123
  stringOrArray_key: ["123"], // ""
  valid_key: "123", // ""
};

const required = dictionary.map((i) => i.key);

try {
  console.log(simpul_validate(dictionary)(payload, required));
} catch (error) {
  console.log(error);
}

// To test validate.whitelist.js, see file.
