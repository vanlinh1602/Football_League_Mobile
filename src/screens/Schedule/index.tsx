import { range } from 'lodash';
import { HStack, ScrollView, Text, View } from 'native-base';
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';

import { CustomWeekCalendar } from '../../components';
import { MatchCard } from '../../features/Home/components';
import { images } from '../../lib/assets';
import { Ionicons } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';

type Props = HomeStackScreenProps<'TodayMatch'>;

const Schedule = ({ navigation }: Props) => {
  return (
    <ImageBackground source={images.homeBackgound}>
      <View>
        <HStack justifyContent="flex-end" space={3}>
          <Ionicons name="search" color="#fff" size={30} />
          <Ionicons name="notifications" color="#fff" size={30} />
        </HStack>
        <Text color="#fff" fontSize={26} fontWeight="bold" ml={5}>
          Today match
        </Text>
        <HStack>
          <ScrollView horizontal>
            {range(0, 6).map((num) => (
              <View key={num} width={300}>
                <TouchableOpacity onPress={()=> navigation.navigate('TodayMatch')}>
                <MatchCard mini />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </HStack>
        <View style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
          <CustomWeekCalendar
            onDayChange={(date) => {
              console.log(date);
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Schedule;
