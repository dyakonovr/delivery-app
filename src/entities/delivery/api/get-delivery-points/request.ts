import { requestInstance } from "@/shared/api";
import type { GetDeliveryPointsResponse } from "./types";

export const getDeliveryPoints = () =>
  requestInstance.get<GetDeliveryPointsResponse>("delivery/points");
