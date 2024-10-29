<script setup lang="ts">
import { CustomTypography } from "@/shared/ui/index.js";
</script>

<template>
  <div class="home_page_left_column">
    <img src="../assets/img/hero-img.png" alt="Hero image" />
    <custom-typography variant="title" class="home_page_slogan">
      ЦФТ доставка - быстро, удобно, надежно!
    </custom-typography>
  </div>
</template>

<style scoped>
.home_page_left_column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  margin: 0 0 0 auto;
}

.home_page_slogan {
  max-width: 350px;
  font-size: 32px;
  color: var(--color-white);
  text-align: center;
}
</style>
