import { randomValueFromArray } from "./arrays";
export function randomState() {
  const states = [
    "Alberta",
    "British Columbia",
    "NovaScotia",
    "Quebec",
    "Saskatchewan",
  ];
  return String(randomValueFromArray(states));
}
