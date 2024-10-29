import { requestInstance } from "@/shared/api";
import type { GetDeliveryPackageTypesResponse } from "./types";

export const getDeliveryPackageTypes = () =>
  requestInstance.get<GetDeliveryPackageTypesResponse>("delivery/package/types");
