import { requestInstance } from "@/shared/api";
import type { CreateOtpBody, CreateOtpResponse } from "./types";

export const createOtp = (json: CreateOtpBody) =>
  requestInstance.post<CreateOtpResponse>("auth/otp", { json });
