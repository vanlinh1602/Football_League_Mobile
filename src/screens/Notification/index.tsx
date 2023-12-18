import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import UpcomingMatchCard from '../../features/search/components/UpcomingMatchCard';
import { AntDesign, Feather } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './style';

type Props = HomeStackScreenProps<'Notification'>;
const Notification = ({ navigation }: Props) => {
  return (
    <View style={{ padding: 20, backgroundColor: '#fff', height: '100%' }}>
      <ScrollView>
      <VStack space={5}>
        <HStack justifyContent="space-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={30} />
          </TouchableOpacity>
          <Text fontWeight="bold" fontSize={30} mt={-2}>
            Notification
          </Text>
          <Feather style={S.icon} name="more-horizontal" />
        </HStack>

        <Text style={S.todayMatchtitle}>Today match</Text>
        <UpcomingMatchCard/>
        <Text style={S.todayMatchtitle}>Upcoming match</Text>
        <UpcomingMatchCard/>
        <UpcomingMatchCard/>
        <UpcomingMatchCard/>
      </VStack>
      </ScrollView>
    </View>
  );
};
export default Notification;
