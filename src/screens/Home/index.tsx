import { HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { Alert, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { MatchCard, UpcomingCard } from '../../features/Home/components';
import ListLeagues from '../../features/Home/components/ListLeagues';
import { images } from '../../lib/assets';
import { Ionicons } from '../../lib/icons';
import { HomeTabScreenProps } from '../../Navigation/type';
import {
  selectCurrentMatch,
  selectUpcomingMatch,
} from '../../redux/selectors/matches';
import { selectUser } from '../../redux/selectors/user';
import { RootState } from '../../redux/types/RootState';
import S from './styles';

type Props = HomeTabScreenProps<'Home'>;

const Home = ({ navigation }: Props) => {
  const user = useSelector(selectUser);
  const currentMatch = useSelector(selectCurrentMatch);
  const upcommingMatch = useSelector((state: RootState) =>
    selectUpcomingMatch(state, 'all'),
  );
  return (
    <ImageBackground style={S.background} source={images.homeBackgound}>
      <ScrollView>
        <VStack style={S.container} space={2}>
          <HStack alignItems="center" justifyContent="space-between">
            <HStack alignItems="center" space={3} marginLeft={3}>
              <TouchableOpacity
                onPress={() => {
                  if (user?.uid) {
                    navigation.navigate('Notification');
                  } else {
                    Alert.alert('Please login to use this feature');
                  }
                }}>
                <Ionicons style={S.icon} name="notifications-outline" />
              </TouchableOpacity>
              <Text style={S.wellcome}>
                Welcome, <Text color="yellow.400">{user?.name || 'Guest'}</Text>
              </Text>
            </HStack>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={{
                  uri:
                    user?.photoURL ||
                    'https://www.pngkey.com/png/detail/32-325199_afc-cup-logo-download-logo-afc-cup-2018.png',
                }}
                alt=""
                style={S.image}
              />
            </TouchableOpacity>
          </HStack>
          <Text style={S.title}>Top Leagues</Text>
          <ListLeagues
            onPress={(id) => navigation.navigate('LeaguesInfo', { id })}
          />
          {currentMatch ? (
            <>
              <Text style={S.title}>Current Match</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TodayMatch', {
                    matchId: currentMatch.id,
                  })
                }>
                <MatchCard match={currentMatch} />
              </TouchableOpacity>
            </>
          ) : null}
          <Text style={S.title}>Upcoming Match</Text>
          {upcommingMatch.map((match, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('TodayMatch', { matchId: match.id })
              }>
              <UpcomingCard match={match} />
            </TouchableOpacity>
          ))}
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};
export default Home;
