import moment from 'moment';
import { Divider, HStack, Image, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { theme } from '../../lib/theme';
import { selectTeam } from '../../redux/selectors/teams';
import { Match } from '../../redux/types/matches';
import { RootState } from '../../redux/types/RootState';

interface ItemProps {
  item: Match;
}

const AgendaItem = ({ item }: ItemProps) => {
  const teamA = useSelector((state: RootState) =>
    selectTeam(state, item.teamA),
  );
  const teamB = useSelector((state: RootState) =>
    selectTeam(state, item.teamB),
  );

  return (
    <View style={styles.container}>
      <HStack padding={3} alignItems="center">
        <View style={{ width: '65%' }}>
          <HStack alignItems="center" justifyContent="space-between">
            <HStack alignItems="center">
              <Image source={{ uri: teamA?.logo }} alt="" style={styles.logo} />
              <Text fontWeight="bold">{teamA?.name}</Text>
            </HStack>
            <Text fontWeight="bold">{item.mathResult?.teamA || 0}</Text>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <HStack alignItems="center">
              <Image source={{ uri: teamB?.logo }} alt="" style={styles.logo} />
              <Text fontWeight="bold">{teamB?.name}</Text>
            </HStack>
            <Text fontWeight="bold">{item.mathResult?.teamB || 0}</Text>
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
            {moment(item.date).format('HH : mm')}
          </Text>
          <Text fontWeight="bold">
            {moment(item.date).format('DD MMM - YYYY')}
          </Text>
        </View>
      </HStack>
    </View>
  );
};

export default AgendaItem;

const styles = StyleSheet.create({
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  container: {
    borderBottomWidth: 3,
    backgroundColor: '#eaeaea',
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 24,
    elevation: 5,
    marginHorizontal: '5%',
    marginVertical: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 48,
    margin: 5,
  },
});
