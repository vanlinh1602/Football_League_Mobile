import moment from 'moment';
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
import { useSelector } from 'react-redux';

import ListComments from '../../features/search/components/ListComments';
import PlayerInfoCard from '../../features/search/components/PlayerInfoCard';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { selectPlayer } from '../../redux/selectors/players';
import { selectTeam } from '../../redux/selectors/teams';
import { RootState } from '../../redux/types/RootState';
import S from './styles';

type Props = HomeStackScreenProps<'PlayerInfo'>;

const PlayerInfo = ({ navigation, route }: Props) => {
  const playerId = route.params.id;
  const playerInfo = useSelector((state: RootState) =>
    selectPlayer(state, playerId),
  );
  const team = useSelector((state: RootState) =>
    selectTeam(state, playerInfo.team),
  );
  const [, setComment] = useState('');

  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <Image
            source={{ uri: playerInfo.avatar }}
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
              <Text style={S.playerName}>{playerInfo.name}</Text>
            </View>
            <AntDesign style={S.iconHeart} name="book" />
          </HStack>
          <HStack marginTop={3}>
            <PlayerInfoCard
              name="BirthDay"
              score={
                playerInfo.birthday
                  ? moment(playerInfo.birthday).format('D/M')
                  : ''
              }
            />
            <PlayerInfoCard
              name="Number"
              score={playerInfo.number?.toString() ?? '12'}
            />
            <PlayerInfoCard name="Role" score={playerInfo.role ?? ''} />
          </HStack>
          <TouchableOpacity
            onPress={() => navigation.navigate('TeamInfo', { id: '' })}>
            <HStack margin={5}>
              <Image
                source={{ uri: team?.logo }}
                height={50}
                width={50}
                alt="kuma"
              />
              <Text style={S.teamName}>{team?.name}</Text>
              <AntDesign style={S.iconRight} name="right" />
            </HStack>
          </TouchableOpacity>
          <Divider style={S.divider} />
          <Text style={S.playerInfo}>Infomation</Text>
          <View style={S.infoPara}>
            <Text style={S.infoText}>{playerInfo.description}</Text>
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
