import React, { Component } from "react";
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyword },
      props:{updateAppState}
    } = this;
    updateAppState({isFirst:false,isLoading:true})
    axios.get(`http://localhost:3000/search/users?q=${keyword}`).then(
        response=>{updateAppState({isLoading:false,users:response.data.items})},
        error=>{updateAppState({isLoading:false,err:error.message})}
    )
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
