import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dialog, { DialogContent, ScaleAnimation, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

import locked from '../../assets/icons/locked.png';
import unlocked from '../../assets/icons/unlocked.png';
import arrowRight from '../../assets/icons/mdi_arrow_right.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const CourseButton = ({ isLocked = true, title, topic }) => {
  const { navigate } = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  function handleNavigateToTopic() {
    navigate(topic);
  }

  function handleShowPopup() {
    setIsVisible(true);
  }

  return (
    <View style={styles.container}>
      <RectButton 
        style={styles.button} 
        onPress={ isLocked ? handleShowPopup : handleNavigateToTopic}
      >
        <Text style={styles.course}>{title}</Text>
        <Image source={arrowRight} style={styles.arrowRight}/>
      </RectButton>
      { isLocked ? (
        <Image source={locked} style={styles.isLocked} />
      ) : (
        <Image source={unlocked} style={styles.isLocked} />
      ) }

      <Dialog
          visible={isVisible}
          footer={
            <DialogFooter style={styles.dialogFoot}>
              <DialogButton
                textStyle={styles.dialogTitleText}
                text="Entendido"
                onPress={() => { setIsVisible(false) }}
                style={styles.dialogButton}
              />
            </DialogFooter>
          }
          onTouchOutside={() => {
            setIsVisible(false);
          }}
          dialogAnimation={new ScaleAnimation({
            initialValue: 0, // optional
            useNativeDriver: true, // optional
          })}
          dialogTitle={
            <DialogTitle 
              style={styles.dialogTitle} 
              title="Tópico indisponível" 
              textStyle={styles.dialogTitleText}
            />
          }
          overlayOpacity={0.8}
        >
          <DialogContent style={styles.dialogContent}>
            <Text style={styles.text}>Estude os tópicos anteriores, em breve este estará disponível.</Text>
          </DialogContent>
        </Dialog>
    </View>
  );
}

export default CourseButton;