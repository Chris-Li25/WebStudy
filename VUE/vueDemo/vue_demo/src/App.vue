<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header ref="header" />

        <!-- 使用PubsubJs库订阅和发布消息 deleteTodo -->
        <todo-list :todos="todos" />

        <!-- <todo-footer
          :todos="todos"
          :deleteCompleteTodos="deleteCompleteTodos"
          :selectAllTodos="selectAllTodos"
        /> -->
        <todo-footer>
          <input type="checkbox" v-model="isAllCheck" slot="checkAll" />

          <span slot="count">已完成 {{ completeSize }} / 全部 {{ todos.length }}</span>
          
          <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
        </todo-footer>
      </div>
    </div>
  </div>
</template>
<script>
import PubSub from "pubsub-js";
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
import storageUtil from './util/storageUtil';
export default {
  data() {
    return {
      // todos: JSON.parse(window.localStorage.getItem("todos_key") || "[]"),
      todos:storageUtil.readTodos()
    };
  },
  //执行异步代码
  //给<TodoHeader/>绑定addTodo事件监听
  mounted() {
    this.$refs.header.$on("addTodo", this.addTodo);

    //订阅信息
    PubSub.subscribe("deleteTodo", (msg, data) => {
      this.deleteTodo(data);
    });
  },
  computed: {
    completeSize() {
      return this.todos.reduce(
        (preTotal, todo) => preTotal + (todo.complete ? 1 : 0),
        0
      );
    },
    isAllCheck: {
      get() {
        return this.completeSize === this.todos.length && this.completeSize > 0
          ? true
          : false;
      },
      set(value) {
        this.selectAllTodos(value);
      },
    },
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    deleteCompleteTodos() {
      if (window.confirm("确定要清除已完成任务吗？")) {
        this.todos = this.todos.filter((todo) => !todo.complete);
      }
    },
    selectAllTodos(check) {
      this.todos.forEach((todo) => (todo.complete = check));
    },
  },
  watch: {
    todos: {
      deep: true,
      // handler: function (value) {
      //   window.localStorage.setItem("todos_key", JSON.stringify(value));
      // },
      handler:storageUtil.saveTodos
    },
  },
};
</script>
<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>