import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Team, TeamStore } from '../types/teams';

export const initialState: TeamStore = {
  handling: false,
};

const teamsSlice = createSlice({
  name: 'teamStore',
  initialState,
  reducers: {
    fetchTeams(state, action: PayloadAction<CustomObject<Team>>) {
      state.handling = false;
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
    getTeams(state) {
      state.handling = true;
    },
  },
});

export const { actions, reducer } = teamsSlice;
