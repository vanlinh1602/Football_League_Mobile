import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button, Text } from 'native-base';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const googleSignIn = useCallback(async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }, []);

  return (
    <SafeAreaView>
      <Text>Login page</Text>
      <Button onPress={googleSignIn}>Login Google</Button>
    </SafeAreaView>
  );
};

export default Login;
