import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions';


class App extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    var context = this;
    var database = firebase.database();
    database.ref('/liveKey/').once('value').then(function(snapshot) {
        var key = (snapshot.val()) || null;

        if (key == null) {
          context.setState({live: false});
        }

        else{
          context.setState({key: key.key});
          context.setState({live: true});
        }
    })
  }

  Header = {
    textAlign: "center",
    fontSize: "22px",
    padding: "50px 0",
    backgroundColor: '#EEE4D3'
  }

  Button = {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    textAlign: "center"
  }

  Body = {
    backgroundColor: "#BBB",
    height: "100%"
  }

  Nav = {
    botton: "0",
    width: "100%"
  }

  render() {
    return (
      <div style={this.Body}>
        <div style={this.Header}>The Dart League</div>
        <div style={this.Nav}>
          <a href="/play"><div style={this.Button}>New Game</div></a>
          <a href="/stats"><div style={this.Button}>Rankings</div></a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: (name, username) => {
      dispatch(addPlayer(name,username))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
