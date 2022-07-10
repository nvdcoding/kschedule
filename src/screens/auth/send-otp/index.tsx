import React, { useState } from 'react';

import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images } from 'src/assets/images';
import { FORM_SEND_OTP } from 'src/base/common/__Tests__';
import { isTablet, VERIFY_URL } from 'src/base/common/Constants';
import { getSize } from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import { validateEmail, validatePhone } from 'src/base/utils/ValidationUtils';
import { Block, Image, Spinner, Text } from 'src/components';
import ModalErrorComponent from 'src/components/ModalError';
import AuthService from 'src/domain/auth.service';
import { REGISTER_SCREEN, SIGN_UP_SUCCESS_SCREEN } from 'src/navigation/screen';
import styles from 'src/screens/auth/send-otp/send-otp.style';
import Color from 'src/theme/Color';

import InputComponent from '../components/InputComponent';
import Helper from 'src/base/utils/helper';
import { REGISTER } from 'redux-persist';
// import {IDataSignUp} from './types';

const defaultSendOtp = {
  email: '',
  studentCode: '',
};

const SendOtpScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const authService = new AuthService();
  const [dataSendOtp, setDataSendOtp] = useState(defaultSendOtp);
  const [invalid, setInvalid] = useState<number>(null);
  const [error, setError] = useState<string>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSendOtp = async () => {
    setInvalid(null);
    try {
      Object.keys(dataSendOtp).forEach((item, index) => {
        if (index === 0 && !validateEmail(dataSendOtp[item])) {
          setInvalid(index);
          throw t('EMAIL_INVALID');
        }
        if (index === 1 && !Helper.isValidStudentCode(dataSendOtp[item])) {
          setInvalid(index);
          throw t('INVALID_STUDENT_CODE');
        }
      });
      setLoading(true);
      const { data } = await authService.sendOtp(dataSendOtp);
      if (data.data.statusCode !== 200) {
        throw data.data.message;
        // throw data.description;
      }
      setLoading(false);
      navigation.popToTop();
      navigation.navigate(REGISTER_SCREEN);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const onChangeText = (text, item) => {
    const _dataSendOtp = JSON.parse(JSON.stringify(dataSendOtp));
    _dataSendOtp[item.key] = text;
    setDataSendOtp(_dataSendOtp);
  };

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
        <Block
          marginTop={isTablet ? 0 : 40}
          row
          alignSelf="center"
          style={styles.blockLogo}>
          <Image source={Images.IMG_LOGO} style={styles.logoLogin} />
          <View style={{ display: 'flex' }}>
            <Text style={styles.textTitle}>
              Schedule <Text style={styles.textEdu}>KMA</Text>
            </Text>
          </View>
        </Block>
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
        <Block alignCenter marginTop={10} marginBottom={40}>
          <Text style={styles.textTitleLogin}>{t('REGISTER')}</Text>
          <Block row alignCenter>
            <Text style={styles.textNoAccount}>{t('IS_ACCOUNT')}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={navigation.goBack}>
              <Text style={styles.textRegister}>{t('LOGIN')}</Text>
            </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.formData} marginTop={10}>
            {FORM_SEND_OTP.map(item => {
              const _onChangeText = text => onChangeText(text, item);
              return (
                <InputComponent
                  key={item.id}
                  title={t(item.title)}
                  placeholder={t(item.placeholder)}
                  invalid={invalid === item.id}
                  onChangeText={debounce(_onChangeText, 200)}
                  marginBottom={20}
                  editable
                />
              );
            })}
            <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={0.5}
              onPress={handleSendOtp}>
              <Text style={styles.textLogin}>Gửi mã xác nhận</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
      <ModalErrorComponent
        isVisible={error ? true : false}
        handleClose={handleCloseModal}
        error={error}
      />
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default SendOtpScreen;
