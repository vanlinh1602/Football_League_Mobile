import { createSlice } from '@reduxjs/toolkit';

import type { UserState } from '../types/users';

export const initialState: UserState = {
  info: {},
  admin: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions, reducer } = userSlice;
