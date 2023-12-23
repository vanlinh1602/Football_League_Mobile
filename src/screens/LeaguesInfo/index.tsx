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
import UpcomingMatchCard from '../../features/search/components/UpcomingMatchCard';
import { leagueLogos } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'LeaguesInfo'>;

const LeaguesInfo = ({ navigation }: Props) => {
  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <View marginX={16} padding={7}>
            <Image
              source={leagueLogos.AFC}
              height={200}
              alt="kuma"
              borderBottomRadius={20}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
          <HStack justifyContent="space-between">
            <View>
              <Text style={S.playerName}>AFC Champions </Text>
            </View>
            <AntDesign style={S.iconHeart} name="book" />
          </HStack>
          <TouchableOpacity>
            <HStack margin={5}>
              <Image
                source={leagueLogos.AFC}
                height={50}
                width={50}
                alt="kuma"
              />
              <Text style={S.teamName}>All Teams</Text>
              <AntDesign style={S.iconRight} name="right" />
            </HStack>
          </TouchableOpacity>
          <Divider style={S.divider} />
          <View ml={6} mt={15}>
            <HStack>
              <Text fontSize={17} fontWeight={'bold'}>
                Upcomming Date:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                18/9/2023 - 18/5/2024
              </Text>
            </HStack>
            <HStack mt={3}>
              <Text fontSize={17} fontWeight={'bold'}>
                Place:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                Asia
              </Text>
            </HStack>
          </View>
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
            <Text style={S.playerInfo}>Upcoming Match</Text>
          </HStack>
          <UpcomingMatchCard />
          <UpcomingMatchCard />
          <Divider style={S.divider2} />
          <HStack marginBottom={2} marginTop={1}>
            <Text style={S.playerInfo}>Comment</Text>
            <AntDesign style={S.iconComment} name="edit" onPress={()=>navigation.navigate('CommentInput')}/>
          </HStack>
          <ListComments />
        </VStack>
      </ScrollView>
    </View>
  );
};
export default LeaguesInfo;
