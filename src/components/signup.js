import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props){
    super(props);

    this.name     = React.createRef();
    this.username = React.createRef();
  }

  createUser() {
    // should add checks to make sure field is good

    console.log('we are creating a user');

    var username = this.username.value;
    var name     = this.name.value;

    var database = firebase.database();
    database.ref('players/14').set({
      name: name,
      username: username
    });
  }

  render() {
    return (
      <div>
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
