import React, {useState} from 'react';
import {notifyInvalid} from 'src/base/utils/Utils';
import {useTranslation} from 'react-i18next';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import {Block, Spinner, Image} from 'src/components';
import styles from './home.style';
import * as securityStyles from '../user/security/security.style';
import {isTablet} from 'src/base/common/Constants';
import InputComponent from '../../auth/components/InputComponent';
import Color from 'src/theme/Color';
import ScheduleService from 'src/domain/schedule.service';
import {useSelector} from 'react-redux';
import {IUserState} from 'src/redux/slices/accountSlice';
import {IRootState} from 'src/redux/store';
import Icon from 'react-native-vector-icons/Ionicons';
import {getSize} from 'src/base/common/responsive';
import {Images} from 'src/assets/images';
import {ADD_NOTIFY_SCREEN} from 'src/navigation/screen';
const NotifiTeacher = ({navigation}) => {
  const {t} = useTranslation();
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(infoUser.sync ? true : false);
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState([]);
  const [index, setIndex] = useState(-1);
  const handleShow = async id => {
    console.log(id);
    // setShow(show.map(e => {

    // }));
  };
  const handleChangeScreen = () => {
    navigation.navigate(ADD_NOTIFY_SCREEN);
  };
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Block style={styles.blockSearchTitle}>
              <Text style={styles.textSearchTitle}>Thông báo</Text>
              <Icon
                name={'search-outline'}
                size={getSize.m(24)}
                color="#A29D9C"
              />
            </Block>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Block style={styles.blockSearchContent}>
                <TouchableOpacity
                  style={[styles.NotiItem]}
                  key={3}
                  onPress={key => handleShow(key)}>
                  <View style={styles.mainItem}>
                    <Image
                      source={Images.AVATAR_DEFAULT}
                      style={styles.imgNoti}
                    />
                    <View style={styles.blockPass}>
                      <Text style={styles.changePassTitle}>Nhúng 33</Text>
                      <Text style={styles.titlePassDes}>Ngày mai thi</Text>
                    </View>
                  </View>
                  <Icon
                    style={styles.iconNoti}
                    name={'ellipsis-horizontal'}
                    size={getSize.m(20)}
                    color={'#999999'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.NotiItem]}
                  key={2}
                  onPress={key => handleShow(key)}>
                  <View style={styles.mainItem}>
                    <Image
                      source={Images.AVATAR_DEFAULT}
                      style={styles.imgNoti}
                    />
                    <View style={styles.blockPass}>
                      <Text style={styles.changePassTitle}>Nhúng 33</Text>
                      <Text style={styles.titlePassDes}>Ngày mai thi</Text>
                    </View>
                  </View>
                  <Icon
                    style={styles.iconNoti}
                    name={'ellipsis-horizontal'}
                    size={getSize.m(20)}
                    color={'#999999'}
                  />
                </TouchableOpacity>
              </Block>
            </ScrollView>
            <Block marginHorizontal={30}>
              <TouchableOpacity
                style={[styles.btnLogin]}
                activeOpacity={0.5}
                onPress={handleChangeScreen}>
                <Text style={styles.textLogin}>Thêm thông báo</Text>
              </TouchableOpacity>
            </Block>
          </View>
        </ScrollView>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
    // List thông báo của teacher đó
    // 1 button thêm thông báo.ở cuối
  );
};

export default NotifiTeacher;
