import { requestInstance } from "@/shared/api";
import type { SignInBody, SignInResponse } from "./types";

export const signIn = (json: SignInBody) =>
  requestInstance.post<SignInResponse>("users/signin", { json });
