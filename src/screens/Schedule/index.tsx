import { Text } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// type Props = HomeTabScreenProps<'home'>;

const Schedule = () => {
  React.useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <SafeAreaView style={{ zIndex: 999999, height: '100%' }}>
      <Text>Details page</Text>
    </SafeAreaView>
  );
};
export default Schedule;
