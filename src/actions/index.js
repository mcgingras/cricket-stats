let playerId = 0;

// used to add player to a certain team.
// username, STRING, used to identify player
// team, INT, used to identify team (1 or 2 only for now)
export const addPlayerToGame = (username, team) => {
  console.log('adding', username);
  return {
    type: "ADD_PLAYER_TO_TEAM",
    payload: {
      id: playerId++,
      username: username,
      team: team
    }
  }
}

export const updateScore = (hit, team) => {
  console.log("team "+team+"just hit "+hit);
  return {
    type: "UPDATE_SCORE",
    payload: {
      team: team,
      hit: hit
    }
  }
}

// action creator to load a user on first load. Need this
// because I want to store the user in global state.
export const loadUser = (user) => {
  console.log("adding user to global");
  return {
    type: "LOAD_USER",
    payload: {
      user: user
    }
  }
}


export const acceptInvite = (user) => {
  return {
    type: "ACCEPT_INVITE",
    payload: {
      user: user
    }
  }
}

export const cancelInvite = (user) => {
  return {
    type: "CANCEL_INVITE",
    payload: {
      user: user
    }
  }
}

export const declineInvite = (user) => {
  return {
    type: "DECLINE_INVITE",
    payload: {
      user: user
    }
  }
}
