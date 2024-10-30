<script setup>
import { CustomContainer, CustomRadioButton, CustomTypography } from "@/shared/ui";
</script>

<template>
  <custom-container class="default-page-vertical-offsets">
    Create Delivery Page

    <!--    <inputs-part-->
    <!--      title="Title"-->
    <!--      :fields="[-->
    <!--        {-->
    <!--          labelText: 'Фамилия',-->
    <!--          placeholder: 'Фамилия'-->
    <!--        },-->
    <!--        {-->
    <!--          labelText: 'Имя',-->
    <!--          placeholder: 'Имя'-->
    <!--        },-->
    <!--        {-->
    <!--          labelText: 'Отчество',-->
    <!--          placeholder: 'Отчество (при наличии)'-->
    <!--        },-->
    <!--        {-->
    <!--          labelText: 'Номер телефона',-->
    <!--          placeholder: 'Телефон'-->
    <!--        }-->
    <!--      ]"-->
    <!--    />-->
    <custom-radio-button label="Test" name="test" />
    <custom-radio-button label="2Test" name="test" />

    <!--    <label class="radio-button">-->
    <!--      <input type="radio" class="radio-input" name="test" />-->
    <!--      Radio Button-->
    <!--    </label>-->

    <!--    <label class="radio-button">-->
    <!--      <input type="radio" class="radio-input" name="test" />-->
    <!--      Radio Button 2-->
    <!--    </label>-->
  </custom-container>
</template>

<style>
.create_delivery_form_wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.create_delivery_form_wrapper.create_delivery_form_fields_container {
  max-width: 460px;
}
</style>
