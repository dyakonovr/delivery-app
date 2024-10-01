import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.tsx";
import { PrivateRoute } from "@/widgets/private-route";
import { PagePaths } from "@/shared/config";
import { DeliveryDetailsPage } from "@/pages/delivery-details/ui/DeliveryDetailsPage.tsx";

export const deliveryDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.DELIVERY_DETAILS,
  component: () => (
    <PrivateRoute>
      <DeliveryDetailsPage />
    </PrivateRoute>
  )
});
