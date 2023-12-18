import { ScrollView,Text, View } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';

import { playerCard } from '../../../../lib/options';
import S from './styles';

const PlayerCardList = () => {
  return (
    <ScrollView horizontal>
      {playerCard.map((card,index) => (
          <View key={index}>
          <ImageBackground
            source={card.ava}
            style={S.container}
            borderRadius={20}
          >
          </ImageBackground>
          <Text style={S.playerName}>{card.name}</Text>
          </View>
      ))}
    </ScrollView>
  );
};

export default PlayerCardList;
