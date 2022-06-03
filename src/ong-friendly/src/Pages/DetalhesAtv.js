import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import Estilos from '../components/Estilos';
import Body from '../components/body';
import Header from '../components/Header';
import OngLogin from '../Navigations/Auth';
import Voluntarios from './Voluntarios';
import {useNavigation} from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetalhesAtv({navigation}){
  return (
    <Estilos>
      <Header text={'Ong Friendly'} />
      <Body>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('Voluntarios')}>
          Voluntários
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('OngLogin')}>
          Ong
        </Button>
      </Body>
    </Estilos>
  );
}
const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    margin: 60,
    paddingBottom: 10,
  },
});

export default DetalhesAtv;
