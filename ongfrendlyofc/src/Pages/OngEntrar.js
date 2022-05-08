import React, {useEffect, useState} from 'react';
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

import { insertOng } from '../services/ongService';
import { cadUser } from '../services/localLoginService';

const OngEntrar = () => {

  const navigation = useNavigation();
  const { item } = route.params ? route.params : {}; // utilizado no sqllite

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logadouro, setLogadouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');


  const [numero, setNumero] = useState('');


  //const [text, setText] = React.useState('');
  const [caixa, onChangeText] = React.useState('Quem Somos.');

  // usado no sqlite
  const [user, setUser] = useState([]);

  useEffect(() => {
    if(item){
      setName;
      setEmail;
      setPassword;
      setLogadouro;
      setCidade;
      setCep;
    }
  }, [item]);

  const handleRegister = () => {

    if(item){
      cadUser({
        name: name,
        email: email,
        password: password,
        logadouro: logadouro,
        cidade: cidade,
        cep: cep
      }).then();
    }else {
      Alert.alert('Atençao', 'Usuário não cadastrado!Tente novamente mais tarde :)');
    }

    navigation.goBack();

    // implementaçao um
 /*    cadUser({
      name: name,
      email: email,
      password: password,
      logadouro: logadouro,
      cidade: cidade,
      cep: cep
    }).then(res => {
      console.log(res);

      if(res){

        Alert.alert('Atenção', 'Usuário cadastrado com sucesso!', [
          {test: "OK", onPress: () => navigation.goBack()}
        ]);
      }else{
        Alert.alert('Atençao', 'Usuário não cadastrado!Tente novamente mais tarde :)');
      }
    }); */

  };

  // metodo utilizando o webapi
/*   const handleRegister = () => {

    insertOng({
      name: name,
      logadouro: logadouro,
      cidade: cidade,
      cep: cep,
      caixa:caixa
    }).then(res => {
      console.log(res);

      if(res){

        Alert.alert('Atenção', 'Usuário cadastrado com sucesso!', [
          {test: "OK", onPress: () => navigation.goBack()}
        ]);
      }else{
        Alert.alert('Atençao', 'Usuário não cadastrado!Tente novamente mais tarde :)');
      }
    });

  } */

  return (
    <>
      <View>
        <Title style={styles.title}>Cadastre sua Ong</Title>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.caixa}
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
{/*         <TextInput
          style={styles.caixa}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.caixa}
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        /> */}
        <TextInput
          style={styles.caixa}
          label="Logadouro"
          value={logadouro}
          onChangeText={(text) => setLogadouro(text)}
        />
        <TextInput
          style={styles.caixa}
          label="Numero"
          value={numero}
          onChangeText={(text) => setNumero(text)}
          
        />
        <TextInput
          style={styles.caixa}
          label="Cidade"
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          style={styles.caixa}
          label="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
        <SafeAreaView>
         
            <TextInput
              style={styles.text}
              onChangeText={onChangeText}
              value={caixa}
              numberOflines={20}
              multiline={true}
            />
          
        </SafeAreaView>
        <TouchableOpacity style={styles.button}>        
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button
          style={styles.cadastrar}
          mode="contained"
          onPress={handleRegister}>
          Cadastrar Ong
        </Button>
        <Button
          style={styles.cadastrar}
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
  caixa: {
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: 20,
    margin: 10,
    textAlign: 'center',
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
    width: 80,
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'yellow',
  },
  cadastrar: {
    width: 180,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#808080',
  },
});

export default OngEntrar;
