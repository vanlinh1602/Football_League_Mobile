import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/user';
import type { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.user || initialState;

export const selectUser = createSelector([selectDomain], state => state.data);
