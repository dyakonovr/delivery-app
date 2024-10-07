export const cyrillicRegex = /^[\u0400-\u04FF]+$/; // Кириллица
export const latinRegex = /^[A-Za-z]+$/; // Латиница

export const onlyNumbersRegex = /^\d+$/;

export const humanNameRegex =
  /^[a-zA-Zа-яА-ЯёЁ](?!.*[ '`-]{2})[a-zA-Zа-яА-ЯёЁ '`-]*[a-zA-Zа-яА-ЯёЁ]$/;

export const streetFieldRegex =
  /^(?![ -/`':;_#,.])(?!.*[ -/`':;_#,.]$)[A-Za-z0-9 -/`':;_#,.]+$/;
