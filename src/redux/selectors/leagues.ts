import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/teams';
import { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.leagueStore || initialState;

export const selectLeagueHandling = createSelector(
  [selectDomain],
  (state) => state.handling,
);

export const selectLeagues = createSelector(
  [selectDomain],
  (state) => state.data,
);
