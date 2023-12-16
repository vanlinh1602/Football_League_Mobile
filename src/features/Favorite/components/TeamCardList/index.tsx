import { Text, View } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';

import { logos } from '../../../../lib/assets';
import { playerCard } from '../../../../lib/options';
import S from './styles';

const TeamCardList = () => {
  return (
    <View>
      {playerCard.map((card,index) => (
          <View key={index} style={S.iconContainer}>
          <ImageBackground
            source={logos.Arsenal}
            style={S.container}
            borderRadius={20}
          >
          </ImageBackground>
          <Text style={S.playerName}>{card.name}</Text>
          </View>
      ))}
    </View>
  );
};
export default TeamCardList;
