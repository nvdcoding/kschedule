import React, {useState} from 'react';

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
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import InputComponent from 'src/screens/auth/components/InputComponent';
import Color from 'src/theme/Color';
import Icon from 'react-native-vector-icons/Ionicons';

const ChangeSecurityScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [passwordOld, setPasswordOld] = useState(null);
  const [passwordNew, setPasswordNew] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const changePass = () => {
    console.log('pass_old', passwordOld);
    console.log('pass_new', passwordNew);
    console.log('passwordConfirm', passwordConfirm);
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
                    />
                    <InputComponent
                      title=""
                      secureTextEntry
                      placeholder={t('PASSWORD_NEW')}
                      value={passwordNew}
                      onChangeText={setPasswordNew}
                    />
                    <InputComponent
                      title=""
                      secureTextEntry
                      placeholder={t('CONFIRM_PASS')}
                      value={passwordConfirm}
                      onChangeText={setPasswordConfirm}
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
