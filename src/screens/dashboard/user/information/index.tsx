import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Pressable,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Block, Spinner } from 'src/components';
import styles from './information.style';
import { isTablet } from 'src/base/common/Constants';
import { getSize } from 'src/base/common/responsive';
import Color from 'src/theme/Color';
import InputComponent from 'src/screens/auth/components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from 'src/redux/store';
import { IUserState, setAccount } from 'src/redux/slices/accountSlice';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AuthService from 'src/domain/auth.service';
import { notifyInvalid } from 'src/base/utils/Utils';
import InformationScreen from '../../home/InformationScreen';


const ChangeInformationScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const [isLoading, setLoading] = useState(false);
  const [disable, setSwitch] = useState(false);
  const [name, setName] = useState(infoUser.name);
  const [code, setCode] = useState(infoUser.studentCode);
  const [mail, setMail] = useState(infoUser.email);
  const [phone, setPhone] = useState(infoUser.phone);
  const [avatar, setAvatar] = useState(infoUser.avatar);
  const dispatch = useDispatch();

  const CLOUDINARY_CLOUD_NAME = "ahiho";
  const CLOUDINARY_UPLOAD_PRESET = "ahiho_prs";

  const makeUploadFormData = (photo) => {
    const data = new FormData();
    data.append('file', `data:image/jpeg;base64,${photo.assets[0].base64}`);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    data.append('cloud_name', CLOUDINARY_CLOUD_NAME);

    return data;
  };

  const pickImageWithGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    });
    const data = makeUploadFormData(result);
    const { secure_url } = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
      method: 'post',
      body: data,
    }).then((res) => res.json()).catch(e => console.log(e));
    setAvatar(secure_url);
  };
  const send = async () => {
    try {
      if (!name) {
        throw 'Vui lòng nhập tên!';
      }
      if (!phone || !phone.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
        throw 'Vui lòng nhập đúng định dạng số điện thoại!';
      }
      setLoading(true);
      const authService = new AuthService();
      const { data } = await authService.updateProfile(name, phone, avatar);
      // if (data.data.statusCode !== 200) {
      //   throw data.data.message;
      //   // throw data.description;
      // }
      const infoUser = await authService.getInfoUser();
      console.log("123123", infoUser.data.data)
      setLoading(false);
      dispatch(setAccount(infoUser.data.data));
      notifyInvalid("Cập nhập thông tin thành công!");
    } catch (error) {
      setLoading(false);
      notifyInvalid(error);
    }
  }
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
                editable
              />
              <InputComponent
                title={'Mã sinh viên'}
                placeholder={'Nhập mã sinh viên..'}
                marginBottom={25}
                onChangeText={setCode}
                value={code}
                editable={false}
              />
              <InputComponent
                title={'Email'}
                placeholder={'Nhập email'}
                marginBottom={25}
                onChangeText={setMail}
                value={mail}
                editable={false}
              />
              <InputComponent
                title={'Số điện thoại'}
                placeholder={'Nhập số điện thoại'}
                marginBottom={25}
                onChangeText={setPhone}
                value={phone}
                editable
              />
              <Pressable style={{
                height: 60,
                borderTopWidth: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                // flex: 1,
                width: '100%'
              }} onPress={pickImageWithGallery}>
                <Text>Gallery</Text>
              </Pressable>

              {/* <View style={styles.Notification}>
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
              </View> */}
            </Block>
          </View>

        </ScrollView>
        <Pressable style={{
          height: 60,
          borderTopWidth: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          // flex: 1,
          width: '100%'
        }} onPress={send}>
          <Text>Gửi</Text>
        </Pressable>
      </Block>
      {
        isLoading && (
          <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
        )
      }
    </SafeAreaView >
  );
};

export default ChangeInformationScreen;
function dispatch(arg0: { payload: any; type: string; }) {
  throw new Error('Function not implemented.');
}

