import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root.tsx";
import { PagePaths } from "@/shared/config";
import { DeliveriesHistoryPage } from "@/pages/history";
import { PrivateRoute } from "@/widgets/private-route";

export const deliveriesHistoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.DELIVERIES_HISTORY,
  component: () => (
    <PrivateRoute>
      <DeliveriesHistoryPage />
    </PrivateRoute>
  )
});
