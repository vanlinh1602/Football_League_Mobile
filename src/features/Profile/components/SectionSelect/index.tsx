import { HStack, Image, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import S from './styles';

type Props = {
  title: string;
  image: any;
  onPress: () => void;
};

const SectionSelect = ({ onPress, title, image }: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <HStack alignItems="center" space={5}>
          <Image style={S.image} source={image} alt="" />
          <Text style={S.text}>{title}</Text>
        </HStack>
      </TouchableOpacity>
    </View>
  );
};

export default SectionSelect;
