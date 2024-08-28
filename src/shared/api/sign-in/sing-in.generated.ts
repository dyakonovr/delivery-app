import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SignInMutationVariables = Types.Exact<{
  phone: Types.Scalars['String']['input'];
  code: Types.Scalars['Float']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'SignInResponse', reason?: string | null, success: boolean, token: string, user: { __typename?: 'User', _id: string, city?: string | null, email?: string | null, firstname?: string | null, lastname?: string | null, middlename?: string | null, phone: string } } };


export const SignInDocument = gql`
    mutation SignIn($phone: String!, $code: Float!) {
  signin(phone: $phone, code: $code) {
    reason
    success
    token
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
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;