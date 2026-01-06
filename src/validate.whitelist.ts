import { ValidationOptions } from "./interfaces";
import simpul from "simpul";

function validateWhitelist({ label, setting, value }: ValidationOptions) {
  const values = normalize(value);
  const settings = normalize(setting);
  for (const v of values) {
    if (!settings.includes(v)) {
      throw new Error(`${label}: "${v}" is not an acceptable value.`);
    }
  }
}

function normalize(input: unknown): string[] {
  if (simpul.isString(input)) {
    return [input.toLowerCase()];
  } else if (simpul.isArray(input)) {
    const list: string[] = [];
    for (const item of input.flat())
      if (simpul.isString(item)) list.push(item.toLowerCase());
    return list;
  } else if (simpul.isObject(input)) {
    const list: string[] = [];
    for (const value of Object.values(input).flat())
      if (simpul.isString(value)) list.push(value.toLowerCase());
    return list;
  } else {
    return [];
  }
}

export default validateWhitelist;
