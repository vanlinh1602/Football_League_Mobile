import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageBackground: {
    height: 250,
    width: '100%',
  },
  goBack: {
    marginTop: 15,
    marginLeft: 10,
    height: 24,
    width: 24,
    borderWidth: 1,
    color: 'white',
    borderRadius: 999,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  playerNameContainer: {
    marginTop: 20,
    height: 50,
    marginLeft: 20,
    marginBottom: -30,
  },
  playerName: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  teamLogo: {
    marginTop: -10,
    marginLeft: 77,
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 48,
  },

  favoriteButton: {
    marginTop: -6,
  },
  playerInfo: {
    fontWeight: '800',
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 22,
    marginLeft: 10,
    color: 'darkblue',
  },
  iconComment: {
    fontSize: 24,
    padding: 15,
    marginLeft: 5,
  },
  commentBox: {
    marginLeft: '7%',
    width: '75%',
    marginTop: 5,
    marginBottom: 10,
  },
  chooseTeamContainer: {
    borderWidth: 1,
    marginLeft: 250,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
