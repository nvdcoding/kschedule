import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {Block, Spinner} from 'src/components';
import Color from 'src/theme/Color';
import styles from './home.style';
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
    <SafeAreaView
      style={[Styles.container, {backgroundColor: Color.BACKGROUND}]}>
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
              <Text style={[styles.title, {color: Color.TEXT_COLOR}]}>
                Tiêu đề
              </Text>
              <TextInput
                style={styles.inputEdit}
                value={note}
                placeholder={'Nhập tiêu đề'}
                placeholderTextColor={`${Color.WHITE}80`}
              />
              <Text style={[styles.title, {color: Color.TEXT_COLOR}]}>
                Nội dung
              </Text>
              <TextInput
                style={styles.inputEdit}
                value={note}
                placeholder={'Nhập nội dung'}
                placeholderTextColor={`${Color.WHITE}80`}
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
