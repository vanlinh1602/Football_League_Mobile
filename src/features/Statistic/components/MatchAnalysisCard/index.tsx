import moment from 'moment';
import { Divider, HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { getShortName } from '../../../../lib/common';
import { selectTeam } from '../../../../redux/selectors/teams';
import { Match } from '../../../../redux/types/matches';
import { RootState } from '../../../../redux/types/RootState';
import S from './styles';

type Props = {
  onPress: () => void;
  match: Match;
};

const MatchAnalysisCard = ({ onPress, match }: Props) => {
  const teamA = useSelector((state: RootState) =>
    selectTeam(state, match.teamA),
  );
  const teamB = useSelector((state: RootState) =>
    selectTeam(state, match.teamB),
  );
  return (
    <TouchableOpacity onPress={onPress}>
      <View pt={4}>
        <View style={S.container}>
          <HStack justifyContent="space-between">
            <VStack alignItems="center" space={1}>
              <Image
                style={S.avatar}
                source={{ uri: teamA?.logo || '' }}
                alt=""
              />
              <Text textAlign="center" fontSize={16}>
                {getShortName(teamA?.name || '')}
              </Text>
            </VStack>
            <Divider bg="#000" orientation="vertical" />
            <VStack alignItems="center" space={1}>
              <Image style={S.avatar} source={{ uri: teamB?.logo }} alt="" />
              <Text textAlign="center" fontSize={16}>
                {getShortName(teamB?.name || '')}
              </Text>
            </VStack>
          </HStack>
        </View>
        <VStack style={S.date} alignItems="center">
          <Text color="#0047ff">{moment(match.date).format('DD')}</Text>
          <Text marginTop={-1} fontSize={12} color="grey">
            {moment(match.date).format('ddd')}
          </Text>
        </VStack>
      </View>
    </TouchableOpacity>
  );
};

export default MatchAnalysisCard;
