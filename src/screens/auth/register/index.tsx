import React, {useState} from 'react';

import {debounce} from 'lodash';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images} from 'src/assets/images';
import {FORM_REGISTER} from 'src/base/common/__Tests__';
import {isTablet, VERIFY_URL} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {validateEmail, validatePhone} from 'src/base/utils/ValidationUtils';
import {Block, Image, Spinner, Text} from 'src/components';
import ModalErrorComponent from 'src/components/ModalError';
import AuthService from 'src/domain/auth.service';
import {SIGN_UP_SUCCESS_SCREEN} from 'src/navigation/screen';
import styles from 'src/screens/auth/register/register.style';
import Color from 'src/theme/Color';

import InputComponent from '../components/InputComponent';
import {IDataSignUp} from './types';

const defaultRegister = {
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterScreen = ({navigation}) => {
  const {t} = useTranslation();
  const authService = new AuthService();
  const [dataSignUp, setDataSignUp] = useState(defaultRegister);
  const [invalid, setInvalid] = useState<number>(null);
  const [error, setError] = useState<string>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    setInvalid(null);
    try {
      Object.keys(dataSignUp).forEach((item, index) => {
        // if (!dataSignUp[item]) {
        //   setInvalid(index);
        //   throw `${t('NOT_EMPTY')} ${t(FORM_REGISTER[index].title)}`;
        // }
        if (index === 0 && !validateEmail(dataSignUp[item])) {
          setInvalid(index);
          throw t('EMAIL_INVALID');
        }
        if (index === 1 && dataSignUp.password !== dataSignUp.confirmPassword) {
          setInvalid(1);
          throw t('INVALID_CONFIRM_PASSWORD');
        }
      });
      setLoading(true);
      // const {data} = await authService.registerAccount(dataSignUp);
      // if (data.apiStatus !== 'SUCCESS') {
      //   throw data.description;
      // }
      setLoading(false);
      navigation.popToTop();
      navigation.navigate(SIGN_UP_SUCCESS_SCREEN);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const onChangeText = (text, item) => {
    const _dataSignUp = JSON.parse(JSON.stringify(dataSignUp));
    _dataSignUp[item.key] = text;
    setDataSignUp(_dataSignUp);
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
        <Block marginTop={isTablet ? 0 : 20} row alignSelf="center">
          <Text style={styles.textTitle}>Go</Text>
          <Text style={styles.textEdu}>Edu</Text>
        </Block>
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
            {FORM_REGISTER.map(item => {
              const _onChangeText = text => onChangeText(text, item);
              return (
                <InputComponent
                  key={item.id}
                  title={t(item.title)}
                  placeholder={t(item.placeholder)}
                  invalid={invalid === item.id}
                  onChangeText={debounce(_onChangeText, 200)}
                  secureTextEntry={item.security}
                  marginBottom={20}
                />
              );
            })}
            <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={0.5}
              onPress={handleSignUp}>
              <Text style={styles.textLogin}>{t('REGISTER')}</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Block>
      <ModalErrorComponent
        isVisible={error ? true : false}
        handleClose={handleCloseModal}
        error={error}
      />
      {isLoading && <Spinner mode={'overlay'} />}
    </SafeAreaView>
  );
};

export default RegisterScreen;
