import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import {Block, Spinner} from 'src/components';
import styles from './security.style';
import {isTablet, JWT_KEY} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import InputComponent from 'src/screens/auth/components/InputComponent';
import Color from 'src/theme/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import Helper from 'src/base/utils/helper';
import {notifyInvalid} from 'src/base/utils/Utils';
import AuthService from 'src/domain/auth.service';
import {DRAWER_STACK, HOME_TAB_NAVIGATOR} from 'src/navigation/screen';
const ChangeSecurityScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [passwordOld, setPasswordOld] = useState(null);
  const [passwordNew, setPasswordNew] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const changePass = async () => {
    try {
      if (
        passwordNew === null ||
        passwordOld === null ||
        passwordConfirm === null
      ) {
        throw 'Mật khẩu không được để trống';
      }
      if (passwordNew !== passwordConfirm) {
        throw 'Mật khẩu không khớp';
      }
      if (
        passwordNew.length < 8 ||
        passwordConfirm.length < 8 ||
        passwordOld.length < 8
      ) {
        throw 'Mật khẩu quá ngắn!';
      }
      setLoading(true);
      const authService = new AuthService();
      const {data} = await authService.changePassword(
        passwordOld,
        passwordNew,
        passwordConfirm,
      );
      if (data.data.statusCode !== 200) {
        throw data.data.message;
      }
      if (data.data.message === 200) {
        throw data.data.message;
      }
      await Helper.storeData(JWT_KEY, data.data.accessToken);
      setLoading(false);
      navigation.navigate(isTablet ? DRAWER_STACK : HOME_TAB_NAVIGATOR);
    } catch (error) {
      setLoading(false);
      notifyInvalid(error);
    }
    setPasswordOld(null);
    setPasswordNew(null);
    setPasswordConfirm(null);
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
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
            <Text style={styles.textTitle}>Bảo mật & mật khẩu</Text>
            <Block>
              <View>
                <TouchableOpacity style={styles.ItemInfo} onPress={handleShow}>
                  <View style={styles.mainItem}>
                    <Icon
                      name={'md-key-outline'}
                      size={getSize.m(24)}
                      color={Color.RED}
                    />
                    <View style={styles.blockPass}>
                      <Text style={styles.changePassTitle}>Đổi mật khẩu</Text>
                      <Text style={styles.titlePassDes}>
                        {t('CHANGE_PASS')}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'ios-chevron-down-sharp'}
                    size={getSize.m(20)}
                    color={'#999999'}
                  />
                </TouchableOpacity>
                {show && (
                  <View style={styles.blockChangePass}>
                    <InputComponent
                      title=""
                      secureTextEntry
                      placeholder={t('PASSWORD_OLD')}
                      value={passwordOld}
                      onChangeText={setPasswordOld}
                      editable
                    />
                    <InputComponent
                      title=""
                      secureTextEntry
                      placeholder={t('PASSWORD_NEW')}
                      value={passwordNew}
                      onChangeText={setPasswordNew}
                      editable
                    />
                    <InputComponent
                      title=""
                      secureTextEntry
                      placeholder={t('CONFIRM_PASS')}
                      value={passwordConfirm}
                      onChangeText={setPasswordConfirm}
                      editable
                    />
                    <Block marginHorizontal={30}>
                      <TouchableOpacity
                        style={styles.btnLogin}
                        activeOpacity={0.5}
                        onPress={changePass}>
                        <Text style={styles.textLogin}>{t('SAVE_PASS')}</Text>
                      </TouchableOpacity>
                    </Block>
                  </View>
                )}
              </View>
            </Block>
          </View>
        </ScrollView>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
  );
};

export default ChangeSecurityScreen;
