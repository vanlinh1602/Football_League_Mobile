import moment from 'moment';
import { HStack, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { CustomWeekCalendar } from '../../components';
import { MatchCard } from '../../features/Home/components';
import { images } from '../../lib/assets';
import { HomeStackScreenProps } from '../../Navigation/type';
import { selectMatchInDay } from '../../redux/selectors/matches';
import { RootState } from '../../redux/types/RootState';

type Props = HomeStackScreenProps<'TodayMatch'>;

const Schedule = ({ navigation }: Props) => {
  const todayMatch = useSelector((state: RootState) =>
    selectMatchInDay(state, moment.now()),
  );
  return (
    <ImageBackground source={images.homeBackgound}>
      <View>
        <Text color="#fff" fontSize={26} fontWeight="bold" ml={5}>
          Today match
        </Text>
        <HStack>
          <ScrollView horizontal>
            {todayMatch.map((match) => (
              <View key={match.id} width={300}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('TodayMatch')}>
                  <MatchCard mini match={match} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </HStack>
        <View
          style={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: '70%',
          }}>
          <CustomWeekCalendar />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Schedule;
