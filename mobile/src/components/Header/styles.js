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
    fontFamily: 'Quicksand_500Medium',
    fontSize: 14,
    color: '#C2C3CB'
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

  view: {
    marginLeft: 45,
  }
});
