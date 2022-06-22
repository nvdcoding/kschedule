import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CHANGE_FIND, CHANGE_CLASS} from './screen';
import Find from 'src/screens/dashboard/teacher/find';
import Class from 'src/screens/dashboard/teacher/class';

const Stack = createNativeStackNavigator();

const ScheduleNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ScheduleScreen">
      <Stack.Screen name={CHANGE_FIND} component={Find} />
      <Stack.Screen name={CHANGE_CLASS} component={Class} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ScheduleNavigation;
