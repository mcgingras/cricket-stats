let playerId = 0;
export const addPlayer = (name, username) => {
  console.log('adding', name);
  return {
    type: "ADD_PLAYER",
    payload: {
      id: playerId++,
      name: name,
      username: username
    }
  }
}
