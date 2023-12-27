import { random } from 'lodash';
import moment from 'moment';
import { HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import { card_BG } from '../../../../lib/assets';
import { selectTeam } from '../../../../redux/selectors/teams';
import { Match } from '../../../../redux/types/matches';
import { RootState } from '../../../../redux/types/RootState';
import S from './styles';

type Props = {
  match: Match;
};

const UpcomingCard = ({ match }: Props) => {
  const teamA = useSelector((state: RootState) =>
    selectTeam(state, match?.teamA),
  );
  const teamB = useSelector((state: RootState) =>
    selectTeam(state, match?.teamB),
  );
  return (
    <ImageBackground
      style={{ margin: 10 }}
      imageStyle={{ borderRadius: 28 }}
      source={card_BG[`card${random(1, 8)}`]}>
      <View style={S.view}>
        <HStack space={8} alignItems="center">
          <VStack alignItems="center">
            <Image source={{ uri: teamA?.logo || '' }} alt="" style={S.image} />
            <Text color="white">{teamA?.name}</Text>
          </VStack>
          <VStack alignItems="center">
            <Text style={S.date}>{moment(match.date).format('DD - MM')}</Text>
            <Text fontSize={20} color="white" fontWeight="bold">
              {moment(match.date).format('h : mm A')}
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Image source={{ uri: teamB?.logo || ''}} alt="" style={S.image} />
            <Text color="white">{teamB?.name}</Text>
          </VStack>
        </HStack>
      </View>
    </ImageBackground>
  );
};

export default UpcomingCard;
