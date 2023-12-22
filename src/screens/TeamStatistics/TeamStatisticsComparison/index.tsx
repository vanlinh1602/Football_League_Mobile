import { HStack, Image, ScrollView, Text, View, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import StatisticComparisonTable from '../../../features/Statistic/components/StatisticCard/StatisticComparisonTable';
// import StatisticCard from '../../../features/Statistic/components/StatisticCard/StatisticTable';
import { logos, teamPicture } from '../../../lib/assets';
import { AntDesign } from '../../../lib/icons';
import { HomeStackScreenProps } from '../../../Navigation/type';
import S from './styles';

type Props = HomeStackScreenProps<'TeamStaticticsComparison'>;

const TeamStaticticsComparison = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <VStack>
        <ImageBackground
          style={S.imageBackground}
          source={teamPicture.MU}
          resizeMode="cover">
          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        </ImageBackground>
      </VStack>
      <View>
        <HStack>
          <Text style={S.comparisonTitle}>Comparison</Text>
          <TouchableOpacity style={S.chooseTeamContainer}>
            <Text>Choose team</Text>
          </TouchableOpacity>
        </HStack>
      </View>
      <HStack style={S.teamComparing}>
        <Image source={logos.Chelsea} alt="logo" style={S.teamComparisonLogo} />
        <Text style={S.teamComparisonName}>Chelsea</Text>
      </HStack>
      <View style={S.underline}></View>
      <View>
        <Text style={S.statisticTitle}>Statistic</Text>
        <HStack style={S.logosLine} space={237}>
          <Image
            style={S.twoTeamLogos}
            source={logos.Manchester_United}
            alt="logo"
          />
          <Image style={S.twoTeamLogos} source={logos.Chelsea} alt="logo" />
        </HStack>
        <StatisticComparisonTable
          shotsTeam1={2}
          goalsTeam1={24}
          errorsTeam1={24}
          yelloCardTeam1={24}
          redCardTeam1={24}
          offSideTeam1={24}
          cornerKickTeam1={24}
          shotsTeam2={4}
          goalsTeam2={24}
          errorsTeam2={24}
          yelloCardTeam2={24}
          redCardTeam2={24}
          offSideTeam2={24}
          cornerKickTeam2={24}
        />
      </View>
    </ScrollView>
  );
};

export default TeamStaticticsComparison;
