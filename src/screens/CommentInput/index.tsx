import {
  Image,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { playersPicture } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'PlayerInfo'>;

const PlayerInfo = ({ navigation }: Props) => {
  const [comment, setComment] = useState('');

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

          <Text style={S.playerName}>Write Comment</Text>

          <View style={S.commentBox}>
            <Input
              size="sm"
              placeholder="Comment Input"
              onChangeText={(comment) => setComment(comment)}
            />
          </View>

          <TouchableOpacity style={S.chooseTeamContainer}>
            <Text>Save</Text>
          </TouchableOpacity>
        </VStack>
      </ScrollView>
    </View>
  );
};
export default PlayerInfo;
