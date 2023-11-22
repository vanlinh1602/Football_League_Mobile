import { Button, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { backendService } from '../../services';

// type Props = HomeTabScreenProps<'home'>;

const Statistic = () => {
  return (
    <SafeAreaView>
      <Text>Statistic page</Text>
      <Button
        onPress={async () => {
          const reslute = await backendService.post('/api/users', {
            email: 'vanlinh14121@gmail.com',
          });
          if (reslute.kind === 'ok') {
            console.log(reslute.data);
          }
        }}>
        Click me
      </Button>
    </SafeAreaView>
  );
};
export default Statistic;
