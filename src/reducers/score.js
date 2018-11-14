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

      const isClosed = (state[team][hit] >= 3);

      if (isClosed) {
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
        console.log(team);
        return {
          ...state,
          [team]: {
            ...state[team],
            [hit]: state[team][hit]+=1
          }
        };
      }

      return state;

    default:
      return state;
  }
}

export default score;
