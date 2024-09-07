import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { PagePaths } from "@/shared/config";
import { HistoryPage } from "@/pages/history";

export const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PagePaths.DELIVERIES_HISTORY,
  component: HistoryPage
});
