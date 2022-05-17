import React from 'react';

import {useTranslation} from 'react-i18next';
import {
  Linking,
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
import styles from 'src/screens/auth/login/login.style';
import Color from 'src/theme/Color';

const ResetSuccessScreen = ({navigation, route}) => {
  const {t} = useTranslation();

  const handleOpenEmail = () => {
    Linking.openURL(`mailto:${route.params}`);
  };
  return (
    <SafeAreaView style={Styles.container}>
      {isTablet && (
        <Image
          source={Images.IMG_BACKGROUND_LOGIN}
          style={styles.backgroundLogin}
        />
      )}
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <TouchableOpacity
          style={styles.btnBack}
          activeOpacity={0.5}
          onPress={navigation.goBack}>
          <Icon
            name={'arrow-back-outline'}
            size={getSize.m(24)}
            color={Color.GREEN}
          />
        </TouchableOpacity>
        <Block marginTop={isTablet ? 5 : 20} row alignSelf="center">
          <Text style={styles.textTitle}>Go</Text>
          <Text style={styles.textEdu}>Edu</Text>
        </Block>
        <Block alignCenter marginTop={isTablet ? 60 : 20}>
          <Text style={styles.textTitleLogin}>
            {t('RESET_PASSWORD_SUCCESS')}
          </Text>
          <Text style={styles.textResetSuccess}>
            {t('LINK_SETUP_NEW_PASSWORD')}
          </Text>
        </Block>
        <Block marginHorizontal={30} marginTop={isTablet ? 20 : 110}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleOpenEmail}
            style={[
              styles.btnLogin,
              isTablet && styles.btnResetPasswordTablet,
            ]}>
            <Text style={styles.textLogin}>{t('OPEN_MAILBOX')}</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default ResetSuccessScreen;
