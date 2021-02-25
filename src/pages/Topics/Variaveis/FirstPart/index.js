import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import TopicFooter from '../../../../components/TopicFooter';

import styles from '../../styles';

const FirstPart = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          Uma das formas de se armazenar informações no seu código são
          variáveis. Uma variável possui alguma informação que pode, como o nome
          sugere, mudar conforme a parte do código que está sendo executada no
          momento.
        </Text>
        <Text style={styles.textSec}>
          A variável recebe um nome que pode ser usado para referenciá-la, e é
          recomendado que seja sugestivo para se ter uma ideia do que ela
          armazena. São exemplos de nomes que você pode atribuir a variáveis:
          <Text style={styles.highlight}>
            {' '}
            "idadeDoFuncionario", "modeloDoCarro", "corDeCabelo"{' '}
          </Text>
          (podem ser usadas letras e números, além de "-" e "_", mas nunca se
          iniciam com números, e não se utiliza caracteres especiais).
        </Text>
        <Text style={styles.textSec}>
          Você pode criar uma variável para armazenar um número, um texto, um
          caractere, ou tipos de dados mais complexos. Veremos em seguida,
          detalhes sobre variáveis e como podemos usá-la.
        </Text>

        <View style={styles.separator} />

        <Text style={styles.textSec}>
          Toda a manipulação de valores vista até aqui utilizou literais.
          Valores literais são uma representação de valores fixos sem
          identificação no código, 5 é um exemplo de literal,
          <Text style={styles.highlight}> "Texto" </Text>também.
        </Text>
        <Text style={styles.textSec}>
          Porém, identificar valores é uma forma importante de escrever
          algoritmos. Uma variável serve como um rótulo a um valor, valor este
          que pode ser alterado ao decorrer do código ou referenciado usando
          este mesmo código.
        </Text>
        <Text style={styles.textSec}>
          Uma vez que uma variável é declarada:
        </Text>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            <Text style={styles.pinkHighlight}>var</Text> numero
            <Text style={styles.pinkHighlight}> = </Text> 5,3;
          </Text>
        </View>
        <Text style={styles.textSec}>
          Usar o seu nome em outras partes do código é o mesmo que usar seu
          valor:
        </Text>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            console.<Text style={styles.greenHighlight}>log</Text>(numero);
          </Text>
          <Text style={styles.comment}>
            // Exibe 5.3 na tela, exatamente o mesmo que console.log(5.3);
          </Text>
        </View>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            console.<Text style={styles.greenHighlight}>log</Text>(numero +
            numero);
          </Text>
          <Text style={styles.comment}>// Exibe 10.6</Text>
        </View>

        <View style={styles.separator} />

        <Text style={styles.textSec}>
          Uma variável pode ter um novo valor atribuído a ela em qualquer parte
          do código:
        </Text>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            <Text style={styles.pinkHighlight}>var</Text> valor
            <Text style={styles.pinkHighlight}> = </Text> 20;
          </Text>

          <Text style={styles.textSec}>
            valor<Text style={styles.pinkHighlight}> = </Text> valor - 5;
          </Text>
          <Text style={styles.comment}>// Novo valor atribuído à variável</Text>

          <Text style={styles.textSec}>
            console.<Text style={styles.greenHighlight}>log</Text>(valor);
          </Text>
          <Text style={styles.comment}>// Exibe 15 na tela</Text>
        </View>

        <View style={styles.separator} />

        <Text style={styles.textSec}>
          Temos um comportamento característico de linguagens
          <Text style={styles.highlight}> "fracamente tipadas" </Text> como o
          próprio javascript, onde as variáveis não possuem um tipo associado a
          elas, são simplesmente variáveis.
        </Text>
        <Text style={styles.textSec}>
          A mesma variável que armazena um número pode armazenar um texto depois
          de algumas linhas de código, o que é perfeitamente possível em
          javascript mas não recomendado em algoritmos sérios. Boa parte das
          linguagens NÃO possuem esse mesmo comportamento, você terá que definir
          o tipo de valor que a variável pode receber no momento de sua
          declaração.
        </Text>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            <Text style={styles.pinkHighlight}>var</Text> valor
            <Text style={styles.pinkHighlight}> = </Text> 6;
          </Text>
          <Text style={styles.text}>
            console.<Text style={styles.greenHighlight}>log</Text>(valor);
          </Text>
          <Text style={styles.comment}>// Exibe 6</Text>
        </View>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            <Text style={styles.pinkHighlight}>var</Text> valor
            <Text style={styles.pinkHighlight}> = </Text> "Olá mundo!";
          </Text>
          <Text style={styles.text}>
            console.<Text style={styles.greenHighlight}>log</Text>(valor);
          </Text>
          <Text style={styles.comment}>// Exibe "Olá mundo!"</Text>
        </View>

        <View style={styles.separator} />

        <Text style={styles.textSec}>
          Variáveis não precisam obrigatoriamente receber um valor assim que são
          declaradas.
        </Text>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            <Text style={styles.pinkHighlight}>var</Text> a;
          </Text>
          <Text style={styles.text}>
            a <Text style={styles.pinkHighlight}> = </Text> 5;
          </Text>
          <Text style={styles.text}>
            console.<Text style={styles.greenHighlight}>log</Text>(a);
          </Text>
        </View>
        <Text style={styles.textSec}>
          Contudo, referenciar uma variável sem um valor atribuído pode causar
          erros e até interromper a execução do código em várias das principais
          linguagens de programação.
        </Text>
        <View style={styles.code}>
          <Text style={styles.textSec}>
            <Text style={styles.pinkHighlight}>var</Text> a;
          </Text>
          <Text style={styles.text}>
            console.<Text style={styles.greenHighlight}>log</Text>(a);
          </Text>
          <Text style={styles.comment}>// Exibe undefined;</Text>
        </View>
        <Text style={styles.textSec}>
          Em javascript, apenas referenciar uma variável vazia retorna um valor
          do tipo undefined, mesmo havendo casos onde erros ocorrerão ao
          trabalhar com esses valores.
        </Text>
        <Text style={styles.textSec}>
          Não se preocupe em entender a fundo o comportamento desse tipo de
          valor, apenas lembre-se de evitar trabalhar com variáveis sem valores
          atribuídos a não ser intencionalmente.
        </Text>
      </ScrollView>
      <TopicFooter nextScreen="SecondPart" />
    </>
  );
};

export default FirstPart;
