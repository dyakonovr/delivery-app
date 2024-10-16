<script setup lang="ts">
import { CustomContainer, CustomLogo } from "@/shared/ui";
import HeaderNavigation from "./HeaderNavigation.vue";
import HeaderAuthButton from "./HeaderAuthButton.vue";
import { PagePaths } from "@/shared/config";
</script>

<template>
  <header class="header">
    <custom-container class="header_container">
      <router-link :to="PagePaths.HOME"><custom-logo /></router-link>
      <header-navigation />
      <header-auth-button />
    </custom-container>
  </header>
</template>

<style scoped>
.header {
  padding: 24px 0;
  border-bottom: 1px solid #ced2da;
}

.header_container {
  display: flex;
  align-items: center;
}
</style>
