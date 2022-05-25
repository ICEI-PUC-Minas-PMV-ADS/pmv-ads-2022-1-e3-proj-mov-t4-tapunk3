import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Title, TextInput } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';
import {insertAtividades} from '../services/atividadeService';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RegistrarAtv = () => {

  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [endereco, setEndereco] = useState('');
  const [data, setData] = useState('');

  const handleRegistrarAtv = () => {
    insertAtividades({
      name: name,
      endereco: endereco,
      data: data
    }).then( res => {
      console.log(res);
      navigation.navigate('OngEntrar');
      //navigation.goBack();

     /* if(res){
          Alert.alert('Atenção', 'Atividade REGISTRADA com sucesso!'),[
         { text: "OK", onPress: () => navigation.navigate('Listar Atividades') }]
         
      }else{
        Alert.alert('Atenção', 'Atividade NÃO registrada, tente novamente, preencha todos os campos para prosseguir!');

      }*/
           
    });
  }
  return (
    <>
      <View style={styles.titulo}>
        <Title>Nossas Atividades</Title>
      </View>
      
      <View style={styles.body}>
        <TextInput
          //.label="Atividade"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.texto}>Atividade</Text>
        <TextInput
          //.label="Endereço"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
        />
        <Text style={styles.texto}>Endereço</Text>
        <TextInput
          //.label="Email"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <Text style={styles.texto}>Data</Text>
        
        <Button
          style={styles.button}
          title="Registar"
          onPress= {handleRegistrarAtv}
        />
              
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titulo: {
    marginTop: 10,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  body: {
    margin: 8,
    backgroundColor: '#808080',
    padding: 15,
  },
  texto: {
    fontWeight: 'bold',
  },
  button: {
    textShadowColor: 'red',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default RegistrarAtv;
