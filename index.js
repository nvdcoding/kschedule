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

AppRegistry.registerComponent(appName, () => App);
