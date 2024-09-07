import type { GraphQLFormattedError } from "graphql";

export function toastGraphqlErrros(errors: readonly GraphQLFormattedError[]) {
  errors.map((error) => {
    console.error(error.message);
  });
}
