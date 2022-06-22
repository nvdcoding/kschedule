import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {shadow} from 'react-native-paper';
//import { StatusBar } from 'expo-status-bar';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Lập  drive - C303',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Thẻ - C303',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lập  Android - C303',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Lập hợp ngữ - C304',
  },
];

const Item = ({title, id, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate('ClassScheduleScreen')}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const Find = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item title={item.title} id={item.id} navigation={navigation} />
  );
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.header}>Your Class</Text>
      </View>
      <View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6c7ee1',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    //borderRadius: 7,
    //borderWidth: 1.5,
    //borderColor:"#6c7ee1",
  },
  title: {
    fontSize: 18,
    color: '#6c7ee1',
  },
});

export default Find;
