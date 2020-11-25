import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const TopicFooter = ( {nextScreen, topic} ) => {
  const { goBack, navigate } = useNavigation();

  function handleNavigateToNext() {
    navigate(nextScreen, {topic});
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack}>
        <Text style={styles.text}>Voltar</Text>
      </BorderlessButton>
      <View style={styles.separator} />
      <BorderlessButton onPress={handleNavigateToNext}>
        <Text style={styles.text}>Próximo</Text>
      </BorderlessButton>
    </View>
  );
}

export default TopicFooter;