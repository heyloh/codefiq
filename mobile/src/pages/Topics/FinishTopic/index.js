import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import checkCircle from '../../../assets/icons/check-circle.png';

const FinishTopic = ({route}) => {
  const { topic } = route.params;
  const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate('Home');
  }

  return(
    <View style={styles.container}>
      <Image source={checkCircle} style={styles.success}/>
      <Text style={styles.title}>Parabéns!</Text>
      <Text style={styles.text}>
        Você acabou de concluir o tópico de {topic}.
        Siga em frente e continue aprendendo!
      </Text>
      <RectButton 
        style={styles.button}
        onPress={handleNavigateToHome}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242530',
    alignItems: 'center',
    justifyContent: 'center',
  },
  success: {
    maxHeight: 150,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 32,
    color: '#EFF5F6',
    maxWidth: 300,
    marginTop: 50,
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
    color: '#EFF5F6',
    maxWidth: 300,
    marginTop: 20,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#32ACBD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: '#EFF5F6',
  },
})

export default FinishTopic;