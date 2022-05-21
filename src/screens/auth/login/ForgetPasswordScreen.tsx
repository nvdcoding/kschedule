import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from 'src/assets/images';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {validateEmail} from 'src/base/utils/ValidationUtils';
import {Block, Image, Spinner, Text} from 'src/components';
import ModalErrorComponent from 'src/components/ModalError';
import AuthService from 'src/domain/auth.service';
import {RESET_SUCCESS_SCREEN} from 'src/navigation/screen';
import styles from 'src/screens/auth/login/login.style';
import Color from 'src/theme/Color';

import InputComponent from '../components/InputComponent';

const ForgetPasswordScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [email, setEmail] = useState<string>(null);
  const [error, setError] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleReset = async () => {
    if (!validateEmail(email)) {
      return setError(t('EMAIL_INVALID'));
    }
    try {
      setLoading(true);
      const authService = new AuthService();
      const {data} = await authService.resetPassWord(email);
      if (data.apiStatus !== 'SUCCESS') {
        return setError(data.description);
      }
      setEmail(null);
      navigation.navigate(RESET_SUCCESS_SCREEN, email);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const onChangeTextEmail = text => setEmail(text);

  const handleCloseModal = () => setError(null);

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
            color={Color.RED}
          />
        </TouchableOpacity>
        <Block
          marginTop={isTablet ? 0 : 20}
          row
          alignSelf="center"
          style={styles.blockLogo}>
          <Image source={Images.IMG_LOGO} style={styles.logoLogin} />
          <View style={{display: 'flex'}}>
            <Text style={styles.textTitle}>
              Schedule <Text style={styles.textEdu}>KMA</Text>
            </Text>
          </View>
        </Block>
        <Block alignCenter marginTop={isTablet ? 5 : 20}>
          <Text style={styles.textTitleLogin}>{t('PASSWORD_RETRIEVAL')}</Text>
        </Block>
        <Block marginHorizontal={30} marginTop={90}>
          <InputComponent
            title={t('EMAIL_LOGIN')}
            placeholder={t('ENTER_EMAIL')}
            onChangeText={onChangeTextEmail}
            value={email}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleReset}
            style={styles.btnLogin}>
            <Text style={styles.textLogin}>{t('PASSWORD_RETRIEVAL')}</Text>
          </TouchableOpacity>
        </Block>
      </Block>
      <ModalErrorComponent
        isVisible={error ? true : false}
        handleClose={handleCloseModal}
        error={error}
      />
      {loading && <Spinner mode={'overlay'} />}
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
