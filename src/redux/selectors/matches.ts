import { createSelector } from '@reduxjs/toolkit';
import moment from 'moment';

import { initialState } from '../reducers/matches';
import { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.matchStore || initialState;
const selectPath = (state: RootState, path: string) => path;
const selectDate = (state: RootState, date: number) => date;

export const selectMatchHandling = createSelector(
  [selectDomain],
  (state) => state.handling,
);

export const selectMatchs = createSelector(
  [selectDomain],
  (state) => state.matches,
);

export const selectEvents = createSelector(
  [selectDomain],
  (state) => state.events,
);

export const selectLeagueMatches = createSelector(
  [selectMatchs, selectPath],
  (matches, league) => {
    const result = Object.values(matches ?? {}).filter(
      (match) => match.league === league,
    );
    return result;
  },
);

export const selectMatch = createSelector(
  [selectMatchs, selectPath],
  (matches, id) => matches?.[id],
);

export const selectMatchEvents = createSelector(
  [selectEvents, selectPath],
  (events, match) => events?.[match],
);

export const selectCurrentMatch = createSelector([selectDomain], (state) => {
  const matchData = Object.values(state.matches ?? {}).filter(
    ({ date }) => date <= Date.now(),
  );
  const sorted = matchData.sort((a, b) => b.date - a.date);
  return sorted.shift();
});

export const selectMatchInDay = createSelector(
  [selectDomain, selectDate],
  (state, time) => {
    const matchData = Object.values(state.matches ?? {}).filter(
      ({ date }) =>
        moment(date).format('DD/MM/YYYY') === moment(time).format('DD/MM/YYYY'),
    );
    const sorted = matchData.sort((a, b) => a.date - b.date);
    return sorted;
  },
);
