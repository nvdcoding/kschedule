import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Styles from 'src/base/common/Styles';
import {Block, Spinner} from 'src/components';
import {isTablet} from 'src/base/common/Constants';
import {getIconComponent} from 'src/assets/icon';
import Color from 'src/theme/Color';
import styles from './home.style';
import {getSize} from 'src/base/common/responsive';
const Icon = getIconComponent('ionicons');
const AddScheduleScreeen = () => {
  let dateCurrent =
    new Date().getDate() +
    '/' +
    (new Date().getMonth() + 1) +
    '/' +
    new Date().getFullYear();
  let timeCurrent = new Date().getHours() + ':' + new Date().getMinutes();
  const [isLoading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState(dateCurrent);
  const [textTime, setTextTime] = useState(timeCurrent);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setTextDate(fDate);
    setTextTime(fTime);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const handleAdd = async () => {};
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            <View>
              <Text style={styles.header}>Create your todo</Text>
              <TouchableOpacity
                style={styles.blockDate}
                onPress={showDatepicker}>
                <Icon
                  name="calendar-outline"
                  color="#ccc"
                  size={getSize.m(15)}
                />
                <Text style={styles.textDate}>{textDate}</Text>
              </TouchableOpacity>
              {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
            </View>
            <View style={styles.content}>
              <TextInput
                style={styles.inputBlock}
                placeholder="Title"
                placeholderTextColor={'#EB144C'}
              />
              <TextInput
                style={[
                  styles.inputBlock,
                  {paddingTop: 20},
                  {paddingBottom: 50},
                ]}
                placeholder="Note"
                placeholderTextColor={'#EB144C'}
              />
              <Text
                style={[
                  styles.inputBlock,
                  {fontWeight: 'bold'},
                  {borderWidth: 0},
                ]}>
                Set time
              </Text>
              <TouchableOpacity onPress={showTimepicker}>
                <Text style={[styles.inputBlock, {textAlign: 'center'}]}>
                  {textTime}
                </Text>
                {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
              </TouchableOpacity>
              <Block marginHorizontal={30}>
                <TouchableOpacity
                  style={[styles.btnLogin, {fontSize: 20, fontWeight: 'bold'}]}
                  activeOpacity={0.5}
                  onPress={handleAdd}>
                  <Text style={styles.textLogin}>Save</Text>
                </TouchableOpacity>
              </Block>
            </View>
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
  );
};
export default AddScheduleScreeen;
