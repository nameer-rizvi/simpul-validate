const simpul = require("simpul");

function validateWhitelist({ setting, value, label }) {
  // STRING <--> STRING

  if (simpul.isString(setting) && simpul.isString(value) && setting !== value) {
    throw new Error(`${label}: "${value}" is not an acceptable value.`);
  }

  // STRING <--> ARRAY

  const finder = (v) => v !== setting;

  if (simpul.isString(setting) && simpul.isArray(value) && value.some(finder)) {
    const e = `${label}: "${value.find(finder)}" is not an acceptable value.`;
    throw new Error(e);
  }

  // ARRAY <--> ARRAY

  const finder2 = (v) => !setting.includes(v);

  if (simpul.isArray(setting) && simpul.isArray(value) && value.some(finder2)) {
    const e = `${label}: "${value.find(finder2)}" is not an acceptable value.`;
    throw new Error(e);
  }

  // ARRAY <--> STRING

  if (
    simpul.isArray(setting) &&
    simpul.isString(value) &&
    !setting.includes(value)
  ) {
    throw new Error(`${label}: "${value}" is not an acceptable value.`);
  }
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
