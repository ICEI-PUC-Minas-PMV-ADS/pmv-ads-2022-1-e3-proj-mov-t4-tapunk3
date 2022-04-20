import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CadastrarAtv = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [numvol, setNumvol] = useState('');

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
        onPress={() => console.log('Pressed')}>
        Cadastrar Atividade
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
