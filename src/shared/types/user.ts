import type { SignInMutation } from "../api/sign-in/sing-in.generated";

export type User = SignInMutation["signin"]["user"];
