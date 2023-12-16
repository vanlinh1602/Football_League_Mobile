import { Text, View, VStack } from 'native-base';
import React from 'react';

import StatisticLine from './StatisticLine';
type Props = {
  shots: number;
  goals: number;
  errors: number;
  yelloCard: number;
  redCard: number;
  offSide: number;
  cornerKick: number;
};

const StatisticCard = ({
  shots,
  goals,
  errors,
  yelloCard,
  redCard,
  offSide,
  cornerKick,
}: Props) => {
  return (
    <VStack>
      <Text fontSize={25} marginTop={5} marginLeft={5}>
        Statistics
      </Text>
      <View marginTop={5}>
        <StatisticLine StatisticName="Shots" StatisticValue={shots} />
        <StatisticLine StatisticName="Goals" StatisticValue={goals} />
        <StatisticLine StatisticName="Errors" StatisticValue={errors} />
        <StatisticLine StatisticName="Yellow Card" StatisticValue={yelloCard} />
        <StatisticLine StatisticName="Red Card" StatisticValue={redCard} />
        <StatisticLine StatisticName="Offside" StatisticValue={offSide} />
        <StatisticLine
          StatisticName="Corner Kick"
          StatisticValue={cornerKick}
        />
      </View>
    </VStack>
  );
};

export default StatisticCard;
