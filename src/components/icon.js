import React from 'react';
import { connect } from 'react-redux';
import { addPlayerToGame } from '../actions';


// TODO: add player to game should update state since state is the 'game' state
const Icon = ({ player, dispatch }) => {

  return (
    <div className="icon" onClick = { () => dispatch(addPlayerToGame(player.name,2)) }>
      {player.name}
    </div>
  )
}

export default connect()(Icon);
