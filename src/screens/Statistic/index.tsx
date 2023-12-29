import _ from 'lodash';
import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import React, { useMemo, useState } from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import ListLeagues from '../../features/Home/components/ListLeagues';
import {
  MatchAnalysisCard,
  PopularPlayerCard,
  PopularTeamCard,
} from '../../features/Statistic/components';
import { images } from '../../lib/assets';
import { takeRandomValue } from '../../lib/common';
import { EvilIcons, Ionicons } from '../../lib/icons';
import { HomeTabScreenProps } from '../../Navigation/type';
import { selectLeague } from '../../redux/selectors/leagues';
import { selectLeagueMatches } from '../../redux/selectors/matches';
import { selectPlayerInLeague } from '../../redux/selectors/players';
import { selectTeams } from '../../redux/selectors/teams';
import { RootState } from '../../redux/types/RootState';
import { Team } from '../../redux/types/teams';
import S from './styles';

const colorLinerTeam = [
  ['#e9ec3d', '#c4c29d', '#c6c2f1'],
  ['#f25cff', '#dfafd6', '#ded6cd'],
];
const colorLinerPlayer = [
  ['#31f9f9', '#bffafa', '#ffffff'],
  ['#52c749', '#bedcc2', '#ffffff'],
  ['#fe4040', '#fca5a5', '#ffffff'],
];

type Props = HomeTabScreenProps<'Statistic'>;

const Statistic = ({ navigation }: Props) => {
  const [leagueSelect, setLeagueSelect] = useState<string>('');

  const teams = useSelector(selectTeams);
  const league = useSelector((state: RootState) =>
    selectLeague(state, leagueSelect),
  );
  const players = useSelector((state: RootState) =>
    selectPlayerInLeague(state, league?.participants || []),
  );

  const match = useSelector((state: RootState) =>
    selectLeagueMatches(state, leagueSelect),
  );

  const teamLeague = useMemo(() => {
    const tmp: Team[] = [];
    league?.participants.forEach((teamId) => {
      tmp.push(teams![teamId]);
    });
    return tmp;
  }, [teams, league?.participants]);
  return (
    <ImageBackground source={images.homeBackgound}>
      <VStack space={5} pb={5}>
        <View>
          <HStack justifyContent="space-between" p={3} alignItems="center">
            <Text color="#fff" fontWeight="bold" fontSize={30}>
              Statistic
            </Text>
            <HStack justifyContent="flex-end" space={3}>
              <Ionicons name="notifications" color="#fff" size={30} onPress={() => navigation.navigate('Notification')}/>
            </HStack>
          </HStack>
          <Text color="#fff" fontSize={24} pl={5}>
            Choose League
          </Text>
          <ListLeagues
            onPress={(id) => setLeagueSelect(id)}
            select={leagueSelect}
          />
        </View>
        <View style={S.statistic}>
          {leagueSelect ? (
            <ScrollView>
              <VStack space={2}>
                <View>
                  <HStack p={1} alignItems="center" space={2}>
                    <EvilIcons name="trophy" size={35} color="grey" />
                    <Text color="grey" pt={2} fontWeight="bold">
                      {_.upperCase(league?.name)}
                    </Text>
                  </HStack>
                </View>
                <Text fontWeight="bold" fontSize={24}>
                  Popular Team
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View height="auto">
                    <HStack space={5}>
                      {takeRandomValue(teamLeague, 6).map((team, index) => (
                        <PopularTeamCard
                          key={team.id}
                          team={team}
                          colorLiner={colorLinerTeam[index % 2]}
                          onPress={(data) =>
                            navigation.navigate('TeamStatictics', {
                              data,
                              team: team.id,
                            })
                          }
                        />
                      ))}
                    </HStack>
                  </View>
                </ScrollView>
                <Text fontWeight="bold" fontSize={24}>
                  Popular Player
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View height="auto">
                    <HStack space={7}>
                      {takeRandomValue(Object.values(players ?? {}), 6).map(
                        (player, index) => (
                          <PopularPlayerCard
                            key={player.id}
                            colorLiner={colorLinerPlayer[index % 3]}
                            player={player}
                            onPress={() =>
                              navigation.navigate('PlayerStatictics', {
                                id: player.id,
                              })
                            }
                          />
                        ),
                      )}
                    </HStack>
                  </View>
                </ScrollView>
                <Text fontWeight="bold" fontSize={24}>
                  Match Analysis
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View height="auto">
                    <HStack space={5}>
                      {takeRandomValue(match).map((match, index) => (
                        <MatchAnalysisCard
                          key={index}
                          match={match}
                          onPress={() =>
                            navigation.navigate('TeamStaticticsComparison', {
                              changeTeam: false,
                              teamA: match.teamA,
                              teamB: match.teamB,
                              league: match.league,
                            })
                          }
                        />
                      ))}
                    </HStack>
                  </View>
                </ScrollView>
              </VStack>
            </ScrollView>
          ) : (
            <Text textAlign="center" mt={10}>
              Please chose league
            </Text>
          )}
        </View>
      </VStack>
    </ImageBackground>
  );
};
export default Statistic;
