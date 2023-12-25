import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { League, LeagueStore } from '../types/leagues';

export const initialState: LeagueStore = { handling: false };

const slice = createSlice({
  name: 'leagueStore',
  initialState,
  reducers: {
    fetchLeagues(state, action: PayloadAction<CustomObject<League>>) {
      state.handling = false;
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    getLeagues(state) {
      state.handling = true;
    },
  },
});

export const { actions, name: key, reducer } = slice;
