<template>
  <component :is="tag" :class="['typography', `variant_${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Tag = "div" | "span" | "h1" | "h2" | "p" | "label";
type Variant = "title" | "regular" | "small" | "extra-small";

interface Props {
  tag?: Tag;
  /**
   * title = 24px / regular = 16px / small = 14px / extra-small = 12px
   */
  variant: Variant;
}

withDefaults(defineProps<Props>(), {
  tag: "div"
});
</script>

<style scoped>
.typography {
  color: var(--color-black);
}

.typography.variant_title {
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
}

.typography.variant_regular {
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}

.typography.variant_small {
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
}

.typography.variant_extra-small {
  font-size: 12px;
  font-weight: 400;
  line-height: 133%;
}
</style>
