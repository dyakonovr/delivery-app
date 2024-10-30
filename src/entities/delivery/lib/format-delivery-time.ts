/**
 * Formats a delivery time by appending the appropriate suffix for Russian working days.
 *
 * @param {number} days - The number of working days.
 * @returns {string} - A string representing the delivery time with the correct day suffix in Russian.
 *
 * @example
 * formatDeliveryTime(1); // "1 рабочий день"
 * formatDeliveryTime(3); // "3 рабочих дня"
 * formatDeliveryTime(5); // "5 рабочих дней"
 * formatDeliveryTime(12); // "12 рабочих дней"
 */
export function formatDeliveryTime(days: number): string {
  let suffix: string;

  if (days % 100 >= 11 && days % 100 <= 14) {
    suffix = "рабочих дней";
  } else {
    switch (days % 10) {
      case 1:
        suffix = "рабочий день";
        break;
      case 2:
      case 3:
      case 4:
        suffix = "рабочих дня";
        break;
      default:
        suffix = "рабочих дней";
    }
  }

  return `${days} ${suffix}`;
}
