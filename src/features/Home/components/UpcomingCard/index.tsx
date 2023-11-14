import { HStack, Image, Text, VStack, View } from 'native-base';

import S from './styles';
import moment from 'moment';

import { ImageBackground } from 'react-native';
import { card_BG } from '../../../../lib/assets';
import { random } from 'lodash';

type Props = {
  teamA: {
    name: string;
    logo: any;
  };
  teamB: {
    name: string;
    logo: any;
  };
  schedule: {
    date: number;
  };
};

const UpcomingCard = ({ teamA, teamB, schedule }: Props) => {
  return (
    <ImageBackground
      style={{ margin: 10 }}
      imageStyle={{ borderRadius: 28 }}
      source={card_BG[`card${random(1, 8)}`]}>
      <View style={S.view}>
        <HStack space={12} alignItems="center">
          <VStack alignItems="center">
            <Image source={teamA.logo} alt="" style={S.image} />
            <Text color="white">{teamA.name}</Text>
          </VStack>
          <VStack alignItems="center">
            <Text style={S.date}>
              {moment(schedule.date).format('DD - MM')}
            </Text>
            <Text fontSize={20} color="white" fontWeight="bold">
              {moment(schedule.date).format('h : mm A')}
            </Text>
          </VStack>
          <VStack alignItems="center">
            <Image source={teamB.logo} alt="" style={S.image} />
            <Text color="white">{teamB.name}</Text>
          </VStack>
        </HStack>
      </View>
    </ImageBackground>
  );
};

export default UpcomingCard;
