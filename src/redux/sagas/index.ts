import { all } from 'redux-saga/effects';

import commentSage from './comments';
import leaguesSaga from './leagues';
import matchesSaga from './matches';
import playersSaga from './players';
import teamsSaga from './teams';
import usersSaga from './user';

export default function* rootSaga() {
  yield all([
    usersSaga(),
    teamsSaga(),
    leaguesSaga(),
    matchesSaga(),
    playersSaga(),
    commentSage(),
  ]);
}
