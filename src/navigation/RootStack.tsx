import React, { useEffect, useRef } from 'react';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNBootSplash from 'react-native-bootsplash';
import deviceInfoModule from 'react-native-device-info';
import Orientation from 'react-native-orientation';
import { useSelector } from 'react-redux';
import { BaseSetting } from 'src/i18n';
import { IUserState } from 'src/redux/slices/accountSlice';
import { IAppState } from 'src/redux/slices/appSlice';
import { IRootState } from 'src/redux/store';
import LoginScreen from 'src/screens/auth/login';
import ChangePasswordSuccessScreen from 'src/screens/auth/login/ChangePasswordSuccessScreen';
import ForgetPasswordScreen from 'src/screens/auth/login/ForgetPasswordScreen';
import NewPasswordScreen from 'src/screens/auth/login/NewPasswordScreen';
import ResetSuccessScreen from 'src/screens/auth/login/ResetSuccessScreen';
import OnBoardingScreen from 'src/screens/auth/onboarding';
import IntroNotifyScreen from 'src/screens/auth/onboarding/IntroNotifyScreen';
import RegisterScreen from 'src/screens/auth/register';
import SignUpSuccessScreen from 'src/screens/auth/register/SignUpSuccessScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { APP_PREFIX, navigationRef, PATH_SCREENS } from './actions';
import HomeTabNavigator from './HomeTab';
import {
  CHANGE_PASSWORD_SUCCESS_SCREEN,
  FORGET_PASSWORD_SCREEN,
  HOME_TAB_NAVIGATOR,
  INTRO_NOTIFY_SCREEN,
  LOGIN_SCREEN,
  NEW_PASSWORD_SCREEN,
  ONBOARDING_SCREEN,
  REGISTER_SCREEN,
  RESET_SUCCESS_SCREEN,
  SIGN_UP_SUCCESS_SCREEN,
  SEND_OTP_SCREEN,
  CHANGE_INFORMATION_SCREEN,
  CHANGE_SECURITY_SCREEN,
  CHANGE_LANGUAGE_SCREEN,
  HOME_SCREEN,
} from './screen';
import SendOtpScreen from 'src/screens/auth/send-otp';
import ChangeInformationScreen from 'src/screens/dashboard/user/information';
import ChangeSecurityScreen from 'src/screens/dashboard/user/security';
// import ChangeLanguageScreen from 'src/screens/dashboard/user/languague';
import HomeScreen from 'src/screens/dashboard/home';

const Stack = createNativeStackNavigator();

const linking: any = {
  prefixes: APP_PREFIX,
  config: PATH_SCREENS,
};

const GlobalStackNavigation = () => {
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const { firstBoot } = useSelector<IRootState, IAppState>(state => state.app);
  const routeNameRef = useRef<String>();

  const onReady = () => {
    routeNameRef.current = navigationRef.current.getCurrentRoute().name;
  };

  const handleRoute = () => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    routeNameRef.current = currentRouteName;
  };

  useEffect(() => {
    deviceInfoModule.isTablet() && Orientation.lockToLandscape();
    // CodePushUtils.checkVersion((_, message) => {
    //   debug('Code_push>>>>>>', message);
    // });
    i18n
      .use(initReactI18next)
      .init({
        resources: BaseSetting.resourcesLanguage,
        lng: BaseSetting.defaultLanguage,
        fallbackLng: BaseSetting.defaultLanguage,
        compatibilityJSON: 'v3',
      })
      .then(() => {
        RNBootSplash.hide();
      });
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      linking={linking}
      onStateChange={handleRoute}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={
          firstBoot
            ? ONBOARDING_SCREEN
            : infoUser.isLogged
              ? HOME_TAB_NAVIGATOR
              : LOGIN_SCREEN
        }>
        {/* <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} /> */}
        <Stack.Screen name={ONBOARDING_SCREEN} component={OnBoardingScreen} />
        <Stack.Screen
          name={INTRO_NOTIFY_SCREEN}
          component={IntroNotifyScreen}
        />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SEND_OTP_SCREEN} component={SendOtpScreen} />
        <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen
          name={CHANGE_INFORMATION_SCREEN}
          component={ChangeInformationScreen}
        />
        <Stack.Screen
          name={CHANGE_SECURITY_SCREEN}
          component={ChangeSecurityScreen}
        />
        {/* <Stack.Screen name={CHANGE_LANGUAGE_SCREEN} component={ChangeLanguageScreen} /> */}

        <Stack.Screen
          name={HOME_TAB_NAVIGATOR}
          // component={infoUser.isLogged ? HomeTabNavigator : LoginScreen}
          component={HomeTabNavigator}
        />
        <Stack.Screen
          name={CHANGE_PASSWORD_SUCCESS_SCREEN}
          component={ChangePasswordSuccessScreen}
        />
        <Stack.Screen
          name={NEW_PASSWORD_SCREEN}
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name={RESET_SUCCESS_SCREEN}
          component={ResetSuccessScreen}
        />
        <Stack.Screen
          name={FORGET_PASSWORD_SCREEN}
          component={ForgetPasswordScreen}
        />
        <Stack.Screen
          name={SIGN_UP_SUCCESS_SCREEN}
          component={SignUpSuccessScreen}
        />
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GlobalStackNavigation;
