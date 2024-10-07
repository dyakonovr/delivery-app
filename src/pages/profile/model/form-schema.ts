import { z } from "zod";
import type { FieldPath } from "react-hook-form";

export const profileFormSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  middlename: z.string(),
  email: z.string(),
  phone: z.string(),
  city: z.string()
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
export type ProfileFormKeys = FieldPath<ProfileFormSchema>;
