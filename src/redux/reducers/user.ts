import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { SignInAction, UserData, UserState } from '../types/users';

export const initialState: UserState = {
  handling: false,
};

const userSlice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    fetchUser(state, action: PayloadAction<UserData>) {
      state.handling = false;
      state.data = action.payload;
    },
    signIn(state, _action: SignInAction) {
      state.handling = true;
    },
    signOut(state) {
      state.data = undefined;
    },
  },
});

export const { actions, reducer } = userSlice;
