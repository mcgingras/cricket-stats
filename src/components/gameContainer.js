import React, { Component } from 'react';

import PlayerPicker from './playerPicker';
import ScoreBoardContainer from '../containers/scoreBoardContainer';

export default class GameContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      live: false
    }
  }

  render() {
    const isLive = this.state.live;
    return (
      <div>
        { !isLive ? (
          <div>
            <PlayerPicker />
            <h6>Don't have an account? Create one below...</h6> 
            <button>Create User</button>
            <button className="button" onClick={ () => this.setState({live: true}) }>Start Game</button>
          </div>
        ) : (
          <ScoreBoardContainer />
        )}
      </div>
    );
  }
}


/*
SINCE THIS IS JUST AN MVP IM GOING TO OMIT SOME PRETTY SERIOUS STUFF
it will break easily

for example, im not going to include a check that players are in the global state before clicking start game.
should change that later.

really just trying to get this thing into a working state as quickly and dirtily as possible.
Full send.
*/
