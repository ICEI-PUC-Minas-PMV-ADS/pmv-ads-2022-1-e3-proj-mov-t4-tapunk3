import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Cadastroong = () => {
  const [email, setEmail] = '';
  const [password, setPassword] = '';

  return (
    <>
      <View style={styles.foto}>
        <Image source={require('../components/Logoong.PNG')}></Image>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>ONG</Text>
        <TextInput
          style={styles.input}
          label="E-mail"
          value={password}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Entrar
        </Button>
        <Button
          style={styles.button}
          icon="account"
          mode="text"
          onPress={() => console.log('Pressed')}>
          Cadastro
        </Button>
        <Button
          style={styles.button2}
          icon="magnify"
          mode="text"
          onPress={() => console.log('Pressed')}>
          Perdeu a Senha ?
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

  text: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    margin: 2,
    width: '70%',
    alignSelf: 'center',
  },
  button: {
    margin: 10,
    width: '50%',
    alignSelf: 'center',
  },
  button2: {
    marginTop: 20,
  },
});

export default Cadastroong;
