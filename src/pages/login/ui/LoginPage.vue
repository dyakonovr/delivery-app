<script setup lang="ts">
import {
  CustomButton,
  CustomContainer,
  CustomInput,
  CustomTypography
} from "@/shared/ui";
import { onlyNumbersRegex } from "@/shared/config";
import { useLoginPage } from "@/pages/login/hooks";
import { CountdownButton } from "@/features/countdown-button";

const { form, isOtpShowed, isLoading, otpCountdown, sendOtpAgain, onSubmit } =
  useLoginPage();

const [phoneModel, phoneProps] = form.defineField("phone");
const [otpCodeModel, otpCodeProps] = form.defineField("otpCode");
</script>

<template>
  <custom-container class="default-page-vertical-offsets">
    <form class="login_page_wrapper" @submit="onSubmit">
      <custom-typography variant="title">Авторизация</custom-typography>
      <custom-typography variant="regular">
        Введите номер телефона для входа в личный кабинет
      </custom-typography>

      <custom-input
        v-model="phoneModel"
        v-bind="phoneProps"
        placeholder="Телефон"
        :error-message="form.errors.value.phone"
        :pattern-on-input="onlyNumbersRegex"
      />

      <custom-input
        v-show="isOtpShowed"
        v-model="otpCodeModel"
        v-bind="otpCodeProps"
        placeholder="Код"
        :error-message="form.errors.value.otpCode"
        :pattern-on-input="onlyNumbersRegex"
      />

      <custom-button
        variant="contained"
        color="primary"
        class="login_page_button"
        type="submit"
        :disabled="isLoading"
      >
        {{ !isOtpShowed ? "Продолжить" : "Войти" }}
      </custom-button>

      <countdown-button
        v-show="isOtpShowed"
        v-slot="{ time }"
        :on-click="sendOtpAgain"
        class="login_page_countdown_button"
        :delay-in-ms="otpCountdown"
        :is-enabled="isOtpShowed"
      >
        {{ time <= 0 ? "Отправить ещё раз" : `Отправить код повторно через ${time} сек` }}
      </countdown-button>
    </form>
  </custom-container>
</template>

<style scoped>
.login_page_wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 464px;
}

.login_page_button {
  max-width: 328px;
}

.login_page_countdown_button {
  align-self: baseline;
  width: fit-content;
}
</style>
