import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  // module
  modules: {
    counter: {
      state: {
        count: 0,
      },
      getters: {
        count: (state) => state.count,
        countDouble: (state) => state.count * 2,
      },
      mutations: {
        increment(state) {
          state.count++;
        },
      },
      actions: {
        async increment(context) {
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          });
          context.commit("increment");
        },
      },
    },
    todos: {
      state: {
        todos: [],
      },
    },
  },
});

createApp(App).use(store).mount("#app");
