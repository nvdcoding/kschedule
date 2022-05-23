import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Images} from 'src/assets/images';
import {isTablet} from 'src/base/common/Constants';
import Styles from 'src/base/common/Styles';
import {Block, Image, Text} from 'src/components';
import {INTRO_NOTIFY_SCREEN} from 'src/navigation/screen';

import styles from './onboarding.style';

const OnBoardingScreen = ({navigation}) => {
  const {t} = useTranslation();

  const handleNext = () =>
    navigation.reset({
      index: 0,
      routes: [{name: INTRO_NOTIFY_SCREEN}],
    });

  return (
    <SafeAreaView style={Styles.container}>
      <Block marginTop={10} row alignCenter alignSelf="center">
        <Text style={styles.textTitle}>Schedule</Text>
        <Text style={styles.textTitleEdu}>KMA</Text>
      </Block>
      <Image source={Images.IMG_LOGO} style={styles.imgIntro} />
      <Block style={isTablet ? styles.contentTablet : styles.content}>
        <Text center={isTablet} style={styles.textWelcome}>
          {t('TITLE_WELCOME_APP')}
        </Text>
        <Text style={styles.noteWelcome} center={isTablet}>
          {t('WELCOME_APP')}
        </Text>
      </Block>
      <TouchableOpacity
        onPress={handleNext}
        activeOpacity={0.5}
        style={[styles.btnNext, isTablet && styles.btnNextTablet]}>
        <Text style={styles.textNext}>{t('CONTINUE')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
