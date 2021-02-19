import React, { useState } from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

import HeaderForm from '../../assets/images/HeaderForm.png';
import Stairs from '../../assets/images/Stairs.png';
import FooterDeco from '../../assets/images/FooterDeco.png';

import api from '../../services/api';

import styles from './styles';

const Login = () => {
  const { navigate } = useNavigation();

  /* const [isSelected, setSelection] = useState(false); */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avoidKeyboard, setAvoidKeyboard] = useState(false);

  const [errMsg, setErrMsg] = useState(false);

  function handleNavigateToRegister() {
    navigate('Register');
  }

  async function handleUserLogin() {
    const data = {
      email,
      password
    };

    try {
      const response = await api.post('sign-in', data);

      if (response.data.token) {
        setErrMsg(false);
        navigate('Home');
      }

    } catch (e) {
      setErrMsg(true);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={'position'}
      style={styles.container}
      enabled={avoidKeyboard}
    >
      <Image source={HeaderForm} style={styles.headerForm} />

      <Image source={Stairs} style={styles.footerStairs} />
      <Image source={FooterDeco} style={styles.footerDeco} />

      <View
        style={styles.formContainer}
      >
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>Faça login</Text>
          <TouchableOpacity
            style={styles.formAltButton}
            onPress={handleNavigateToRegister}
          >
            <Text style={styles.formAlt}>criar uma conta</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.formInput}
          placeholder="E-mail"
          placeholderTextColor="#989EA6"
          returnKeyType="next"
          onFocus={() => setAvoidKeyboard(false)}
          onChangeText={email => setEmail(email)}
          defaultValue={email}
        >

        </TextInput>
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

        {/* <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{
              true: '#32ACBD',
              false: '#32ACBD'
            }}
          />
          <Text style={styles.checkboxLabel}>Lembrar de mim</Text>
        </View> */}

        {errMsg ? (
          <Text style={styles.errMsg}>E-mail e/ou senha incorretos.</Text>
        ) : <View />}

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={handleUserLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  );
}

export default Login;