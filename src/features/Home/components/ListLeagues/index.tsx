import { ScrollView, View } from 'native-base';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import { leagues } from '../../../../lib/options';
import S from './styles';

type Props = {};

const ListLeagues = ({}: Props) => {
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
            onPress={() => {}}>
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
