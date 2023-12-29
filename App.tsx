import notifee from '@notifee/react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { CHANNEL_NAME, CHANNEL_NOTIFY, CLIENT_ID } from './src/lib/config';
import { FontFamily } from './src/lib/options';
import store from './src/redux';
import Workspace from './src/screens';

const theme = extendTheme({
  fonts: {
    heading: FontFamily.bold,
    body: FontFamily.regular,
    mono: FontFamily.thin,
  },
});

function App() {
  useEffect(() => {
    async () => {
      await notifee.requestPermission();
      await notifee.createChannel({
        id: CHANNEL_NOTIFY,
        name: CHANNEL_NAME,
      });
    };
  }, []);

  GoogleSignin.configure({
    webClientId: CLIENT_ID,
  });

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Workspace />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
