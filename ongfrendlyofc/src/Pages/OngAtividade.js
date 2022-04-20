import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';

const OngAtividade = () => {
  return (
    <>
      <View style={styles.foto}>
        <Image source={require('../components/Logoong.PNG')}></Image>
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Cadastrar Atividade
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
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
