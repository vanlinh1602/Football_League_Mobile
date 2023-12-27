import { Avatar, VStack } from 'native-base';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { images } from '../../lib/assets';
import { HomeStackScreenProps } from '../../Navigation/type';
import { actions } from '../../redux/reducers/user';
import {
  selectFetching,
  selectFetchingStatus,
} from '../../redux/selectors/user';

type Props = HomeStackScreenProps<'PrepareScreen'>;

const PrepareScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectFetching);
  const status = useSelector(selectFetchingStatus);

  useEffect(() => {
    dispatch(actions.prepareData());
  }, [dispatch]);

  useEffect(() => {
    if (!isFetching) {
      navigation.navigate('HomeTabs', { screen: 'Home' });
    }
  }, [isFetching, navigation]);

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
        <Text style={styles.text}>{status}</Text>
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
