import * as yup from "yup";

export const homeFormSchema = yup.object({
  senderPoint: yup.string().required("Поле является обязательным"),
  receiverPoint: yup.string().required("Поле является обязательным"),
  package: yup
    .string()
    .required("Поле является обязательным")
    .min(1, "Поле является обязательным")
});

export type HomeFormSchema = yup.InferType<typeof homeFormSchema>;
