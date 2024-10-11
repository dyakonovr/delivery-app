<template>
  <app-header />
  <router-view />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { AppHeader } from "@/widgets/header";
</script>
