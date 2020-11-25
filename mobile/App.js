import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';

import AppStack from './src/routes/AppStack.js';

import SplashScreen from 'react-native-splash-screen';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#20212B" barStyle="light-content" />
      <AppStack />
    </>
  );
};
  
export default App;
