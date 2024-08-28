import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import HomePage from "@/pages/home/ui/HomePage";
import { PagePaths } from "@/shared/config";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.HOME,
  component: HomePage
});
