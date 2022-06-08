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
  const [logadouro, setLogadouro] = useState ('');
  const [numero, setNumero] = useState ('');
  const [descricao, setDescricao] = useState('');

    useEffect(() =>{
    if(item){
      setNome(item.name);
      setCidade(item.cidade);
      setLogadouro(item.logadouro);
      setNumero(item.numero);
      setDescricao(item.descricao);
    }
  }, [item]);

   const teste = item;
    
    /*const handleGetOng = () => {
      if(item){
        getOng({
        name: nome,
        cidade: cidade,
        descricao: descricao
    }).then( res =>  {
      console.log(res);
    });
      }
  }*/


  return (
    <Container>
          <Card>
            <Card.Content>
            <Title/>
            <Paragraph>Nome: {teste.name}</Paragraph>
            <Paragraph>Quem somos: {teste.descricao}</Paragraph>
            <Paragraph>Endereço: {teste.logadouro}{teste.numero}</Paragraph>
            <Paragraph>Cidade: {teste.cidade}</Paragraph>
            </Card.Content>
          </Card>

        <Button
        style={styles.button}
        mode="contained" 
        onPress={() => navigation.navigate('Atividades da Ong', {item} )}>
        Nossas Atividades
      </Button>
    </Container>
  );
};
const styles = StyleSheet.create({
  button: {
    margin: 10,
    width: '70%',
    alignSelf: 'center',
  }
});

export default DetalhesOng;