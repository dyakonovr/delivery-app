import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { PagePaths } from "@/shared/config";
import { CreateDeliveryPage } from "@/pages/create-delivery";
import { PrivateRoute } from "@/widgets/private-route";

export const createDeliveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.CREATE_DELIVERY,
  component: () => (
    <PrivateRoute>
      <CreateDeliveryPage />
    </PrivateRoute>
  )
});
