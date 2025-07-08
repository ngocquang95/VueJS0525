import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [],
  }),
  getters: {
    todos: (state) => state.todos,
  },
  actions: {
    async addTodo(text: string) {
      this.todos.push({
        id: this.todos.length + 1,
        text: text,
      });
    },
  },
});
