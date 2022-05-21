import React from 'react';

import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Styles from 'src/base/common/Styles';
import {Block} from 'src/components';
import styles from './home.style';
import {isTablet} from 'src/base/common/Constants';
const HomeScreen = () => {
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
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                monthTextColor: 'blue',
                indicatorColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16,
              }}
              onDayPress={day => {
                console.log('selected day', day);
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
              onPressArrowLeft={subtractMonth => subtractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              disableArrowLeft={false}
              disableArrowRight={false}
              disableAllTouchEventsForDisabledDays={false}
              markedDates={{
                '2022-05-21': {
                  selected: true,
                  marked: true,
                  selectedColor: 'red',
                },
                '2022-05-22': {
                  // selected: true,
                  marked: true,
                  color: 'red',
                  selectedColor: 'red',
                },
                '2022-05-25': {
                  // selected: true,
                  marked: true,
                  color: 'red',
                  selectedColor: 'red',
                },
              }}
            />
            <View style={styles.contentHome}>
              <Text style={styles.text}>
                Schedule <Text style={styles.number}>2</Text>
              </Text>
              <View style={styles.tableSchedule}>
                <View style={styles.time}>
                  <Text style={styles.hour}>18:00-21:00</Text>
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
