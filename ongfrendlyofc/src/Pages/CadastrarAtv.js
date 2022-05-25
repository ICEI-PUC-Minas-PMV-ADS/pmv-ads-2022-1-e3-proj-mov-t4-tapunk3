import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {insertAtividades} from '../services/atividadeService';


const CadastrarAtv = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [numvol, setNumvol] = useState('');

  
  const handleCadastrarAtv = () => {
    insertAtividades({
      name: nome,
      numvol: numvol,
      data: data
    }).then( res => {
      console.log(res);
      navigation.navigate('Listar Atividades') 

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
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          label="Data"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <TextInput
          style={styles.input}
          label="Numero de Voluntários"
          value={numvol}
          onChangeText={(text) => setNumvol(text)}
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
