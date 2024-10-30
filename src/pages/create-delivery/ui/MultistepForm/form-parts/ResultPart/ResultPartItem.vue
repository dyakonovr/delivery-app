<script setup lang="ts">
import { CustomTypography } from "@/shared/ui";
import PencilIcon from "../../../../assets/img/icon-pencil.svg";

interface Props {
  title: string;
  items: {
    subtitle: string;
    value: string;
  }[];
  formStep: number;
}

defineProps<Props>();
</script>

<template>
  <div class="result_part_item">
    <div class="result_part_item_header">
      <custom-typography variant="regular" tag="p" class="result_part_item_title">
        {{ title }}
      </custom-typography>

      <pencil-icon class="result_part_item_button" />
    </div>
    <div class="result_part_item_content">
      <div v-for="item in items" :key="item.value">
        <custom-typography
          variant="extra-small"
          tag="p"
          class="result_part_item_content_title"
        >
          {{ item.subtitle }}
        </custom-typography>
        <custom-typography variant="regular" tag="p">{{ item.value }}</custom-typography>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result_part_item {
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  border-radius: 24px;
  padding: 24px 32px;
}

.result_part_item_header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.result_part_item_title {
  font-weight: 600 !important;
}

.result_part_item_button {
  stroke: #97a1af;
  cursor: pointer;
}

.result_part_item_content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 16px 0 0;
}

.result_part_item_content_title {
  color: #637083;
}
</style>
