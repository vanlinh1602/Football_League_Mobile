import { HStack, Text, View } from 'native-base';

import S from './styles';
type Props = {
  StatisticName: string;
  StatisticValue: number;
};

const StatisticLine = ({ StatisticName, StatisticValue }: Props) => {
  return (
    <View style={S.container}>
      <HStack>
        <Text style={S.statisticName}>{StatisticName}</Text>
        <Text style={S.statisticValue}>{StatisticValue}</Text>
      </HStack>
      <View style={S.underline}></View>
    </View>
  );
};

export default StatisticLine;
