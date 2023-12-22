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

import { leagueLogos } from '../../lib/assets';
import { logos } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';
type Props = HomeStackScreenProps<'LeaguesInfo'>;

const LeaguesInfo = ({ navigation }: Props) => {
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
        </VStack>
      </ScrollView>
    </View>
  );
};
export default LeaguesInfo;
