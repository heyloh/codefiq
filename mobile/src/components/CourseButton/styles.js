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
  }
});