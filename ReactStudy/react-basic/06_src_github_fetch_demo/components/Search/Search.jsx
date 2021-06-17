import React, { Component } from "react";
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = async() => {
    const {
      keyWordElement: { value: keyword },
    } = this;
    PubSub.publish('chris',{isFirst:false,isLoading:true})
    try {
      const response = await fetch(`/search/users?q=${keyword}`)
      const data = await response.json()
      PubSub.publish('chris',{isLoading:false,users:data.items})
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
