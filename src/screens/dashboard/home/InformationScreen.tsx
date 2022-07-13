import React from 'react';

import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {Block, Image} from 'src/components';
import {
  CHANGE_INFORMATION_SCREEN,
  CHANGE_SECURITY_SCREEN,
  LOGIN_SCREEN,
  TIMETABLE_SYNC_SCREEN,
} from 'src/navigation/screen';
import {actionLogout, IUserState} from 'src/redux/slices/accountSlice';
import {IRootState} from 'src/redux/store';
import Color from 'src/theme/Color';
import styles from './home.style';

const InformationScreen = ({navigation}) => {
  const {t} = useTranslation();
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const dispatch = useDispatch();

  const changeInformation = () => {
    navigation.navigate(CHANGE_INFORMATION_SCREEN);
  };

  const changeSync = () => {
    navigation.navigate(TIMETABLE_SYNC_SCREEN);
  };

  const changeSecurity = () => {
    navigation.navigate(CHANGE_SECURITY_SCREEN);
  };

  const handleLogout = async () => {
    await dispatch(actionLogout());
    navigation.navigate(LOGIN_SCREEN);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            <TouchableOpacity style={styles.avtUser}>
              <Image
                source={{
                  uri: infoUser.avatar
                    ? infoUser.avatar
                    : 'https://res.cloudinary.com/ahiho/image/upload/v1657637032/270955281_633868481163504_2151640569797061547_n_ywzt1w.png',
                }}
                style={styles.avtImg}
              />
              <Text style={styles.textAvt}>{infoUser.name}</Text>
            </TouchableOpacity>
            <Block>
              <TouchableOpacity
                style={styles.ItemInfo}
                onPress={changeInformation}>
                <View style={styles.mainItem}>
                  <Icon
                    name={'person-circle'}
                    size={getSize.m(26)}
                    color="#6495c2"
                  />
                  <Text style={styles.settingUser}>{t('INFORMATION')}</Text>
                </View>
                <Icon
                  name={'chevron-forward-sharp'}
                  size={getSize.m(20)}
                  color={'#999999'}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.ItemInfo} onPress={changeSync}>
                <View style={styles.mainItem}>
                  <Icon name={'sync'} size={getSize.m(26)} color="#d12d21" />
                  <Text style={styles.settingUser}>Đồng bộ</Text>
                </View>
                <Icon
                  name={'chevron-forward-sharp'}
                  size={getSize.m(20)}
                  color={'#999999'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.ItemInfo}
                onPress={changeSecurity}>
                <View style={styles.mainItem}>
                  <Icon name={'key'} size={getSize.m(26)} color={'#d1a41a'} />
                  <Text style={styles.settingUser}>{t('SECURITY')}</Text>
                </View>
                <Icon
                  name={'chevron-forward-sharp'}
                  size={getSize.m(20)}
                  color={'#999999'}
                />
              </TouchableOpacity>

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
