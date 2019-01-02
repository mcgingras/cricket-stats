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
      invite: 'michael',      // if you got an invite, who it is from
    }

    this.searchLobby = this.searchLobby.bind(this);
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
        console.log(ctx.state.invite);
        // ctx.setState({
        //   invite: oid
        // })
        console.log("inivitation from " + oid);
      }
    });
  }

  joinGame(){
    this.setState({ live: true });
    this.setState({ gameId: 1 }); // how to communicate that to the other one?
  }

  render() {
    const isLive = this.state.live;
    return (
      <div>
        { !isLive ? (
          <div>
            {this.state.invite &&
               <InviteModal
                  opponent={this.state.invite}
                  bodyText="New challenge request from "
                  acceptText="Accept"
                  declineText="Decline"
                  onAccept={() => {this.joinGame()}}
                />
            }
            <Header title="Player Select" path="/" right="add" />
            <PlayerPicker uid={this.props.global} />
            {this.props.global && this.searchLobby(this.props.global)}
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
