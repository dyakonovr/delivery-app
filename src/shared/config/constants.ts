// LOCAL STORAGE
export const LOCALSTORAGE_TOKEN = "token";

// API
export const API_HEADER_AUTHORIZATION = "authorization";
export const API_AUTHORIZATION_TOKEN = `Bearer ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`;
export const GRAPHQL_AUTHORIZATION_CONTEXT = {
  context: {
    headers: {
      [API_HEADER_AUTHORIZATION]: API_AUTHORIZATION_TOKEN
    }
  }
};
