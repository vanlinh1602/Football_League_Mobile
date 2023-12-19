import { Divider, HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { logos } from '../../../../lib/assets';
import S from './styles';

type Props = {
  colorLiner: string[];
  onPress: () => void;
};

const PopularTeamCard = ({ colorLiner, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={S.container}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          colors={colorLiner}
          style={S.linearGradient}>
          <VStack>
            <HStack p={3} pl={5} alignItems="center" space={5}>
              <Image style={S.image} source={logos.Chelsea} alt="" />
              <VStack>
                <Text fontWeight="bold" fontSize={24}>
                  Chelsea
                </Text>
                <Text style={S.rank}>Top 10</Text>
              </VStack>
            </HStack>
            <View alignItems="center">
              <Divider thickness={1} bg="#000" width={230} />
            </View>

            <HStack p={2} pl={5} pr={5} justifyContent="space-between">
              <VStack alignItems="center">
                <Text fontSize={20}>5</Text>
                <Text fontSize={16}>Win</Text>
              </VStack>
              <VStack alignItems="center">
                <Text fontSize={20}>1</Text>
                <Text fontSize={16}>Draw</Text>
              </VStack>
              <VStack alignItems="center">
                <Text fontSize={20}>2</Text>
                <Text fontSize={16}>Lose</Text>
              </VStack>
              <VStack alignItems="center">
                <Text fontSize={20}>60</Text>
                <Text fontSize={16}>Rate</Text>
              </VStack>
            </HStack>
          </VStack>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default PopularTeamCard;
