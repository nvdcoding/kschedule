import React from 'react';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from 'src/base/common/Styles';
// import {StatusBar} from 'expo-status-bar';
import {Block} from 'src/components';
// import styles from './home.style';
import {isTablet} from 'src/base/common/Constants';

const AddScheduleScreeen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            {/* <StatusBar style="auto" /> */}
            <View>
              <Text style={styles.header}>Create your todo</Text>
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
                  {paddingTop: 50},
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
              <TouchableOpacity onPress={() => {}} >
                <Text
                  style={[
                    styles.inputBlock,
                    {alignSelf: 'center', paddingLeft: 155, paddingRight: 155},
                  ]}>
                  22:00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSave}>
                <Text
                  style={[
                    styles.Save,
                    {
                      alignSelf: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'white',
                    },
                  ]}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: ConstantSourceNode.StatusBar,
  },
  header: {
    //backgroundColor:''
    marginTop: 60,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
    //textTransform:"uppercase",
    color: '#EB144C',
  },
  inputBlock: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 10,
    fontSize: 20,
    color: '#EB144C',
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#EB144C',
  },
  buttonSave: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#EB144C',
    backgroundColor: '#EB144C',
  },
});
export default AddScheduleScreeen;
