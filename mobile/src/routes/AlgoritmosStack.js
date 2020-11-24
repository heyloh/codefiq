import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Topics
import FirstPart from '../pages/Topics/Algoritmos/FirstPart';
import SecondPart from '../pages/Topics/Algoritmos/SecondPart';
import FinishTopic from '../pages/Topics/FinishTopic';

// Components
import Header from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="FirstPart"
        component={FirstPart}
        options={{
          headerShown: true,
          header: () => <Header title="Algoritmos" />
        }}
      />
      <Screen
        name="SecondPart"
        component={SecondPart}
        options={{
          headerShown: true,
          header: () => <Header title="Algoritmos" />
        }}
      />

      <Screen
        name="FinishTopic"
        component={FinishTopic}
      />
    </Navigator>
  );
}
