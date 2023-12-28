import { HStack, Text, View, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../../../redux/reducers/comments';
import { selectComment } from '../../../../redux/selectors/comments';
import { RootState } from '../../../../redux/types/RootState';
import S from './styles';

type Props = {
  path: string;
};

const ListComments = ({ path }: Props) => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) =>
    selectComment(state, path),
  );

  useEffect(() => {
    if (!comments) {
      dispatch(actions.getComments(path));
    }
  }, [comments, dispatch, path]);

  return (
    <View marginBottom={2}>
      {(comments ?? []).map((comment, index) => (
        <View key={index} style={S.container}>
          <VStack marginTop={-1}>
            <HStack>
              <Image source={{ uri: comment.avatar }} style={S.ava} />
              <View style={S.commentContainer}>
                <Text style={S.username}>{comment.user}</Text>
                <Text style={S.commentText}>{comment.content}</Text>
              </View>
            </HStack>
          </VStack>
        </View>
      ))}
    </View>
  );
};

export default ListComments;
