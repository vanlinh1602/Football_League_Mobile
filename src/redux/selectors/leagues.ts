import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/teams';
import { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.leagueStore || initialState;
const selectPath = (state: RootState, path: string) => path;

export const selectLeagueHandling = createSelector(
  [selectDomain],
  (state) => state.handling,
);

export const selectLeagues = createSelector(
  [selectDomain],
  (state) => state.data,
);
export const selectLeague = createSelector(
  [selectDomain, selectPath],
  (state, id) => state.data?.[id],
);
