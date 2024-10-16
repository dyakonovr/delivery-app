export const OTP_VALUE_LENGTH = 6;
// If the code is 6 characters => min value 10 ** (6 - 1) = 100_000;
export const MIN_OTP_VALUE = OTP_VALUE_LENGTH <= 1 ? 1 : 10 ** (OTP_VALUE_LENGTH - 1);
// If the code is 6 characters => max value 10 ** 6 - 1 = 999_999;
export const MAX_OTP_VALUE = OTP_VALUE_LENGTH <= 1 ? 1 : 10 ** OTP_VALUE_LENGTH - 1;
