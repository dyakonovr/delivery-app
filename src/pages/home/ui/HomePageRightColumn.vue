<script setup lang="ts">
import { CustomButton, CustomSelect, CustomTypography } from "@/shared/ui";
import { useHomePage } from "../hooks";
import { computed } from "vue";
import SelectIconMail from "../assets/img/select-icon-mail.svg";
import SelectIconMarker from "../assets/img/select-icon-marker.svg";
import SelectIconNavigation from "../assets/img/select-icon-navigation.svg";

const { form, deliveryPointsOptions, deliveryPackageTypesOptions, onFormSubmit } =
  useHomePage();

const isButtonDisabled = computed(
  () => !deliveryPointsOptions.value.length || !deliveryPackageTypesOptions.value.length
);

const [senderPointModel, senderPointProps] = form.defineField("senderPoint");
const [receiverPointModel, receiverPointProps] = form.defineField("receiverPoint");
const [packageModel, packageProps] = form.defineField("package");
</script>

<template>
  <div class="home_page_right_column">
    <custom-typography variant="title" class="home_page_form_title">
      Рассчитать доставку
    </custom-typography>

    <form class="home_page_form" @submit="onFormSubmit">
      <custom-select
        v-model="senderPointModel"
        v-bind="senderPointProps"
        :options="deliveryPointsOptions"
        :error-message="form.errors.value.senderPoint"
        label-text="Город отправки"
        placeholder="Выберите город отправки"
      >
        <template #icon>
          <select-icon-marker />
        </template>
      </custom-select>

      <custom-select
        v-model="receiverPointModel"
        v-bind="receiverPointProps"
        :options="deliveryPointsOptions"
        :error-message="form.errors.value.receiverPoint"
        label-text="Город назначения"
        placeholder="Выберите город назначения"
      >
        <template #icon><select-icon-navigation /></template>
      </custom-select>

      <custom-select
        v-model="packageModel"
        v-bind="packageProps"
        :options="deliveryPackageTypesOptions"
        :error-message="form.errors.value.package"
        placeholder="Выберите размер"
        label-text="Размер посылки"
      >
        <template #icon><select-icon-mail /></template>
      </custom-select>

      <custom-button
        color="primary"
        variant="contained"
        type="submit"
        :disabled="isButtonDisabled"
      >
        Рассчитать
      </custom-button>
    </form>
  </div>
</template>

<style scoped>
.home_page_right_column {
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-radius: 24px;
  height: fit-content;
  padding: 32px 72px;
  background-color: var(--color-white);

  max-width: 500px;
  width: 100%;
}

.home_page_form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
