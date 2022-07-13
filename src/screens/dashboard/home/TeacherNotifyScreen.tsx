import React, {useCallback, useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {getSize} from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import api from 'src/base/domain/api';
import {keyExtractor} from 'src/base/utils/Utils';
import {Block, Spinner} from 'src/components';
import ModalBox from 'src/components/ModalBox';
import ScheduleService from 'src/domain/schedule.service';
import {ADD_NOTIFY_SCREEN} from 'src/navigation/screen';
import {IUserState} from 'src/redux/slices/accountSlice';
import {IRootState} from 'src/redux/store';
import Color from 'src/theme/Color';
import ItemNotifyTeacherComponent from './components/ItemNotifyTeacherComponent';
import styles from './home.style';

const NotifiTeacher = ({navigation}) => {
  let currentMonth =
    new Date().getMonth() + 1 >= 10
      ? new Date().getMonth() + 1
      : `0${new Date().getMonth() + 1}`;
  let dateCurrent = `${new Date().getFullYear()}-${currentMonth}-${new Date().getDate()}`;
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const [isLoading, setLoading] = useState(false);
  const [dataNotify, setDataNotify] = useState([]);
  const [showModal, setShowModal] = useState<0 | 1 | 2>(0);
  const [itemSelect, setItemSelect] = useState(null);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState(dateCurrent);
  const [showModalTime, setShowModalTime] = useState(false);
  const handleChangeScreen = () => {
    navigation.navigate(ADD_NOTIFY_SCREEN);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date.toLocaleDateString();
    setShowModalTime(false);
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
    setShowModalTime(true);
    setMode(currentMode);
  };

  const showDatepicker = e => {
    showMode('date');
  };
  const scheduleService = new ScheduleService();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const {data} = await api('api/v1/notifications', null, {method: 'GET'});
        setDataNotify(data.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const renderNotify = useCallback(({item}) => {
    const _handleItem = () => handleItem(item);
    return <ItemNotifyTeacherComponent item={item} handleItem={_handleItem} />;
  }, []);

  const handleItem = item => {
    setShowModal(1);
    setItemSelect(item);
  };

  const handleCloseModal = useCallback(() => {
    setShowModal(0);
  }, []);

  const handleEdit = async () => {
    setShowModal(0);
    setTimeout(() => {
      setShowModal(2);
    }, 300);
  };

  const sendEdit = async () => {
    // console.log({title, content: content, date: value});
    return;
    // const res = await scheduleService.editNotify(itemSelect.id, {
    //   title,
    //   content: content,
    //   date: value,
    // });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Block style={styles.blockSearchTitle}>
        <Text style={styles.textSearchTitle}>Thông báo</Text>
        <Icon name={'search-outline'} size={getSize.m(24)} color="#A29D9C" />
      </Block>
      <FlatList
        data={dataNotify}
        keyExtractor={keyExtractor}
        renderItem={renderNotify}
      />
      <Block marginHorizontal={30}>
        <TouchableOpacity
          style={[styles.btnLogin]}
          activeOpacity={0.5}
          onPress={handleChangeScreen}>
          <Text style={styles.textLogin}>Thêm thông báo</Text>
        </TouchableOpacity>
      </Block>
      {isLoading && (
        <Spinner mode={'overlay'} size={'large'} color={Color.TEXT_PRIMARY} />
      )}
      <ModalBox
        onBackdropPress={handleCloseModal}
        isVisible={showModal ? true : false}
        position={'bottom'}>
        <Block style={styles.modal}>
          {showModal === 1 && (
            <>
              <TouchableOpacity style={styles.itemOption} activeOpacity={0.5}>
                <Icon
                  name={'trash-outline'}
                  color={Color.WHITE}
                  size={getSize.m(20)}
                />
                <Text style={styles.textOption}>Xoá thông báo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleEdit}
                activeOpacity={0.5}
                style={styles.itemOption}>
                <Icon
                  name={'create-outline'}
                  color={Color.WHITE}
                  size={getSize.m(20)}
                />
                <Text style={styles.textOption}>Sửa</Text>
              </TouchableOpacity>
            </>
          )}
          {showModal === 2 && (
            <>
              <Text style={styles.title}>Tiêu đề</Text>
              <TextInput
                style={styles.inputEdit}
                value={title}
                placeholder={'Nhập tiêu đề'}
                onChangeText={setTitle}
                editable
                defaultValue={itemSelect.title}
              />
              <Text style={styles.title}>Nội dung</Text>
              <TextInput
                style={styles.inputEdit}
                defaultValue={itemSelect.content}
                placeholder={'Nhập nội dung'}
                editable
                onChangeText={setContent}
                value={content}
              />
              <Text style={styles.title}>Thời gian</Text>
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
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.btnLogin, {backgroundColor: Color.TEXT_PRIMARY}]}
                onPress={sendEdit}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </>
          )}
        </Block>
      </ModalBox>
      {showModalTime && (
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

export default NotifiTeacher;
