import React from 'react';

import {StyleSheet, SafeAreaView} from 'react-native';
import {Text} from 'src/components';

const AddScheduleScreeen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Thêm công việc ở đây</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    textAlign: 'center',
  },
});

export default AddScheduleScreeen;
