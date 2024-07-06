/**
 * Normalize enum key text
 *
 * @description Separate text by spaces and capitalize first letter
 * @param text - text to normalize
 * @returns normalized text
 */
export const normalizeEnumKeyText = (text: string) => {
  return text
    .split("")
    .map((char, index) => {
      if (index === 0) {
        return char.toUpperCase();
      }

      if (char === "-") {
        return " ";
      }

      return char;
    })
    .join("");
};
