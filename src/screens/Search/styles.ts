import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 70,
  },
  background: {
    resizeMode: 'cover',
    flex: 1,
    zIndex: -9999,
  },
  categotyList: {
    backgroundColor: '#ffffff99',
    padding: 5,
    borderRadius: 24,
    borderColor: '#5A4CBB',
    borderWidth: 1,
  },
  categotyListText: {
    fontSize: 18,
    paddingHorizontal: 15,
    color: '#5A4CBB',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    paddingTop: 5,
    fontWeight: 'bold',
    color: 'white',
    width: '90%',
  },
});
