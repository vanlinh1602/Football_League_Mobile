import { HStack, Input, ScrollView, Text, View, VStack } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import LeaguesCard from '../../features/search/components/LeaguesCard';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import { selectLeagues } from '../../redux/selectors/leagues';
import S from './styles';

type Props = HomeStackScreenProps<'SearchLeague'>;

const SearchLeague = ({ navigation }: Props) => {
  const [filterData, setFilterData] = useState('');

  const leagues = useSelector(selectLeagues);
  const handleFilterData = (text: string) => {
    setFilterData(text);
  };

  const filteredLeagues = Object.values(leagues ?? {}).filter((league) => {
    return league.name.toLowerCase().includes(filterData.toLowerCase());
  });

  return (
    <ScrollView>
      <VStack>
        <HStack>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HStack style={S.goBackPart}>
              <View style={S.goBackArrow}>
                <AntDesign name="arrowleft" size={20} color="#7000FF" />
              </View>
            </HStack>
          </TouchableOpacity>
          <Text style={S.title} fontSize={40} fontWeight="bold" marginLeft={5}>
            Leagues
          </Text>
        </HStack>
        <Input
          marginTop={5}
          marginLeft={3}
          fontSize={16}
          paddingX={5}
          borderColor="#black"
          backgroundColor="white"
          focusOutlineColor="#5A4CBB"
          InputLeftElement={
            <AntDesign
              style={{ marginLeft: 10 }}
              name="search1"
              size={20}
              color="black"
            />
          }
          width="93%"
          variant="rounded"
          placeholder="Search Leagues"
          value={filterData}
          onChangeText={handleFilterData}
        />
        <VStack>
          {filteredLeagues.map(({ id, image, name }, gIndex) => (
            <LeaguesCard
              key={gIndex}
              name={name}
              logo={image}
              id={id}
              nativeScreen="LeaguesInfo"
            />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default SearchLeague;
