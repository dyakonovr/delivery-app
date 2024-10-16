import type { DefaultApiResponse } from "@/shared/api";

export interface CreateOtpBody {
  phone: string;
}

export interface CreateOtpResponse extends DefaultApiResponse {
  retryDelay: number;
}
