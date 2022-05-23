import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Images} from 'src/assets/images';
import {isTablet} from 'src/base/common/Constants';
import Dimens from 'src/base/common/Dimens';
import Styles from 'src/base/common/Styles';
import {Block, Image, Text} from 'src/components';
import {LOGIN_SCREEN} from 'src/navigation/screen';
import {setNotifyFirstBoot} from 'src/redux/slices/appSlice';

import styles from './onboarding.style';

const IntroNotifyScreen = ({navigation}) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const handleNotify = () => {
    dispatch(setNotifyFirstBoot({notify: true}));
    navigation.reset({
      index: 0,
      routes: [{name: LOGIN_SCREEN}],
    });
  };

  const handleSkip = () => {
    dispatch(setNotifyFirstBoot({notify: false}));
    navigation.reset({
      index: 0,
      routes: [{name: LOGIN_SCREEN}],
    });
  };

  return (
    <SafeAreaView style={Styles.container}>
      {isTablet && (
        <Block row alignCenter alignSelf="center">
          <Text style={styles.textTitle}>Schedule</Text>
          <Text style={styles.textTitleEdu}>KMA</Text>
        </Block>
      )}
      <Image
        source={Images.IMG_LOGO}
        style={styles.imgIntro}
        width={isTablet ? Dimens.DEVICE_WIDTH * 0.22 : Dimens.DEVICE_WIDTH}
        height={
          isTablet
            ? Dimens.DEVICE_WIDTH * 0.22 * (1172 / 1650)
            : (Dimens.DEVICE_WIDTH * 1172) / 1650
        }
      />
      <Block style={isTablet ? styles.contentTablet : styles.content}>
        <Text center={isTablet} style={styles.textWelcome}>
          {t('DONT_MISS')}
        </Text>
        <Text style={styles.noteWelcome} center={isTablet}>
          {t('NOTE_DONT_MISS')}
        </Text>
      </Block>
      <Block
        style={[
          styles.btnIntroNotify,
          isTablet && styles.btnIntroNotifyTablet,
        ]}>
        <TouchableOpacity
          onPress={handleNotify}
          activeOpacity={0.5}
          style={styles.btnTurnOn}>
          <Text style={styles.textNext}>{t('TURN_ON_NOTIFY')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleSkip}
          style={styles.btnTurnOff}>
          <Text style={styles.textTurnOff}>{t('SKIP')}</Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default IntroNotifyScreen;
