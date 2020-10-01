import React from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';

import HeaderForm from '../../assets/images/HeaderForm.png';

import styles from './styles';

const Login = () => {
  return( 
    <View style={styles.container}>
      <Image source={HeaderForm} style={styles.headerForm} />

      <View style={styles.formContainer}>
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>Faça login</Text>
          <View style={styles.formAltContainer}>
            <Text style={styles.formAlt}>criar uma conta</Text>
          </View>
        </View>
        
        <TextInput  style={styles.formInput}>

        </TextInput>
        <TextInput  style={styles.formInput}>
          
        </TextInput>

        <TouchableOpacity 
          style={styles.buttonPrimary}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;