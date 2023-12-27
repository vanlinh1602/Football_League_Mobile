import { HStack, Text, View } from 'native-base';
import React from 'react';

import S from './styles';
type Props = {
  StatisticName: string;
  StatisticValue1: number;
  StatisticValue2: number;
};

const StatisticComparisonLine = ({
  StatisticName,
  StatisticValue1,
  StatisticValue2,
}: Props) => {
  return (
    <View>
      <HStack>
        <View style={S.statisticValue1Container}>
          <Text style={S.statisticValue1}>{StatisticValue1}</Text>
        </View>
        <View style={S.statisticName}>
          <Text style={S.statisticTitle}>{StatisticName}</Text>
        </View>
        <View style={S.statisticValue2Container}>
          <Text style={S.statisticValue2}>{StatisticValue2}</Text>
        </View>
      </HStack>
      <View style={S.underline}></View>
    </View>
  );
};

export default StatisticComparisonLine;
