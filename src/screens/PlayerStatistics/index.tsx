import { HStack, Image, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StatisticCard from '../../features/Statistic/components/StatisticCard/StatisticTable';
import { playersPicture } from '../../lib/assets';
import { logos } from '../../lib/assets';
import { AntDesign, Fontisto } from '../../lib/icons';
import S from './styles';
const PlayerStatictics = ({ navigation }) => {
  return (
    <ScrollView>
      <VStack>
        <ImageBackground
          style={S.imageBackground}
          source={playersPicture.e_haaland}>
          <TouchableOpacity style={S.goBack}>
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
    </ScrollView>
  );
};

export default PlayerStatictics;
