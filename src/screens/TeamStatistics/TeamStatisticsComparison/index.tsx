import _ from 'lodash';
import {
  CheckIcon,
  HStack,
  Image,
  ScrollView,
  Select,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useMemo, useState } from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import StatisticComparisonTable from '../../../features/Statistic/components/StatisticCard/StatisticComparisonTable';
// import StatisticCard from '../../../features/Statistic/components/StatisticCard/StatisticTable';
import { teamPicture } from '../../../lib/assets';
import { calculateTeamStatistic } from '../../../lib/common';
import { AntDesign } from '../../../lib/icons';
import { HomeStackScreenProps } from '../../../Navigation/type';
import {
  selectEvents,
  selectLeagueMatches,
} from '../../../redux/selectors/matches';
import { selectTeam, selectTeams } from '../../../redux/selectors/teams';
import { RootState } from '../../../redux/types/RootState';
import S from './styles';

type Props = HomeStackScreenProps<'TeamStaticticsComparison'>;

const TeamStaticticsComparison = ({ navigation, route }: Props) => {
  const { changeTeam, teamA, teamB, league } = route.params;
  const [teamCompare, setTeampCompare] = useState<string>(teamB || '');
  const teams = useSelector(selectTeams);
  const matchesLeague = useSelector((state: RootState) =>
    selectLeagueMatches(state, league ?? 'all'),
  );
  const allEvents = useSelector(selectEvents);
  const teamAInfo = useSelector((state: RootState) => selectTeam(state, teamA));
  const teamBInfo = useSelector((state: RootState) =>
    selectTeam(state, teamCompare),
  );

  const { statisticTeamA, statisticTeamB } = useMemo(() => {
    const matchesTeamA = Object.values(matchesLeague ?? {}).filter(
      (match) => match.teamA === teamA || match.teamB === teamA,
    );
    const matchesTeamB = Object.values(matchesLeague ?? {}).filter(
      (match) => match.teamA === teamCompare || match.teamB === teamCompare,
    );
    return {
      statisticTeamA: calculateTeamStatistic(
        teamA,
        _.keyBy(matchesTeamA, 'id'),
        allEvents ?? {},
      ),
      statisticTeamB: calculateTeamStatistic(
        teamCompare,
        _.keyBy(matchesTeamB, 'id'),
        allEvents ?? {},
      ),
    };
  }, [matchesLeague, teamA, teamCompare, allEvents]);
  return (
    <ScrollView>
      <VStack>
        <ImageBackground
          style={S.imageBackground}
          source={teamPicture.MU}
          resizeMode="cover">
          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </VStack>
      {changeTeam ? (
        <>
          <View>
            <Text style={S.comparisonTitle}>Comparison</Text>
          </View>
          <Text marginLeft={10} marginTop={2} fontSize={16}>
            Choose team to compare:
          </Text>
          <HStack style={S.teamComparing}>
            <Select
              selectedValue={teamCompare}
              minWidth="200"
              accessibilityLabel={teamCompare}
              placeholder="Choose Team"
              _selectedItem={{
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setTeampCompare(itemValue)}>
              {Object.values(teams ?? {}).map((team) => (
                <Select.Item key={team.id} label={team.name} value={team.id} />
              ))}
            </Select>
          </HStack>
        </>
      ) : null}

      <View style={S.underline}></View>
      {teamCompare ? (
        <View>
          <Text style={S.statisticTitle}>Statistic</Text>
          <HStack style={S.logosLine} space={237}>
            <Image
              style={S.twoTeamLogos}
              source={{ uri: teamAInfo?.logo }}
              alt="logo"
            />
            <Image
              style={S.twoTeamLogos}
              source={{ uri: teamBInfo?.logo }}
              alt="logo"
            />
          </HStack>
          <StatisticComparisonTable
            teamA={statisticTeamA}
            teamB={statisticTeamB}
          />
        </View>
      ) : (
        <Text textAlign="center" mt={10}>
          Please select team to compare
        </Text>
      )}
    </ScrollView>
  );
};

export default TeamStaticticsComparison;
