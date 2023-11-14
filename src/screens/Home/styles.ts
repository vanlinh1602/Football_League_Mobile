import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 70,
  },
  icon: {
    fontSize: 24,
    color: 'white',
  },
  wellcome: {
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 48,
    margin: 10,
  },
  background: {
    resizeMode: 'cover',
    flex: 1,
    zIndex: -9999,
  },
});
