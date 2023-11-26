import { Image, Text, View } from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { logos } from '../../../../lib/assets';
import S from './styles';

type Props = {
  colorLiner: string[];
};

const PopularPlayerCard = ({ colorLiner }: Props) => {
  return (
    <View paddingBottom={3}>
      <LinearGradient
        start={{ x: 1, y: 0.1 }}
        end={{ x: 1, y: 1 }}
        colors={colorLiner}
        style={S.linearGradient}>
        <View style={S.container} alignItems="center">
          <Image style={S.logo} source={logos.Arsenal} alt="" />
          <Text fontSize={20} fontWeight="bold">
            E. Haaland
          </Text>
        </View>
      </LinearGradient>
      <Text style={S.point}>12</Text>
    </View>
  );
};

export default PopularPlayerCard;
