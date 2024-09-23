import * as Types from '../types.gql.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CalculateDeliveryMutationVariables = Types.Exact<{
  package: Types.CalculateDeliveryPackageDto;
  receiverPoint: Types.CalculateDeliveryPointDto;
  senderPoint: Types.CalculateDeliveryPointDto;
}>;


export type CalculateDeliveryMutation = { __typename?: 'Mutation', calculateDelivery: { __typename?: 'CalculateDeliveryResponse', reason?: string | null, success: boolean, options: Array<{ __typename?: 'DeliveryOption', days: number, id: string, name: string, price: number, type: Types.DeliveryOptionType }> } };


export const CalculateDeliveryDocument = gql`
    mutation CalculateDelivery($package: CalculateDeliveryPackageDto!, $receiverPoint: CalculateDeliveryPointDto!, $senderPoint: CalculateDeliveryPointDto!) {
  calculateDelivery(
    package: $package
    receiverPoint: $receiverPoint
    senderPoint: $senderPoint
  ) {
    options {
      days
      id
      name
      price
      type
    }
    reason
    success
  }
}
    `;
export type CalculateDeliveryMutationFn = Apollo.MutationFunction<CalculateDeliveryMutation, CalculateDeliveryMutationVariables>;

/**
 * __useCalculateDeliveryMutation__
 *
 * To run a mutation, you first call `useCalculateDeliveryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCalculateDeliveryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [calculateDeliveryMutation, { data, loading, error }] = useCalculateDeliveryMutation({
 *   variables: {
 *      package: // value for 'package'
 *      receiverPoint: // value for 'receiverPoint'
 *      senderPoint: // value for 'senderPoint'
 *   },
 * });
 */
export function useCalculateDeliveryMutation(baseOptions?: Apollo.MutationHookOptions<CalculateDeliveryMutation, CalculateDeliveryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CalculateDeliveryMutation, CalculateDeliveryMutationVariables>(CalculateDeliveryDocument, options);
      }
export type CalculateDeliveryMutationHookResult = ReturnType<typeof useCalculateDeliveryMutation>;
export type CalculateDeliveryMutationResult = Apollo.MutationResult<CalculateDeliveryMutation>;
export type CalculateDeliveryMutationOptions = Apollo.BaseMutationOptions<CalculateDeliveryMutation, CalculateDeliveryMutationVariables>;