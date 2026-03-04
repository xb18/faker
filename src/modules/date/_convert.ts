/**
 * Small helper function to convert a number of years to an amount of milliseconds.
 *
 * @param years The number of years to convert to milliseconds.
 */
export function yearsToMs(years: number): number {
  return years * 365 * 24 * 3600 * 1000;
}
