import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player, PlayersStore } from '../types/players';

export const initialState: PlayersStore = {
  handling: false,
};

const teamsSlice = createSlice({
  name: 'playerStore',
  initialState,
  reducers: {
    fetchPlayers(
      state,
      action: PayloadAction<
        { team: string; players: CustomObject<Player> } | undefined
      >,
    ) {
      state.handling = false;
      if (action.payload) {
        const { team, players } = action.payload;
        state.data = {
          ...state.data,
          [team]: players,
        };
      }
    },
    getPlayers(state, _action: PayloadAction<string>) {
      state.handling = true;
    },
  },
});

export const { actions, reducer } = teamsSlice;
