import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import Estilos from '../components/Estilos';
import Body from '../components/body';
import Header from '../components/Header';
import Ong from './Ong';
import Voluntarios from './Voluntarios';

const HomePage = () => {
  return (
    <Estilos>
      <Header text={'Ong Friendly'} />
      <Body>
        <Button
          mode="contained"
          style={styles.button}
          onPress={(Voluntarios) => console.log('Pressed')}>
          Voluntários
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={(Ong) => console.log('Pressed')}>
          Ong
        </Button>
      </Body>
    </Estilos>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    margin: 60,
    paddingBottom: 10,
  },
});

export default HomePage;
