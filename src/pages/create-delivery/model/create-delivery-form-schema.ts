import { z } from "zod";
import type { FieldPath } from "react-hook-form";
import { Payer } from "@/shared/api";

const personSchema = z.object({
  lastname: z
    .string({ message: "Поле является обязательным" })
    .regex(
      /^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я`-]*[a-zA-Zа-яА-Я]$/,
      "Фамилия должна содержать только буквы алфавита, ` и -"
    )
    .min(1, "Поле является обязательным")
    .max(60, "Длина фамилии не может превышать 60 символов"), // Фамилия
  firstname: z
    .string({ message: "Поле является обязательным" })
    .regex(
      /^[a-zA-Zа-яА-Я\s`'-]*(?!.*[`'-]{2})[a-zA-Zа-яА-Я\s`'-]*$/,
      "Имя должно содержать только буквы алфавита, ` и - (недопустимы несколько спец. символов подряд)"
    )
    .min(1, "Поле является обязательным")
    .max(60, "Длина имени не может превышать 60 символов"), // Имя
  middlename: z
    .string()
    .max(60, "Длина отчества не может превышать 60 символов")
    .optional(), // Отчество
  phone: z
    .string({ message: "Поле является обязательным" })
    .min(1, "Поле является обязательным")
});

const addressSchema = z.object({
  apartment: z.string(),
  comment: z.string().optional(),
  house: z.string(),
  street: z.string()
});

export const createDeliveryFormSchema = z.object({
  receiver: personSchema,
  sender: personSchema,
  receiverAddress: addressSchema,
  senderAddress: addressSchema,
  optionTypeId: z.string(),
  payer: z.nativeEnum(Payer, { message: "Необходимо указать, кто оплатит доставку" })
});

export type CreateDeliveryFormSchema = z.infer<typeof createDeliveryFormSchema>;
export type CreateDeliveryFormFields = FieldPath<CreateDeliveryFormSchema>;
