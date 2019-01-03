import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './icon';


class PlayerPicker extends Component {
  constructor(props){
    super(props);

    // local state
    this.state = {
      players: {}, // array of all players?
      teams: [],
    }
  }

  // need to load the players into the element.
  // debating if this should be done here or in redux store...
  // feels like a here thing.
  componentWillMount(){
    var context = this;
    var database = firebase.database();
    database.ref('/players/').once('value').then(function(snapshot) {
        var players = (snapshot.val()) || null;
        // players = Object.keys(players);
        context.setState({players: players})
    })
  }

  addToLobby(player) {
    const uid = this.props.uid;
    const oid = player;

    // maybe set some global state that this player is searching in the lobby?
    // add a model to cancel the game request if desired, and then remove it as an action creator.
    firebase.database().ref('lobby/' + oid).set(uid);
    // remove from lobby when the game is set TODO
  }

  render(){
    return (
      <div>
        <div className="player-picker">
          {Object.keys(this.state.players).map((player) => {
            const playerDetails = this.state.players[player];
            playerDetails['uid'] = player;
            return ( <Icon
                      key     = {playerDetails.email}
                      player  = {playerDetails}
                      onClick = {() => {this.addToLobby(player)}}
                       /> )
          })}
        </div>
        <div className="players">
          {this.props.teams.map((team) => {
            return (
              <div>{team}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams
  }
}

export default connect(mapStateToProps)(PlayerPicker);
