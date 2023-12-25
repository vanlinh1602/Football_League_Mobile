import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { Alert } from 'react-native';
import { all, put, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import formatError from '../../utils/formatError';
import { actions as playersAction } from '../reducers/players';
import { Player } from '../types/players';

function* getPlayers(action: PayloadAction<string>) {
  try {
    const team = action.payload;
    const result: WithApiResult<Player[]> = yield backendService.post(
      'api/getPlayers',
      { team },
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const players = _.keyBy(result.data, 'id');
        yield put(playersAction.fetchPlayers({ team, players }));
      } else {
        yield put(playersAction.fetchPlayers());
      }
    } else {
      yield put(playersAction.fetchPlayers());
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(playersAction.fetchPlayers());
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

export default function* saga() {
  yield all([takeEvery(playersAction.getPlayers.type, getPlayers)]);
}
