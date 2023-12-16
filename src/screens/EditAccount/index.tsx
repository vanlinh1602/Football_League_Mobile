import { Divider, HStack, Image, Text, View, VStack } from 'native-base';
import React, { useMemo, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSelector } from 'react-redux';

import { Feather, MaterialIcons } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { selectUser } from '../../redux/selectors/user';
import S from './styles';
type Props = HomeStackScreenProps<'EditAccount'>;
const Profile = ({ navigation }: Props) => {
  const [userName, setUsername] = useState('Gia Hy');
  const [gmail, setGmail] = useState('hy123@gmail.com');
  const [country, setCountry] = useState('Vietnam');
  const [birthday, setBirthday] = useState(new Date());
  const [modalDatePicker, setModalDatePicker] = useState(false);

  const ModalDatePickerOn = () => {
    setModalDatePicker(true);
  };

  const ModalDatePickerOff = () => {
    setModalDatePicker(false);
  };

  const user = useSelector(selectUser);

  const { name, email, avatar } = useMemo(() => {
    return {
      name: user?.name,
      email: user?.email,
      avatar: user?.photoURL,
    };
  }, [user]);
  return (
    <View style={{ padding: 20, backgroundColor: '#fff', height: '100%' }}>
      <VStack space={5}>
        <HStack justifyContent="space-between">
          <View>
            <Text fontWeight="bold" fontSize={30}>
              Account Info
            </Text>
          </View>
          <Feather style={S.icon} name="more-horizontal" />
        </HStack>
        <HStack space={5} alignItems="center">
          <Image
            source={{
              uri:
                avatar ||
                'https://www.pngkey.com/png/detail/32-325199_afc-cup-logo-download-logo-afc-cup-2018.png',
            }}
            alt=""
            style={S.image}
          />
          <VStack>
            <Text fontWeight="bold" fontSize={24}>
              {name}
            </Text>
            <Text>{email}</Text>
          </VStack>
          <TouchableOpacity>
            <View marginLeft={100}>
              <MaterialIcons
                style={[S.icon, { position: 'absolute', right: 10 }]}
                name="edit"
              />
            </View>
          </TouchableOpacity>
        </HStack>
        <View alignItems="center">
          <Divider thickness={1} bg="#000" width={80} />
        </View>
        <VStack>
          <Text style={S.infoName}>Name:</Text>
          <View style={S.textInput}>
            <TextInput
              style={{ marginLeft: 15, padding: 5 }}
              placeholder="Input Name"
              value={userName}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <Text style={S.infoName}>Gmail:</Text>
          <View style={S.textInput}>
            <TextInput
              style={{ marginLeft: 15, padding: 5 }}
              placeholder="Input email"
              value={gmail}
              onChangeText={(text) => setGmail(text)}
            />
          </View>
          <Text style={S.infoName}>Country:</Text>
          <View style={S.textInput}>
            <TextInput
              style={{ marginLeft: 15, padding: 5 }}
              placeholder="Input country"
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
          </View>
          <Text style={S.infoName}>Day of birth:</Text>

          <HStack>
            <View style={S.dateInput}>
              <Text ml={1} padding={2.5}>
                Set Birthday text
              </Text>
            </View>
            <TouchableOpacity onPress={ModalDatePickerOn}>
            <View marginLeft={30} mt={4}>
              <MaterialIcons
                style={[S.icon, { position: 'absolute', right: 10 }]}
                name="edit"
              />
            </View>
          </TouchableOpacity>
          </HStack>
          <DatePicker
            modal
            open={modalDatePicker}
            date={birthday}
            mode="date"
            onCancel={() => ModalDatePickerOff()}
            onConfirm={(date) => setBirthday(date)
            }
          />
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={S.saveButton}>
              <Text style={S.saveText}>Save</Text>
            </View>
          </TouchableOpacity>
        </VStack>
      </VStack>
    </View>
  );
};
export default Profile;
