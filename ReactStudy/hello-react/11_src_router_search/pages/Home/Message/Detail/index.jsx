import React, { Component } from "react";
import qs from "querystring";

const Detaildata = [
  { id: "01", content: "hello,chris" },
  { id: "02", content: "hello,steve" },
  { id: "03", content: "hello,me" },
];
export default class Detail extends Component {
  render() {
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));
    const result = Detaildata.find((item) => {
      return item.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{result.content}</li>
      </ul>
    );
  }
}
