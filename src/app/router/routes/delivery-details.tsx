import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.tsx";
import { PrivateRoute } from "@/features/private-route";
import { PagePaths } from "@/shared/config";
import { DeliveryDetailsPage } from "@/pages/delivery-details";

export const deliveryDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.DELIVERY_DETAILS,
  component: () => (
    <PrivateRoute>
      <DeliveryDetailsPage />
    </PrivateRoute>
  )
});
