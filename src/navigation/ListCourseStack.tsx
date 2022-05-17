import React, {useLayoutEffect} from 'react';

import HomeScreen from 'src/screens/dashboard/home';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {styles} from './HomeTab';
import {LIST_COURSE_SCREEN} from './screen';

const Stack = createNativeStackNavigator();

const ListCourseStack = ({route, navigation}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === undefined || routeName === LIST_COURSE_SCREEN) {
      navigation.setOptions({tabBarStyle: styles.tabBar});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={LIST_COURSE_SCREEN}>
      <Stack.Screen name={LIST_COURSE_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default ListCourseStack;
