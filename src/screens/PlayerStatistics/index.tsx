import { HStack, Image, Input, ScrollView, Text, View, VStack } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ListComments from '../../features/search/components/ListComments';
import StatisticCard from '../../features/Statistic/components/StatisticCard/StatisticTable';
import { playersPicture } from '../../lib/assets';
import { logos } from '../../lib/assets';
import { AntDesign, Fontisto } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'PlayerStatictics'>;

const PlayerStatictics = ({ navigation }: Props) => {
  const [, setComment] = useState('');

  return (
    <ScrollView>
      <VStack>
        <ImageBackground
          style={S.imageBackground}
          source={playersPicture.e_haaland}
          resizeMode="cover">
          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </VStack>
      <View style={S.playerNameContainer}>
        <HStack>
          <Text style={S.playerName} color="#003E88">
            Erling Haaland
          </Text>
          <Image source={logos.Manchester_City} alt="logo" style={S.teamLogo} />
          <TouchableOpacity style={S.favoriteButton}>
            <Fontisto name="favorite" size={30} color="black" />
          </TouchableOpacity>
        </HStack>
      </View>
      <View>
        <StatisticCard
          shots={24}
          goals={24}
          errors={24}
          yelloCard={24}
          redCard={24}
          offSide={24}
          cornerKick={24}
        />
      </View>
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
    </ScrollView>
  );
};

export default PlayerStatictics;
