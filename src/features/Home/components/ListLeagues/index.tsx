import { ScrollView, View } from 'native-base';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { selectLeagues } from '../../../../redux/selectors/leagues';
import S from './styles';

type Props = {
  onPress: (id: string) => void;
  select?: string;
};

const ListLeagues = ({ onPress, select }: Props) => {
  const leagues = useSelector(selectLeagues);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={S.scrollView}>
      <View flexDirection="row" marginBottom={2}>
        {Object.values(leagues ?? {}).map(({ image, id }) => (
          <TouchableOpacity
            key={id}
            style={S.touchableOpacity}
            onPress={() => onPress(id)}>
            <View style={[S.view]}>
              <Image
                source={{ uri: image || '' }}
                style={[
                  S.image,
                  select === id
                    ? {
                        borderWidth: 3,
                        borderRadius: 48,
                        borderColor: '#ff8c00',
                      }
                    : {},
                ]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ListLeagues;
