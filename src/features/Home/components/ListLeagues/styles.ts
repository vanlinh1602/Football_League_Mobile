import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  touchableOpacity: {
    elevation: 9,
  },
  view: {
    alignContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'white',
    resizeMode: 'contain',
    height: 70,
    width: 70,
    borderRadius: 48,
    marginLeft: 9,
    marginRight: 12,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 2,
    marginBottom: 10,
  },
  greenText: {
    color: 'green',
  },
  padding: {
    paddingHorizontal: 15,
  },
  flexRow: {
    flexDirection: 'row',
  },
  viewFeature: {
    marginTop: -3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    justifyContent: 'space-between',
  },
  textFeature: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
    marginLeft: 10,
  },
  descFeature: {
    fontSize: 17,
    paddingHorizontal: 20,
    color: 'brown',
    marginTop: 1,
  },
});
