import type { DefaultApiResponse } from "@/shared/api";
import type { DeliveryPackageType } from "../../model";

export interface GetDeliveryPackageTypesResponse extends DefaultApiResponse {
  packages: DeliveryPackageType[];
}
