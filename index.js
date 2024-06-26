/**
 * @format
 */

import 'react-native-gesture-handler';

import {
  AppRegistry,
  LogBox,
} from 'react-native';

import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreLogs(['Require cycle:']);
LogBox.ignoreAllLogs();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

AppRegistry.registerComponent(appName, () => App);
