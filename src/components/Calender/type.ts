export type CalendarData = {
  teamA: string;
  teamAImage: any;
  teamB: string;
  teamBImage: any;
  time: number;
};

export type CalendarRecord = {
  title: number;
  data: CalendarData[];
};
