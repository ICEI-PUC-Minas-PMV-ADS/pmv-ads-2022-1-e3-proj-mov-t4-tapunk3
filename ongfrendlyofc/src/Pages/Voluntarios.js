import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Alert, Image, FlatList, SafeAreaView } from 'react-native';
import { TextInput, Button, Title, FAB, List, Appbar } from 'react-native-paper';

import HeaderAtv from '../components/HeaderAtv';
import Body from '../components/body';
import Container from '../components/Container';


import {useNavigation} from '@react-navigation/native';
import {getOng } from '../services/ongService';
import {useIsFocused} from '@react-navigation/native';

const Voluntario  = ({ route }) => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [ongLista, setOng] = useState([]);
  const { item } = route.params ? route.params : {};
  
    useEffect(() => {
    getOng().then(dados => {
      console.log(dados);
      setOng(dados);
    });
  }, [isFocused]);


    const renderItem = ({ item }) => (
    <List.Item 
        title= {item.name}
        description={"Quem Somos: " +  item.descricao}
        left={(props) => (
        <List.Icon
          {...props}
          color={'black'}
        />
        )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
    onPress={() => navigation.navigate('DetalhesOng', {item})}
      />
  );

  return (
    <Container>
    <View>
        <Title style={styles.title}>Nossas ONG</Title>
      </View>
      <Body>
        <FlatList
        data={ongLista}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </Body>
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
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    margin: 1,
  },
  button: {
    margin: 10,
    width: '50%',
    alignSelf: 'center',
  }
});
export default Voluntario;
