import _ from 'lodash';
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
import { Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ListComments from '../../features/search/components/ListComments';
import PlayerInfoCard from '../../features/search/components/PlayerInfoCard';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { actions } from '../../redux/reducers/comments';
import { actions as userActions } from '../../redux/reducers/user';
import { selectPlayersOfTeams } from '../../redux/selectors/players';
import { selectTeam } from '../../redux/selectors/teams';
import { selectUser, selectUserFavorite } from '../../redux/selectors/user';
import { Comment } from '../../redux/types/comments';
import { RootState } from '../../redux/types/RootState';
import S from './styles';

type Props = HomeStackScreenProps<'TeamInfo'>;

const TeamInfo = ({ navigation, route }: Props) => {
  const teamId = route.params.id;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const teamInfo = useSelector((state: RootState) => selectTeam(state, teamId));
  const players = useSelector((state: RootState) =>
    selectPlayersOfTeams(state, teamId),
  );
  const teamFavorite = useSelector((state: RootState) =>
    selectUserFavorite(state, 'team'),
  );
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (!comment) return;
    const commentAdd: Comment = {
      content: comment,
      user: user?.name ?? '',
      avatar: user?.photoURL ?? '',
      path: `team/${teamId}`,
    };
    dispatch(actions.addComment(commentAdd));
  };

  const handleSaveTeam = () => {
    if (!user?.uid) return Alert.alert('Please login to use this feature');
    if (teamFavorite?.includes(teamId)) {
      dispatch(
        userActions.updateUserData({
          path: 'favorite.team',
          data: teamFavorite?.filter((item) => item !== teamId),
        }),
      );
    } else {
      {
        dispatch(
          userActions.updateUserData({
            path: 'favorite.team',
            data: [teamId, ...(teamFavorite ?? [])],
          }),
        );
      }
    }
  };

  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <Image
            source={{ uri: teamInfo?.background || '' }}
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
              <Text style={S.playerName}>{teamInfo?.name}</Text>
            </View>
            <TouchableOpacity onPress={handleSaveTeam}>
              <AntDesign
                style={[
                  S.iconHeart,
                  teamFavorite.includes(teamId) ? { color: '#fe4040' } : {},
                ]}
                name="book"
              />
            </TouchableOpacity>
          </HStack>
          <HStack marginTop={3}>
            <PlayerInfoCard
              name="Year"
              score={
                teamInfo?.founding
                  ? (
                      moment().year() - moment(teamInfo.founding).year()
                    ).toString()
                  : ''
              }
            />
            <PlayerInfoCard name="Players" score={_.size(players).toString()} />
            <PlayerInfoCard name="Country" score={teamInfo?.country ?? ''} />
          </HStack>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SearchPlayer', { team: teamId })
            }>
            <HStack margin={5}>
              <Image
                source={{ uri: teamInfo?.logo || '' }}
                height={50}
                width={50}
                alt="kuma"
              />
              <Text style={S.teamName}>All Players</Text>
              <AntDesign style={S.iconRight} name="right" />
            </HStack>
          </TouchableOpacity>
          <View ml={6} mt={-2}>
            <HStack>
              <Text fontSize={17} fontWeight={'bold'}>
                Coach:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                {teamInfo?.coach}
              </Text>
            </HStack>
            <HStack mt={2} mb={2}>
              <Text fontSize={17} fontWeight={'bold'}>
                Captain:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                {teamInfo?.captain}
              </Text>
            </HStack>
          </View>
          <Divider style={S.divider} />
          <Text style={S.playerInfo}>Infomation</Text>
          <View style={S.infoPara}>
            <Text style={S.infoText}>{teamInfo?.description}</Text>
          </View>
          <Divider style={S.divider2} />
          <HStack marginBottom={2} marginTop={1}>
            <Text style={S.playerInfo}>Comment</Text>
          </HStack>
          {user?.uid ? (
            <HStack>
              <View style={S.commentBox}>
                <Input
                  size="sm"
                  placeholder="Comment Input"
                  onChangeText={(comment) => setComment(comment)}
                  rounded={15}
                />
              </View>
              <TouchableOpacity onPress={handleAddComment}>
                <AntDesign style={S.iconComment} name="edit" />
              </TouchableOpacity>
            </HStack>
          ) : null}
          <ListComments path={`team/${teamId}`} />
        </VStack>
      </ScrollView>
    </View>
  );
};
export default TeamInfo;
