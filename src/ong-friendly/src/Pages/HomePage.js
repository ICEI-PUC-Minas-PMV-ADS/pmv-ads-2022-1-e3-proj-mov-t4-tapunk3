import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import Estilos from '../components/Estilos';
import Body from './../components/Body';
import Cadastro from './Cadastro';

const HomePage = () => {
  return (
    <Estilos>
      <Body>
        <Text style={styles.text}>Ong Friendly </Text>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          Voluntários
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          Ong
        </Button>
      </Body>
    </Estilos>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 10,
    margin: 60,
    paddingBottom: 10,
  },
});

export default HomePage;
