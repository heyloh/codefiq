import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

// Topics
import TopicTabs from './TopicTabs';

// Components
import Header from '../components/Header';

const { Navigator, Screen }= createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: true,
            header: () => <Header title="Home" showBack={false} /> 
          }} 
        />
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen 
          name="Topic" 
          component={TopicTabs} 
          options={{
            headerShown: true,
            header: () => <Header title="Tópico" /> 
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
