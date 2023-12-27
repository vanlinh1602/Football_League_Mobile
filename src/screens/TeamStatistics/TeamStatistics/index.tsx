import {
  CheckIcon,
  HStack,
  Image,
  Input,
  ScrollView,
  Select,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import ListComments from '../../../features/search/components/ListComments';
import StatisticCard from '../../../features/Statistic/components/StatisticCard/StatisticTable';
import { teamPicture } from '../../../lib/assets';
import { AntDesign, Fontisto } from '../../../lib/icons';
import { HomeStackScreenProps } from '../../../Navigation/type';
import { selectTeam } from '../../../redux/selectors/teams';
import { RootState } from '../../../redux/types/RootState';
import S from './styles';

type Props = HomeStackScreenProps<'TeamStatictics'>;

const TeamStatictics = ({ navigation, route }: Props) => {
  const { data, team } = route.params;
  const teamData = useSelector((state: RootState) => selectTeam(state, team));
  const [leagues, setleagues] = useState('abc');
  const [, setComment] = useState('');

  return (
    <View>
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
            {teamData?.name}
          </Text>
          <Image
            source={{ uri: teamData?.logo || '' }}
            alt="logo"
            style={S.teamLogo}
          />
          <TouchableOpacity style={S.favoriteButton}>
            <Fontisto name="favorite" size={30} color="black" />
          </TouchableOpacity>
        </HStack>
        <HStack style={S.leagueTeamPlaying}>
          <Select
            selectedValue={leagues}
            minWidth="200"
            accessibilityLabel={leagues}
            placeholder="Choose Leagues"
            _selectedItem={{
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setleagues(itemValue)}>
            <Select.Item label="EPL" value="1" />
            <Select.Item label="AFC" value="2" />
            <Select.Item label="UEFA" value="3" />
          </Select>

          <TouchableOpacity
            style={S.chooseTeamContainer}
            onPress={() =>
              navigation.navigate('TeamStaticticsComparison', {
                teamA: team,
                changeTeam: true,
              })
            }>
            <Text>Comparision</Text>
          </TouchableOpacity>
        </HStack>

        <View style={S.underline}></View>
        <View>
          <StatisticCard
            shots={data.shots}
            goals={data.goals}
            errors={data.errors}
            yelloCard={data.yellowCard}
            redCard={data.redCard}
            offSide={data.offSide}
            cornerKick={data.cornerKick}
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
    </View>
  );
};

export default TeamStatictics;
