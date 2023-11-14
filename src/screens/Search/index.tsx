import { Text } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// type Props = HomeTabScreenProps<'home'>;

const Search = () => {
  React.useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <SafeAreaView>
      <Text>Search page</Text>
    </SafeAreaView>
  );
};
export default Search;
