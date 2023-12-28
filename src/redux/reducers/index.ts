import { combineReducers } from '@reduxjs/toolkit';

import { reducer as commentReducer } from './comments';
import { reducer as leaguesReducer } from './leagues';
import { reducer as matchesReducer } from './matches';
import { reducer as playersReducer } from './players';
import { reducer as teamsReducer } from './teams';
import { reducer as userReducer } from './user';

const rootReducer = combineReducers({
  userStore: userReducer,
  teamStore: teamsReducer,
  leagueStore: leaguesReducer,
  matchStore: matchesReducer,
  playerStore: playersReducer,
  commentStore: commentReducer,
});

export default rootReducer;
