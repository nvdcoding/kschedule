import React from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from 'src/assets/images';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {Block, Image, Text} from 'src/components';
import {LOGIN_SCREEN} from 'src/navigation/screen';
import Color from 'src/theme/Color';

import styles from './register.style';

const SignUpSuccessScreen = ({navigation}) => {
  const {t} = useTranslation();

  const handleLogin = () => {
    navigation.navigate(LOGIN_SCREEN);
  };

  return (
    <SafeAreaView style={Styles.container}>
      {isTablet && (
        <Image
          source={Images.IMG_BACKGROUND_LOGIN}
          style={styles.backgroundLogin}
        />
      )}
      <Block
        style={[
          styles.content,
          isTablet && styles.contentTablet,
          styles.contentSignSuccess,
        ]}>
        <TouchableOpacity
          style={styles.btnBack}
          activeOpacity={0.5}
          onPress={navigation.goBack}>
          <Icon
            name={'arrow-back-outline'}
            size={getSize.m(24)}
            color={Color.TEXT_PRIMARY}
          />
        </TouchableOpacity>
        <Text style={styles.textSignSuccess}>{t('REGISTER_SUCCESS')}</Text>
        <Text style={styles.textTutorial}>
          {t('NOTE_LOGIN_GMAIL_PASSWORD_REGISTER')}
        </Text>
        <TouchableOpacity
          onPress={handleLogin}
          style={[styles.btnGoLogin, isTablet && styles.btnGoLoginTablet]}
          activeOpacity={0.5}>
          <Text style={styles.textLogin}>{t('LOGIN')}</Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default SignUpSuccessScreen;
