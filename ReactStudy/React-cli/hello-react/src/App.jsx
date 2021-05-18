import React, { Component } from "react";
import Header from "./component/Header/Header";
import List from "./component/List/List";
import Footer from "./component/Footer/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "学习", done: true },
      { id: "004", name: "上班", done: true },
      { id: "005", name: "休息", done: false },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    todos.unshift(todoObj);
    this.setState({ todos });
  };

  updateTodo = (id, done) => {
    console.log(id, done);
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo= (id)=>{
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({todos:newTodos})
  }

  checkAllTodo = (done)=>{
      const {todos} = this.state
      const newTodos = todos.map((todo)=>{
          return {...todo,done}
      })
      this.setState({todos:newTodos})
  }

  clearAllDone = ()=>{
      const {todos} = this.state
      const newTodos = todos.filter((todo)=>{
          return !todo.done
      })
      this.setState({todos:newTodos})
  }

  render() {
      const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}></Footer>
        </div>
      </div>
    );
  }
}
