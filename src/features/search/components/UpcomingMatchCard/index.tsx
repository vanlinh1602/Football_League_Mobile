import moment from 'moment';
import { Divider, HStack, Text, View } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { theme } from '../../../../lib/theme';
import { selectTeam } from '../../../../redux/selectors/teams';
import { Match } from '../../../../redux/types/matches';
import { RootState } from '../../../../redux/types/RootState';
import S from './styles';

type Props = { match: Match; onPress: () => void };

const UpcomingMatchCard = ({ match, onPress }: Props) => {
  const teamA = useSelector((state: RootState) =>
    selectTeam(state, match.teamA),
  );
  const teamB = useSelector((state: RootState) =>
    selectTeam(state, match.teamB),
  );

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={S.container}>
        <HStack padding={3} alignItems="center">
          <View style={{ width: '65%' }}>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack alignItems="center">
                <Image
                  source={{ uri: teamA?.logo || '' }}
                  alt=""
                  style={S.logo}
                />
                <Text fontWeight="bold">{teamA?.name}</Text>
              </HStack>
              <Text fontWeight="bold">{match.mathResult?.teamA || 0}</Text>
            </HStack>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack alignItems="center">
                <Image
                  source={{ uri: teamB?.logo || '' }}
                  alt=""
                  style={S.logo}
                />
                <Text fontWeight="bold">{teamB?.name}</Text>
              </HStack>
              <Text fontWeight="bold">{match.mathResult?.teamB || 0}</Text>
            </HStack>
          </View>
          <Divider
            bg={theme.purple}
            thickness="3"
            mx="2"
            orientation="vertical"
          />
          <View style={{ width: '30%' }}>
            <Text color={theme.purple} fontWeight="bold" fontSize={16}>
              {moment(match.date).format('HH : mm')}
            </Text>
            <Text fontWeight="bold">
              {moment(match.date).format('DD MMM - YYYY')}
            </Text>
          </View>
        </HStack>
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingMatchCard;
