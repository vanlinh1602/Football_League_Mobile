import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Text, View } from 'native-base';
import S from './styles';

type Props = {
  name: string;
  image: any;
};

const CategoriesCard = ({ name, image }: Props) => {
  return (
    <ImageBackground source={image} imageStyle={S.imageStyle}>
      <TouchableOpacity>
        <View style={S.container} alignItems="center">
          <Text style={S.text}>{name}</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CategoriesCard;
