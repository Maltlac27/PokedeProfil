//App.js
import Pokemons from './components/Pokemons';
import Details from './components/Details';
import React, { useState } from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function CompteurTabScreen() {
  const [count, setCount] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, [])
  );

  return (
    <Compteur count={count} />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pokémons" component={Pokemons} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}