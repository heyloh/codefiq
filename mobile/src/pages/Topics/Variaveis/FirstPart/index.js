import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import TopicFooter from '../../../../components/TopicFooter';
import Question from '../../../../components/Question';
import Option from '../../../../components/Option';

import styles from '../../styles';

const FirstPart = () => {

  return(
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Question title="O que são variáveis?" />
        <Option 
          text="Informações que podem variar ao longo do código." 
          isCorrect={true}
        />
        <Option 
          text="Textos que podem variar dependendo do seu objetivo no programa." 
          isCorrect={false}
        />
        <Option 
          text="Linguagens de programação que podem trabalhar com diferentes tipos de dados." 
          isCorrect={false}
        />
        <Option 
          text="Informações sobre a máquina que variam dependendo do computador." 
          isCorrect={false}
        />

        <View style={styles.separator} />

        <Text style={styles.textSec}>
          Uma das formas de se armazenar informações no seu código são variáveis. 
          Uma variável possui alguma informação que pode, como o nome sugere, 
          mudar conforme a parte do código que está sendo executada no momento.
        </Text>
        <Text style={styles.textSec}>
          A variável recebe um nome que pode ser usado para referenciá-la, e é 
          recomendado que seja sugestivo para se ter uma ideia do que ela 
          armazena. São exemplos de nomes que você pode atribuir a variáveis: 
          <Text style={styles.highlight}> "idadeDoFuncionario", "modeloDoCarro", "corDeCabelo" </Text>
          (podem ser usadas letras e números, além de "-" e "_", mas nunca se 
          iniciam com números, e não se utiliza caracteres especiais).
        </Text>
        <Text style={styles.textSec}>
          Você pode criar uma variável para armazenar um número, um texto, 
          um caractere, ou tipos de dados mais complexos. Veremos em seguida, 
          detalhes sobre variáveis e como podemos usá-la.
        </Text>

        <View style={styles.separator} />

        <Text style={styles.textSec}>
          Responda algumas questões para continuar
        </Text>

        <Question title="Variáveis são:" />
        <Option 
          text="Informações rotuladas que podem mudar dependendo do código." 
          isCorrect={true}
        />
        <Option 
          text="Informações não rotuladas que podem mudar dependendo da máquina." 
          isCorrect={false}
        />
        <Option 
          text="Informações rotuladas que não podem mudar." 
          isCorrect={false}
        />
        <Option 
          text="Informações não rotuladas invisíveis ao programador e essenciais para a execução do código." 
          isCorrect={false}
        />

        <Question title="São exemplos de bons nomes de variáveis:" />
        <Option 
          text="idadeDoJoao, quantidadeDeCarros" 
          isCorrect={true}
        />
        <Option 
          text="B05E, S345" 
          isCorrect={false}
        />
        <Option 
          text="3semanaDoMes, +salario" 
          isCorrect={false}
        />
        <Option 
          text="dolar$, euro€" 
          isCorrect={false}
        />

        <Question title="Quem cria a variável?" />
        <Option 
          text="O programador." 
          isCorrect={true}
        />
        <Option 
          text="A máquina." 
          isCorrect={false}
        />
        <Option 
          text="O usuário." 
          isCorrect={false}
        />
        <Option 
          text="Não são criadas." 
          isCorrect={false}
        />
      </ScrollView>
      <TopicFooter nextScreen="SecondPart" />
    </>
  );
}

export default FirstPart;