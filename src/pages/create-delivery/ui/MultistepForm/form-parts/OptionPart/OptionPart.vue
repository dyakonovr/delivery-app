<script setup lang="ts">
import { CustomTypography } from "@/shared/ui";
import type { DeliveryOption } from "@/entities/delivery";
import OptionItem from "./OptionItem.vue";

interface Props {
  title: string;
  options: DeliveryOption[];
}

defineProps<Props>();

// Functions
function optionClickFx(optionId: string) {
  // setValue(registerKey, optionId);
  // setStep((v) => v + 1);
}
// Functions END
</script>

<template>
  <div class="create_delivery_form_wrapper">
    <custom-typography variant="title">{{ title }}</custom-typography>
    <div class="create_delivery_form_option_wrapper">
      <template v-for="option in options" :key="option.id">
        <option-item
          :title="option.name"
          :days="option.days"
          :price="option.price"
          :type="option.type"
          @click="() => optionClickFx(option.id)"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.create_delivery_form_option_wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
</style>
