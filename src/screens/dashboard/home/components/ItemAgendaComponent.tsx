import React, {memo} from 'react';

import {TouchableOpacity} from 'react-native';
import {
  Block,
  Text,
} from 'src/components';

import styles from '../home.style';
import testIDs from '../testIDs';

const ItemAgendaComponent = ({item}) => {
  return (
    <TouchableOpacity
      // onPress={itemPressed}
      style={styles.item}
      testID={testIDs.agenda.ITEM}>
      <Block>
        <Text style={styles.itemHourText}>4pm</Text>
        <Text style={styles.itemDurationText}>2h</Text>
      </Block>
      <Block style={styles.contentItem}>
        <Block style={styles.contentItemAgenda}>
          <Text style={styles.itemTitleText}>{item.className}</Text>
          <Text style={styles.itemRangeText}>09:30 - 10:00 AM</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default memo(ItemAgendaComponent);
