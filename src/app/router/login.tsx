import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { LoginPage } from "@/pages/login";
import { PagePaths } from "@/shared/config";

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.LOGIN,
  component: LoginPage
});
