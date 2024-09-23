import * as Types from '../types.gql.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateDeliveryOrderMutationVariables = Types.Exact<{
  option: Types.CreateDeliveryOrderDeliveryOptionDto;
  payer: Types.Payer;
  receiver: Types.CreateDeliveryOrderPersonDto;
  receiverAddress: Types.CreateDeliveryOrderAddressDto;
  receiverPoint: Types.CreateDeliveryOrderPointDto;
  sender: Types.CreateDeliveryOrderPersonDto;
  senderAddress: Types.CreateDeliveryOrderAddressDto;
  senderPoint: Types.CreateDeliveryOrderPointDto;
}>;


export type CreateDeliveryOrderMutation = { __typename?: 'Mutation', createDeliveryOrder: { __typename?: 'DeliverResponse', success: boolean, reason?: string | null } };


export const CreateDeliveryOrderDocument = gql`
    mutation CreateDeliveryOrder($option: CreateDeliveryOrderDeliveryOptionDto!, $payer: Payer!, $receiver: CreateDeliveryOrderPersonDto!, $receiverAddress: CreateDeliveryOrderAddressDto!, $receiverPoint: CreateDeliveryOrderPointDto!, $sender: CreateDeliveryOrderPersonDto!, $senderAddress: CreateDeliveryOrderAddressDto!, $senderPoint: CreateDeliveryOrderPointDto!) {
  createDeliveryOrder(
    option: $option
    payer: $payer
    receiver: $receiver
    receiverAddress: $receiverAddress
    receiverPoint: $receiverPoint
    sender: $sender
    senderAddress: $senderAddress
    senderPoint: $senderPoint
  ) {
    success
    reason
  }
}
    `;
export type CreateDeliveryOrderMutationFn = Apollo.MutationFunction<CreateDeliveryOrderMutation, CreateDeliveryOrderMutationVariables>;

/**
 * __useCreateDeliveryOrderMutation__
 *
 * To run a mutation, you first call `useCreateDeliveryOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeliveryOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeliveryOrderMutation, { data, loading, error }] = useCreateDeliveryOrderMutation({
 *   variables: {
 *      option: // value for 'option'
 *      payer: // value for 'payer'
 *      receiver: // value for 'receiver'
 *      receiverAddress: // value for 'receiverAddress'
 *      receiverPoint: // value for 'receiverPoint'
 *      sender: // value for 'sender'
 *      senderAddress: // value for 'senderAddress'
 *      senderPoint: // value for 'senderPoint'
 *   },
 * });
 */
export function useCreateDeliveryOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeliveryOrderMutation, CreateDeliveryOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeliveryOrderMutation, CreateDeliveryOrderMutationVariables>(CreateDeliveryOrderDocument, options);
      }
export type CreateDeliveryOrderMutationHookResult = ReturnType<typeof useCreateDeliveryOrderMutation>;
export type CreateDeliveryOrderMutationResult = Apollo.MutationResult<CreateDeliveryOrderMutation>;
export type CreateDeliveryOrderMutationOptions = Apollo.BaseMutationOptions<CreateDeliveryOrderMutation, CreateDeliveryOrderMutationVariables>;