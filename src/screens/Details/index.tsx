import { Text } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// type Props = HomeTabScreenProps<'home'>;

const Details = () => {
  React.useEffect(() => {
    StatusBar.setHidden(true);
  }, []);
  return (
    <SafeAreaView>
      <Text>Details page</Text>
    </SafeAreaView>
  );
};
export default Details;
