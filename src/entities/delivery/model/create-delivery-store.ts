import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { CalculateDeliveryOptions } from "@/entities/delivery";
import type { DeliveryPoint } from "@/shared/api";

type State = {
  options: CalculateDeliveryOptions | null;
  senderPoint: Omit<DeliveryPoint, "__typename"> | null;
  receiverPoint: Omit<DeliveryPoint, "__typename"> | null;
};

type Actions = {
  setOptionsAndPoints: (newState: State) => void;
};

export const useCreateDeliveryStore = create<State & Actions>()(
  devtools(
    immer((set) => ({
      options: null,
      receiverPoint: null,
      senderPoint: null,
      setOptionsAndPoints: (newState: State) =>
        set((state) => {
          state.options = newState.options;
          state.senderPoint = newState.senderPoint;
          state.receiverPoint = newState.receiverPoint;
        })
    }))
  )
);
