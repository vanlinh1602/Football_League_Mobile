import {
  Divider,
  HStack,
  Image,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { leagueLogos } from '../../lib/assets';
import { logos } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';
import YoutubePlayer from '../../features/YoutubeIframe';
import ListComments from '../../features/search/components/ListComments';

type Props = HomeStackScreenProps<'TodayMatch'>;

const TodayMatch = ({ navigation }: Props) => {
  const [, setComment] = useState('');

  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <HStack>
            <TouchableOpacity
              style={S.goBack}
              onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
            <View>
              <Text style={S.playerName}>Today Match </Text>
            </View>
          </HStack>
          <TouchableOpacity>
            <HStack margin={5}>
              <Image
                source={leagueLogos.AFC}
                height={50}
                width={50}
                alt="kuma"
              />
              <Text style={S.teamName}>AFC league</Text>
              <AntDesign style={S.iconRight} name="right" />
            </HStack>
          </TouchableOpacity>
          <Divider style={S.divider} />
          <View ml={6} mt={15}>
            <HStack>
              <Text fontSize={17} fontWeight={'bold'}>
                Date:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                18/9/2023
              </Text>
            </HStack>
            <HStack mt={3}>
              <Text fontSize={17} fontWeight={'bold'}>
                Time:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                9 : 30
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
          <Text style={S.playerInfo1}>Live Match</Text>
                    <YoutubePlayer videoId='5BeOh1XHAVI'/>
          <Divider style={S.divider2} />

          <Text style={S.playerInfo}>Score</Text>

          <HStack>
            <VStack>
              <TouchableOpacity style={S.teamImg}>
                <Image
                  source={logos.Manchester_United}
                  height={50}
                  width={50}
                  alt="kuma"
                />
              </TouchableOpacity>
              <Text style={S.teamName2}>Manchester United</Text>
            </VStack>

            <VStack>
              <Text style={S.score}>0:1</Text>
            </VStack>

            <VStack>
              <TouchableOpacity style={S.teamImg}>
                <Image
                  source={logos.Chelsea}
                  height={50}
                  width={50}
                  alt="kuma"
                />
              </TouchableOpacity>
              <Text style={S.teamName3}>Chelsea</Text>
            </VStack>

          </HStack>

          <HStack marginBottom={2} marginTop={5}>
            <Text style={S.playerInfo}>Comment</Text>
          </HStack>
          <HStack>
            <View style={S.commentBox}>
              <Input
                size="sm"
                placeholder="Comment Input"
                onChangeText={(comment) => setComment(comment)}
                rounded={15}
              />
            </View>
            <AntDesign style={S.iconComment} name="edit" />
          </HStack>
          <ListComments />
        </VStack>
      </ScrollView>
    </View>
  );
};
export default TodayMatch;
