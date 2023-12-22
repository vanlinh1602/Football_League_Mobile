import { random } from 'lodash';
import { HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';

import { card_BG, logos } from '../../../../lib/assets';
import S from './styles';

type Props = {
  mini?: boolean;
};

const MatchCard = ({ mini }: Props) => {
  return (
    <ImageBackground
      imageStyle={mini ? S.backgroundMini : S.background}
      source={card_BG[`card${random(1, 8)}`]}
      >
      <View style={mini ? S.viewMini : S.view} padding={5}>
        <VStack alignItems={mini ? 'flex-start' : 'center'} paddingBottom={5}>
          <Text fontSize={mini ? 16 : 24} fontWeight="bold" color="white">
            Premier League
          </Text>
          <Text color="white" fontWeight="bold">
            England
          </Text>
        </VStack>
        <HStack space={mini ? 6 : 12}>
          <VStack alignItems="center">
            <Image
              source={logos.Chelsea}
              alt=""
              style={mini ? S.imageMini : S.image}
            />
            <Text color="white">Chelsea</Text>
          </VStack>
          <VStack alignItems="center">
            <Text fontSize={30} color="white" fontWeight="bold">
              0 : 1
            </Text>
            <Text style={mini ? S.dateMini : S.date}>10 - 9</Text>
          </VStack>
          <VStack alignItems="center">
            <Image
              source={logos.Arsenal}
              alt=""
              style={mini ? S.imageMini : S.image}
            />
            <Text color="white">Arsenal</Text>
          </VStack>
        </HStack>
      </View>
    </ImageBackground>
  );
};

export default MatchCard;
