import { all, put, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import { actions as leagueActions } from '../reducers/leagues';
import { actions as matchActions } from '../reducers/matches';
import { actions as playerActions } from '../reducers/players';
import { actions as teamActions } from '../reducers/teams';
import { actions as userActions } from '../reducers/user';
import { SignInAction } from '../types/users';

function* signIn(action: SignInAction) {
  const { uid, email, displayName: name, photoURL } = action.payload;

  const result: WithApiResult<{ role: string }> = yield backendService.post(
    '/api/auth',
    {
      uid,
      email,
      name,
    },
  );

  if (result.kind === 'ok') {
    const { role } = result.data;
    yield put(
      userActions.fetchUser({
        name: name!,
        email: email!,
        uid: uid,
        photoURL: photoURL!,
        role,
      }),
    );
  }
}

function* prepareData() {
  yield put(teamActions.getTeams());
  yield put(playerActions.getAllPlayers());
  yield put(leagueActions.getLeagues());
  yield put(matchActions.getAllMatch());
  yield put(matchActions.getAllEvents());
}

export default function* usersSaga() {
  yield all([
    takeEvery(userActions.signIn.type, signIn),
    takeEvery(userActions.prepareData.type, prepareData),
  ]);
}
