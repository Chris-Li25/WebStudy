<template>
  <ul :class="isEmpty">
    <todo-item
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      :deleteTodo='deleteTodo'
    />
  </ul>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
    computed:{
        isEmpty:function(){
            if(this.todos.length===0){
            return 'todo-empty'
            }else{
                return 'todo-main'
            }
        }
    },
  components: { TodoItem },
  props: {
    todos: Array,
    deleteTodo:Function
  },
};
</script>
<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>