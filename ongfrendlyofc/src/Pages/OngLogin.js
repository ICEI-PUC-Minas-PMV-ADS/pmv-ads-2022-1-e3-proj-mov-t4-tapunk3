import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import { NavigationActions, StackActions } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import {useUser} from '../contexts/UserContext';
import { login } from '../services/authService';

const LoginOng = () => {

  const navigation = useNavigation();
 // const {setSigned, setName} = useUser();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = ( ) => {
    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res)
      navigation.navigate('HomeOng');

     /* if(res && res.user){
      setSigned(true);
      setName(res.user.name);
       AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
     
      }else{
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }*/
    });
  }

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
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleLogin}> 
          Entrar
        </Button>
        <Button
          style={styles.button}
          icon="account"
          mode="text"
          onPress={() => navigation.navigate('Ong cadastro Login')}>
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

export default LoginOng;

