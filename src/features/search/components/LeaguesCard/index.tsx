import { HStack, Image, Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import S from './styles';

type Props = {
  name: string;
  logo: any;
};

const LeaguesCard = ({ name, logo }: Props) => {
  return (
    <TouchableOpacity style={S.container}>
      <View>
        <HStack>
          <Image source={logo} alt="leagueLogo" style={S.leagueLogos}></Image>
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
