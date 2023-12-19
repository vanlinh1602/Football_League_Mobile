import { Text, View } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';

import S from './styles';

type Props = {
  name: string;
  image: any;
  onPress: () => void;
};

const CategoriesCard = ({ name, image, onPress }: Props) => {
  return (
    <ImageBackground source={image} imageStyle={S.imageStyle}>
      <TouchableOpacity onPress={onPress}>
        <View style={S.container} alignItems="center">
          <Text style={S.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CategoriesCard;
