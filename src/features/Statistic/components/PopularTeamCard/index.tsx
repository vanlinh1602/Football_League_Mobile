import { Divider, HStack, Image, Text, View, VStack } from 'native-base';
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import { calculateTeamStatistic } from '../../../../lib/common';
import {
  selectEvents,
  selectTeamMatch,
} from '../../../../redux/selectors/matches';
import { Statistic } from '../../../../redux/types/matches';
import { RootState } from '../../../../redux/types/RootState';
import { Team } from '../../../../redux/types/teams';
import S from './styles';

type Props = {
  colorLiner: string[];
  onPress: (statistic: Statistic) => void;
  team: Team;
};

const PopularTeamCard = ({ colorLiner, onPress, team }: Props) => {
  const teamMactes = useSelector((state: RootState) =>
    selectTeamMatch(state, team.id),
  );
  const events = useSelector(selectEvents);

  const teamStatistic = useMemo(() => {
    return calculateTeamStatistic(team.id, teamMactes, events ?? {});
  }, [teamMactes, events, team.id]);

  return (
    <TouchableOpacity onPress={() => onPress(teamStatistic)}>
      <View style={S.container}>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          colors={colorLiner}
          style={S.linearGradient}>
          <VStack>
            <HStack p={3} pl={5} alignItems="center" space={5}>
              <Image style={S.image} source={{ uri: team.logo  || ''}} alt="" />
              <VStack>
                <Text fontWeight="bold" fontSize={24}>
                  {team.name}
                </Text>
                {/* <Text style={S.rank}>Top 10</Text> */}
              </VStack>
            </HStack>
            <View alignItems="center">
              <Divider thickness={1} bg="#000" width={230} />
            </View>

            <HStack p={2} pl={5} pr={5} justifyContent="space-between">
              <VStack alignItems="center">
                <Text fontSize={20}>{teamStatistic.win}</Text>
                <Text fontSize={16}>Win</Text>
              </VStack>
              <VStack alignItems="center">
                <Text fontSize={20}>{teamStatistic.draw}</Text>
                <Text fontSize={16}>Draw</Text>
              </VStack>
              <VStack alignItems="center">
                <Text fontSize={20}>{teamStatistic.lose}</Text>
                <Text fontSize={16}>Lose</Text>
              </VStack>
              <VStack alignItems="center">
                <Text fontSize={20}>{teamStatistic.rate}</Text>
                <Text fontSize={16}>Rate</Text>
              </VStack>
            </HStack>
          </VStack>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default PopularTeamCard;
