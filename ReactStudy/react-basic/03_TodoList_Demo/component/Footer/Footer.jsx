import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {

  handleCheckAll = (event) => {
    const {checkAllTodo} = this.props
    checkAllTodo(event.target.checked)
  };

  handleClearAllDone = ()=>{
    const {clearAllDone} = this.props
    clearAllDone()
  }

  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const total = todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total&&total!==0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    );
  }
}
