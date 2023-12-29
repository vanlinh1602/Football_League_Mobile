import {
  HStack,
  Image,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useMemo, useState } from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import StatisticCard from '../../features/Statistic/components/StatisticCard/StatisticTable';
import { calculatePlayerStatistic } from '../../lib/common';
import { AntDesign, Fontisto } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { selectEvents, selectTeamMatch } from '../../redux/selectors/matches';
import { selectPlayer } from '../../redux/selectors/players';
import { selectTeam } from '../../redux/selectors/teams';
import { RootState } from '../../redux/types/RootState';
import S from './styles';

type Props = HomeStackScreenProps<'PlayerStatictics'>;

const PlayerStatictics = ({ navigation, route }: Props) => {
  const { id } = route.params;
  const player = useSelector((state: RootState) => selectPlayer(state, id));
  const matches = useSelector((state: RootState) =>
    selectTeamMatch(state, player.team),
  );
  const team = useSelector((state: RootState) =>
    selectTeam(state, player.team),
  );
  const events = useSelector(selectEvents);
  const statisticPlayer = useMemo(() => {
    return calculatePlayerStatistic(id, matches, events ?? {});
  }, [id, matches, events]);
  return (
    <ScrollView>
      <VStack>
        <ImageBackground
          style={S.imageBackground}
          source={{ uri: player.avatar || ''}}
          resizeMode="center">
          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </VStack>
      <View style={S.playerNameContainer}>
        <HStack justifyContent="space-between">
          <Text style={S.playerName} color="#003E88">
            {player.name}
          </Text>
          <Image source={{ uri: team?.logo || ''}} alt="logo" style={S.teamLogo} />
        </HStack>
      </View>
      <View>
        <StatisticCard
          shots={statisticPlayer.shots}
          goals={statisticPlayer.goals}
          errors={statisticPlayer.errors}
          yelloCard={statisticPlayer.yellowCard}
          redCard={statisticPlayer.redCard}
          offSide={statisticPlayer.offSide}
          cornerKick={statisticPlayer.cornerKick}
        />
      </View>
    </ScrollView>
  );
};

export default PlayerStatictics;
