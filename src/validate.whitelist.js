const { isString, isArray } = require("simpul");

function validateWhitelist({ setting, value, label }) {
  // STRING <--> STRING

  if (isString(setting) && isString(value) && setting !== value)
    throw new Error(`${label}: "${value}" is not an acceptable value.`);

  // STRING <--> ARRAY

  const finder = (v) => v !== setting;

  if (isString(setting) && isArray(value) && value.some(finder))
    throw new Error(
      `${label}: "${value.find(finder)}" is not an acceptable value.`
    );

  // ARRAY <--> ARRAY

  const finder2 = (v) => !setting.includes(v);

  if (isArray(setting) && isArray(value) && value.some(finder2))
    throw new Error(
      `${label}: "${value.find(finder2)}" is not an acceptable value.`
    );

  // ARRAY <--> STRING

  if (isArray(setting) && isString(value) && !setting.includes(value))
    throw new Error(`${label}: "${value}" is not an acceptable value.`);
}

module.exports = validateWhitelist;

// console.log(
//   validateWhitelist({
//     label: "STRING_STRING",
//     setting: "this",
//     value: "this",
//   }),
//   validateWhitelist({
//     label: "STRING_ARRAY",
//     setting: "this",
//     value: ["this"],
//   }),
//   validateWhitelist({
//     label: "ARRAY_ARRAY",
//     setting: ["this", "that"],
//     value: ["this", "that"],
//   }),
//   validateWhitelist({
//     label: "ARRAY_STRING",
//     setting: ["this"],
//     value: "this",
//   })
// );
