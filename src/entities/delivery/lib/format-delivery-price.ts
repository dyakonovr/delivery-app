/**
 * Formats a number by adding dots as thousand separators.
 *
 * @param {number} num - The number to be formatted.
 * @returns {string} - The formatted string with dots as thousand separators.
 *
 * @example
 * formatDeliveryPrice(1234567); // "1.234.567"
 */
export function formatDeliveryPrice(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
