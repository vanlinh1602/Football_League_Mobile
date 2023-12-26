import { random } from 'lodash';
import moment from 'moment';
import { HStack, Image, Text, View, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import { card_BG } from '../../../../lib/assets';
import { selectLeague } from '../../../../redux/selectors/leagues';
import { selectTeam } from '../../../../redux/selectors/teams';
import { Match } from '../../../../redux/types/matches';
import { RootState } from '../../../../redux/types/RootState';
import S from './styles';

type Props = {
  mini?: boolean;
  match: Match;
};

const MatchCard = ({ mini, match }: Props) => {
  const league = useSelector((state: RootState) =>
    selectLeague(state, match.league),
  );
  const teamA = useSelector((state: RootState) =>
    selectTeam(state, match.teamA),
  );
  const teamB = useSelector((state: RootState) =>
    selectTeam(state, match.teamB),
  );
  return (
    <ImageBackground
      imageStyle={mini ? S.backgroundMini : S.background}
      source={card_BG[`card${random(1, 8)}`]}>
      <View style={mini ? S.viewMini : S.view} padding={5}>
        <VStack alignItems={mini ? 'flex-start' : 'center'}>
          <Text fontSize={mini ? 16 : 24} fontWeight="bold" color="white">
            {league?.name}
          </Text>
          <Text color="white" fontWeight="bold">
            {match.place}
          </Text>
        </VStack>
        <HStack space={mini ? 1 : 5}>
          <VStack alignItems="center" style={{ width: '30%' }}>
            <Image
              source={{ uri: teamA?.logo }}
              alt=""
              style={mini ? S.imageMini : S.image}
            />
            <Text color="white" textAlign="center">
              {teamA?.name}
            </Text>
          </VStack>
          <VStack alignItems="center" style={{ width: '30%' }}>
            <Text fontSize={30} color="white" fontWeight="bold">
              {match.mathResult?.teamA || 0} : {match.mathResult?.teamB || 0}
            </Text>
            <Text style={mini ? S.dateMini : S.date}>
              {moment(match.date).format('DD - MM')}
            </Text>
          </VStack>
          <VStack alignItems="center" style={{ width: '30%' }}>
            <Image
              source={{ uri: teamB?.logo }}
              alt=""
              style={mini ? S.imageMini : S.image}
            />
            <Text color="white" textAlign="center">
              {teamB?.name}
            </Text>
          </VStack>
        </HStack>
      </View>
    </ImageBackground>
  );
};

export default MatchCard;
