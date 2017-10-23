import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  bar: {
    height:60,
  },
  listClass: {
    marginTop: 0,
  },
  subtitleView: {
    flexDirection: 'row',
    //paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    //paddingLeft: 10,
    color: 'grey'
  },
  deleteFrame: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerView: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formulario: {
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  formSubmit: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButton: {
    flex:1,
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'green',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'green',
  },
  cancelButton: {
    flex:1, 
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'red',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'red',
  },
});
