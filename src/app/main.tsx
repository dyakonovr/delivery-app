import { StrictMode } from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { rootRoute } from "./router/root";
import { createDeliveryRoute, historyRoute, homeRoute, loginRoute } from "./router";
import "./assets/style.css";
import { apolloClient } from "./api";
import { RefreshSession } from "../widgets/refresh-session/ui/RefreshSession";

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  createDeliveryRoute,
  historyRoute
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
        <RefreshSession />
      </ApolloProvider>
    </StrictMode>
  );
}
