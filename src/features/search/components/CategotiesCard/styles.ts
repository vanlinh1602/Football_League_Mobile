import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageStyle: {
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'white',
  },

  container: {
    width: 150,
    height: 230,
  },
  text: {
    fontSize: 28,
    paddingTop: 115,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 1,
  },
});
