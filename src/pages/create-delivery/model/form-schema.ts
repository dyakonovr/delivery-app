import { z } from "zod";
import type { FieldPath } from "react-hook-form";
import { cyrillicRegex, latinRegex } from "@/shared/config";
import { Payer } from "@/shared/api";

const personSchema = z
  .object({
    lastname: z
      .string({ message: "Поле является обязательным" })
      .min(1, "Поле является обязательным")
      .max(60, "Длина фамилии не может превышать 60 символов"), // Фамилия
    firstname: z
      .string({ message: "Поле является обязательным" })
      .min(1, "Поле является обязательным")
      .max(60, "Длина имени не может превышать 60 символов"), // Имя
    middlename: z
      .string()
      .max(60, "Длина отчества не может превышать 60 символов")
      .optional(), // Отчество
    phone: z
      .string({ message: "Поле является обязательным" })
      .min(11, "Телефон должен состоять из 11 символов")
      .max(11, "Телефон должен состоять из 11 символов")
  })
  .refine(
    (data) =>
      (cyrillicRegex.test(data.lastname) &&
        cyrillicRegex.test(data.firstname) &&
        (!data.middlename || cyrillicRegex.test(data.middlename))) ||
      (latinRegex.test(data.lastname) &&
        latinRegex.test(data.firstname) &&
        (!data.middlename || latinRegex.test(data.middlename))),
    {
      message:
        "Имя, фамилия и отчество (при наличии) должны быть написаны либо на кириллице, либо на латинице",
      path: ["middlename"]
    }
  );

const addressSchema = z
  .object({
    apartment: z
      .string()
      .min(1, { message: "Поле является обязательным" })
      .max(100, { message: "Квартира может содержать до 100 символов" }),
    comment: z
      .string()
      .max(300, { message: "Комментарий может содержать до 300 символов" })
      .optional(),
    house: z.string(),
    street: z.string()
  })
  .refine(
    (data) =>
      (cyrillicRegex.test(data.street) &&
        cyrillicRegex.test(data.house) &&
        (!data.apartment || cyrillicRegex.test(data.apartment))) ||
      (latinRegex.test(data.street) &&
        latinRegex.test(data.house) &&
        (!data.apartment || latinRegex.test(data.apartment))),
    {
      message:
        "Улица, дом и квартира (при наличии) должны быть написаны либо на кириллице, либо на латинице",
      path: ["apartment"]
    }
  );

export const formSchema = z.object({
  receiver: personSchema,
  sender: personSchema,
  receiverAddress: addressSchema,
  senderAddress: addressSchema,
  optionTypeId: z.string(),
  payer: z.nativeEnum(Payer, { message: "Необходимо указать, кто оплатит доставку" })
});

export type CreateDeliveryFormSchema = z.infer<typeof formSchema>;
export type CreateDeliveryFormFields = FieldPath<CreateDeliveryFormSchema>;
