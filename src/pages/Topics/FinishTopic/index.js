import React, {useContext} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {UserContext} from '../../../contexts/UserContext';

import checkCircle from '../../../assets/icons/check-circle.png';
import wrong from '../../../assets/icons/wrong.png';

const FinishTopic = ({route}) => {
  const {topic} = route.params;
  const {navigate} = useNavigation();
  const {resetClickedExercises, answers, resetAnswers} = useContext(
    UserContext,
  );

  function handleFinish() {
    resetClickedExercises();
    resetAnswers();
    navigate('Home');
  }

  return (
    <View style={styles.container}>
      {answers.correct > answers.incorrect ? (
        <>
          <Image source={checkCircle} style={styles.success} />
          <Text style={styles.title}>Parabéns!</Text>
          <Text style={styles.text}>
            Você acabou de concluir o tópico de {topic}. Siga em frente e
            continue aprendendo!
          </Text>
          <RectButton style={styles.button} onPress={handleFinish}>
            <Text style={styles.buttonText}>Continuar</Text>
          </RectButton>
        </>
      ) : (
        <>
          <Image source={wrong} style={styles.success} />
          <Text style={styles.title}>Que pena!</Text>
          <Text style={styles.text}>
            Você não conseguiu concluir o tópico de {topic}. Tente novamente,
            parece que você errou muitos exercícios, continue praticando até
            conseguir.
          </Text>
          <RectButton style={styles.button} onPress={handleFinish}>
            <Text style={styles.buttonText}>Continuar</Text>
          </RectButton>
        </>
      )}
    </View>
  );
};

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
});

export default FinishTopic;
