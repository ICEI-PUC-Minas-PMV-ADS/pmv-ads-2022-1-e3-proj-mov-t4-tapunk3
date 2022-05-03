import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

import HomePage from './src/Pages/HomePage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OngEntrar from './src/Pages/OngEntrar';
import OngLogin from './src/Pages/OngLogin';
import Voluntarios from './src/Pages/Voluntarios';

/* const App = () => {
  return <HomePage />;
};

export default App;
 */

const Stack = createNativeStackNavigator();

export default function App() {
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="OngLogin" component={OngLogin} />
          <Stack.Screen name="OngEntrar" component={OngEntrar} />
          <Stack.Screen name="Voluntarios" component={Voluntarios} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
