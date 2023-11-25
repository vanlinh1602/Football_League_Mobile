import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import { Divider, HStack, Image, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { logos } from '../../lib/assets';
import { theme } from '../../lib/theme';

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const { item } = props;

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Match Planned Today</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HStack padding={3} alignItems="center">
        <View style={{ width: '60%' }}>
          <HStack alignItems="center" justifyContent="space-between">
            <HStack alignItems="center">
              <Image source={logos.Liverpool} alt="" style={styles.logo} />
              <Text fontWeight="bold">Liverpool</Text>
            </HStack>
            <Text fontWeight="bold">1</Text>
          </HStack>
          <HStack alignItems="center" justifyContent="space-between">
            <HStack alignItems="center">
              <Image source={logos.FC_Barcelona} alt="" style={styles.logo} />
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
          <Text fontWeight="bold">{moment().format('DD MMM - YYYY')}</Text>
        </View>
        <View style={{ position: 'absolute', top: 10, right: 10 }}>
          <TouchableOpacity>
            <Text color={theme.red}>edit</Text>
          </TouchableOpacity>
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
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14,
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
