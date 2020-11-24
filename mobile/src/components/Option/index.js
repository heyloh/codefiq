import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Option = ({text, isCorrect}) => {
  const [showResult, setShowResult] = useState(false);

  function handleShowResult() {
    setShowResult(true);
  }

  return(
    <RectButton style={styles.button} onPress={handleShowResult}>
      <Text style={styles.text}>
        {text}
      </Text>
      { showResult ? (
        <View style={isCorrect ? styles.correct : styles.incorrect} />
      ) : (
        <View />
      ) }
    </RectButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#20212A',
    width: 310,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 10,
    color: '#EFF5F6',
    maxWidth: 270,
  },

  correct: {
    width: 290,
    height: 3,
    backgroundColor: '#77BA7D',
    position: 'absolute',
    top: 0
  },
  incorrect: {
    width: 290,
    height: 3,
    backgroundColor: '#C35252',
    position: 'absolute',
    top: 0
  },
})

export default Option;