import React from 'react';

import {StyleSheet} from 'react-native';
import {getIconComponent} from 'src/assets/icon';
import {getSize} from 'src/base/common/responsive';
import HomeScreen from 'src/screens/dashboard/home';
import SearchScreen from 'src/screens/dashboard/home/SearchScreen';
import AddScheduleScreeen from 'src/screens/dashboard/home/AddScheduleScreen';
import Color from 'src/theme/Color';
import Font from 'src/theme/Font';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  BLOG_STACK,
  HOME_SCREEN,
  LIST_COURSE_STACK,
  LIVE_CLASS_STACK,
} from './screen';
import InformationScreen from 'src/screens/dashboard/home/InformationScreen';

const Icon = getIconComponent('goEdu');

const HomeTab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === HOME_SCREEN) {
            iconName = 'book-2';
          } else if (route.name === LIST_COURSE_STACK) {
            iconName = 'book-1';
          } else if (route.name === BLOG_STACK) {
            iconName = 'carbon-blog';
          } else {
            iconName = 'tivi-icon';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? Color.GREEN : '#C4C4C4'}
              size={size}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: Color.GREEN,
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        // tabBarShowLabel: false,
      })}>
      <HomeTab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeTab.Screen name={LIST_COURSE_STACK} component={SearchScreen} />
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
