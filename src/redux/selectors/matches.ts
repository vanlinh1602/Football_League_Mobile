import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/matches';
import { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.matchStore || initialState;
const selectPath = (state: RootState, path: string) => path;

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
