import React, { useState, useEffect, } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { TextInput, Button,  }  from 'react-native-paper';

import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header';
import Body from '../components/body';

import {useNavigation} from '@react-navigation/native';

import {updateAtividades, insertAtividades} from '../services/atividadeService';


const CadastrarAtv = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [nome, setNome] = useState('');
  const [nvoluntarios, setNvolutarios] = useState('');
  const [detalhesatv, setDetalhesatv] = useState('');
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));
    useEffect(() =>{
    if(item){
      setNome(item.nome);
      setNvolutarios(item.nvoluntarios);
      setDetalhesatv(item.detalhesatv);
      setData(item.data);
    }
  }, [item]);

    const handleCadastrarAtv = () => {
    insertAtividades({
      name: nome,
      detalhesatv: detalhesatv,
      nvoluntarios: nvoluntarios,
      data: data
    }).then( res =>  {
      console.log(res);
      navigation.navigate('ListarAtividades');

      if(res){
      Alert.alert('Atenção', 'Atividade REGISTRADA com sucesso!'),[
         { text: "OK", onPress: () => navigation.navigate('Listar Atividades') }]
         
      }else{
        Alert.alert('Atenção', 'Atividade NÃO registrada, tente novamente, preencha todos os campos para prosseguir!');

      }

  /*const handleCadastrarAtv = () => {
    if(item){
      updateAtividades({
      nome: nome,
      numvol: numvol,
      data: data,
      id: item.id
      }).then(res => {
        navigation.goBack();
      });
    }else{
    insertAtividades({
      nome: nome,
      numvol: numvol,
      data: data
    }).then( res => {
      console.log(res);
      navigation.navigate('Listar Atividades')*/
    });
  }

  return (
    <>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          label="Nome: "
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          label="Data: "
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <TextInput
          style={styles.input}
          label="Detalhes da atividade: "
          value={detalhesatv}
          onChangeText={(text) => setDetalhesatv(text)}
        />
        <TextInput
          style={styles.input}
          label="Nº de Voluntários: "
          value={nvoluntarios}
          onChangeText={(text) => setNvolutarios(text)}
        />
      </View>
      <Button
        style={styles.button}
        mode="contained" 
        onPress={handleCadastrarAtv}>
        Cadastrar Atividade
      </Button>
      <Button 
        style={styles.button}
        mode="contained" 
        onPress={() => navigation.goBack()}>
        Cancelar
      </Button>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    margin: 80,
    marginTop: 80,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    margin: 1,
  },
  button: {
    margin: 10,
    width: '70%',
    alignSelf: 'center',
  }
});

export default CadastrarAtv;