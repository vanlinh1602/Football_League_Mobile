import { Button, Text, VStack } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeFeature from '../../features/HomeFeature';
import type { RootStackScreenProps } from '../type';

type Props = RootStackScreenProps<'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <VStack>
        <Text>Home page</Text>
        <HomeFeature />
        <Button
          onPress={() => {
            navigation.navigate('Details');
          }}>
          Click me
        </Button>
      </VStack>
    </SafeAreaView>
  );
};
export default Home;
