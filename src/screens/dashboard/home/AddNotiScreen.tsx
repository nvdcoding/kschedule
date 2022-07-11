import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {notifyInvalid} from 'src/base/utils/Utils';
import {useTranslation} from 'react-i18next';

import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import {Block, Spinner} from 'src/components';
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
const AddNotifyScreen = ({navigation}) => {
  let currentMonth =
    new Date().getMonth() + 1 >= 10
      ? new Date().getMonth() + 1
      : `0${new Date().getMonth() + 1}`;
  let dateCurrent = `${new Date().getDate()}/${currentMonth}/${new Date().getFullYear()}`;
  const [isLoading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState(dateCurrent);
  const [note, setNote] = useState<string>(null);
  const countries = ['L01', 'L02', 'L03'];
  const handleShow = async id => {
    console.log(id);
  };
  const changeClass = async e => {
    setSelectedValue(e);
  };
  const sendNoti = async => {
    console.log('noti');
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let month =
      tempDate.getMonth() + 1 >= 10
        ? tempDate.getMonth() + 1
        : `0${tempDate.getMonth() + 1}`;
    let fDate = `${tempDate.getDate()}/${month}/${tempDate.getFullYear()}`;
    setTextDate(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = e => {
    showMode('date');
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
            <View>
              <Text style={styles.headerNoti}>Thêm thông báo</Text>
              <TouchableOpacity
                style={styles.blockDateNoti}
                onPress={showDatepicker}>
                <Icon
                  name="calendar-outline"
                  color="#ccc"
                  size={getSize.m(20)}
                />
                <Text style={styles.textDateNoti}>{textDate}</Text>
              </TouchableOpacity>
            </View>
            <Block>
              <TextInput
                style={[
                  styles.inputBlock,
                  {paddingTop: 10},
                  {paddingBottom: 30},
                ]}
                placeholder="Tiêu đề"
                placeholderTextColor={'#EB144C'}
                value={note}
                onChangeText={setNote}
              />
              <TextInput
                style={[
                  styles.inputBlock,
                  {paddingTop: 20},
                  {paddingBottom: 50},
                ]}
                placeholder="Nội dung"
                placeholderTextColor={'#EB144C'}
                value={note}
                onChangeText={setNote}
              />
            </Block>
            <Block marginHorizontal={30}>
              <TouchableOpacity
                style={[styles.btnLogin]}
                activeOpacity={0.5}
                onPress={sendNoti}>
                <Text style={styles.textLogin}>Gửi thông báo</Text>
              </TouchableOpacity>
            </Block>
          </View>
        </ScrollView>
      </Block>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          textColor="red"
          style={styles.DateTimePicker}
          onChange={onChange}
        />
      )}
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
    </SafeAreaView>
    // List danh sách lớp ra ( gọi api list classes)
    // Teacher nhấn vào lớp => ra màn chi tiết lớp, bao gồm: tên lớp, 1 button thêm thông báo.
  );
};

export default AddNotifyScreen;
