import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    margin: '5%',
    borderRadius: 28,
  },
  backgroundMini: {
    borderRadius: 28,
    margin: '5%',
  },
  view: {
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 30,
    color: 'white',
  },
  viewMini: {
    marginHorizontal: '5%',
    width: '90%',
    minWidth: 300,
    maxWidth: 350,
    borderRadius: 30,
    color: 'white',
    padding: '5%',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 48,
    margin: 5,
  },
  imageMini: {
    height: 55,
    width: 55,
    borderRadius: 48,
    margin: 5,
  },
  date: {
    color: 'red',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateMini: {
    color: 'red',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: 'red',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
