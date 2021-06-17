import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return(event)=>{
      const {target} = event
      const {updateTodo} = this.props
      updateTodo(id,target.checked)
    }
  };

  handleDelete = (id)=>{
    if(window.confirm('确定删除吗？')){
      const {deleteTodo} = this.props
      deleteTodo(id)
    }
  }

  render() {
    const { todo } = this.props;
    const { mouse } = this.state;
    return (
      <li
        style={{ background: mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.handleCheck(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(todo.id)}}
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
