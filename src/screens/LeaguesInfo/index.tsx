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
import UpcomingMatchCard from '../../features/search/components/UpcomingMatchCard';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { actions } from '../../redux/reducers/comments';
import { selectLeague } from '../../redux/selectors/leagues';
import { selectUpcomingMatch } from '../../redux/selectors/matches';
import { selectUser } from '../../redux/selectors/user';
import { Comment } from '../../redux/types/comments';
import { RootState } from '../../redux/types/RootState';
import S from './styles';

type Props = HomeStackScreenProps<'LeaguesInfo'>;

const LeaguesInfo = ({ navigation, route }: Props) => {
  const leagueId = route.params.id;
  const league = useSelector((state: RootState) =>
    selectLeague(state, leagueId),
  );
  const upcomingMatch = useSelector((state: RootState) =>
    selectUpcomingMatch(state, leagueId),
  );
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (!comment) return;
    const commentAdd: Comment = {
      content: comment,
      user: user?.name ?? '',
      avatar: user?.photoURL ?? '',
      path: `league/${leagueId}`,
    };

    dispatch(actions.addComment(commentAdd));
  };

  return (
    <View style={S.background}>
      <ScrollView>
        <VStack>
          <View marginX={16} padding={7}>
            <Image
              source={{ uri: league?.image || '' }}
              height={200}
              alt="kuma"
              borderBottomRadius={20}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={S.goBack}
            onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
          <HStack justifyContent="space-between">
            <View>
              <Text style={S.playerName}>{league?.name} </Text>
            </View>
            <AntDesign style={S.iconHeart} name="book" />
          </HStack>
          <TouchableOpacity>
            <HStack margin={5}>
              <Image
                source={{ uri: league?.image || '' }}
                height={50}
                width={50}
                alt="kuma"
              />
              <Text style={S.teamName}>All Teams</Text>
              <AntDesign style={S.iconRight} name="right" />
            </HStack>
          </TouchableOpacity>
          <Divider style={S.divider} />
          <View ml={6} mt={15}>
            <HStack>
              <Text fontSize={17} fontWeight={'bold'}>
                Upcomming Date:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                {moment(league?.start).format('DD/MM/YYYY')}
              </Text>
            </HStack>
            <HStack mt={3}>
              <Text fontSize={17} fontWeight={'bold'}>
                End Date:
              </Text>
              <Text ml={3} fontSize={17} fontWeight={'medium'}>
                {moment(league?.end).format('DD/MM/YYYY')}
              </Text>
            </HStack>
          </View>
          <Text style={S.playerInfo}>Infomation</Text>
          <View style={S.infoPara}>
            <Text style={S.infoText}>{league?.description}</Text>
          </View>
          <Divider style={S.divider2} />
          <HStack marginBottom={2} marginTop={1}>
            <Text style={S.playerInfo}>Upcoming Match</Text>
          </HStack>
          {(upcomingMatch ?? []).map((match) => (
            <UpcomingMatchCard
              key={match.id}
              match={match}
              onPress={() => navigation.navigate('TodayMatch', { match })}
            />
          ))}
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
          <ListComments path={`league/${leagueId}`} />
        </VStack>
      </ScrollView>
    </View>
  );
};
export default LeaguesInfo;
