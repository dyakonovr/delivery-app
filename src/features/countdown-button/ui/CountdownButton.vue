<script setup lang="ts">
import { CustomButton } from "@/shared/ui";
import { computed, watch } from "vue";
import { useCountdown } from "@/shared/hooks";

interface Props {
  delayInMs: number;
  isEnabled: boolean;
  onClick: () => void;
}

const props = defineProps<Props>();
const isEnabled = computed(() => props.isEnabled);
const delayInSec = computed(() => props.delayInMs / 1000);
const { timeLeft, start, stop, reset } = useCountdown(delayInSec);

watch(isEnabled, () => {
  if (isEnabled.value) {
    return start();
  }

  stop();
});

// Functions
function onClickFx() {
  props.onClick();
  reset();
  start();
}
// Functions END
</script>

<template>
  <custom-button
    variant="link"
    color="secondary"
    v-bind="$attrs"
    :disabled="timeLeft > 0"
    class="countdown_button"
    @click="onClickFx"
  >
    <slot :time="timeLeft" />
  </custom-button>
</template>

<style scoped>
.countdown_button:disabled {
  text-decoration: none !important;
  color: #97a1af !important;
}
</style>
