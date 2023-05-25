//App.js
import Pokemons from './Components/Pokemons';
import Details from './Components/DetailsScreen';
import mainScreen from './Components/MainScreen'
import React, { useState } from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pokémons" component={Pokemons} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
