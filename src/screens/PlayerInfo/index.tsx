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

import ListComments from '../../features/search/components/ListComments';
import PlayerInfoCard from '../../features/search/components/PlayerInfoCard';
import { logos } from '../../lib/assets';
import { playersPicture } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'PlayerInfo'>;

const PlayerInfo = ({ navigation }: Props) => {
  const [, setComment] = useState('');

  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <Image
            source={playersPicture.e_haaland}
            height={250}
            alt="kuma"
            borderBottomRadius={20}
          />

          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>

          <HStack justifyContent="space-between">
            <View>
              <Text style={S.playerName}>Erling Haaland</Text>
            </View>
            <AntDesign style={S.iconHeart} name="book" />
          </HStack>
          <HStack marginTop={3}>
            <PlayerInfoCard name="BirthDay" score={'10-3'} />
            <PlayerInfoCard name="Number" score={'15'} />
            <PlayerInfoCard name="Role" score={'GK'} />
          </HStack>
          <TouchableOpacity onPress={() => navigation.navigate('TeamInfo')}>
            <HStack margin={5}>
              <Image
                source={logos.Manchester_United}
                height={50}
                width={50}
                alt="kuma"
              />
              <Text style={S.teamName}>Manchester United</Text>
              <AntDesign style={S.iconRight} name="right" />
            </HStack>
          </TouchableOpacity>
          <Divider style={S.divider} />
          <Text style={S.playerInfo}>Infomation</Text>
          <View style={S.infoPara}>
            <Text style={S.infoText}>
              Erling Braut Haaland là một cầu thủ bóng đá chuyên nghiệp người Na
              Uy thi đấu ở vị trí tiền đạo cắm cho câu lạc bộ Premier League
              Manchester City và Đội tuyển bóng đá quốc gia Na Uy.
            </Text>
          </View>
          <Divider style={S.divider2} />
          <HStack marginBottom={2} marginTop={1}>
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
export default PlayerInfo;
