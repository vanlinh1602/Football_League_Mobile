import _ from 'lodash';
import { Alert } from 'react-native';
import { all, put, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import formatError from '../../utils/formatError';
import { actions as leagueAction } from '../reducers/leagues';
import { actions as userActions } from '../reducers/user';
import { League } from '../types/leagues';

function* getLeagues() {
  try {
    const result: WithApiResult<League[]> = yield backendService.post(
      'api/getLeagues',
      {},
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const leagues = _.keyBy(result.data, 'id');
        yield put(leagueAction.fetchLeagues(leagues));
      } else {
        yield put(leagueAction.fetchLeagues({}));
      }
      yield put(
        userActions.changePrepareStatus({ status: 'Fetching Matches...' }),
      );
    } else {
      yield put(leagueAction.fetchLeagues({}));
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(leagueAction.fetchLeagues({}));
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

export default function* saga() {
  yield all([takeEvery(leagueAction.getLeagues.type, getLeagues)]);
}
