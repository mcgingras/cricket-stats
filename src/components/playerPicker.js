import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from './icon';


class PlayerPicker extends Component {
  constructor(props){
    super(props);

    // local state
    this.state = {
      players: [], // array of all players?
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
        players = Object.values(players);
        context.setState({players: [...context.state.players, ...players]})
    })
  }

  render(){
    return (
      <div>
        <div className="player-picker">
          {this.state.players.map((player) => {
            return ( <Icon
                      key     = {player.username}
                      player  = {player}
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
