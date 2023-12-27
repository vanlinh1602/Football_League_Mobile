import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    minWidth: 250,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'grey',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 48,
  },
  rank: {
    color: 'red',
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 12,
  },
});
