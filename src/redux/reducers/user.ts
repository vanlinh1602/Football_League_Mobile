import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  },
});

export const { actions, reducer } = userSlice;
