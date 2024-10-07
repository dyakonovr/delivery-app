import { createRouter } from "@tanstack/react-router";
import {
  createDeliveryRoute,
  deliveriesHistoryRoute,
  deliveryDetailsRoute,
  homeRoute,
  loginRoute,
  profileRoute,
  rootRoute
} from "@/app/router/routes";

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  createDeliveryRoute,
  deliveriesHistoryRoute,
  deliveryDetailsRoute,
  profileRoute
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
