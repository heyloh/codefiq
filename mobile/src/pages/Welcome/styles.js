import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242530',
    alignItems: 'center',
  },

  imageContainer: {
    marginTop: 21,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decoration: {
    width: 271,
    height: 512,
  },
  logo: {
    width: 166,
    height: 43,
    position: "absolute"
  },

  buttonContainer: {
    backgroundColor: '#242530',
    justifyContent: 'center',
    width: 365,
    height: 210,
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: '#EFF5F6',
  },
  buttonPrimary: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#32ACBD',
  },
  buttonSecondary: {
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#3C424E',
  },
  buttonTextSecondary: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: '#C2C3CB',
  },
});