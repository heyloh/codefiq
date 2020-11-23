import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import AppStack from './src/routes/AppStack.js';

import SplashScreen from 'react-native-splash-screen';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AppStack />
  );
};
  
export default App;
