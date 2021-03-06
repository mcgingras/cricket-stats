import React from 'react';
import { connect } from 'react-redux';
import { addPlayerToGame } from '../actions';


const Icon = ({ player, dispatch, onClick }) => {

  const IconContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const IconAvatar = {
      minWidth: '100px',
      height: '100px',
      lineHeight: '100px',
      borderRadius: '100px',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
  }

  const IconText = {
    marginTop: '10px',
    fontWeight: "400",
    fontSize: ".8rem"
  }

  return (
    <div style={IconContainer} onClick={onClick}>
    <div style={IconAvatar}>
    {player.username}
    </div>
    <h6 style={IconText}>{player.username}</h6>
    </div>
  )
}

export default connect()(Icon);
