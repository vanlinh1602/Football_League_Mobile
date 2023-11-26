import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: 220,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 48,
  },
  date: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    position: 'absolute',
    top: -1,
    left: 75,
    elevation: 15,
    shadowColor: '#bebebe',
    width: 70,
    shadowOpacity: 0.26,
    shadowOffset: { width: 5, height: 5 },
  },
});
