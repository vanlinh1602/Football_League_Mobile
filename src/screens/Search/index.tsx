import { chunk } from 'lodash';
import { HStack, Input, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';

import CategoriesCard from '../../features/search/components/CategotiesCard';
import { categories_images, images } from '../../lib/assets';
import { AntDesign } from '../../lib/icons';
import { HomeTabScreenProps } from '../../Navigation/type';
import S from './styles';

const categories: {
  name: string;
  image: any;
  key?: 'SearchLeague' | 'SearchTeam' | 'SearchPlayer';
}[] = [
  { name: 'Leagues', image: categories_images.leagues, key: 'SearchLeague' },
  { name: 'Teams', image: categories_images.teams, key: 'SearchTeam' },
  { name: 'Players', image: categories_images.players, key: 'SearchPlayer' },
];

type Props = HomeTabScreenProps<'Search'>;

const Search = ({ navigation }: Props) => {
  return (
    <ImageBackground style={S.background} source={images.homeBackgound}>
      <ScrollView mb={70}>
        <VStack space={4} alignItems="center">
          <Text style={S.title1}>Choose to search</Text>
          <Text style={S.title}>Categories</Text>
          <VStack space={3}>
            {chunk(categories, 2).map((group, gIndex) => (
              <HStack key={gIndex} space={5} w="100%">
                {group.map((category, index) => (
                  <CategoriesCard
                    key={index}
                    {...category}
                    onPress={() => {
                      if (category.key) {
                        navigation.navigate(category.key as any);
                      }
                    }}
                  />
                ))}
              </HStack>
            ))}
          </VStack>
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};
export default Search;
