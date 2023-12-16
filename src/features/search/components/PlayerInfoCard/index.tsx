import { Text, View } from 'native-base';
import React from 'react';

import S from './styles';

type Props = {
  name: string;
  score: string;
};

const PlayerInfoCard = ({ name, score }: Props) => {
  return (
    <View style={S.container} alignItems="center">
      <Text style={S.text}>{name}</Text>
      <View marginTop={10}>
        <Text style={S.scoreText}> {score} </Text>
      </View>
    </View>
  );
};

export default PlayerInfoCard;
