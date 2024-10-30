import * as yup from "yup";
import { DeliveryPayer } from "@/entities/delivery";
import type { MaybeRefOrGetter } from "vue";

const personSchema = yup.object({
  lastname: yup
    .string()
    .required("Поле является обязательным")
    .min(1, "Поле является обязательным")
    .max(60, "Длина фамилии не может превышать 60 символов"), // Фамилия
  firstname: yup
    .string()
    .required("Поле является обязательным")
    .min(1, "Поле является обязательным")
    .max(60, "Длина имени не может превышать 60 символов"), // Имя
  middlename: yup
    .string()
    .max(60, "Длина отчества не может превышать 60 символов")
    .optional(), // Отчество
  phone: yup
    .string()
    .required("Поле является обязательным")
    .min(11, "Телефон должен состоять из 11 символов")
    .max(11, "Телефон должен состоять из 11 символов")
});

const addressSchema = yup.object({
  apartment: yup
    .string()
    .min(1, { message: "Поле является обязательным" })
    .max(100, { message: "Квартира может содержать до 100 символов" }),
  comment: yup
    .string()
    .max(300, { message: "Комментарий может содержать до 300 символов" })
    .optional(),
  house: yup.string(),
  street: yup.string()
});

export const createDeliveryFormSchema = yup.object({
  receiver: personSchema,
  // sender: personSchema,
  // receiverAddress: addressSchema,
  // senderAddress: addressSchema,
  // optionTypeId: yup.string().required("Поле является обязательным"),
  // payer: yup
  //   .mixed<DeliveryPayer>()
  //   .oneOf(Object.values(DeliveryPayer))
  //   .required("Необходимо указать, кто оплатит доставку")
});

export type CreateDeliveryFormSchema = yup.InferType<typeof createDeliveryFormSchema>;

// type NonNullableFieldPath<T> = T extends object
//   ? {
//       [K in Extract<keyof T, string>]-?: NonNullable<T[K]> extends object
//         ? `${K}` | `${K}.${NonNullableFieldPath<NonNullable<T[K]>>}`
//         : `${K}`;
//     }[Extract<keyof T, string>]
//   : never;
//
// export type CreateDeliveryFormKeys = MaybeRefOrGetter<CreateDeliveryFormSchema>;
