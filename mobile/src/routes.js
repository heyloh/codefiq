import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';

const AppStack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Register" component={Register} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}