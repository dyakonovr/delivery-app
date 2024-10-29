import { defineStore } from "pinia";
import type { DeliveryOption, DeliveryPoint } from "@/entities/delivery";

interface State {
  options: DeliveryOption[] | null;
  senderPoint: DeliveryPoint | null;
  receiverPoint: DeliveryPoint | null;
}

const defaultState: State = {
  options: null,
  receiverPoint: null,
  senderPoint: null
};

export const useCreateDeliveryStore = defineStore("createDelivery", {
  state: () => defaultState,
  actions: {
    setOptionsAndPoints({
      options,
      senderPoint,
      receiverPoint
    }: {
      options: DeliveryOption[] | null;
      senderPoint: DeliveryPoint | null;
      receiverPoint: DeliveryPoint | null;
    }) {
      this.options = options;
      this.senderPoint = senderPoint;
      this.receiverPoint = receiverPoint;
    }
  }
});
