import { z } from "zod";

export const homeFormSchema = z.object({
  senderPoint: z.string(),
  receiverPoint: z.string(),
  package: z
    .string({ message: "Поле является обязательным" })
    .min(1, "Поле является обязательным")
});

export type HomeFormSchema = z.infer<typeof homeFormSchema>;
