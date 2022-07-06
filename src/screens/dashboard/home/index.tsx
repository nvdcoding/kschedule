import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import isEmpty from 'lodash/isEmpty';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {
  AgendaList,
  Calendar,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';
import { Images } from 'src/assets/images';
import { DATA_CALENDER } from 'src/base/common/__Tests__';
import {
  Block,
  Image,
} from 'src/components';

import ItemAgendaComponent from './components/ItemAgendaComponent';
import styles from './home.style';
import testIDs from './testIDs';
import { useSelector } from 'react-redux';
import { IUserState } from 'src/redux/slices/accountSlice';
import { IRootState } from 'src/redux/store';
import ScheduleService from 'src/domain/schedule.service';
import { ScrollView } from 'react-native-gesture-handler';




const HomeScreen = () => {
  // const marked = useMemo(() => getMarkedDates(dataDate), [dataDate]);
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const scheduleService = new ScheduleService();
  const state = {
    selectedDate: "",
    markedDates: {}
  }
  const [data, setData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [marked, setMarked] = useState({});

  const handleDayPress = (day) => {
    let result = calendarData.filter(e => day.dateString == e.date.split('/').reverse().join('-'));
    result = result.map(e => {
      return {
        name: e.name,
        room: e.room,
        timeStart: e.timeStart,
        timeEnd: e.timeEnd,
        teacher: e.teacher
      }
    });
    setData(result);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await scheduleService.getSchedule();
      setCalendarData(data.data.data.data);
      const dataDate = data.data.data.data.map(item => {
        return {
          title: item.date.split('/').reverse().join('-'),
          data: [item],
        };
      });

      type MarkedDate = {
        [key: string]: object;
      };

      const getMarkedDates = (items: any[]) => {
        let marked: MarkedDate = {};

        items.forEach(item => {
          if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
            marked[item.title] = { marked: true };
          } else {
            marked[item.title] = { disabled: true };
          }
        });
        return marked;
      };
      const marked = getMarkedDates(dataDate);
      setMarked(marked);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Block style={styles.headerContent}>
        <Block flex>
          <Text numberOfLines={1} style={styles.textDateTitle}>
            {infoUser.studentCode}
          </Text>
          {/* <Text style={styles.textId}>{infoUser.studentCode}</Text> */}
        </Block>
        <Image source={Images.AVATAR_DEFAULT} style={styles.avatar} />
      </Block>
      <Calendar
        date={new Date().toISOString().split('T')[0]}
        showTodayButton
        disabledOpacity={0.6}
        markedDates={marked}
        onDayPress={handleDayPress}
        theme={{
          selectedDayBackgroundColor: "black"
        }}
      >
        {/* renderItem= */}
        {/* <AgendaList sections={dataDate} renderItem={renderItem} /> */}
      </Calendar>
      <View style={styles.contentHome}>
        <View>
          <Text style={styles.text}>
            Schedule <Text style={styles.number}>{data.length}</Text>
          </Text>
        </View>
        <ScrollView style={styles.tableSchedule}>
          {
            data.map(e => {
              return (<View style={styles.time}>
                <View style={styles.leftTime}>
                  <Text style={styles.hourBold}>{e.timeStart}</Text>
                  <Text style={styles.hourBold}>-</Text>
                  <Text style={styles.hourBold}>{e.timeEnd}</Text>
                </View>
                <View style={styles.rightTime}>
                  <Text style={styles.main}>{e.name}</Text>
                  <Text style={styles.main}>{e.teacher ? e.teacher : "Không có dữ liệu"}</Text>
                  <Text style={styles.main}>{e.room ? e.room : "Không có dữ liệu"}</Text>
                </View>
              </View>)
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
