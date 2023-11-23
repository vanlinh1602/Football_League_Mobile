import auth from '@react-native-firebase/auth';
import { Button, Text } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

import { HomeTabScreenProps } from '../../Navigation/type';
import { actions as userActions } from '../../redux/reducers/user';

type Props = HomeTabScreenProps<'Profile'>;
const Profile = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Profile page</Text>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Log in
      </Button>
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
