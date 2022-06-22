import React, {useState} from 'react';

import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Block, Spinner} from 'src/components';
import styles from './information.style';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Color from 'src/theme/Color';
import InputComponent from 'src/screens/auth/components/InputComponent';

const ChangeInformationScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const [disable, setSwitch] = useState(false);
  const [name, setName] = useState('Tên');
  const [code, setCode] = useState('CT030130');
  const [mail, setMail] = useState('lamdtm@gmail.com');

  const toggleSwitch = () => {
    setSwitch(!disable);
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
            <Text style={styles.textTitle}>Thông tin chung</Text>
            <Block marginHorizontal={20}>
              <InputComponent
                title={'Họ tên'}
                placeholder={t('Nhập họ tên')}
                marginBottom={25}
                onChangeText={setName}
                value={name}
              />
              <InputComponent
                title={'Mã sinh viên'}
                placeholder={'Nhập mã sinh viên..'}
                marginBottom={25}
                onChangeText={setCode}
                value={code}
              />
              <InputComponent
                title={'Email'}
                placeholder={'Nhập email'}
                marginBottom={25}
                onChangeText={setMail}
                value={mail}
              />
              <View style={styles.Notification}>
                <Text style={styles.NotificationText}>Bật thông báo</Text>
                <Switch
                  style={styles.NotificationSwitch}
                  trackColor={{
                    false: Color.TEXT_PRIMARY,
                    true: Color.TEXT_SECONDARY,
                  }}
                  thumbColor={'#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={disable}
                />
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

export default ChangeInformationScreen;
