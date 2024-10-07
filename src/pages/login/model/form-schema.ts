import { z } from "zod";
import { MAX_OTP_VALUE, MIN_OTP_VALUE, OTP_VALUE_LENGTH } from "../config/constants";

export const loginFormSchema = z.object({
  phone: z
    .number({ message: "Поле является обязательным" })
    .positive()
    .min(1, "Поле является обязательным"),
  otpCode: z
    .number({ message: `Поле является обязательным` })
    .positive()
    .min(MIN_OTP_VALUE, `Код должен состоять из ${OTP_VALUE_LENGTH} символов`)
    .max(MAX_OTP_VALUE, `Код должен состоять из ${OTP_VALUE_LENGTH} символов`)
    .optional()
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
