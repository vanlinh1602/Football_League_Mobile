import { all, put, takeEvery } from 'redux-saga/effects';

import { actions as userActions } from '../reducers/user';
import { SignInAction } from '../types/users';

function* signIn(action: SignInAction) {
  const user = action.payload;
  yield put(
    userActions.fetchUser({
      name: user.displayName!,
      email: user.email!,
      uid: user.uid,
      photoURL: user.photoURL!,
    }),
  );
}

export default function* usersSaga() {
  yield all([takeEvery(userActions.signIn.type, signIn)]);
}
