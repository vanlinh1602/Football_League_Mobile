import { all } from 'redux-saga/effects';

import usersSaga from './user';

export default function* rootSaga() {
  yield all([usersSaga()]);
}
