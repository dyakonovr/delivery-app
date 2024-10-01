import { createRouter } from "@tanstack/react-router";
import {
  createDeliveryRoute,
  deliveriesHistoryRoute,
  deliveryDetailsRoute,
  homeRoute,
  loginRoute,
  rootRoute
} from "@/app/router/routes";

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  createDeliveryRoute,
  deliveriesHistoryRoute,
  deliveryDetailsRoute
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
