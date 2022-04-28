import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { Title, Button } from 'react-native-paper';

const Atividade = () => {
  return (
    <View style={styles.body}>
      <Title style={styles.titleText}>Ong Friendly</Title>
      <View>
        <Image
          style={styles.foto}
          source={require('../components/Logoong.PNG')}></Image>
      </View>
      <View>
        <Text style={styles.texto}>
          {' '}
          Somos o cantinho do Gato, Uma Ong que cuida de gatos abandonados na
          região da estação da Luz, venha nos conhecer.
        </Text>
        <View style={styles.button}>
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Nossas Atividades
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    margin: 8,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 15,
  },
  foto: {
    alignSelf: 'center',
    marginTop: 25,
    width: '70%',
    height: '500%',
  },
  texto: {
    marginTop: 160,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    width: '75%',
    backgroundColor: '#C0C0C0',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
  },
});

export default Atividade;
