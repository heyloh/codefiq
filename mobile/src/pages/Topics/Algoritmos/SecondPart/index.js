import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Option from '../../../../components/Option';
import Question from '../../../../components/Question';
import StepByStep from '../../../../components/StepByStep';
import TopicFooter from '../../../../components/TopicFooter';

import styles from '../styles';

const SecondPart = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Question title="Podemos entender um algoritmo, de forma bem simples, como sendo:" />
        <Option
          text="Uma sequência de comandos que atende a um certo propósito."
          isCorrect={true}
        />
        <Option
          text="Necessariamente um programa complexo que só será criado através de supercomputadores."
          isCorrect={false}
        />
        <Option
          text="Um código diretamente legível e executável pela máquina."
          isCorrect={false}
        />
        <Option
          text="Uma operação matemática que realiza o processo inverso da exponenciação."
          isCorrect={false}
        />

        <View style={styles.separator} />

        <Text style={styles.textSec}>
          Um algoritmo pode ser entendido basicamente como um conjunto de 
          passos para se chegar a um certo resultado. 
          É bem simples entender a lógica de um algoritmo, afinal sua estrutura 
          tem diversas correspondências no mundo real.   
        </Text>
        <Text style={styles.textSec}>
          Se tivéssemos que fazer pipoca a partir de um pacote e utilizando um 
          micro-ondas, como seriam os passos? Provavelmente algo como:
        </Text>
        <StepByStep value={1} text="Abrir o micro-ondas" />
        <StepByStep value={2} text="Colocar o pacote" />
        <StepByStep value={3} text="Definir um tempo" />
        <StepByStep value={4} text="Ligar o micro-ondas" />
        <StepByStep value={5} text="Retirar ao ouvir o beep" />
        <Text style={styles.textSec}>
          Um algoritmo não tem uma estrutura tão diferente, se trata de 
          comandos basicamente, que são separados por linhas e que trabalham 
          juntos resultado em algo no final da execução.
        </Text> 
        <Text style={styles.textSec}>
          A partir de algoritmos pode-se fazer um programa simples que trás o 
          resultado da soma de todos os números entre 1 e 100 ou um código que 
          faz um website inteiro e bem completo funcionar. 
        </Text>
        <Text style={styles.textSec}>
          A forma de escrever um, executar, modificar, formatar e etc, muda de 
          acordo com a linguagem de programação a ser usada, então não vamos 
          entrar em detalhes no momento.
        </Text>
      </ScrollView>
      <TopicFooter nextScreen="FinishTopic" topic="Algoritmos"/>
    </>
  );
}

export default SecondPart;