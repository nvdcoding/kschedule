import React, {useEffect} from 'react';

import {useTranslation} from 'react-i18next';
import {
  BackHandler,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from 'src/assets/images';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {
  Block,
  Image,
  Text,
} from 'src/components';
import {LOGIN_SCREEN} from 'src/navigation/screen';
import Color from 'src/theme/Color';

import styles from './login.style';

const ChangePasswordSuccessScreen = ({navigation}) => {
  const {t} = useTranslation();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
  }, []);

  const handleBack = () => {
    navigation.navigate(LOGIN_SCREEN);
    return true;
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
          onPress={handleBack}>
          <Icon
            name={'arrow-back-outline'}
            size={getSize.m(24)}
            color={Color.GREEN}
          />
        </TouchableOpacity>
        <Text style={styles.textSignSuccess}>
          {t('CHANGE_PASSWORD_SUCCESS')}
        </Text>
        <Text style={styles.textTutorial}>{t('NOTE_LOGIN_NEW_PASSWORD')}</Text>
        <TouchableOpacity
          onPress={handleBack}
          style={[styles.btnGoLogin, isTablet && styles.btnGoLoginTablet]}
          activeOpacity={0.5}>
          <Text style={styles.textLogin}>{t('LOGIN')}</Text>
        </TouchableOpacity>
      </Block>
    </SafeAreaView>
  );
};

export default ChangePasswordSuccessScreen;
