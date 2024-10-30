import { createRouter, createWebHistory } from "vue-router";
import { PagePaths } from "@/shared/config";
import { HomePage } from "@/pages/home";
import { LoginPage } from "@/pages/login";
import { CreateDeliveryPage } from "@/pages/create-delivery";

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
    },
    {
      path: PagePaths.CREATE_DELIVERY,
      component: CreateDeliveryPage
    }
  ]
});

export default router;
