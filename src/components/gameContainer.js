import React, { Component } from 'react';

import PlayerPicker from './playerPicker';

export default class GameContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <PlayerPicker />
        <button className="button">Start Game</button>
      </div>
    );
  }
}
