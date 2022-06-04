import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

const Container = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({  container: {    flex: 1,    marginTop: StatusBar.currentHeight || 0,  }


});

export default Container;