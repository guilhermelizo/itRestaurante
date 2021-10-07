import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },

  divTop: {
    marginTop: 0,
    width: 428,
    height: 511,
  },
  imgHome:{
    width: 428,
    height: 511,
    display: 'flex',
    position: 'absolute',
  },

  // Parte de baixo da tela
  divBot: {
    borderRadius: 32,
    display: 'flex',
    position: 'absolute',
    width: 428,
    height: 463,
    left: 0,
    top: 463,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },

  textH1:{
    fontSize: 48,
    color: 'black',
    alignSelf: 'center',
  },
  textH2:{
    fontSize: 26,
    alignSelf: 'center',
    color: 'red'

  },
  textH3:{
    fontSize: 18,
    alignSelf: 'center',
    marginHorizontal: 92,
  },
  
  btnTouchable: {
    marginLeft: 31,
    marginRight: 32,
    height: 58,
    alignSelf: 'center',
    backgroundColor: '#F26172',
    width: 365,
    borderRadius: 32,
  },

  btnText:{
    alignSelf: 'center',
    alignContent: 'center',
    color: 'white',
    fontSize: 24,
  },
  

})