<template>
  <custom-button
    variant="text"
    color="primary"
    class="auth_button"
    @click="router.push(PagePaths.LOGIN)"
  >
    <logout-icon-svg />{{ " " }}
    {{ store.isAuth ? "Выйти" : "Войти" }}
  </custom-button>
</template>

<script setup lang="ts">
import { CustomButton } from "@/shared/ui";
import LogoutIconSvg from "../assets/logout-icon.svg";
import { useUserStore } from "@/entities/user";
import { useRouter } from "vue-router";
import { PagePaths } from "@/shared/config";

const store = useUserStore();
const router = useRouter();
</script>

<style scoped>
.auth_button {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 0 0 auto;
  font-weight: 500;
}
</style>
