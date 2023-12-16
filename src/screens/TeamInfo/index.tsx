import {
  Divider,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import ListComments from '../../features/search/components/ListComments';
import PlayerInfoCard from '../../features/search/components/PlayerInfoCard';
import { logos } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'TeamInfo'>;

const TeamInfo = ({ navigation }: Props) => {
  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <Image
            source={logos.Manchester_United}
            height={250}
            alt="kuma"
            borderBottomRadius={20}
          />
          <View style={S.backButton}>
            <TouchableOpacity onPress={() => navigation.navigate('PlayerInfo')}>
              <AntDesign name="left" size={30} />
            </TouchableOpacity>
          </View>
          <HStack justifyContent="space-between">
            <View>
              <Text style={S.playerName}>Manchester United</Text>
            </View>
            <AntDesign style={S.iconHeart} name="book" />
          </HStack>
          <HStack marginTop={3}>
            <PlayerInfoCard name="Year" score={'33'} />
            <PlayerInfoCard name="Players" score={'45'} />
            <PlayerInfoCard name="Country" score={'Eng'} />
          </HStack>
          <TouchableOpacity>
            <HStack margin={5}>
              <Image
                source={logos.Manchester_United}
                height={50}
                width={50}
                alt="kuma"
              />
              <Text style={S.teamName}>All Players</Text>
              <AntDesign style={S.iconRight} name="right" />
            </HStack>
          </TouchableOpacity>
          <Divider style={S.divider} />
          <Text style={S.playerInfo}>Infomation</Text>
          <View style={S.infoPara}>
            <Text style={S.infoText}>
              Manchester United Football Club is an English professional
              football club, based in Old Trafford, Greater Manchester, that
              plays in the Premier League.
            </Text>
          </View>
          <Divider style={S.divider2} />
          <HStack marginBottom={2} marginTop={1}>
            <Text style={S.playerInfo}>Comment</Text>
            <AntDesign style={S.iconComment} name="edit" />
          </HStack>
          <ListComments />
        </VStack>
      </ScrollView>
    </View>
  );
};
export default TeamInfo;
