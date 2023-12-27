import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { Event, Match, Statistic } from '../redux/types/matches';

export const getUid = () => {
  return uuidv4();
};

export const takeRandomValue = <T>(array: T[], size: number = 6): T[] => {
  const subArray = [];
  const arrayIndex: number[] = [];
  for (let i = 0; i < size; i += 1) {
    if (arrayIndex.length >= array.length) {
      break;
    }
    let index = Math.floor(Math.random() * array.length);
    while (arrayIndex.includes(index)) {
      index = Math.floor(Math.random() * array.length);
    }
    subArray.push(array[index]);
    arrayIndex.push(index);
  }
  return subArray;
};

export const calculateTeamStatistic = (
  team: string,
  matches: CustomObject<Match>,
  events: CustomObject<CustomObject<Event>>,
): Statistic => {
  const data: Statistic = {
    shots: 0,
    goals: 0,
    offSide: 0,
    cornerKick: 0,
    errors: 0,
    redCard: 0,
    yellowCard: 0,
    win: 0,
    lose: 0,
    rate: 0,
    draw: 0,
  };

  if (!_.size(events)) {
    return data;
  }

  Object.values(matches).forEach((match) => {
    const matchEvent = events[match.id] ?? {};
    Object.values(matchEvent).forEach((event) => {
      if (event.detail.team === team) {
        data[event.name as keyof Statistic] += 1;
      }
    });
    if (team === match.teamA) {
      if ((match.mathResult?.teamA || 0) > (match.mathResult?.teamB || 0)) {
        data.win! += 1;
      } else if (
        (match.mathResult?.teamA || 0) === (match.mathResult?.teamB || 0)
      ) {
        data.draw! += 1;
      } else {
        data.lose! += 1;
      }
    }
  });
  data.rate = _.round((data.win! * 100) / Object.keys(matches).length, 0) || 0;
  return data;
};

export const calculatePlayerStatistic = (
  player: string,
  matches: CustomObject<Match>,
  events: CustomObject<CustomObject<Event>>,
): Statistic => {
  const data: Statistic = {
    shots: 0,
    goals: 0,
    offSide: 0,
    cornerKick: 0,
    errors: 0,
    redCard: 0,
    yellowCard: 0,
  };

  if (!_.size(events)) {
    return data;
  }

  Object.values(matches).forEach((match) => {
    const matchEvent = events[match.id] ?? {};
    Object.values(matchEvent).forEach((event) => {
      if (event.detail.player === player) {
        data[event.name as keyof Statistic] += 1;
      }
    });
  });
  return data;
};
