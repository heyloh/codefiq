import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StepByStep from '../../../../components/StepByStep';
import TopicFooter from '../../../../components/TopicFooter';

import styles from '../../styles';

const FirstPart = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          Através dessas lições você será capaz de entender um pouco sobre os
          princípios por trás dos códigos.
        </Text>

        <Text style={styles.textSec}>
          Assim como cada página de um livro contém diversas frases onde cada
          palavra tem seu significado e objetivo, o código tem diversas partes,
          e cada uma realiza algum tipo de comando, e assim como um conjunto de
          páginas forma um livro, um conjunto de códigos forma um programa.
        </Text>
        <Text style={styles.textSec}>
          Linguagens de programação são usadas para basicamente escrever um
          algoritmo. Algoritmos são transformados em um código legível pela
          máquina, direta ou indiretamente, de alguma forma que muda de acordo
          com a linguagem, processo este chamado de compilação.
        </Text>
        <Text style={styles.textSec}>
          Softwares muito complexos usados todos os dias em computadores,
          celulares, tablets e outros, são possíveis graças a uma grande
          quantidade de códigos, onde cada parte realiza uma ação mais simples.
        </Text>
        <Text style={styles.textSec}>
          Um algoritmo pode ser entendido basicamente como um conjunto de passos
          para se chegar a um certo resultado. É bem simples entender a lógica
          de um algoritmo, afinal sua estrutura tem diversas correspondências no
          mundo real.
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
          Um algoritmo não tem uma estrutura tão diferente, se trata de comandos
          basicamente, que são separados por linhas e que trabalham juntos
          resultado em algo no final da execução.
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
      <TopicFooter nextScreen="SecondPart" />
    </>
  );
};

export default FirstPart;
