import { HStack, Image, Text, VStack, View } from 'native-base';

import S from './styles';
import { ImageBackground } from 'react-native';
import { card_BG, logos } from '../../../../lib/assets';

const MatchCard = () => {
  return (
    <ImageBackground
      imageStyle={{ margin: '5%', borderRadius: 28 }}
      source={card_BG.card6}>
      <View style={S.view} padding={5}>
        <VStack alignItems="center" paddingBottom={5}>
          <Text fontSize={24} fontWeight="bold" color="white">
            Premier League
          </Text>
          <Text color="white" fontWeight="bold">
            England
          </Text>
        </VStack>
        <HStack space={12}>
          <VStack alignItems="center">
            <Image
              source={{
                uri: 'https://www.pngkey.com/png/detail/32-325199_afc-cup-logo-download-logo-afc-cup-2018.png',
              }}
              alt=""
              style={S.image}
            />
            <Text color="white">Chelsea</Text>
          </VStack>
          <VStack alignItems="center">
            <Text fontSize={30} color="white" fontWeight="bold">
              0 : 1
            </Text>
            <Text style={S.date}>10 - 9</Text>
          </VStack>
          <VStack alignItems="center">
            <Image source={logos.Arsenal} alt="" style={S.image} />
            <Text color="white">Arsenal</Text>
          </VStack>
        </HStack>
      </View>
    </ImageBackground>
  );
};

export default MatchCard;
