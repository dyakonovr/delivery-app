<script setup lang="ts">
import HomePageLeftColumn from "@/pages/home/ui/HomePageLeftColumn.vue";
import HomePageRightColumn from "@/pages/home/ui/HomePageRightColumn.vue";
</script>

<template>
  <main class="home_page_wrapper">
    <home-page-left-column />
    <home-page-right-column />
  </main>
</template>

<style scoped>
.home_page_wrapper {
  --vertical-offset: 108px;

  display: flex;
  gap: 50px;
  min-height: calc(100vh - 105px);
  padding: var(--vertical-offset)
    calc((100vw - var(--container-width)) / 2 + var(--container-offset))
    var(--vertical-offset) 0;
  background-image: url("../assets/img/background.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
