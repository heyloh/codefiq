import React, { useState } from 'react';

import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import HeaderRegisterForm from '../../assets/images/HeaderRegisterForm.png';
import Stairs from '../../assets/images/Stairs.png';

import styles from './styles';

const Register = () => {
  const { navigate } = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [avoidKeyboard, setAvoidKeyboard] = useState(false);

  function handleNavigateToLogin() {
    navigate('Login');
  }

  return (
    <KeyboardAvoidingView
      behavior={'position'}
      style={styles.container}
      enabled={avoidKeyboard}
    >
      <Image source={HeaderRegisterForm} style={styles.headerForm} />

      <Image source={Stairs} style={styles.footerStairs} />

      <View
        style={styles.formContainer}
      >
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>Crie uma conta</Text>
          <TouchableOpacity
            style={styles.formAltButton}
            onPress={handleNavigateToLogin}
          >
            <Text style={styles.formAlt}>fazer login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.labelInput}>Nome de usuário</Text>
        <TextInput
          style={styles.formInput}
          placeholder="hilorena"
          placeholderTextColor="#989EA6"
          returnKeyType="next"
          onFocus={() => setAvoidKeyboard(false)}
          onChangeText={username => setUsername(username)}
          defaultValue={username}
        >

        </TextInput>

        <Text style={styles.labelInput}>E-mail</Text>
        <TextInput
          style={styles.formInput}
          placeholder="lorena@email.com"
          placeholderTextColor="#989EA6"
          returnKeyType="next"
          onFocus={() => setAvoidKeyboard(false)}
          onChangeText={email => setEmail(email)}
          defaultValue={email}
        >

        </TextInput>

        <Text style={styles.labelInput}>Senha</Text>
        <TextInput
          style={styles.formInput}
          placeholder="•••••"
          placeholderTextColor="#989EA6"
          returnKeyType="done"
          autoCorrect={false}
          secureTextEntry={true}
          onFocus={() => setAvoidKeyboard(true)}
          onChangeText={password => setPassword(password)}
          defaultValue={password}
        >

        </TextInput>

        <Text style={styles.labelInput}>Repita a senha</Text>
        <TextInput
          style={styles.formInput}
          placeholder="•••••"
          placeholderTextColor="#989EA6"
          returnKeyType="done"
          autoCorrect={false}
          secureTextEntry={true}
          onFocus={() => setAvoidKeyboard(true)}
          onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)}
          defaultValue={passwordConfirmation}
        >

        </TextInput>

        <TouchableOpacity
          style={styles.buttonPrimary}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}

export default Register;