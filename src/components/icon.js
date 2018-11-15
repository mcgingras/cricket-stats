import React from 'react';
import { connect } from 'react-redux';
import { addPlayerToGame } from '../actions';


const Icon = ({ player, dispatch }) => {

  const IconStyle = {
      minWidth: '200px',
      height: '200px',
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '100px',
      textAlign: 'center',
      lineHeight: '200px'
  }

  return (
    <div style={IconStyle} onClick = { () => dispatch(addPlayerToGame(player.name,2)) }>
      {player.name}
    </div>
  )
}

export default connect()(Icon);
