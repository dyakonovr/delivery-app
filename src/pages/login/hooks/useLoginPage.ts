import { loginFormSchema, type LoginFormSchema } from "../model";
import { type Ref, ref } from "vue";
import { createOtp, signIn, useUserStore } from "@/entities/user";
import { LOCALSTORAGE_AUTH_TOKEN, PagePaths } from "@/shared/config";
import { useRouter } from "vue-router";
import { type FormContext, useForm } from "vee-validate";
import { wait } from "@/shared/utils";

interface UseLoginPage {
  form: FormContext<LoginFormSchema>;
  otpCountdown: Ref<number>;
  isLoading: Ref<boolean>;
  isOtpShowed: Ref<boolean>;
  onSubmit: () => void;
  sendOtpAgain: () => void;
}

export const useLoginPage = (): UseLoginPage => {
  const isOtpShowed = ref(false);
  const isLoading = ref(false);
  const otpCountdown = ref(-1); // ms

  const form = useForm<LoginFormSchema>({
    validationSchema: loginFormSchema
  });

  const userStore = useUserStore();

  const router = useRouter();

  // Functions
  async function onSubmit(data: LoginFormSchema) {
    try {
      isLoading.value = true;

      if (!isOtpShowed.value && !data.otpCode && data.phone)
        return await sendPhoneFx(data.phone);
      else if (isOtpShowed.value && data.otpCode)
        return await signInFx(data.phone, data.otpCode);

      throw new Error("Unexpected error on submit login form!");
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }

  async function sendPhoneFx(phone: string) {
    try {
      const response = await createOtp({ phone }).json();
      if (!response.success) throw new Error("Unexpected error!");

      isOtpShowed.value = true;
      otpCountdown.value = response.retryDelay;
    } catch (error) {
      console.error("Send OTP code error:", error);
    }
  }

  async function signInFx(phone: string, code: number) {
    try {
      const response = await signIn({ phone, code }).json();
      if (!response.success) throw new Error("Unexpected error!");

      userStore.setUser(response.user);
      localStorage.setItem(LOCALSTORAGE_AUTH_TOKEN, response.token);
      await router.push({ path: PagePaths.HOME });
    } catch (error) {
      console.error("Sign in error:", error);
    }
  }

  async function sendOtpAgain() {
    const phone = form.values.phone;
    if (!phone) return;

    await sendPhoneFx(phone);
  }
  // Functions END

  return {
    form,
    isLoading,
    isOtpShowed,
    otpCountdown,
    onSubmit: form.handleSubmit(onSubmit),
    sendOtpAgain
  };
};
