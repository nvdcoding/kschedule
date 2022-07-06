import React, { useState } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from 'src/base/common/Styles';
import { Block, Image } from 'src/components';
import { Images } from 'src/assets/images';
import styles from './home.style';
import { isTablet } from 'src/base/common/Constants';
import Color from 'src/theme/Color';
import { getSize } from 'src/base/common/responsive';
import {
  CHANGE_INFORMATION_SCREEN,
  CHANGE_LANGUAGE_SCREEN,
  CHANGE_SECURITY_SCREEN,
  LOGIN_SCREEN,
} from 'src/navigation/screen';
import { actionLogout } from 'src/redux/slices/accountSlice';
import { useDispatch } from 'react-redux';

const InformationScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [avt, setAvt] = useState(Images.AVATAR_DEFAULT);
  const [lang, setLang] = useState('vn');
  const dispatch = useDispatch();
  const changeAVT = () => {
    console.log('state changed!');
    setAvt(Images.IMG_LOGO);
  };
  const changeInformation = () => {
    console.log('state changed!');
    navigation.navigate(CHANGE_INFORMATION_SCREEN);
  };

  const changeSecurity = () => {
    navigation.navigate(CHANGE_SECURITY_SCREEN);
  };
  const changeLang = lang => {
    console.log(lang);
    // i18n.changeLanguage(lang);
    // setLang(lang);
  };

  const handleLogout = async () => {
    await dispatch(actionLogout());
    navigation.navigate(LOGIN_SCREEN);

  };

  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.containerHome}>
            <TouchableOpacity style={styles.avtUser} onPress={changeAVT}>
              <Image source={avt} style={styles.avtImg} />
              <Text style={styles.textAvt}>Lam Lam Mai</Text>
            </TouchableOpacity>
            <Block style={styles.ListInfo}>
              <TouchableOpacity
                style={styles.ItemInfo}
                onPress={changeInformation}>
                <View style={styles.mainItem}>
                  <Icon
                    name={'person-circle'}
                    size={getSize.m(26)}
                    color={Color.BLUE_HOLDER}
                  />
                  <Text style={styles.settingUser}>{t('INFORMATION')}</Text>
                </View>
                <Icon
                  name={'chevron-forward-sharp'}
                  size={getSize.m(26)}
                  color={'#999999'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ItemInfo}
                onPress={changeSecurity}>
                <View style={styles.mainItem}>
                  <Icon name={'key'} size={getSize.m(26)} color={'#F1EF4C'} />
                  <Text style={styles.settingUser}>{t('SECURITY')}</Text>
                </View>
                <Icon
                  name={'chevron-forward-sharp'}
                  size={getSize.m(26)}
                  color={'#999999'}
                />
              </TouchableOpacity>
              {lang === 'vn' ? (
                <TouchableOpacity
                  style={styles.ItemInfo}
                  onPress={changeLang('en')}>
                  <View style={styles.mainItem}>
                    <Icon
                      name={'language'}
                      size={getSize.m(26)}
                      color={'#51B3F3'}
                    />
                    <Text style={styles.settingUser}>Tiếng Việt</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.ItemInfo}
                  onPress={changeLang()}>
                  <View style={styles.mainItem}>
                    <Icon
                      name={'language'}
                      size={getSize.m(24)}
                      color={'#ccc'}
                    />
                    <Text style={styles.settingUser}>English</Text>
                  </View>
                </TouchableOpacity>
              )}

              <TouchableOpacity style={styles.ItemInfo} onPress={handleLogout}>
                <View style={styles.mainItem}>
                  <Icon
                    name={'power-outline'}
                    size={getSize.m(24)}
                    color={Color.RED}
                  />
                  <Text style={styles.settingUser}>{t('SIGN-OUT')}</Text>
                </View>
              </TouchableOpacity>
            </Block>
          </View>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default InformationScreen;
