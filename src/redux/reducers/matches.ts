import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Event, Match, MatchStore } from '../types/matches';

export const initialState: MatchStore = { handling: false };

const slice = createSlice({
  name: 'matchStore',
  initialState,
  reducers: {
    fetchMatchs(state, action: PayloadAction<CustomObject<Match> | undefined>) {
      state.handling = false;
      if (action.payload) {
        state.matches = {
          ...state.matches,
          ...action.payload,
        };
      }
    },
    fetchEvents(
      state,
      action: PayloadAction<{ match: string; data: CustomObject<Event> }>,
    ) {
      state.handling = false;
      if (action.payload) {
        const { match, data } = action.payload;
        state.events = {
          ...state.events,
          [match]: {
            ...state.events?.[match],
            ...data,
          },
        };
      }
    },
    getMatchs(state, _action: PayloadAction<string>) {
      state.handling = true;
    },
    getEvents(state, _action: PayloadAction<string>) {
      state.handling = true;
    },
  },
});

export const { actions, name: key, reducer } = slice;
