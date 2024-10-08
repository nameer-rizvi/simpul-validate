const simpul_validate = require("../dist");

const dictionary = [
  { key: "foo" },
  { key: "foo_html", ignoreSanitizer: false, ignoreSanitizerValidation: true },
  { key: "dte" },
];

const payload = {
  foo: "bar",
  foo_html: "<svg><g/onload=alert(2)//<p>",
  dte: new Date(),
};

simpul_validate(dictionary)(payload, ["dte"]);

console.log({ payload });
