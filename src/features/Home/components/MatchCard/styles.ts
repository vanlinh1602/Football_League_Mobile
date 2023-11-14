import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 30,
    color: 'white',
  },
  image: {
    height: 70,
    width: 70,
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
});
