import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Option from '../../../../components/Option';
import Question from '../../../../components/Question';
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
        <Question title="Mas antes, o que seria um algoritmo?" />
        <Option
          text="Texto em linguagem humana usado para realizar comandos em um dispositivo."
          isCorrect={false}
        />
        <Option
          text="Texto ilegível por humanos usado para realizar comandos em um dispositivo."
          isCorrect={false}
        />
        <Option
          text="Texto escrito em uma linguagem de programação usado para realizar comandos em um dispositivo."
          isCorrect={true}
        />
        <Option
          text="Sequência de números em base hexadecimal usada para realizar comandos em um dispositivo."
          isCorrect={false}
        />

        <View style={styles.separator} />

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

        <Question title="Quem escreve o algoritmo?" />
        <Option 
          text="O programador"
          isCorrect={true}
        />
        <Option 
          text="O usuário comum"
          isCorrect={false}
        />
        <Option 
          text="A própria máquina, usando de base o código"
          isCorrect={false}
        />
        <Option 
          text="O algoritmo não é escrito"
          isCorrect={false}
        />

        <Question title="O que é o código de máquina?" />
        <Option 
          text="Um texto ilegível por humanos que o programador não pode gerar nem indiretamente."
          isCorrect={false}
        />
        <Option 
          text="Um texto escrito diretamente pelo programador, que pode ser diretamente executado pela máquina após ser escrito."
          isCorrect={false}
        />
        <Option 
          text="Uma série de comandos codificados que o computador entende de forma direta."
          isCorrect={true}
        />
        <Option 
          text="Uma forma de codificar comandos usada diretamente pelo programador através de linguagens de programação."
          isCorrect={false}
        />
      </ScrollView>
      <TopicFooter nextScreen="SecondPart" />
    </>
  );
}

export default FirstPart;