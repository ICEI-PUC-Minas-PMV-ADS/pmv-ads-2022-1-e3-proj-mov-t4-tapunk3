import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Alert, Image, FlatList, SafeAreaView } from 'react-native';
import { TextInput, Button, Title, FAB, List, Appbar, Card, Paragraph } from 'react-native-paper';

import Header from '../components/Header';
import Body from '../components/body';
import Container from '../components/Container';

import {useNavigation} from '@react-navigation/native';

import {getOng} from '../services/ongService';


const DetalhesOng = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [show, setShow] = useState(false);

  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [descricao, setDescricao] = useState('');

    useEffect(() =>{
    if(item){
      setNome(item.name);
      setCidade(item.cidade);
      setDescricao(item.descricao);
    }
  }, [item]);

    const handleGetOng = () => {
      if(item){
        getOng({
        name: nome,
        cidade: cidade,
        descricao: descricao
    }).then( res =>  {
      console.log(res);
    });
      }
  }


  return (
    <Container>
          <Card>
            <Card.Content>
            <Title title= {nome} />
            <Paragraph>Card content</Paragraph>
            </Card.Content>
          </Card>

        <Button
        style={styles.button}
        mode="contained" 
        onPress={console.log}>
        Nossas Atividades
      </Button>
    </Container>
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

export default DetalhesOng;