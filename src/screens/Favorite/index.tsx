import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import FavoriteList from '../../features/Favorite/components/FavoriteList';
import { AntDesign, Feather } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { selectUser } from '../../redux/selectors/user';
import S from './styles';

type Props = HomeStackScreenProps<'Favorite'>;
const Favorite = ({ navigation }: Props) => {
  const user = useSelector(selectUser);
  const { favorite } = user ?? {};
  console.log(favorite);

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
          <Text style={S.todayMatchtitle}>Leagues</Text>
          <ScrollView horizontal={true}>
            <HStack space={5}>
              {favorite?.league?.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() =>
                    navigation.navigate('LeaguesInfo', { id: item })
                  }>
                  <FavoriteList type="league" id={item} />
                </TouchableOpacity>
              ))}
            </HStack>
          </ScrollView>
          <Text style={S.todayMatchtitle}>Teams</Text>
          <ScrollView horizontal={true}>
            <HStack space={5}>
              {favorite?.team?.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => navigation.navigate('TeamInfo', { id: item })}>
                  <FavoriteList type="team" id={item} />
                </TouchableOpacity>
              ))}
            </HStack>
          </ScrollView>
          <Text style={S.todayMatchtitle}>Players</Text>
          <ScrollView horizontal={true}>
            <HStack space={5}>
              {favorite?.player?.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() =>
                    navigation.navigate('PlayerInfo', { id: item })
                  }>
                  <FavoriteList key={item} type="player" id={item} />
                </TouchableOpacity>
              ))}
            </HStack>
          </ScrollView>
        </VStack>
      </ScrollView>
    </View>
  );
};
export default Favorite;
