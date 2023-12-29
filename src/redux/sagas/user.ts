import { PayloadAction } from '@reduxjs/toolkit';
import { all, put, select, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import { actions as leagueActions } from '../reducers/leagues';
import { actions as matchActions } from '../reducers/matches';
import { actions as playerActions } from '../reducers/players';
import { actions as teamActions } from '../reducers/teams';
import { actions as userActions } from '../reducers/user';
import { selectUser } from '../selectors/user';
import { SignInAction, UserData } from '../types/users';

function* signIn(action: SignInAction) {
  const { uid, email, displayName: name, photoURL } = action.payload;

  const result: WithApiResult<UserData & { _id: string }> =
    yield backendService.post('/api/auth', {
      uid,
      email,
      name,
      photoURL,
    });

  if (result.kind === 'ok') {
    const { _id, ...data } = result.data;
    yield put(userActions.fetchUser({ ...data, uid: _id }));
  }
}

function* prepareData() {
  yield put(teamActions.getTeams());
  yield put(playerActions.getAllPlayers());
  yield put(leagueActions.getLeagues());
  yield put(matchActions.getAllMatch());
  yield put(matchActions.getAllEvents());
}

function* updateUserData(action: PayloadAction<{ path: string; data: any }>) {
  const { path, data } = action.payload;
  const user: UserData = yield select(selectUser);

  const result: WithApiResult<null> = yield backendService.post(
    '/api/updateUserData',
    {
      user: user.uid,
      path,
      data,
    },
  );

  if (result.kind === 'ok') {
    yield put(userActions.fetchUserData({ path, data }));
  }
}

export default function* usersSaga() {
  yield all([
    takeEvery(userActions.signIn.type, signIn),
    takeEvery(userActions.prepareData.type, prepareData),
    takeEvery(userActions.updateUserData.type, updateUserData),
  ]);
}
