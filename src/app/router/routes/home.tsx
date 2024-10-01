import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.tsx";
import { HomePage } from "@/pages/home";
import { PagePaths } from "@/shared/config";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.HOME,
  component: HomePage
});
