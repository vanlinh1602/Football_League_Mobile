import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
  },
  ava: {
    height:45,
    width: 45,
    borderRadius:90,
    marginHorizontal:15,
    marginTop:20
  },
  username: {
    fontSize: 16,
    paddingTop:2,
    fontWeight:'800',
    marginLeft:4
  },
  commentContainer: {
    backgroundColor:'#ebebeb',
    padding:10,
    marginVertical:10,
    borderRadius:10,
    marginLeft:5,
    elevation:3,
    width:290,
    marginTop:20
  },
  commentText:{
    //fontSize:16,
    color:'black',
    fontWeight:'300',
    padding:7,
  },
  iconheart: {
    fontSize:20,
    marginTop:7,
    marginLeft:300
  },
  iconheart2: {
    fontSize:20,
    marginTop:7,
    color:'black',
    marginLeft:15
  }
});
