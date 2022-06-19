import React, {
  useCallback,
  useMemo,
} from 'react';

import isEmpty from 'lodash/isEmpty';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';
import {Images} from 'src/assets/images';
import {DATA_CALENDER} from 'src/base/common/__Tests__';
import {
  Block,
  Image,
} from 'src/components';

import ItemAgendaComponent from './components/ItemAgendaComponent';
import styles from './home.style';
import testIDs from './testIDs';

const dataDate = DATA_CALENDER.map(item => {
  return {
    title: item.day.split('/').reverse().join('-'),
    data: [item],
  };
});

type MarkedDate = {
  [key: string]: object;
};

const getMarkedDates = (items: any[]) => {
  const marked: MarkedDate = {};

  items.forEach(item => {
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {disabled: true};
    }
  });
  return marked;
};

const HomeScreen = () => {
  const marked = useMemo(() => getMarkedDates(dataDate), [dataDate]);

  const renderItem = useCallback(({item}) => {
    return <ItemAgendaComponent item={item} />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Block style={styles.headerContent}>
        <Block flex>
          <Text numberOfLines={1} style={styles.textDateTitle}>
            Nguyễn Văn Duy
          </Text>
          <Text style={styles.textId}>CT030233</Text>
        </Block>
        <Image source={Images.AVATAR_DEFAULT} style={styles.avatar} />
      </Block>
      <CalendarProvider
        date={dataDate[1].title}
        showTodayButton
        disabledOpacity={0.6}>
        <WeekCalendar
          testID={testIDs.weekCalendar.CONTAINER}
          firstDay={1}
          markedDates={marked}
        />
        <AgendaList sections={dataDate} renderItem={renderItem} />
      </CalendarProvider>
    </SafeAreaView>
  );
};

export default HomeScreen;
