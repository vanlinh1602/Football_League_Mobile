import 'react-native-gesture-handler';

import { AppRegistry, LogBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
  'ReactImageView: Image source "" doesn\'t exist',
  'source.uri should not be an empty string',
  'Selector unknown returned a different result when called with the same parameters. This can lead to unnecessary rerenders.',
]);

AppRegistry.registerComponent(appName, () => App);
