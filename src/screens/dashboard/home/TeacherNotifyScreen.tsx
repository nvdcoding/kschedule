import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { getSize } from 'src/base/common/responsive';
import Styles from 'src/base/common/Styles';
import api from 'src/base/domain/api';
import { keyExtractor } from 'src/base/utils/Utils';
import { Block, Spinner } from 'src/components';
import ModalBox from 'src/components/ModalBox';
import { ADD_NOTIFY_SCREEN } from 'src/navigation/screen';
import { IUserState } from 'src/redux/slices/accountSlice';
import { IRootState } from 'src/redux/store';
import Color from 'src/theme/Color';
import ItemNotifyTeacherComponent from './components/ItemNotifyTeacherComponent';
import styles from './home.style';

const NotifiTeacher = ({ navigation }) => {
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const [isLoading, setLoading] = useState(false);
  const [dataNotify, setDataNotify] = useState([]);
  const [showModal, setShowModal] = useState<0 | 1 | 2>(0);
  const [itemSelect, setItemSelect] = useState(null);

  const handleChangeScreen = () => {
    navigation.navigate(ADD_NOTIFY_SCREEN);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await api('api/v1/notifications', null, { method: 'GET' });
        setDataNotify(data.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const renderNotify = useCallback(({ item }) => {
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

  const handleEdit = () => {
    setShowModal(0);
    setTimeout(() => {
      setShowModal(2);
    }, 300);
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
              <Text style={styles.title}>Title</Text>
              <TextInput
                style={styles.inputEdit}
                value={itemSelect.title}
                placeholder={'Nhập tiêu đề'}
              />
              <Text style={styles.title}>Content</Text>
              <TextInput
                style={styles.inputEdit}
                value={itemSelect.content}
                placeholder={'Nhập tiêu đề'}
              />
              <Text style={styles.title}>Class</Text>
              <TextInput
                style={styles.inputEdit}
                value={itemSelect.className}
                placeholder={'Nhập tiêu đề'}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.btnLogin, { backgroundColor: Color.GREEN }]}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </>
          )}
        </Block>
      </ModalBox>
    </SafeAreaView>
  );
};

export default NotifiTeacher;
