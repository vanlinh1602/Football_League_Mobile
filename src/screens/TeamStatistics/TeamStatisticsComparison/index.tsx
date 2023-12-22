import {
  CheckIcon,
  HStack,
  Image,
  ScrollView,
  Select,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
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
  const [teams, setTeams] = useState('');
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
        <Text style={S.comparisonTitle}>Comparison</Text>
      </View>
      <Text marginLeft={10} marginTop={2} fontSize={16}>
        Choose team to compare:
      </Text>
      <HStack style={S.teamComparing}>
        <Select
          selectedValue={teams}
          minWidth="200"
          accessibilityLabel={teams}
          placeholder="Choose Team"
          _selectedItem={{
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setTeams(itemValue)}>
          <Select.Item label="Manchester United" value="1" />
          <Select.Item label="Chelsea" value="2" />
          <Select.Item label="Barcelona" value="3" />
        </Select>
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
