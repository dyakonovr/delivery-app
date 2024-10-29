import type { DefaultApiResponse } from "@/shared/api";
import type {
  DeliveryOption,
  DeliveryPackageType,
  DeliveryPoint
} from "@/entities/delivery";

export interface CalculateDeliveryBody {
  package: Pick<DeliveryPackageType, "length" | "weight" | "width" | "height">;
  senderPoint: Pick<DeliveryPoint, "latitude" | "longitude">;
  receiverPoint: Pick<DeliveryPoint, "latitude" | "longitude">;
}

export interface CalculateDeliveryResponse extends DefaultApiResponse {
  options: DeliveryOption[];
}
