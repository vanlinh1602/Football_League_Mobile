import { HStack, Text, View, VStack } from 'native-base';
import React from 'react';
import { Image } from 'react-native';

import { AntDesign } from '../../../../lib/icons';
import { comments } from '../../../../lib/options';
import S from './styles';

const ListComments = () => {
  return (
    <View marginBottom={2}>
      {comments.map((comment, index) => (
        <View key={index} style={S.container}>
          <VStack marginTop={-4}>
            <HStack>
              <Image source={comment.ava} style={S.ava} />
              <Text style={S.username}>{comment.userName}</Text>
            </HStack>
            <View style={S.commentContainer}>
              <Text style={S.commentText}>{comment.comment}</Text>
            </View>
            <HStack>
            <AntDesign style={S.iconheart} name="heart" />
            <AntDesign style={S.iconheart2} name="edit" />
            </HStack>

          </VStack>
        </View>
      ))}
    </View>
  );
};

export default ListComments;
