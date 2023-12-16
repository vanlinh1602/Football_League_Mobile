import moment from 'moment';
import { Divider, HStack, Text, View } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { logos } from '../../../../lib/assets';
import { theme } from '../../../../lib/theme';
import S from './styles';

const UpcomingMatchCard = () => {
  return (
<View style={S.container}>
            <HStack padding={3} alignItems="center">
              <View style={{ width: '60%' }}>
                <HStack alignItems="center" justifyContent="space-between">
                  <HStack alignItems="center">
                    <Image source={logos.Liverpool} alt="" style={S.logo} />
                    <Text fontWeight="bold">Liverpool</Text>
                  </HStack>
                  <Text fontWeight="bold">1</Text>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between">
                  <HStack alignItems="center">
                    <Image source={logos.FC_Barcelona} alt="" style={S.logo} />
                    <Text fontWeight="bold">Barcelona</Text>
                  </HStack>
                  <Text fontWeight="bold">0</Text>
                </HStack>
              </View>
              <Divider
                bg={theme.purple}
                thickness="3"
                mx="2"
                orientation="vertical"
              />
              <View style={{ width: '30%' }}>
                <Text color={theme.purple} fontWeight="bold" fontSize={16}>
                  {moment().format('HH : mm')}
                </Text>
                <Text fontWeight="bold">
                  {moment().format('DD MMM - YYYY')}
                </Text>
              </View>
              <View style={{ position: 'absolute', top: 10, right: 10 }}>
                <TouchableOpacity>
                  <Text color={theme.red}>edit</Text>
                </TouchableOpacity>
              </View>
            </HStack>
          </View>
);};

export default UpcomingMatchCard;
