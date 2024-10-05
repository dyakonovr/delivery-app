import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.tsx";
import { PagePaths } from "@/shared/config";
import { CreateDeliveryPage } from "@/pages/create-delivery";
import { PrivateRoute } from "@/features/private-route";

export const createDeliveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.CREATE_DELIVERY,
  component: () => (
    <PrivateRoute>
      <CreateDeliveryPage />
    </PrivateRoute>
  )
});
