import auth from '@react-native-firebase/auth';
import { Divider, HStack, Image, Text, View, VStack } from 'native-base';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SectionSelect } from '../../features/Profile/components';
import { profile_asset } from '../../lib/assets';
import { Feather, MaterialIcons } from '../../lib/icons';
import { HomeTabScreenProps } from '../../Navigation/type';
import { actions as userActions } from '../../redux/reducers/user';
import { selectUser } from '../../redux/selectors/user';
import S from './styles';

type Props = HomeTabScreenProps<'Profile'>;
const Profile = ({ navigation }: Props) => {
  const dispatch = useDispatch();

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
              Account
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
          <MaterialIcons
            style={[S.icon, { position: 'absolute', right: 10 }]}
            name="edit"
          />
        </HStack>
        <View alignItems="center">
          <Divider thickness={1} bg="#000" width={80} />
        </View>
        <SectionSelect
          title="Personal Setting"
          onPress={() => {}}
          image={profile_asset.personal_setting}
        />
        <SectionSelect
          title="Notification"
          onPress={() => {}}
          image={profile_asset.notification}
        />
        <SectionSelect
          title="General"
          onPress={() => {}}
          image={profile_asset.general}
        />
        <SectionSelect
          title="Help Center"
          onPress={() => {}}
          image={profile_asset.help}
        />
        <SectionSelect
          title="Log Out"
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                dispatch(userActions.signOut());
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Profile' }],
                });
              });
          }}
          image={profile_asset.logout}
        />
      </VStack>
    </View>
  );
};
export default Profile;
