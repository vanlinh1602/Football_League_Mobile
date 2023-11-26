import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button, Text } from 'native-base';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeStackScreenProps } from '../../Navigation/type';

type Props = HomeStackScreenProps<'Login'>;

const Login = ({ navigation }: Props) => {
  const googleSignIn = useCallback(async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        navigation.goBack();
      });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Login page</Text>
      <Button onPress={googleSignIn}>Login Google</Button>
    </SafeAreaView>
  );
};

export default Login;
