<script setup lang="ts">
import { CustomTypography } from "@/shared/ui";
import CheckIcon from "./icon-check.svg";

interface Props {
  label: string;
}

defineProps<Props>();

defineOptions({
  inheritAttrs: false
});
</script>

<template>
  <custom-typography variant="regular" class="radio-button" tag="label">
    <input v-bind="$attrs" type="radio" class="radio-input" />
    <span class="radio-custom"> <check-icon class="radio-custom-icon" />{{ " " }} </span>
    {{ label }}
  </custom-typography>
</template>

<style scoped>
.radio-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.radio-input {
  opacity: 0;
  position: absolute;
  left: 0;
}

.radio-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  width: 20px;
  height: 20px;
  border: 2px solid #ced2da;
  border-radius: 50%;
  margin-right: 8px;
}

.radio-input:checked + .radio-custom {
  background-color: #007bff;
  border-color: #007bff;
}

.radio-custom-icon {
  width: 10px;
  height: 10px;
  stroke-width: 5px;
  stroke: var(--color-white);
}
</style>
