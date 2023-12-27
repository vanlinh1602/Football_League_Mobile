import _, { range } from 'lodash';
import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import ListLeagues from '../../features/Home/components/ListLeagues';
import {
  MatchAnalysisCard,
  PopularPlayerCard,
  PopularTeamCard,
} from '../../features/Statistic/components';
import { images } from '../../lib/assets';
import { EvilIcons, Ionicons } from '../../lib/icons';
import { HomeTabScreenProps } from '../../Navigation/type';
import { selectTeams } from '../../redux/selectors/teams';
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
  const teams = useSelector(selectTeams);

  return (
    <ImageBackground source={images.homeBackgound}>
      <VStack space={5} pb={5}>
        <View>
          <HStack justifyContent="space-between" p={3} alignItems="center">
            <Text color="#fff" fontWeight="bold" fontSize={30}>
              Statistic
            </Text>
            <HStack justifyContent="flex-end" space={3}>
              <Ionicons name="search" color="#fff" size={30} />
              <Ionicons name="notifications" color="#fff" size={30} />
            </HStack>
          </HStack>
          <Text color="#fff" fontSize={24} pl={5}>
            Choose League
          </Text>
          <ListLeagues
            onPress={(id) => navigation.navigate('LeaguesInfo', { id })}
          />
        </View>
        <View style={S.statistic}>
          <ScrollView>
            <VStack space={2}>
              <View>
                <HStack p={1} alignItems="center" space={2}>
                  <EvilIcons name="trophy" size={35} color="grey" />
                  <Text color="grey" pt={2} fontWeight="bold">
                    AFC CUP
                  </Text>
                </HStack>
              </View>
              <Text fontWeight="bold" fontSize={24}>
                Popular Team
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View height="auto">
                  <HStack space={5}>
                    {_.take(Object.values(teams ?? {}), 6).map(
                      (team, index) => (
                        <PopularTeamCard
                          key={team.id}
                          team={team}
                          colorLiner={colorLinerTeam[index % 2]}
                          onPress={() => navigation.navigate('TeamStatictics')}
                        />
                      ),
                    )}
                  </HStack>
                </View>
              </ScrollView>
              <Text fontWeight="bold" fontSize={24}>
                Popular Player
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View height="auto">
                  <HStack space={7}>
                    {range(0, 5).map((key) => (
                      <PopularPlayerCard
                        key={key}
                        colorLiner={colorLinerPlayer[key % 3]}
                        onPress={() => navigation.navigate('PlayerStatictics')}
                      />
                    ))}
                  </HStack>
                </View>
              </ScrollView>
              <Text fontWeight="bold" fontSize={24}>
                Match Analysis
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View height="auto">
                  <HStack space={5}>
                    {range(0, 5).map((key) => (
                      <MatchAnalysisCard
                        key={key}
                        onPress={() =>
                          navigation.navigate('TeamStaticticsComparison')
                        }
                      />
                    ))}
                  </HStack>
                </View>
              </ScrollView>
            </VStack>
          </ScrollView>
        </View>
      </VStack>
    </ImageBackground>
  );
};
export default Statistic;
