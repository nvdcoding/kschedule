import React from 'react';

import {StyleSheet} from 'react-native';
import {getIconComponent} from 'src/assets/icon';
import {getSize} from 'src/base/common/responsive';
import HomeScreen from 'src/screens/dashboard/home';
import AddScheduleScreeen from 'src/screens/dashboard/home/AddScheduleScreen';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  BLOG_STACK,
  HOME_SCREEN,
  TIMETABLE_SYNC_SCREEN,
  LIVE_CLASS_STACK,
  NOTIFI_SCREEN,
  NOTIFI_TEACHER_SCREEN,
} from './screen';
import InformationScreen from 'src/screens/dashboard/home/InformationScreen';
import TimetableSync from 'src/screens/dashboard/home/TimetableSync';
import Notifi from 'src/screens/dashboard/home/NotifiScreen';
import NotifiTeacher from 'src/screens/dashboard/home/TeacherNotifyScreen';

const Icon = getIconComponent('ionicons');

const HomeTab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === HOME_SCREEN) {
            iconName = 'home';
          } else if (route.name === TIMETABLE_SYNC_SCREEN) {
            iconName = 'sync';
          } else if (route.name === BLOG_STACK) {
            iconName = 'medkit-outline';
          } else if (route.name === NOTIFI_SCREEN || NOTIFI_TEACHER_SCREEN) {
            iconName = 'notifications-outline';
          } else {
            iconName = 'ios-settings-outline';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? Color.TEXT_PRIMARY : '#C4C4C4'}
              size={size}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: Color.TEXT_PRIMARY,
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        // tabBarShowLabel: false,
      })}>
      <HomeTab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeTab.Screen name={NOTIFI_SCREEN} component={Notifi} />
      <HomeTab.Screen name={NOTIFI_TEACHER_SCREEN} component={NotifiTeacher} />
      <HomeTab.Screen name={BLOG_STACK} component={AddScheduleScreeen} />
      <HomeTab.Screen name={LIVE_CLASS_STACK} component={InformationScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;

export const styles = StyleSheet.create({
  tabBar: {
    height: getSize.m(68),
    borderTopLeftRadius: getSize.m(20),
    borderTopRightRadius: getSize.m(20),
    paddingTop: getSize.m(10),
    borderTopColor: '#E8E8E8',
    borderTopWidth: 1.5,
    display: 'flex',
    paddingBottom: getSize.m(5),
  },

  tabBarLabelStyle: {
    fontSize: getSize.m(10),
    fontFamily: Font.font_SVN_700,
    marginBottom: getSize.m(10),
  },
});
