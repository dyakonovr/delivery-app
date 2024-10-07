import { z } from "zod";
import type { FieldPath } from "react-hook-form";
import { emailPattern } from "@/pages/profile/model/form-patterns.ts";

export const profileFormSchema = z.object({
  lastname: z
    .string({ message: "Поле является обязательным" })
    .min(1, "Поле является обязательным")
    .max(60, "Длина фамилии не может превышать 60 символов"), // Фамилия
  firstname: z
    .string({ message: "Поле является обязательным" })
    .min(1, "Поле является обязательным")
    .max(60, "Длина имени не может превышать 60 символов"), // Имя
  middlename: z.string().max(60, "Длина отчества не может превышать 60 символов"), // Отчество
  email: z
    .string({ message: "Поле является обязательным" })
    .regex(emailPattern, { message: "Почта должна быть вида user@example.com" }),
  phone: z.string({ message: "Поле является обязательным" }),
  city: z
    .string({ message: "Поле является обязательным" })
    .min(1, "Поле является обязательным")
    .max(60, "Длина имени не может превышать 60 символов")
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
export type ProfileFormKeys = FieldPath<ProfileFormSchema>;
