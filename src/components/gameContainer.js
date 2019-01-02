import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadUser } from '../actions';

import Header from './header';
import PlayerPicker from './playerPicker';
import InviteModal from './inviteModal';
import ScoreBoardContainer from '../containers/scoreBoardContainer';

class GameContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameId: null,           // the id of the game to reference in firebase
      live: false,            // if there is a game currently joined
      invite: null,      // if you got an invite, who it is from
    }

    this.searchLobby = this.searchLobby.bind(this);
    this.searchGames = this.searchGames.bind(this);
  }


  // searches the lobby for games
  // THIS WAS HARD TO IMPLEMENT
  // --
  // set up as lobby / opponent ID / user ID
  // so if you see your id, you know the next is who is challenging you.
  // one draw back is you can only be invited by one person at a time, and it will overwrite.
  searchLobby(uid){
    let ctx = this;
    let lobby = firebase.database().ref('lobby/');
    lobby.on('value', function(snapshot) {
      const games = snapshot.val() || null;
      console.log(games);
      if (uid in games){
        const oid = games[uid]
        ctx.setState({
          invite: oid
        })
      }
    });
  }

  searchGames(uid){
    let ctx = this;
    console.log("searching for games " + uid);
    let games = firebase.database().ref('games/');
    games.on('value', function(snapshot) {
      const gameList = snapshot.val() || null;
      console.log(gameList);
      if (uid in gameList){
        const oid = games[uid]
        ctx.setState({
          live: true
        })
        firebase.database().ref('games/' + uid).set(null);
      }
    });
  }


  // removes the game from the lobby (since it is now live)
  joinGame(oid){
    firebase.database().ref('lobby/' + this.props.global).set(null);
    this.setState({ live: true });
    this.setState({ gameId: 1 }); // how to communicate that to the other one?
    firebase.database().ref('games/' + oid).set(this.props.global);

    // add game to firebase
  }


  // rejects the game invite and removes it from the 'lobby' aka the firebase store
  // also set the state of invite to null
  rejectGame(){
    firebase.database().ref('lobby/' + this.props.global).set(null);
    this.setState({invite: null})
  }

  render() {
    const isLive = this.state.live;
    return (
      <div>
        { !isLive ? (
          <div>
            {(this.props.global && this.state.invite == null) && this.searchLobby(this.props.global)}
            {(this.props.global && this.state.live == false) && this.searchGames(this.props.global)}
            {this.state.invite &&
               <InviteModal
                  opponent={this.state.invite}
                  bodyText="New challenge request from "
                  acceptText="Accept"
                  declineText="Decline"
                  onAccept={() => {this.joinGame(this.state.invite)}}
                  onReject={() => {this.rejectGame()}}
                />
            }
            <Header title="Player Select" path="/" right="add" />
            <PlayerPicker uid={this.props.global} />
            <button className="button" onClick={ () => this.setState({live: true}) }>Start Game</button>
          </div>
        ) : (
          <ScoreBoardContainer gameId={this.state.gameId} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    global: state.global
  }
}


export default connect(mapStateToProps, null)(GameContainer);
