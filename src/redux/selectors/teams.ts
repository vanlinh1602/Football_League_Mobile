import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/teams';
import type { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.teamStore || initialState;

const path = (state: RootState, path: string) => path;

export const selectTeams = createSelector(
  [selectDomain],
  (state) => state.data,
);

export const selectTeam = createSelector(
  [selectDomain, path],
  (state, path) => state.data?.[path],
);
