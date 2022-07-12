import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from 'src/components';
import styles from './style';

const ItemNotifyComponent = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemNotify} activeOpacity={0.5}>
      <Text style={styles.titleNotify}>{item.title}</Text>
      <Text style={styles.contentNotify}>{item.content}</Text>
      <Text style={styles.timeNotify}>{item.className}</Text>
    </TouchableOpacity>
  );
};

export default memo(ItemNotifyComponent);
