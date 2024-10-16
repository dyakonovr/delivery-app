<script setup lang="ts">
import { PagePaths } from "@/shared/config";
import ProfileIconSvg from "../assets/profile-icon.svg";
import HistoryIconSvg from "../assets/history-icon.svg";

// Functions
function isActive(path: string): boolean {
  // return location.href === path;
  // TODO: write this func
  return false;
}
// Functions END
</script>

<template>
  <nav>
    <ul class="header_navigation_list">
      <li>
        <router-link
          :to="PagePaths.PROFILE"
          :class="{ header_navigation_link: true, active: isActive(PagePaths.PROFILE) }"
        >
          <profile-icon-svg /> Профиль
        </router-link>
      </li>
      <li>
        <router-link
          :to="PagePaths.DELIVERIES_HISTORY"
          class="header_navigation_link"
          :class="{
            active: isActive(PagePaths.DELIVERIES_HISTORY)
          }"
        >
          <history-icon-svg /> История
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header_navigation_list {
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 0 0 0 32px;
}

.header_navigation_link {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: var(--color-black);
  font-weight: 600;
  transition: color 0.1s linear;
}

.header_navigation_link.active,
.header_navigation_link:hover {
  color: var(--color-primary);
  stroke: var(--color-primary);
}
</style>
