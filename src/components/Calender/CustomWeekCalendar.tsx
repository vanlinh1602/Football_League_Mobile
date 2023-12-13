/* eslint-disable react/display-name */
import moment from 'moment';
import { HStack, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';

import { AntDesign } from '../../lib/icons';
import AgendaItem from './AgedaItem';

const items = [
  {
    title: '2023-11-21',
    data: [
      {
        hour: '12am',
        duration: '1h',
        title: 'First Yoga',
      },
    ],
  },
  {
    title: '2023-11-24',
    data: [
      {
        hour: '4pm',
        duration: '1h',
        title: 'Pilates ABC',
      },
      {
        hour: '5pm',
        duration: '1h',
        title: 'Vinyasa Yoga',
      },
    ],
  },
  {
    title: '2023-11-25',
    data: [
      {
        hour: '1pm',
        duration: '1h',
        title: 'Ashtanga Yoga',
      },
      {
        hour: '2pm',
        duration: '1h',
        title: 'Deep Stretches',
      },
      {
        hour: '3pm',
        duration: '1h',
        title: 'Private Yoga',
      },
    ],
  },
  {
    title: '2023-11-26',
    data: [
      {
        hour: '12am',
        duration: '1h',
        title: 'Ashtanga Yoga',
      },
    ],
  },
  {
    title: '2023-11-27',
    data: [{}],
  },
  {
    title: '2023-11-28',
    data: [
      {
        hour: '9pm',
        duration: '1h',
        title: 'Middle Yoga',
      },
      {
        hour: '10pm',
        duration: '1h',
        title: 'Ashtanga',
      },
      {
        hour: '11pm',
        duration: '1h',
        title: 'TRX',
      },
      {
        hour: '12pm',
        duration: '1h',
        title: 'Running Group',
      },
    ],
  },
  {
    title: '2023-11-29',
    data: [
      {
        hour: '12am',
        duration: '1h',
        title: 'Ashtanga Yoga',
      },
    ],
  },
  {
    title: '2023-11-30',
    data: [{}],
  },
  {
    title: '2023-12-01',
    data: [
      {
        hour: '9pm',
        duration: '1h',
        title: 'Pilates Reformer',
      },
      {
        hour: '10pm',
        duration: '1h',
        title: 'Ashtanga',
      },
      {
        hour: '11pm',
        duration: '1h',
        title: 'TRX',
      },
      {
        hour: '12pm',
        duration: '1h',
        title: 'Running Group',
      },
    ],
  },
  {
    title: '2023-12-02',
    data: [
      {
        hour: '1pm',
        duration: '1h',
        title: 'Ashtanga Yoga',
      },
      {
        hour: '2pm',
        duration: '1h',
        title: 'Deep Stretches',
      },
      {
        hour: '3pm',
        duration: '1h',
        title: 'Private Yoga',
      },
    ],
  },
  {
    title: 1704128400000,
    data: [
      {
        hour: '12am',
        duration: '1h',
        title: 'Last Yoga',
      },
    ],
  },
  {
    title: '2024-01-03',
    data: [
      {
        hour: '1pm',
        duration: '1h',
        title: 'Ashtanga Yoga',
      },
      {
        hour: '2pm',
        duration: '1h',
        title: 'Deep Stretches',
      },
      {
        hour: '3pm',
        duration: '1h',
        title: 'Private Yoga',
      },
    ],
  },
  {
    title: '2024-01-04',
    data: [
      {
        hour: '12am',
        duration: '1h',
        title: 'Last Yoga',
      },
    ],
  },
  {
    title: '2024-01-05',
    data: [
      {
        hour: '12am',
        duration: '1h',
        title: 'Last Yoga',
      },
    ],
  },
];

type Props = {
  onDayChange: (date: number) => void;
  currentDate?: number;
};

const CustomWeekCalendar = ({ onDayChange, currentDate }: Props) => {
  return (
    <View style={styles.calendar}>
      <View style={{ height: '76%' }}>
        <HStack alignItems="center" ml={5} space={3}>
          <AntDesign name="calendar" color="#686868" size={24} />
          <Text fontWeight="bold">
            {moment(currentDate).format('MMM DD - YYYY')}
          </Text>
        </HStack>
        <CalendarProvider
          key="calendar_porvider"
          date={moment(currentDate).toISOString()}
          onDateChanged={(dateString) => {
            const date = moment(dateString).valueOf();
            onDayChange(date);
          }}>
          <WeekCalendar
            allowShadow={false}
            key="ExpandableCalendar"
            date={moment(currentDate).toISOString()}
            current={moment(currentDate).toISOString()}
            firstDay={1}
          />
          <AgendaList
            key="AgendaList"
            sections={items}
            renderItem={AgendaItem}
            sectionStyle={styles.section}
            useMoment
          />
        </CalendarProvider>
      </View>
    </View>
  );
};

export default CustomWeekCalendar;

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 5,
  },
  title: {
    paddingTop: 10,
    marginLeft: 25,
  },
  section: {
    backgroundColor: 'white',
    color: 'grey',
    textTransform: 'capitalize',
  },
});
