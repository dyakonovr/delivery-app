<script lang="ts" setup>
import { computed, type InjectionKey, provide, ref } from "vue";
import type { MultistepFormInputField } from "./form-parts/InputsPart.vue";
import { OptionPart, InputsPart, RadioButtonsPart, ResultPart } from "./form-parts";
import type { DeliveryOption } from "@/entities/delivery";
import { CustomButton } from "@/shared/ui";
import { type FormContext, type GenericObject, useForm } from "vee-validate";
import { createDeliveryFormSchema } from "../../model";

type InputsPartProps = {
  type: "inputs";
  title: string;
  fields: MultistepFormInputField[];
  key: string;
};

type OptionsPartProps = {
  type: "options";
  title: string;
  // registerKey: CreateDeliveryFormFields;
  options: DeliveryOption[];
  key: string;
};

type RadioButtonsPartProps = {
  type: "radio";
  title: string;
  items: {
    label: string;
    value: string;
  }[];
  // registerKey: CreateDeliveryFormFields;
  key: string;
};

type ResultPartProps = {
  type: "result";
  title: string;
  blocks: {
    title: string;
    items: {
      subtitle: string;
      value: string;
    }[];
    formStep: number;
  }[];
  key: string;
};

export type MultistepFormScreens = (
  | InputsPartProps
  | OptionsPartProps
  | RadioButtonsPartProps
  | ResultPartProps
)[];

export type MultistepFormProps = {
  screens: MultistepFormScreens;
  submitForm: () => void;
  isDialogShowed: boolean;
  onDialogClose?: () => void;
  onDialogSubmit?: () => void;
};

const props = defineProps<MultistepFormProps>();

const minStep = 1;
const maxStep = props.screens.length;
const step = ref(minStep);

const screen = computed(() => props.screens[step.value - 1]);

const form = useForm({
  validationSchema: createDeliveryFormSchema
});

provide("form", form);

// Functions
function prevButtonClick(v: number) {
  step.value = Math.max(minStep, v - 1);
}

async function nextButtonClick() {
  if (screen.value.type === "options") return;
  if (screen.value.type === "result") return props.submitForm();

  // const fields =
  //   screen.value.type === "inputs"
  //     ? screen.value.fields.map((el) => el.registerKey)
  //     : screen.value.registerKey;
  //
  // const formStepIsValid = await trigger(fields, {
  //   shouldFocus: true
  // });
  //
  // if (!formStepIsValid) return;
  // setStep(step.value + 1);

  step.value = Math.max(props.screens.length - 1, step.value + 1);
}
// Functions END
</script>

<template>
  <option-part
    v-if="screen.type === 'options'"
    :title="screen.title"
    :options="screen.options"
  />

  <inputs-part
    v-else-if="screen.type === 'inputs'"
    :title="screen.title"
    :fields="screen.fields"
  />

  <radio-buttons-part
    v-else-if="screen.type === 'radio'"
    :title="screen.title"
    :items="screen.items"
  />

  <result-part
    v-else
    :title="screen.title"
    :blocks="screen.blocks"
    :is-dialog-showed="isDialogShowed"
  />

  <div class="create_delivery_buttons_wrapper">
    <custom-button
      v-show="step != minStep"
      variant="contained"
      color="secondary"
      class="create_delivery_button"
      @click="prevButtonClick"
    >
      Назад
    </custom-button>

    <custom-button
      v-show="screen.type !== 'options'"
      variant="contained"
      color="primary"
      class="create_delivery_button"
      type="button"
      @click="nextButtonClick"
    >
      {{ step !== maxStep ? "Продолжить" : "Отправить" }}
    </custom-button>
  </div>
</template>

<style>
.create_delivery_form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.create_delivery_form_wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.create_delivery_form_wrapper.create_delivery_form_fields_container {
  max-width: 460px;
}

.create_delivery_buttons_wrapper {
  display: flex;
  align-items: center;
  gap: 24px;
}

.create_delivery_button {
  max-width: 220px;
  width: 100%;
}
</style>
