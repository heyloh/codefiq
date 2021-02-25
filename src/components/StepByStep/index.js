import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const StepByStep = ({value, text}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.step}>Passo {value}: </Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 300,
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },
  step: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: '#9d7ab8',
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    color: '#EFF5F6',
  },
})

export default StepByStep;