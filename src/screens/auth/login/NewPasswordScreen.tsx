import React, {
  useEffect,
  useState,
} from 'react';

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
  Spinner,
  Text,
} from 'src/components';
import ModalError from 'src/components/ModalError';
import AuthService from 'src/domain/auth.service';
import {
  CHANGE_PASSWORD_SUCCESS_SCREEN,
  LOGIN_SCREEN,
} from 'src/navigation/screen';
import styles from 'src/screens/auth/login/login.style';
import Color from 'src/theme/Color';

import InputComponent from '../components/InputComponent';

const NewPasswordScreen = ({navigation, route}) => {
  const {t} = useTranslation();
  const [password, setPassword] = useState<string>(null);
  const [confirmPassword, setConfirmPassword] = useState<string>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messageErr, setMessageErr] = useState<string>(null);

  const handleSavePass = async () => {
    try {
      if (!password) {
        throw `${t('NOT_EMPTY')} ${t('PASSWORD')}`;
      }
      if (password.length < 6) {
        throw t('MAX_LENGTH_PASSWORD');
      }
      if (!confirmPassword) {
        throw `${t('NOT_EMPTY')} ${t('RE_ENTER_PASSWORD')}`;
      }
      if (password !== confirmPassword) {
        throw t('INVALID_CONFIRM_PASSWORD');
      }
      setLoading(true);
      const authService = new AuthService();
      const {data} = await authService.changePasswordOtp(
        password,
        route.params.item_id,
      );
      setLoading(false);
      if (data.apiStatus === 'SUCCESS') {
        navigation.navigate(CHANGE_PASSWORD_SUCCESS_SCREEN);
      } else {
        throw t('CHANGE_PASSWORD_FAIL');
      }
    } catch (error) {
      setLoading(false);
      setMessageErr(error);
    }
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate(LOGIN_SCREEN);
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
  }, []);

  const handleClose = () => setMessageErr(null);

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
          onPress={handleBack}>
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
        <Block alignCenter marginTop={isTablet ? 5 : 20}>
          <Text style={styles.textTitleLogin}>
            {t('ENTER_YOUR_NEW_PASSWORD')}
          </Text>
        </Block>
        <Block marginHorizontal={30} marginTop={isTablet ? 35 : 80}>
          <InputComponent
            title={t('ENTER_NEW_PASSWORD')}
            secureTextEntry
            placeholder={t('ENTER_PASSWORD')}
            marginBottom={25}
            onChangeText={setPassword}
            value={password}
          />
          <InputComponent
            title={t('CONFIRM_PASSWORD')}
            secureTextEntry
            placeholder={t('RE_ENTER_PASSWORD')}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <TouchableOpacity
            onPress={handleSavePass}
            style={styles.btnLogin}
            activeOpacity={0.5}>
            <Text style={styles.textLogin}>{t('SAVE_NEW_PASSWORD')}</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <ModalError
        isVisible={messageErr ? true : false}
        handleClose={handleClose}
        error={messageErr}
      />
      {isLoading && <Spinner mode={'overlay'} />}
    </SafeAreaView>
  );
};

export default NewPasswordScreen;
