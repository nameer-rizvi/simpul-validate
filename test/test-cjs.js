const simpul_validate = require("../dist");

const dictionary = [
  { key: "foo" },
  { key: "foo_html", ignoreSanitizer: true },
  { key: "dte" },
];

const payload = { foo: "bar", foo_html: "<svg><g/onload=alert(2)//<p>" };

simpul_validate(dictionary)(payload, ["foo", "dte"]);

console.log(payload);

// const dictionary = [{ key: "foo", ignoreSanitizer: true }, { key: "bar" }];

// const payload = {
//   dte: new Date(),
//   fnc: () => {
//     console.log("damn!");
//   },
// };

// simpul_validate(dictionary)(payload, ["bar"]);

// console.log(payload);
