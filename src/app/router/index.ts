import { createRouter, createWebHistory } from "vue-router";
import { PagePaths } from "@/shared/config";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: PagePaths.HOME,
      component: HomePage
    },
    {
      path: PagePaths.LOGIN,
      component: LoginPage
    }
  ]
});

export default router;
