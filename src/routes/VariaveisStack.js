import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Topics
import FirstPart from '../pages/Topics/Variaveis/FirstPart';
import SecondPart from '../pages/Topics/Variaveis/SecondPart';
import FinishTopic from '../pages/Topics/FinishTopic';

// Components
import Header from '../components/Header';

const {Navigator, Screen} = createStackNavigator();

const VariaveisStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="FirstPart"
        component={FirstPart}
        options={{
          headerShown: true,
          header: () => <Header title="Variáveis" />,
        }}
      />
      <Screen
        name="SecondPart"
        component={SecondPart}
        options={{
          headerShown: true,
          header: () => <Header title="Variáveis" />,
        }}
      />

      <Screen name="FinishTopic" component={FinishTopic} />
    </Navigator>
  );
};

export default VariaveisStack;
