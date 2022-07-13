import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getSize } from 'src/base/common/responsive';
import { Text } from 'src/components';
import Color from 'src/theme/Color';
import styles from './style';

const ItemNotifyTeacherComponent = ({ item, handleItem }) => {
  return (
    <TouchableOpacity style={styles.itemNotify} activeOpacity={0.5}>
      <TouchableOpacity onPress={handleItem} style={styles.btnRemoveNotify}>
        <Icon name={'ellipsis-horizontal-outline'} size={getSize.m(20)} color={Color.WHITE} />
      </TouchableOpacity>
      <Text style={styles.titleNotify}>{item.title} - ({item.date})</Text>
      <Text style={styles.contentNotify}>{item.content}</Text>
      <Text style={styles.timeNotify}>{item.className}</Text>
    </TouchableOpacity>
  );
};

export default memo(ItemNotifyTeacherComponent);
