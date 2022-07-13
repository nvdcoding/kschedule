import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { isTablet } from 'src/base/common/Constants';
import { getSize } from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import { debug } from 'src/base/utils/DebugUtil';
import { notifyInvalid } from 'src/base/utils/Utils';
import { Block, Spinner } from 'src/components';
import ScheduleService from 'src/domain/schedule.service';
import { NOTIFI_SCREEN, NOTIFI_TEACHER_SCREEN } from 'src/navigation/screen';
import Color from 'src/theme/Color';
import styles from './home.style';
const AddNotifyScreen = ({ navigation }) => {
  let currentMonth =
    new Date().getMonth() + 1 >= 10
      ? new Date().getMonth() + 1
      : `0${new Date().getMonth() + 1}`;
  let dateCurrent = `${new Date().getDate()}/${currentMonth}/${new Date().getFullYear()}`;
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState(dateCurrent);
  const [note, setNote] = useState<string>(null);
  const scheduleService = new ScheduleService();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await scheduleService.getClasses();
        const result = data.data.data.map(e => {
          return {
            label: e.name,
            value: e.id
          }
        });
        data.data.statusCode === 200 && setItems(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const sendNoti = async () => {
    try {
      if (!title || !content || !textDate || !value) {
        throw "Vui lòng điền đủ thông tin";
      }
      setLoading(true);
      try {
        const res = await scheduleService.addNotify(title, content, textDate, value);
        if (res.data.data.statusCode != 200) {
          throw res.data.data.message;
        }
      } catch (error) {
        console.log(error)
      }

      notifyInvalid("Thêm thành công!");
      setLoading(false);
      navigation.navigate(NOTIFI_TEACHER_SCREEN);
    } catch (error) {
      setLoading(false);
      notifyInvalid(error);
    }

  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date.toLocaleDateString();
    console.log(currentDate)
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
      style={[Styles.container, { backgroundColor: Color.BACKGROUND }]}>
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
              <Text style={[styles.title, { color: Color.TEXT_COLOR }]}>
                Tiêu đề
              </Text>
              <TextInput
                style={styles.inputEdit}
                value={title}
                placeholder={'Nhập tiêu đề'}
                placeholderTextColor={`${Color.WHITE}80`}
                onChangeText={setTitle}
                editable
              />
              <Text style={[styles.title, { color: Color.TEXT_COLOR }]}>
                Nội dung
              </Text>
              <TextInput
                style={styles.inputEdit}
                value={content}
                placeholder={'Nhập nội dung'}
                placeholderTextColor={`${Color.WHITE}80`}
                onChangeText={setContent}
                editable
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                extendableBadgeContainer
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
