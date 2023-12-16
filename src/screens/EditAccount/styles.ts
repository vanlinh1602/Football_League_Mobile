import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 48,
    borderWidth: 1,
    borderColor: '#000',
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
  infoName:{
    fontSize: 17,
    marginLeft:8,
    marginTop:15,
    fontWeight:'bold'
  },
  textInput:{
    height:40,
    width:320,
    marginHorizontal:15,
    borderRadius:10,
    elevation:3,
    backgroundColor:'#e8e8e8',
    marginTop:8,
  },
  dateInput:{
    height:40,
    width:180,
    marginHorizontal:15,
    borderRadius:10,
    elevation:3,
    backgroundColor:'#e8e8e8',
    marginTop:8,
  },
  saveButton:{
    height:35,
    width:90,
    backgroundColor:'lightblue',
    marginTop:45,
    marginLeft:'35%',
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
  },
  saveText:{
    fontSize:20,
    fontWeight:'700'
  }
});
