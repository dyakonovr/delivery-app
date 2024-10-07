import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.tsx";
import { PagePaths } from "@/shared/config";
import { PrivateRoute } from "@/features/private-route";
import { ProfilePage } from "@/pages/profile";

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.PROFILE,
  component: () => (
    <PrivateRoute>
      <ProfilePage />
    </PrivateRoute>
  )
});
