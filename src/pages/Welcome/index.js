import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Decoration from '../../assets/images/Decoration.png';
import Logo from '../../assets/images/Logo.png';

const Welcome = () => {
  const { navigate } = useNavigation();

  function handleNavigateToLogin() {
    navigate('Login');
  }

  function handleNavigateToRegister() {
    navigate('Register');
  }

  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Decoration} style={styles.decoration}/>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.buttonContainer}>    
        <TouchableOpacity 
          style={styles.buttonPrimary}
          onPress={handleNavigateToLogin}
        >
          <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonSecondary}
          onPress={handleNavigateToRegister}
        >
          <Text style={styles.buttonTextSecondary}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;