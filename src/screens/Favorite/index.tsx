import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import PlayerCardList from '../../features/Favorite/components/PlayerCardList';
import TeamCardList from '../../features/Favorite/components/TeamCardList';
import { AntDesign, Feather } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'Favorite'>;
const Favorite = ({ navigation }: Props) => {
  return (
    <View style={{ padding: 15, backgroundColor: '#fff', height: '100%' }}>
      <ScrollView>
      <VStack space={5}>
        <HStack justifyContent="space-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={30} />
          </TouchableOpacity>
          <Text fontWeight="bold" fontSize={30} mt={-2}>
            Favorite
          </Text>
          <Feather style={S.icon} name="more-horizontal" />
        </HStack>
        <Text style={S.todayMatchtitle}>Players</Text>
        <PlayerCardList/>
        <Text style={S.todayMatchtitle}>Teams</Text>
        <TeamCardList/>
      </VStack>
      </ScrollView>
    </View>
  );
};
export default Favorite;
