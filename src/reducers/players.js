// TODO: make the types global

const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      // check if players user name exist, or should we do this at validation level?
      // do we even need redux for this? What state are we controlling?
      var database = firebase.database();
      database.ref('players/'+action.payload.id).set({
        name: action.payload.name,
        username: action.payload.username
      });

      return state;

    default:
      return state;
  }
}

export default players;
