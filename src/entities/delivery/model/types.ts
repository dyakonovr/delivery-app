export interface DeliveryPoint {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
}

export interface DeliveryPackageType {
  id: string;
  name: string;
  length: string;
  width: string;
  height: string;
  weight: string;
}

export enum DeliveryOptionType {
  "DEFAULT" = "DEFAULT",
  "EXPRESS" = "EXPRESS"
}

export interface DeliveryOption {
  id: string;
  price: number;
  days: number;
  name: string;
  type: DeliveryOptionType;
}

export enum DeliveryPayer {
  RECEIVER = "RECEIVER",
  SENDER = "SENDER"
}
