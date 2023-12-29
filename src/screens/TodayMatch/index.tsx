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
import YoutubePlayer from '../../features/YoutubeIframe';
import { getVideoIdFromYoutubeUrl } from '../../lib/common';
import { AntDesign, Ionicons } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { actions } from '../../redux/reducers/comments';
import { actions as userActions } from '../../redux/reducers/user';
import { selectMatch } from '../../redux/selectors/matches';
import { selectTeam } from '../../redux/selectors/teams';
import { selectUser } from '../../redux/selectors/user';
import { Comment } from '../../redux/types/comments';
import { RootState } from '../../redux/types/RootState';
import { Notification } from '../../redux/types/users';
import { cancelNotification, createNotification } from '../../services/notify';
import S from './styles';

type Props = HomeStackScreenProps<'TodayMatch'>;

const TodayMatch = ({ navigation, route }: Props) => {
  const { matchId } = route.params;
  const [comment, setComment] = useState('');
  const user = useSelector(selectUser);
  const match = useSelector((state: RootState) => selectMatch(state, matchId));
  const dispatch = useDispatch();
  const { notification } = user ?? {};
  const isNotify = !!notification?.find((item) => item.data.id === match!.id);

  const teamA = useSelector((state: RootState) =>
    selectTeam(state, match!.teamA),
  );
  const teamB = useSelector((state: RootState) =>
    selectTeam(state, match!.teamB),
  );

  const handleAddComment = () => {
    if (!comment) return;
    const commentAdd: Comment = {
      content: comment,
      user: user?.name ?? '',
      avatar: user?.photoURL ?? '',
      path: `match/${match!.id}`,
    };

    dispatch(actions.addComment(commentAdd));
  };

  const handleNotification = async () => {
    if (isNotify) {
      const notify = notification?.find((item) => item.data.id === match!.id);
      await cancelNotification(notify?.id ?? '');
      dispatch(
        userActions.updateUserData({
          path: 'notification',
          data: notification?.filter((item) => item.data.id !== match!.id),
        }),
      );
      Alert.alert('Cancel notification success');
    } else {
      const body = `Match will start at ${moment(match!.date).format(
        'HH:mm - DD/MM/YYYY',
      )}`;
      const title = `${teamA?.name} vs ${teamB?.name}`;
      const time = match!.date;

      const notyfiId = await createNotification(title, body, time);

      const notify: Notification = {
        id: notyfiId,
        data: {
          id: match!.id,
          type: 'match',
        },
        time,
        title,
        body,
      };

      dispatch(
        userActions.updateUserData({
          path: 'notification',
          data: [...(notification ?? []), notify],
        }),
      );
      Alert.alert('Create notification success');
    }
  };

  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <HStack alignItems="center" justifyContent="space-between" m={3}>
            <TouchableOpacity
              style={S.goBack}
              onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
            <Text style={S.playerName}>View Match </Text>
            <TouchableOpacity onPress={handleNotification}>
              <Ionicons
                style={{
                  fontSize: 24,
                  color: isNotify ? '#fe4040' : '#434c5e',
                }}
                name="notifications-outline"
              />
            </TouchableOpacity>
          </HStack>
          {match!.video ? (
            <YoutubePlayer
              videoId={getVideoIdFromYoutubeUrl(match!.video ?? '')}
            />
          ) : (
            <View height={300} justifyContent="center">
              <Text textAlign="center" fontSize={20} fontStyle="italic">
                No video available for this match
              </Text>
            </View>
          )}
          <Divider style={S.divider2} />

          <Text textAlign="center" fontSize={18} fontStyle="italic">
            {moment(match!.date).format('HH:mm - DD/MM/YYYY')}
          </Text>
          <Text textAlign="center" fontSize={20}>
            {match!.place}
          </Text>
          <HStack alignItems="center">
            <VStack style={{ width: '40%' }}>
              <TouchableOpacity style={S.teamImg}>
                <Image
                  source={{ uri: teamA?.logo }}
                  height={50}
                  width={50}
                  alt="kuma"
                />
              </TouchableOpacity>
              <Text textAlign="center" mt={3}>
                {teamA?.name}
              </Text>
            </VStack>
            <VStack
              style={{ width: '20%', height: '100%', alignItems: 'center' }}>
              <Text
                textAlign="center"
                fontSize={30}
                fontWeight="bold"
                style={{ marginTop: '30%' }}>
                {match!.mathResult?.teamA || 0} -{' '}
                {match!.mathResult?.teamB || 0}
              </Text>
            </VStack>
            <VStack style={{ width: '40%' }}>
              <TouchableOpacity style={S.teamImg}>
                <Image
                  source={{ uri: teamB?.logo }}
                  height={50}
                  width={50}
                  alt="kuma"
                />
              </TouchableOpacity>
              <Text textAlign="center" mt={3}>
                {teamB?.name}
              </Text>
            </VStack>
          </HStack>

          <HStack marginBottom={2} marginTop={5}>
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
          <ListComments path={`match/${match!.id}`} />
        </VStack>
      </ScrollView>
    </View>
  );
};
export default TodayMatch;
