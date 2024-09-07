import { z } from "zod";
import { Payer } from "@/shared/api";

const personSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  middlename: z.string(),
  phone: z.string()
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
  payer: z.nativeEnum(Payer)
});

export type CreateDeliveryFormSchema = z.infer<typeof createDeliveryFormSchema>;
