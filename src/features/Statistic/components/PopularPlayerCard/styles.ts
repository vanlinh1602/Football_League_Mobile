import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'grey',
    width: 130,
    padding: 5,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 48,
  },
  point: {
    position: 'absolute',
    backgroundColor: '#3c73ff',
    color: 'white',
    paddingHorizontal: 5,
    borderRadius: 5,
    bottom: 0,
    left: 55,
    zIndex: 10,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 12,
  },
});
