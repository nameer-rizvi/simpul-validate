import { Validation } from "./util.interfaces";

function validateBlacklist({ label, setting, value }: Validation) {
  const value2 =
    typeof value === "string"
      ? value.toLowerCase()
      : Array.isArray(value)
      ? value.filter((v) => typeof v === "string").map((v) => v.toLowerCase())
      : "";

  const setting2 =
    typeof setting === "string"
      ? setting.toLowerCase()
      : Array.isArray(setting)
      ? setting.filter((i) => typeof i === "string").map((i) => i.toLowerCase())
      : "";

  if (typeof value2 === "string" && typeof setting2 === "string") {
    if (value2.includes(setting2)) throwError(label, setting2);
  } else if (typeof value2 === "string" && Array.isArray(setting2)) {
    const v = setting2.find((i2: string) => value2.includes(i2));
    if (v) throwError(label, v);
  } else if (Array.isArray(value2) && typeof setting2 === "string") {
    const v = value2.find((i2: string) => i2.includes(setting));
    if (v) throwError(label, v);
  } else if (Array.isArray(value2) && Array.isArray(setting2)) {
    const v = value2.find((i2) => setting2.includes(i2));
    if (v) throwError(label, v);
  }
}

function throwError(label: string, v: string) {
  throw new Error(`${label}: "${v}" is a reserved term.`);
}

export default validateBlacklist;
