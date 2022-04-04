import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Searchbar
        style={styles.pesquisa}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View>
        <Image style={styles.foto} source={require('./Imagem/Logoong.PNG')} />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Conhecer
        </Button>
        <Image style={styles.foto} source={require('./Imagem/Logoong.PNG')} />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Conhecer
        </Button>
        <Image style={styles.foto} source={require('./Imagem/Logoong.PNG')} />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Conhecer
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pesquisa: {
    margin: 10,
  },
  foto: {
    margin: 20,
    alignSelf: 'center',
    width: 180,
    height: 100,
  },
  button: {
    alignSelf: 'center',
    width: '40%',
  },
});

export default App;
