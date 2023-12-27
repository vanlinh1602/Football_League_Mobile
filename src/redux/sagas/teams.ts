import _ from 'lodash';
import { Alert } from 'react-native';
import { all, put, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import formatError from '../../utils/formatError';
import { saveDataToFile } from '../../utils/localStorage';
import { actions as teamActions } from '../reducers/teams';
import { actions as userActions } from '../reducers/user';
import { Team } from '../types/teams';

function* getTeams() {
  try {
    const result: WithApiResult<Team[]> = yield backendService.post(
      'api/getTeams',
      {},
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const teams = _.keyBy(result.data, 'id');
        yield put(teamActions.fetchTeams(teams));
        saveDataToFile('teams', teams);
      } else {
        yield put(teamActions.fetchTeams({}));
      }
      yield put(
        userActions.changePrepareStatus({ status: 'Fetching Players...' }),
      );
    } else {
      yield put(teamActions.fetchTeams({}));
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(teamActions.fetchTeams({}));
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

export default function* usersSaga() {
  yield all([takeEvery(teamActions.getTeams.type, getTeams)]);
}
