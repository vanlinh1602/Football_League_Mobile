import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { Alert } from 'react-native';
import { all, put, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import formatError from '../../utils/formatError';
import { saveDataToFile } from '../../utils/localStorage';
import { actions as playersAction } from '../reducers/players';
import { actions as userActions } from '../reducers/user';
import { Player } from '../types/players';

function* getAllPlayers() {
  try {
    const result: WithApiResult<Player[]> = yield backendService.post(
      'api/getAllPlayers',
      {},
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const data: CustomObject<CustomObject<Player>> = {};
        const group = _.groupBy(result.data, 'team');
        Object.entries(group ?? {}).forEach(([teamId, players]) => {
          data[teamId] = _.keyBy(players, 'id');
        });
        yield put(playersAction.fetchPlayersAllPlayer(data));
        saveDataToFile('players', data);
      } else {
        yield put(playersAction.fetchPlayers());
      }
      yield put(
        userActions.changePrepareStatus({ status: 'Fetching Leagues...' }),
      );
    } else {
      yield put(playersAction.fetchPlayers());
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(playersAction.fetchPlayers());
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

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
  yield all([
    takeEvery(playersAction.getPlayers.type, getPlayers),
    takeEvery(playersAction.getAllPlayers.type, getAllPlayers),
  ]);
}
