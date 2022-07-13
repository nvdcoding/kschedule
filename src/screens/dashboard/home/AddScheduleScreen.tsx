import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getIconComponent} from 'src/assets/icon';
import {isTablet} from 'src/base/common/Constants';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import {notifyInvalid} from 'src/base/utils/Utils';
import {Block, Spinner} from 'src/components';
import ScheduleService from 'src/domain/schedule.service';
import Color from 'src/theme/Color';
import styles from './home.style';

const Icon = getIconComponent('ionicons');

const AddScheduleScreeen = () => {
  let currentMonth =
    new Date().getMonth() + 1 >= 10
      ? new Date().getMonth() + 1
      : `0${new Date().getMonth() + 1}`;
  let dateCurrent = `${new Date().getFullYear()}-${currentMonth}-${new Date().getDate()}`;
  let hourCurrent =
    new Date().getHours() >= 10
      ? new Date().getHours()
      : `0${new Date().getHours()}`;
  let timeCurrent = hourCurrent + ':' + new Date().getMinutes();
  const [isLoading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState(dateCurrent);
  const [textTime, setTextTime] = useState(timeCurrent);
  const [note, setNote] = useState<string>(null);
  const [title, setTitle] = useState<string>(null);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let month =
      tempDate.getMonth() + 1 >= 10
        ? tempDate.getMonth() + 1
        : `0${tempDate.getMonth() + 1}`;
    let fDate = `${tempDate.getFullYear()}-${month}-${tempDate.getDate()}`;

    let hour =
      tempDate.getHours() >= 10
        ? tempDate.getHours()
        : `0${tempDate.getHours()}`;
    let fTime = hour + ':' + tempDate.getMinutes();
    setTextDate(fDate);
    setTextTime(fTime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = e => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const handleAdd = async () => {
    try {
      if (!textDate) {
        throw 'Vui lòng chọn ngày!';
      }
      if (!textTime) {
        throw 'Vui lòng chọn thời gian!';
      }
      if (!title) {
        throw 'Vui lòng nhập tiêu đề';
      }
      if (!note) {
        throw 'Vui lòng nhập tiêu đề';
      }
      setLoading(true);
      const scheduleService = new ScheduleService();
      const {data} = await scheduleService.addPersonalSchedule({
        title,
        note,
        date: textDate,
        time: textTime,
      });
      if (data.data.statusCode !== 200) {
        throw data.data.message;
      }
      if (data.data.statusCode === 200) {
        setTitle('');
        setNote('');
        setTextTime(timeCurrent);
        throw 'Thêm lịch thành công!';
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notifyInvalid(error);
    }
  };
  useEffect(() => {
    handleAdd();
  }, []);
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            <Text style={styles.header}>Thêm công việc cá nhân</Text>
            <TouchableOpacity style={styles.blockDate} onPress={showDatepicker}>
              <Icon
                name="calendar-outline"
                color="#203a87"
                size={getSize.m(20)}
              />
              <Text style={styles.textDate}>{textDate}</Text>
            </TouchableOpacity>
            <View style={styles.content}>
              <TextInput
                style={styles.inputBlock}
                placeholder="Tiêu đề"
                placeholderTextColor={`${Color.WHITE}80`}
                value={title}
                onChangeText={setTitle}
              />
              <TextInput
                style={[
                  styles.inputBlock,
                  {paddingTop: 20},
                  {paddingBottom: 50},
                ]}
                placeholder="Nội dung"
                placeholderTextColor={`${Color.WHITE}80`}
                value={note}
                onChangeText={setNote}
              />
              <Text
                style={[
                  styles.inputBlock,
                  {fontWeight: 'bold'},
                  {borderWidth: 0},
                  {backgroundColor: '#fff'},
                ]}>
                Set time
              </Text>
              <TouchableOpacity onPress={showTimepicker}>
                <Text
                  style={[
                    styles.inputBlock,
                    {textAlign: 'center', color: '#fff', marginTop: 7},
                  ]}>
                  {textTime}
                </Text>
                {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Block marginHorizontal={30} style={[styles.blockBtnLogin]}>
          <TouchableOpacity
            style={[styles.btnLogin, {fontSize: 20, fontWeight: 'bold'}]}
            activeOpacity={0.5}
            onPress={handleAdd}>
            <Text style={styles.textLogin}>Lưu</Text>
          </TouchableOpacity>
        </Block>
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
  );
};
export default AddScheduleScreeen;
