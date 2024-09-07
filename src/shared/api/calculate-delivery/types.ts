import type { CalculateDeliveryMutation } from "./calculate-delivery.gql.generated";
import type * as Types from "../types.gql.generated";

export type CalculateDeliveryOptions = Omit<
  CalculateDeliveryMutation["calculateDelivery"]["options"],
  "__typename"
>;

export type CalculateDeliverySenderPoint = Types.CalculateDeliveryPointDto;
export type CalculateDeliveryReceiverPoint = Types.CalculateDeliveryPointDto;
