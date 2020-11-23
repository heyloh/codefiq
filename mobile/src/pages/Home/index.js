import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CourseButton from '../../components/CourseButton';

import styles from './styles';

const Home = () => {
  return (
    <ScrollView  contentContainerStyle={styles.contentContainer}>
      <Text style={styles.courseName}>Lógica de Programação</Text>
      <CourseButton title="Algoritmos" isLocked={false} topic="Algoritmos" />
      {/* <CourseButton title="Variáveis" topic="Variáveis" />
      <CourseButton title="Objetos" topi/>
      <CourseButton title="Operadores Lógicos" />
      <CourseButton title="Condicionais" />
      <CourseButton title="Estruturas de Repetição" />
      <CourseButton title="Funções" /> */}
    </ScrollView>
  );
}

export default Home;