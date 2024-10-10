<script setup lang="ts">
import { CustomTypography } from "@/shared/ui";

interface Props {
  labelText?: string;
  hintMessageText?: string;
  errorMessage?: string;
  rootClassName?: string;
  patternOnInput?: RegExp;
}

const { labelText, hintMessageText, errorMessage, patternOnInput, rootClassName } =
  defineProps<Props>();
const isError = !!errorMessage;
</script>

<template>
  <div :class="['input_wrapper', rootClassName]">
    <CustomTypography v-show="labelText" variant="small" tag="label" :class="['label']">
      {{ labelText }}
    </CustomTypography>

    <input type="text" :class="['input', isError && 'error']" />

    <CustomTypography
      v-show="hintMessageText"
      variant="small"
      tag="p"
      :class="['hint_message']"
    >
      {{ hintMessageText }}
    </CustomTypography>

    <CustomTypography
      v-show="errorMessage"
      variant="small"
      tag="p"
      :class="['error-message', 'input_error_message']"
    >
      {{ errorMessage }}
    </CustomTypography>
  </div>
</template>

<style scoped>
.input_wrapper {
  display: flex;
  flex-direction: column;
}

.input {
  --border-color: #ced2da;
  --hover-border-color: #97a1af;
  --focus-border-color: #4c94ff;

  --disabled-bg-color: #f3f4f6;

  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 8px 12px 12px;
  background-color: var(--color-white);
  font-size: 16px;
  color: #141c24;
  outline: none;
  transition:
    border-color 0.1s ease-in-out,
    background-color 0.1s ease-in-out;

  &:hover {
    border-color: var(--hover-border-color);
  }

  &:focus {
    border-color: var(--focus-border-color);
  }

  &:disabled {
    pointer-events: none;
    background-color: var(--disabled-bg-color);
  }
}

.input.error {
  border-color: var(--color-error);
}

.label {
  margin: 0 0 6px;
}

.hint_message {
  --color: #637083;

  color: var(--color);
  margin: 4px 0 0;
}

.input_error_message {
  margin: 4px 0 0;
}
</style>
