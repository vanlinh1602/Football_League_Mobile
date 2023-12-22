import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  background: {
    backgroundColor:'white',
    flex:1,
  },
  iconHeart: {
    fontSize: 24,
    padding: 15
  },
  playerName:{
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 20,
    paddingTop:22
  },
  teamName:{
    fontSize: 20,
    paddingTop:17,
    marginLeft:10,
    fontWeight:'600'
  },
  iconRight:{
    fontSize: 24,
    padding:15,
    marginLeft:-10
  },
  iconSetting:{
    fontSize: 24,
    padding:15,
    marginLeft:25
  },
  goBack: {
    marginTop: -225,
    marginLeft: 15,
    marginBottom:215,
    height: 25,
    width: 25,
    borderWidth: 1,
    color: 'white',
    borderRadius: 999,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  iconComment:{
    fontSize: 24,
    padding:15,
    marginLeft:5,
    marginTop:5
  },
  divider:{
    height:2,
    width:300,
    marginLeft:47,
    backgroundColor:'darkblue',
    marginTop:-10
  },
  playerInfo:{
    fontWeight: '800',
    fontSize: 20,
    paddingLeft: 20,
    paddingTop:22,
    marginLeft:10,
    color:'darkblue'
  },
  infoPara:{
    paddingHorizontal:10,
    marginHorizontal:15,
    borderRadius:20,
    overflow:'visible',
    marginTop:15
  },
  infoText:{
    //fontSize:20,
    overflow:'hidden',
    paddingVertical:20,
    paddingHorizontal:10,
    fontWeight:'500',
    marginTop:-10
  },
  divider2:{
    height:2,
    width:300,
    marginLeft:47,
    backgroundColor:'darkblue',
    marginTop:15
  },
  backButton: {
    backgroundColor:'white',
    height:30,
    width:40,
    marginHorizontal:15,
    marginTop:-235,
    marginBottom:218,
    borderRadius:90,
    elevation:9,
    borderWidth:1
  },
  commentBox:{
    marginLeft: '10%',
    width:'80%',
    marginTop:15
  },
  chooseTeamContainer: {
    borderWidth: 1,
    marginLeft: 250,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
});
