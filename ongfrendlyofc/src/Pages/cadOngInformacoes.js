import React, {useState,  useEffect,} from 'react';
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

import { register } from '../services/authService';
import { insertOng } from '../services/ongService'

const OngEntrar = ({ route }) => {

  const navigation = useNavigation();    const { item } = route.params ? route.params : {};

  const [name, setName] = useState('');
  const [logadouro, setLogadouro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [descricao, setDescricao] = useState('');

  //const [text, setText] = React.useState('');

  useEffect(() =>{
    if(item){
      setName(item.name);
      setLogadouro(item.logadouro);
      setNumero(item.numero);
      setCidade(item.cidade);
      setCep(item.cep);
      setDescricao(item.descricao);
    }
  }, [item]);

  const handleRegister = () => {

    insertOng({
      name: name,
      logadouro: logadouro,
      cidade: cidade,
      cep: cep,
      descricao: descricao
    }).then(res => {
      navigation.navigate('HomeOng');

      if(res){

        Alert.alert('Atenção', 'Usuário cadastrado com sucesso!', [
          {test: "OK", onPress: () => navigation.goBack()}
        ]);
      }else{
        Alert.alert('Atençao', 'Usuário não cadastrado!Tente novamente mais tarde :)');
      }
    });

  }

  return (
    <>
    <View>
        <Title style={styles.title}>Informações sobre a ONG</Title>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          label="Nome:"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          label="Logadouro:"
          value={logadouro}
          onChangeText={(text) => setLogadouro(text)}
        />
        <TextInput
          style={styles.input}
          label="Número:"
          value={numero}
          onChangeText={(text) => setNumero(text)}
          
        />
        <TextInput
          style={styles.input}
          label="Cidade:"
          value={cidade}
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          style={styles.input}
          label="CEP:"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />
          <TextInput
              style={styles.text}
              label="Descrição da ONG:"
              value={descricao}
              onChangeText={(text) => setDescricao(text)}
            />
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
          mode="outlined"
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
    marginTop: 20,
  },
    body: {
    margin: 80,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    margin: 1,
  },
  button: {
    margin: 10,
    width: '50%',
    alignSelf: 'center',
  }
});

export default OngEntrar;
