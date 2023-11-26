import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button, Text, View, VStack } from 'native-base';
import React, { useCallback } from 'react';
import { ImageBackground } from 'react-native';

import { images } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';

type Props = HomeStackScreenProps<'Login'>;

const Login = ({ navigation, route }: Props) => {
  const googleSignIn = useCallback(async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        navigation.navigate(route.params.authScreen as any);
      });
  }, [navigation, route]);

  return (
    <ImageBackground source={images.homeBackgound}>
      <VStack
        height="100%"
        alignItems="center"
        justifyContent="center"
        space={20}>
        <View>
          <Text color="#fff" fontSize={50} fontWeight="bold" textAlign="center">
            Football Championship
          </Text>
        </View>
        <Button
          onPress={googleSignIn}
          bg="#e34133"
          width="80"
          style={{
            borderRadius: 24,
          }}
          leftIcon={<AntDesign name="google" size={30} color="#fff" />}>
          <Text color="#fff" fontSize={20}>
            Login with Google
          </Text>
        </Button>
      </VStack>
    </ImageBackground>
  );
};

export default Login;
