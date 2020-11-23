import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

// Screens
import Algoritmos from '../pages/Topics/Algoritmos';

// Assets
import theory from '../assets/icons/book-open.png';
import exercise from '../assets/icons/edit.png';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TopicTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Quicksand-Medium',
          fontSize: 14,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#242530',
        activeBackgroundColor: '#20212A',
        inactiveTintColor: '#3C424E',
        activeTintColor: '#EFF5F6',
      }}
    >
      <Screen
        name="Theory"
        component={Algoritmos}
        options={{
          tabBarLabel: 'Conteúdo Teórico',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image source={theory} style={styles.icon} color={focused ? '#32ACBD' : color} />
            );
          }
        }}
      />
      <Screen
        name="Exercise"
        component={Algoritmos}
        options={{
          tabBarLabel: 'Exercícios',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image source={exercise} style={styles.icon} color={focused ? '#67A8C3' : color} />
            );
          },
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
})