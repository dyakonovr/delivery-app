import { requestInstance } from "@/shared/api";
import type { CalculateDeliveryBody, CalculateDeliveryResponse } from "./types";

export const calculateDelivery = (json: CalculateDeliveryBody) =>
  requestInstance.post<CalculateDeliveryResponse>("delivery/calc", { json });
