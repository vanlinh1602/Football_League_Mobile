import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player, PlayersStore } from '../types/players';

export const initialState: PlayersStore = {
  handling: true,
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
    fetchPlayersAllPlayer(
      state,
      action: PayloadAction<CustomObject<CustomObject<Player>>>,
    ) {
      state.handling = false;
      state.data = action.payload;
    },
    getPlayers(state, _action: PayloadAction<string>) {
      state.handling = true;
    },
    getAllPlayers(state) {
      state.handling = true;
    },
  },
});

export const { actions, reducer } = teamsSlice;
