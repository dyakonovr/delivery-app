import * as yup from "yup";
import { MAX_OTP_VALUE, MIN_OTP_VALUE, OTP_VALUE_LENGTH } from "../config";

export const loginFormSchema = yup.object({
  phone: yup
    .string()
    .required("Поле является обязательным и содержит только цифры")
    .min(11, "Номер состоит из 11 символов")
    .max(11, "Номер состоит из 11 символов"),
  otpCode: yup
    .number()
    .min(MIN_OTP_VALUE, `Код должен состоять из ${OTP_VALUE_LENGTH} символов`)
    .max(MAX_OTP_VALUE, `Код должен состоять из ${OTP_VALUE_LENGTH} символов`)
    .optional()
});

export type LoginFormSchema = yup.InferType<typeof loginFormSchema>;
