import { Avatar, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { images } from '../../lib/assets';
import { HomeStackScreenProps } from '../../Navigation/type';
import { actions as leagueActions } from '../../redux/reducers/leagues';
import { actions as matchActions } from '../../redux/reducers/matches';
import { actions as playerActions } from '../../redux/reducers/players';
import { actions as teamActions } from '../../redux/reducers/teams';
import { selectPlayerHandling } from '../../redux/selectors/players';
import { selectTeamHandling } from '../../redux/selectors/teams';

type Props = HomeStackScreenProps<'PrepareScreen'>;

const PrepareScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const playerHandling = useSelector(selectPlayerHandling);
  const teamHandling = useSelector(selectTeamHandling);

  const [loadingMessage, setLoadingMessage] = useState('Preparing data...');

  useEffect(() => {
    const messages = [
      'Fetching resources...',
      'Setting up the environment...',
      'Almost there...',
    ];
    const changeMessage = () => {
      setLoadingMessage(messages.shift() || 'Loading complete!');
      if (messages.length >= 0) {
        setTimeout(changeMessage, 1000);
      }
    };

    dispatch(teamActions.getTeams());

    changeMessage();

    dispatch(playerActions.getAllPlayers());

    dispatch(leagueActions.getLeagues());

    dispatch(matchActions.getAllMatch());

    changeMessage();
  }, [dispatch]);

  useEffect(() => {
    if (!teamHandling && !playerHandling) {
      navigation.navigate('HomeTabs', { screen: 'Home' });
    }
  }, [teamHandling, playerHandling, navigation]);

  return (
    <ImageBackground source={images.homeBackgound} alt="">
      <VStack
        style={styles.container}
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
        space={5}>
        <Avatar source={images.logos} size="xl" />
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.text}>{loadingMessage}</Text>
      </VStack>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  loadingIcon: {
    fontSize: 40,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default PrepareScreen;
