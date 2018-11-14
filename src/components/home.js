import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions';


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

    console.log(addPlayer);

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


  render() {
    return (
      <div className="body">
        <div className="nav">
          <div className="nav-item" style={{backgroundColor: '#EEE4D3'}}>Dart League</div>
          <a href="/signup"><div className="nav-item">New Player</div></a>
          <div className="nav-item">New Game</div>
          <div className="nav-item">Stats</div>
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

export default connect(null, mapDispatchToProps)(Home)
