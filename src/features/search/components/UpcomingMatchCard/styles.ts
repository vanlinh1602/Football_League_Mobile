import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14,
  },
  container: {
    borderBottomWidth: 3,
    backgroundColor: '#eaeaea',
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 24,
    elevation: 5,
    marginHorizontal: '5%',
    marginVertical: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    height: 40,
    width: 40,
    borderRadius: 48,
    margin: 5,
  },
});
