import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242530',
    alignItems: 'center',
  },
  headerForm: {
    width: 358,
    height:221,
    marginTop: 30,
  },

  formContainer:{
    width: 365,
    height: 405,
    borderRadius: 20,
    backgroundColor: '#F0F0F7',
  },

  formHeader: {
    maxWidth: 308,
    height: 30,
    marginLeft: 27,
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 24,
    color: '#242530',
  },
  formAltContainer:{
    width: 110,
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
    marginTop: 20,
  },

  buttonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: '#EFF5F6',
  },
  buttonPrimary: {
    marginTop: 38,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#32ACBD',
  },
});