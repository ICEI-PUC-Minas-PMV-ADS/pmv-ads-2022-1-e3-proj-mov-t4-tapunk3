import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Alert, Image, FlatList, SafeAreaView } from 'react-native';
import { TextInput, Button, Title, FAB, List, Appbar } from 'react-native-paper';

import HeaderAtv from '../components/HeaderAtv';
import Body from '../components/body';
import Container from '../components/Container';


import {useNavigation} from '@react-navigation/native';
import {getAtividades, deleteAtividades} from '../services/atividadeService';

import {useIsFocused} from '@react-navigation/native';

const ListarAtv = ({ route }) => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [listarAtv, setAtividades] = useState([]);
    const { item } = route.params ? route.params : {};

    useEffect(() => {
    getAtividades().then(dados => {
      console.log(dados);
      setAtividades(dados);
    });
  }, [isFocused]);

    const handleExcluir = () => {
    deleteAtividades(item.id).then(res => {
      navigation.goBack();
    } );
  };

    const renderItem = ({ item }) => (
    <List.Item 
        title= {"Nome: " + item.name}
        description={"Nº de voluntários: " + item.nvoluntarios}
        left={(props) => (
        <List.Icon
          {...props}
          color={'black'}
          icon="book-open-variant"
        />
        )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
    onPress={() => navigation.navigate('Detalhe da atividade', {item})}
      />
  );

  //.const bodyText = "Lista de Atividade";
  return (
    <Container>
      <HeaderAtv title={'Lista de Atividades'}>
      </HeaderAtv>
      <Body>
        <FlatList
        data={listarAtv}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </Body>
    </Container>
  );
};
  const styles = StyleSheet.create({
    item: {
    backgroundColor: '#7b68ee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  });

export default ListarAtv;