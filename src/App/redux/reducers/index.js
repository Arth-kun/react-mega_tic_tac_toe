// We get all the reducers and "combine" them
// here, so in the store setup, we don't have to
// import them all
import { combineReducers } from 'redux';

import player from './player';
import lobbies from './lobbies';

export default combineReducers({
  player,
  lobbies,
});