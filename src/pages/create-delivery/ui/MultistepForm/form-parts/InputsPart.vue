<script setup lang="ts">
import { CustomInput, CustomTypography } from "@/shared/ui";
import { inject } from "vue";
import type { FormContext, GenericObject } from "vee-validate";
// import type { CreateDeliveryFormKeys } from "@/pages/create-delivery/model";

type InputProps = InstanceType<typeof CustomInput>["$props"];
export interface MultistepFormInputField extends InputProps {
  // registerKey: CreateDeliveryFormKeys;
}

interface Props {
  title: string;
  fields: MultistepFormInputField[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="multistep_form_inputs_wrapper multistep_form_fields_container">
    <custom-typography variant="title" tag="p">
      {{ title }}
    </custom-typography>
    <template v-for="field in fields" :key="field">
      <custom-input v-bind="field" />
    </template>
  </div>
</template>

<style scoped></style>
