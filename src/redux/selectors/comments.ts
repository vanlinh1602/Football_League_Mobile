import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/teams';
import { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.commentStore || initialState;
const selectPath = (state: RootState, path: string) => path;

export const selectCommentHandling = createSelector(
  [selectDomain],
  (commentStore) => commentStore.handling,
);

export const selectComment = createSelector(
  [selectDomain, selectPath],
  (commentStore, path) => {
    return commentStore.data?.[path];
  },
);
