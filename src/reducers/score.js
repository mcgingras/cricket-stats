var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyCfoQ6hKBYJiJpSHzr48EZtP4YroOndvbI",
  authDomain: "cricket-63fe4.firebaseapp.com",
  databaseURL: "https://cricket-63fe4.firebaseio.com",
  projectId: "cricket-63fe4",
  storageBucket: "cricket-63fe4.appspot.com",
  messagingSenderId: "287166849686"
});

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
      const gid = action.payload.gameId;

      // can only get points if closed and other team has open slots
      const oppo = (team == 1) ? 2 : 1;
      const canGetPoints = (state[team][hit] >= 3 && state[oppo][hit] < 3);

      if (canGetPoints) {
        let s = {
          ...state,
          [team]: {
            ...state[team],
            [hit]: state[team][hit] += 1,
            score: state[team]['score'] += hit
          }
        }
        
        firebase.database().ref('games/' + gid).update(s);
        return s;
      }

      else {
        let s = {
          ...state,
          [team]: {
            ...state[team],
            [hit]: state[team][hit]+=1
          }
        };

        firebase.database().ref('games/' + gid).update(s);
        return s;
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
