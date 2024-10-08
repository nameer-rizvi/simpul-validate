const simpul_validate = require("../dist");

const dictionary = [
  { key: "blacklistString", blacklist: "bar" },
  { key: "blacklistStringArray", blacklist: ["bar"] },
  { key: "blacklistStringExactString", blacklist: { exact: "BaR" } },
  { key: "blacklistStringExactArray", blacklist: { exact: ["BaR"] } },
  { key: "blacklistStringLooseString", blacklist: { loose: "BaR" } },
  { key: "blacklistStringLooseArray", blacklist: { loose: ["BaR"] } },
  { key: "blacklistArray", blacklist: "bar" },
  { key: "blacklistArrayArray", blacklist: ["bar"] },
  { key: "blacklistArrayExactString", blacklist: { exact: "BaR" } },
  { key: "blacklistArrayExactArray", blacklist: { exact: ["BaR"] } },
  { key: "blacklistArrayLooseString", blacklist: { loose: "BaR" } },
  { key: "blacklistArrayLooseArray", blacklist: { loose: ["BaR"] } },
  { key: "blacklistKeys", blacklistKeys: ["bar"] },
];

const payloadPass = {
  blacklistString: "foo",
  blacklistStringArray: "foo",
  blacklistStringExactString: "foo",
  blacklistStringExactArray: "foo",
  blacklistStringLooseString: "foo",
  blacklistStringLooseArray: "foo",
  blacklistArray: ["foo"],
  blacklistArrayArray: ["foo"],
  blacklistArrayExactString: ["foo"],
  blacklistArrayExactArray: ["foo"],
  blacklistArrayLooseString: ["foo"],
  blacklistArrayLooseArray: ["foo"],
  blacklistKeys: { foo: "bar" },
};

const payloadFail = {
  // blacklistString: "bar",
  // blacklistStringArray: "bar",
  // blacklistStringExactString: "BaR",
  // blacklistStringExactArray: "BaR",
  // blacklistStringLooseString: "bar",
  // blacklistStringLooseArray: "bar",
  // blacklistArray: ["bar"],
  // blacklistArrayArray: ["bar"],
  // blacklistArrayExactString: ["BaR"],
  // blacklistArrayExactArray: ["BaR"],
  // blacklistArrayLooseString: ["bar"],
  // blacklistArrayLooseArray: ["bar"],
  // blacklistKeys: { bar: "foo" },
};

Object.assign(payloadPass, payloadFail);

try {
  simpul_validate(dictionary)(
    payloadPass,
    dictionary.map((i) => i.key),
  );
  console.log(payloadPass);
} catch (error) {
  console.error(error);
}
