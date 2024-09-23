import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { PagePaths } from "@/shared/config";
import { HistoryPage } from "@/pages/history";
import { PrivateRoute } from "@/widgets/private-route";

export const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.DELIVERIES_HISTORY,
  component: () => (
    <PrivateRoute>
      <HistoryPage />
    </PrivateRoute>
  )
});
