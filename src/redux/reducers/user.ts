import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import type { SignInAction, UserData, UserState } from '../types/users';

export const initialState: UserState = {
  handling: false,
  fetching: true,
  fetchStatus: 'Fetching resources',
};

const userSlice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    fetchUser(state, action: PayloadAction<UserData>) {
      state.handling = false;
      state.data = action.payload;
    },
    fetchUserData(
      state,
      action: PayloadAction<{
        path: string;
        data: any;
      }>,
    ) {
      const { path, data } = action.payload;
      state.handling = false;
      _.set(state, `data.${path}`, data);
    },
    changePrepareStatus(
      state,
      action: PayloadAction<{ status: string; isFinish?: boolean }>,
    ) {
      state.fetchStatus = action.payload.status;
      if (action.payload.isFinish) {
        state.fetching = false;
      }
    },
    signIn(state, _action: SignInAction) {
      state.handling = true;
    },
    signOut(state) {
      state.data = undefined;
    },
    prepareData(state) {
      state.fetching = true;
    },
    updateUserData(
      state,
      _action: PayloadAction<{
        path: string;
        data: any;
      }>,
    ) {
      state.handling = true;
    },
  },
});

export const { actions, reducer } = userSlice;
