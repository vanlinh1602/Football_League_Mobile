import { Text, View } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import { selectLeague } from '../../../../redux/selectors/leagues';
import { selectPlayer } from '../../../../redux/selectors/players';
import { selectTeam } from '../../../../redux/selectors/teams';
import { League } from '../../../../redux/types/leagues';
import { Player } from '../../../../redux/types/players';
import { RootState } from '../../../../redux/types/RootState';
import { Team } from '../../../../redux/types/teams';
import S from './styles';

type Props = {
  type: 'player' | 'team' | 'league';
  id: string;
};

const FavoriteList = ({ type, id }: Props) => {
  const data = useSelector((state: RootState) => {
    if (type === 'player') return selectPlayer(state, id);
    if (type === 'team') return selectTeam(state, id);
    if (type === 'league') return selectLeague(state, id);
  });

  return (
    <View alignItems="center">
      <ImageBackground
        source={{
          uri:
            (data as Player)?.avatar ||
            (data as Team)?.logo ||
            (data as League)?.image,
        }}
        style={S.container}
        borderRadius={20}></ImageBackground>
      <Text textAlign="center" style={S.playerName}>
        {data?.name}
      </Text>
    </View>
  );
};

export default FavoriteList;
