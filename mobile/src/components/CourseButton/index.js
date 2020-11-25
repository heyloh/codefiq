import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import locked from '../../assets/icons/locked.png';
import unlocked from '../../assets/icons/unlocked.png';
import arrowRight from '../../assets/icons/mdi_arrow_right.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const CourseButton = ({ isLocked = true, title, topic }) => {
  const { navigate } = useNavigation();

  function handleNavigateToTopic() {
    navigate(topic);
  }

  function handleReturn() {
    return;
  }

  return (
    <View style={styles.container}>
      <RectButton 
        style={styles.button} 
        onPress={ isLocked ? handleReturn : handleNavigateToTopic}
      >
        <Text style={styles.course}>{title}</Text>
        { isLocked ? (
          <View />
        ) : (
          <Image source={arrowRight} style={styles.arrowRight}/>
        )}
        
      </RectButton>
      { isLocked ? (
        <Image source={locked} style={styles.isLocked} />
      ) : (
        <Image source={unlocked} style={styles.isLocked} />
      ) }
    </View>
  );
}

export default CourseButton;