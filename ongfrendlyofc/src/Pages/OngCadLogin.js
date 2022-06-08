import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';


import { register } from '../services/authService';
//import { insertUser} from '../services/localLoginService'

const OngCadLogin = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

    register({
      email: email,
      password: password,
    }).then(res => {
      console.log(res);
      navigation.navigate('OngLogin');

      if(res){

        Alert.alert('Atenção', 'Usuário registrado com sucesso!', [
          {test: "OK", onPress: () => navigation.goBack()}
        ]);
      }else{
        Alert.alert('Atençao', 'Usuário não registrado!Tente novamente mais tarde :)');
      }
    });
  }

  return (
    <>
      <View>
        <Title style={styles.title}>Registre sua Ong para logar</Title>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          left={<TextInput.Icon name="account"/>}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          value={password}
          left={<TextInput.Icon name="key" />}
          onChangeText={(text) => setPassword(text)}
        />
        <SafeAreaView>          
        </SafeAreaView>
      </View>
      <View>
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}>
          Cadastrar
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  body: {
    flex: 1,
    padding: 2,
    backgroundColor: '#808080',
    margin: 10,
  },
  input: {
    margin: 1,
  },
  container: {
    margin: 10,
  },
  text: {
    fontSize: 15,
    margin: 10,
    height:150,
     
  },

    button: {
    margin: 10,
    width: '50%',
    alignSelf: 'center',
  }
});

export default OngCadLogin;