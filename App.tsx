import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { CLIENT_ID } from './src/lib/config';
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
  GoogleSignin.configure({
    webClientId: CLIENT_ID,
  });

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      console.log(user);
    });
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Workspace />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
