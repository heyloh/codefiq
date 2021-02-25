import React, {useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {UserContext} from '../../contexts/UserContext';

import wrong from '../../assets/icons/wrong.png';
import right from '../../assets/icons/right.png';

const Option = ({text, isCorrect, exerciseId}) => {
  const [showResult, setShowResult] = useState(false);
  const {clickExercise, verifyIfEnabled, clickedExercises} = useContext(
    UserContext,
  );
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    clicked ? null : handleShowResult();
  }

  function handleShowResult() {
    setShowResult(true);
  }

  useEffect(() => {
    setClicked(clickedExercises[exerciseId] ? true : false);
  }, [clickedExercises]);

  return (
    <RectButton
      enabled={verifyIfEnabled(exerciseId)}
      style={styles.button}
      onPress={handleClick}>
      <View style={styles.view}>
        <Text style={styles.text}>{text}</Text>
        {showResult ? (
          <Image style={styles.image} source={isCorrect ? right : wrong} />
        ) : (
          <View />
        )}
      </View>
      {/* {showResult ? (
        <View style={isCorrect ? styles.correct : styles.incorrect} />
      ) : (
        <View />
      )} */}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#20212A',
    width: 310,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  view: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 10,
    color: '#EFF5F6',
    maxWidth: 260,
    marginLeft: 10,
  },

  correct: {
    width: 290,
    height: 3,
    backgroundColor: '#77BA7D',
    position: 'absolute',
    top: 0,
  },
  incorrect: {
    width: 290,
    height: 3,
    backgroundColor: '#C35252',
    position: 'absolute',
    top: 0,
  },

  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default Option;
