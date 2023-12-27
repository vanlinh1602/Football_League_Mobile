export type MatchStore = {
  handling: boolean;
  matches?: CustomObject<Match>;
  /**
   * [match] : {
   *  [eventId]: Event
   * }
   */
  events?: CustomObject<CustomObject<Event>>;
};

export type Match = {
  id: string;
  teamA: string;
  teamB: string;
  date: number;
  round: string;
  video?: string;
  mathResult?: {
    teamA?: number;
    teamB?: number;
  };
  league: string;
  place: string;
};

export type Event = {
  id: string;
  match: string;
  name: string;
  minute: number;
  detail: {
    team: string;
    player?: string;
  };
};

export type Statistic = {
  shots: number;
  goals: number;
  offSide: number;
  cornerKick: number;
  errors: number;
  redCard: number;
  yellowCard: number;
  win?: number;
  lose?: number;
  draw?: number;
  rate?: number;
};
