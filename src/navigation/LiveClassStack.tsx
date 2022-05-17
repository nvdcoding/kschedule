import React, {useLayoutEffect} from 'react';

import HomeScreen from 'src/screens/dashboard/home';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {styles} from './HomeTab';
import {LIVE_CLASS_SCREEN} from './screen';

const Stack = createNativeStackNavigator();

const LiveClassStack = ({route, navigation}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === undefined || routeName === LIVE_CLASS_SCREEN) {
      navigation.setOptions({tabBarStyle: styles.tabBar});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={LIVE_CLASS_SCREEN}>
      <Stack.Screen name={LIVE_CLASS_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default LiveClassStack;
