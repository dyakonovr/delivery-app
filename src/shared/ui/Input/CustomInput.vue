<script setup lang="ts">
import { CustomTypography } from "@/shared/ui";
import { computed, ref, watch } from "vue";

interface Props {
  labelText?: string;
  hintMessageText?: string;
  errorMessage?: string;
  rootClassName?: string;
  patternOnInput?: RegExp;
}

const props = defineProps<Props>();
const model = defineModel();

function onChangeHandler(event: Event) {
  const input = event.target as HTMLInputElement;
  if (
    !!props.patternOnInput &&
    input.value !== "" &&
    !props.patternOnInput.test(input.value)
  ) {
    model.value = input.value.slice(0, -1);
    return;
  }

  model.value = input.value;
}

const isError = computed(() => !!props.errorMessage);
</script>

<template>
  <div :class="['input_wrapper', rootClassName]">
    <custom-typography v-show="labelText" variant="small" tag="label" class="label">
      {{ labelText }}
    </custom-typography>

    <input
      v-model="model"
      v-bind="$attrs"
      type="text"
      class="input"
      :class="{ error: isError }"
      @input="onChangeHandler"
    />

    <custom-typography
      v-show="hintMessageText"
      variant="small"
      tag="p"
      class="hint_message"
    >
      {{ hintMessageText }}
    </custom-typography>

    <custom-typography
      v-show="errorMessage"
      variant="small"
      tag="p"
      class="error-message input_error_message"
    >
      {{ errorMessage }}
    </custom-typography>
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
