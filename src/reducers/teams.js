const teams = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER_TO_TEAM':
      console.log(state);
      if (state.includes(action.payload.username)) {
        return state;
      }
      return [...state, action.payload.username];

    default:
      return state;
  }
}

export default teams;
