import { View, VStack } from 'native-base';
import React from 'react';

import { Statistic } from '../../../../../redux/types/matches';
import StatisticComparisonLine from './StatisticComparisonLine';
type Props = {
  teamA: Statistic;
  teamB: Statistic;
};

const StatisticComparisonTable = ({ teamA, teamB }: Props) => {
  return (
    <VStack>
      <View marginTop={5}>
        <StatisticComparisonLine
          StatisticName="Shots"
          StatisticValue1={teamA.shots}
          StatisticValue2={teamB.shots}
        />
        <StatisticComparisonLine
          StatisticName="Goals"
          StatisticValue1={teamA.goals}
          StatisticValue2={teamB.goals}
        />
        <StatisticComparisonLine
          StatisticName="Errors"
          StatisticValue1={teamA.errors}
          StatisticValue2={teamB.errors}
        />
        <StatisticComparisonLine
          StatisticName="Yellow Card"
          StatisticValue1={teamA.yellowCard}
          StatisticValue2={teamB.yellowCard}
        />
        <StatisticComparisonLine
          StatisticName="Red Card"
          StatisticValue1={teamA.redCard}
          StatisticValue2={teamB.redCard}
        />
        <StatisticComparisonLine
          StatisticName="Offside"
          StatisticValue1={teamA.offSide}
          StatisticValue2={teamB.offSide}
        />
        <StatisticComparisonLine
          StatisticName="Corner Kick"
          StatisticValue1={teamA.cornerKick}
          StatisticValue2={teamB.cornerKick}
        />
      </View>
    </VStack>
  );
};

export default StatisticComparisonTable;
