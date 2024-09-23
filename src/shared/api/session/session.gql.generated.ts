import * as Types from '../types.gql.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SessionQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SessionQuery = { __typename?: 'Query', session: { __typename?: 'SessionResponse', reason?: string | null, success: boolean, user: { __typename?: 'User', _id: string, city?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, middlename?: string | null, phone: string } } };


export const SessionDocument = gql`
    query Session {
  session {
    reason
    success
    user {
      _id
      city
      email
      firstname
      lastname
      middlename
      phone
    }
  }
}
    `;

/**
 * __useSessionQuery__
 *
 * To run a query within a React component, call `useSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionQuery(baseOptions?: Apollo.QueryHookOptions<SessionQuery, SessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
      }
export function useSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionQuery, SessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
        }
export function useSessionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SessionQuery, SessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SessionQuery, SessionQueryVariables>(SessionDocument, options);
        }
export type SessionQueryHookResult = ReturnType<typeof useSessionQuery>;
export type SessionLazyQueryHookResult = ReturnType<typeof useSessionLazyQuery>;
export type SessionSuspenseQueryHookResult = ReturnType<typeof useSessionSuspenseQuery>;
export type SessionQueryResult = Apollo.QueryResult<SessionQuery, SessionQueryVariables>;