import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { loginFormSchema, type LoginFormSchema } from "../model/login-schema";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { useOtpMutation, useSignInMutation } from "@/shared/api";
import { useUserStore } from "@/entities/user/model";
import { toastGraphqlErrros } from "@/shared/lib";
import { LOCALSTORAGE_TOKEN, PagePaths } from "@/shared/config";

interface UseLoginPage {
  otpCountdown: number;
  isLoading: boolean;
  isOtpShowed: boolean;
  formErrors: FieldErrors<LoginFormSchema>;
  register: UseFormRegister<LoginFormSchema>;
  onFormSubmit: () => unknown;
  sendOtpAgain: () => void;
}

export const useLoginPage = (): UseLoginPage => {
  const navigate = useNavigate();

  const { setUser } = useUserStore();

  const [isLoading, setIsLoading] = useState(false);
  const [isOtpShowed, setIsOtpShowed] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(-1);

  const { formState, register, handleSubmit, getValues } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange"
  });

  const [createOtp] = useOtpMutation();
  const [signInMutation] = useSignInMutation();

  // Functions
  async function onSubmit(data: LoginFormSchema) {
    try {
      setIsLoading(true);

      if (!isOtpShowed && !data.otpCode && data.phone)
        return await sendPhone(data.phone.toString());
      else if (isOtpShowed && data.otpCode)
        return await signIn(data.phone.toString(), data.otpCode);

      throw new Error("Unexpected error on submit login form!");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function sendPhone(phone: string) {
    try {
      const response = await createOtp({
        variables: { phone }
      });
      if (response.errors) return toastGraphqlErrros(response.errors);
      if (!response.data) throw new Error("Unexpected error!");

      setIsOtpShowed(true);
      setOtpCountdown(response.data.createOtp.retryDelay);
    } catch (error) {
      console.error("Send OTP code error:", error);
    }
  }

  async function signIn(phone: string, otpCode: number) {
    try {
      const response = await signInMutation({
        variables: { phone, code: otpCode }
      });
      if (response.errors) return toastGraphqlErrros(response.errors);
      if (!response.data) throw new Error("Unexpected error!");

      setUser(response.data.signin.user);
      localStorage.setItem(LOCALSTORAGE_TOKEN, response.data.signin.token);
      navigate({ to: PagePaths.HOME });
    } catch (error) {
      console.error("Sign in error:", error);
    }
  }

  async function sendOtpAgain() {
    const phone = getValues("phone").toString();
    if (!phone) return;

    sendPhone(phone);
  }
  // Functions END

  return {
    otpCountdown,
    isLoading,
    isOtpShowed,
    formErrors: formState.errors,
    register,
    onFormSubmit: handleSubmit(onSubmit),
    sendOtpAgain
  };
};
