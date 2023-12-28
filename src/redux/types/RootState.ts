import type { CommentsState } from './comments';
import type { LeagueStore } from './leagues';
import type { MatchStore } from './matches';
import type { PlayersStore } from './players';
import type { TeamStore } from './teams';
import type { UserState } from './users';

export type RootState = {
  userStore: UserState;
  teamStore: TeamStore;
  playerStore: PlayersStore;
  leagueStore: LeagueStore;
  matchStore: MatchStore;
  commentStore: CommentsState;
};
