import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Route from './src/Navigations/Route';

import Main from './src/Navigations/Main';

  const App = () =>{
    return (
    <UserProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </UserProvider>
    );
  };

export default App;
