<script lang="ts" setup>
import type { CustomSelectOption } from "./types";
import { CustomTypography } from "@/shared/ui";
import { ref } from "vue";

interface Props {
  options: CustomSelectOption[];
  placeholder?: string;
  labelText?: string;
  errorMessage?: string;
  onChangeFx?: (option: CustomSelectOption) => void;
}

defineProps<Props>();
const model = defineModel();

const emit = defineEmits<{
  (e: "changeOption", option: CustomSelectOption): void;
}>();

const selectedOption = ref<CustomSelectOption | null>(null);
const isOpen = ref(false);

defineOptions({
  inheritAttrs: false
});

// Functions
function changeOption(option: CustomSelectOption) {
  selectedOption.value = option;
  model.value = option.value;
  isOpen.value = false;
  emit("changeOption", option);
}
// Functions END
</script>

<template>
  <select v-model="model" class="visually-hidden">
    <option></option>
    <template v-for="option in options" :key="option.value">
      <option :value="option.value">{{ option.label }}</option>
    </template>
    ))}
  </select>

  <div class="select" v-bind="$attrs">
    <custom-typography v-show="labelText" variant="small" class="select_label" tag="p">
      {{ labelText }}
    </custom-typography>

    <div class="select__trigger" @click="() => (isOpen = !isOpen)">
      <custom-typography variant="regular" class="select_placeholder" tag="p">
        <span v-if="$slots.icon" class="select_icon"><slot name="icon" /></span>
        {{ " " }} {{ selectedOption ? selectedOption.label : placeholder }}
      </custom-typography>
      <span class="arrow" :class="{ open: isOpen }"></span>
    </div>
    <ul v-show="isOpen" class="select__options">
      <template v-for="option in options" :key="option.value">
        <li class="select__option" @click="() => changeOption(option)">
          {{ option.label }}
        </li>
      </template>
    </ul>

    <custom-typography
      v-show="errorMessage"
      variant="small"
      tag="p"
      class="error_message"
    >
      {{ errorMessage }}
    </custom-typography>
  </div>
</template>

<style scoped>
.select {
  position: relative;
}

.select_label {
  margin: 0 0 8px;
}

.select__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ced2da;
  border-radius: 8px;
  width: 100%;
  padding: 8px 8px 8px 12px;
  background-color: var(--color-white);
  cursor: pointer;
  user-select: none;
}

.select_placeholder {
  display: flex;
  align-items: center;
}

.select_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px 0 0;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.select__options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 2px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
}

.select__option {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.select__option:hover {
  background: #f0f0f0;
}

.error_message {
  color: var(--color-error);
  margin: 4px 0 0;
}
</style>
