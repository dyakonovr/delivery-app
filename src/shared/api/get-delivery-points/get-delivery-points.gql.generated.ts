import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import type * as Types from "../types.gql.generated";
const defaultOptions = {} as const;
export type GetDeliveryPointsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetDeliveryPointsQuery = {
  __typename?: "Query";
  getDeliveryPoints: {
    __typename?: "DeliveryPointsResponse";
    reason?: string | null;
    success: boolean;
    points: Array<{
      __typename?: "DeliveryPoint";
      id: string;
      name: string;
      latitude: number;
      longitude: number;
    }>;
  };
};

export const GetDeliveryPointsDocument = gql`
  query GetDeliveryPoints {
    getDeliveryPoints {
      points {
        id
        name
        latitude
        longitude
      }
      reason
      success
    }
  }
`;

/**
 * __useGetDeliveryPointsQuery__
 *
 * To run a query within a React component, call `useGetDeliveryPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeliveryPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeliveryPointsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDeliveryPointsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDeliveryPointsQuery,
    GetDeliveryPointsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDeliveryPointsQuery, GetDeliveryPointsQueryVariables>(
    GetDeliveryPointsDocument,
    options
  );
}
export function useGetDeliveryPointsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDeliveryPointsQuery,
    GetDeliveryPointsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDeliveryPointsQuery, GetDeliveryPointsQueryVariables>(
    GetDeliveryPointsDocument,
    options
  );
}
export function useGetDeliveryPointsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetDeliveryPointsQuery,
    GetDeliveryPointsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetDeliveryPointsQuery, GetDeliveryPointsQueryVariables>(
    GetDeliveryPointsDocument,
    options
  );
}
export type GetDeliveryPointsQueryHookResult = ReturnType<
  typeof useGetDeliveryPointsQuery
>;
export type GetDeliveryPointsLazyQueryHookResult = ReturnType<
  typeof useGetDeliveryPointsLazyQuery
>;
export type GetDeliveryPointsSuspenseQueryHookResult = ReturnType<
  typeof useGetDeliveryPointsSuspenseQuery
>;
export type GetDeliveryPointsQueryResult = Apollo.QueryResult<
  GetDeliveryPointsQuery,
  GetDeliveryPointsQueryVariables
>;
