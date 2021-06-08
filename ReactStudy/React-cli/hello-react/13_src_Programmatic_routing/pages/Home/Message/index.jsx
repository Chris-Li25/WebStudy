import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  replaceShow = (id, title) => {
    this.props.history.replace({
      pathname: "/home/message/detail",
      state: { id, title },
    });
  };
  pushShow = (id, title) => {
    this.props.history.push({
      pathname: "/home/message/detail",
      state: { id, title },
    });
  };
  back = ()=>{
    this.props.history.goBack()
  }
  forward = ()=>{
    this.props.history.goForward()
  }
  go=()=>{
    this.props.history.go(-2)
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((msg) => {
            return (
              <li key={msg.id}>
                <Link
                  replace={true}
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: msg.id, title: msg.title },
                  }}
                >
                  {msg.title}
                </Link>
                &nbsp;<button onClick={()=>this.pushShow(msg.id,msg.title)}>push查看</button>
                &nbsp;
                <button onClick={() => this.replaceShow(msg.id, msg.title)}>
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <Route path="/home/message/detail" component={Detail} />
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>Go</button>
      </div>
    );
  }
}
