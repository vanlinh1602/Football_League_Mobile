import moment from 'moment';
import { HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { MatchCard, UpcomingCard } from '../../features/Home/components';
import ListLeagues from '../../features/Home/components/ListLeagues';
import { images, logos } from '../../lib/assets';
import { Ionicons } from '../../lib/icons';
import { HomeTabScreenProps } from '../../Navigation/type';
import { actions as teamsAction } from '../../redux/reducers/teams';
import { selectTeams } from '../../redux/selectors/teams';
import { selectUser } from '../../redux/selectors/user';
import S from './styles';

const upcoming = [
  {
    teamA: {
      name: 'Man - Uni',
      logo: logos.Manchester_United,
    },
    teamB: {
      name: 'Arsenal',
      logo: logos.Arsenal,
    },
    schedule: {
      date: moment.now(),
    },
  },
  {
    teamA: {
      name: 'Chelsea',
      logo: logos.Chelsea,
    },
    teamB: {
      name: 'FC_Barcelona',
      logo: logos.FC_Barcelona,
    },
    schedule: {
      date: moment.now(),
    },
  },
  {
    teamA: {
      name: 'Liverpool',
      logo: logos.Liverpool,
    },
    teamB: {
      name: 'Chelsea',
      logo: logos.Chelsea,
    },
    schedule: {
      date: moment.now(),
    },
  },
  {
    teamA: {
      name: 'Man - Uni',
      logo: logos.Manchester_United,
    },
    teamB: {
      name: 'Man_City',
      logo: logos.Manchester_City,
    },
    schedule: {
      date: moment.now(),
    },
  },
];

type Props = HomeTabScreenProps<'Home'>;

const Home = ({ navigation }: Props) => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const teams = useSelector(selectTeams);

  useEffect(() => {
    if (!teams) {
      dispatch(teamsAction.getTeams());
    }
  }, [teams, dispatch]);

  return (
    <ImageBackground style={S.background} source={images.homeBackgound}>
      <ScrollView>
        <VStack style={S.container} space={2}>
          <HStack alignItems="center" justifyContent="space-between">
            <HStack alignItems="center" space={3} marginLeft={3}>
              <Ionicons style={S.icon} name="notifications-outline" />
              <Text style={S.wellcome}>
                Welcome, <Text color="yellow.400">{user?.name || 'Guest'}</Text>
              </Text>
            </HStack>
            <Image
              source={{
                uri:
                  user?.photoURL ||
                  'https://www.pngkey.com/png/detail/32-325199_afc-cup-logo-download-logo-afc-cup-2018.png',
              }}
              alt=""
              style={S.image}
            />
          </HStack>
          <Text style={S.title}>Top Leagues</Text>
          <ListLeagues onPress={() => navigation.navigate('LeaguesInfo')} />
          <Text style={S.title}>Current Match</Text>
          <MatchCard />
          <Text style={S.title}>Upcoming Match</Text>
          {upcoming.map((card, index) => (
            <UpcomingCard key={index} {...card} />
          ))}
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};
export default Home;
