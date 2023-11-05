import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';

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
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Workspace />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;
