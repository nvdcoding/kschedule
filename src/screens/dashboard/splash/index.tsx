import React, {useEffect} from 'react';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNBootSplash from 'react-native-bootsplash';
import deviceInfoModule from 'react-native-device-info';
import Orientation from 'react-native-orientation';
import {useSelector} from 'react-redux';
import {BaseSetting} from 'src/i18n';
import {
  DRAWER_STACK,
  ONBOARDING_SCREEN,
} from 'src/navigation/screen';
import {IUserState} from 'src/redux/slices/accountSlice';
import {IRootState} from 'src/redux/store';

const SplashScreen = ({navigation}) => {
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  useEffect(() => {
    deviceInfoModule.isTablet() && Orientation.lockToLandscape();
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
        navigation.reset({
          index: 0,
          routes: [
            {
              name: infoUser.isLogged ? DRAWER_STACK : ONBOARDING_SCREEN,
            },
          ],
        });
      });
  }, []);

  return <></>;
};

export default SplashScreen;
