import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Algoritmos = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        Um algoritmo pode ser entendido basicamente como um conjunto de passos
        para se chegar a um certo resultado. É bem simples entender a lógica de
        um algoritmo, afinal sua estrutura tem diversas correspondências no mundo
        real. Se tivéssemos que fazer pipoca a partir de um pacote e utilizando um
        micro-ondas, como seriam os passos? Provavelmente algo como:
      </Text>
      <Text style={styles.steps}>Passo 1: Abrir o micro-ondas</Text>
      <Text style={styles.steps}>Passo 2: Colocar o pacote</Text>
      <Text style={styles.steps}>Passo 3: Definir um tempo</Text>
      <Text style={styles.steps}>Passo 4: Ligar o micro-ondas</Text>
      <Text style={styles.steps}>Passo 5: Retirar ao ouvir o "beep"</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242530',
    alignItems: 'center',
    padding: 45,
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#C2C3CB',
    maxWidth: 300,
  },
  textSec: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#C2C3CB',
    maxWidth: 300,
    marginTop: 10,
  },
  steps: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: '#685fa6',
    alignSelf: 'flex-start',
    maxWidth: 300,
    marginTop: 10,
  }
})

export default Algoritmos;