import React, {useState} from 'react';

import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Styles from 'src/base/common/Styles';
import {Block} from 'src/components';
import styles from './home.style';
import Color from 'src/theme/Color';
import {isTablet} from 'src/base/common/Constants';
//import { color } from 'react-native-reanimated';
const HomeScreen = () => {
  const [day, setDay] = useState(new Date().getDate());
  return (
    <SafeAreaView style={Styles.container}>
      <Block style={[styles.content, isTablet && styles.contentTablet]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHome}>
            <Calendar
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: '#EB144C',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#F21C1A',
                selectedDotColor: '#ffffff',
                arrowColor: Color.TEXT_PRIMARY,
                monthTextColor: Color.TEXT_PRIMARY,
                indicatorColor: Color.TEXT_PRIMARY,
                textDayFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
              onDayPress={day => {
                setDay(day.dateString);
              }}
              onDayLongPress={day => {
                console.log('selected day', day);
              }}
              monthFormat={'yyyy MM'}
              onMonthChange={month => {
                console.log('month changed', month);
              }}
              hideArrows={false}
              hideExtraDays={false}
              disableMonthChange={false}
              firstDay={1}
              hideDayNames={false}
              showWeekNumbers={false}
              // onPressArrowLeft={subtractMonth => subtractMonth()}
              // onPressArrowRight={addMonth => addMonth()}
              disableArrowLeft={false}
              disableArrowRight={false}
              disableAllTouchEventsForDisabledDays={false}
              markedDates={{
                [day]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: Color.TEXT_PRIMARY,
                  selectedTextColor: '#fff',
                  // marked: true,
                  // dotColor: Color.TEXT_SECONDARY,
                },
              }}
            />
            <View style={styles.contentHome}>
              <Text style={[styles.text,{color:'#EB144C'},{fontWeight: 'bold'}]}>
                Schedule <Text style={[styles.number,{color:'#EB144C'},{backgroundColor:'#00adf5'},{fontWeight: 'bold'}]}>2</Text>
              </Text>
              <View style={styles.tableSchedule}>
                <View style={styles.time}>
                  <Text style={styles.hour}>{day}</Text>
                  <Text style={styles.main}>Mon 1</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.hour}>18:00-21:00</Text>
                  <Text style={styles.main}>Mon 1</Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.hour}>18:00-21:00</Text>
                  <Text style={styles.main}>Mon 1</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

export default HomeScreen;
