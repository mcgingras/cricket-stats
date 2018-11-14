import { combineReducers } from 'redux';
import teams from './teams';
import score from './score';

const rootReducer = combineReducers({
  teams,
  score
});

export default rootReducer;
