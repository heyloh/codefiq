import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BorderlessButton} from 'react-native-gesture-handler';

import {UserContext} from '../../contexts/UserContext';

import arrowBack from '../../assets/icons/mdi_arrow_back.png';
import logout from '../../assets/icons/log-out.png';
import logo from '../../assets/images/Logo.png';

import styles from './styles';

const Header = ({title, showBack = true}) => {
  const {logoutUser} = useContext(UserContext);
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      {title === 'Home' ? (
        <BorderlessButton onPress={logoutUser} style={styles.backButton}>
          <Image source={logout} style={styles.arrowBack} />
        </BorderlessButton>
      ) : null}

      {showBack ? (
        <BorderlessButton
          onPress={handleNavigateToHome}
          style={styles.backButton}>
          <Image source={arrowBack} style={styles.arrowBack} />
        </BorderlessButton>
      ) : null}

      <Text style={styles.title}>{title}</Text>

      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Header;
