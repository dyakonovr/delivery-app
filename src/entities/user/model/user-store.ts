import { defineStore } from "pinia";
import type { User } from "./types";

interface State {
  user: User | null;
}

const defaultState: State = {
  user: null
};

export const useUserStore = defineStore("user", {
  state: () => defaultState,
  getters: {
    isAuth: (state) => state.user !== null
  },
  actions: {
    setUser(user: User | null) {
      this.user = user;
    }
  }
});
