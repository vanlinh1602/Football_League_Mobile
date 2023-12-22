import { HStack, Input, ScrollView, Text, View, VStack } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import LeaguesCard from '../../features/search/components/LeaguesCard';
import { logos } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeStackScreenProps } from '../../Navigation/type';
import S from './styles';

const leagueList = [
  { name: 'Erling Haaland', logo: logos.Chelsea },
  { name: 'Marcus Rashford', logo: logos.Chelsea },
  { name: 'Antony', logo: logos.Chelsea },
  { name: 'Tripier', logo: logos.Chelsea },
  { name: 'Mitrovic', logo: logos.Chelsea },
  { name: 'Mohamed Salah', logo: logos.Chelsea },
  { name: 'Darwin Nunez', logo: logos.Chelsea },
  { name: 'Bernando Silva', logo: logos.Chelsea },
  { name: 'Kevin De Bruyne', logo: logos.Chelsea },
  { name: 'Onana', logo: logos.Chelsea },
];
type Props = HomeStackScreenProps<'SearchPlayer'>;
const SearchPlayer = ({ navigation }: Props) => {
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
        <HStack>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HStack style={S.goBackPart}>
              <View style={S.goBackArrow}>
                <AntDesign name="arrowleft" size={20} color="#7000FF" />
              </View>
            </HStack>
          </TouchableOpacity>
          <Text style={S.title} fontSize={40} fontWeight="bold" marginLeft={5}>
            Players
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
          placeholder="Search Player"
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

export default SearchPlayer;
