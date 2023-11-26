import { all, put, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
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

export default function* usersSaga() {
  yield all([takeEvery(userActions.signIn.type, signIn)]);
}
