import React, {useState, useEffect, useContext} from 'react';
import {ScrollView, View} from 'react-native';
import Option from '../../../../components/Option';
import Question from '../../../../components/Question';
import TopicFooter from '../../../../components/TopicFooter';

import api from '../../../../services/api';

import styles from '../../styles';

const SecondPart = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    api.get(`/exercises?subject_id=6`).then((response) => {
      setExercises(response.data);
    });
  });

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {exercises.map((exercise) => {
          return (
            <View key={exercise.id}>
              <Question title={exercise.content.question} />
              <Option
                exerciseId={exercise.id}
                text={exercise.content.options[0].label1}
                isCorrect={exercise.content.options[0].correct ? true : false}
              />
              <Option
                exerciseId={exercise.id}
                text={exercise.content.options[1].label2}
                isCorrect={exercise.content.options[1].correct ? true : false}
              />
              <Option
                exerciseId={exercise.id}
                text={exercise.content.options[2].label3}
                isCorrect={exercise.content.options[2].correct ? true : false}
              />
              <Option
                exerciseId={exercise.id}
                text={exercise.content.options[3].label4}
                isCorrect={exercise.content.options[3].correct ? true : false}
              />
            </View>
          );
        })}
      </ScrollView>
      <TopicFooter nextScreen="FinishTopic" topic="Algoritmos" />
    </>
  );
};

export default SecondPart;
