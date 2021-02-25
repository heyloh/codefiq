import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242530',
    alignItems: 'center',
  },
  headerForm: {
    width: 313,
    height:152,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,  
  },

  formContainer:{
    width: 365,
    height: 540,       
    marginBottom: 30,
    borderRadius: 20,
    backgroundColor: '#F0F0F7',
  },

  formHeader: {
    maxWidth: 308,
    height: 30,
    marginLeft: 27,
    marginTop: 25,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 24,
    color: '#242530',
  },
  formAltButton:{
    width: 98,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5, 
    borderWidth: 1.5,
    borderColor: '#32ACBD',
    marginTop: 8,
  },
  formAlt: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 12,
    color: '#32ACBD',
  },

  formInput:{
    backgroundColor: '#F6F6FF',
    borderColor: '#E6E6F0',
    borderWidth: 1,
    borderRadius: 10,
    width: 310,
    height: 60,
    alignSelf: 'center',
    fontFamily: 'Quicksand-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#3C424E',
    paddingLeft: 15,
  },
  labelInput: {
    marginTop: 5,
    marginBottom: 3,
    fontFamily: 'Quicksand-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#989EA6',
    paddingLeft: 30,
  },

  errMsg: {
    marginTop: 5,
    marginBottom: 3,
    fontFamily: 'Quicksand-Medium',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#F68080',
    paddingLeft: 30,
  },

  buttonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: '#EFF5F6',
  },
  buttonPrimary: {
    marginTop: 21,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#32ACBD',
  },

  footerStairs: {
    width: 242, 
    height: 219, 
    backgroundColor: 'transparent',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    right: -30,
    bottom: -35
  },
});