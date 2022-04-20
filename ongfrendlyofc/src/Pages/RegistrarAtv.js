import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Title, TextInput } from 'react-native-paper';

const RegistrarAtv = () => {
  const [text, setText] = React.useState('');
  return (
    <>
      <View style={styles.titulo}>
        <Title>Nossas Atividades</Title>
      </View>
      <View style={styles.body}>
        <TextInput
          //.label="Atividade"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Atividade</Text>
        <TextInput
          //.label="Endereço"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Endereço</Text>
        <TextInput
          //.label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Data</Text>
        <Button
          style={styles.button}
          title="Registar"
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <View style={styles.body}>
        <TextInput
          //.label="Atividade"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Atividade</Text>
        <TextInput
          //.label="Endereço"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Endereço</Text>
        <TextInput
          //.label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Data</Text>
        <Button
          style={styles.button}
          title="Registar"
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <View style={styles.body}>
        <TextInput
          //.label="Atividade"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Atividade</Text>
        <TextInput
          //.label="Endereço"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Endereço</Text>
        <TextInput
          //.label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Text style={styles.texto}>Data</Text>
        <Button
          style={styles.button}
          title="Registar"
          onPress={() => Alert.alert('Cannot press this one')}
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
