import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Images } from 'src/assets/images';
import { isTablet, JWT_KEY } from 'src/base/common/Constants';
import Styles from 'src/base/common/Styles';
import Helper from 'src/base/utils/helper';
import { notifyInvalid } from 'src/base/utils/Utils';
import { Block, Image, Spinner, Text } from 'src/components';
import AuthService from 'src/domain/auth.service';
import {
  DRAWER_STACK,
  FORGET_PASSWORD_SCREEN,
  HOME_SCREEN,
  HOME_TAB_NAVIGATOR,
  REGISTER_SCREEN,
  SEND_OTP_SCREEN,
} from 'src/navigation/screen';
import { setAccount } from 'src/redux/slices/accountSlice';
import styles from 'src/screens/auth/login/login.style';
import Color from 'src/theme/Color';
import Swiper from 'react-native-swiper'
import InputComponent from '../components/InputComponent';
import SendOtpScreen from '../send-otp';

const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [studentCode, setStudentCode] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [isStudent, setIsStudent] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleRegister = () => navigation.navigate(SEND_OTP_SCREEN);
  const handleForgetPass = () => navigation.navigate(FORGET_PASSWORD_SCREEN);

  const handleLogin = async () => {
    try {
      if (!studentCode) {
        throw t('NOT_ENTER_STUDENT_CODE');
      }
      if (!password) {
        throw t('NOT_ENTER_PASSWORD');
      }
      setLoading(true);
      const authService = new AuthService();
      const { data } = await authService.login(studentCode, password);
      if (data.data.statusCode !== 200) {
        throw data.data.message;
        // throw data.description;
      }
      await Helper.storeData(JWT_KEY, data.data.accessToken);
      const infoUser = await authService.getInfoUser();
      setLoading(false);
      // infoUser.data.code === 200 &&
      dispatch(setAccount(infoUser.data.data));
      navigation.navigate(isTablet ? DRAWER_STACK : HOME_TAB_NAVIGATOR);
    } catch (error) {
      setLoading(false);
      notifyInvalid(error);
    }
  };

  const handleTeacherLogin = async () => {
    try {
      if (!email) {
        throw t('NOT_ENTER_EMAIL');
      }
      if (!password) {
        throw t('NOT_ENTER_PASSWORD');
      }
      setLoading(true);
      const authService = new AuthService();
      const { data } = await authService.teacherLogin(email, password);
      if (data.data.statusCode !== 200) {
        throw data.data.message;
        // throw data.description;
      }
      console.log('46466446>>>>>', data.data);
      await Helper.storeData(JWT_KEY, data.data.accessToken);
      const infoTeacher = await authService.getInfoTeacher();
      setLoading(false);
      // infoUser.data.code === 200 &&
      console.log(infoTeacher.data.data);
      dispatch(setAccount(infoTeacher.data.data));
      navigation.navigate(isTablet ? DRAWER_STACK : HOME_TAB_NAVIGATOR);
    } catch (error) {
      setLoading(false);
      notifyInvalid(error);
    }
  }

  const hanleChangeLogin = () => setIsStudent(!isStudent);

  return (
    <SafeAreaView style={Styles.container}>
      {isTablet && (
        <Image
          source={Images.IMG_BACKGROUND_LOGIN}
          style={styles.backgroundLogin}
        />
      )}
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block
            marginTop={isTablet ? 0 : 20}
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
          <Block alignCenter marginTop={isTablet ? 0 : 20}>
            <Text style={styles.textTitleLogin}>{t('LOGIN')}</Text>
            <Block row alignCenter>
              <Text style={styles.textNoAccount}>Đăng nhập tài khoản</Text>
              <TouchableOpacity activeOpacity={0.5} onPress={hanleChangeLogin}>
                <Text style={styles.textRegister}>{!isStudent ? "Sinh Viên" : "Giảng Viên"}</Text>
              </TouchableOpacity>
            </Block>
          </Block>
          {isStudent ? (<Block marginHorizontal={30} marginTop={isTablet ? 30 : 60}>
            <InputComponent
              marginBottom={25}
              title={t('CODE_LOGIN')}
              placeholder={t('ENTER_CODE')}
              value={studentCode}
              onChangeText={setStudentCode}
            />
            <InputComponent
              title={t('PASSWORD')}
              secureTextEntry
              placeholder={t('ENTER_PASSWORD')}
              value={password}
              onChangeText={setPassword}
            />
            <Block row alignCenter style={{ justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={styles.btnForget}
                onPress={handleForgetPass}
                activeOpacity={0.5}>
                <Text style={styles.textForgetPassword}>
                  {t('FORGET_PASSWORD')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnForget}
                onPress={handleRegister}
                activeOpacity={0.5}>
                <Text style={styles.textForgetPassword}>
                  {t('REGISTER')}
                </Text>
              </TouchableOpacity>

            </Block>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={handleLogin}
              activeOpacity={0.5}>
              <Text style={styles.textLogin}>{t('LOGIN')}</Text>
            </TouchableOpacity>
          </Block>) :
            (<Block marginHorizontal={30} marginTop={isTablet ? 30 : 60}>
              <InputComponent
                marginBottom={25}
                title={t('EMAIL_TEACHER')}
                placeholder={t('ENTER_EMAIL_TEACHER')}
                value={email}
                onChangeText={setEmail}
              />
              <InputComponent
                title={t('PASSWORD')}
                secureTextEntry
                placeholder={t('ENTER_PASSWORD')}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.btnForget}
                onPress={handleForgetPass}
                activeOpacity={0.5}>
                <Text style={styles.textForgetPassword}>
                  {t('FORGET_PASSWORD')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={handleTeacherLogin}
                activeOpacity={0.5}>
                <Text style={styles.textLogin}>{t('LOGIN')}</Text>
              </TouchableOpacity>
            </Block>)}

        </ScrollView>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
