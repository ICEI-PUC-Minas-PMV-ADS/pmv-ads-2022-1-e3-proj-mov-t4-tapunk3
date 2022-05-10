import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import  AsyncStorage  from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';
import { login } from '../services/authService';
import { getUser, insertUser } from './localLoginService';

import { useIsFocused } from '@react-navigation/native'; 

const LoginOng = () => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  //const {setSigned, setName} = useUser(); // este cara está quebrando a aplicaçao verificar com o monitor.

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // usado no sqllite
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then(dados => {
      console.log(dados);
      setUser(dados);
      });
  }, [isFocused]);

  const handleLogin = ( ) => {
    insertUser({
      email: email,
      password: password, 
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res. accessToken).then();
        navigation.navigate('Ong Atividade');
      }else{
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  }

  // metodo usando o jsonserver

/*   const handleLogin = ( ) => {
    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res. accessToken).then();
      }else{
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  } */

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
          //value={email}
          value={user.email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          //value={password}
          value={user.password}
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
