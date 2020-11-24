import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 30,
  },

  button: {
    backgroundColor: '#32ACBD',
    width: 300,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  isLocked: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: -20,
    width: 42,
    height: 42,
    resizeMode: 'contain',
  },
  course: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: '#EFF5F6',
    marginLeft: 45,
  },
  arrowRight: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10
  },
  dialogTitle: {
    backgroundColor: '#1A1B21',
  },
  dialogTitleText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
    color: '#EFF5F6',
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    color: '#EFF5F6',
  },
  dialogContent: {
    backgroundColor: '#20212A',
    padding: 20,
    maxWidth: 350,
    height: 80,
    justifyContent: 'center',
  },
  dialogButton: {
    backgroundColor: '#77BA7D',
  }
});