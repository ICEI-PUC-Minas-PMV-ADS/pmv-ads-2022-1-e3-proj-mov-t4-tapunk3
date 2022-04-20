import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

const OngEntrar = () => {
  const [text, setText] = React.useState('');
  const [caixa, onChangeText] = React.useState('Quem Somos.');

  return (
    <>
      <View>
        <Title style={styles.title}>Cadaste sua Ong</Title>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.caixa}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.caixa}
          label="Senha"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.caixa}
          label="Nome"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.caixa}
          label="Logadouro"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.caixa}
          label="Numero"
          value={text}
          onChangeText={(text) => setText(text)}
          
        />
        <TextInput
          style={styles.caixa}
          label="Cidade"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.caixa}
          label="CEP"
          value={text}
          onChangeText={(text) => setText(text)}
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
          onPress={() => console.log('Pressed')}>
          Cadastrar Ong
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
