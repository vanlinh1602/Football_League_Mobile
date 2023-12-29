import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { HStack, ScrollView, VStack } from 'native-base';
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import { TabScreenNavigationProp } from '../../Navigation/type';
import { selectMatchInDay } from '../../redux/selectors/matches';
import { RootState } from '../../redux/types/RootState';
import AgendaItem from './AgedaItem';

const windowWidth = Dimensions.get('window').width;

const WeekCalendar = () => {
  const navigation = useNavigation<TabScreenNavigationProp<'Schedule'>>();

  const [startDate, setStartDate] = useState(moment().startOf('isoWeek'));
  const [selectDate, setSelectDate] = useState<number>(
    moment().startOf('day').valueOf(),
  );

  const matchOfDate = useSelector((state: RootState) =>
    selectMatchInDay(state, selectDate),
  );

  const generateWeekDays = () => {
    return Array.from({ length: 7 }, (_, i) =>
      moment(startDate).add(i, 'days'),
    );
  };

  const nextWeek = () => {
    const dayNextWeek = moment(startDate).add(1, 'weeks');
    setStartDate(dayNextWeek);
    setSelectDate(dayNextWeek.valueOf());
  };

  const prevWeek = () => {
    const dayPreWeek = moment(startDate).subtract(1, 'weeks');
    setStartDate(dayPreWeek);
    setSelectDate(dayPreWeek.valueOf());
  };

  const daysOfWeek = generateWeekDays();

  return (
    <View style={styles.container}>
      <HStack alignItems="center" justifyContent="space-between" mb={0}>
        <TouchableOpacity onPress={prevWeek} style={styles.arrowContainer}>
          <Text style={styles.arrowText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.header}>{`${startDate.format('MMM D')} - ${moment(
          startDate,
        )
          .add(6, 'days')
          .format('MMM D, YYYY')}`}</Text>
        <TouchableOpacity onPress={nextWeek} style={styles.arrowContainer}>
          <Text style={styles.arrowText}>&gt;</Text>
        </TouchableOpacity>
      </HStack>
      <View style={styles.weekContainer}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectDate(day.valueOf())}>
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.day}>{day.format('ddd')}</Text>
              <Text
                style={
                  selectDate === day.valueOf() ? styles.dateSelect : styles.date
                }>
                {day.format('D')}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ height: '70%', paddingBottom: 70 }}>
        <ScrollView scrollEnabled>
          <VStack>
            {}
            {matchOfDate.length ? (
              matchOfDate.map((match, index) => (
                <AgendaItem
                  key={index}
                  item={match}
                  onPress={() =>
                    navigation.navigate('TodayMatch', { matchId: match.id })
                  }
                />
              ))
            ) : (
              <View
                style={{
                  height: 52,
                  width: '100%',
                }}>
                <Text
                  style={{
                    paddingTop: 20,
                    color: 'grey',
                    fontSize: 14,
                    textAlign: 'center',
                  }}>
                  No Match Planned Today
                </Text>
              </View>
            )}
          </VStack>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  dayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (windowWidth - 80) / 7, // Subtract the width of the arrows
    paddingVertical: 10,
  },
  day: {
    fontSize: 12,
    color: '#666666',
  },
  date: {
    fontSize: 16,
    color: '#333333',
  },
  dateSelect: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#0ac2e4',
    paddingHorizontal: 5,
    borderRadius: 12,
  },
  arrowContainer: {
    width: 20, // Width of the arrow container
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 24,
    color: '#333333',
  },
});

export default WeekCalendar;
