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
import { useDispatch, useSelector } from 'react-redux';

import ListComments from '../../features/search/components/ListComments';
import YoutubePlayer from '../../features/YoutubeIframe';
import { getVideoIdFromYoutubeUrl } from '../../lib/common';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { actions } from '../../redux/reducers/comments';
import { selectTeam } from '../../redux/selectors/teams';
import { selectUser } from '../../redux/selectors/user';
import { Comment } from '../../redux/types/comments';
import { RootState } from '../../redux/types/RootState';
import S from './styles';

type Props = HomeStackScreenProps<'TodayMatch'>;

const TodayMatch = ({ navigation, route }: Props) => {
  const { match } = route.params;
  const [comment, setComment] = useState('');
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const teamA = useSelector((state: RootState) =>
    selectTeam(state, match.teamA),
  );
  const teamB = useSelector((state: RootState) =>
    selectTeam(state, match.teamB),
  );

  const handleAddComment = () => {
    if (!comment) return;
    const commentAdd: Comment = {
      content: comment,
      user: user?.name ?? '',
      avatar: user?.photoURL ?? '',
      path: `match/${match.id}`,
    };

    dispatch(actions.addComment(commentAdd));
  };

  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <HStack>
            <TouchableOpacity
              style={S.goBack}
              onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="black" />
            </TouchableOpacity>
            <View>
              <Text style={S.playerName}>View Match </Text>
            </View>
          </HStack>
          {match.video ? (
            <YoutubePlayer
              videoId={getVideoIdFromYoutubeUrl(match.video ?? '')}
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
            {moment(match.date).format('HH:mm - DD/MM/YYYY')}
          </Text>
          <Text textAlign="center" fontSize={20}>
            {match.place}
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
                {match.mathResult?.teamA || 0} - {match.mathResult?.teamB || 0}
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
          <ListComments path={`match/${match.id}`} />
        </VStack>
      </ScrollView>
    </View>
  );
};
export default TodayMatch;
