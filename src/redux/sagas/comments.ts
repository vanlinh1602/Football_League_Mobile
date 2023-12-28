import { PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { all, put, select, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import formatError from '../../utils/formatError';
import { actions as commentAction } from '../reducers/comments';
import { Comment } from '../types/comments';

function* getComments(action: PayloadAction<string>) {
  try {
    const path = action.payload;
    const result: WithApiResult<Comment[]> = yield backendService.post(
      '/api/getComments',
      { path },
    );
    if (result.kind === 'ok') {
      yield put(commentAction.fetchComments({ [path]: result.data }));
    }
  } catch (error) {
    Alert.alert('Error', formatError(error));
  }
}

function* addComment(action: PayloadAction<Comment>) {
  try {
    const data = action.payload;

    const commentPath: Comment[] = yield select(
      (state) => state.commentStore.data?.[data.path],
    );
    const result: WithApiResult<boolean> = yield backendService.post(
      '/api/addComment',
      { data },
    );
    if (result.kind === 'ok') {
      yield put(
        commentAction.fetchComments({
          [data.path]: [action.payload, ...(commentPath ?? [])],
        }),
      );
    }
  } catch (error) {
    Alert.alert('Error', formatError(error));
  }
}

export default function* usersSaga() {
  yield all([
    takeEvery(commentAction.getComments.type, getComments),
    takeEvery(commentAction.addComment.type, addComment),
  ]);
}
