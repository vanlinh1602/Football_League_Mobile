import { HStack, Image, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StatisticCard from '../../../features/Statistic/components/StatisticCard/StatisticTable';
import { leagueLogos, logos, teamPicture } from '../../../lib/assets';
import { AntDesign, Fontisto } from '../../../lib/icons';
import { HomeStackScreenProps } from '../../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'TeamStatictics'>;

const TeamStatictics = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <VStack>
        <ImageBackground style={S.imageBackground} source={teamPicture.MU}>
          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </VStack>
      <HStack style={S.teamNameContainer}>
        <Text style={S.teamName} color="#003E88">
          Manchester United
        </Text>
        <Image source={logos.Manchester_City} alt="logo" style={S.teamLogo} />
        <TouchableOpacity style={S.favoriteButton}>
          <Fontisto name="favorite" size={30} color="black" />
        </TouchableOpacity>
      </HStack>
      <HStack style={S.leagueTeamPlaying}>
        <Image source={leagueLogos.UEFA} alt="logo" style={S.leagueLogo} />
        <Text style={S.leagueName}>EPL</Text>
      </HStack>
      <View style={S.underline}></View>
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
      <View>
        <HStack>
          <Text style={S.comparisonTitle}>Comparison</Text>
          <TouchableOpacity style={S.chooseTeamContainer}>
            <Text>Choose team</Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </ScrollView>
  );
};

export default TeamStatictics;
