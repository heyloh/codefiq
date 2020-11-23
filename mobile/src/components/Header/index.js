import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import arrowBack from '../../assets/icons/mdi_arrow_back.png';
import logo from '../../assets/images/Logo.png';

import styles from './styles';

const Header = ({ title, showBack = true }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      { showBack ? (
        <BorderlessButton 
          onPress={navigation.goBack} 
          style={styles.backButton}
        >
          <Image source={arrowBack} style={styles.arrowBack} />
        </BorderlessButton>
      ) : (
        <View style={styles.view} />
      )}

      <Text style={styles.title}>{title}</Text>
      
      <Image source={logo} style={styles.logo}/>
    </View>
  );
}

export default Header;