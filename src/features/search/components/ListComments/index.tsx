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
          <VStack marginTop={-1}>
            <HStack>
              <Image source={comment.ava} style={S.ava} />

              <View style={S.commentContainer}>
                <Text style={S.username}>{comment.userName}</Text>
                <Text style={S.commentText}>{comment.comment}</Text>
              </View>
            </HStack>
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
