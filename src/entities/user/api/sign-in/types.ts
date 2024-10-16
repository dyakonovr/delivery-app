import type { DefaultApiResponse } from "@/shared/api";
import type { User } from "@/entities/user";

export interface SignInBody {
  phone: string;
  code: number;
}

export interface SignInResponse extends DefaultApiResponse {
  user: User;
  token: string;
}
