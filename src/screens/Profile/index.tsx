import auth from '@react-native-firebase/auth';
import { Button, HStack, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { Feather } from '../../lib/icons';
import { HomeTabScreenProps } from '../../Navigation/type';
import { actions as userActions } from '../../redux/reducers/user';

type Props = HomeTabScreenProps<'Profile'>;
const Profile = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <HStack>
        <Text>Account</Text>
        <Feather name="more-horizontal" />
      </HStack>

      <Button
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              dispatch(userActions.signOut());
              navigation.reset({
                index: 0,
                routes: [{ name: 'Profile' }],
              });
            });
        }}>
        Log out
      </Button>
    </SafeAreaView>
  );
};
export default Profile;
