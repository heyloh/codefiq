import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Question = ({title}) => {
  return( 
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#66a3c6',
    borderRadius: 12,
    width: 350,
    height: 50,
    marginTop: 20,
  },
  title: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
    color: '#EFF5F6',
    maxWidth: 300,
  }
})

export default Question;