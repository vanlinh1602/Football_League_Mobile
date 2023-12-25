import { LeagueStore } from './leagues';
import { MatchStore } from './matches';
import { PlayersStore } from './players';
import { TeamStore } from './teams';
import type { UserState } from './users';

export type RootState = {
  userStore: UserState;
  teamStore: TeamStore;
  playerStore: PlayersStore;
  leagueStore: LeagueStore;
  matchStore: MatchStore;
};
