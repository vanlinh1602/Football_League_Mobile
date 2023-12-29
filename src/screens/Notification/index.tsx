import { HStack, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { AntDesign, EvilIcons, Feather } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { actions } from '../../redux/reducers/user';
import { selectUser } from '../../redux/selectors/user';
import { cancelNotification } from '../../services/notify';
import S from './style';

type Props = HomeStackScreenProps<'Notification'>;
const Notification = ({ navigation }: Props) => {
  const user = useSelector(selectUser);
  const { notification } = user ?? {};
  const dispatch = useDispatch();

  const handleDelete = async (id: string) => {
    await cancelNotification(id);
    dispatch(
      actions.updateUserData({
        path: 'notification',
        data: notification?.filter((item) => item.id !== id),
      }),
    );
    Alert.alert('Cancel notification success');
  };
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

          {user?.notification?.map((item) => (
            <HStack
              key={item.id}
              style={S.notify}
              alignItems="center"
              justifyContent="space-between">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TodayMatch', { matchId: item.data.id })
                }>
                <View>
                  <Text fontWeight="bold" fontSize={20}>
                    {item.title}
                  </Text>
                  <Text>{item.body}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <EvilIcons name="trash" size={30} color="red" />
              </TouchableOpacity>
            </HStack>
          ))}
        </VStack>
      </ScrollView>
    </View>
  );
};
export default Notification;
