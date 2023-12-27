import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '../reducers/players';
import { Player } from '../types/players';
import { RootState } from '../types/RootState';

const selectDomain = (state: RootState) => state?.playerStore || initialState;
const selectPath = (state: RootState, path: string) => path;
const selectPathArray = (state: RootState, path: string[]) => path;

export const selectPlayerHandling = createSelector(
  [selectDomain],
  (state) => state.handling,
);

export const selectPlayers = createSelector(
  [selectDomain],
  (state) => state.data,
);

export const selectPlayer = createSelector(
  [selectDomain, selectPath],
  (state, id) => {
    const playerData = state.data ?? {};
    const teamId =
      Object.keys(playerData).find((tId) =>
        Object.keys(playerData[tId] ?? {}).includes(id),
      ) ?? '';
    return playerData[teamId]?.[id];
  },
);

export const selectAllPlayer = createSelector([selectDomain], (state) => {
  let players: CustomObject<Player> = {};
  Object.values(state.data ?? {}).forEach((teamPLayer) => {
    players = {
      ...players,
      ...teamPLayer,
    };
  });
  return players;
});

export const selectPlayersOfTeams = createSelector(
  [selectPlayers, selectPath],
  (players, path) => players?.[path],
);

export const selectPlayerInLeague = createSelector(
  [selectDomain, selectPathArray],
  (state, teams) => {
    const players: CustomObject<Player> = {};
    Object.values(teams).forEach((team) => {
      Object.entries(state.data?.[team] ?? {}).forEach(([id, data]) => {
        players[id] = data;
      });
    });
    return players;
  },
);
