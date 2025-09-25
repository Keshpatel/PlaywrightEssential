export function randomValueFromArray(array: String[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
