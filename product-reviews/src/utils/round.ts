const defaultDecimalPoint = 2;

/**
 * Rounded decimal number to number decimal points pased
 *
 * @param value value to rounded
 * @param decimals Number decimal point
 */
export const round = (
  value: number,
  decimals = defaultDecimalPoint
): number => {
  if (`${value}`.includes("e")) {
    return Number(Math.round(value));
  }

  return Number(`${Math.round(Number(`${value}e${decimals}`))}e-${decimals}`);
};
