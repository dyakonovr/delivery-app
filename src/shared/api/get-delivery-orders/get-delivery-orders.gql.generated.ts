import * as Types from '../types.gql.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetDeliveryOrdersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDeliveryOrdersQuery = { __typename?: 'Query', getDeliveryOrders: { __typename?: 'DeliveryOrdersResponse', reason?: string | null, success: boolean, orders: Array<{ __typename?: 'DeliveryOrder', _id: string, status: Types.DeliveryStatus, cancellable: boolean, receiverAddress: { __typename?: 'DeliveryAddress', apartment: string, house: string, street: string } }> } };


export const GetDeliveryOrdersDocument = gql`
    query GetDeliveryOrders {
  getDeliveryOrders {
    reason
    success
    orders {
      _id
      status
      cancellable
      receiverAddress {
        apartment
        house
        street
      }
    }
  }
}
    `;

/**
 * __useGetDeliveryOrdersQuery__
 *
 * To run a query within a React component, call `useGetDeliveryOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeliveryOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeliveryOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDeliveryOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetDeliveryOrdersQuery, GetDeliveryOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeliveryOrdersQuery, GetDeliveryOrdersQueryVariables>(GetDeliveryOrdersDocument, options);
      }
export function useGetDeliveryOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeliveryOrdersQuery, GetDeliveryOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeliveryOrdersQuery, GetDeliveryOrdersQueryVariables>(GetDeliveryOrdersDocument, options);
        }
export function useGetDeliveryOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDeliveryOrdersQuery, GetDeliveryOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDeliveryOrdersQuery, GetDeliveryOrdersQueryVariables>(GetDeliveryOrdersDocument, options);
        }
export type GetDeliveryOrdersQueryHookResult = ReturnType<typeof useGetDeliveryOrdersQuery>;
export type GetDeliveryOrdersLazyQueryHookResult = ReturnType<typeof useGetDeliveryOrdersLazyQuery>;
export type GetDeliveryOrdersSuspenseQueryHookResult = ReturnType<typeof useGetDeliveryOrdersSuspenseQuery>;
export type GetDeliveryOrdersQueryResult = Apollo.QueryResult<GetDeliveryOrdersQuery, GetDeliveryOrdersQueryVariables>;