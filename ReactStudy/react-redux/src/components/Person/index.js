import React, { Component } from "react";
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person';

 class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id:nanoid(),name,age}
    this.props.addPerson(personObj)
  };
  render() {
    return (
      <div>
          <h2>Person,上方sum:{this.props.sum}</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          name="name"
          placeholder="请输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          name="age"
          placeholder="请输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personArr.map((item)=>(<li key={item.id}>name:{item.name} age:{item.age}</li>))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state=>({personArr:state.person,sum:state.count.sum}),
  {
    addPerson
  }
)(Person)