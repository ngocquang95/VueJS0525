import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    countDouble: (state) => state.count * 2,
  },
  actions: {
    async increment() {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(void 0);
        }, 1000);
      });
      this.count++;
    },
  },
});
