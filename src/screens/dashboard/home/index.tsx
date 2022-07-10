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
  Calendar,
} from 'react-native-calendars';
import { Images } from 'src/assets/images';
import {
  Block,
  Image,
} from 'src/components';

import styles from './home.style';
import { useSelector } from 'react-redux';
import { IUserState } from 'src/redux/slices/accountSlice';
import { IRootState } from 'src/redux/store';
import ScheduleService from 'src/domain/schedule.service';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const HomeScreen = () => {
  // const marked = useMemo(() => getMarkedDates(dataDate), [dataDate]);
  const infoUser = useSelector<IRootState, IUserState>(state => state.infoUser);
  const scheduleService = new ScheduleService();
  const [data, setData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [marked, setMarked] = useState({});

  const handleDayPress = (day) => {
    let result = calendarData.concat(scheduleData).filter(e => day.dateString == e.date.split('/').reverse().join('-'));
    result = result.map(e => {
      return {
        name: e.name,
        room: e.room,
        timeStart: e.timeStart,
        timeEnd: e.timeEnd,
        teacher: e.teacher,
        title: e.title,
        note: e.note,
        time: e.time,
        type: e.title ? "personal" : "school"
      }
    });
    setData(result);
    console.log(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await scheduleService.getSchedule();
      const personalData = await scheduleService.getPersonalSchedule();
      setScheduleData(personalData.data.data.data);
      setCalendarData(data.data.data);
      const dataDate = data.data.data.map(item => {
        return {
          title: item.date.split('/').reverse().join('-'),
          data: [item],
          type: "school"
        };
      });
      const scheduleDate = personalData.data.data.data.map(i => {
        return {
          title: i.date.split('/').reverse().join('-'),
          data: [i],
          type: "personal"
        }
      });
      type MarkedDate = {
        [key: string]: object;
      };

      const getMarkedDates = (items: any[]) => {
        let marked: MarkedDate = {};

        items.forEach(item => {
          if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
            marked[item.title] = { marked: true, dots: item.type ? ['vacation'] : [], dotColor: 'blue', };
          } else {
            marked[item.title] = { disabled: true };
          }
        });
        return marked;
      };
      const marked = getMarkedDates(dataDate.concat(scheduleDate));
      setMarked(marked);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Block style={styles.headerContent}>
        <Block>
          <Text numberOfLines={1} style={styles.textDateTitle}>
            {infoUser.name} - {infoUser.studentCode}
          </Text>
        </Block>
        {/* <Image source={Images.AVATAR_DEFAULT} style={styles.avatar} /> */}
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
        <Swiper showsPagination={false} nextButton>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.text}>
                Lịch học
              </Text>
            </View>
            <ScrollView style={styles.tableSchedule}>
              {
                data.filter(e => e.type != "personal").map(e => {
                  return (<View style={styles.time}>
                    <View style={styles.leftTime}>
                      <Text style={styles.hourBold}>{e.timeStart}</Text>
                      <Text style={styles.hourBold}>-</Text>
                      <Text style={styles.hourBold}>{e.timeEnd}</Text>
                    </View>
                    <View style={styles.rightTime}>
                      <Text style={styles.main}>{e.name}</Text>
                      {e.teacher ? (<Text style={styles.main}>{e.teacher}</Text>) : null}
                      {e.room ? (<Text style={styles.main}>{e.room}</Text>) : null}
                    </View>
                  </View>)
                })
              }
            </ScrollView>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.text}>
                Lịch cá nhân
              </Text>
            </View>
            <ScrollView style={styles.tableSchedule}>
              {
                data.filter(e => e.type == "personal").map(e => {
                  return (<View style={styles.time}>
                    <View style={styles.leftTime}>
                      <Text style={styles.hourBold}>{e.time}</Text>
                    </View>
                    <View style={styles.rightTime}>
                      <Text style={styles.main}>Công việc: {e.title}</Text>
                      <Text style={styles.main}>Nội dung: {e.note}</Text>
                    </View>
                  </View>)
                })
              }
            </ScrollView>
          </View>

        </Swiper>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
