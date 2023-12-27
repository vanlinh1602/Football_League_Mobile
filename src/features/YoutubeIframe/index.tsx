import React, { useCallback, useState } from 'react';
import { Alert, View } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

type Props = {
  videoId: string;
};

const YoutubePlayer = ({ videoId }: Props) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <View style={{ marginHorizontal: 5, marginTop: 15 }}>
      <YoutubeIframe
        height={300}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default YoutubePlayer;
