import { useNavigation } from '@react-navigation/native';
import { HStack, Image, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { StackScreenNavigationProp } from '../../../../Navigation/type';
import S from './styles';

type Props = {
  name: string;
  logo: any;
  id: string;
  nativeScreen: 'TeamInfo' | 'LeaguesInfo' | 'PlayerInfo';
};

const LeaguesCard = ({ name, logo, id, nativeScreen }: Props) => {
  const navigation = useNavigation<StackScreenNavigationProp<'SearchTeam'>>();
  return (
    <TouchableOpacity
      style={S.container}
      onPress={() => {
        navigation.navigate(nativeScreen, { id });
      }}>
      <View>
        <HStack>
          <Image
            source={{ uri: logo || ''}}
            alt="leagueLogo"
            style={S.leagueLogos}
          />
          <View>
            <Text style={S.text}>{name}</Text>
            <View style={S.underline}></View>
          </View>
        </HStack>
      </View>
    </TouchableOpacity>
  );
};

export default LeaguesCard;
