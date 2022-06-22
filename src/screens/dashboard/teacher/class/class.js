import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';

const showAlert = () => alert('cá Hồng đó');

const Class = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Notification</Text>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>THÔNG BÁO</Text>
              <TextInput
                multiline={true}
                style={styles.inputBlock}
                placeholder="Nhập nội dung"
                placeholderTextColor={'#6c7ee1'}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Đăng</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6c7ee1',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#6c7ee1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    borderRadius: 50,
    marginTop: '85%',
    marginLeft: '80%',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: '100%',
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    // color:"#6c7ee1",
    color: 'red',
    fontWeight: '600',
    fontSize: 20,
  },
  inputBlock: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 24,
    height: 80,
    color: '#6c7ee1',
    borderColor: 'red',
    borderWidth: 0,
  },
});

export default Class;
