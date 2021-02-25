import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#20212B',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    color: '#C2C3CB',
    marginLeft: 20,
  },

  logo: {
    maxWidth: 55,
    maxHeight: 25,
    resizeMode: 'contain',
    marginRight: 20,
  },

  backButton: {
    marginLeft: 20,
  },

  logoutButton: {
    marginLeft: 20,
  },

  view: {
    marginLeft: 45,
  },

  arrowBack: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
