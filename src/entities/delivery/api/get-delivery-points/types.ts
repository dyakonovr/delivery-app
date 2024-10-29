import type { DefaultApiResponse } from "@/shared/api";
import type { DeliveryPoint } from "@/entities/delivery/model";

export interface GetDeliveryPointsResponse extends DefaultApiResponse {
  points: DeliveryPoint[];
}
