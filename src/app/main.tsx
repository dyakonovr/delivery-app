import { StrictMode } from "react";
import { RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import "./assets/style.css";
import { apolloClient } from "./api";
import { router } from "./router";
import { RefreshSession } from "@/widgets/refresh-session";

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
