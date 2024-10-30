<script setup lang="ts">
import {
  type DeliveryOption,
  DeliveryOptionType,
  formatDeliveryPrice,
  formatDeliveryTime
} from "@/entities/delivery";
import PlaneIcon from "../../../../assets/img/icon-plane.svg";
import BusIcon from "../../../../assets/img/icon-bus.svg";
import { CustomTypography } from "@/shared/ui";

interface Props extends Pick<DeliveryOption, "price" | "days" | "type"> {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'create_delivery_form_option',
      'create_delivery_form_option_' + type.toString().toLowerCase()
    ]"
  >
    <div class="create_delivery_form_option_icon">
      <plane-icon
        v-if="type === DeliveryOptionType.EXPRESS"
        class="create_delivery_form_option_icon_img"
      />
      <bus-icon
        v-else-if="type === DeliveryOptionType.DEFAULT"
        class="create_delivery_form_option_icon_img"
      />
    </div>
    <div>
      <custom-typography
        variant="extra-small"
        tag="p"
        class="create_delivery_form_option_text first-letter-big"
      >
        {{ title }}
      </custom-typography>
      <custom-typography
        variant="regular"
        class="create_delivery_form_option_price create_delivery_form_option_text"
        tag="p"
      >
        {{ formatDeliveryPrice(price) }} &#8381;
      </custom-typography>
      <custom-typography
        variant="extra-small"
        tag="p"
        class="create_delivery_form_option_text"
      >
        {{ formatDeliveryTime(days) }}
      </custom-typography>
    </div>
  </div>
</template>

<style scoped>
.create_delivery_form_option {
  border: 1px solid;
  display: flex;
  border-radius: 24px;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
}

.create_delivery_form_option_express {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}

.create_delivery_form_option_default {
  border-color: #e3e5e5;
}

.create_delivery_form_option_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  padding: 12px;
}

.create_delivery_form_option_express .create_delivery_form_option_icon {
  background-color: var(--color-white);
}

.create_delivery_form_option_default .create_delivery_form_option_icon {
  background-color: #f3f4f6;
}

.create_delivery_form_option_express .create_delivery_form_option_text {
  color: var(--color-white) !important;
}

.create_delivery_form_option_express .create_delivery_form_option_icon_img {
  stroke: var(--color-primary);
}

.create_delivery_form_option_default .create_delivery_form_option_icon_img {
  stroke: #97a1af;
}

.create_delivery_form_option_price {
  font-size: 20px !important;
  margin: 8px 0 24px;
}
</style>
