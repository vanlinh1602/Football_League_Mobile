import { ScrollView, View } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { leagues } from '../../../../lib/options';
import S from './styles';

type Props = {
  onPress: () => void;
};

const ListLeagues = ({ onPress }: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={S.scrollView}>
      <View flexDirection="row" marginBottom={2}>
        {leagues.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={S.touchableOpacity}
            onPress={onPress}>
            <View style={S.view}>
              <Image source={category.img} style={S.image} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ListLeagues;
