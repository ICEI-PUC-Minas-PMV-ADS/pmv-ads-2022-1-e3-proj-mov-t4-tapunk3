import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HeaderAtv = ({ title }) => {
  return <Text style={styles.text}>Atividades</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
    fontWeight: 'bold',
  },
});

export default HeaderAtv;
