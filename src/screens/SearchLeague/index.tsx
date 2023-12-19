import { HStack, Input, ScrollView, Text, View, VStack } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import LeaguesCard from '../../features/search/components/LeaguesCard';
import { leagueLogos } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

const leagueList = [
  { name: 'EPL', logo: leagueLogos.AFC },
  { name: 'AFC', logo: leagueLogos.AFF },
  { name: 'AFCCUP', logo: leagueLogos.UEFA },
  { name: 'UEFA', logo: leagueLogos.UEFAEU },
  { name: 'AFC Champions Cup', logo: leagueLogos.CAF },
  { name: 'EPL', logo: leagueLogos.AFC },
  { name: 'AFC', logo: leagueLogos.AFF },
  { name: 'AFCCUP', logo: leagueLogos.UEFA },
  { name: 'UEFA', logo: leagueLogos.UEFAEU },
  { name: 'AFC Champions Cup', logo: leagueLogos.CAF },
];

type Props = HomeStackScreenProps<'SearchLeague'>;

const SearchLeague = ({ navigation }: Props) => {
  const [filterData, setFilterData] = useState('');

  const handleFilterData = (text: string) => {
    setFilterData(text);
  };

  const filteredLeagues = leagueList.filter((league) => {
    return league.name.toLowerCase().includes(filterData.toLowerCase());
  });

  return (
    <ScrollView>
      <VStack>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <HStack style={S.goBackPart}>
            <View style={S.goBackArrow}>
              <AntDesign name="arrowleft" size={20} color="#7000FF" />
            </View>
            <View>
              <Text
                height={50}
                fontSize={28}
                color="#7000FF"
                fontWeight="bold"
                marginLeft={3}>
                Search
              </Text>
            </View>
          </HStack>
        </TouchableOpacity>
        <Text fontSize={40} fontWeight="bold" marginLeft={5}>
          Leagues
        </Text>
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
          {filteredLeagues.map((league, gIndex) => (
            <LeaguesCard key={gIndex} {...league} />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default SearchLeague;
