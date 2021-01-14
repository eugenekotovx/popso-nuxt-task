import Vue from "vue";

export const state = () => ({
  todos: []
});

export const actions = {
  updateTodo({ commit, state }, id) {
    const todo = state.todos.find(todo => todo.id == id);
    if (todo) {
      todo.completed = !todo.completed;
      const todoIndex = state.todos.indexOf(todo);
      commit("UPDATE_TODO", todo, todoIndex);
    }
  }
};

export const mutations = {
  SET_TODOS(state, todos) {
    state.todos = [...todos];
  },
  UPDATE_TODO(state, todo, todoIndex) {
    Vue.set(state.todos, todoIndex, todo);
  }
};

export const getters = {
  todos: s => s.todos
};
