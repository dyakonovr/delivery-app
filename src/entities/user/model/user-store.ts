import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { User } from "./types";

type State = {
  user: null | User;
  isAuth: boolean;
};

type Actions = {
  setUser: (user: User | null) => void;
};

export const useUserStore = create<State & Actions>()(
  devtools(
    immer((set) => ({
      user: null,
      isAuth: false,
      setUser: (user: User | null) =>
        set((state) => {
          state.user = user;
          state.isAuth = !!user;
        })
    }))
  )
);
