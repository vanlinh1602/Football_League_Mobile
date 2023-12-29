import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/user';
import type { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.userStore || initialState;
const selectPath = (state: RootState, path: string) => path;

export const selectUser = createSelector([selectDomain], (state) => state.data);

export const selectFetching = createSelector(
  [selectDomain],
  (state) => state.fetching,
);
export const selectFetchingStatus = createSelector(
  [selectDomain],
  (state) => state.fetchStatus,
);

export const selectUserFavorite = createSelector(
  [selectDomain, selectPath],
  (state, path) =>
    state.data?.favorite?.[path as 'league' | 'team' | 'player'] ?? [],
);
