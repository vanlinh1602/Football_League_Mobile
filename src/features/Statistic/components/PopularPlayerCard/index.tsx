import { Image, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import { selectTeam } from '../../../../redux/selectors/teams';
import { Player } from '../../../../redux/types/players';
import { RootState } from '../../../../redux/types/RootState';
import S from './styles';

type Props = {
  colorLiner: string[];
  onPress: () => void;
  player: Player;
};

const PopularPlayerCard = ({ colorLiner, onPress, player }: Props) => {
  const team = useSelector((state: RootState) =>
    selectTeam(state, player.team),
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View paddingBottom={3}>
        <LinearGradient
          start={{ x: 1, y: 0.1 }}
          end={{ x: 1, y: 1 }}
          colors={colorLiner}
          style={S.linearGradient}>
          <View style={S.container} alignItems="center">
            <Image style={S.logo} source={{ uri: team?.logo || '' }} alt="" />
            <Text fontSize={20} fontWeight="bold">
              {player.name}
            </Text>
          </View>
        </LinearGradient>
        <Text style={S.point}>{player.number || 12}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularPlayerCard;
