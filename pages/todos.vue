<template lang="html">
  <section>
    <div class="todo__item">
      <span class="todo__header">Задача </span>
      <span class="todo__header todo__header-status">Статус </span>
    </div>
    <div v-for="todo in todos" :key="todo.id" class="todo__item">
      <span class="todo__text">{{ todo.title }} </span>
      <label>
        <input
          class="checkbox"
          type="checkbox"
          :checked="todo.completed"
          @input="updateTodo(todo.id)"
        />
        <span class="todo-checkbox"></span>
        <span :class="todo.completed ? 'todo__done' : 'todo__undone'"
          >выполнено</span
        >
      </label>
    </div>
  </section>
</template>

<script>
export default {
  middleware: "authenticated",
  async asyncData({ $axios, store }) {
    if (store.getters["todos/todos"].length === 0) {
      const todosArray = await $axios.$get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      store.commit("todos/SET_TODOS", todosArray);
    }
  },
  computed: {
    todos() {
      return this.$store.getters["todos/todos"];
    }
  },
  methods: {
    updateTodo(id) {
      this.$store.dispatch("todos/updateTodo", id);
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  position: relative;
  display: flex;
  align-items: center;
}
.todo {
  &__item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #eff1f9;
    align-items: center;
  }
  &__header-status {
    margin-right: 73px !important;
  }
  &__text,
  &__header {
    font-size: 14px;
    margin: 16px 0;
  }
  &__done {
    color: #51cb3d;
  }
  &__undone,
  &__header {
    color: #c2c2c2;
  }
}
.todo-checkbox {
  width: 24px;
  height: 24px;
  border: 1px solid #bababa;
  margin-right: 7px;
  &:after {
    content: url("~assets/Union.svg");
    display: block;
    position: relative;
    width: 16px;
    height: 11px;
    margin: 0 auto;
    bottom: -2px;
    visibility: hidden;
  }
  &:hover {
    cursor: pointer;
  }
}
.checkbox {
  display: none;
  &:checked ~ span {
    &:after {
      visibility: visible;
    }
  }
}
@media screen and (max-width: 576px) {
  .todo__text {
    margin-right: 43px;
  }
}
</style>
