import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import CadastrarAtv from './CadastrarAtv';
import ListarAtv from './ListarAtv';
import {useNavigation} from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ongAtividade} from '../services/authService'

const OngAtividade = () => {

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.foto}>
        <Image source={require('../components/Logoong.PNG')}></Image>
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Cadastrar Atividades')}>
          Cadastrar Atividade
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Listar Atividades')}>
          Listar Atividade
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  foto: {
    alignSelf: 'center',
    paddingTop: 50,
  },

  button: {
    margin: 60,

    width: '80%',
    alignSelf: 'center',
  },
});

export default OngAtividade;
