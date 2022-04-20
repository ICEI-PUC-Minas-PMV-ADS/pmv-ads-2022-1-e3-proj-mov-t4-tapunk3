import React from 'react';
import { StyleSheet, View, Text, Alert, Image } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const ListarAtv = () => {
  const [nome, setNome] = React.useState('');
  const [data, setData] = React.useState('');
  const [vol, setVol] = React.useState('');

  //.const bodyText = "Lista de Atividade";
  return (
    <>
      <View>
        <Image
          style={styles.foto}
          source={require('../components/Logoong.PNG')}
        />
        <View style={styles.titulo}>
          <Title>Lista de Atividades</Title>
        </View>
      </View>
      <View style={styles.body}>
        <TextInput
          //.label="Atividade"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={styles.texto}>Nome</Text>
        <TextInput
          //.label="Endereço"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <Text style={styles.texto}>Data</Text>
        <TextInput
          //.label="Email"
          value={vol}
          onChangeText={(text) => setVol(text)}
        />
        <Text style={styles.texto}>Numero de Voluntários</Text>

        <Button
          style={styles.button}
          icon="trash-can"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Apagar Atividade
        </Button>
      </View>
      <View style={styles.body}>
        <TextInput
          //.label="Atividade"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={styles.texto}>Nome</Text>
        <TextInput
          //.label="Endereço"
          value={data}
          onChangeText={(text) => setData(text)}
        />
        <Text style={styles.texto}>Data</Text>
        <TextInput
          //.label="Email"
          value={vol}
          onChangeText={(text) => setVol(text)}
        />
        <Text style={styles.texto}>Numero de Voluntários</Text>

        <Button
          style={styles.button}
          icon="trash-can"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Apagar Atividade
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  foto: {
    alignSelf: 'center',
    marginTop: 10,
    width: 200,
    height: 150,
  },
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
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
export default ListarAtv;
