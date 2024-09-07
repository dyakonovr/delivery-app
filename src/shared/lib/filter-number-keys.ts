import type { KeyboardEvent } from "react";

const allowedKeys = [
  "Backspace",
  "Delete",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Tab",
  "Enter"
];

/**
 * Handles a keyboard event by allowing only certain keys and digits.
 * If the pressed key is not in the list of allowed keys or is not a digit, the event is prevented.
 *
 * @param {KeyboardEvent} event - The keyboard event to handle.
 */

export function filterNumberKeys(event: KeyboardEvent<HTMLInputElement>): void {
  if (allowedKeys.includes(event.key) || /[0-9]/.test(event.key)) return;
  event.preventDefault();
}
