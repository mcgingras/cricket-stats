import { combineReducers } from 'redux';
import teams from './teams';
import score from './score';
import global from './global';

const rootReducer = combineReducers({
  teams,
  score,
  global
});

export default rootReducer;
