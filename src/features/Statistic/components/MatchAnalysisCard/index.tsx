import { Divider, HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';

import { logos } from '../../../../lib/assets';
import S from './styles';

const MatchAnalysisCard = () => {
  return (
    <View pt={4}>
      <View style={S.container}>
        <HStack justifyContent="space-between">
          <VStack alignItems="center" space={1}>
            <Image style={S.avatar} source={logos.FC_Barcelona} alt="" />
            <Text fontSize={16}>Bacelona</Text>
          </VStack>
          <Divider bg="#000" orientation="vertical" />
          <VStack alignItems="center" space={1}>
            <Image style={S.avatar} source={logos.Manchester_City} alt="" />
            <Text fontSize={16}>Man City</Text>
          </VStack>
        </HStack>
      </View>
      <VStack style={S.date} alignItems="center">
        <Text color="#0047ff">14</Text>
        <Text marginTop={-1} fontSize={12} color="grey">
          Tue
        </Text>
      </VStack>
    </View>
  );
};

export default MatchAnalysisCard;
