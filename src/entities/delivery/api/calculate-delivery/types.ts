import type { CalculateDeliveryMutation } from "./calculate-delivery.gql.generated.ts";

export type CalculateDeliveryOptions = Omit<
  CalculateDeliveryMutation["calculateDelivery"]["options"],
  "__typename"
>;
