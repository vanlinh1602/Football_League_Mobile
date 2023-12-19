import { View, VStack } from 'native-base';
import React from 'react';

import StatisticComparisonLine from './StatisticComparisonLine';
type Props = {
  shotsTeam1: number;
  shotsTeam2: number;
  goalsTeam1: number;
  goalsTeam2: number;
  errorsTeam1: number;
  errorsTeam2: number;
  yelloCardTeam1: number;
  yelloCardTeam2: number;
  redCardTeam1: number;
  redCardTeam2: number;
  offSideTeam1: number;
  offSideTeam2: number;
  cornerKickTeam1: number;
  cornerKickTeam2: number;
};

const StatisticComparisonTable = ({
  shotsTeam1,
  goalsTeam1,
  errorsTeam1,
  yelloCardTeam1,
  redCardTeam1,
  offSideTeam1,
  cornerKickTeam1,
  shotsTeam2,
  goalsTeam2,
  errorsTeam2,
  yelloCardTeam2,
  redCardTeam2,
  offSideTeam2,
  cornerKickTeam2,
}: Props) => {
  return (
    <VStack>
      <View marginTop={5}>
        <StatisticComparisonLine
          StatisticName="Shots"
          StatisticValue1={shotsTeam1}
          StatisticValue2={shotsTeam2}
        />
        <StatisticComparisonLine
          StatisticName="Goals"
          StatisticValue1={goalsTeam1}
          StatisticValue2={goalsTeam2}
        />
        <StatisticComparisonLine
          StatisticName="Errors"
          StatisticValue1={errorsTeam1}
          StatisticValue2={errorsTeam2}
        />
        <StatisticComparisonLine
          StatisticName="Yellow Card"
          StatisticValue1={yelloCardTeam1}
          StatisticValue2={yelloCardTeam2}
        />
        <StatisticComparisonLine
          StatisticName="Red Card"
          StatisticValue1={redCardTeam1}
          StatisticValue2={redCardTeam2}
        />
        <StatisticComparisonLine
          StatisticName="Offside"
          StatisticValue1={offSideTeam1}
          StatisticValue2={offSideTeam2}
        />
        <StatisticComparisonLine
          StatisticName="Corner Kick"
          StatisticValue1={cornerKickTeam1}
          StatisticValue2={cornerKickTeam2}
        />
      </View>
    </VStack>
  );
};

export default StatisticComparisonTable;
