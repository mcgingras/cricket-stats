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
