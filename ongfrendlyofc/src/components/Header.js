import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
  return <Text style={styles.text}>Ong Friendly </Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
    fontWeight: 'bold',
  },
});

export default Header;
