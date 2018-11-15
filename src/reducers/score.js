const newGame = {
  1: {
    20: 0,
    19: 0,
    18: 0,
    17: 0,
    16: 0,
    15: 0,
    25: 0,
    score: 0
  },
  2: {
    20: 0,
    19: 0,
    18: 0,
    17: 0,
    16: 0,
    15: 0,
    25: 0,
    score: 0
  }
}

const score = (state = newGame, action) => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      console.log("NEW SCORE!");
      const team = action.payload.team;
      const hit = action.payload.hit;

      // const updatedHit = GETTHISFROMFIREBASE;
      // var database = firebase.database();
      // database.ref('score/'+team).set({
      //   [hit]: updatedHit
      // });

      // can only get points if closed and other team has open slots
      const oppo = (team == 1) ? 2 : 1;
      const canGetPoints = (state[team][hit] >= 3 && state[oppo][hit] < 3);

      if (canGetPoints) {
        return {
          ...state,
          [team]: {
            ...state[team],
            [hit]: state[team][hit] += 1,
            score: state[team]['score'] += hit
          }
        };
      }

      else {
        return {
          ...state,
          [team]: {
            ...state[team],
            [hit]: state[team][hit]+=1
          }
        };
      }

      return state;

    case 'UNDO_SCORE':
      // fill this out when we want to undo the score
      return state;

    default:
      return state;
  }
}

export default score;


// another way of keeping score would be to have an array [20,20,20...] and remove each time it is hit.
// checking for win condition is as simple as checking that array is empty and score > oppo
// does make it difficult to keep track of more detailed stats
