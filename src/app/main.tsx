import { StrictMode } from "react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { rootRoute } from "./router/root";
import { homeRoute, loginRoute } from "./router";
import "./assets/style.css";
import { apolloClient } from "./apollo";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

const routeTree = rootRoute.addChildren([homeRoute, loginRoute]);

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
      </ApolloProvider>
    </StrictMode>
  );
}
