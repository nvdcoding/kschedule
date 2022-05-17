import React, {useLayoutEffect} from 'react';

import HomeScreen from 'src/screens/dashboard/home';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {styles} from './HomeTab';
import {BLOG_SCREEN} from './screen';

const Stack = createNativeStackNavigator();

const BlogStack = ({route, navigation}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === undefined || routeName === BLOG_SCREEN) {
      navigation.setOptions({tabBarStyle: styles.tabBar});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={BLOG_SCREEN}>
      <Stack.Screen name={BLOG_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default BlogStack;
