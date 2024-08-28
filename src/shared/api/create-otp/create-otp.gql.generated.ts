import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import type * as Types from "../../graphql/types.gql.generated";
const defaultOptions = {} as const;
export type OtpMutationVariables = Types.Exact<{
  phone: Types.Scalars["String"]["input"];
}>;

export type OtpMutation = {
  __typename?: "Mutation";
  createOtp: {
    __typename?: "OtpResponse";
    reason?: string | null;
    retryDelay: number;
    success: boolean;
  };
};

export const OtpDocument = gql`
  mutation Otp($phone: String!) {
    createOtp(phone: $phone) {
      reason
      retryDelay
      success
    }
  }
`;
export type OtpMutationFn = Apollo.MutationFunction<OtpMutation, OtpMutationVariables>;

/**
 * __useOtpMutation__
 *
 * To run a mutation, you first call `useOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpMutation, { data, loading, error }] = useOtpMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<OtpMutation, OtpMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<OtpMutation, OtpMutationVariables>(OtpDocument, options);
}
export type OtpMutationHookResult = ReturnType<typeof useOtpMutation>;
export type OtpMutationResult = Apollo.MutationResult<OtpMutation>;
export type OtpMutationOptions = Apollo.BaseMutationOptions<
  OtpMutation,
  OtpMutationVariables
>;
