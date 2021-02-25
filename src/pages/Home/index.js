import React, {useEffect, useState, useContext} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CourseButton from '../../components/CourseButton';

import {UserContext} from '../../contexts/UserContext';

import api from '../../services/api';

import styles from './styles';

const Home = () => {
  const {isLoggedIn} = useContext(UserContext);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    api.get('/subjects').then((response) => {
      setSubjects(response.data);
    });
  }, [isLoggedIn === true]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.courseName}>Lógica de Programação</Text>
        {subjects.map((subject) => {
          return (
            <CourseButton
              key={subject.id}
              title={subject.name}
              isLocked={false}
              topic={`${subject.name}Stack`}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
