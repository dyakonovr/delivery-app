import * as Types from '../types.gql.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetDeliveryPackageTypesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDeliveryPackageTypesQuery = { __typename?: 'Query', getDeliveryPackageTypes: { __typename?: 'DeliveryPackageTypesResponse', reason?: string | null, success: boolean, packages: Array<{ __typename?: 'DeliveryPackageType', id: string, name: string, width: number, height: number, weight: number, length: number }> } };


export const GetDeliveryPackageTypesDocument = gql`
    query GetDeliveryPackageTypes {
  getDeliveryPackageTypes {
    packages {
      id
      name
      width
      height
      weight
      length
    }
    reason
    success
  }
}
    `;

/**
 * __useGetDeliveryPackageTypesQuery__
 *
 * To run a query within a React component, call `useGetDeliveryPackageTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeliveryPackageTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeliveryPackageTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDeliveryPackageTypesQuery(baseOptions?: Apollo.QueryHookOptions<GetDeliveryPackageTypesQuery, GetDeliveryPackageTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeliveryPackageTypesQuery, GetDeliveryPackageTypesQueryVariables>(GetDeliveryPackageTypesDocument, options);
      }
export function useGetDeliveryPackageTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeliveryPackageTypesQuery, GetDeliveryPackageTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeliveryPackageTypesQuery, GetDeliveryPackageTypesQueryVariables>(GetDeliveryPackageTypesDocument, options);
        }
export function useGetDeliveryPackageTypesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDeliveryPackageTypesQuery, GetDeliveryPackageTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDeliveryPackageTypesQuery, GetDeliveryPackageTypesQueryVariables>(GetDeliveryPackageTypesDocument, options);
        }
export type GetDeliveryPackageTypesQueryHookResult = ReturnType<typeof useGetDeliveryPackageTypesQuery>;
export type GetDeliveryPackageTypesLazyQueryHookResult = ReturnType<typeof useGetDeliveryPackageTypesLazyQuery>;
export type GetDeliveryPackageTypesSuspenseQueryHookResult = ReturnType<typeof useGetDeliveryPackageTypesSuspenseQuery>;
export type GetDeliveryPackageTypesQueryResult = Apollo.QueryResult<GetDeliveryPackageTypesQuery, GetDeliveryPackageTypesQueryVariables>;