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

  teamNameContainer: {
    marginTop: 20,
    height: 50,
    marginLeft: 20,
    marginBottom: -30,
  },
  teamName: {
    fontSize: 30,
    lineHeight: 30,
  },
  comparisonTitle: {
    marginLeft: 35,
    fontSize: 25,
    color: '#003E88',
  },
  chooseTeamContainer: {
    borderWidth: 1,
    marginLeft: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamLogo: {
    marginTop: -10,
    marginLeft: 20,
    marginRight: 15,
    width: 40,
    height: 40,
  },

  favoriteButton: {
    marginTop: -6,
  },
  leagueTeamPlaying: {
    marginTop: 20,
    marginLeft: 25,
  },
  leagueName: {
    marginTop: 15,
    fontSize: 20,
  },
  leagueLogo: {
    width: 60,
    height: 60,
  },
  underline: {
    marginTop: 10,
    marginLeft: 30,
    marginBottom: -10,
    borderWidth: 1,
    width: '85%',
    color: 'black',
    opacity: 0.3,
  },
});
