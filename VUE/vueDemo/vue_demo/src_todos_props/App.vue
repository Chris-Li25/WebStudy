<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header :addTodo='addTodo' />
        <todo-list :todos="todos" :deleteTodo='deleteTodo' />
        <todo-footer :todos='todos' :deleteCompleteTodos='deleteCompleteTodos' :selectAllTodos="selectAllTodos" />
      </div>
    </div>
  </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos_key')||'[]')
    };
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  methods: {
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    deleteCompleteTodos(){
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos(check){
      this.todos.forEach(todo => todo.complete = check)
    }

  },
  watch:{
    todos:{
      deep:true,
      handler: function(value){
        window.localStorage.setItem('todos_key',JSON.stringify(value))
      }
    }
  }
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