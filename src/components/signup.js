import React, { Component } from 'react';
import Header from './header';

export default class Signup extends Component {
  constructor(props){
    super(props);

    this.name     = React.createRef();
    this.username = React.createRef();
  }

  createUser() {
    // should add checks to make sure field is good

    var username = this.username.value;
    var name     = this.name.value;
    var id = Math.random().toString(36).substring(7);
    console.log(id);

    var database = firebase.database();
    database.ref('players/'+id).set({
      name: name,
      username: username
    });
  }

  render() {
    return (
      <div>
        <Header path="/" right="add" title="Add Player" />
        <input
          type="text"
          className="input"
          placeholder="name"
          ref={ node => this.name = node }
        />

        <input
          type="text"
          className="input"
          placeholder="username"
          ref={ node => this.username = node }
        />

        <button onClick={ (e) => { this.createUser() } }>submit</button>
      </div>
    );
  }
}
