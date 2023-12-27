import type { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { Alert } from 'react-native';
import { all, put, takeEvery } from 'redux-saga/effects';

import { backendService } from '../../services';
import formatError from '../../utils/formatError';
import { actions as matchAction } from '../reducers/matches';
import { actions as userActions } from '../reducers/user';
import { Event, Match } from '../types/matches';

function* getMatchs(action: PayloadAction<string>) {
  try {
    const league = action.payload;
    const result: WithApiResult<Match[]> = yield backendService.post(
      'api/getMatchs',
      { league },
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const leagues = _.keyBy(result.data, 'id');
        yield put(matchAction.fetchMatchs(leagues));
      } else {
        yield put(matchAction.fetchMatchs({}));
      }
    } else {
      yield put(matchAction.fetchMatchs());
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(matchAction.fetchMatchs());
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

function* getAllMatchs() {
  try {
    const result: WithApiResult<Match[]> = yield backendService.post(
      'api/getAllMatchs',
      {},
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const matches = _.keyBy(result.data, 'id');
        yield put(matchAction.fetchMatchs(matches));
      } else {
        yield put(matchAction.fetchMatchs({}));
      }
      yield put(
        userActions.changePrepareStatus({ status: 'Fetching Events...' }),
      );
    } else {
      yield put(matchAction.fetchMatchs());
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(matchAction.fetchMatchs());
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

function* getEvents(action: PayloadAction<string>) {
  try {
    const match = action.payload;
    const result: WithApiResult<Event[]> = yield backendService.post(
      'api/getEvents',
      { match },
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const events = _.keyBy(result.data, 'id');
        yield put(matchAction.fetchEvents({ match, data: events }));
      } else {
        yield put(matchAction.fetchMatchs({}));
      }
    } else {
      yield put(matchAction.fetchMatchs());
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(matchAction.fetchMatchs());
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

function* getAllEvents() {
  try {
    const result: WithApiResult<Event[]> = yield backendService.post(
      'api/getAllEvents',
      {},
    );
    if (result.kind === 'ok') {
      if (result.data.length) {
        const dataUpdate: CustomObject<CustomObject<Event>> = {};
        const events = _.groupBy(result.data, 'match');
        Object.entries(events).forEach(([match, matchEvent]) => {
          dataUpdate[match] = _.keyBy(matchEvent, 'id');
        });
        yield put(matchAction.fetchAllEvents(dataUpdate));
      } else {
        yield put(matchAction.fetchMatchs({}));
      }
      yield put(
        userActions.changePrepareStatus({
          status: 'Completed...',
          isFinish: true,
        }),
      );
    } else {
      yield put(matchAction.fetchMatchs());
      Alert.alert('Lỗi tra cứu', formatError(result));
    }
  } catch (error) {
    yield put(matchAction.fetchMatchs());
    Alert.alert('Lỗi tra cứu', formatError(error));
  }
}

export default function* saga() {
  yield all([
    takeEvery(matchAction.getMatchs.type, getMatchs),
    takeEvery(matchAction.getEvents.type, getEvents),
    takeEvery(matchAction.getAllMatch.type, getAllMatchs),
    takeEvery(matchAction.getAllEvents.type, getAllEvents),
  ]);
}
