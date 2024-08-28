import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BACKEND_URL } from "@/shared/config";

export const apolloClient = new ApolloClient({
  uri: BACKEND_URL,
  cache: new InMemoryCache()
});
