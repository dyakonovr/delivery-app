<script setup lang="ts">
import { CustomRadioButton, CustomTypography } from "@/shared/ui";

interface Props {
  title: string;
  items: {
    label: string;
    value: string;
  }[];
}

defineProps<Props>();
</script>

<template>
  <div class="create_delivery_form_wrapper create_delivery_form_fields_container">
    <custom-typography variant="title">{{ title }}</custom-typography>
    <template v-for="item in items" :key="item.value">
      <custom-radio-button :label="item.label" :value="item.value" />
    </template>
  </div>
</template>
