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

import PlayerInfoCard from '../../features/search/components/PlayerInfoCard';
import ListComments from '../../features/search/components/userComment';
import { logos } from '../../lib/assets';
import { playersPicture } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import S from './styles';

const PlayerInfo = () => {
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
          <View style={S.backButton}>
          <TouchableOpacity>
              <AntDesign name='left' size={30}/>
          </TouchableOpacity>
          </View>
          <HStack justifyContent="space-between">
            <View>
              <Text style={S.playerName}>Erling Haaland</Text>
            </View>
            <AntDesign style={S.iconHeart} name="book" />
          </HStack>
          <HStack marginTop={3}>
            <PlayerInfoCard name="Age" score={33} />
            <PlayerInfoCard name="Games" score={15} />
            <PlayerInfoCard name="Goals" score={10} />
          </HStack>
          <HStack margin={5}>
            <Image
              source={logos.Manchester_United}
              height={50}
              width={50}
              alt="kuma"
            />
            <Text style={S.teamName}>Manchester United</Text>
            <AntDesign style={S.iconRight} name="right" />
            <AntDesign style={S.iconSetting} name="edit" />
          </HStack>
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
          <HStack marginBottom={2}>
          <Text style={S.playerInfo}>Comment</Text>
          <AntDesign style={S.iconComment} name="edit" />
          </HStack>
          <ListComments/>
        </VStack>
      </ScrollView>
    </View>
  );
};
export default PlayerInfo;
